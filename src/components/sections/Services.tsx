import { motion } from 'framer-motion';
import { HiBuildingOffice2, HiUserGroup, HiShieldCheck, HiBookOpen } from 'react-icons/hi2';
import { staggerContainer, scaleIn, fadeInUp, viewportConfig } from '@/lib/animations';

const services = [
  {
    icon: HiBuildingOffice2,
    title: 'הרצאות לארגונים',
    description: 'הרצאה מותאמת לקהל ולמטרה, שמבוססת על סיפור הפלוגה והאירועים המרכזיים בלחימה — וממנה יוצאים עם תובנות פרקטיות על מנהיגות, קבלת החלטות, ניהול משברים וחוסן.',
  },
  {
    icon: HiUserGroup,
    title: 'הרצאות לבתי ספר/מכינות/נוער',
    description: 'סיפור אמיתי שמדבר בשפה צעירה וברורה — על אחריות, ערכים, התמודדות עם לחץ, חברות שמחזיקה גם בזמנים קשים.',
  },
  {
    icon: HiShieldCheck,
    title: 'הרצאות ליחידות ומסגרות ביטחוניות',
    description: 'שיח מקצועי מהשטח על פיקוד תחת עומס, לקחים מאירועים, שחיקה, והחזקת צוות לאורך לחימה ממושכת.',
  },
  {
    icon: HiBookOpen,
    title: 'אירועי ספר / שיח קהילה',
    description: 'מפגש סביב "אחרינו השמש תזרח": סיפור, למידה, שאלות ותשובות וחיבור לקהל (כולל אפשרות לרכישה מרוכזת/חתימה).',
  },
];

const additionalServices = [
  'רכישה מרוכזת של ספרים לארגון/קהילה + הקדשה',
  'שיתופי פעולה עם תקשורת/פודקאסטים/יוצרי תוכן',
];

const clientTypes = [
  'ארגונים וחברות',
  'בתי ספר',
  'מכינות',
  'יחידות ומסגרות ביטחוניות',
  'קהילות',
  'ימי מנהיגות ועידוד גיוס',
];

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#F5F5F5] mb-2">
            השירותים המגוונים שלי
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] mb-12 rounded-full" />
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#D4A843]/50 hover:shadow-[0_0_30px_rgba(212,168,67,0.08)] transition-all duration-300 group"
            >
              <service.icon className="text-[#D4A843] text-[2.5rem] mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-[#F5F5F5] font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-[#A0A0A0] font-normal leading-[1.7] text-[0.95rem]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <h3 className="text-[#F5F5F5] font-bold text-lg mb-4">שירותים נוספים:</h3>
          <div className="flex flex-col gap-3">
            {additionalServices.map((svc) => (
              <div key={svc} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4A843] shrink-0" />
                <p className="text-[#A0A0A0] text-[0.95rem]">{svc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h3 className="text-[#F5F5F5] font-bold text-lg mb-4">הלקוחות שלי:</h3>
          <p className="text-[#A0A0A0] text-[0.95rem] leading-[1.7] mb-5 md:hidden">
            ארגונים וחברות, בתי ספר, מכינות, יחידות ומסגרות ביטחוניות, קהילות, ימי מנהיגות ועידוד גיוס, וכל מי שמחפש סיפור אמיתי עם ערך וכלים לחיים.
          </p>
          <div className="hidden md:flex flex-wrap gap-3">
            {clientTypes.map((client) => (
              <span
                key={client}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-4 py-2 text-sm text-[#A0A0A0]"
              >
                {client}
              </span>
            ))}
            <span className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-4 py-2 text-sm text-[#A0A0A0]">
              וכל מי שמחפש סיפור אמיתי עם ערך וכלים לחיים
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
