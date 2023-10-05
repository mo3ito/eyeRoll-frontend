"use client";
import React, { ChangeEvent } from "react";

interface InputDefaultProps {
  type: string;
  className: string;
  value: string | number;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export default function InputDefault({
  type = "string",
  value,
  onChange,
  className,
  placeholder,
  disabled = false,
}: InputDefaultProps) {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
