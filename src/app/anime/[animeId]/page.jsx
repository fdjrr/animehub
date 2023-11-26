import VideoPlayer from "@/components/VideoPlayer";
import { getAnimeResponse } from "@/libs/api";
import Image from "next/image";

export default async function Page({ params: { animeId } }) {
  let anime = await getAnimeResponse(`anime/${animeId}`);
  anime = { ...anime.data };

  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-2xl text-color-primary text-center   ">
          {anime.title}
        </h1>
        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3 className="mb-1 font-semibold text-color-accent">Peringkat</h3>
            <p className="text-sm">{anime.rank}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3 className="mb-1 font-semibold text-color-accent">Skor</h3>
            <p className="text-sm">{anime.score}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3 className="mb-1 font-semibold text-color-accent">Durasi</h3>
            <p className="text-sm">{anime.duration}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3 className="mb-1 font-semibold text-color-accent">Episode</h3>
            <p className="text-sm">{anime.episodes}</p>
          </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
          <Image
            src={anime.images.webp.image_url}
            width={250}
            height={250}
            alt="..."
            className="w-full rounded object-cover"
          ></Image>
          <article className="mb-3">
            <p className="text-justify">{anime.synopsis}</p>
          </article>
        </div>
      </div>

      <VideoPlayer videoId={anime.trailer.youtube_id} />
    </>
  );
}
