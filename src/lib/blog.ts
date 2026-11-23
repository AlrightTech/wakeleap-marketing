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

export const posts: Post[] = [
  ...missionPosts,
  ...snoozePosts,
  ...routinePosts,
  ...appsPosts,
  ...troublePosts,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}