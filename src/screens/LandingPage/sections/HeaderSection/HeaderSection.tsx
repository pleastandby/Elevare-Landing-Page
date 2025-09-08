import React from "react";
import { Button } from "../../../../components/ui/button";
import logo from "./elevare---logo-1.svg";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Home", href: "#home", isActive: true },
    { label: "Features", href: "#features", isActive: false },
    { label: "About", href: "#about", isActive: false },
    { label: "Contact", href: "#contact", isActive: false },
  ];

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="flex w-full items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8"
              src={logo}
            />
            <div className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
              Elevare
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href)}
                  className={`[font-family:'Poppins',Helvetica] font-medium text-lg tracking-[0] leading-[normal] transition-colors hover:text-[#4b70f5] ${
                    item.isActive ? "text-[#4b70f5]" : "text-[#3b3b3b]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <Button className="px-6 py-2 rounded-lg bg-[linear-gradient(37deg,rgba(19,65,231,1)_0%,rgba(140,171,255,1)_100%)] hover:bg-[linear-gradient(37deg,rgba(19,65,231,0.9)_0%,rgba(140,171,255,0.9)_100%)] border-0 transition-all duration-200">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
                Login
              </span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
