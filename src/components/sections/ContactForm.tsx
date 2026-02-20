import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiPhone, HiEnvelope, HiCheck } from 'react-icons/hi2';
import { fadeInRight, fadeInLeft, viewportConfig } from '@/lib/animations';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { submitToGoogleSheets } from '@/lib/sheets';
import contactImage from '@/assets/images/ori-lecture-hospital.jpeg';

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('loading');
    try {
      await submitToGoogleSheets(data);
      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  };

  const inputClasses = "w-full bg-white border border-[#E5DDD4] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder-[#B8A48A] focus:border-[#C9B59C] focus:ring-1 focus:ring-[#C9B59C] outline-none transition-all text-right";

  return (
    <section id="contact" className="bg-[#FAFAF8] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Right column (RTL): Header + Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] mb-2">
              צור קשר
            </h2>
            <div className="w-16 h-1 bg-[#C9B59C] mb-4 rounded-full" />
            <p className="text-[#7A7068] text-base mb-8">
              לתיאום הרצאה
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div>
                <label htmlFor="fullName" className="block text-[#7A7068] text-sm mb-2">שם מלא</label>
                <input
                  id="fullName"
                  type="text"
                  {...register('fullName')}
                  className={inputClasses}
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-[#7A7068] text-sm mb-2">אימייל</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={inputClasses}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#7A7068] text-sm mb-2">טלפון</label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className={inputClasses}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-[#7A7068] text-sm mb-2">הודעה</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="ספרו לנו על האירוע, הקהל, או כל דבר שחשוב לכם..."
                  {...register('message')}
                  className={inputClasses + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                disabled={submitState === 'loading' || submitState === 'success'}
                className="w-full bg-[#C9B59C] text-white font-bold text-lg py-3.5 rounded-lg hover:bg-[#B8A48A] transition-colors disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
              >
                {submitState === 'loading' && (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    שולח...
                  </>
                )}
                {submitState === 'success' && (
                  <>
                    <HiCheck className="text-xl" />
                    ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם.
                  </>
                )}
                {submitState === 'error' && 'אירעה שגיאה, אנא נסו שוב.'}
                {submitState === 'idle' && 'שליחה'}
              </button>
            </form>
          </motion.div>

          {/* Left column (RTL): Contact info + Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-[#C9B59C] font-bold text-xl mb-6">אורי חוכימה</p>

            <div className="flex flex-col gap-4 mb-8">
              <a href="tel:0543049080" className="flex items-center gap-3 text-[#7A7068] hover:text-[#C9B59C] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E5DDD4] flex items-center justify-center group-hover:border-[#C9B59C]/50 transition-colors shadow-sm">
                  <HiPhone className="text-[#C9B59C]" />
                </div>
                <span className="font-medium" dir="ltr">054-304-9080</span>
              </a>

              <a href="mailto:ori6hukima@gmail.com" className="flex items-center gap-3 text-[#7A7068] hover:text-[#C9B59C] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E5DDD4] flex items-center justify-center group-hover:border-[#C9B59C]/50 transition-colors shadow-sm">
                  <HiEnvelope className="text-[#C9B59C]" />
                </div>
                <span className="font-medium">ori6hukima@gmail.com</span>
              </a>
            </div>

            <img
              src={contactImage}
              alt="אורי חוכימה מרצה במרכז הרפואי מאיר"
              className="w-full rounded-xl border border-[#E5DDD4] shadow-sm"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
