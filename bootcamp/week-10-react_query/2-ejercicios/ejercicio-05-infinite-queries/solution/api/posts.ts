export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsResponse {
  posts: Post[];
  nextPage: number | null;
  totalPages: number;
}

const POSTS_PER_PAGE = 5;
const TOTAL_POSTS = 23;

const allPosts: Post[] = Array.from({ length: TOTAL_POSTS }, (_, i) => ({
  id: i + 1,
  title: `Post #${i + 1}: Título del artículo`,
  body: `Este es el contenido del post ${i + 1}. Lorem ipsum dolor sit amet.`,
}));

export const fetchPosts = async (
  pageParam: number = 1,
): Promise<PostsResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const totalPages = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE);
  const start = (pageParam - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const posts = allPosts.slice(start, end);

  return {
    posts,
    nextPage: pageParam < totalPages ? pageParam + 1 : null,
    totalPages,
  };
};
