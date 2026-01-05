import { CheckCircle2 } from 'lucide-react';

const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Accountancy',
  'Business Studies',
  'Economics'
];

export function SubjectsOffered() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
          Subjects Offered
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {subjects.map((subject, index) => (
            <div key={index} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-900">{subject}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
