import type { Spell } from '../types'

interface StepSpellListProps {
  entries: Spell[]
  isLearned: (id: string) => boolean
  onToggle: (id: string) => void
}

/** Spells obtained during a walkthrough step, one checkbox each. */
export function StepSpellList({ entries, isLearned, onToggle }: StepSpellListProps) {
  if (entries.length === 0) return null

  return (
    <div className="mt-2 ml-6 flex flex-wrap gap-x-4 gap-y-1 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
      {entries.map((spell) => {
        const done = isLearned(spell.id)
        return (
          <label
            key={spell.id}
            title={`${spell.source} - ${spell.cost}`}
            className="flex cursor-pointer items-center gap-1.5 text-sm"
          >
            <input
              type="checkbox"
              checked={done}
              onChange={() => onToggle(spell.id)}
              className="size-3.5 shrink-0 accent-orange-600"
              aria-label={`Mark ${spell.name} as learned`}
            />
            <span
              className={
                done ? 'text-slate-500 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'
              }
            >
              {spell.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-500">{spell.school}</span>
          </label>
        )
      })}
    </div>
  )
}
