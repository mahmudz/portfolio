import { groq } from "next-sanity";
import client from "./sanity.client";
import { ArticleType, ProjectType, WorkType } from "@/types";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getWorks(): Promise<WorkType[]> {
  return client.fetch(
    groq`*[_type == "work"]|order(startDate desc){
      _id,
      companyName,
      jobTitle,
      "logo": logo.asset->url,
      url,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
    name,
    tagline,
    "slug": slug.current,
    projectUrl,
    "logo": logo.asset->url,
    }`
  );
}

export async function getProject(slug: string): Promise<ProjectType> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
    name,
    tagline,
    "slug": slug.current,
    projectUrl,
    "logo": logo.asset->url,
    "coverImage": coverImage.asset->url,
    alt,
    description,
    }`,
    {
      slug,
    }
  );
}

export async function getFeaturedProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project" && featured == $featured][0...3]{
      _id,
    name,
    tagline,
    "slug": slug.current,
    projectUrl,
    "logo": logo.asset->url,
    coverImage,
    alt,
    description,
    }`,
    {
      featured: true,
    }
  );
}

export async function getArticles(): Promise<ArticleType[]> {
  return client.fetch(
    groq`*[_type == "article"]{
      title,
      time_requires_to_read,
      "slug": slug.current,
    }`
  );
}

export async function getArticle(slug: string): Promise<ArticleType> {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      title,
      time_requires_to_read,
      "slug": slug.current,
      body,
    }`,
    {
      slug,
    }
  );
}
