"use client";
import React, { ChangeEvent, useState, Dispatch } from "react";

interface InputDefaultProps {
  type: string;
  className: string
  value: string | number;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDefault({
  type = "string",
  value,
  onChange,
  className,
  placeholder
} : InputDefaultProps) {

  
  return <input  placeholder={placeholder} className={className} type={type} value={value} onChange={onChange} />;
}
