import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  nickName: string;
  headline: string;
  email: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: PortableTextBlock[];
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type WorkType = {
  companyName: string;
  jobTitle: string;
  description: string;
  logo?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  tagline: string;
  slug: string;
  type: "client-work" | "company-project" | "side-project" | "open-source";
  logo: {
    image: string;
  };
  projectUrl: string;
  coverImage: string;
  alt: string;
  description: PortableTextBlock[];
};

export type ArticleType = {
  title: string;
  slug: string;
  time_requires_to_read: string;
  canonicalLink: string;
  date: string;
  coverImage: string;
  featured: string;
  tags: string;
  body: PortableTextBlock[];
  isPublished: string;
  logo: {
    image: string;
  };
};
