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

  const inputClasses = "w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-[#F5F5F5] placeholder-[#666666] focus:border-[#D4A843] focus:ring-1 focus:ring-[#D4A843] outline-none transition-all text-right";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#F5F5F5] mb-2">
            צור קשר
          </h2>
          <div className="w-16 h-1 bg-[#D4A843] mx-auto mb-4 rounded-full" />
          <p className="text-[#A0A0A0] text-base">
            לתיאום הרצאה ללא עלות וללא התחייבות
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form — right column in RTL */}
          <motion.form
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 order-2 md:order-1"
          >
            <div>
              <label htmlFor="fullName" className="block text-[#A0A0A0] text-sm mb-2">שם מלא</label>
              <input
                id="fullName"
                type="text"
                {...register('fullName')}
                className={inputClasses}
              />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-[#A0A0A0] text-sm mb-2">אימייל</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className={inputClasses}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-[#A0A0A0] text-sm mb-2">טלפון</label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className={inputClasses}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-[#A0A0A0] text-sm mb-2">הודעה</label>
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
              className="w-full bg-[#D4A843] text-[#0A0A0A] font-bold text-lg py-3.5 rounded-lg hover:bg-[#E8C96A] transition-colors disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
            >
              {submitState === 'loading' && (
                <>
                  <span className="w-5 h-5 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
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
          </motion.form>

          {/* Contact info — left column in RTL */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="order-1 md:order-2"
          >
            <p className="text-[#D4A843] font-bold text-xl mb-6">אורי חוכימה</p>

            <div className="flex flex-col gap-4 mb-8">
              <a href="tel:0543049080" className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#D4A843] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#D4A843]/50 transition-colors">
                  <HiPhone className="text-[#D4A843]" />
                </div>
                <span className="font-medium" dir="ltr">054-304-9080</span>
              </a>

              <a href="mailto:ori6hukima@gmail.com" className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#D4A843] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#D4A843]/50 transition-colors">
                  <HiEnvelope className="text-[#D4A843]" />
                </div>
                <span className="font-medium">ori6hukima@gmail.com</span>
              </a>
            </div>

            <img
              src={contactImage}
              alt="אורי חוכימה מרצה במרכז הרפואי מאיר"
              className="w-full rounded-xl border border-[#2A2A2A]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
