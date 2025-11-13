export interface GitHubProfile {
  login: string
  name: string | null
  avatar_url: string
  html_url: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
  blog: string | null
  company: string | null
  location: string | null
}

export interface GitHubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  fork: boolean
  archived: boolean
  pushed_at: string
}

async function safeFetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    // Ensure we always hit fresh data server-side but allow ISR
    // Next will cache at the route level via revalidate
    headers: { 'Accept': 'application/vnd.github+json' },
    // GitHub requires a user-agent in some contexts, set a simple one
    next: { revalidate: 3600 }
  })
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${url}`)
  }
  return res.json()
}

export async function getGitHubProfile(username: string): Promise<GitHubProfile> {
  return safeFetchJson<GitHubProfile>(`https://api.github.com/users/${username}`)
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const repos = await safeFetchJson<GitHubRepo[]>(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
  return repos
}
