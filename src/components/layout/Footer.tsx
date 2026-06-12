import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#051733] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">GERD Trust</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering rural communities through education, healthcare, livelihood support, and environmental sustainability.
            </p>
            <p className="text-gray-300 text-sm font-semibold">
              Reg No: 35/2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-brand-accent mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Focus Areas', 'Compliance', 'Gallery', 'Donate'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-brand-accent mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  530/1 Vaarpattu, Ponnamaravathy Taluk,<br />
                  Pudukkottai District,<br />
                  Tamil Nadu 622403
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-accent shrink-0" />
                <span className="text-gray-300 text-sm">9363682599 / 8610609748</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-accent shrink-0" />
                <span className="text-gray-300 text-sm">gugantrustngo@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-brand-accent mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
  href="https://www.facebook.com/share/1BRo6m7HUx/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
</a>
              <a
  href="https://www.instagram.com/gugangerd"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
  <p className="text-gray-400 text-sm">
    © 2026 GERD Trust. All Rights Reserved.
  </p>

  <p className="text-brand-accent font-medium text-sm">
    Building Better Futures Together.
  </p>

  <p className="text-gray-400 text-sm">
    Developed by{" "}
    <a
      href="https://www.drakvex.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-accent hover:text-white transition-colors font-semibold"
    >
      Drakvex
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}
