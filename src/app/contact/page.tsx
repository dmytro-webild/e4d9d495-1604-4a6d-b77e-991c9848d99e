"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
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
        <div className="pt-32 pb-20">
            <ContactSplitForm
            title="Let's Connect"
            description="Reach out to discuss your project requirements."
            inputs={[
                { name: "name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", type: "email", placeholder: "Email Address", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Your Message" }}
            useInvertedBackground={false}
            />
        </div>
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Company", items: [{ label: "Work", href: "/portfolio" }, { label: "Contact", href: "/contact" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
