import { Author } from "@/components/author";
import { Categories } from "@/components/categories";
import { POSTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/published-at";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export function PostCard(props: POSTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories } = props;

  return (
    <Link className="group" href={`/posts/${props.slug!.current}`}>
      <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12 md:gap-0">
        <div className="md:col-span-2 md:pt-1">
          <Categories categories={categories} />
        </div>
        <div className="md:col-span-5 md:w-full">
          <h2 className="relative text-pretty text-2xl font-semibold text-slate-800 transition-colors group-hover:text-pink-600">
            <span className="relative z-[1]">{title}</span>
            <span className="absolute inset-0 z-0 scale-75 rounded-lg bg-pink-50 opacity-0 transition-all group-hover:scale-x-105 group-hover:scale-y-110 group-hover:opacity-100" />
          </h2>
          <div className="mt-2 flex items-center gap-x-6 md:mt-6">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        <div className="flex overflow-hidden rounded-lg md:col-span-4 md:col-start-9">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(400).height(200).url()}
              width={400}
              height={200}
              alt={mainImage.alt || title || ""}
            />
          ) : null}
        </div>
      </article>
    </Link>
  );
}
