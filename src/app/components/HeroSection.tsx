import { Phone, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function HeroSection() {
  const handleCallNow = () => {
    window.location.href = 'tel:+919971033962';
  };

  const handleBookDemo = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          One-to-One Home Tuition at Your Home
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experienced tutors visit your home for personalised teaching from KG to Class 12 | CBSE | ICSE | State Board | JEE | NEET
        </motion.p>

        <motion.div 
          className="bg-green-50 border-2 border-green-600 rounded-lg p-6 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-4 text-left md:text-center">
            <motion.div 
              className="flex items-center md:justify-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-green-600 text-2xl">✔</span>
              <span className="text-gray-900">Not a coaching centre</span>
            </motion.div>
            <motion.div 
              className="flex items-center md:justify-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="text-green-600 text-2xl">✔</span>
              <span className="text-gray-900">No batch classes</span>
            </motion.div>
            <motion.div 
              className="flex items-center md:justify-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="text-green-600 text-2xl">✔</span>
              <span className="text-gray-900">Tutor teaches only your child at your home</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button 
            onClick={handleCallNow}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          <Button 
            onClick={handleBookDemo}
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Free Demo Class
          </Button>
        </motion.div>
      </div>
    </section>
  );
}