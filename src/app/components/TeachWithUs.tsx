import { GraduationCap, Users, Clock, Banknote, BookOpen, CheckCircle, Phone } from 'lucide-react';

export function TeachWithUs() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700">Join Our Team</span>
          </div>
          <h2 className="text-blue-900 mb-4">Teach with Study Ways Home Tutors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join a trusted network of home tutors providing one-to-one personalized education. 
            Work flexibly, earn well, and make a real difference in students' lives.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">One-to-One Teaching</h3>
            <p className="text-gray-600 text-sm">Individual attention to each student at their home</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Flexible Timing</h3>
            <p className="text-gray-600 text-sm">Choose your own schedule and number of students</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Banknote className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Good Earnings</h3>
            <p className="text-gray-600 text-sm">Competitive compensation for your expertise</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Teach Your Subject</h3>
            <p className="text-gray-600 text-sm">Focus on subjects you're passionate about</p>
          </div>
        </div>

        {/* Who Can Apply */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h3 className="text-blue-900 mb-6 text-center">Who Can Apply?</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">College students (pursuing graduation or postgraduation)</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Subject experts with relevant qualifications</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Experienced home tutors</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Graduates interested in teaching</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Teachers looking for part-time/flexible work</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Professionals with teaching skills</p>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="text-center">
          <a
            href="tel:+919971033962"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Register as a Tutor</span>
          </a>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Call us to discuss teaching opportunities and start your journey with Study Ways Home Tutors
          </p>
        </div>
      </div>
    </section>
  );
}