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
        key={starNumber}
          setHoverRating={setHoverRating}
          starNumber={starNumber}
          setRating={setRating}
          rating={rating}
          hoverRating={hoverRating}
        />
      ));
  }, [rating, hoverRating]);

  return (
    <div className="w-full h-24   flex items-center justify-center  flex-col  ">
        <div>{starRating}</div>
      <p>Your score</p>
    </div>
  )
}
