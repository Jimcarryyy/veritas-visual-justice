
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      initials: "J.M.",
      quote: "Veritas Legal Group exceeded all expectations. Their attention to detail and strategic approach saved my business during a critical merger.",
      caseType: "Corporate Law",
      rating: 5,
      location: "New York"
    },
    {
      id: 2,
      initials: "R.S.",
      quote: "Professional, compassionate, and incredibly knowledgeable. They guided me through a difficult family situation with grace and expertise.",
      caseType: "Family Law",
      rating: 5,
      location: "California"
    },
    {
      id: 3,
      initials: "A.T.",
      quote: "Outstanding criminal defense representation. They fought tirelessly for my rights and achieved an outcome I never thought possible.",
      caseType: "Criminal Defense",
      rating: 5,
      location: "Texas"
    },
    {
      id: 4,
      initials: "M.K.",
      quote: "The civil litigation team at Veritas is second to none. Their strategic thinking and courtroom presence made all the difference.",
      caseType: "Civil Litigation",
      rating: 5,
      location: "Florida"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-legal-navy-900 to-legal-blue-900 dark:from-legal-navy-950 dark:to-legal-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-legal-gold-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
              Client Testimonials
            </h2>
          </div>
          <p className="text-xl text-legal-navy-200 max-w-3xl mx-auto">
            Hear from our satisfied clients who have experienced the Veritas difference firsthand.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-card bg-white/10 backdrop-blur-lg border-white/20 text-white">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-legal-gold-400 to-legal-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {testimonials[currentIndex].initials}
                        </div>
                      </div>
                      <div className="ml-6 flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-legal-gold-400 text-legal-gold-400" />
                          ))}
                        </div>
                        <p className="text-legal-navy-200 text-sm">
                          {testimonials[currentIndex].caseType} • {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-white font-light italic mb-6">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-legal-gold-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
