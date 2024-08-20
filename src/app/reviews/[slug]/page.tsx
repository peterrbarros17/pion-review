import getPostBySlug from "@/lib/getPosts";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
} from "react";

const PageSlug = async ({ page, params }: any) => {
  const post = await getPostBySlug((page = "reviewspage"), params.slug);

  return (
    <div>
      <div className="w-full md:w-10/12 p-4 md:p-0 flex flex-col gap-2">
        <h1 className="text-[24px] bg-[var(--red)] p-2 capitalize">
          {post.title}
        </h1>
        {post.content.map(
          (
            type: {
              type: string;
              text:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | null
                | undefined;
              alt: string;
              src: string | StaticImport;
            },
            _id: Key | null | undefined
          ) => {
            if (type.type === "paragraph") {
              return <p key={_id}>{type.text}</p>;
            } else if (type.type === "image") {
              return (
                <div key={_id}>
                  <Image
                    alt={type.alt}
                    src={type.src}
                    width={1920}
                    height={1080}
                    priority={true}
                  />
                </div>
              );
            }
            return null;
          }
        )}
      </div>
    </div>
  );
};

export default PageSlug;
