import { useState } from 'react'
import { covenants } from '../data/covenants'
import { achievements } from '../data/achievements'
import { useCovenantProgress } from '../hooks/useCovenantProgress'
import { useAchievementProgress } from '../hooks/useAchievementProgress'
import { ConfirmResetDialog } from '../components/ConfirmResetDialog'

const achievementById = new Map(achievements.map((a) => [a.id, a]))

export function CovenantsPage() {
  const { isRankDone, toggleRank, reset } = useCovenantProgress()
  const { isComplete, toggle } = useAchievementProgress()
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Covenants</h1>
        <button
          type="button"
          onClick={() => setShowResetConfirm(true)}
          className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
        >
          Reset rank progress
        </button>
      </div>

      <ConfirmResetDialog
        open={showResetConfirm}
        label="covenant rank progress"
        onCancel={() => setShowResetConfirm(false)}
        onConfirm={() => {
          reset()
          setShowResetConfirm(false)
        }}
      />

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        All covenant achievements only ask you to get the dialogue to ask you to join a covenant.
        You do not need to join it and abandon your current covenant.
      </p>

      <div className="mt-6 space-y-6">
        {covenants.map((covenant) => {
          const achievement = achievementById.get(covenant.achievementId)
          const discovered = isComplete(covenant.achievementId)
          return (
            <section key={covenant.id} className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
              <h2 className="text-lg font-medium text-slate-900 dark:text-white">{covenant.name}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {covenant.npc} - {covenant.location}
              </p>
              {achievement && (
                <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={discovered}
                    onChange={() => toggle(achievement.id)}
                    className="size-4 accent-orange-600"
                  />
                  <img
                    src={achievement.icon}
                    alt=""
                    width={24}
                    height={24}
                    className={`size-6 rounded ${discovered ? '' : 'opacity-50 grayscale'}`}
                  />
                  {achievement.name}
                </label>
              )}
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-slate-600 dark:text-slate-400">
                    <tr>
                      <th className="w-10 py-1 pr-3"></th>
                      <th className="w-12 py-1 pr-3">Rank</th>
                      <th className="py-1 pr-3">Condition</th>
                      <th className="py-1">Reward</th>
                    </tr>
                  </thead>
                  <tbody>
                    {covenant.ranks.map((r) => (
                      <tr key={r.rank} className="border-t border-slate-100 dark:border-slate-800">
                        <td className="py-1 pr-3">
                          <input
                            type="checkbox"
                            checked={isRankDone(covenant.id, r.rank)}
                            onChange={() => toggleRank(covenant.id, r.rank)}
                            className="size-4 accent-orange-600"
                            aria-label={`Mark ${covenant.name} rank ${r.rank} as reached`}
                          />
                        </td>
                        <td className="py-1 pr-3 text-slate-500 dark:text-slate-500">{r.rank}</td>
                        <td className="py-1 pr-3 text-slate-700 dark:text-slate-300">{r.condition}</td>
                        <td className="py-1 text-slate-700 dark:text-slate-300">{r.reward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {covenant.notes.map((note) => (
                <p key={note} className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {note}
                </p>
              ))}
            </section>
          )
        })}
      </div>
    </div>
  )
}
