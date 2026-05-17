"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
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
            { name: "Work", id: "/portfolio" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Professional Digital Excellence"
          description="Elevate your brand with sophisticated web design and high-performance development, engineered for growth and aesthetic precision."
          tag="Professional Imagery"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Start Project", href: "/contact" },
            { text: "View Work", href: "/portfolio" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp", imageAlt: "Professional UI design architecture" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "High-end SaaS interface" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Premium lifestyle branding" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-7.webp", imageAlt: "Educational platform UI" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-9.webp", imageAlt: "Executive consulting portal" },
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp", imageAlt: "Luxurious travel experience platform" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp", imageAlt: "Medical healthcare interface" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp", imageAlt: "Modern AI builder tool" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp", imageAlt: "Corporate AI automation solution" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Our Strategic Services"
          description="Sophisticated digital solutions tailored for high-growth enterprises and ambitious brands."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "All Services", href: "/services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "SEO",              description: "Advanced search engine optimization designed to position your brand as a market leader.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["Strategic Keywords", "Technical Backlinks", "Meta Strategy", "Market Analytics", "Rank Optimization"],
            },
            {
              title: "Web Development",              description: "Engineering-grade websites that prioritize performance, security, and scalability.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp", imageAlt: "Professional AI platform" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp", imageAlt: "Modern architectural studio site" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp", imageAlt: "Corporate roofing interface" },
              ],
            },
            {
              title: "Brand Identity",              description: "Crafting distinct visual identities that communicate authority and trust.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp", imageAlt: "Brand visual project A" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp", imageAlt: "Brand visual project B" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "Brand visual project C" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Selected Case Studies"
          description="A curated portfolio demonstrating our commitment to quality and results."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Work", href: "/portfolio" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            { title: "Umbra Skincare", description: "High-end fragrance e-commerce", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp", imageAlt: "Umbra project", buttonIcon: ArrowUpRight, buttonHref: "#" },
            { title: "Luxuria Travel", description: "Bespoke luxury travel portal", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp", imageAlt: "Luxuria project", buttonIcon: ArrowUpRight, buttonHref: "#" },
            { title: "Professional Dental", description: "Modern clinical portal", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp", imageAlt: "Dental project", buttonIcon: ArrowUpRight, buttonHref: "#" },
            { title: "Summit Roofing", description: "High-conversion professional site", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp", imageAlt: "Roofing project", buttonIcon: ArrowUpRight, buttonHref: "#" },
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Webild’s attention to visual detail and technical execution was transformative for our firm's digital reach."
          rating={5}
          author="— Executive Leadership"
          avatars={[{ src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", alt: "Professional client representative" }]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Global Professional Standards"
          description="Years of delivering precision-engineered digital products."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "100+", title: "Completed Projects", description: "Industry-leading implementations", icon: Award },
            { id: "satisfaction", value: "99%", title: "Client Satisfaction", description: "Maintained excellence record", icon: Users },
            { id: "years", value: "8+", title: "Years Experience", description: "Strategic digital execution", icon: TrendingUp },
          ]}
        />
        <TeamCardFive
          title="Our Team"
          description="Experts dedicated to technical excellence and design integrity."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Sarah Miller", role: "Lead Developer", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", imageAlt: "Sarah Miller" },
            { id: "2", name: "Valentina Reyes", role: "Creative Director", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp", imageAlt: "Valentina Reyes" },
            { id: "3", name: "Carlos Mendoza", role: "UX Specialist", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp", imageAlt: "Carlos Mendoza" },
          ]}
        />
        <ContactCTA
          tag="Consultation"
          title="Ready to Elevate Your Brand?"
          description="Professional web solutions designed for industry leaders. Let's discuss your project."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Start Consultation", href: "/contact" },
            { text: "View Portfolio", href: "/portfolio" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Agency", items: [{ label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Work", href: "/portfolio" }, { label: "Contact", href: "/contact" }] },
            { title: "Capabilities", items: [{ label: "Web Dev", href: "#" }, { label: "SEO", href: "#" }, { label: "Branding", href: "#" }] },
            { title: "Connect", items: [{ label: "LinkedIn", href: "#" }, { label: "Twitter", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
