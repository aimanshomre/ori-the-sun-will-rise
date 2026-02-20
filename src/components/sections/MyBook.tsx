import { motion } from 'framer-motion';
import { fadeInRight, fadeInLeft, viewportConfig } from '@/lib/animations';
import bookCover from '@/assets/images/book-cover.jpg';

export default function MyBook() {
  return (
    <section id="book" className="bg-[#FAFAF8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] mb-2">
            הספר שלי
          </h2>
          <div className="w-16 h-1 bg-[#C9B59C] mb-12 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column (right in RTL) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mb-4">
              מתוך הדרך הזו נולד גם הספר &quot;אחרינו השמש תזרח&quot; — זה ספר שנכתב לא כדי להיות &quot;ספר מלחמה&quot; אלא כדי לספר על אמת, על אנשים שהיו עולם ומלואו, על מנהיגות שנולדת ברגעים שאין בהם ודאות, על לקחים בשדה הקרב מדרג הפיקוד הטקטי ועל המחיר והכוח של להמשיך לתפקד גם כשהכל נראה אבוד.
            </p>
            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mb-4">
              הספר מביא את סיפור הפלוגה מה־7/10 והלחימה אחריו והוא נכתב מתוך מטרה אחת ברורה — להנציח את גבורת לוחמי הפלוגה במלחמה הארוכה בתולדות המדינה.
            </p>
            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mb-8">
              כדי שהספר ייצא לאור, פתחתי Headstart — אם הסיפור נוגע בכם, אשמח שתתמכו, תשתפו ותהיו חלק מהמסע הזה.
            </p>

            <a
              href="https://headstart.co.il/project/86894"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9B59C] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#B8A48A] transition-colors"
            >
              לתמיכה ב-Headstart
            </a>
          </motion.div>

          {/* Book cover image (left in RTL) */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <img
              src={bookCover}
              alt="כריכת הספר אחרינו השמש תזרח"
              className="w-full max-w-sm mx-auto rounded-xl border border-[#E5DDD4] shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
