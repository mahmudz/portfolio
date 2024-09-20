import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function About() {
  const profile: ProfileType = await getProfile();

  return (
    <div>
      <section>
        <PortableText value={profile.fullBio} />
      </section>

      <section>
        <h4 className="font-semibold pt-10 pb-4">Connect</h4>

        <table>
          <tbody>
            <tr>
              <td className="py-1.5 capitalize">Email</td>
              <td className="pl-6 truncate">
                <a href="mailto:hello@mahmudz.dev" className="link">
                  hello@mahmudz.dev
                </a>
              </td>
            </tr>
            {Object.entries(profile.socialLinks).map((item) => (
              <tr>
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
