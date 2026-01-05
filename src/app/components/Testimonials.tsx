import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    parent: 'Mrs. Sharma',
    student: 'Class 10, CBSE',
    feedback: 'My daughter\'s confidence has improved significantly since she started home tuition with Study Ways. The tutor comes on time and gives full attention to her doubts.'
  },
  {
    parent: 'Mr. Patel',
    student: 'Class 12, JEE Preparation',
    feedback: 'The convenience of home tuition is unmatched. Our son gets personalised attention without the stress of traveling to coaching centers. His understanding of concepts has greatly improved.'
  },
  {
    parent: 'Mrs. Reddy',
    student: 'Class 8, All Subjects',
    feedback: 'We were looking for individual attention that batch classes couldn\'t provide. Study Ways Home Tutors has been perfect for our needs. The tutor is patient and experienced.'
  }
];

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Parents Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="border-2 h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="h-8 w-8 text-blue-300 mb-4" />
                  </motion.div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                  <div className="border-t pt-4">
                    <p className="text-gray-900">{testimonial.parent}</p>
                    <p className="text-gray-600">{testimonial.student}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}