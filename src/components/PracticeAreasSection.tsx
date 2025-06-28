
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Users, Shield, Gavel, ChevronRight, CheckCircle } from 'lucide-react';

const PracticeAreasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedArea, setSelectedArea] = useState(0);

  const practiceAreas = [
    {
      icon: Building,
      title: 'Corporate Law',
      description: 'Comprehensive business legal services including mergers, acquisitions, compliance, and corporate governance.',
      details: [
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Securities & Compliance',
        'Contract Negotiations',
        'Intellectual Property',
        'Business Formation'
      ],
      color: 'from-legal-blue-500 to-legal-blue-700',
      bgColor: 'bg-legal-blue-50 dark:bg-legal-blue-900/20'
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Compassionate representation in divorce, custody, adoption, and other family matters with personalized attention.',
      details: [
        'Divorce & Separation',
        'Child Custody & Support',
        'Adoption Services',
        'Prenuptial Agreements',
        'Domestic Relations',
        'Estate Planning'
      ],
      color: 'from-legal-gold-500 to-legal-gold-700',
      bgColor: 'bg-legal-gold-50 dark:bg-legal-gold-900/20'
    },
    {
      icon: Shield,
      title: 'Criminal Defense',
      description: 'Aggressive defense strategies for criminal charges, from misdemeanors to complex federal cases.',
      details: [
        'Federal Crimes',
        'White Collar Defense',
        'DUI & Traffic Violations',
        'Drug Offenses',
        'Assault & Battery',
        'Appeals Process'
      ],
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: Gavel,
      title: 'Civil Litigation',
      description: 'Strategic litigation services for complex disputes, personal injury, and commercial conflicts.',
      details: [
        'Personal Injury Claims',
        'Commercial Disputes',
        'Employment Law',
        'Real Estate Litigation',
        'Insurance Claims',
        'Class Action Suits'
      ],
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
  ];

  return (
    <section id="practice" className="py-20 bg-white dark:bg-legal-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-playfair font-bold text-legal-navy-900 dark:text-white mb-6"
          >
            Our{' '}
            <span className="text-transparent bg-gradient-to-r from-legal-blue-600 to-legal-gold-600 bg-clip-text">
              Practice Areas
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-legal-navy-700 dark:text-legal-navy-300 max-w-3xl mx-auto"
          >
            Our experienced attorneys provide comprehensive legal services across multiple practice areas, 
            delivering strategic solutions tailored to your unique needs.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Practice Areas Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedArea(index)}
                className={`cursor-pointer transition-all duration-300 rounded-xl p-6 ${
                  selectedArea === index 
                    ? 'glass-card shadow-2xl scale-105' 
                    : 'bg-gray-50 dark:bg-legal-navy-800 hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <area.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-playfair font-bold text-legal-navy-900 dark:text-white mb-4 text-center">
                  {area.title}
                </h3>
                
                <p className="text-legal-navy-700 dark:text-legal-navy-300 text-center mb-4 leading-relaxed">
                  {area.description}
                </p>

                <div className="flex items-center justify-center text-legal-blue-600 dark:text-legal-blue-400 font-medium">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Area Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-1"
          >
            <div className={`rounded-xl p-8 h-full ${practiceAreas[selectedArea].bgColor}`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${practiceAreas[selectedArea].color} rounded-xl flex items-center justify-center mb-6`}>
                {React.createElement(practiceAreas[selectedArea].icon, { size: 40, className: "text-white" })}
              </div>

              <h3 className="text-2xl font-playfair font-bold text-legal-navy-900 dark:text-white mb-4">
                {practiceAreas[selectedArea].title}
              </h3>

              <p className="text-legal-navy-700 dark:text-legal-navy-300 mb-6 leading-relaxed">
                {practiceAreas[selectedArea].description}
              </p>

              <h4 className="text-lg font-semibold text-legal-navy-900 dark:text-white mb-4">
                Our Services Include:
              </h4>

              <ul className="space-y-3">
                {practiceAreas[selectedArea].details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center text-legal-navy-700 dark:text-legal-navy-300"
                  >
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    {detail}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`mt-8 w-full bg-gradient-to-r ${practiceAreas[selectedArea].color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                Get Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
