import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '@/lib/animations';

export default function SloganVision() {
  return (
    <section id="slogan" className="bg-[#F2EDE8] py-20 px-6 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9B59C 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Accent line above */}
        <div className="w-16 h-0.5 bg-[#C9B59C] mx-auto mb-10" />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-2xl md:text-[2rem] font-bold text-[#C9B59C] mb-12 leading-relaxed"
        >
          הסיפור שלנו. הלקחים שלכם להוביל קדימה.
        </motion.p>

        {/* Accent line below slogan */}
        <div className="w-16 h-0.5 bg-[#C9B59C] mx-auto mb-12" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#B8A48A] text-sm font-light uppercase tracking-[0.25em] mb-4">חזון</p>
          <p className="text-[#1A1A1A] text-base md:text-[1.05rem] leading-[1.8] font-normal">
            להשפיע על אנשים, ארגונים ודור צעיר באמצעות סיפור אמת מהשטח מתוך מחויבות אמיתית, כנות, אחריות וסטנדרטים לא מתפשרים כדי לחזק מנהיגות, חוסן וקבלת החלטות נכונה תחת לחץ. ליצור מרחב שבו סיפור הלחימה לא נשאר זיכרון בלבד, אלא הופך ללמידה, לערכים ולכלים מעשיים לחיים שמסייעים לאנשים להתמודד עם משברים ואתגרים גם מחוץ לשדה הקרב.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
