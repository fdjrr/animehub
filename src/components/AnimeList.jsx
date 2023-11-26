import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ animes }) {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {animes.data?.map((anime, index) => (
        <div
          className="text-color-primary hover:text-color-accent transition-all"
          key={index}
        >
          <Link href={`/anime/${anime.mal_id}`}>
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover rounded-xl"
            />
            <h5 className="font-semibold text-sm p-4 text-center">
              {anime.title}
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
}
