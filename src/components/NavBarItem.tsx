"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ItemProps = {
  title: string;
  param: string;
};
export const NavbarItem = ({ title, param }: ItemProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`navBar-item ${
          genre === param ? "navBar-item-selected" : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};
