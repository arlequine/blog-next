import { NextResponse } from 'next/server'

export async function GET(req, _) {
  const url = process.env.WP_URL
  const slug = req.nextUrl.searchParams.get("slug")
  const res = await fetch(`${url}?slug=${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
 
  return NextResponse.json(data);
}