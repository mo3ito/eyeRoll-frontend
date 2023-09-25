import { starRateTypeProps } from "@/types/starRateType.ts/starRateType";

export default function StarRate({
  setHoverRating,
  setRating,
  hoverRating,
  rating,
  starNumber,
}: starRateTypeProps) {
  return (
    <button
      onMouseEnter={() => setHoverRating(starNumber)}
      onMouseLeave={() => setHoverRating(0)}
      onClick={() => setRating(starNumber)}
    >
      <svg
        className={`w-6 h-6 ${
          hoverRating >= starNumber
            ? "fill-yellow-400"
            : !hoverRating && rating >= starNumber
            ? "fill-yellow-400"
            : "fill-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
      </svg>
    </button>
  );
}
