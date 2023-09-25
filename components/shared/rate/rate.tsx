"use client";
import React, { useMemo, useState } from "react";
import StarRate from "./starRate";


export default function Rate() {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, index) => index + 1)
      .map((starNumber) => (
        <StarRate
          setHoverRating={setHoverRating}
          starNumber={starNumber}
          setRating={setRating}
          rating={rating}
          hoverRating={hoverRating}
        />
      ));
  }, [rating, hoverRating]);

  return (
    <div className="w-full h-44 border  flex items-center justify-center space-y-3 flex-col rounded-md ">
        <div>{starRating}</div>
      <p>Your score</p>
    </div>
  );
}
