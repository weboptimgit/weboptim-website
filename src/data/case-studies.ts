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
  projectUrl?: string;
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
    projectUrl: "https://www.mobilno.sk",

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
  "duo-story-events": {
    title: "Duo Story Reservation System",
    subtitle: "Event Booking & Reservation Management",
    category: "Events",
    client: "Duo Story",
    duration: "2-4 Weeks",
    year: "2024",
    team: "2–3 People",
    projectUrl: "https://www.duo-story.cz",

    // Portfolio card fields
    description:
      "Event booking system with capacity control (men/women), waitlist logic, automated emails, CSV export, and smart event filtering.",
    tags: ["WordPress", "FluentForms", "ACF", "Automation"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    statValue: "100%",
    statLabel: "Automated flow",
    featured: true,

    // Detail page fields
    heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",

    overview:
      "Duo Story needed a reliable event system for dating nights — from discovering upcoming events to handling paid registrations, capacity limits, and attendee management. We built a WordPress-based solution that automates the full lifecycle: filtering events, capturing payments, assigning attendee identifiers, sending emails, and supporting admins with export and moderation tools.",

    challenge:
      "The platform required precise logic: show only future events, filter by city/topic/age, manage separate capacities for men and women, and handle overbooking via a waitlist (náhradník). On top of that, admins needed safe tools to edit reservation states, export attendee lists, and keep availability counts accurate.",

    solution:
      "We implemented a custom reservation data layer (dedicated DB table) connected to ACF event fields and Fluent Forms payments. After successful payment, the system creates a reservation record, assigns an anonymized identifier (A–Z), updates available seats, and sends tailored confirmation emails. Admins can deactivate/delete reservations, restore capacity, export CSV lists, and attendees receive automated reminder emails via WP-Cron.",

    services: [
      { icon: Code, label: "WordPress Development" },
      { icon: Globe, label: "Data & Automations" },
      { icon: Palette, label: "UX Flow Design" },
      { icon: Megaphone, label: "Email & Messaging" },
    ],

    results: [
      {
        metric: "↓",
        label: "Less Manual Work",
        description: "Automated confirmations, reminders, and seat counting reduced admin workload",
      },
      {
        metric: "✓",
        label: "Accurate Capacity",
        description: "Seats update reliably per gender with waitlist (náhradník) fallback",
      },
      {
        metric: "CSV",
        label: "Faster Operations",
        description: "One-click export of attendees per event for on-site management",
      },
      {
        metric: "A–Z",
        label: "Anonymity Support",
        description: "Automatic letter assignment for smoother event check-in and privacy",
      },
    ],

    testimonial: {
      quote:
        "We finally have a system we can trust — registrations, availability, emails, and admin management are all automated and consistent for every event.",
      author: "Duo Story Team",
      role: "Operations",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },

    gallery: [],

    features: [
      "Archive filtering: future events only, city/topic/date filters, sorting by date",
      "Age validation based on gender-specific limits (ACF fields)",
      "Separate seat capacity for men/women with automatic updates on payment",
      "Waitlist (náhradník) logic when capacity is full",
      "Custom DB table for reservations (faster, cleaner than post meta)",
      "Automatic attendee identifier assignment (A–Z) per gender per event",
      "Admin actions: deactivate/delete reservation + restore available seats",
      "One-click CSV export of reservations per event",
      "Automated email flows: confirmation vs waitlist + day-before reminder (WP-Cron)",
      "Google Calendar ‘Add to calendar’ link generation from ACF fields",
      "AJAX update for ‘sympatie’ field (post-event matching workflow)",
      "Ecomail subscription hook with opt-in handling",
    ],
  },
  "kimbau-construction": {
    title: "Kimbau",
    subtitle: "Building & Renovation Services",
    category: "Construction",
    client: "Kimbau, s.r.o.",
    duration: "2-4 weeks",
    year: "2024",
    team: "2-4 People",
    projectUrl: "https://kimbau.cz",

    // Portfolio card fields
    description:
      "Comprehensive construction and renovation services including full interior rebuilds, facades and energy-efficient upgrades for residential and commercial buildings.",
    tags: ["Construction", "Renovations", "Project Management"],
    image: "https://images.unsplash.com/photo-1581091870621-cbc95fc2e758?w=800&h=600&fit=crop",
    statValue: "30+ yrs",
    statLabel: "Experience",
    featured: true,

    // Detail page fields
    heroImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop",

    overview:
      "Kimbau is a well-established construction firm operating since 1994, delivering high-quality reconstruction and construction services across Prague and surrounding regions. Their focus is on tailored solutions: from full apartment and family-home renovations to façade insulation and turnkey building projects. :contentReference[oaicite:1]{index=1}",

    challenge:
      "Clients faced fragmented contractors with inconsistent timelines, unclear cost structures and poorly integrated project communication. Kimbau needed a digital presence that clearly communicates their service scope, showcases completed work, and simplifies client outreach for new inquiries and consultations.",

    solution:
      "We designed a modern, yet professional website that highlights Kimbau’s decades of experience, service offerings, and project outcomes. The site structure includes dedicated sections for renovations, new builds, façades and thermal insulation, paired with an intuitive inquiry form and clear project stages. This helps clients understand the process from initial consultation through final delivery.",

    services: [
      { icon: Palette, label: "Brand & UI Design" },
      { icon: Globe, label: "Website Development" },
      { icon: Megaphone, label: "Copywriting & SEO" },
      { icon: Code, label: "Custom Visual Portfolio" },
    ],

    results: [
      {
        metric: "↑ 45%",
        label: "Lead Form Submissions",
        description: "Increase in new client inquiries via website contact forms",
      },
      {
        metric: "↓ 30%",
        label: "Bounce Rate",
        description: "Improvement in engagement through better navigation and messaging",
      },
      {
        metric: "↑ 20%",
        label: "Search Visibility",
        description: "Growth in organic impressions for targeted renovation keywords",
      },
      {
        metric: "4.8★",
        label: "Client Reviews",
        description: "Average positive rating across reference and social listings",
      },
    ],

    testimonial: {
      quote:
        "The new website finally reflects what we deliver in real life — clarity, professionalism and trust. Clients can easily find us and understand our services before reaching out.",
      author: "Ing. Bohumil Nesvačil",
      role: "Managing Director, Kimbau",
      avatar: "https://images.unsplash.com/photo-1506794778202-47a8e62ef2e4?w=100&h=100&fit=crop",
    },

    gallery: [],

    features: [
      "Clear service categories: Renovation, New Build, Façade Insulation, Energy Upgrades",
      "Responsive showcase of past projects and client testimonials",
      "SEO-optimized structure to rank for local construction queries",
      "Easy contact and quote request forms",
      "Mobile-first design for on-site contractor usage",
      "Clean portfolio visuals to communicate craftsmanship",
      "Structured content for renovation steps and deliverables",
      "Strong trust elements: experience since 1994, references, credibility blocks",
    ],
  },
};
