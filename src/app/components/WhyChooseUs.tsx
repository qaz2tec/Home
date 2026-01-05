import { User, Home, Target, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: User,
    title: 'One Tutor for One Student',
    description: 'Complete focus on your child\'s learning needs'
  },
  {
    icon: Home,
    title: 'Tutor Comes to Student\'s Home',
    description: 'Safe, comfortable learning environment'
  },
  {
    icon: Target,
    title: 'Personal Attention & Concept Clarity',
    description: 'Deep understanding, not just exam shortcuts'
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Classes scheduled as per your convenience'
  },
  {
    icon: MessageSquare,
    title: 'Regular Parent Feedback',
    description: 'Stay updated on your child\'s progress'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Verified Tutors',
    description: 'Qualified, experienced, and trustworthy'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Parents Choose Study Ways Home Tutors
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-blue-300 transition-colors h-full hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <motion.div 
                        className="bg-blue-100 p-4 rounded-full mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-8 w-8 text-blue-600" />
                      </motion.div>
                      <h3 className="mb-2 text-gray-900">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}