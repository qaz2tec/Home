import { Card, CardContent } from './ui/card';
import { BookOpen, GraduationCap, FlaskConical, Stethoscope } from 'lucide-react';

const classes = [
  {
    icon: BookOpen,
    title: 'KG – Primary Classes',
    description: 'Foundation building with care and patience',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: BookOpen,
    title: 'Middle School (Class 6–8)',
    description: 'Conceptual clarity for stronger basics',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: GraduationCap,
    title: 'Class 9 & 10 (Board Focus)',
    description: 'Board exam preparation with proper guidance',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: GraduationCap,
    title: 'Class 11 & 12 (Science & Commerce)',
    description: 'Advanced learning for board & competitive exams',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: FlaskConical,
    title: 'JEE Home Tuition',
    description: 'Expert coaching for engineering aspirants',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Stethoscope,
    title: 'NEET Home Tuition',
    description: 'Focused preparation for medical entrance',
    color: 'bg-teal-100 text-teal-600'
  }
];

export function ClassesProvided() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">
          Classes We Provide Home Tuition For
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          All classes are conducted one-to-one at the student's home
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => {
            const Icon = classItem.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`${classItem.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-gray-900">{classItem.title}</h3>
                  <p className="text-gray-600">{classItem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
