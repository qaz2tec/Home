import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl text-white mb-4">Study Ways Home Tutors</h3>
            <p className="text-gray-400 mb-4">
              Providing quality one-to-one home tuition for students from KG to Class 12, including JEE and NEET preparation.
            </p>
            <p className="text-gray-400">
              Individual attention in the comfort of your home.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white">+91 99710 33962</p>
                  <p className="text-gray-400">Mon-Sun, 9 AM - 10 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white">studywayshometutors@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white">Serving across the city</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• KG to Primary Classes</li>
              <li>• Middle School Tuition</li>
              <li>• Class 9 & 10 Board Preparation</li>
              <li>• Class 11 & 12 Science & Commerce</li>
              <li>• JEE Home Tuition</li>
              <li>• NEET Home Tuition</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Study Ways Home Tutors. All rights reserved.</p>
            <p className="mt-2">One-to-One Home Tuition | No Batch Classes | Tutor Comes to Your Home</p>
          </div>
        </div>
      </div>
    </footer>
  );
}