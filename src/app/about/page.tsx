"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <TextSplitAbout
          title="Our Story"
          description={[
            "Webild started with a simple vision: to bridge the gap between creative design and high-performance engineering.",            "We believe that great websites are built at the intersection of stunning visuals and robust architecture. Our journey has been defined by a commitment to helping brands find their unique voice in a crowded digital space.",            "Over the years, we've refined our process to be lean, fast, and remarkably effective. We don't just build websites; we build growth engines."
          ]}
          useInvertedBackground={false}
        />
        <TeamCardEleven
          title="The People Behind the Vision"
          description="Meet our core team dedicated to excellence."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          groups={[
            {
              id: "leadership",              groupTitle: "Leadership",              members: [
                { id: "1", title: "Sarah Miller", subtitle: "Lead Developer", detail: "With over 10 years in tech, Sarah ensures every site is built with scalability in mind." },
                { id: "2", title: "Valentina Reyes", subtitle: "Creative Director", detail: "Valentina brings a sharp eye for aesthetic balance and brand integrity to every project." },
              ]
            }
          ]}
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Work", href: "/work" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}