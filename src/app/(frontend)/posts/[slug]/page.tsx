import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {post?.mainImage ? (
        <Image
          className="aspect-[800/300] w-full"
          src={urlFor(post.mainImage)
            .width(800)
            .height(300)
            .quality(80)
            .auto("format")
            .url()}
          alt={post?.mainImage?.alt || ""}
          width="800"
          height="300"
        />
      ) : null}
      <h1 className="text-balance text-4xl font-bold">{post?.title}</h1>

      {post?.body ? (
        <div className="prose">
          <PortableText value={post?.body} />
        </div>
      ) : null}
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
