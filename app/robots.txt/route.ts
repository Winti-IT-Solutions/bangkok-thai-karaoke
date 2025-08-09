export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://bangkok-thai-karaoke.example/sitemap.xml`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
