"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/HeaderMenu";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async (page) => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);

    setTopAnime(data);
  };

  useEffect(() => {
    getTopAnime(page);
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`Paling Populer #${page}`} />
      <AnimeList animes={topAnime} />
      <Pagination
        page={page}
        totalPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
}
