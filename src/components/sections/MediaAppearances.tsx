import { motion } from 'framer-motion';
import { FaYoutube, FaPodcast, FaWikipediaW } from 'react-icons/fa';
import { HiTv, HiGlobeAlt, HiNewspaper } from 'react-icons/hi2';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

const mediaCards = [
  {
    icon: HiTv,
    iconColor: 'text-[#C9B59C]',
    title: 'ראיון בכאן 11',
    href: 'https://vimeo.com/1159115776?fl=pl&fe=sh',
  },
  {
    icon: FaYoutube,
    iconColor: 'text-red-500',
    title: 'ראיון בערוץ 14',
    href: 'https://www.youtube.com/watch?v=eTSI4Ku09eI',
  },
  {
    icon: FaYoutube,
    iconColor: 'text-red-500',
    title: 'שוברים דיסטנס',
    href: 'https://www.youtube.com/watch?v=MMDpXavYU-o',
  },
  {
    icon: FaPodcast,
    iconColor: 'text-[#C9B59C]',
    title: 'פודקאסט חטיבה 7',
    href: 'https://podcasts.apple.com/fr/podcast/%D7%A8%D7%A1-%D7%9F-%D7%90%D7%95%D7%A8%D7%99-%D7%97%D7%95%D7%9B%D7%99%D7%9E%D7%94/id1786124997?i=1000683182807',
  },
  {
    icon: HiNewspaper,
    iconColor: 'text-[#C9B59C]',
    title: 'כתבה ב-וואלה',
    href: 'https://news.walla.co.il/item/3620956',
  },
  {
    icon: HiNewspaper,
    iconColor: 'text-[#C9B59C]',
    title: 'כתבה ב-N12',
    href: 'https://www.mako.co.il/news-military/2025_q1/Article-cd758cdb787e591026.htm',
  },
  {
    icon: HiNewspaper,
    iconColor: 'text-[#C9B59C]',
    title: 'כתבה על לחימת הפלוגה בסוריה',
    href: 'https://www.ynet.co.il/news/article/yokra14360477',
  },
  {
    icon: FaWikipediaW,
    iconColor: 'text-[#C9B59C]',
    title: 'ויקיפדיה - קרב ארז',
    href: 'https://he.wikipedia.org/wiki/%D7%A7%D7%A8%D7%91_%D7%90%D7%A8%D7%96',
  },
  {
    icon: HiGlobeAlt,
    iconColor: 'text-[#C9B59C]',
    title: 'עמוד הפלוגה',
    href: 'https://www.nov22pachtak13golani.com/',
  },
];

export default function MediaAppearances() {
  return (
    <section id="media" className="bg-[#F2EDE8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] mb-2">
            הפלוגה בתקשורת
          </h2>
          <div className="w-16 h-1 bg-[#C9B59C] mb-12 rounded-full" />
        </motion.div>

        {/* Media Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {mediaCards.map((card) => (
            <motion.a
              key={card.title}
              variants={fadeInUp}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-[#E5DDD4] hover:border-[#C9B59C]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group block"
            >
              <card.icon className={`${card.iconColor} text-[2rem] mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-[#1A1A1A] font-semibold text-base">{card.title}</h3>
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
          className="block bg-gradient-to-l from-[#C9B59C]/15 to-[#C9B59C]/5 border border-[#C9B59C]/30 rounded-xl p-6 md:p-8 hover:border-[#C9B59C]/60 transition-all group"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-[#C9B59C]/20 flex items-center justify-center shrink-0">
              <span className="text-[#C9B59C] text-xl">📖</span>
            </div>
            <div>
              <h3 className="text-[#C9B59C] font-bold text-lg mb-1">הספר &quot;אחרינו השמש תזרח&quot;</h3>
              <p className="text-[#7A7068] text-sm">תמכו בפרויקט ב-Headstart</p>
            </div>
            <div className="mr-auto text-[#C9B59C] opacity-0 group-hover:opacity-100 transition-opacity text-lg">←</div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
