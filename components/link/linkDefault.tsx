import React from "react";
import type { Route } from 'next';
import Link from 'next/link'

interface LinkDefaultProps {
  text: string;
  className: string;
  href: string;
}

export default function LinkDefault({
  text,
  className,
  href,
}: LinkDefaultProps) {
  return (
    <Link className={className} href={href}>
      {text}
    </Link>
  );
}
