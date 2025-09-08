
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { AlertIcon } from "../../../../components/ui/alert-icon";
import heroSectionBg from "../hero-section.png";

export const HeroSection = (): JSX.Element => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<string | null>(null);

  const handlePopup = (type: string) => {
    setPopupType(type);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupType(null);
  };

  return (
    <section
      id="home"
      className="flex flex-col min-h-screen items-center justify-center gap-2.5 px-8 py-24 relative self-stretch w-full pt-32"
      style={{
        background: `url(${heroSectionBg}) 50% 50% / cover`,
      }}
    >
      <Card className="relative w-full max-w-4xl bg-[#ffffff70] rounded-[29px] shadow-[6px_11px_20.8px_#4b70f50d] backdrop-blur-[9.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.6px)_brightness(100%)] border-0 animate-fade-up">
        <CardContent className="flex flex-col items-center gap-[19px] p-16">
          <div className="flex flex-col items-center gap-[29px] relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-bold text-[#070f2b] text-4xl md:text-5xl text-center tracking-[0] leading-tight">
              AI Powered Formative&amp; Summative Student Support System
            </h1>

            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-light text-[#1b1a55] text-lg md:text-xl text-center tracking-[0] leading-relaxed">
              Generate unique, personalized questions for each sudent.
              <br />
              Automate formative and summative Assessments <br />
              effortlessly!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="relative px-8 py-3 rounded-md border border-solid border-[#4b70f5] bg-[linear-gradient(34deg,rgba(226,233,255,1)_0%,rgba(210,222,255,1)_100%)] [font-family:'Poppins',Helvetica] font-medium text-light text-lg text-center tracking-[0] leading-[normal] transition-all duration-200 hover:scale-105"
              onClick={() => handlePopup('learn')}
            >
              Learn More
            </Button>

            <Button
              className="relative px-8 py-3 rounded-lg bg-[linear-gradient(37deg,rgba(19,65,231,1)_0%,rgba(140,171,255,1)_100%)] [font-family:'Poppins',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal] transition-all duration-200 hover:scale-105"
              onClick={() => handlePopup('start')}
            >
              Getting Started
            </Button>
          </div>
        </CardContent>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center animate-fade-in">
              <AlertIcon className="w-10 h-10 text-blue-500 mb-2" />
              <h4 className="font-bold text-lg mb-2 text-center">This feature will be available soon</h4>
              <p className="text-gray-600 text-center mb-4">
                {popupType === 'learn' ? 'Learn More' : 'Getting Started'} is coming soon. Stay tuned!
              </p>
              <Button onClick={closePopup} className="mt-2 px-6 py-2 rounded bg-blue-500 text-white">Close</Button>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};
