import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white text-xs font-semibold py-2 px-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-white/20 text-white px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider animate-pulse">Official Event</span>
            <span className="truncate">St. Xavier's Youth Fr. Barco Memorial Throwball Tournament for Girls (Oct 4, 2026)</span>
          </div>
          <Link to="/tournament" className="shrink-0 hidden sm:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-blue-700 text-xs font-bold hover:bg-blue-50 transition shadow-sm">
            <span>View Event & Register</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </aside>

      {/* Navigation Header */}
      <header className="glass-nav sticky top-[36px] z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">sports_volleyball</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">SportIQ</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link to="/" className={`hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : ''}`}>Home</Link>
              <Link to="/features" className={`hover:text-blue-600 transition-colors ${isActive('/features') ? 'text-blue-600 font-semibold' : ''}`}>Features</Link>
              <Link to="/tools" className={`hover:text-blue-600 transition-colors ${isActive('/tools') ? 'text-blue-600 font-semibold' : ''}`}>Free Tools</Link>
              <Link to="/tournament" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200 hover:bg-blue-100 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Throwball 2026
              </Link>
              <Link to="/about" className={`hover:text-blue-600 transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold' : ''}`}>About</Link>
              <Link to="/contact" className={`hover:text-blue-600 transition-colors ${isActive('/contact') ? 'text-blue-600 font-semibold' : ''}`}>Contact</Link>
            </nav>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
              Support
            </Link>
            <Link to="/create" className="px-4 py-2 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">add_circle</span> Create Tournament
            </Link>
          </div>
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none" 
          >
            <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
        
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-2 shadow-lg absolute w-full">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>Home</Link>
            <Link to="/features" onClick={() => setMobileMenuOpen(false)} className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/features') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>Features</Link>
            <Link to="/tools" onClick={() => setMobileMenuOpen(false)} className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/tools') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>Free Tools</Link>
            <Link to="/tournament" onClick={() => setMobileMenuOpen(false)} className={`block px-3 py-2 rounded-lg text-base font-semibold text-blue-600 bg-blue-50`}>Throwball 2026 Tournament</Link>
            <Link to="/create" onClick={() => setMobileMenuOpen(false)} className={`block px-3 py-2 rounded-lg text-base font-semibold text-white bg-blue-600 mt-4`}>+ Create Tournament</Link>
          </div>
        )}
      </header>
    </>
  );
}
