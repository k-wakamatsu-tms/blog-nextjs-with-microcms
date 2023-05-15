// import type { Blog } from '@/types/blog';
import { client } from 'src/libs/client';

export default async function BlogPage({ params }: { params: { id: string } }) {
  const data = await client.get({ endpoint: 'blog', contentId: params.id });
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: `${data.body}` }} />
    </div>
  );
}
