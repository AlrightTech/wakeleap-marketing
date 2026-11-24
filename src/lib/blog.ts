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
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}