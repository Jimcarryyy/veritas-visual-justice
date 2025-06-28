
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Corporate Law', href: '#practice' },
      { name: 'Family Law', href: '#practice' },
      { name: 'Criminal Defense', href: '#practice' },
      { name: 'Civil Litigation', href: '#practice' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Attorneys', href: '#attorneys' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Legal Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Legal Resources', href: '#' },
      { name: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-legal-navy-900 dark:bg-legal-navy-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-legal-gold-500 to-legal-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">Veritas Legal</h3>
                <p className="text-sm text-legal-navy-300 -mt-1">Group</p>
              </div>
            </div>
            <p className="text-legal-navy-300 mb-6 leading-relaxed">
              Justice Delivered with Integrity. Your trusted legal partner for over two decades.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-legal-gold-400 flex-shrink-0" />
                <span className="text-legal-navy-300 text-sm">123 Legal Avenue, Suite 500, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-legal-gold-400 flex-shrink-0" />
                <span className="text-legal-navy-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-legal-gold-400 flex-shrink-0" />
                <span className="text-legal-navy-300 text-sm">info@veritaslegal.com</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-legal-gold-400">Legal Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-legal-navy-300 hover:text-legal-gold-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-legal-gold-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-legal-navy-300 hover:text-legal-gold-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-legal-gold-400">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-legal-navy-300 hover:text-legal-gold-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h5 className="text-sm font-semibold mb-4 text-legal-gold-400">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-legal-navy-800 hover:bg-legal-gold-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-legal-navy-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-legal-navy-400 text-sm">
              © {currentYear} Veritas Legal Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-legal-navy-400 hover:text-legal-gold-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-legal-navy-400 hover:text-legal-gold-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-legal-navy-400 hover:text-legal-gold-400 transition-colors duration-200">
                Legal Disclaimer
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
