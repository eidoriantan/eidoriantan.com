export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="17" fill="none" stroke="currentColor" strokeWidth="2" />
      <g fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 22 30 32 18 42" stroke="currentColor" />
        <path d="M34 42h12" stroke="var(--ink)" />
      </g>
    </svg>
  )
}
