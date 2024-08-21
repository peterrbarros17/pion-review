const Results = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const search = searchParams.title as string;
  if (!search) {
    return <p>No search term provided.</p>;
  }

  const res = await fetch(`https://pion-api.vercel.app/search?title=${search}`);
  const posts = await res.json();

  const postsFound = posts.length > 0;

  return (
    <div>
      <p>
        {postsFound
          ? `${posts.length} post(s) encontrado(s) para "${search}"`
          : `${posts.length} post encontrado para "${search}"`}
      </p>
      {postsFound && (
        <div>
          {posts.map((post: any) => (
            <div key={post._id} className="bg-red-500 my-10 p-4">
              <h2 className="capitalize text-xl font-bold">{post.title}</h2>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
