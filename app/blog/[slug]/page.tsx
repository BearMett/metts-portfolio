import { getMarkdownContent, getAllMarkdownFiles } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllMarkdownFiles(path.join(process.cwd(), 'app/blog'));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const filepath = path.join(process.cwd(), 'app/blog', `${params.slug}.md`);

  try {
    const { metadata, content, fileContent } = await getMarkdownContent(filepath);

    return (
      <div className="container max-w-4xl py-8 md:py-12">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">{metadata.title}</h1>
            {metadata.date && (
              <time dateTime={metadata.date} className="text-sm text-muted-foreground">
                {new Date(metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </header>
          <MarkdownContent content={fileContent} />
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
