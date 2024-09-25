import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";

function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="capitalize bg-slate-800 px-3 py-1 rounded-md">{skill}</div>
  );
}

export default async function About() {
  const profile: ProfileType = await getProfile();

  return (
    <div>
      <article className="prose dark:prose-invert">
        <PortableText value={profile.fullBio} />
      </article>

      <section>
        <div className="pt-10 pb-4">
          <h4 className="font-semibold">Things I'm most proficient with</h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="font-semibold pt-10 pb-4">Connect</h4>

        <table>
          <tbody>
            <tr>
              <td className="py-1.5 capitalize">Email</td>
              <td className="pl-6 truncate">
                <a href={`mailto:${profile.email}`} className="link">
                  {profile.email}
                </a>
              </td>
            </tr>
            {Object.entries(profile.socialLinks).map((item) => (
              <tr key={item[0]}>
                <td className="py-1.5 capitalize">{item[0]}</td>
                <td className="pl-6 truncate">
                  <a target="_blank" href={item[1]} className="link">
                    {item[1]}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
