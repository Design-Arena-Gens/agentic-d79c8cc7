import { Suspense } from 'react'
import { getGitHubProfile, getGitHubRepos } from '@/lib/github'
import { HeroHeader } from '@/components/Hero'

export const revalidate = 3600

async function Projects() {
  const [profile, repos] = await Promise.all([
    getGitHubProfile('heyitsgautham'),
    getGitHubRepos('heyitsgautham')
  ])

  const topRepos = [...repos]
    .filter(r => !r.fork && !r.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, 6)

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">Featured projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRepos.map(repo => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/10 p-5 shine">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white/95 font-semibold text-lg group-hover:text-white transition-colors">{repo.name}</h3>
                {repo.description && (<p className="text-white/60 text-sm mt-1 line-clamp-2">{repo.description}</p>)}
              </div>
              <span className="inline-flex items-center rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/70 border border-white/10">? {repo.stargazers_count}</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
              <span>{repo.language ?? 'TypeScript'}</span>
              <span>?</span>
              <span>Updated {new Date(repo.pushed_at).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8">
        <a href={profile.html_url + '?tab=repositories'} target="_blank" rel="noreferrer" className="text-brand-300 hover:text-brand-200">See all repositories ?</a>
      </div>
    </section>
  )
}

export default async function Page() {
  const profile = await getGitHubProfile('heyitsgautham')

  return (
    <main className="relative">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1">
            <HeroHeader avatarUrl={profile.avatar_url} displayName={profile.name ?? 'Gautham'} />
            <p className="mt-5 text-white/70 text-lg max-w-2xl">
              I design and build memorable digital products. Focused on craft, clarity, and impact.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10"
              >
                GitHub
              </a>
              <a
                href={`https://linkedin.com/in/heyitsgautham`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white"
              >
                Connect on LinkedIn
              </a>
            </div>
            <div className="mt-6 text-white/60 text-sm">
              <span>Followers {profile.followers.toLocaleString()}</span>
              <span className="mx-2">?</span>
              <span>Public repos {profile.public_repos}</span>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      <Suspense fallback={<div className="max-w-6xl mx-auto px-6 py-20 text-white/60">Loading projects?</div>}>
        <Projects />
      </Suspense>

      <footer className="max-w-6xl mx-auto px-6 py-16 text-white/50">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>? {new Date().getFullYear()} Gautham. Crafted with Next.js.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://github.com/heyitsgautham" target="_blank" rel="noreferrer" className="hover:text-white/80">GitHub</a>
            <span>?</span>
            <a href="https://linkedin.com/in/heyitsgautham" target="_blank" rel="noreferrer" className="hover:text-white/80">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
