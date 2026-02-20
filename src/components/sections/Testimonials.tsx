import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
import { fadeInUp, viewportConfig } from '@/lib/animations';
import t1 from '@/assets/images/testimonial-1.png';
import t2 from '@/assets/images/testimonial-2.png';
import t3 from '@/assets/images/testimonial-3.png';
import t4 from '@/assets/images/testimonial-4.png';

const testimonials = [
  { src: t1, alt: 'המלצה מלוחם שמודה לאורי על ההרצאה' },
  { src: t2, alt: 'המלצה על הרצאה מרגשת ומקצועית' },
  { src: t3, alt: 'המלצה קצרה על אורי חוכימה' },
  { src: t4, alt: 'המלצה ממכינה קדם צבאית' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  // Show 2 on desktop, 1 on mobile
  const getVisibleIndices = () => {
    const indices = [current];
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      indices.push((current + 1) % testimonials.length);
    }
    return indices;
  };

  return (
    <section id="testimonials" className="bg-[#F2EDE8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] mb-2">
            לקוחות מספרים עליי
          </h2>
          <div className="w-16 h-1 bg-[#C9B59C] mb-12 rounded-full" />
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-[#E5DDD4] rounded-full flex items-center justify-center text-[#C9B59C] hover:bg-[#F2EDE8] transition-colors cursor-pointer shadow-sm"
            aria-label="הקודם"
          >
            <HiChevronRight className="text-xl" />
          </button>
          <button
            onClick={next}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-[#E5DDD4] rounded-full flex items-center justify-center text-[#C9B59C] hover:bg-[#F2EDE8] transition-colors cursor-pointer shadow-sm"
            aria-label="הבא"
          >
            <HiChevronLeft className="text-xl" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {getVisibleIndices().map((idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 border border-[#E5DDD4] hover:border-[#C9B59C]/40 transition-colors shadow-sm"
                  >
                    <img
                      src={testimonials[idx].src}
                      alt={testimonials[idx].alt}
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current ? 'bg-[#C9B59C] scale-125' : 'bg-[#E5DDD4]'
                }`}
                aria-label={`המלצה ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
