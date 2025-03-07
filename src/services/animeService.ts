import skuy from "@utils/skuy";

export interface Allinimes {
  list: {
    startWith: string;
    animeList: AnimeLinkCard[];
  }[];
}

export default async function homeService() {
  const result = await skuy<Allinimes>("/anime");

  return result;
}
