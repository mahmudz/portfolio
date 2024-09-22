import { getProfile } from "@/sanity/sanity.query";
import { PortableText } from "next-sanity";

export default async function IntroSection() {
  const profile = await getProfile();

  return (
    <article className="prose dark:prose-invert">
      <p>
        Hi, I'm <em>{profile.nickName}</em> 👋.
      </p>
      <PortableText value={profile.shortBio} />
    </article>
  );
}
