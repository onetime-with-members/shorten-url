async function fetchOriginalUrl(shortUrl) {
  const res = await fetch(
    `${import.meta.env.VITE_SERVER_API_URL}/urls/action-original`,
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

  return original_url;
}

async function handleRedirect() {
  const siteDomain = import.meta.env.VITE_SITE_DOMAIN;
  const { href, pathname } = window.location;

  const isIdPath = /^\/[^/]+$/.test(pathname);

  if (isIdPath) {
    const originalUrl = await fetchOriginalUrl(href);
    window.location.href = originalUrl || `${siteDomain}${pathname}`;
  } else {
    window.location.href = `${siteDomain}${pathname}`;
  }
}

handleRedirect();
