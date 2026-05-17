"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Search, Monitor, Zap, Palette, Code, Target } from "lucide-react";

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
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "/services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "/#contact" }}
        />
        <FeatureCardMedia
          title="Our Digital Offerings"
          description="We provide a comprehensive range of professional web solutions to help businesses scale."
          textboxLayout="split"
          animationType="slide-up"
          features={[
            {
              id: "web-dev",              title: "Custom Web Development",              description: "High-performance, scalable web applications built with modern frameworks.",              tag: "Development",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp"},
            {
              id: "seo",              title: "Strategic SEO",              description: "Data-driven search engine optimization to boost your visibility and rankings.",              tag: "Marketing",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp"},
            {
              id: "branding",              title: "Brand Identity",              description: "Comprehensive visual branding strategies to make your company stand out.",              tag: "Creative",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp"},
            {
              id: "uiux",              title: "UI/UX Design",              description: "User-focused design that prioritizes engagement and conversion.",              tag: "Design",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp"},
          ]}
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Work", href: "/#work" },
                { label: "Contact", href: "/#contact" },
              ],
            },
            {
              title: "Services",              items: [
                { label: "Web Development", href: "/services" },
                { label: "SEO", href: "/services" },
                { label: "Branding", href: "/services" },
                { label: "UI/UX Design", href: "/services" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Dribbble", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
