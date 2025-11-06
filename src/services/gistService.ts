const cache = new Map<string, { text: string; fetchedAt: number }>()

export async function fetchGistRaw(url: string, { ttl = 1000 * 60 * 5 } = {}) {
  // url should be a raw gist URL (e.g., https://gist.githubusercontent.com/.../raw/...) or any raw text URL
  if (cache.has(url)) {
    const entry = cache.get(url)!
    if (Date.now() - entry.fetchedAt < ttl) return entry.text
  }

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch gist: ${res.status}`)
  const text = await res.text()
  cache.set(url, { text, fetchedAt: Date.now() })
  console.log(`Fetched and cached gist from ${url}`)
  console.log(text)
  return text
}

export function getCachedGist(url: string) {
  return cache.get(url)?.text || null
}
