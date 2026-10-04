import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AKA AI Studio",
    short_name: "AKA AI Studio",
    description:
      "Websites and apps for local businesses in Bihar and UP by three MCA students.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EE",
    theme_color: "#B84B23",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
