import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight, fadeInLeft, viewportConfig } from '@/lib/animations';
import visionImage from '@/assets/images/vision.jpg';

export default function SloganVision() {
  return (
    <section id="slogan" className="bg-[#F2EDE8] py-20 px-6 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9B59C 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Accent line above */}
        <div className="w-16 h-0.5 bg-[#C9B59C] mx-auto mb-10" />

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] text-center mb-12"
        >
          החזון שלי
        </motion.h2>

        {/* Accent line below title */}
        <div className="w-16 h-0.5 bg-[#C9B59C] mx-auto mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column (right in RTL) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-[#1A1A1A] text-lg md:text-xl leading-[1.8] font-normal">
              להשפיע על אנשים, ארגונים ודור צעיר באמצעות סיפור אמת מהשטח מתוך מחויבות אמיתית, כנות, אחריות וסטנדרטים לא מתפשרים כדי לחזק מנהיגות, חוסן וקבלת החלטות נכונה תחת לחץ. ליצור מרחב שבו סיפור הלחימה לא נשאר זיכרון בלבד, אלא הופך ללמידה, לערכים ולכלים מעשיים לחיים שמסייעים לאנשים להתמודד עם משברים ואתגרים גם מחוץ לשדה הקרב.
            </p>
          </motion.div>

          {/* Image column (left in RTL) */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="h-80 md:h-96 overflow-hidden rounded-xl border border-[#E5DDD4] shadow-sm">
              <img
                src={visionImage}
                alt="אורי חוכימה מרצה"
                className="w-full h-full object-cover object-bottom"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
