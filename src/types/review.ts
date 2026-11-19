export type ReviewStatus = "pending" | "approved" | "rejected";

export type Review = {
  id: string;
  rating: number; // 1-5
  name: string;
  text: string;
  lang: "en" | "hi";
  status: ReviewStatus;
  createdAt: string; // ISO
};

/** The only fields ever sent to public pages. */
export type PublicReview = Pick<Review, "id" | "rating" | "name" | "text" | "lang" | "createdAt">;

export type ReviewSummary = { count: number; average: number | null };
