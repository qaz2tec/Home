import { Phone, MessageCircle, UserCheck, Home, GraduationCap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Phone,
    title: 'Parent contacts Study Ways Home Tutors',
    description: 'Reach us via phone or enquiry form'
  },
  {
    icon: MessageCircle,
    title: 'Student\'s academic needs are discussed',
    description: 'We understand requirements and goals'
  },
  {
    icon: UserCheck,
    title: 'A suitable tutor is assigned',
    description: 'Matched based on subject and class'
  },
  {
    icon: Home,
    title: 'Tutor visits the student\'s home',
    description: 'Learning begins in a familiar environment'
  },
  {
    icon: GraduationCap,
    title: 'Free demo class is provided',
    description: 'Experience our teaching approach firsthand'
  },
  {
    icon: TrendingUp,
    title: 'Regular classes + progress tracking',
    description: 'Continuous learning with periodic feedback'
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How Our Home Tuition Works
        </motion.h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 hover:border-blue-200 transition-colors"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span>{index + 1}</span>
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-blue-600" />
                    <h3 className="text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}