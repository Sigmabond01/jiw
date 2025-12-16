"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Texture - Subtle Washi Paper Effect */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>

      {/* Decorative Circle (Rising Sun style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-primary/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <span className="inline-block px-4 py-1 border-b border-primary/30 text-primary/80 text-xs font-bold tracking-[0.4em] uppercase mb-6">
              Japan — India — Caregiving
            </span>

            {/* Stamp */}
            <div className="absolute -top-6 -right-6 md:-right-12 border-[3px] border-red-800/60 text-red-800/80 px-3 py-2 rounded-sm rotate-12 opacity-80 mix-blend-multiply pointer-events-none select-none">
              <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-center leading-none">Ethical</span>
              <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-center leading-none mt-0.5">Recruitment</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8 text-foreground">
              Building global careers <br />
              <span className="text-primary italic">for Indian candidates!</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto font-light leading-relaxed"
          >
            Bridging the gap between talent and opportunity in Japan`s Caregiving Sector.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="px-10 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all tracking-widest uppercase text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Explore Opportunities
            </button>
            <button className="text-primary hover:text-primary/80 font-medium tracking-widest uppercase text-sm border-b border-primary pb-px hover:border-transparent transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Vertical Japanese Text (Left) 
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-10 pointer-events-none select-none writing-vertical-rl text-8xl font-serif font-black text-foreground">
        架け橋となる
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-10 pointer-events-none select-none writing-vertical-rl text-8xl font-serif font-black text-primary">
        未来を創る
      </div>
      */}
    </section>
  );
}