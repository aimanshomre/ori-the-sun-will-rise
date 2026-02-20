import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { HiShieldCheck, HiFire, HiUserGroup, HiStar, HiArrowPath } from 'react-icons/hi2';

const benefits = [
  {
    icon: HiShieldCheck,
    title: 'קבלת החלטות באי־ודאות',
    description: 'כשאין זמן ואין תמונה מלאה',
  },
  {
    icon: HiFire,
    title: 'ניהול לחץ ועומס',
    description: 'איך ממשיכים לתפקד גם כשקשה',
  },
  {
    icon: HiUserGroup,
    title: 'החזקת צוות ואמון',
    description: 'תקשורת פשוטה, בהירה ומובילה',
  },
  {
    icon: HiStar,
    title: 'ערכים תחת אש',
    description: 'דיוק, אחריות, ודוגמה אישית',
  },
  {
    icon: HiArrowPath,
    title: 'חוסן וצמיחה אחרי משבר',
    description: 'לקום, להשתפר ולהמשיך קדימה',
  },
];

export default function WhyChooseUs() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why" className="bg-[#FAFAF8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] mb-2">
            למה לבחור בי?
          </h2>
          <div className="w-16 h-1 bg-[#C9B59C] mb-8 rounded-full" />

          <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mb-10">
            אני מביא סיפור שמגיע מבפנים, בגובה העיניים, בלי פילטרים, עם דיוק, אחריות וכבוד. זו לא הרצאה שנשארת ברגש בלבד, אלא מסע שמתרגם מציאות קיצונית לכלים פרקטיים שאפשר לקחת לחיים, לצוותים ולארגון, מספר את סיפור הגבורה של הפלוגה ומנציח את הגיבורים שמסרו את נפשם להגנה על המדינה.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h3 className="text-[#1A1A1A] font-bold text-xl mb-6">מה הקהל מקבל בפועל:</h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="bg-white border border-[#E5DDD4] rounded-xl p-6 hover:border-[#C9B59C]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <benefit.icon className="text-[#C9B59C] text-[2rem] mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-[#1A1A1A] font-bold text-lg mb-2">{benefit.title}</h4>
              <p className="text-[#7A7068] font-normal text-[0.95rem]">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mb-8">
            ההרצאה מותאמת לקהלים שונים (ארגונים, מכינות, בתי ספר וקבוצות), ומשלבת אמת אנושית עם מסגרת עבודה ברורה, לצד הנצחה וזיכרון של לוחמי הפלוגה שנפלו וגבורתם.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-[#C9B59C] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#B8A48A] transition-colors cursor-pointer"
          >
            לתיאום הרצאה
          </button>
        </motion.div>
      </div>
    </section>
  );
}
