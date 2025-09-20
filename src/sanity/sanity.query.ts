import { groq } from "next-sanity";
import client from "./sanity.client";
import { ArticleType, ProfileType, ProjectType, WorkType } from "@/types";

export async function getProfile(): Promise<ProfileType> {
  return client.fetch(
    groq`*[_type == "profile"][0]{
      _id,
      fullName,
      nickName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      availableForWork,
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
      description,
      "logo": logo.asset->url,
      url,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"] | order(year.start desc, year.end desc, featured desc) {
    _id,
    name,
    tagline,
    "slug": slug.current,
    type,
    year,
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
    type,
    year,
    projectUrl,
    "logo": logo.asset->url,
    coverImage,
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
    groq`*[_type == "project" && featured == $featured][0...4]{
      _id,
      name,
      tagline,
      "slug": slug.current,
      type,
      projectUrl,
      "logo": logo.asset->url,
      "coverImage": coverImage.asset->url,
      alt,
    }`,
    {
      featured: true,
    }
  );
}

export async function getArticles(): Promise<ArticleType[]> {
  return client.fetch(
    groq`*[_type == "article"][isPublished == true]{
      title,
      date,
      time_requires_to_read,
      "slug": slug.current,
    }`
  );
}

export async function getArticle(slug: string): Promise<ArticleType> {
  return client.fetch(
    groq`*[_type == "article" && isPublished == true && slug.current == $slug][0]{
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
