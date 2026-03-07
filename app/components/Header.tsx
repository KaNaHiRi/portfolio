'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-bold text-gray-900">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span>KaNaHiRi</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              お問い合わせ
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
