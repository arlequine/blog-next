import ListPosts from "@/components/ListPosts/ListPosts";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="text-4xl">Blog</h1>

      <ListPosts data={posts} />
      
    </main>
  );
}
