import AnimeList from "@/components/AnimeList";
import AnimeListHeader from "@/components/AnimeListHeader";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 6);

  return (
    <>
      {/* Paling Populer */}
      <section>
        <AnimeListHeader title="Paling Populer" href="/popular" />
        <AnimeList animes={topAnime} />
      </section>

      {/* Rekomendasi */}
      <section>
        <AnimeListHeader title="Rekomendasi" />
        <AnimeList animes={recommendedAnime} />
      </section>
    </>
  );
}
