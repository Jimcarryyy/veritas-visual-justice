
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Scale, Award, Users } from 'lucide-react';

const AttorneysSection = () => {
  const attorneys = [
    {
      name: "Sarah J. Mitchell",
      title: "Senior Partner",
      specialty: "Corporate Law",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Specializes in mergers, acquisitions, and corporate governance. Led over 200 successful business transactions.",
      badges: ["Harvard Law", "Corporate Expert", "Board Certified"]
    },
    {
      name: "Michael R. Thompson",
      title: "Managing Partner",
      specialty: "Criminal Defense",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Former prosecutor with an exceptional track record in high-profile criminal defense cases.",
      badges: ["Yale Law", "Criminal Defense", "Trial Specialist"]
    },
    {
      name: "Dr. Emily Chen",
      title: "Partner",
      specialty: "Family Law",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Compassionate advocate specializing in divorce, custody, and family mediation cases.",
      badges: ["Stanford Law", "Family Mediator", "Child Advocate"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="attorneys" className="py-20 bg-legal-navy-50 dark:bg-legal-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Scale className="h-8 w-8 text-legal-gold-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-legal-navy-900 dark:text-white">
              Our Legal Team
            </h2>
          </div>
          <p className="text-xl text-legal-navy-600 dark:text-legal-navy-300 max-w-3xl mx-auto">
            Meet our distinguished attorneys who bring decades of experience and unwavering dedication to every case.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {attorneys.map((attorney, index) => (
            <motion.div
              key={attorney.name}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="h-full glass-card hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-legal-navy-800/80">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-legal-gold-400 group-hover:border-legal-blue-500 transition-colors duration-300">
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-legal-gold-500 rounded-full p-2">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair text-legal-navy-900 dark:text-white">
                    {attorney.name}
                  </CardTitle>
                  <p className="text-legal-gold-600 dark:text-legal-gold-400 font-medium">
                    {attorney.title}
                  </p>
                  <p className="text-legal-navy-600 dark:text-legal-navy-300">
                    {attorney.specialty} • {attorney.experience}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-legal-navy-600 dark:text-legal-navy-300 mb-4 text-center">
                    {attorney.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {attorney.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="bg-legal-blue-100 dark:bg-legal-blue-900 text-legal-blue-800 dark:text-legal-blue-200"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AttorneysSection;
