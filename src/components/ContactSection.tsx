
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredTime: string;
}

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Here you would integrate with EmailJS, Formspree, or similar service
    alert('Thank you for your message. We will contact you soon!');
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["123 Legal Avenue", "Suite 500", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["(555) 123-4567", "Toll Free: (800) 123-4567"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@veritaslegal.com", "consultation@veritaslegal.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: By Appointment"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-legal-navy-50 dark:bg-legal-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Send className="h-8 w-8 text-legal-gold-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-legal-navy-900 dark:text-white">
              Get In Touch
            </h2>
          </div>
          <p className="text-xl text-legal-navy-600 dark:text-legal-navy-300 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-legal-gold-400 to-legal-gold-600 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-legal-navy-900 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-legal-navy-600 dark:text-legal-navy-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card bg-white/80 dark:bg-legal-navy-800/80 border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-legal-navy-900 dark:text-white">
                  Free Consultation Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-legal-navy-700 dark:text-legal-navy-200">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className="mt-1 bg-white/50 dark:bg-legal-navy-700/50 border-legal-navy-200 dark:border-legal-navy-600 focus:border-legal-gold-500"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-legal-navy-700 dark:text-legal-navy-200">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="mt-1 bg-white/50 dark:bg-legal-navy-700/50 border-legal-navy-200 dark:border-legal-navy-600 focus:border-legal-gold-500"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-legal-navy-700 dark:text-legal-navy-200">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        className="mt-1 bg-white/50 dark:bg-legal-navy-700/50 border-legal-navy-200 dark:border-legal-navy-600 focus:border-legal-gold-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="text-legal-navy-700 dark:text-legal-navy-200">
                        Preferred Contact Time
                      </Label>
                      <Input
                        id="preferredTime"
                        {...register('preferredTime')}
                        className="mt-1 bg-white/50 dark:bg-legal-navy-700/50 border-legal-navy-200 dark:border-legal-navy-600 focus:border-legal-gold-500"
                        placeholder="Morning, Afternoon, Evening"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-legal-navy-700 dark:text-legal-navy-200">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      className="mt-1 bg-white/50 dark:bg-legal-navy-700/50 border-legal-navy-200 dark:border-legal-navy-600 focus:border-legal-gold-500"
                      placeholder="Brief description of your legal matter"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-legal-navy-700 dark:text-legal-navy-200">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...register('message', { required: 'Message is required' })}
                      className="mt-1 bg-white/50 dark:bg-legal-navy-700/50 border-legal-navy-200 dark:border-legal-navy-600 focus:border-legal-gold-500 min-h-[120px]"
                      placeholder="Please describe your legal needs and any relevant details..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-legal-gold-500 to-legal-gold-600 hover:from-legal-gold-600 hover:to-legal-gold-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
