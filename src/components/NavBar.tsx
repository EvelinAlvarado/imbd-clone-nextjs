import { Suspense } from "react";
import { NavbarItem } from "./NavBarItem";

export default function Navbar() {
  return (
    /* Wrap components that use hooks like useSearchParams in a Suspense boundary 
          when using Next.js on static pages to avoid CSR bailouts. This allows 
          for better loading states and improved user experience. */
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
