import { usePosts } from '../hooks/usePosts';

export const PostList: React.FC = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts();

  if (isLoading) return <div>Cargando posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  return (
    <div>
      <h2>📰 Posts ({allPosts.length} cargados)</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {allPosts.map((post) => (
          <li
            key={post.id}
            style={{
              padding: '1rem',
              margin: '0.5rem 0',
              backgroundColor: '#2d2d2d',
              borderRadius: '8px',
            }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{post.title}</h3>
            <p style={{ margin: 0, color: '#888' }}>{post.body}</p>
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            cursor: isFetchingNextPage ? 'wait' : 'pointer',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            width: '100%',
          }}>
          {isFetchingNextPage ? 'Cargando...' : 'Cargar más posts'}
        </button>
      )}

      {!hasNextPage && allPosts.length > 0 && (
        <p style={{ textAlign: 'center', color: '#888' }}>
          ✅ Has llegado al final
        </p>
      )}
    </div>
  );
};
