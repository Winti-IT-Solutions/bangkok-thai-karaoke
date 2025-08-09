"use client";
import { motion } from "framer-motion";
import { SketchMic, SketchNote, SketchTicket } from "@/components/icons";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");

  const features = [
    { icon: <SketchMic className="w-9 h-9" />, title: <>Rauf auf die <span className=\"text-[var(--neon-pink)]\">Leinwand</span>!</>, desc: "Großer Screen, laute Stimme, gute Laune." },
    { icon: <SketchNote className="w-9 h-9" />, title: <>Songs, <span className=\"text-[var(--neon-blue)]\">Songs</span>, Songs</>, desc: "Such dir was aus und sing los – spontan & zusammen." },
    { icon: <SketchTicket className="w-9 h-9" />, title: <>Eintritt = <span className=\"text-[var(--neon-yellow)]\">Getränk</span></>, desc: "Dein Ticket kannst du komplett für ein Drink einlösen." },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 pt-16 pb-12 md:pt:24 md:pb-16">
        <span className="pill wobble">Winterthur • Bangkok Thai Karaoke</span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
          style={{ fontFamily: "'Amatic SC', cursive", letterSpacing: "0.5px" }}
        >
          Singen? Immer! <span className="text-[var(--neon-blue)]">Laut.</span> <span className="text-[var(--neon-pink)]">Bunt.</span> <span className="text-[var(--neon-yellow)]">Zusammen.</span>
        </motion.h1>
        <p className="mt-4 text-slate-300 text-lg max-w-2xl">
          Offener Karaoke-Floor mit Leinwand, Neon-Vibes und guter Stimmung. Komm vorbei, nimm ein Mikro und leg los!
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); alert(`Danke! Wir schicken dir Neuigkeiten: ${email}`); }}
          className="mt-6 flex gap-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="E-Mail für Events & Specials"
            className="w-full md:w-2/3 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]"
          />
          <button className="btn-sketch">🎟 Lass uns singen!</button>
        </form>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card">
              <div className="w-12 h-12 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-center mb-4 text-slate-200 floaty">
                {f.icon}
              </div>
              <h3 className="font-semibold mb-1 text-slate-100">{f.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eintritt */}
      <section id="entry" className="max-w-6xl mx-auto px-4 py-12">
        <div className="card">
          <div className="flex items-center gap-3 text-slate-200 font-medium">
            <SketchTicket className="w-6 h-6" /> Eintritt
          </div>
          <p className="mt-3 text-slate-300">
            Pro Person: <b>CHF XX</b> (Platzhalter) – komplett einlösbar für ein Getränk.
          </p>
          <p className="mt-1 text-sm text-slate-400">Einfach vorbeikommen – keine Reservation notwendig.</p>
        </div>
      </section>

      {/* Öffnungszeiten & Lage */}
      <section id="hours" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card">
            <div className="flex items-center gap-3 text-slate-200 font-medium">
              🕒 Öffnungszeiten
            </div>
            <ul className="mt-3 text-sm text-slate-300 space-y-1">
              <li>Mo–Do: 17:00 – 23:00</li>
              <li>Fr: 17:00 – 01:00</li>
              <li>Sa: 14:00 – 01:00</li>
              <li>So: 14:00 – 22:00</li>
            </ul>
          </div>
          <div className="card overflow-hidden p-0">
            <iframe title="Karte Winterthur" src="https://maps.google.com/maps?q=Zürcherstrasse%20123%2C%208400%20Winterthur&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-72" />
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="card">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p className="mt-2 text-slate-300">
            Fragen? Schreib uns – wir melden uns per E‑Mail.{" "}
            <a href="https://wa.me/41791234567" target="_blank" rel="noopener noreferrer" className="underline decoration-[var(--neon-blue)] underline-offset-4">
              WhatsApp
            </a>
          </p>
          <form action="/api/contact" method="post" className="mt-6 grid md:grid-cols-3 gap-3">
            <input name="name" type="text" placeholder="Dein Name" className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
            <input name="email" type="email" placeholder="E‑Mail" className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
            <button className="btn-sketch">Absenden</button>
          </form>
        </div>
        <footer className="mt-10 text-sm text-slate-400">© {new Date().getFullYear()} Bangkok Thai Karaoke • Winterthur • Impressum • Datenschutz</footer>
      </section>
    </div>
  );
}
