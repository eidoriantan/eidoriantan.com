import { useEffect, useState } from 'react'

export function useLoadingScreen(duration = 1100) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), duration)
    return () => window.clearTimeout(timeout)
  }, [duration])

  return isLoading
}
