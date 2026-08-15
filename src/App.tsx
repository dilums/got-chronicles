import { useCallback, useState } from 'react'
import { NavContext, TopBar, IndexPanel, BottomNav, Footer } from './components/chrome'
import type { Page, Route } from './data/lore'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Houses from './pages/Houses'
import Gods from './pages/Gods'
import Myths from './pages/Myths'
import Timeline from './pages/Timeline'
import MapPage from './pages/MapPage'
import Battles from './pages/Battles'
import Creatures from './pages/Creatures'
import Throne from './pages/Throne'
import Weapons from './pages/Weapons'
import Valyrian from './pages/Valyrian'
import Cultures from './pages/Cultures'
import Orders from './pages/Orders'

export default function App() {
  const [route, setRoute] = useState<Route>({ page: 'home' })
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = useCallback((page: Page, id?: string) => {
    setRoute({ page, id })
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return (
    <NavContext.Provider value={{ route, nav }}>
      <div className="min-h-screen flex flex-col">
        <TopBar onMenu={() => setMenuOpen(true)} />
        <IndexPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="flex-1">
          {route.page === 'home' && <Home />}
          {route.page === 'characters' && <Characters selectedId={route.id} />}
          {route.page === 'houses' && <Houses selectedId={route.id} />}
          {route.page === 'gods' && <Gods selectedId={route.id} />}
          {route.page === 'myths' && <Myths selectedId={route.id} />}
          {route.page === 'timeline' && <Timeline />}
          {route.page === 'map' && <MapPage selectedId={route.id} />}
          {route.page === 'battles' && <Battles selectedId={route.id} />}
          {route.page === 'creatures' && <Creatures selectedId={route.id} />}
          {route.page === 'throne' && <Throne />}
          {route.page === 'weapons' && <Weapons />}
          {route.page === 'valyrian' && <Valyrian />}
          {route.page === 'cultures' && <Cultures />}
          {route.page === 'orders' && <Orders />}
        </div>
        <Footer />
        <BottomNav />
        {/* spacer so bottom nav never covers content on mobile */}
        <div className="h-16 md:hidden" />
      </div>
    </NavContext.Provider>
  )
}
