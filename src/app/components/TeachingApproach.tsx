import { Target, HelpCircle, BookOpen, RotateCcw, Ban } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function TeachingApproach() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-6 text-gray-900">
          Our Teaching Approach
        </h2>

        <div className="max-w-3xl mx-auto mb-8">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed text-center">
                At Study Ways Home Tutors, we believe in building strong fundamentals. Our approach focuses on 
                <strong> concept clarity</strong> and <strong>doubt-solving at the student's own pace</strong>. 
                We provide <strong>board-exam oriented preparation</strong> with regular revision sessions. 
                We do not believe in shortcuts or rote learning — our goal is to help students truly understand 
                and master each topic, building confidence and academic excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-700">Focus on concept clarity</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <HelpCircle className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-700">Doubt-solving at student's pace</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-700">Board-exam oriented</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <RotateCcw className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-700">Regular revision</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Ban className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-700">No shortcut or rote learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
