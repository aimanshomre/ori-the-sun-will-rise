import { motion } from 'framer-motion';
import { fadeInRight, fadeInLeft, viewportConfig } from '@/lib/animations';
import hukimaImage from '@/assets/images/hukima-image.png';

export default function About() {
  return (
    <section id="about" className="bg-[#FAFAF8] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] mb-2">
              מי אני?
            </h2>
            <div className="w-16 h-1 bg-[#C9B59C] mb-8 rounded-full" />

            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal">
              שמי אורי חוכימה, בן 26, סטודנט, מ״פ פחת״ק 13/77 במלחמת &quot;חרבות ברזל&quot; וב־7/10. במהלך הלחימה מצאתי את עצמי מוביל פלוגה בתוך מציאות שהשתנתה בשניות: אחריות על אנשים, קבלת החלטות בתנאי אי־ודאות, עייפות מצטברת, שחיקה, והצורך להמשיך לתפקד גם כשהלב נשבר.
            </p>
            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mt-4">
              ההרצאה שלי מספרת את סיפור הלחימה של הפלוגה מהדקות הראשונות של ה־7/10, דרך אירועים מרכזיים לאורך המלחמה, ועד ההתמודדות היומיומית עם אתגרים ומשברים. זה סיפור שמגיע מבפנים, בגובה העיניים, בלי פילטרים, אבל עם דיוק, כבוד ואחריות למה שנכון לספר.
            </p>
            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mt-4">
              מתוך האירועים עצמם אני מוציא את מה שבאמת חשוב: לקחים ותובנות לחיים, איך מקבלים החלטות כשאין זמן, איך מנהלים פחד ולחץ, איך מחזיקים צוות, איך משמרים ערכים תחת עומס, ואיך קמים אחרי נפילות וממשיכים קדימה.
            </p>
            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mt-4">
              מתוך הדרך הזו נולד גם הספר שכתבתי &quot;אחרינו השמש תזרח&quot; שמספר את סיפור הפלוגה ואת המנהיגות שנולדת דווקא מהמקומות הכי קשים.
            </p>
            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal mt-4">
              היום אני מביא את הסיפור הזה לקהלים בכל הארץ בהרצאות שמחברות בין אמת אנושית וכלים מעשיים: מנהיגות בזמן אמת, התמודדות עם משבר, קבלת החלטות, אחריות וחוסן אישי וצוותי ובמטרה להעביר את הסיפור והלקחים הלאה ולהנציח את לוחמי הפלוגה שנפלו ואת גבורתם.
            </p>
          </motion.div>

          {/* Image column */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <img
              src={hukimaImage}
              alt="אורי חוכימה במדי צה״ל"
              className="w-full rounded-xl border border-[#E5DDD4] shadow-sm"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
