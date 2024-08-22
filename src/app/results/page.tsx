import Image from "next/image";

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
  console.log(posts);

  const postsFound = posts.length > 0;

  return (
    <div className="mx-2">
      <p>
        {postsFound
          ? `${posts.length} post(s) encontrado(s) para "${search}"`
          : `${posts.length} post encontrado para "${search}"`}
      </p>
      {postsFound && (
        <div>
          {posts.map((post: any) => (
            <div
              key={post._id}
              className="bg-red-500 my-5 p-4 flex gap-2 items-start min-w-[380px]"
            >
              <Image
                alt={post.alt}
                src={post.url}
                width={1920}
                height={1080}
                className="w-28 h-24 md:w-36 md:h-36"
              />
              <div>
                <h2 className="capitalize text-md md:text-xl font-bold">
                  {post.title}
                </h2>
                <p className="text-sm md:text-base">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
