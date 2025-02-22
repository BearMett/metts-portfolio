import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

interface ComponentProps {
  children: React.ReactNode;
}

const components: React.ComponentProps<any> = {
  h1: ({ children }: ComponentProps) => (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <h1 className="text-5xl font-bold mt-8 mb-4">{children}</h1>
    </div>
  ),
  h2: ({ children }: ComponentProps) => (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
      <h2 className="text-4xl font-semibold mt-6 mb-3">{children}</h2>
    </div>
  ),
  h3: ({ children }: ComponentProps) => <h3 className="text-3xl font-medium mt-5 mb-2">{children}</h3>,
  h4: ({ children }: ComponentProps) => <h4 className="text-2xl font-medium mt-4 mb-2">{children}</h4>,
  p: ({ children }: ComponentProps) => <p className="text-xl mt-4 mb-4">{children}</p>,
  blockquote: ({ children }: ComponentProps) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
    const isInternal = href?.startsWith('/') || href?.startsWith('#');
    if (isInternal && href) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        {children}
      </a>
    );
  },
  ul: ({ children }: ComponentProps) => <ul className="list-disc list-inside mt-4 mb-4">{children}</ul>,
  ol: ({ children }: ComponentProps) => <ol className="list-decimal list-inside mt-4 mb-4">{children}</ol>,
  code: ({ children }: ComponentProps) => <code className="bg-gray-100 rounded px-1 py-0.5">{children}</code>,
  pre: ({ children }: ComponentProps) => <pre className="bg-gray-100 rounded p-4 overflow-auto">{children}</pre>,
};

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <article className={`prose dark:prose-invert max-w-none ${className ?? ''}`}>
      <MDXRemote
        source={content}
        options={{
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
        }}
        components={components}
      />
    </article>
  );
}
