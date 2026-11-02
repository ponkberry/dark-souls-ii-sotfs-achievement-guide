import { useMemo, useState } from 'react'
import { spells } from '../data/spells'
import { achievements } from '../data/achievements'
import { useSpellProgress } from '../hooks/useSpellProgress'
import { ProgressBar } from '../components/ProgressBar'
import { ConfirmResetDialog } from '../components/ConfirmResetDialog'
import type { SpellSchool } from '../types'

const schools: SpellSchool[] = ['Sorcery', 'Miracle', 'Pyromancy', 'Hex']
const schoolFilters = ['All', ...schools] as const
const statuses = ['All', 'Learned', 'Not learned', 'DLC'] as const

const pillClass = (active: boolean) =>
  `rounded-full border px-3 py-1 text-sm transition-colors ${
    active
      ? 'border-orange-400 bg-orange-50 text-orange-700 dark:border-orange-700 dark:bg-orange-950/40 dark:text-orange-300'
      : 'border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400'
  }`

export function SpellsPage() {
  const { isLearned, toggle, reset, countsFor } = useSpellProgress()
  const [query, setQuery] = useState('')
  const [school, setSchool] = useState<(typeof schoolFilters)[number]>('All')
  const [status, setStatus] = useState<(typeof statuses)[number]>('All')
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = spells
    if (school !== 'All') list = list.filter((s) => s.school === school)
    if (q) list = list.filter((s) => `${s.name} ${s.source} ${s.cost}`.toLowerCase().includes(q))
    if (status === 'Learned') list = list.filter((s) => isLearned(s.id))
    if (status === 'Not learned') list = list.filter((s) => !isLearned(s.id))
    if (status === 'DLC') list = list.filter((s) => s.dlc)
    return list
  }, [query, school, status, isLearned])

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Spells</h1>
        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset progress
        </button>
      </div>

      <ConfirmResetDialog
        open={showResetConfirm}
        label="spell progress"
        onCancel={() => setShowResetConfirm(false)}
        onConfirm={() => {
          reset()
          setShowResetConfirm(false)
        }}
      />

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Every spell needed for the four Master achievements, in inventory order. DLC spells are
        required in Scholar of the First Sin.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {schools.map((s) => {
          const { done, total } = countsFor(s)
          const achievement = achievements.find((a) => a.spellSchool === s)
          return (
            <div key={s}>
              <h3 className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                {achievement?.name ?? s}
              </h3>
              <ProgressBar
                completed={done}
                total={total}
                percent={total === 0 ? 0 : Math.round((done / total) * 100)}
              />
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {schoolFilters.map((s) => (
          <button key={s} type="button" onClick={() => setSchool(s)} className={pillClass(school === s)}>
            {s}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {statuses.map((s) => (
          <button key={s} type="button" onClick={() => setStatus(s)} className={pillClass(status === s)}>
            {s}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by spell, NPC, or area…"
        className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      />

      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th className="w-10 px-3 py-2"></th>
              <th className="px-3 py-2">Spell</th>
              <th className="px-3 py-2">Location</th>
              <th className="px-3 py-2">Cost / Requirement</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((spell) => {
              const done = isLearned(spell.id)
              return (
                <tr
                  key={spell.id}
                  className={`border-t border-slate-100 dark:border-slate-800 ${
                    done ? 'bg-orange-50/60 dark:bg-orange-950/20' : ''
                  }`}
                >
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={() => toggle(spell.id)}
                      className="size-4 accent-orange-600"
                      aria-label={`Mark ${spell.name} as learned`}
                    />
                  </td>
                  <td className="px-3 py-2 font-medium text-slate-900 dark:text-white">
                    {spell.name}
                    <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-500">
                      {spell.school}
                    </span>
                    {spell.dlc && (
                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        DLC
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{spell.source}</td>
                  <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{spell.cost}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {visible.length === 0 && (
          <p className="p-4 text-center text-sm text-slate-500 dark:text-slate-500">
            No spells match these filters.
          </p>
        )}
      </div>
    </div>
  )
}
