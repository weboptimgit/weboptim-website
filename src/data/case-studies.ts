import { LucideIcon, Code, Palette, Globe, Megaphone } from "lucide-react";

export interface CaseStudyService {
  icon: LucideIcon;
  label: string;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  team: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  services: CaseStudyService[];
  results: CaseStudyResult[];
  testimonial: CaseStudyTestimonial;
  gallery: string[];
  features: string[];
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "flavor-bistro-wordpress": {
    title: "Flavor Bistro",
    subtitle: "WordPress Website & Brand Identity",
    category: "Restaurant",
    client: "Flavor Bistro Group",
    duration: "6 Weeks",
    year: "2024",
    team: "4 Specialists",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
    overview: "Flavor Bistro, a growing restaurant chain, needed a complete digital transformation to attract more customers and streamline their online presence. We delivered a stunning WordPress website with online reservations, menu management, and local SEO optimization.",
    challenge: "The client was struggling with an outdated website that didn't reflect their brand quality. They were losing potential customers to competitors with better online presence and had no way to manage reservations or update their menu easily.",
    solution: "We built a custom WordPress theme with a focus on visual storytelling, integrating a seamless reservation system, dynamic menu management, and location-based SEO. The design emphasized mouth-watering food photography and the restaurant's warm ambiance.",
    services: [
      { icon: Code, label: "WordPress Development" },
      { icon: Palette, label: "Brand Identity" },
      { icon: Globe, label: "SEO Optimization" },
      { icon: Megaphone, label: "Local Marketing" },
    ],
    results: [
      { metric: "+150%", label: "Online Bookings", description: "Increase in reservations through the website" },
      { metric: "+280%", label: "Organic Traffic", description: "Growth in search engine visibility" },
      { metric: "4.9★", label: "Customer Rating", description: "Average review score post-launch" },
      { metric: "-60%", label: "Bounce Rate", description: "Reduction in visitors leaving immediately" },
    ],
    testimonial: {
      quote: "The new website has completely transformed our business. We're getting more reservations than ever, and our customers love how easy it is to browse our menu and book a table.",
      author: "Marco Rossi",
      role: "Owner, Flavor Bistro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    ],
    features: [
      "Custom WordPress theme with restaurant-focused design",
      "Online reservation system with real-time availability",
      "Dynamic menu management with allergen information",
      "Multi-location support with individual pages",
      "Google My Business integration",
      "Mobile-first responsive design",
      "Speed optimization for fast loading",
      "Schema markup for rich search results",
    ],
  },
  "techflow-saas": {
    title: "TechFlow SaaS",
    subtitle: "Marketing Website & Lead Generation",
    category: "SaaS",
    client: "TechFlow Inc.",
    duration: "8 Weeks",
    year: "2024",
    team: "5 Specialists",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    overview: "TechFlow, a B2B SaaS startup, needed a high-converting marketing website to launch their product. We created a modern, conversion-focused website with integrated lead capture and analytics.",
    challenge: "As a new entrant in a competitive market, TechFlow needed to establish credibility quickly while generating qualified leads. Their existing landing page had poor conversion rates and didn't effectively communicate their value proposition.",
    solution: "We designed a comprehensive marketing website with clear messaging, social proof elements, and strategically placed CTAs. The site includes interactive product demos, a resource center, and sophisticated lead nurturing workflows.",
    services: [
      { icon: Code, label: "Web Development" },
      { icon: Palette, label: "UI/UX Design" },
      { icon: Globe, label: "SEO Strategy" },
      { icon: Megaphone, label: "Conversion Optimization" },
    ],
    results: [
      { metric: "+320%", label: "Lead Generation", description: "Increase in qualified leads per month" },
      { metric: "+450%", label: "Organic Traffic", description: "Growth in search visibility" },
      { metric: "12%", label: "Conversion Rate", description: "Visitor to lead conversion" },
      { metric: "2.5x", label: "Demo Requests", description: "Increase in product demo bookings" },
    ],
    testimonial: {
      quote: "The team delivered exactly what we needed - a website that not only looks amazing but actually converts. Our lead generation has skyrocketed since launch.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
    ],
    features: [
      "Custom React-based marketing website",
      "Interactive product tour and demos",
      "Integrated CRM and lead tracking",
      "A/B testing framework",
      "Blog with SEO optimization",
      "Customer success stories section",
      "Pricing calculator tool",
      "Multi-language support",
    ],
  },
};
