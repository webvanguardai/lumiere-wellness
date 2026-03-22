'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "I've visited spas across Europe and Asia, but Lumière is simply in a different league. Nadia and her team understand your skin better than you do. The Gold Ritual facial changed my skin completely.",
    name: 'Priya Mehta',
    title: 'Creative Director · Dubai',
    rating: 5,
  },
  {
    quote: "The treatment suite feels like a private apartment. Candlelit, scented, absolutely quiet. I came for a massage and left feeling like a completely different person. My go-to escape in the Marina.",
    name: 'Sophie Laurent',
    title: 'Architect · Dubai Marina',
    rating: 5,
  },
  {
    quote: "As someone with sensitive skin, I've always been nervous about facials. The consultation before the session was thorough and reassuring. The results after just one session were extraordinary.",
    name: 'Layla Al Rashidi',
    title: 'Entrepreneur · Dubai',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 bg-[#0D0A07]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80">Client Voices</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-[#F5F0E8] leading-tight">
            Felt, not just{' '}
            <span className="italic text-[#C9A96E]">described</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border border-white/5 hover:border-[#C9A96E]/15 bg-[#0A0806]/50 hover:bg-[#111009]/80 transition-all duration-500 p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(t.rating).fill(0).map((_, i) => (
                  <span key={i} className="text-[#C9A96E] text-xs">★</span>
                ))}
              </div>

              <blockquote className="font-serif italic text-[#F5F0E8]/65 text-sm leading-relaxed flex-grow">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 pt-5 border-t border-white/5">
                <div className="font-semibold text-[#F5F0E8] text-sm">{t.name}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#C9A96E]/50 mt-0.5">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 border border-[#C9A96E]/10 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { val: '4.9', sub: '★ Google Rating' },
            { val: '320+', sub: 'Five-Star Reviews' },
            { val: '98%', sub: 'Client Return Rate' },
            { val: '#1', sub: 'Spa in Dubai Marina' },
          ].map((s) => (
            <div key={s.sub}>
              <div className="font-serif text-3xl font-black text-[#C9A96E]">{s.val}</div>
              <div className="text-[10px] uppercase tracking-wider text-[#F5F0E8]/40 mt-1">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
