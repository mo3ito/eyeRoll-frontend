import { ChangeEvent } from "react";

export default function handleNumberInputChange(
  event: ChangeEvent<HTMLInputElement>,
  setStateFunction: Function
) {
  const inputValue = event?.target.value.trim();
  const parseValue = parseInt(inputValue);
  if (parseValue >= 0 && !isNaN(parseValue)) {
    setStateFunction(parseValue.toString());
  } else {
    setStateFunction("");
  }
}
