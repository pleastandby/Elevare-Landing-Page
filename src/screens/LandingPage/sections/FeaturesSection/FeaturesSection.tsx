import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import TargetIcon from "./target-icon.png";
import TimeIcon from "./time-icon.png";
import Frame5_1 from "./frame-5-1.svg";
import Frame5 from "./frame-5.svg";


export const FeaturesSection = (): JSX.Element => {
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

  const features = [
    {
      icon: TargetIcon,
      iconBg:
        "bg-[linear-gradient(34deg,rgba(155,177,255,1)_0%,rgba(210,222,255,1)_100%)]",
      iconPadding: "pl-[27px] pr-[11px] py-[26px]",
      iconSize: "w-[115px] h-[100px]",
      iconType: "bg",
      title: "Personalised\nQuestion\nGenerator",
    },
    {
      icon: TimeIcon,
      iconBg: "bg-[#ff383c33]",
      iconPadding: "pl-5 pr-[11px] pt-5 pb-[26px]",
      iconSize: "w-28 h-28",
      iconType: "img",
      title: "Instant\nfeedback\nengine",
    },
    {
      icon: Frame5_1,
      iconBg: "",
      iconPadding: "",
      iconSize: "w-[152px] h-[152px]",
      iconType: "img",
      title: "AI Perfomance\nDashboards",
    },
    {
      icon: Frame5,
      iconBg: "",
      iconPadding: "",
      iconSize: "w-[152px] h-[152px]",
      iconType: "img",
      title: "Teacher Assist\nMode",
    },
  ];

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="flex flex-col items-center gap-20 px-8 py-20 relative w-full bg-white"
    >
      <h2 className={`[font-family:'Inter',Helvetica] font-bold text-[#5f6f9a] text-4xl md:text-5xl text-center tracking-[0] leading-[normal] transition-all duration-700 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'}`}>
        Key features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`card-featured-glow flex flex-col w-full h-[349px] items-center justify-center gap-[26px] px-8 py-12 bg-indigo-50 rounded-[20px] border-0 transition-all duration-700 hover:scale-105 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardContent className="p-0 flex flex-col items-center gap-[26px]">
              {feature.iconType === "bg" ? (
                <div
                  className={`${feature.iconPadding} ${feature.iconBg} flex flex-col w-[152px] h-[152px] items-start gap-2.5 relative mt-[-7.00px] rounded-[18px] bg-white`}
                >
                  <img
                    className={`relative ${feature.iconSize} object-contain`}
                    alt="Feature icon"
                    src={feature.icon}
                  />
                </div>
              ) : feature.iconBg ? (
                <div
                  className={`${feature.iconPadding} ${feature.iconBg} flex flex-col w-[152px] h-[152px] items-start gap-2.5 relative mt-[-7.00px] rounded-[18px]`}
                >
                  <img
                    className={`relative ${feature.iconSize} ${feature.icon.includes('.png') ? 'mb-[-6.00px] object-cover' : ''}`}
                    alt="Feature icon"
                    src={feature.icon}
                  />
                </div>
              ) : (
                <img
                  className={`relative ${feature.iconSize} mt-[-7.00px]`}
                  alt="Feature icon"
                  src={feature.icon}
                />
              )}

              <div className="relative w-full [font-family:'Inter',Helvetica] font-semibold text-[#6278c4] text-xl md:text-2xl text-center tracking-[0] leading-[normal]">
                {feature.title.split("\n").map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < feature.title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
