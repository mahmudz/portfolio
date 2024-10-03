"use client";

import client from "@/sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
};

const builder = imageUrlBuilder(client);

function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export default function SanityImage({ src, alt, ...props }: Props) {
  const blurDataURL = urlForImage(src).width(24).height(24).blur(50).url();

  return (
    <Image
      src="Doesn't matter"
      alt={alt}
      blurDataURL={blurDataURL}
      placeholder="blur"
      loader={({ width, quality = 100 }) =>
        urlForImage(src).width(width).quality(quality).url()
      }
      {...props}
    />
  );
}
