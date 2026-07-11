import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Heart,
  } from "lucide-react";
  
  import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
  } from "react-icons/fa6";
  
  import FooterColumn from "./FooterColumn";
  import NewsletterForm from "./NewsletterForm";
  import SocialIcon from "./SocialIcon";
  
  import {
    quickLinks,
    services,
    contactInfo,
  } from "../../constants/footerLinks";
  
  const Footer = () => {
    return (
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <h2 className="mb-4 text-3xl font-bold">
                Medi<span className="text-blue-500">Queue</span>
              </h2>
  
              <p className="mb-6 leading-7 text-slate-400">
                Delivering smarter healthcare through AI-powered emergency
                triage, seamless appointment booking, and compassionate
                patient care.
              </p>
  
              <div className="flex gap-3">
                <SocialIcon
                  href="https://facebook.com"
                  icon={FaFacebookF}
                  label="Facebook"
                />
  
                <SocialIcon
                  href="https://instagram.com"
                  icon={FaInstagram}
                  label="Instagram"
                />
  
                <SocialIcon
                  href="https://linkedin.com"
                  icon={FaLinkedinIn}
                  label="LinkedIn"
                />
  
                <SocialIcon
                  href="https://x.com"
                  icon={FaXTwitter}
                  label="X"
                />
              </div>
            </div>
  
            {/* Quick Links */}
            <FooterColumn
              title="Quick Links"
              links={quickLinks}
            />
  
            {/* Services */}
            <FooterColumn
              title="Services"
              links={services}
            />
  
            {/* Contact + Newsletter */}
            <div>
              <h3 className="mb-6 text-lg font-bold">
                Contact Us
              </h3>
  
              <div className="space-y-4 text-slate-400">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-1 text-blue-500"
                  />
                  <span>{contactInfo.address}</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <Phone
                    size={18}
                    className="text-blue-500"
                  />
                  <span>{contactInfo.phone}</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <Mail
                    size={18}
                    className="text-blue-500"
                  />
                  <span>{contactInfo.email}</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <Clock
                    size={18}
                    className="text-blue-500"
                  />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>
  
              <div className="mt-8">
                <h4 className="mb-3 font-semibold">
                  Subscribe to our Newsletter
                </h4>
  
                <NewsletterForm />
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
  
          <div className="mt-16 border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">
              <p>
                © {new Date().getFullYear()} MediQueue.
                All rights reserved.
              </p>
  
              <div className="flex gap-6">
                <a
                  href="/privacy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
  
                <a
                  href="/terms"
                  className="hover:text-white"
                >
                  Terms & Conditions
                </a>
              </div>
  
              <p className="flex items-center gap-2">
                Made with
                <Heart
                  size={15}
                  className="fill-red-500 text-red-500"
                />
                for better healthcare
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;