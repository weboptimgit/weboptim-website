export interface GlossaryResource {
  title: string;
  url: string;
}

export interface GlossaryTerm {
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  category: string;
  examples: string[];
  relatedTerms: string[];
  whyItMatters: string;
  resources?: GlossaryResource[];
}

export const glossaryTermsData: Record<string, GlossaryTerm> = {
  api: {
    term: "API",
    shortDefinition: "Application Programming Interface",
    fullDefinition: "An API (Application Programming Interface) is a set of protocols, routines, and tools that allows different software applications to communicate with each other. Think of it as a waiter in a restaurant – you (the application) tell the waiter (the API) what you want, and the waiter brings back your order from the kitchen (the server or database).",
    category: "Development",
    examples: [
      "When you use a weather app, it uses an API to fetch weather data from a remote server.",
      "Social media login buttons (\"Login with Google\") use APIs to authenticate users.",
      "Payment processing on e-commerce sites uses APIs like Stripe or PayPal.",
      "Maps embedded on websites use Google Maps API or similar services."
    ],
    relatedTerms: ["REST API", "GraphQL", "Endpoint", "Backend", "JSON"],
    whyItMatters: "APIs are the backbone of modern web development. They allow your website to integrate with third-party services, fetch real-time data, process payments, send emails, and much more. Without APIs, every application would need to build everything from scratch.",
    resources: [
      { title: "What is an API? (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" },
      { title: "REST API Tutorial", url: "https://restfulapi.net/" }
    ]
  },
  cms: {
    term: "CMS",
    shortDefinition: "Content Management System",
    fullDefinition: "A CMS (Content Management System) is software that allows users to create, manage, and modify digital content on a website without needing specialized technical knowledge. Think of it like a document editor for your website – you can add text, images, and pages without writing any code.",
    category: "Development",
    examples: [
      "WordPress powers over 40% of all websites, from blogs to e-commerce stores.",
      "Shopify is a CMS specifically designed for online stores and e-commerce.",
      "Webflow combines visual design tools with CMS capabilities for designers.",
      "Contentful and Sanity are headless CMS options for developers building custom frontends."
    ],
    relatedTerms: ["WordPress", "Headless CMS", "Backend", "Database", "WYSIWYG"],
    whyItMatters: "A CMS empowers you to update your website content independently, without relying on developers for every small change. This saves time and money while keeping your content fresh and up-to-date. For businesses, it means faster content publishing and better control over your digital presence.",
    resources: [
      { title: "What is a CMS? (HubSpot)", url: "https://blog.hubspot.com/blog/tabid/6307/bid/7969/what-is-a-cms-and-why-should-you-care.aspx" },
      { title: "WordPress Official Site", url: "https://wordpress.org/" }
    ]
  }
};
