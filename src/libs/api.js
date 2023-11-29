export const getAnimeResponse = async (resource, query) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${resource}?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await req.json();
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const res = await getAnimeResponse(resource);

  return res.data?.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap) => {
  const start = ~~(Math.random() * (data?.length - gap) + 1);
  const end = start + gap;

  return {
    data: data.slice(start, end),
  };
};
