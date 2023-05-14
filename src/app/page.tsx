import styles from './page.module.scss';
import type { Blog } from '@/types/blog';
import { client } from 'src/libs/client';

export default async function Home() {
  const data = await client.get({ endpoint: 'blog' });
  console.log('data:', data);

  const blogs: Blog[] = data.contents;
  console.log('blogs:', blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.blog}>
          <a href={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.publishedAt}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
