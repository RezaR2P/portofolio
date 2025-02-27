import {useState} from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Home from './components/sections/Home.jsx'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
      </div>
    </>
  )
}

export default App
