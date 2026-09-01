import { useFetch } from '../../../hooks/useFetch';
import postsData from '../../../data/blog.json';
import { blogImages } from '../../../data/blogImages';

const posts = postsData.map((p) => ({
  ...p,
  image: { ...p.image, src: blogImages[p.slug] ?? p.image.src }
}));

export function useBlogPosts() {
  return useFetch(() => Promise.resolve(posts), []);
}

export function useBlogPost(slug) {
  return useFetch(() => Promise.resolve(posts.find((p) => p.slug === slug) || null), [slug]);
}
