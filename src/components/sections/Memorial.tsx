import { motion } from 'framer-motion';
import { dignifiedFadeIn, staggerContainer, viewportConfig } from '@/lib/animations';
import memorialImage from '@/assets/images/ori-stage-memorial.jpeg';

const fallenSoldiers = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: '[שם החייל]',
  yizkorUrl: '#',
}));

export default function Memorial() {
  return (
    <section id="memorial" className="bg-[#0D0D0D] py-28 px-6 relative">
      {/* Top gold separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-[#D4A843]/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Animated candle */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-1 h-10 bg-gradient-to-t from-[#D4A843] to-transparent rounded-full" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-5 bg-[#FFD700] rounded-full blur-[2px] animate-candle" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-8 bg-[#FFD700]/20 rounded-full blur-md animate-candle" />
          </div>
        </div>

        <motion.div
          variants={dignifiedFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            לזכרם
          </h2>
          <p className="text-[#A0A0A0] text-base">
            נופלי הפלוגה שנפלו בהגנה על המדינה
          </p>
        </motion.div>

        {/* Memorial image */}
        <motion.div
          variants={dignifiedFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <img
            src={memorialImage}
            alt="אורי חוכימה על הבמה עם שקף הנצחה לנופלי הפלוגה"
            className="w-full rounded-xl border border-[#D4A843]/20"
            loading="lazy"
          />
        </motion.div>

        {/* Fallen soldiers grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {fallenSoldiers.map((soldier) => (
            <motion.div
              key={soldier.id}
              variants={dignifiedFadeIn}
              className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center"
            >
              {/* Placeholder photo circle */}
              <div className="w-16 h-16 rounded-full border-2 border-[#D4A843]/40 bg-[#1A1A1A] mx-auto mb-4" />
              <p className="text-[#D4A843] font-bold text-sm mb-2">{soldier.name}</p>
              <a
                href={soldier.yizkorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] text-xs hover:text-[#D4A843] transition-colors"
              >
                ← לדף היזכור
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gold separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-[#D4A843]/40 to-transparent" />
    </section>
  );
}
