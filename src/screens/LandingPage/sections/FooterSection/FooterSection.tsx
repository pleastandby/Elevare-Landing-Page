import TitleImg from "./Title.svg"; // <-- Import the SVG image

const servicesData = [
  "AI-Based Question Paper Generation",
  "Performance Analytics Dashboard",
  "Personalized Learning Paths",
  "Adaptive Question Bank",
  "Real-time Student Progress Tracking",
  "Teacher Collaboration Tools",
];

const aboutData = [
  "Our Mission",
  "The Problem We Solve",
  "How Elevare Works",
  "For Students",
  "For Teachers",
  "For Institutions",
];

const supportData = [
  "FAQ",
  "Contact Us",
  "Email Support",
  "User Guides (PDF/Docs)",
  "Privacy Policy",
  "Terms & Conditions",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer id="contact" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-20 px-8 relative w-full bg-[#e2edff] border-t border-[#95acff8a]">
      <div className="flex flex-col items-start lg:col-span-1">
        <img className="w-full max-w-[200px] mb-8" alt="Title" src={TitleImg} /> {/* Use imported image */}
      </div>

      <div className="flex flex-col items-start gap-4 relative">
        <div className="pb-4">
          <div className="font-body-strong font-[number:var(--body-strong-font-weight)] text-[#293970] text-[length:var(--body-strong-font-size)] tracking-[var(--body-strong-letter-spacing)] leading-[var(--body-strong-line-height)] [font-style:var(--body-strong-font-style)]">
            Services
          </div>
        </div>

        {servicesData.map((service, index) => (
          <div key={`service-${index}`} className="relative w-auto">
            <div className="font-body-base font-[number:var(--body-base-font-weight)] text-[#293970] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[1.8] [font-style:var(--body-base-font-style)] hover:text-[#4b70f5] transition-colors cursor-pointer">
              {service}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 relative">
        <div className="pb-4">
          <div className="font-body-strong font-[number:var(--body-strong-font-weight)] text-[#293970] text-[length:var(--body-strong-font-size)] tracking-[var(--body-strong-letter-spacing)] leading-[var(--body-strong-line-height)] [font-style:var(--body-strong-font-style)]">
            About Elevare
          </div>
        </div>

        {aboutData.map((item, index) => (
          <div key={`about-${index}`} className="relative w-auto">
            <div className="font-body-base font-[number:var(--body-base-font-weight)] text-[#293970] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[1.8] [font-style:var(--body-base-font-style)] hover:text-[#4b70f5] transition-colors cursor-pointer">
              {item}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 relative">
        <div className="pb-4">
          <div className="font-body-strong font-[number:var(--body-strong-font-weight)] text-[#293970] text-[length:var(--body-strong-font-size)] tracking-[var(--body-strong-letter-spacing)] leading-[var(--body-strong-line-height)] [font-style:var(--body-strong-font-style)]">
            Help & Support
          </div>
        </div>

        {supportData.map((item, index) => (
          <div key={`support-${index}`} className="relative w-auto">
            <div className="font-body-base font-[number:var(--body-base-font-weight)] text-[#293970] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[1.8] [font-style:var(--body-base-font-style)] hover:text-[#4b70f5] transition-colors cursor-pointer">
              {item}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};
