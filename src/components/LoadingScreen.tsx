import { Logo } from './Logo'
import './LoadingScreen.css'

export function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <div
      className={isLoading ? 'loading-screen' : 'loading-screen loading-screen-hidden'}
      aria-hidden={!isLoading}
    >
      <Logo className="loading-mark" />
      <p>
        Hi, I&apos;m Adriane<span className="loading-dots">...</span>
      </p>
      <div className="loading-track">
        <span />
      </div>
    </div>
  )
}
