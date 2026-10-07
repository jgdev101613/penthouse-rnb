import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react'
import { cats, sections, PLACEHOLDER } from './data'

const ease = [0.22, 1, 0.36, 1]
const SPARKS = Array.from({ length: 24 }, (_, i) => ({ x: (i * 37) % 100, y: (i * 53) % 100, d: 3 + (i % 5), s: 2 + (i % 3) * 2 }))

const spot = e => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px')
  e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px')
}

function Price({ it, hideMain }) {
  if (hideMain) return null
  return (
    <div className="text-right shrink-0">
      {it.price.split('/').map(p => {
        const m = p.trim().match(/^(.*?)\s*([\d,.]+)$/)
        return <div key={p} className="font-display text-2xl text-gold-light leading-tight">
          {m?.[1] && <span className="text-xs font-sans text-gold/60 mr-1">{m[1]}</span>}₱{m?.[2] ?? p}</div>
      })}
    </div>)
}

function Card({ it, g, i }) {
  const spirit = g.t === 's'
  return (
    <motion.li
      initial={{ opacity: 0, y: 40, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease, delay: (i % 2) * 0.1 }}
      whileHover={{ y: -4 }} onMouseMove={spot}
      className="group relative flex items-center gap-4 p-3 rounded-2xl bg-ink-2/80 border border-gold/15 hover:border-gold/60 transition-colors overflow-hidden list-none">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(220px_circle_at_var(--x)_var(--y),rgba(244,169,78,.2),transparent_65%)]" />
      <div className="relative size-20 md:size-24 shrink-0 rounded-xl overflow-hidden ring-1 ring-gold/40 group-hover:ring-gold group-hover:rotate-[-3deg] group-hover:scale-105 transition duration-500">
        <img src={it.img} alt={it.name} loading="lazy" onError={e => { e.currentTarget.src = PLACEHOLDER }}
          className="size-full object-cover group-hover:scale-125 transition duration-700" />
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
      </div>
      <div className="relative flex-1 min-w-0">
        <p className="font-display text-xl leading-tight text-gold-light group-hover:text-white transition-colors">{it.name}</p>
        {it.detail && <p className="text-sm text-[#cdbd94] mt-1 leading-snug">{it.detail}</p>}
      </div>
      {spirit
        ? <div className="relative text-right shrink-0 font-display text-gold-light">
            <div className="text-2xl leading-tight">₱{it.price}<span className="block text-[11px] font-sans tracking-wider text-gold/60 -mt-0.5">bottle</span></div>
            {it.shot && <div className="text-sm text-amber">₱{it.shot} <span className="text-[11px] font-sans text-gold/60">shot</span></div>}
          </div>
        : <div className="relative"><Price it={it} hideMain={!!g.price} /></div>}
    </motion.li>)
}

function Group({ g }) {
  return (
    <div className="mb-14">
      <div className="flex items-end justify-between mb-2">
        <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}
          className="font-display text-4xl md:text-5xl gold-text">{g.title}</motion.h3>
        {g.price && <span className="font-display text-3xl text-amber">₱{g.price}</span>}
      </div>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }}
        className="origin-left h-px mb-6 bg-gradient-to-r from-gold via-amber to-transparent" />
      <ul className="grid md:grid-cols-2 gap-4">{g.items.map((it, i) => <Card key={g.title + it.name} it={it} g={g} i={i} />)}</ul>
    </div>)
}

export default function App() {
  const [section, setSection] = useState('Food')
  const [tab, setTab] = useState(cats[0].id)
  const list = cats.filter(c => c.section === section)
  const cat = cats.find(c => c.id === tab)
  const pick = s => { setSection(s); setTab(cats.find(c => c.section === s).id) }
  const { scrollY, scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  const y1 = useTransform(scrollY, [0, 700], [0, 160])
  const y2 = useTransform(scrollY, [0, 700], [0, -120])
  const words = ['Dine', 'above', 'it', 'all.']

  return (
    <div className="overflow-x-hidden">
      <motion.div style={{ scaleX: bar }} className="fixed top-0 inset-x-0 h-1 z-50 origin-left bg-gradient-to-r from-gold-deep via-gold-light to-amber" />
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.9, ease }}
        className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-12 py-3 backdrop-blur-md bg-ink/70 border-b border-gold/15">
        <img src="/logo.png" alt="Penthouse Restaurant & Bar" className="h-14" />
        <a href="#menu" className="px-5 py-2 rounded-full border border-gold text-gold-light hover:bg-gold hover:text-ink transition-colors">View menu</a>
      </motion.nav>

      <header className="relative min-h-screen grid place-items-center text-center px-6 overflow-hidden">
        <motion.div style={{ y: y1 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 9, repeat: Infinity }} className="absolute top-1/4 -left-24 size-96 rounded-full bg-gold/25 blur-[110px]" />
        <motion.div style={{ y: y2 }} animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 11, repeat: Infinity }} className="absolute bottom-10 -right-24 size-96 rounded-full bg-amber/20 blur-[120px]" />
        {SPARKS.map((s, i) => (
          <motion.span key={i} className="absolute rounded-full bg-gold-light" style={{ left: s.x + '%', top: s.y + '%', width: s.s, height: s.s }}
            animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }} transition={{ duration: s.d, repeat: Infinity, delay: i * 0.25 }} />))}
        <div className="relative">
          <motion.img initial={{ opacity: 0, scale: 0.6, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -10, 0] }}
            transition={{ duration: 1.2, ease, y: { duration: 5, repeat: Infinity, delay: 1.2 } }}
            src="/logo.png" alt="" className="mx-auto w-56 md:w-72 drop-shadow-[0_0_40px_rgba(212,175,55,.4)]" />
          <h1 className="font-display text-6xl md:text-9xl leading-[1.05] mt-4 flex flex-wrap justify-center gap-x-5">
            {words.map((w, i) => (
              <span key={w} className="overflow-hidden pb-2">
                <motion.span className={`inline-block ${i === 3 ? 'gold-text italic' : ''}`} initial={{ y: '110%', rotate: 6 }} animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1, ease, delay: 0.5 + i * 0.15 }}>{w}</motion.span>
              </span>))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="mt-6 max-w-md mx-auto text-lg text-[#d9cba3]">
            Wagyu, handmade pasta, rare whiskies and cocktails, served from the top floor.</motion.p>
          <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }} href="#menu" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}
            className="relative inline-block mt-9 px-9 py-3.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light text-ink font-medium">
            <motion.span className="absolute inset-0 rounded-full ring-2 ring-gold-light" animate={{ scale: [1, 1.35], opacity: [0.7, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />
            <span className="relative">Browse the menu</span></motion.a>
        </div>
      </header>

      <div className="border-y border-gold/25 py-4 overflow-hidden bg-ink-2">
        <motion.div className="flex gap-12 w-max font-display text-2xl text-gold/80 whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, ease: 'linear', repeat: Infinity }}>
          {[0, 1].flatMap(k => ['Wagyu aburi', 'Signature cocktails', 'Handmade pasta', 'Single malts', 'Sparkling wine', 'Japanese whiskey', 'Fresh shakes'].map(w => <span key={w + k}>{w} ✦</span>))}
        </motion.div>
      </div>

      <section id="menu" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
        <h2 className="font-display text-5xl md:text-7xl text-center gold-text">The Menu</h2>
        <div className="flex justify-center mt-10">
          <div className="relative flex p-1 rounded-full border border-gold/40 bg-ink-2">
            {sections.map(s => (
              <button key={s} onClick={() => pick(s)} className="relative px-10 py-2.5 rounded-full cursor-pointer font-display text-xl">
                {section === s && <motion.span layoutId="sec" transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }} className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-light" />}
                <span className={`relative ${section === s ? 'text-ink' : 'text-gold-light'}`}>{s}</span>
              </button>))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-6 mb-14">
          {list.map(c => (
            <motion.button key={c.id} whileTap={{ scale: 0.94 }} onClick={() => setTab(c.id)} className="relative px-5 py-2 rounded-full text-sm tracking-wide cursor-pointer">
              {tab === c.id && <motion.span layoutId="pill" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-deep via-gold to-amber" />}
              <span className={`relative ${tab === c.id ? 'text-ink font-medium' : 'text-gold-light'}`}>{c.label}</span>
            </motion.button>))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease }}>
            {cat.groups.map(g => <Group key={g.title} g={g} />)}
          </motion.div>
        </AnimatePresence>
        <p className="text-center text-sm italic text-gold/60">Classic cocktails are available. Prices are inclusive of VAT and subject to 10% service charge.</p>
      </section>

      <footer className="text-center py-14 border-t border-gold/20 bg-ink-2">
        <img src="/logo.png" alt="Penthouse" className="h-28 mx-auto" />
        <p className="mt-4 text-gold/60 text-sm">© {new Date().getFullYear()} Penthouse Restaurant & Bar</p>
      </footer>
    </div>)
}
