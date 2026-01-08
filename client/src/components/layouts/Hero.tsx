import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section 
      className="w-full px-4 md:px-8 py-10 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #9861c5 0%, #e265e3 100%)`
      }}
    >
      <StarsBackground
        starColor="#f8f7fb"
        className="absolute inset-0"
        style={{background: 'transparent'}}
      />
            
      <div className="flex flex-col items-center justify-center text-center px-4 relative z-10">
        <h1 className="text-white text-3xl md:text-4xl font-semibold">
          <span className="text-4xl md:text-5xl font-bold">
            NextBook
          </span>
          <br />
          <span className="text-3xl md:text-3xl font-bold">
            BY EAKL
          </span>
        </h1>

        <p className="text-white mt-6 max-w-2xl mx-auto text-lg">
          Your gateway to knowledge and resources at NED University. Explore our extensive collection and services to support your academic journey.
        </p>

        <Button 
          className="mt-8 px-6 py-3 rounded-lg flex items-center gap-2 bg-white text-[#9861c5] hover:bg-[#f8f7fb] font-semibold transition-colors" 
          onClick={() => { navigate("/sign-in") }}
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;