import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts, PostsResponse } from '../api/posts';

export const usePosts = () => {
  return useInfiniteQuery<PostsResponse, Error>({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
