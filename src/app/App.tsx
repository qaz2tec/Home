import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClassesProvided } from './components/ClassesProvided';
import { SubjectsOffered } from './components/SubjectsOffered';
import { HowItWorks } from './components/HowItWorks';
import { TeachingApproach } from './components/TeachingApproach';
import { Testimonials } from './components/Testimonials';
import { TeachWithUs } from './components/TeachWithUs';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ClassesProvided />
        <SubjectsOffered />
        <HowItWorks />
        <TeachingApproach />
        <Testimonials />
        <TeachWithUs />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}