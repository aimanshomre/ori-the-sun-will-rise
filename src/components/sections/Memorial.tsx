import { motion } from 'framer-motion';
import { dignifiedFadeIn, staggerContainer, viewportConfig } from '@/lib/animations';
import imgDanino from '@/assets/images/fallen/danino.jpeg';
import imgWeizer from '@/assets/images/fallen/weizer.jpeg';
import imgTahar from '@/assets/images/fallen/tahar.jpeg';
import imgYaruchin from '@/assets/images/fallen/yaruchin.jpeg';
import imgErez from '@/assets/images/fallen/erez.jpeg';
import imgZohar from '@/assets/images/fallen/zohar.jpeg';
import imgYang from '@/assets/images/fallen/yang.jpeg';
import imgBarshade from '@/assets/images/fallen/barshade.jpeg';

const fallenSoldiers = [
  {
    id: 1,
    rank: 'סמ"ר',
    name: 'דניאל דנינו ז״ל',
    photo: imgDanino,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%D7%90%D7%9C%20%D7%9E%D7%A9%D7%94%20%D7%93%D7%A0%D7%99%D7%A0%D7%95/en_d1cad39c0ba6c7fc80e83cabfcd55afa',
  },
  {
    id: 2,
    rank: 'סמ"ר',
    name: 'רועי וייזר ז״ל',
    photo: imgWeizer,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%A8%D7%95%D7%A2%D7%99%20(%D7%97%D7%99%D7%99%D7%9D)%20%D7%95%D7%99%D7%99%D7%96%D7%A8/en_3200e0fd70e8becb80ced1e399868eb5',
  },
  {
    id: 3,
    rank: 'סמל',
    name: 'אדיר טהר ז״ל',
    photo: imgTahar,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%90%D7%93%D7%99%D7%A8%20%D7%98%D7%94%D7%A8/en_285e49f8447842ebf09cbbf47f3c0cc9',
  },
  {
    id: 4,
    rank: 'סמל',
    name: 'אופיר ירוחין ז״ל',
    photo: imgYaruchin,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%90%D7%95%D7%A4%D7%99%D7%A8%20%D7%99%D7%A8%D7%95%D7%97%D7%99%D7%9F/en_42db7b08222e39dfd6f7bad1a5e0bb67',
  },
  {
    id: 5,
    rank: 'סמל',
    name: 'אריאל ארז ז״ל',
    photo: imgErez,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%90%D7%A8%D7%99%D7%90%D7%9C%20%D7%90%D7%A8%D7%96/en_d7df49216f2983ea681276148eb1f7b2',
  },
  {
    id: 6,
    rank: 'סמל',
    name: 'ירון זוהר ז״ל',
    photo: imgZohar,
    objectPosition: 'object-center' as const,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%99%D7%A8%D7%95%D7%9F%20%D7%96%D7%95%D7%94%D7%A8/en_f5eb0576145bf79331c40052b2ccf111',
  },
  {
    id: 7,
    rank: 'סמל',
    name: 'נתנאל יאנג ז״ל',
    photo: imgYang,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%A0%D7%AA%D7%A0%D7%90%D7%9C%20%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%A9%D7%9C%D7%95%D7%9D%20%D7%99%D7%90%D7%A0%D7%92/en_571b67409bded2562b3107999542b1e6',
  },
  {
    id: 8,
    rank: 'סמל',
    name: 'עילי בר-שדה ז״ל',
    photo: imgBarshade,
    yizkorUrl: 'https://www.izkor.gov.il/%D7%A2%D7%99%D7%9C%D7%99%20%D7%91%D7%A8-%D7%A9%D7%93%D7%94/en_73a1fff8b936b24d347636c79a55bc45',
  },
];

export default function Memorial() {
  return (
    <section id="memorial" className="bg-[#0D0D0D] py-28 px-6 relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-[#C9B59C]/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Animated candle */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-1 h-10 bg-gradient-to-t from-[#C9B59C] to-transparent rounded-full" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-5 bg-[#E8C89A] rounded-full blur-[2px] animate-candle" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-8 bg-[#E8C89A]/20 rounded-full blur-md animate-candle" />
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
              {/* Soldier photo */}
              <img
                src={soldier.photo}
                alt={`${soldier.rank} ${soldier.name}`}
                className={`w-24 h-24 rounded-full object-cover ${'objectPosition' in soldier ? soldier.objectPosition : 'object-top'} border-2 border-[#C9B59C]/40 mx-auto mb-4`}
                loading="lazy"
              />
              <p className="text-[#C9B59C] text-xs font-medium mb-1">{soldier.rank}</p>
              <p className="text-white font-bold text-sm mb-3">{soldier.name}</p>
              <a
                href={soldier.yizkorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] text-xs hover:text-[#C9B59C] transition-colors"
              >
                ← לדף היזכור
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-[#C9B59C]/40 to-transparent" />
    </section>
  );
}
