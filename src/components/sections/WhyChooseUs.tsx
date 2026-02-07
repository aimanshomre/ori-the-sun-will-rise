import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations';

const values = [
  'אמת',
  'מחויבות',
  'מקצועיות',
  'כבוד לזיכרון',
  'צניעות',
  'דיוק',
  'שיח בגובה העיניים',
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#F5F5F5] mb-2">
            למה לבחור בנו
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] mb-8 rounded-full" />

          <p className="text-[#F5F5F5] text-base md:text-[1.05rem] leading-[1.8] font-normal mb-10">
            בעולם רווי רעש, סיסמאות ומידע חלקי , חשוב לשמוע סיפור אמת שמגיע מבפנים, בצורה אחראית, מדויקת ומכבדת. ההרצאה שלי מביאה את סיפור הפלוגה מה־7/10 ולאורך הלחימה, ומשם יוצאים עם דבר אחד ברור: למידה אמיתית. לא &quot;רק סיפור&quot;, אלא לקחים שאפשר לקחת לחיים איך מקבלים החלטות כשאין תמונה מלאה, איך מתמודדים עם פחד ולחץ, איך מחזיקים צוות לאורך זמן, איך לומדים מאירועים מרכזיים תוך כדי תנועה, ואיך בונים חוסן אישי וצוותי גם כשהמציאות לא עוצרת. אני מביא ניסיון פיקודי מהשטח ויכולת עמידה מול קהל, ומתרגם חוויות מורכבות לשפה פשוטה ונוגעת כזאת שמייצרת חיבור, הבנה, וכלים. הערכים שמובילים אותי בעשייה הם: אמת, מחויבות, מקצועיות, כבוד לזיכרון, צניעות, דיוק ושיח בגובה העיניים. הכל תחת קורת גג אחת: הרצאות מותאמות לקהלים שונים, אירועים ומפגשי קהילה, תוכן דיגיטלי ושיתופי פעולה סביב הספר והמסרים.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap gap-3"
        >
          {values.map((value) => (
            <motion.span
              key={value}
              variants={fadeInUp}
              className="border border-[#D4A843]/50 rounded-full px-5 py-2.5 text-sm text-[#D4A843] hover:bg-[#D4A843]/10 hover:shadow-[0_0_15px_rgba(212,168,67,0.15)] transition-all duration-300"
            >
              {value}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
