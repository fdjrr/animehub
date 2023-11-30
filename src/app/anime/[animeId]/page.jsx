import ButtonCollection from "@/components/ButtonCollection";
import VideoPlayer from "@/components/VideoPlayer";
import { getAnimeResponse } from "@/libs/api";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Image from "next/image";

export default async function Page({ params: { animeId } }) {
  const user = await authUserSession();

  const collection = await prisma.collections.findFirst({
    where: {
      user_id: user?.id,
      mal_id: animeId,
    },
  });

  console.log(collection);

  let anime = await getAnimeResponse(`anime/${animeId}`);
  anime = { ...anime.data };

  return (
    <>
      <div className="pt-4 px-4 text-color-primary">
        <h1 className="text-2xl text-center mb-5">{anime.title}</h1>
        <div className="flex justify-center items-center">
          <Image
            src={anime.images.webp.image_url}
            width={250}
            height={250}
            alt="..."
            className="rounded object-cover mb-5"
          ></Image>
        </div>
        <div className="flex justify-center gap-2 items-center text-color-primary overflow-x-auto mb-5">
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

        <div className="flex justify-center items-center">
          <article className="w-full lg:w-[50%] mb-5">
            <p className="text-justify">{anime.synopsis}</p>
          </article>
        </div>

        {!collection && (
          <div className="text-center mb-5">
            <ButtonCollection mal_id={anime.mal_id} />
          </div>
        )}
      </div>

      <VideoPlayer videoId={anime.trailer.youtube_id} />
    </>
  );
}
