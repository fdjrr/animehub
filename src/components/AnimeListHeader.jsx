import Link from "next/link";

export default function AnimeListHeader({ title, href }) {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-lg font-semibold text-color-primary">{title}</h1>
      {href ? (
        <Link
          href={href}
          className="text-sm hover:text-color-accent text-color-primary transition-all"
        >
          Lihat Selengkapnya
        </Link>
      ) : null}
    </div>
  );
}
