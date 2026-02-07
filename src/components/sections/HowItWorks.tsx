import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations';

const steps = [
  { num: 1, label: 'מיפוי', text: 'שיחה קצרה להבנת הקהל, הצורך, אופי האירוע והמסרים הרצויים.' },
  { num: 2, label: 'הצגה ושיקוף', text: 'הצעת מבנה הרצאה/מפגש (משך, אירועים מרכזיים שיודגשו, נושאים, דגשים, סגנון).' },
  { num: 3, label: 'התאמה אישית', text: 'בניית גרסה מותאמת לקהל — ארגון/נוער/יחידה/קהילה, כולל התאמת עומק, שפה ודגשים.' },
  { num: 4, label: 'ביצוע', text: 'הרצאה/מפגש מדויק, עם מקום לשאלות, דיון ולמידה מהאירועים.' },
  { num: 5, label: 'מעקב ובקרה', text: 'אפשרות להמשך שיח/מפגש נוסף/רכישה מרוכזת/תוכן המשך בהתאם לצורך.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#F5F5F5] mb-2">
            איך זה עובד?
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] mb-6 rounded-full" />
          <p className="text-[#A0A0A0] text-base md:text-[1.05rem] leading-[1.8] mb-14 max-w-3xl">
            שיטת העבודה שלי מבוססת התאמה מדויקת לקהל ולמטרה כדי שהסיפור יעבור נכון, בכבוד, ובעוצמה, ויהפוך ללמידה אמיתית.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Vertical gold line */}
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-[#D4A843]/30" />

          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                className="flex items-start gap-6 relative"
              >
                {/* Number circle */}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full border-2 border-[#D4A843] bg-[#0A0A0A] flex items-center justify-center">
                  <span className="text-[#D4A843] font-bold text-lg">{step.num}</span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-[#D4A843] font-bold text-lg mb-1">{step.label}</h3>
                  <p className="text-[#A0A0A0] text-[0.95rem] leading-[1.7]">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
