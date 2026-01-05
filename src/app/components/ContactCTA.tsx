import { useState } from 'react';
import { Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentClass: '',
    subjects: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCallNow = () => {
    window.location.href = 'tel:+919971033962';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body with form data
    const subject = encodeURIComponent('Home Tuition Enquiry - Study Ways');
    const body = encodeURIComponent(
      `New Enquiry from Study Ways Home Tutors Website\n\n` +
      `Parent's Name: ${formData.parentName}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Student's Class: ${formData.studentClass}\n` +
      `Subjects Required: ${formData.subjects || 'Not specified'}\n` +
      `Additional Message: ${formData.message || 'None'}\n\n` +
      `Please contact this parent at the earliest.`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:studywayshometutors@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        parentName: '',
        phone: '',
        studentClass: '',
        subjects: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-section" className="py-16 px-4 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Looking for a Home Tutor Who Comes to Your Place?
          </h2>
          <p className="text-xl text-blue-100">
            Get a free demo class and personalised home tuition for your child
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Quick Contact */}
          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4 text-gray-900">Call Us Directly</h3>
                <p className="text-gray-600 mb-6">
                  Speak with our team to discuss your requirements and schedule a free demo class.
                </p>
                <Button 
                  onClick={handleCallNow}
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 99710 33962
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <h4 className="mb-3 text-white">Why Choose Home Tuition?</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Safe and comfortable learning at home</li>
                  <li>✓ No travel time or safety concerns</li>
                  <li>✓ Complete focus on your child</li>
                  <li>✓ Flexible scheduling</li>
                  <li>✓ Personalized teaching approach</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <Card className="bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6 text-gray-900">Request a Callback</h3>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="text-green-600 mb-3">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl mb-2 text-gray-900">Thank You!</h4>
                  <p className="text-gray-700">We will contact you shortly to discuss your requirements.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="parentName" className="text-gray-900">Parent's Name *</Label>
                    <Input
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={(e) => handleChange('parentName', e.target.value)}
                      placeholder="Enter your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-900">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="studentClass" className="text-gray-900">Student's Class *</Label>
                    <Select 
                      value={formData.studentClass}
                      onValueChange={(value) => handleChange('studentClass', value)}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg-primary">KG - Primary</SelectItem>
                        <SelectItem value="6-8">Class 6-8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                        <SelectItem value="jee">JEE Preparation</SelectItem>
                        <SelectItem value="neet">NEET Preparation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subjects" className="text-gray-900">Subjects Required</Label>
                    <Input
                      id="subjects"
                      value={formData.subjects}
                      onChange={(e) => handleChange('subjects', e.target.value)}
                      placeholder="e.g., Maths, Physics, Chemistry"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Any specific requirements or questions..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}