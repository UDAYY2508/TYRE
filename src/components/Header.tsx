import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

type Page = 'home' | 'services' | 'book';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'services' as Page, label: 'Services' },
    { id: 'book' as Page, label: 'Book Appointment' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2"
          >
            <img 
              src="/logo.svg" 
              alt="TireWorks Logo" 
              className="w-10 h-10"
            />
            <div className="flex flex-col items-start">
              <span className="text-[#1e3a8a]">TireWorks</span>
              <span className="text-xs text-muted-foreground">Alignment & Balancing</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-[#1e3a8a]'
                    : 'text-foreground hover:text-[#1e3a8a]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => setCurrentPage('book')}
              className="bg-[#eab308] hover:bg-[#ca9a04] text-black"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2 rounded transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#1e3a8a] text-white'
                    : 'hover:bg-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
