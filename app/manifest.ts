import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haresh Sainaath - Systems-first Engineer",
    short_name: "Haresh Sainaath",
    description:
      "Portfolio of Haresh Sainaath - AI & ML engineering student building scalable systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    orientation: "portrait",
    icons: [
      {
        src: "/thumbnail/Gemini_Generated_Image_x3yb9x3yb9x3yb9x.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
