"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuoteModal from "@/src/components/website/QuoteModel"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-md shadow-sm border-b-2 border-[#D62828]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/Logo/Logo.webp" 
                  alt="Rack-Regis Logo" 
                  width={140} 
                  height={50} 
                  className="h-12 md:h-14 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8 mr-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-slate-800 hover:text-[#D62828] font-black text-[12px] uppercase tracking-widest transition-all relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D62828] transition-all group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              {/* Static "Get A Quote" Button (No UI Package) */}
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className="bg-[#D62828] text-white px-7 py-3 font-black text-[11px] uppercase tracking-[2px] flex items-center gap-3 hover:bg-slate-950 transition-all duration-300 rounded-none group shadow-none border-none outline-none"
              >
                {/* Raw SVG: Phone Icon */}
                <svg 
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                  className="group-hover:animate-bounce transition-transform"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Get A Quote
              </button>
            </div>

            {/* Mobile Menu Button (Raw SVG) */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-slate-900 transition-colors"
              >
                {isOpen ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer (Static Tailwind Transition) */}
        <div className={`md:hidden bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex justify-between items-center text-slate-800 font-black uppercase tracking-tighter text-lg py-4 border-b border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {/* Raw SVG: Chevron Right */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D62828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </Link>
            ))}
            
            <div className="pt-6">
              <button 
                className="w-full py-5 text-xs font-black tracking-[3px] uppercase bg-[#D62828] text-white transition-all hover:bg-slate-950"
                onClick={() => {
                  setIsOpen(false);
                  setIsQuoteOpen(true);
                }}
              >
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />
    </>
  );
};

export default Navbar;