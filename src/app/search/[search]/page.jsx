import AnimeList from "@/components/AnimeList";
import AnimeListHeader from "@/components/AnimeListHeader";
import { getAnimeResponse } from "@/libs/api";

export default async function Page({ params }) {
  const search = decodeURI(params.search);

  const searchAnimes = await getAnimeResponse("anime", `q=${search}`);

  return (
    <>
      <section>
        <AnimeListHeader title={`Search : ${search}`} />
        <AnimeList animes={searchAnimes} />
      </section>
    </>
  );
}
