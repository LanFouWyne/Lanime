import { API_URL } from "astro:env/server";

interface AnimeConfig {
  lanime: {
    siteName: string;
    description: string;
    logo: string;
    favicon: string;
    image: string;
  };

  lanimeApi: {
    apiUrl: string;
    baseUrlPath: string;
  };
}

const animeConfig: AnimeConfig = {
  lanime: {
    siteName: "Lanime",
    description: "Nonton anime gratis ga pake karcis hanya di Lanime",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/lanime.jpg",
  },

  lanimeApi: {
    apiUrl: API_URL,
    baseUrlPath: "/samehadaku",
  },
};

export default animeConfig;
