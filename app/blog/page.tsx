import Link from 'next/link';
import { getAllMarkdownFiles } from '@/lib/markdown';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function BlogPage() {
  const posts = await getAllMarkdownFiles(path.join(process.cwd(), 'app/blog'));

  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>{post.metadata.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {post.metadata.date && (
                    <time dateTime={post.metadata.date}>
                      {new Date(post.metadata.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                </p>
                {post.metadata.description && <p className="mt-2 text-muted-foreground">{post.metadata.description}</p>}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
