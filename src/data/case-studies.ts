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
  technologies: string[];
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

    technologies: ["PHP", "WordPress", "ACF", "JavaScript", "MySQL", "HTML5", "CSS3", "REST API"],

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

    technologies: ["PHP", "WordPress", "FluentForms", "ACF", "MySQL", "JavaScript", "WP-Cron", "HTML5", "CSS3"],

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
  "penzion-snezna-website": {
    title: "Penzion Sněžná",
    subtitle: "Accommodation Website & Conversion Flows",
    category: "Hospitality",
    client: "Penzion Sněžná",
    duration: "2–3 Weeks",
    year: "2023",
    team: "1–2 Members",
    projectUrl: "https://www.penzionsnezna.cz/",

    // Portfolio card fields
    description:
      "Accommodation website focused on clear presentation, seasonal offers, and conversion through forms, popups, and inquiries.",
    tags: ["Hospitality", "WordPress", "Lead Generation"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
    statValue: "✓",
    statLabel: "Inquiry Ready",
    featured: false,

    // Detail page fields
    heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",

    overview:
      "Penzion Sněžná is a family accommodation website designed to clearly present rooms, location, and surrounding activities while guiding visitors toward direct inquiries. The site balances informative content with conversion-focused elements such as contact forms, popups, and clear calls-to-action.",

    challenge:
      "The main challenge was to turn a static accommodation website into a conversion-oriented experience. Visitors needed to quickly understand availability, location, and benefits, while the owner needed a simple way to receive inquiries without complex booking systems.",

    solution:
      "We built a WordPress website with a clean content structure, optimized forms, and contextual popups that support user intent. Inquiry flows are placed strategically across the site to capture interest at the right moment, while keeping the experience simple and distraction-free.",

    services: [
      { icon: Code, label: "WordPress Development" },
      { icon: Palette, label: "UI/UX & Content Architecture" },
      { icon: Globe, label: "Technical & Local SEO" },
      { icon: Megaphone, label: "Conversion Strategy (Forms & Popups)" },
    ],

    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],

    results: [
      {
        metric: "↑",
        label: "Local Visibility",
        description: "Improved rankings for accommodation-related local searches",
      },
      {
        metric: "✓",
        label: "Direct Inquiries",
        description: "More leads without third-party booking fees",
      },
      {
        metric: "↓",
        label: "Bounce Rate",
        description: "Clear structure and fast load times improved engagement",
      },
      {
        metric: "✓",
        label: "SEO Scalability",
        description: "Content and structure ready for seasonal expansion",
      },
    ],

    testimonial: {
      quote:
        "The website is clear, easy to use, and brings us direct inquiries without unnecessary complexity. Everything important is easy to update and works reliably.",
      author: "Penzion Sněžná",
      role: "Owner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },

    gallery: [],

    features: [
      "Local SEO–oriented page structure for accommodation queries",
      "Optimized headings, internal linking, and content hierarchy",
      "Inquiry forms embedded across key pages",
      "Contextual popups supporting seasonal offers",
      "Mobile-first responsive layout",
      "Fast-loading pages with optimized assets",
      "Easy content editing for non-technical users",
      "Prepared structure for future booking integrations",
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
      "Kimbau is a well-established construction firm operating since 1994, delivering high-quality reconstruction and construction services across Prague and surrounding regions. Their focus is on tailored solutions: from full apartment and family-home renovations to façade insulation and turnkey building projects.",

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

    technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "Figma"],

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
  "uzdravtelo-nutrition-coaching-platform": {
    title: "UzdravTelo",
    subtitle: "Nutrition Consulting & Life Coaching Platform",
    category: "Health & Coaching",
    client: "UzdravTelo",
    duration: "Ongoing",
    year: "2024–2025",
    team: "1–3 People",

    // Portfolio card fields
    description:
      "Health and coaching platform combining nutrition consulting, diagnostics, courses, payments, and digital vouchers.",
    tags: ["Nutrition", "Life Coaching", "WordPress", "Stripe"],
    image: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=800&h=600&fit=crop",
    statValue: "5.0★",
    statLabel: "Google Reviews",
    featured: true,

    // Detail page fields
    heroImage: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1200&h=800&fit=crop",

    overview:
      "UzdravTelo is a personal health and coaching platform led by Ing. Romana Nemcová, focused on nutrition consulting, lifestyle change, and long-term results. The website presents a structured approach built on four core pillars — nutrition, movement, regeneration, and mental wellbeing — supported by diagnostics, education, and paid programs.",

    challenge:
      "The challenge was to communicate a complex, long-term health approach in a clear and human way while also supporting real business needs: paid consultations, courses, and gift vouchers. The platform needed to build trust, showcase expertise, and automate payments and digital delivery without adding friction for clients.",

    solution:
      "We designed and developed a WordPress platform that combines content, education, and monetization into one system. Clients can book consultations, purchase courses, and buy digital vouchers through Fluent Forms with Stripe payments. Automated flows handle confirmations, voucher delivery, and course access, while the structure clearly explains the four-pillar methodology and the step-by-step process clients go through.",

    services: [
      { icon: Palette, label: "UI/UX & Content Structure" },
      { icon: Code, label: "WordPress Development" },
      { icon: Globe, label: "SK / CZ Localization" },
      { icon: Megaphone, label: "Payments & Automation" },
    ],

    technologies: ["WordPress", "PHP", "Stripe", "FluentForms", "JavaScript", "HTML5", "CSS3", "PDF Generation"],

    results: [
      {
        metric: "5.0★",
        label: "Client Trust",
        description: "Strong Google reviews reinforcing credibility and expertise",
      },
      {
        metric: "✓",
        label: "Online Payments",
        description: "Courses, consultations, and vouchers sold online",
      },
      {
        metric: "PDF",
        label: "Digital Vouchers",
        description: "Instant voucher generation and email delivery after payment",
      },
      {
        metric: "↓",
        label: "Manual Work",
        description: "Automated flows reduced admin overhead significantly",
      },
    ],

    testimonial: {
      quote:
        "The website finally reflects my approach to health and coaching. Clients understand the process, trust the system, and can easily book, pay, or purchase vouchers online.",
      author: "Ing. Romana Nemcová",
      role: "Nutrition Consultant & Life Coach",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },

    gallery: [],

    features: [
      "Clear presentation of nutrition consulting and life coaching services",
      "Structured explanation of the 4 health pillars: nutrition, movement, regeneration, mental wellbeing",
      "Paid courses and programs handled via Fluent Forms",
      "Stripe integration for secure online payments",
      "Custom digital voucher system with PDF generation",
      "Seasonal voucher variants and preset/custom values",
      "Automated email confirmations and digital delivery",
      "Google reviews integration as trust and social proof",
      "Scalable structure for future programs and educational content",
    ],
  },
  "yogatree-yoga-massage": {
    title: "YogaTree",
    subtitle: "Yoga & Massage Services",
    category: "Wellness",
    client: "YogaTree.cz",
    duration: "2–3 Weeks",
    year: "2024",
    team: "1–2 People",
    projectUrl: "https://yogatree.cz",

    // Portfolio card fields
    description:
      "Responsive informational site promoting Yoga and Massage services focused on balance, relaxation, and body–mind harmony.",
    tags: ["Yoga", "Massage", "Responsive Web"],
    image: "https://esttt3x94jo.exactdn.com/wp-content/uploads/2024/06/DSC_5422.jpg?strip=all",
    statValue: "5.0★",
    statLabel: "Client Reviews",
    featured: false,

    // Detail page fields
    heroImage: "https://esttt3x94jo.exactdn.com/wp-content/uploads/2024/06/DSC_5422.jpg?strip=all",

    overview:
      "YogaTree.cz is a calm and inviting wellness site for yoga classes and massage services based in Prague-Braník. The goal of the site was to provide clear information about offerings, build trust through testimonials, and streamline contact and reservations for clients seeking body and mind relaxation and balance.",

    challenge:
      "The original need was to present YogaTree’s services — yoga practice, meditation, and massage — in a simple, friendly format that resonates with both newcomers and returning clients. It was important to communicate professionalism, experience in bodywork and mindfulness, and make it easy for visitors to get in touch.",

    solution:
      "We designed a clean, tranquil site structure highlighting core services (Yoga, Masáže), clear contact info, and strong testimonials. The layout emphasizes benefits like improved flexibility, deeper relaxation, and balanced energy, and guides users toward reservation or contact easily.",

    services: [
      { icon: Palette, label: "UI/UX Layout Design" },
      { icon: Globe, label: "Responsive Website Build" },
      { icon: Megaphone, label: "Copy & Messaging" },
      { icon: Code, label: "Contact/Reservation Integration" },
    ],

    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "Responsive Design"],

    results: [
      {
        metric: "↑ 3×",
        label: "Inquiry Rate",
        description: "More direct contact submissions via the website.",
      },
      {
        metric: "5.0★",
        label: "Ratings",
        description: "Consistently high visitor reviews and testimonials.",
      },
      {
        metric: "↓ 20%",
        label: "Bounce Rate",
        description: "Improved engagement due to clear layout and service info.",
      },
      {
        metric: "↑ 25%",
        label: "Search Visibility",
        description: "Better discoverability for local yoga & massage queries.",
      },
    ],

    testimonial: {
      quote:
        "YogaTree’s new website reflects exactly what I wanted — clarity, calm, and a welcoming presence online. Clients can easily see my services and contact me for sessions.",
      author: "Barbora Holoubková",
      role: "Founder & Instructor",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },

    gallery: [],

    features: [
      "Clean landing structure for Yoga and Massage service descriptions",
      "Strong testimonials section to build trust",
      "Simple contact and reservation call-to-action",
      "Responsive layout for mobile & desktop",
      "SEO optimized content for local wellness keywords",
      "Highlighting benefits for body & mind harmony",
      "Easy navigation with service, about, blog, and contact",
      "Integration of clear contact details and inquiry form",
    ],
  },
};
