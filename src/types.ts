export type AchievementCategory = 'Story' | 'Sidequest' | 'Collection' | 'Covenant' | 'Miscellaneous'

export type SpellSchool = 'Sorcery' | 'Miracle' | 'Pyromancy' | 'Hex'

export interface AchievementSubItem {
  id: string
  label: string
}

export interface Achievement {
  id: string
  name: string
  description: string
  category: AchievementCategory
  /** path to the achievement icon, relative to the site root */
  icon: string
  /** if set, this achievement auto-completes once every spell of this school is learned */
  spellSchool?: SpellSchool
  /** if set, this achievement auto-completes once every other achievement is complete (The Dark Soul) */
  requiresAllOthers?: boolean
  /**
   * if set, this achievement is made up of several individually-trackable parts (e.g. the gestures,
   * or Lucatiel's quest) - it auto-completes once every part is checked off, and can't be toggled
   * manually as a whole
   */
  subItems?: AchievementSubItem[]
  /** the guide's own instructions for this achievement, shown as an expandable section */
  guide?: string[]
}

export interface Spell {
  id: string
  name: string
  school: SpellSchool
  /** where it comes from: NPC, area, or covenant */
  source: string
  /** price, or how else it's obtained */
  cost: string
  /** true if it comes from one of the three DLCs */
  dlc?: boolean
}

export interface CovenantRank {
  rank: number
  condition: string
  reward: string
}

export interface Covenant {
  id: string
  name: string
  npc: string
  location: string
  /** the achievement earned by discovering this covenant */
  achievementId: string
  ranks: CovenantRank[]
  notes: string[]
}

export interface WalkthroughStep {
  id: string
  text: string
  /** achievement ids relevant to this step, shown as inline callouts */
  achievementIds?: string[]
  /** specific sub-items of multi-part achievements (see Achievement.subItems) relevant to this step */
  subAchievementIds?: { achievementId: string; subItemId: string }[]
  /** spell ids (see spells.ts) obtained during this step, shown as checkboxes */
  spellIds?: string[]
  /** urgent callout shown in red */
  warning?: string
}

export interface WalkthroughChapter {
  id: string
  title: string
  summary: string
  warning?: string
  steps: WalkthroughStep[]
}
