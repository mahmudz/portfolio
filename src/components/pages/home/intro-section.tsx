import AvailableForWork from "@/components/available-for-work";
import { getProfile } from "@/sanity/sanity.query";
import { PortableText } from "next-sanity";

export default async function IntroSection() {
  const profile = await getProfile();

  return (
    <div>
      {profile.availableForWork && (
        <div className="pb-5">
          <AvailableForWork />
        </div>
      )}
      <article className="prose dark:prose-invert">
        <p>
          Hi, I'm <em>{profile.nickName}</em> 👋.
        </p>
        <PortableText value={profile.shortBio} />
      </article>
    </div>
  );
}
