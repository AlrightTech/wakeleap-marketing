export type Post = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  content: string | string[];
  faqs: { q: string; a: string }[];
};

import { missionPosts } from "./blog-cluster-mission";
import { snoozePosts } from "./blog-cluster-snooze";
import { routinePosts } from "./blog-cluster-routine";
import { appsPosts } from "./blog-cluster-apps";
import { troublePosts } from "./blog-cluster-trouble";
import { noSnoozePosts } from "./blog-cluster-nosnooze";
import { vibratePosts } from "./blog-cluster-vibrate";
import { mathPosts } from "./blog-cluster-math";
import { circadianPosts } from "./blog-cluster-circadian";
import { adhdPosts } from "./blog-cluster-adhd";
import { smartPosts } from "./blog-cluster-smart";
import { miraclePosts } from "./blog-cluster-miracle";
import { teenPosts } from "./blog-cluster-teen";
import { stretchPosts } from "./blog-cluster-stretch";
import { prayerPosts } from "./blog-cluster-prayer";
import { sunrisePosts } from "./blog-cluster-sunrise";
import { loudPosts } from "./blog-cluster-loud";
import { bestPosts } from "./blog-cluster-best";
import { travelPosts } from "./blog-cluster-travel";
import { studentPosts } from "./blog-cluster-student";

export const posts: Post[] = [
  ...missionPosts,
  ...snoozePosts,
  ...routinePosts,
  ...appsPosts,
  ...troublePosts,
  ...noSnoozePosts,
  ...vibratePosts,
  ...mathPosts,
  ...circadianPosts,
  ...adhdPosts,
  ...smartPosts,
  ...miraclePosts,
  ...teenPosts,
  ...stretchPosts,
  ...prayerPosts,
  ...sunrisePosts,
  ...loudPosts,
  ...bestPosts,
  ...travelPosts,
  ...studentPosts,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}