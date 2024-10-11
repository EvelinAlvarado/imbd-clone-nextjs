import Link from "next/link";
import { MenuItem } from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => {
  return (
    <div className="flexBetween max-container p-3">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flexCenter gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flexCenter gap-1">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};
