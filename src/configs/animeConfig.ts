import { API_URL } from "astro:env/server";

interface AnimeConfig {
  linime: {
    siteName: string;
    description: string;
    logo: string;
    favicon: string;
    image: string;
  };

  linimeApi: {
    apiUrl: string;
    baseUrlPath: string;
  };
}

const animeConfig: AnimeConfig = {
  linime: {
    siteName: "Linime",
    description: "Nonton anime gratis ga pake karcis hanya di linime",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/linime.jpg",
  },

  linimeApi: {
    apiUrl: API_URL,
    baseUrlPath: "/samehadaku",
  },
};

export default animeConfig;
