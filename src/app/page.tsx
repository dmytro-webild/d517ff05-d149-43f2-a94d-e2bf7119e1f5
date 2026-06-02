"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Building, Clock, Cog, Droplets, Facebook, Home, Instagram, Linkedin, Mail, Search, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Options",
          id: "#options",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="San Diego Roofing"
      button={{
        text: "Get a Free Estimate",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Expert Roofing Services in San Diego"
      description="Reliable roof replacement and repair, protecting your home with quality craftsmanship and local expertise. Get a free estimate today!"
      buttons={[
        {
          text: "Get a Free Estimate",
          href: "#contact",
        },
        {
          text: "Explore Services",
          href: "#services",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-view-man-working-roof-with-drill_23-2148748773.jpg",
          imageAlt: "Modern house with new roof in San Diego",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill-low-view_23-2148748772.jpg",
          imageAlt: "Roofer inspecting a damaged roof for repair",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-park-with-concrete-buildings-roubaix-france_181624-13166.jpg",
          imageAlt: "House with solar panels on a new roof",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-working-roof_23-2149343671.jpg",
          imageAlt: "Commercial building with a flat roof being repaired",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-holding-coffee-cups_23-2148752019.jpg",
          imageAlt: "Team of professional roofers working on a residential roof",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/metallic-iron-textured-abstract-backdrop_23-2148139853.jpg",
          imageAlt: "Close-up of high-quality asphalt shingle roof texture",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="San Diego's Trusted Roofing Professionals"
      description="With over 15 years of dedicated service, San Diego Roofing provides top-tier replacement and repair solutions. We prioritize durability, aesthetics, and customer satisfaction."
      subdescription="Our certified team uses only the highest quality materials, ensuring your roof stands strong against the elements. We're committed to excellence in every project, delivering peace of mind."
      icon={Home}
      imageSrc="http://img.b2bpic.net/free-photo/people-working-construction-site_23-2151889148.jpg"
      imageAlt="Roofing team collaborating on a project plan"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Cog,
          title: "Roof Replacement",
          description: "Complete removal and installation of new roofing systems with superior materials and craftsmanship.",
        },
        {
          icon: Wrench,
          title: "Leak & Damage Repair",
          description: "Prompt and effective repair services for leaks, missing shingles, storm damage, and general wear and tear.",
        },
        {
          icon: Search,
          title: "Thorough Roof Inspections",
          description: "Detailed evaluations to identify potential issues, assess roof health, and provide preventative maintenance recommendations.",
        },
        {
          icon: Droplets,
          title: "Gutter Services",
          description: "Installation, repair, and cleaning of gutters to ensure proper water drainage and protect your home's foundation.",
        },
        {
          icon: Building,
          title: "Commercial Roofing",
          description: "Specialized roofing services for commercial properties, including flat roofs, TPO, and metal roofing systems.",
        },
        {
          icon: Clock,
          title: "Emergency Repair",
          description: "24/7 rapid response for urgent roofing issues to prevent further damage and secure your property.",
        },
      ]}
      title="Comprehensive Roofing Solutions for Every Need"
      description="From minor repairs to full roof replacements, we've got you covered. Our services are designed to protect your investment and enhance your home's value for years to come."
      tag="Our Services"
    />
  </div>

  <div id="options" data-section="options">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "asphalt-shingle",
          name: "Asphalt Shingle",
          price: "Starting at $5/sq ft",
          imageSrc: "http://img.b2bpic.net/free-photo/contrasting-outdoor-texture-design_23-2149756603.jpg",
          imageAlt: "Asphalt shingle roof",
        },
        {
          id: "tile-roofing",
          name: "Tile Roofing",
          price: "Starting at $10/sq ft",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-geometric-abstract-twist-background_1048-17253.jpg",
          imageAlt: "Spanish tile roof",
        },
        {
          id: "flat-roofing",
          name: "Flat Roofing",
          price: "Starting at $7/sq ft",
          imageSrc: "http://img.b2bpic.net/free-photo/specialist-technician-professional-engineer-with-laptop-tablet-maintenance-checking-installing-solar-roof-panel-factory-rooftop-sunlight-engineers-team-survey-check-solar-panel-roof_609648-2202.jpg",
          imageAlt: "Flat roof on a commercial building",
        },
        {
          id: "metal-roofing",
          name: "Metal Roofing",
          price: "Starting at $12/sq ft",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-beautiful-wooden-house-with-new-roof_23-2149343703.jpg",
          imageAlt: "Modern standing seam metal roof",
        },
        {
          id: "wood-shake",
          name: "Wood Shake",
          price: "Starting at $9/sq ft",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15708.jpg",
          imageAlt: "Wood shake shingle roof",
        },
        {
          id: "synthetic-roofing",
          name: "Synthetic Roofing",
          price: "Starting at $8/sq ft",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-wooden-modern-house_23-2149343652.jpg",
          imageAlt: "Synthetic composite roof shingles",
        },
      ]}
      title="Durable & Stylish Roofing Options"
      description="Choose from a variety of high-quality materials and styles to perfectly match your home's aesthetic and budget. Our experts will guide you to the best choice for lasting protection."
      tag="Roofing Types"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "experience",
          value: "15+",
          description: "Years of Experience",
        },
        {
          id: "customers",
          value: "500+",
          description: "Happy Customers",
        },
        {
          id: "projects",
          value: "1000+",
          description: "Projects Completed",
        },
        {
          id: "ratings",
          value: "5-Star",
          description: "Average Rating",
        },
      ]}
      title="Proven Excellence in Every Project"
      description="Our commitment to quality and customer satisfaction is reflected in our outstanding track record. We build trust, one roof at a time, ensuring lasting results for our community."
      tag="Our Impact"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Homeowner",
          company: "San Diego",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/real-estate-satisfied-man-rejoicing-founding-perfect-home-apartment-holding-paper-house-model-standing_1258-26617.jpg",
          imageAlt: "Portrait of Sarah J.",
        },
        {
          id: "2",
          name: "Michael T.",
          role: "Property Manager",
          company: "San Diego",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/working-with-papers_1098-14410.jpg",
          imageAlt: "Portrait of Michael T.",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Resident",
          company: "Encinitas",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-dancing-home_23-2149891542.jpg",
          imageAlt: "Portrait of Emily R.",
        },
        {
          id: "4",
          name: "David K.",
          role: "Small Business Owner",
          company: "La Jolla",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/view-couple-lying-down-floor-their-new-home_637285-12448.jpg",
          imageAlt: "Portrait of David K.",
        },
        {
          id: "5",
          name: "Jessica L.",
          role: "Homeowner",
          company: "Chula Vista",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-female-florist-with-flower-photo-album-shop_23-2147882081.jpg",
          imageAlt: "Portrait of Jessica L.",
        },
        {
          id: "6",
          name: "Robert S.",
          role: "Residential Developer",
          company: "Carlsbad",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mother-hugging-daughter-from-bed_23-2148092336.jpg",
          imageAlt: "Portrait of Robert S.",
        },
      ]}
      kpiItems={[
        {
          value: "99%",
          label: "Customer Satisfaction",
        },
        {
          value: "24/7",
          label: "Emergency Services",
        },
        {
          value: "10-Year",
          label: "Workmanship Warranty",
        },
      ]}
      title="What Our San Diego Clients Say"
      description="Hear directly from homeowners who trusted us with their roofing needs. Their satisfaction is our greatest achievement and drives our commitment to excellence."
      tag="Client Stories"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How often should I have my roof inspected?",
          content: "We recommend having your roof inspected annually, especially after severe weather events. Regular inspections can identify minor issues before they become major problems.",
        },
        {
          id: "q2",
          title: "What are the signs I need a new roof?",
          content: "Common signs include missing or curled shingles, granules in your gutters, water stains on your ceiling, sagging roof deck, or if your roof is over 20-25 years old.",
        },
        {
          id: "q3",
          title: "How long does a roof replacement take?",
          content: "The duration of a roof replacement depends on the size and complexity of your roof, as well as weather conditions. Most residential replacements are completed within 2-5 days.",
        },
        {
          id: "q4",
          title: "Is a free estimate truly free?",
          content: "Yes, our estimates are completely free and come with no obligation. We'll assess your roof, discuss your options, and provide a detailed quote without any hidden fees.",
        },
        {
          id: "q5",
          title: "What types of roofing materials do you work with?",
          content: "We specialize in a wide range of materials including asphalt shingles, tile, flat roofs (TPO, EPDM), metal roofing, wood shake, and synthetic composite materials.",
        },
        {
          id: "q6",
          title: "Do you offer financing options?",
          content: "Yes, we understand that a new roof is a significant investment. We offer flexible financing solutions to help make your roofing project affordable. Contact us to learn more.",
        },
      ]}
      title="Common Questions About Roofing"
      description="Find answers to frequently asked questions regarding roof repair, replacement, costs, and maintenance. If you don't see your question, feel free to contact us directly!"
      tag="FAQs"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "GAF Roofing",
        "Owens Corning",
        "CertainTeed",
        "Tamko Building Products",
        "Duro-Last",
        "Firestone Building Products",
        "Malarkey Roofing Products",
        "Boral Roofing",
        "DaVinci Roofscapes",
      ]}
      title="Quality Materials from Reputable Brands"
      description="We partner with leading manufacturers in the roofing industry to ensure every roof we install uses the best materials available, backed by solid warranties for your peace of mind."
      tag="Trusted Partners"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get Your Free Roofing Estimate Today!"
      description="Contact us for a no-obligation consultation. Our team is ready to provide expert advice and a detailed quote for your San Diego roofing project. We look forward to hearing from you!"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number (Optional)",
        },
        {
          name: "address",
          type: "text",
          placeholder: "Property Address (for estimate)",
          required: true,
        },
      ]}
      textarea={{
        name: "project_details",
        placeholder: "Tell us about your roofing needs (e.g., 'leak repair', 'full replacement', 'inspection')",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/bearded-man-smoking-roof_1321-1036.jpg"
      imageAlt="Professional roofer on a roof inspecting the area"
      mediaAnimation="slide-up"
      mediaPosition="left"
      buttonText="Request My Free Estimate"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="San Diego Roofing"
      copyrightText="© 2024 San Diego Roofing. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Linkedin,
          href: "#",
          ariaLabel: "LinkedIn",
        },
        {
          icon: Mail,
          href: "#",
          ariaLabel: "Email",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
