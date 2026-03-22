'use client'

import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=600&q=80', span: 'col-span-2 row-span-2', label: 'Treatment Suite No. 1' },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', span: 'col-span-1 row-span-1', label: 'La Mer Ritual' },
  { src: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=600&q=80', span: 'col-span-1 row-span-1', label: 'Gold Facial' },
  { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80', span: 'col-span-1 row-span-2', label: 'Relaxation Lounge' },
  { src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80', span: 'col-span-1 row-span-1', label: 'Nail Atelier' },
  { src: 'https://images.unsplash.com/photo-1561128290-5d7484e2a9e3?w=600&q=80', span: 'col-span-1 row-span-1', label: 'Welcome Ritual' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#0A0806]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80">Inside Lumière</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-serif text-4xl md:text-5xl font-black text-[#F5F0E8] leading-tight">
              The art of<br />
              <span className="italic text-[#C9A96E]">the space</span>
            </h2>
            <p className="hidden md:block text-[#F5F0E8]/50 text-sm max-w-xs text-right leading-relaxed">
              Every corner of Lumière is designed to transition you from the energy of Dubai to a state of complete stillness.
            </p>
          </div>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 gap-2 h-[600px] md:h-[700px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#E8D5B0]/80">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-[#F5F0E8]/30 text-xs tracking-widest uppercase"
        >
          8 Private Suites · Dubai Marina Walk, Tower 3
        </motion.p>
      </div>
    </section>
  )
}
