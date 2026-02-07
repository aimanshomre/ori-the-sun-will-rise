import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, viewportConfig } from '@/lib/animations';
import { HiArrowTrendingUp, HiBolt, HiShieldCheck, HiUserGroup, HiArrowLongLeft, HiSparkles } from 'react-icons/hi2';

const takeaways = [
  { icon: HiArrowTrendingUp, text: 'איך מובילים כשקשה' },
  { icon: HiBolt, text: 'קבלת החלטות תחת לחץ' },
  { icon: HiShieldCheck, text: 'התמודדות עם משברים ואתגרים' },
  { icon: HiUserGroup, text: 'החזקת צוות לאורך זמן' },
  { icon: HiArrowLongLeft, text: 'ממשיכים קדימה אחרי רגעים מטלטלים' },
  { icon: HiSparkles, text: 'דיוק במסרים והתאמה לקהל' },
];

export default function TheResult() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="result" className="bg-[#111111] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#F5F5F5] mb-2">
            המסר שלי אליך, התוצאה שתקבל
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] mx-auto mb-8 rounded-full" />

          <p className="text-[#F5F5F5] text-base md:text-[1.05rem] leading-[1.8] font-normal mb-14">
            בעזרת הדרך שנעבור יחד בהרצאה, במפגש או דרך הספר תקבל/י סיפור אמת שמייצר חיבור עמוק, ומתוכו למידה ולקחים: איך מובילים כשקשה, איך מקבלים החלטות תחת לחץ, איך מתמודדים עם משברים ואתגרים, איך מחזיקים צוות לאורך זמן, ואיך ממשיכים קדימה גם אחרי רגעים מטלטלים. וזה עם דיוק במסרים והתאמה לקהל כדי שהחוויה תישאר איתכם ותשפיע לאורך זמן.
          </p>
        </motion.div>

        {/* Takeaway cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14"
        >
          {takeaways.map((item) => (
            <motion.div
              key={item.text}
              variants={scaleIn}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#D4A843]/30 transition-colors"
            >
              <item.icon className="text-[#D4A843] text-2xl" />
              <p className="text-[#F5F5F5] text-sm text-center font-medium">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <button
            onClick={scrollToContact}
            className="bg-[#D4A843] text-[#0A0A0A] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#E8C96A] transition-colors cursor-pointer"
          >
            לתיאום הרצאה ללא עלות
          </button>
        </motion.div>
      </div>
    </section>
  );
}
