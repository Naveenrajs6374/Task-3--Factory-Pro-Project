import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/Home page Images/Navbar image/Group 4.png'
import phoneIcon from '../../assets/Home page Images/Navbar image/Clip path group.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services/custom-manufacturing-solution', dropdown: true },   // ← maathina line
  { label: 'Blog', to: '/blog' },
  { label: 'Projects', to: '/projects' },
  { label: 'Page', to: '/pricing-plan', dropdown: true },
  { label: 'Contact Us', to: '/contact' },
]

function Chevron() {
  return (
    <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false) // mobile / tablet hamburger menu
  const { pathname } = useLocation()
  const isHome = pathname === '/' // Home: navbar top 42px | About (inner pages): navbar top 0
  const [scrolled, setScrolled] = useState(false) // scroll pannina piragu dark background kaatta

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${isHome ? '' : ' navbar--inner'}${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="FactoryPro" />
        </Link>

        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            {links.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  {item.dropdown && <Chevron />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a href="tel:+01123456789" className="navbar-phone">
          <img src={phoneIcon} alt="" />
          <span>+01 123456789</span>
        </a>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar