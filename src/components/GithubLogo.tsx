import { siGithub } from 'simple-icons'

export function GithubLogo({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={siGithub.path} />
    </svg>
  )
}
