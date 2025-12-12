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
  // Basic info
  title: string;
  subtitle: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  team: string;
  // Portfolio card fields
  description: string;
  tags: string[];
  image: string;
  statValue: string;
  statLabel: string;
  featured: boolean;
  // Detail page fields
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
  mobilno: {
    title: "Mobilno",
    subtitle: "Marketplace for Mobile Service Providers",
    category: "Marketplace",
    client: "Mobilno",
    duration: "Ongoing",
    year: "2024–2025",
    team: "2–4 Members",

    // Portfolio card fields
    description:
      "A marketplace where customers post a request and mobile professionals respond with offers — built for SEO, scale, and smooth onboarding.",
    tags: ["Marketplace", "WordPress", "Technical SEO"],
    image: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",
    statValue: "+180%",
    statLabel: "Organic Visibility",
    featured: true,

    // Detail page fields
    heroImage: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",

    overview:
      "Mobilno connects people who need a service with mobile professionals (e.g., DJs, massage therapists, photographers, repairs). The platform is built to grow through SEO: structured listings, city-based landing pages, and clean internal linking between categories, services, and providers.",

    challenge:
      "We needed a content model that scales (providers, services, categories, specializations, locations) while keeping navigation simple. The key was making search and filtering feel instant, and making SEO work with city-based pages without duplicate or canonical issues.",

    solution:
      "We built a WordPress marketplace using custom post types, taxonomies, and advanced fields. We implemented SEO-friendly routing for category + city pages, optimized queries and caching, and shipped UX flows for provider onboarding, profile creation, and request → offer conversion.",

    services: [
      { icon: Code, label: "WordPress Development" },
      { icon: Palette, label: "UI/UX Design" },
      { icon: Globe, label: "Technical SEO" },
      { icon: Megaphone, label: "Conversion Optimization" },
    ],

    results: [
      {
        metric: "+3.2x",
        label: "Provider Onboarding",
        description: "More providers completed registration and published their profiles",
      },
      {
        metric: "+180%",
        label: "Indexed Landing Pages",
        description: "Growth of category + city pages discoverable via Google",
      },
      {
        metric: "-45%",
        label: "Faster Matching",
        description: "Shorter time from customer request to first provider response",
      },
      {
        metric: "+28%",
        label: "CTA Engagement",
        description: "Higher interaction with key actions (request, contact, signup)",
      },
    ],

    testimonial: {
      quote:
        "Mobilno now feels like a real product. The platform is structured, fast, and ready to scale — providers can onboard easily and customers find what they need without friction.",
      author: "Peter Gáborík",
      role: "Founder, Mobilno",
      avatar: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
    },

    gallery: [],

    features: [
      "Custom post types for provider profiles and services",
      "Taxonomy structure for categories, specializations, and problem types",
      "City-based landing pages with SEO-safe routing and canonicals",
      "Search + filtering optimized for relevance (service, city, keywords)",
      "Conversion-focused provider onboarding (Free/Premium-ready tiers)",
      "Performance improvements (lean queries, caching, reduced duplicate calls)",
      "Schema-ready structured pages to improve search appearance",
      "Internal linking strategy between listings, cities, and provider profiles",
    ],
  },
  "duo-story-dating": {
    title: "Duo Story",
    subtitle: "Dating Platform & Brand Experience",
    category: "Dating",
    client: "Duo Story",
    duration: "4–6 Weeks",
    year: "2024",
    team: "2–3 People",

    // Portfolio card fields
    description: "A calm, story-first dating platform built for meaningful connections — beyond endless swiping.",
    tags: ["Web Design", "Branding", "UX"],
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop",
    statValue: "↑",
    statLabel: "Trust-focused UX",
    featured: false,

    // Detail page fields
    heroImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&h=800&fit=crop",

    overview:
      "Duo Story was created to connect people who want more than just a quick swipe. The goal was to build a warm, safe, and calm digital space where users can slow down, communicate honestly, and start real stories — beginning with a simple “hello”.",

    challenge:
      "Most dating products optimize for speed and superficial decisions. Duo Story needed a distinct brand and UX direction that feels trustworthy, human, and intentional — while still being easy to use and modern. The tone had to support meaningful conversations, safety, and emotional comfort from the first visit.",

    solution:
      "We designed a story-led brand and website experience focused on clarity, comfort, and trust. The content and UI reduce noise, highlight authentic communication, and reinforce safety. The structure guides users from the promise of the platform to values, how it works, and a confident next step to join.",

    services: [
      { icon: Palette, label: "Brand Identity" },
      { icon: Palette, label: "UI/UX Design" },
      { icon: Code, label: "Web Development" },
      { icon: Megaphone, label: "Content & Messaging" },
    ],

    results: [
      {
        metric: "—",
        label: "Clear Positioning",
        description: "Stronger differentiation from swipe-based dating apps",
      },
      {
        metric: "—",
        label: "Trust Signals",
        description: "Safety-first messaging and UX patterns across key pages",
      },
      {
        metric: "—",
        label: "Smoother Onboarding",
        description: "Clear user journey from landing page to sign-up intent",
      },
      {
        metric: "—",
        label: "Brand Consistency",
        description: "Unified tone of voice across sections and CTAs",
      },
    ],

    testimonial: {
      quote:
        "We wanted a place where people can truly get to know each other. The result feels calm, honest, and human — exactly the kind of environment Duo Story needed.",
      author: "Duo Story Team",
      role: "Founders",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },

    gallery: [],

    features: [
      "Story-first messaging that avoids swipe culture",
      "Warm, calm visual system designed for trust",
      "Clear values section: honesty, safety, meaningful connection",
      "Simple content structure with strong readability",
      "CTA flow that feels inviting, not pushy",
      "Mobile-first responsive layout",
      "Reusable components for future pages (FAQ, rules, pricing)",
      "Brand tone guidelines for consistent future content",
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
    // Portfolio card fields
    description: "High-converting marketing website with integrated lead capture and analytics for B2B startup.",
    tags: ["React", "UI/UX", "Conversion"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    statValue: "+320%",
    statLabel: "Lead Generation",
    featured: true,
    // Detail page fields
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    overview:
      "TechFlow, a B2B SaaS startup, needed a high-converting marketing website to launch their product. We created a modern, conversion-focused website with integrated lead capture and analytics.",
    challenge:
      "As a new entrant in a competitive market, TechFlow needed to establish credibility quickly while generating qualified leads. Their existing landing page had poor conversion rates and didn't effectively communicate their value proposition.",
    solution:
      "We designed a comprehensive marketing website with clear messaging, social proof elements, and strategically placed CTAs. The site includes interactive product demos, a resource center, and sophisticated lead nurturing workflows.",
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
      quote:
        "The team delivered exactly what we needed - a website that not only looks amazing but actually converts. Our lead generation has skyrocketed since launch.",
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
