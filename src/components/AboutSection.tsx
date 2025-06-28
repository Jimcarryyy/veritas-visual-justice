
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Trophy, Heart } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: 'Ethics',
      description: 'Unwavering commitment to moral principles and professional integrity in every case.'
    },
    {
      icon: Users,
      title: 'Experience',
      description: 'Decades of combined legal expertise across diverse practice areas and complex litigation.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Pursuing the highest standards of legal representation and client satisfaction.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'Understanding each client\'s unique situation with compassion and personal attention.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-legal-navy-900 dark:to-black">
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
            About{' '}
            <span className="text-transparent bg-gradient-to-r from-legal-blue-600 to-legal-gold-600 bg-clip-text">
              Veritas Legal Group
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-legal-navy-700 dark:text-legal-navy-300 max-w-3xl mx-auto leading-relaxed"
          >
            For over two decades, Veritas Legal Group has stood as a beacon of legal excellence, 
            representing clients with unwavering dedication and achieving remarkable results through 
            strategic thinking and meticulous preparation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-playfair font-bold text-legal-navy-900 dark:text-white mb-6">
              Our Story
            </h3>
            
            <div className="space-y-4 text-legal-navy-700 dark:text-legal-navy-300 leading-relaxed">
              <p>
                Founded in 1998 by a group of distinguished attorneys who shared a vision of providing 
                exceptional legal services, Veritas Legal Group has grown from a boutique firm to one 
                of the region's most respected legal practices.
              </p>
              
              <p>
                Our name "Veritas," meaning truth in Latin, embodies our fundamental commitment to 
                seeking justice through honest, transparent, and ethical legal representation. We believe 
                that every client deserves not just legal counsel, but a trusted advisor who will fight 
                tirelessly for their interests.
              </p>
              
              <p>
                Today, our team of seasoned attorneys continues to uphold these founding principles 
                while embracing innovative legal strategies and cutting-edge technology to deliver 
                superior outcomes for our clients.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-xl bg-gradient-to-r from-legal-blue-50 to-legal-gold-50 dark:from-legal-navy-800 dark:to-legal-navy-700"
            >
              <blockquote className="text-lg italic text-legal-navy-800 dark:text-legal-navy-200">
                "Justice is truth in action. At Veritas Legal Group, we don't just practice law — 
                we champion justice with integrity, expertise, and unwavering dedication to our clients."
              </blockquote>
              <cite className="block mt-4 text-legal-navy-600 dark:text-legal-navy-400 font-semibold">
                — Managing Partner, Veritas Legal Group
              </cite>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-xl hover-lift bg-white/80 dark:bg-legal-navy-800/80 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-legal-blue-500 to-legal-gold-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-white" />
                </div>
                
                <h4 className="text-xl font-playfair font-bold text-legal-navy-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                
                <p className="text-legal-navy-700 dark:text-legal-navy-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h3 className="text-3xl font-playfair font-bold text-legal-navy-900 dark:text-white mb-12">
            Milestones of Excellence
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: '1998', event: 'Firm Founded' },
              { year: '2005', event: 'First Major Victory' },
              { year: '2015', event: 'Expansion & Growth' },
              { year: '2023', event: '25 Years Strong' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-legal-gold-400 to-legal-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <h4 className="font-semibold text-legal-navy-900 dark:text-white">
                  {milestone.event}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
