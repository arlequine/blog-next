import { NextResponse } from 'next/server'

export async function GET(req, _) {

  const slug = req.nextUrl.searchParams.get("slug")
  const res = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts?slug=${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
 
  return NextResponse.json(data);
}