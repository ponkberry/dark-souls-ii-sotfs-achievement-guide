import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'ds2-sotfs-covenant-progress'

function rankKey(covenantId: string, rank: number) {
  return `${covenantId}:${rank}`
}

export function useCovenantProgress() {
  const [keys, setKeys] = useLocalStorage<string[]>(STORAGE_KEY, [])

  const keySet = useMemo(() => new Set(keys), [keys])

  const isRankDone = useCallback(
    (covenantId: string, rank: number) => keySet.has(rankKey(covenantId, rank)),
    [keySet],
  )

  const toggleRank = useCallback(
    (covenantId: string, rank: number) => {
      const key = rankKey(covenantId, rank)
      setKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
    },
    [setKeys],
  )

  const reset = useCallback(() => setKeys([]), [setKeys])

  return { isRankDone, toggleRank, reset }
}
