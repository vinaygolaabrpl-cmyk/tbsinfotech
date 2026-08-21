import { useFetch } from '../../../hooks/useFetch';
import posts from '../../../data/blog.json';

export function useBlogPosts() {
  return useFetch(() => Promise.resolve(posts), []);
}

export function useBlogPost(slug) {
  return useFetch(() => Promise.resolve(posts.find((p) => p.slug === slug) || null), [slug]);
}
