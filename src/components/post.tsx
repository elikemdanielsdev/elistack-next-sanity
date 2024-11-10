import { Author } from "@/components/author";
import { Categories } from "@/components/categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/published-at";
import { Title } from "@/components/title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="grid gap-y-12 lg:grid-cols-12">
      <header className="flex flex-col items-start gap-4 lg:col-span-12">
        <div className="flex items-center gap-4">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="flex flex-col items-start gap-2 lg:col-span-4">
          <Image
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
            height={400}
            alt=""
          />
        </figure>
      ) : null}
      {body ? (
        <div className="prose lg:prose-lg lg:col-span-7 lg:col-start-6">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
}
