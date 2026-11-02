import { HashRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { WalkthroughPage } from './pages/WalkthroughPage'
import { AchievementsPage } from './pages/AchievementsPage'
import { SpellsPage } from './pages/SpellsPage'
import { CovenantsPage } from './pages/CovenantsPage'
import { ToastProvider } from './context/ToastContext'
import { ToastContainer } from './components/ToastContainer'
import { AchievementUnlockWatcher } from './components/AchievementUnlockWatcher'
import { BackToTopButton } from './components/BackToTopButton'

function App() {
  return (
    <ToastProvider>
      <HashRouter>
        <div className="min-h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/walkthrough" element={<WalkthroughPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/spells" element={<SpellsPage />} />
            <Route path="/covenants" element={<CovenantsPage />} />
          </Routes>
        </div>
      </HashRouter>
      <AchievementUnlockWatcher />
      <ToastContainer />
      <BackToTopButton />
    </ToastProvider>
  )
}

export default App
