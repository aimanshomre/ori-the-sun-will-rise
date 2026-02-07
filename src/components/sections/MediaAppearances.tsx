import { motion } from 'framer-motion';
import { FaYoutube, FaPodcast } from 'react-icons/fa';
import { HiTv, HiGlobeAlt } from 'react-icons/hi2';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

const mediaCards = [
  {
    icon: FaYoutube,
    iconColor: 'text-red-500',
    title: 'פודקאסט ב-14',
    href: 'https://www.youtube.com/watch?v=MMDpXavYU-o',
  },
  {
    icon: FaPodcast,
    iconColor: 'text-[#D4A843]',
    title: 'פודקאסט חטיבה 7',
    href: 'https://podcasts.apple.com/fr/podcast/%D7%A8%D7%A1-%D7%9F-%D7%90%D7%95%D7%A8%D7%99-%D7%97%D7%95%D7%9B%D7%99%D7%9E%D7%94/id1786124997?i=1000683182807',
  },
  {
    icon: HiTv,
    iconColor: 'text-[#D4A843]',
    title: 'ראיון בכאן 11',
    href: 'https://vimeo.com/1159115776?fl=pl&fe=sh',
  },
  {
    icon: HiGlobeAlt,
    iconColor: 'text-[#D4A843]',
    title: 'עמוד הפלוגה',
    href: 'https://www.nov22pachtak13golani.com/',
  },
];

export default function MediaAppearances() {
  return (
    <section id="media" className="bg-[#111111] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#F5F5F5] mb-2">
            מדיה והופעות
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] mb-12 rounded-full" />
        </motion.div>

        {/* Media Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
        >
          {mediaCards.map((card) => (
            <motion.a
              key={card.title}
              variants={fadeInUp}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] hover:border-[#D4A843]/50 hover:-translate-y-1 transition-all duration-300 group block"
            >
              <card.icon className={`${card.iconColor} text-[2rem] mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-[#F5F5F5] font-semibold text-base">{card.title}</h3>
            </motion.a>
          ))}
        </motion.div>

        {/* Book Headstart banner */}
        <motion.a
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          href="https://headstart.co.il/project/86894"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-l from-[#D4A843]/10 to-[#D4A843]/5 border border-[#D4A843]/30 rounded-xl p-6 md:p-8 hover:border-[#D4A843]/60 transition-all group"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-[#D4A843]/20 flex items-center justify-center shrink-0">
              <span className="text-[#D4A843] text-xl">📖</span>
            </div>
            <div>
              <h3 className="text-[#D4A843] font-bold text-lg mb-1">הספר &quot;אחרינו השמש תזרח&quot;</h3>
              <p className="text-[#A0A0A0] text-sm">תמכו בפרויקט ב-Headstart</p>
            </div>
            <div className="mr-auto text-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity text-lg">←</div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
