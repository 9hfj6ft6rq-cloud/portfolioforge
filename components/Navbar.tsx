'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ]

  const appLinks = [
    { href: '/login', label: 'Log In' },
  ]

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow">
            <span className="text-white font-bold text-sm">PF</span>
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">
            Portfolio<span className="text-indigo-600">Forge</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {appLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 px-6 py-4 flex flex-col gap-4 bg-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium ${pathname === '/login' ? 'text-indigo-600' : 'text-slate-600'}`}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
