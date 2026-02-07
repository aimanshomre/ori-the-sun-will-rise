import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '@/lib/animations';

export default function SloganVision() {
  return (
    <section id="slogan" className="bg-[#111111] py-20 px-6 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #D4A843 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Gold line above */}
        <div className="w-16 h-0.5 bg-[#D4A843] mx-auto mb-10" />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-2xl md:text-[2rem] font-bold text-[#D4A843] mb-12 leading-relaxed"
        >
          הסיפור שלנו. הלקחים שלכם להוביל קדימה.
        </motion.p>

        {/* Gold line below slogan */}
        <div className="w-16 h-0.5 bg-[#D4A843] mx-auto mb-12" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#666666] text-sm font-light uppercase tracking-[0.25em] mb-4">חזון</p>
          <p className="text-[#F5F5F5] text-base md:text-[1.05rem] leading-[1.8] font-normal">
            להשפיע על אנשים, ארגונים ודור צעיר באמצעות סיפור אמת מהשטח מתוך מחויבות אמיתית, כנות, אחריות וסטנדרטים לא מתפשרים כדי לחזק מנהיגות, חוסן וקבלת החלטות נכונה תחת לחץ. ליצור מרחב שבו סיפור הלחימה לא נשאר זיכרון בלבד, אלא הופך ללמידה, לערכים ולכלים מעשיים לחיים שמסייעים לאנשים להתמודד עם משברים ואתגרים גם מחוץ לשדה הקרב.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
