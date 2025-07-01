export default async function fetchOriginalUrl(shortUrl: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/urls/action-original`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shorten_url: shortUrl,
      }),
    }
  );
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  const { original_url } = data.payload;

  return original_url as string;
}
