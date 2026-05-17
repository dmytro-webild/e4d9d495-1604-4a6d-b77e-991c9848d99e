"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Monitor, Zap, Palette, Code, Target, Search } from "lucide-react";

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Work", id: "/" },
              { name: "Services", id: "/services" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
            ]}
            button={{ text: "Get Started", href: "/contact" }}
            brandName="Webild"
          />
        </div>
        <div id="services" data-section="services">
          <FeatureBorderGlow
            title="Our Digital Offerings"
            description="We provide a comprehensive range of professional web solutions to help businesses scale."
            textboxLayout="split"
            animationType="slide-up"
            useInvertedBackground={false}
            features={[
              {
                icon: Code,
                title: "Custom Web Development",                description: "High-performance, scalable web applications built with modern frameworks."},
              {
                icon: Search,
                title: "Strategic SEO",                description: "Data-driven search engine optimization to boost your visibility and rankings."},
              {
                icon: Palette,
                title: "Brand Identity",                description: "Comprehensive visual branding strategies to make your company stand out."},
              {
                icon: Monitor,
                title: "UI/UX Design",                description: "User-focused design that prioritizes engagement and conversion."},
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
