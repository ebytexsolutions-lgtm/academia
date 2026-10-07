import React, { useState } from 'react';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Search, 
  Menu, 
  X, 
  Lock, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useData } from '../context/DataContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuickApply?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenQuickApply }) => {
  const { siteSettings, isAdminLoggedIn } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'verify', label: 'Verify Certificate', highlight: true },
    { id: 'admissions', label: 'Admissions' },
    { id: 'about', label: 'About Us' },
    { id: 'notices', label: 'Notices' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-amber-900/10">
      {/* Top Notification & Contact Bar */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Contact snippets */}
          <div className="flex items-center flex-wrap gap-4 text-amber-100">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Tel: {siteSettings.phonePrimary}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp: {siteSettings.mobileWhatsApp}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteSettings.email}</span>
            </span>
          </div>

          {/* Marquee snippet / Admin Button */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 text-amber-200 truncate max-w-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate text-[11px] font-normal">{siteSettings.marqueeAnnouncement}</span>
            </div>

            <button
              onClick={() => handleNavClick('admin')}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold transition-all ${
                isAdminLoggedIn
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                  : 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 border border-amber-400/30'
              }`}
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? 'Admin Active' : 'Admin Portal'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            {/* UET Crest Badge */}
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 to-red-950 p-1 flex items-center justify-center shadow-md ring-2 ring-amber-500/30 group-hover:ring-amber-500 transition-all">
              <div className="w-full h-full rounded-lg border border-amber-400/40 flex flex-col items-center justify-center text-amber-300">
                <GraduationCap className="w-6 h-6 text-amber-400 drop-shadow" />
                <span className="text-[7px] font-extrabold tracking-widest text-amber-200 uppercase">1921</span>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-red-950 uppercase font-sans">
                  UET <span className="text-amber-700">Academy</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-red-100 text-red-900 rounded border border-red-200">
                  Lahore
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-tight leading-tight">
                University of Engineering and Technology, Lahore
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              if (item.highlight) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative ml-1 mr-2 px-3.5 py-2 rounded-lg font-semibold text-xs tracking-wide transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-amber-500 text-red-950 shadow-md ring-2 ring-amber-400'
                        : 'bg-amber-100/80 hover:bg-amber-200/90 text-amber-950 border border-amber-300/60 shadow-xs'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-800" />
                    <span>{item.label}</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-700"></span>
                    </span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-red-900 bg-red-50 font-bold border-b-2 border-red-800'
                      : 'text-slate-700 hover:text-red-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Quick Action Button */}
            {onOpenQuickApply && (
              <button
                onClick={onOpenQuickApply}
                className="ml-3 px-4 py-2 rounded-lg bg-red-900 hover:bg-red-950 text-white text-xs font-bold tracking-wider uppercase shadow hover:shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Apply Online</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('verify')}
              className="p-2 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1"
              title="Verify Certificate"
            >
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span className="text-[11px]">Verify</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-red-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                activeTab === item.id
                  ? 'bg-red-50 text-red-900 border-l-4 border-red-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="flex items-center gap-2">
                {item.highlight && <ShieldCheck className="w-4 h-4 text-amber-600" />}
                {item.label}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {onOpenQuickApply && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickApply();
                }}
                className="w-full py-2.5 rounded-lg bg-red-900 text-white text-sm font-bold text-center uppercase tracking-wide shadow"
              >
                Apply Online (New Batch)
              </button>
            )}

            <button
              onClick={() => handleNavClick('admin')}
              className="w-full py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5 text-slate-600" />
              <span>Admin Management Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
