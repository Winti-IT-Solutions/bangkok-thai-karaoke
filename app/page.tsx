"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Music2, Mic2, MapPin, Clock, Ticket, Info } from "lucide-react";

export default function Page() {
  const [email, setEmail] = useState("");

  const features = [
    { icon: <Mic2 className="w-6 h-6" />, title: "Großer Karaoke-Screen", desc: "Gemeinsames Singen auf einem großen Floor mit Leinwand." },
    { icon: <Music2 className="w-6 h-6" />, title: "Top-Sound & Licht", desc: "Guter Mix, zuverlässige Mikrofone und moderne Lichteffekte." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Eintritt = Getränk", desc: "Dein Eintritt ist vollständig als Getränk einlösbar." },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-lg">Bangkok Thai Karaoke</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#features" className="hover:text-slate-600">Highlights</a>
            <a href="#entry" className="hover:text-slate-600">Eintritt</a>
            <a href="#hours" className="hover:text-slate-600">Öffnungszeiten</a>
            <a href="#contact" className="hover:text-slate-600">Kontakt</a>
          </nav>
          <a href="#entry" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-brand text-white shadow-sm hover:shadow-md">
            <Ticket className="w-4 h-4" /> Eintritt ansehen
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-10 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold tracking-tight">
              Thai Karaoke in Winterthur
              <span className="block text-slate-500">Offener Floor mit Leinwand. Modern, gesellig, spontan.</span>
            </motion.h1>
            <p className="mt-5 text-slate-600">Bangkok Thai Karaoke ist für alle zugänglich. Komm vorbei, sing mit und genieße Drinks in lockerer Atmosphäre.</p>
            <form onSubmit={(e)=>{e.preventDefault(); alert(`Danke! Wir schicken dir Neuigkeiten: ${email}`);}} className="mt-6 flex gap-2">
              <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-Mail für News & Events" className="w-full md:w-2/3 rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 bg-brand text-white hover:brightness-95"><ArrowRight className="w-4 h-4" /> Anmelden</button>
            </form>
            <p className="mt-3 text-xs text-slate-500 flex items-center gap-2"><MapPin className="w-4 h-4" /> Zürcherstrasse 123, 8400 Winterthur (Platzhalter)</p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative aspect-[4/3] rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="absolute inset-0 grid grid-rows-6 grid-cols-6 gap-px p-4">
              <div className="col-span-4 row-span-4 bg-slate-50 rounded-2xl flex items-center justify-center"><span className="text-sm text-slate-500">Floor / Leinwand – Bild</span></div>
              <div className="col-span-2 row-span-2 bg-slate-50 rounded-2xl" />
              <div className="col-span-2 row-span-2 bg-slate-50 rounded-2xl" />
              <div className="col-span-6 row-span-2 bg-slate-50 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-200">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Warum Bangkok Thai Karaoke?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Entry */}
      <section id="entry" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Eintritt</h2>
        <div className="mt-6 rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
          <div className="flex items-center gap-2 text-slate-700 font-medium"><Ticket className="w-4 h-4" /> Offener Zugang</div>
          <p className="mt-3 text-slate-600">Eintritt pro Person: <strong>CHF XX</strong> (Platzhalter) – vollständig einlösbar für ein Getränk.</p>
          <p className="mt-2 text-sm text-slate-500 flex items-center gap-2"><Info className="w-4 h-4" /> Komm einfach vorbei – keine Reservation notwendig.</p>
        </div>
      </section>

      {/* Hours */}
      <section id="hours" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-200">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Öffnungszeiten & Lage</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-slate-700 font-medium"><Clock className="w-4 h-4" /> Öffnungszeiten (Platzhalter)</div>
            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li>Mo–Do: 17:00 – 23:00</li>
              <li>Fr: 17:00 – 01:00</li>
              <li>Sa: 14:00 – 01:00</li>
              <li>So: 14:00 – 22:00</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <iframe title="Karte Winterthur" src="https://maps.google.com/maps?q=Zürcherstrasse%20123%2C%208400%20Winterthur&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-72" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-200">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Kontakt</h2>
        <p className="mt-2 text-slate-600">
          Fragen? Schreib uns – wir melden uns per E-Mail.{" "}
          <a
            href="https://wa.me/41791234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline font-medium"
          >
            Schreib uns per WhatsApp
          </a>
        </p>
        <form action="/api/contact" method="post" className="mt-6 grid md:grid-cols-3 gap-3">
          <input name="name" type="text" placeholder="Dein Name" className="rounded-2xl border border-slate-300 px-4 py-3" />
          <input name="email" type="email" placeholder="E-Mail" className="rounded-2xl border border-slate-300 px-4 py-3" />
          <button className="rounded-2xl px-4 py-3 bg-brand text-white">Absenden</button>
        </form>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500">© {new Date().getFullYear()} Bangkok Thai Karaoke • Winterthur • Impressum • Datenschutz</footer>
    </div>
  );
}
