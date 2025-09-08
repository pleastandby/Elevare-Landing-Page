import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import BlurLayer from "./blur-layer.png";
import Personalisation from "./image-personalisation.svg";
import CommImage from "./community-image.svg";
import MaskGroup from "./mask-group.png";

export const AboutUsSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aboutCards = [
    {
      title: "Personalisation",
      description:
        "Every student learns differently. We created ELEVARE to support those differences — to make learning personal, feedback instant, and progress visible. With a mix of AI technology and thoughtful design, ELEVARE turns traditional assessment into an intelligent, supportive experience for every learner.",
      image: Personalisation,
      blurLayer: BlurLayer,
      backgroundColor: "bg-white",
      titleAlignment: "text-left",
      descriptionAlignment: "text-left",
      contentPosition: "left-[266px]",
      imagePosition: "left-6",
      blurPosition: "left-[233px]",
    },
    {
      title: "Community",
      description:
        "Built by a passionate team of developers, designers, and AI researchers, ELEVARE is designed to support meaningful learning through smart assessments. Our platform generates personalized questions, adapts to each student's level, and provides clear feedback — making every assignment a learning opportunity.",
      image: CommImage,
      maskGroup: MaskGroup,
      backgroundColor: "bg-[#f8faff]",
      titleAlignment: "text-left",
      descriptionAlignment: "text-right",
      contentPosition: "left-[65px]",
      imagePosition: "left-[317px]",
      titlePosition: "left-[177px]",
    },
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="flex flex-col items-center gap-14 py-20 px-8 w-full"
    >
      <h2 className={`[font-family:'Inter',Helvetica] font-bold text-[#5f6f9a] text-4xl md:text-5xl text-center tracking-[0] leading-[normal] transition-all duration-700 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'}`}>
        About ELEVARE
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full">
        {aboutCards.map((card, index) => (
          <Card
            key={index}
            className={`flex-1 flex flex-col justify-between h-auto ${card.backgroundColor} rounded-xl relative overflow-hidden border-0 shadow-md transition-all duration-700 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardContent className="flex flex-col h-full p-8 gap-6">
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  className="w-full max-w-[260px] h-auto object-contain rounded-lg"
                  alt={`${card.title} image`}
                  src={card.image}
                />
              </div>
              <div>
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#293970] text-2xl md:text-3xl tracking-[0] leading-[normal] mb-2 text-center lg:text-left">
                  {card.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#5f6f9a] text-lg tracking-[0] leading-relaxed text-center lg:text-left">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
