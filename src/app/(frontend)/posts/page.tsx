// import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostCard } from "@/components/post-card";
import { Title } from "@/components/title";
import { sanityFetch } from "@/sanity/lib/live";

// const options = { next: { revalidate: 60 } };

export default async function Page() {
  // const posts = await client.fetch(POSTS_QUERY, {}, options);
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
