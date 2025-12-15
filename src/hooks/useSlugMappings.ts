import { useLocation } from "react-router-dom";
import { Language } from "@/contexts/LanguageContext";
import { blogPostsData, getTranslatedCategorySlug, getBaseCategorySlug, getAuthorSlug } from "@/data/blog-posts";
import { staticPageSlugs, getBaseRouteFromSlug } from "@/config/domains";

// Hook to get slug mappings for the current page
export const useSlugMappings = (): Record<Language, string> | undefined => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  
  // Handle root path
  if (pathParts.length === 0) {
    return undefined; // Homepage doesn't need slug mapping
  }
  
  const firstSegment = pathParts[0];
  const secondSegment = pathParts[1];
  const thirdSegment = pathParts[2];
  
  // Check if we're on a blog category page (e.g., /blog/category/slug or /blog/kategorie/slug)
  if (firstSegment === "blog" && secondSegment && thirdSegment) {
    const categoryKeywords = ["category", "kategorie", "kategoria"];
    const authorKeywords = ["author", "autor"];
    
    if (categoryKeywords.includes(secondSegment)) {
      // Blog category archive
      const baseSlug = getBaseCategorySlug(thirdSegment);
      return {
        EN: `${staticPageSlugs.blogCategory.EN}/${getTranslatedCategorySlug(baseSlug, "EN")}`,
        CZ: `${staticPageSlugs.blogCategory.CZ}/${getTranslatedCategorySlug(baseSlug, "CZ")}`,
        SK: `${staticPageSlugs.blogCategory.SK}/${getTranslatedCategorySlug(baseSlug, "SK")}`,
      };
    }
    
    if (authorKeywords.includes(secondSegment)) {
      // Blog author archive - author slug stays the same
      return {
        EN: `${staticPageSlugs.blogAuthor.EN}/${thirdSegment}`,
        CZ: `${staticPageSlugs.blogAuthor.CZ}/${thirdSegment}`,
        SK: `${staticPageSlugs.blogAuthor.SK}/${thirdSegment}`,
      };
    }
  }
  
  // Check if we're on a blog post page (has 2 segments like /blog/slug)
  const blogBaseRoute = getBaseRouteFromSlug(firstSegment);
  if (blogBaseRoute === "blog" && secondSegment && !thirdSegment) {
    const currentSlug = secondSegment;
    
    // Find the blog post that matches any language's slug
    const blogPost = blogPostsData.find(
      (post) =>
        post.translations.EN.slug === currentSlug ||
        post.translations.CZ.slug === currentSlug ||
        post.translations.SK.slug === currentSlug
    );
    
    if (blogPost) {
      // Return full path including the translated blog segment
      return {
        EN: `${staticPageSlugs.blog.EN}/${blogPost.translations.EN.slug}`,
        CZ: `${staticPageSlugs.blog.CZ}/${blogPost.translations.CZ.slug}`,
        SK: `${staticPageSlugs.blog.SK}/${blogPost.translations.SK.slug}`,
      };
    }
  }
  
  // Check if we're on a glossary term page
  const glossaryBaseRoute = getBaseRouteFromSlug(firstSegment);
  if (glossaryBaseRoute === "glossary" && secondSegment) {
    const termSlug = secondSegment;
    // Glossary term slugs stay the same across languages (e.g., "api", "cms")
    return {
      EN: `${staticPageSlugs.glossary.EN}/${termSlug}`,
      CZ: `${staticPageSlugs.glossary.CZ}/${termSlug}`,
      SK: `${staticPageSlugs.glossary.SK}/${termSlug}`,
    };
  }
  
  // Check if it's a static page (single segment like /contact, /kontakt, etc.)
  if (pathParts.length === 1) {
    const baseRoute = getBaseRouteFromSlug(firstSegment);
    if (baseRoute && staticPageSlugs[baseRoute]) {
      return staticPageSlugs[baseRoute];
    }
  }
  
  return undefined;
};
