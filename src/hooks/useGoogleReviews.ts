import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface GoogleReview {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  time?: string;
}

interface GoogleReviewsResult {
  reviews: GoogleReview[];
  rating: number | null;
  total: number | null;
  loading: boolean;
}

// Module-level cache — fetch only once per session
let cachedReviews: GoogleReview[] | null = null;
let cachedRating: number | null = null;
let cachedTotal: number | null = null;
let fetchPromise: Promise<void> | null = null;

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useGoogleReviews(count = 3): GoogleReviewsResult {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(!cachedReviews);

  useEffect(() => {
    if (cachedReviews) {
      // Pick `count` random reviews from cache
      setReviews(shuffleArray(cachedReviews).slice(0, count));
      setRating(cachedRating);
      setTotal(cachedTotal);
      setLoading(false);
      return;
    }

    // Only one inflight request
    if (!fetchPromise) {
      fetchPromise = supabase.functions
        .invoke("google-reviews")
        .then(({ data, error }) => {
          if (!error && data?.reviews?.length > 0) {
            cachedReviews = data.reviews;
            cachedRating = data.rating ?? null;
            cachedTotal = data.total ?? null;
          }
        })
        .catch(() => {
          // silently fail — components fall back to static reviews
        });
    }

    fetchPromise.then(() => {
      if (cachedReviews) {
        setReviews(shuffleArray(cachedReviews).slice(0, count));
        setRating(cachedRating);
        setTotal(cachedTotal);
      }
      setLoading(false);
    });
  }, [count]);

  return { reviews, rating, total, loading };
}
