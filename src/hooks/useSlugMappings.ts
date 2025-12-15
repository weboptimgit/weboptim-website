import { useLocation } from "react-router-dom";
import { Language } from "@/contexts/LanguageContext";
import { blogPostsData, getTranslatedCategorySlug, getBaseCategorySlug } from "@/data/blog-posts";
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
  
  // Check if we're on a blog page
  if (firstSegment === "blog" && secondSegment) {
    const authorKeywords = ["author", "autor"];
    
    // Check if it's an author page (e.g., /blog/author/peter-gaborik)
    if (authorKeywords.includes(secondSegment) && thirdSegment) {
      return {
        EN: `${staticPageSlugs.blogAuthor.EN}/${thirdSegment}`,
        CZ: `${staticPageSlugs.blogAuthor.CZ}/${thirdSegment}`,
        SK: `${staticPageSlugs.blogAuthor.SK}/${thirdSegment}`,
      };
    }
    
    // Check if it's a blog post or category (both are /blog/slug format now)
    if (!thirdSegment) {
      const currentSlug = secondSegment;
      
      // First, try to find a blog post
      const blogPost = blogPostsData.find(
        (post) =>
          post.translations.EN.slug === currentSlug ||
          post.translations.CZ.slug === currentSlug ||
          post.translations.SK.slug === currentSlug
      );
      
      if (blogPost) {
        return {
          EN: `${staticPageSlugs.blog.EN}/${blogPost.translations.EN.slug}`,
          CZ: `${staticPageSlugs.blog.CZ}/${blogPost.translations.CZ.slug}`,
          SK: `${staticPageSlugs.blog.SK}/${blogPost.translations.SK.slug}`,
        };
      }
      
      // If not a blog post, check if it's a category slug
      const baseSlug = getBaseCategorySlug(currentSlug);
      if (baseSlug) {
        return {
          EN: `blog/${getTranslatedCategorySlug(baseSlug, "EN")}`,
          CZ: `blog/${getTranslatedCategorySlug(baseSlug, "CZ")}`,
          SK: `blog/${getTranslatedCategorySlug(baseSlug, "SK")}`,
        };
      }
    }
  }
  
  // Check if we're on a glossary term page
  const glossaryBaseRoute = getBaseRouteFromSlug(firstSegment);
  if (glossaryBaseRoute === "glossary" && secondSegment) {
    const termSlug = secondSegment;
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
