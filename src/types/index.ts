import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type WorkType = {
  companyName: string;
  jobTitle: string;
  logo?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
};

export type ProjectType = {
  name: string;
  tagline: string;
  slug: string;
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
