import ListPosts from "@/components/ListPosts/ListPosts";

export default async function Home() {
  const url = process.env.WP_URL
  const res = await fetch(url);
  const posts = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="text-4xl">Blog</h1>

      <ListPosts data={posts} />
      
    </main>
  );
}
