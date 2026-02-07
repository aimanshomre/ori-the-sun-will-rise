import { motion, type Variants } from 'framer-motion';
import heroImage from '@/assets/images/ori-soldiers-illustration.jpeg';

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, delay } },
});

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="חיילים בשדה הקרב עם שקיעה"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.95) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pb-24 max-w-3xl">
        <motion.h1
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white leading-tight mb-6"
        >
          &quot;אחרינו השמש תזרח&quot;
        </motion.h1>

        <motion.p
          variants={fadeUp(0.6)}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl font-medium text-[#D4A843] tracking-wide mb-4"
        >
          הסיפור שלנו. הלקחים שלכם להוביל קדימה.
        </motion.p>

        <motion.p
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-[#A0A0A0] mb-8 max-w-[700px] mx-auto leading-relaxed"
        >
          הרצאות מנהיגות, חוסן וקבלת החלטות מתוך סיפור לחימה אמיתי
        </motion.p>

        <motion.button
          variants={fadeUp(1.2)}
          initial="hidden"
          animate="visible"
          onClick={scrollToContact}
          className="bg-[#D4A843] text-[#0A0A0A] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#E8C96A] transition-colors animate-pulse-glow cursor-pointer"
        >
          לתיאום הרצאה ללא עלות
        </motion.button>

        <motion.p
          variants={fadeUp(1.4)}
          initial="hidden"
          animate="visible"
          className="text-[#666666] text-sm mt-3"
        >
          ללא התחייבות
        </motion.p>
      </div>
    </section>
  );
}
