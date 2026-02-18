import { motion } from 'framer-motion';
import { fadeInRight, fadeInLeft, staggerContainer, scaleIn, viewportConfig } from '@/lib/animations';
import mainImage from '@/assets/images/ori-lecture-conference.jpeg';
import img1 from '@/assets/images/ori-lecture-military.jpeg';
import img2 from '@/assets/images/ori-lecture-auditorium.jpeg';
import img3 from '@/assets/images/ori-lecture-community.jpeg';
import img4 from '@/assets/images/ori-panel-2141.jpeg';

const gridImages = [
  { src: img1, alt: 'אורי מרצה בפני חיילי צה״ל' },
  { src: img2, alt: 'אורי מרצה באודיטוריום מול קהל צבאי' },
  { src: img3, alt: 'אורי מרצה באולם קהילתי' },
  { src: img4, alt: 'אורי בפאנל מועדון 21/41' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FAFAF8] py-24 px-6">
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
              מי אני
            </h2>
            <div className="w-16 h-1 bg-[#C9B59C] mb-8 rounded-full" />

            <p className="text-[#7A7068] text-base md:text-[1.05rem] leading-[1.8] font-normal">
              שמי אורי חוכימה, בן 26, סטודנט למדעי המחשב ב־אוניברסיטת רייכמן, מ״פ פחת״ק 13/77 במלחמת &quot;חרבות ברזל&quot; וב־7/10, מרצה וסופר. ב־7/10 ובמהלך המלחמה מצאתי את עצמי מוביל פלוגה בתוך מציאות שהשתנתה בשניות, אחריות על אנשים, קבלת החלטות בתנאי אי ודאות, עייפות מצטברת, שחיקה, והצורך להמשיך לתפקד גם כשהלב נשבר. ההרצאה שלי מספרת את סיפור הלחימה של הפלוגה, מהדקות הראשונות של ה־7/10, דרך אירועים מרכזיים לאורך הלחימה, ועד התמודדות יומיומית עם אתגרים ומשברים. זה סיפור שמגיע מבפנים, בגובה העיניים, בלי פילטרים אבל עם דיוק, כבוד, ואחריות למה שנכון לספר. מתוך האירועים עצמם אני מוציא את מה שבאמת חשוב: למידה, לקחים, ותובנות לחיים, איך מקבלים החלטות כשאין זמן, איך מנהלים פחד ולחץ, איך מחזיקים צוות, איך משמרים ערכים תחת עומס, ואיך קמים אחרי נפילות וממשיכים קדימה. מתוך הדרך הזו נולד גם הספר שכתבתי &quot;אחרינו השמש תזרח&quot; שמספר את סיפור הפלוגה ואת המנהיגות שנולדת דווקא מהמקומות הכי קשים. היום אני מביא את הסיפור הזה לקהלים בכל הארץ בהרצאות שמחברות בין אמת אנושית וכלים מעשיים: מנהיגות בזמן אמת, התמודדות עם משבר, קבלת החלטות, אחריות, וחוסן אישי וצוותי. המטרה שלי היא אחת: להפוך סיפור לחימה ומנהיגות למסע שיש בו משמעות שמייצר חיבור, השראה, ותנועה קדימה ולהנציח את לוחמי הפלוגה שנפלו ואת גבורתם.
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
              src={mainImage}
              alt="אורי חוכימה מרצה בכנס"
              className="w-full rounded-xl border border-[#E5DDD4] mb-4 shadow-sm"
              loading="lazy"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 gap-3"
            >
              {gridImages.map((img, i) => (
                <motion.img
                  key={i}
                  variants={scaleIn}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-32 md:h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm"
                  loading="lazy"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
