'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80)',
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0806] via-[#0A0806]/85 to-[#0A0806]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-transparent" />

      {/* Decorative gold line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="section-divider" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80">Dubai Marina · Est. 2019</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-black text-5xl md:text-7xl lg:text-8xl leading-[1.0] tracking-tight text-[#F5F0E8] max-w-4xl"
        >
          Where beauty{' '}
          <span className="italic text-[#C9A96E]">meets</span>
          <br />
          <span className="italic">serenity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-[#F5F0E8]/60 text-base md:text-lg leading-relaxed font-light"
        >
          An elevated sanctuary of beauty and wellness in the heart of Dubai Marina.
          Curated rituals, world-class therapists, and a space designed for transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-gold">
            Reserve Your Experience
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a href="#services" className="btn-outline">
            Explore Treatments
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 flex flex-wrap gap-10"
        >
          {[
            { val: '2,400+', label: 'Clients Served' },
            { val: '18', label: 'Expert Therapists' },
            { val: '40+', label: 'Signature Rituals' },
            { val: '★ 4.9', label: 'Google Reviews' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-serif text-2xl font-bold text-[#C9A96E]">{s.val}</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9A96E]/50 rotate-90 origin-center mb-6">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#C9A96E]/40 to-transparent" />
      </motion.div>
    </section>
  )
}
