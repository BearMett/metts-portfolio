import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { z } from 'zod';

const metadataSchema = z.object({
  title: z.string().optional(),
  date: z.string().optional(),
  description: z.string().optional(),
});

type _Metadata = z.infer<typeof metadataSchema>;

export async function getMarkdownContent(filepath: string) {
  const fileContent = fs.readFileSync(filepath, 'utf8');

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
        ],
      },
    },
  });

  const metadata = metadataSchema.parse(frontmatter);

  return { metadata, content, fileContent };
}

export async function getAllMarkdownFiles(directory: string) {
  const files = fs.readdirSync(directory);
  const markdownFiles = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const filepath = path.join(directory, file);
        const { metadata, content } = await getMarkdownContent(filepath);
        return {
          slug: file.replace('.md', ''),
          filepath,
          metadata,
          content,
        };
      }),
  );

  return markdownFiles.sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date) : new Date(0);
    const dateB = b.metadata.date ? new Date(b.metadata.date) : new Date(0);
    return dateB.getTime() - dateA.getTime();
  });
}
