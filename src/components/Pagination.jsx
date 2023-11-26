export default function Pagination({ page, totalPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-3 text-color-primary text-lg">
      {page <= 1 ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      <p>
        {page} of {totalPage}
      </p>
      {page >= totalPage ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}
