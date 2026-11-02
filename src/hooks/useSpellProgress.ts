import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { spells } from '../data/spells'
import type { SpellSchool } from '../types'

const STORAGE_KEY = 'ds2-sotfs-spell-progress'

export function useSpellProgress() {
  const [learnedIds, setLearnedIds] = useLocalStorage<string[]>(STORAGE_KEY, [])

  const learnedSet = useMemo(() => new Set(learnedIds), [learnedIds])

  const isLearned = useCallback((id: string) => learnedSet.has(id), [learnedSet])

  const toggle = useCallback(
    (id: string) => {
      setLearnedIds((prev) =>
        prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id],
      )
    },
    [setLearnedIds],
  )

  const reset = useCallback(() => setLearnedIds([]), [setLearnedIds])

  const countsFor = useCallback(
    (school: SpellSchool) => {
      const list = spells.filter((s) => s.school === school)
      return { done: list.filter((s) => learnedSet.has(s.id)).length, total: list.length }
    },
    [learnedSet],
  )

  return { learnedSet, isLearned, toggle, reset, countsFor, total: spells.length, learnedCount: learnedSet.size }
}
