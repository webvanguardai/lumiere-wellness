'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Services', 'About', 'Gallery', 'Testimonials', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0A0806]/95 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-wide text-[#E8D5B0]">Lumière</span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]/70 mt-0.5">Wellness Studio</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] tracking-[0.15em] uppercase text-[#F5F0E8]/50 hover:text-[#C9A96E] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block btn-gold text-xs">
            Book a Treatment
          </a>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5">
            <span className={`block w-5 h-px bg-[#C9A96E] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-[#C9A96E] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#C9A96E] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0806] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-serif text-3xl italic text-[#E8D5B0] hover:text-[#C9A96E] transition-colors"
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="btn-gold mt-4"
            >
              Book a Treatment
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
