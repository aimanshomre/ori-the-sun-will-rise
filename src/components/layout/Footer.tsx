import { FaYoutube, FaPodcast } from 'react-icons/fa';
import { HiTv, HiGlobeAlt } from 'react-icons/hi2';

const quickLinks = [
  { label: 'ראשי', href: '#hero' },
  { label: 'אודות', href: '#about' },
  { label: 'שירותים', href: '#services' },
  { label: 'צור קשר', href: '#contact' },
];

const externalLinks = [
  { icon: FaYoutube, href: 'https://www.youtube.com/watch?v=MMDpXavYU-o', label: 'YouTube' },
  { icon: FaPodcast, href: 'https://podcasts.apple.com/fr/podcast/%D7%A8%D7%A1-%D7%9F-%D7%90%D7%95%D7%A8%D7%99-%D7%97%D7%95%D7%9B%D7%99%D7%9E%D7%94/id1786124997?i=1000683182807', label: 'Podcast' },
  { icon: HiTv, href: 'https://vimeo.com/1159115776?fl=pl&fe=sh', label: 'כאן 11' },
  { icon: HiGlobeAlt, href: 'https://www.nov22pachtak13golani.com/', label: 'עמוד הפלוגה' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#D4A843] font-bold text-xl mb-2">אורי חוכימה</p>
        <p className="text-[#666666] text-sm mb-8">הסיפור שלנו. הלקחים שלכם להוביל קדימה.</p>

        <div className="w-full h-px bg-[#2A2A2A] mb-8" />

        <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
          {quickLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[#666666] hover:text-[#D4A843] text-sm transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mb-8">
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[#666666] hover:text-[#D4A843] transition-colors text-lg"
            >
              <link.icon />
            </a>
          ))}
        </div>

        <p className="text-[#666666] text-xs mb-1">© 2025 אורי חוכימה. כל הזכויות שמורות.</p>
        <p className="text-[#444444] text-xs">נבנה באהבה</p>
      </div>
    </footer>
  );
}
