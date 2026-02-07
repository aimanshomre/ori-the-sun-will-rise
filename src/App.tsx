import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import SloganVision from '@/components/sections/SloganVision';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import TheResult from '@/components/sections/TheResult';
import Testimonials from '@/components/sections/Testimonials';
import Memorial from '@/components/sections/Memorial';
import MediaAppearances from '@/components/sections/MediaAppearances';
import ContactForm from '@/components/sections/ContactForm';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SloganVision />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <TheResult />
        <Testimonials />
        <Memorial />
        <MediaAppearances />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
