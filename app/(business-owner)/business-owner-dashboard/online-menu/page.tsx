"use client";
import React, { ChangeEvent, useState } from "react";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";

export default function Facilities() {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string | number>("");
  const [productDescription, setProductDescription] = useState<string>("");

  const changeProductNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    
    setProductName(event.target.value.trim());
  };

  const changeProductPriceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    const parseValue = parseInt(inputValue);
    if (parseValue >= 0 && !isNaN(parseValue)) {
      setProductPrice(parseValue.toString());
    } else {
      setProductPrice("");
    }
  };

  const changeProductDescriptionHandler = (event: ChangeEvent<HTMLInputElement>)=>{
    setProductDescription(event.target.value.trim())
  }


  return (
    <div className="bg-sky-100 w-full h-screen">
      <div className="container px-4  h-max mx-auto">
        <div className="w-1/4 h-44 mx-auto py-12">
          <div className="mb-4">
            <p className="mb-3">import your product</p>
            <InputDefault
              disabled={false}
              type="text"
              value={productName}
              onChange={changeProductNameHandler}
              placeholder="for examole: pizza"
              className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
            />
          </div>

          <div className="mb-3">
            <p className="mb-3">import your price (dollar)</p>
            <InputDefault
              disabled={false}
              type="text"
              value={productPrice}
              onChange={changeProductPriceHandler}
              placeholder="for examole: 3"
              className="w-full h-10 border focus:border-2 border-fuchsia-400 px-2 outline-none bg-transparent rounded-lg"
            />
          </div>

          <div className="mb-3">
            <p className="mb-3">import your description</p>
            <textarea value={productDescription} onChange={changeProductDescriptionHandler} className="w-full h-44 border focus:border-2 border-fuchsia-400 p-2 outline-none bg-transparent rounded-lg" />
          </div>

          <ButtonDefault
            text="send"
            className="hoverScale w-full bg-fuchsia-400 h-12 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
