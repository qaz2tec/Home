import { Phone } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import logo from "../../assets/file_00000000140c7209a44593af6eb8939f.png";
import whatsappLogo from "../../assets/647e1bb17715d31b56bc8d3f4f9b7aaa1c1bb71b.png";

export function Header() {
  const handleCallNow = () => {
    window.location.href = 'tel:+919971033962';
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919971033962', '_blank');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={logo} alt="Study Ways Home Tutors Logo" className="h-24 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col gap-1.5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleCallNow}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 h-auto text-sm w-full"
              >
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                +91 99710 33962
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleWhatsAppChat}
                className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 h-auto text-sm w-full"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                Chat with us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Mobile Call & WhatsApp CTA */}
<div className="fixed bottom-0 left-0 w-full flex md:hidden z-50">
  <button
    onClick={handleCallNow}
    className="w-1/2 bg-blue-600 text-white py-4 text-lg font-semibold"
  >
    📞 Call
  </button>

  <button
    onClick={handleWhatsAppChat}
    className="w-1/2 bg-green-500 text-white py-4 text-lg font-semibold"
  >
    💬 WhatsApp
  </button>
</div>
    </header>
  );
}
