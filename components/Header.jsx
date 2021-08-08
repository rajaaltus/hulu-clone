import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title={"HOME"} link={"/"} />
        <HeaderItem Icon={LightningBoltIcon} title={"TRENDING"} link={"/"} />
        <HeaderItem Icon={BadgeCheckIcon} title={"VERFIFIED"} link={"/"} />
        <HeaderItem Icon={CollectionIcon} title={"COLLECTIONS"} link={"/"} />
        <HeaderItem Icon={SearchIcon} title={"SEARCH"} link={"/"} />
        <HeaderItem Icon={UserIcon} title={"ACCOUNT"} link={"/"} />
      </div>
      <Image
        className="object-contain"
        src="/logo.svg"
        width={145}
        height={55}
        alt="image"
      />
    </header>
  );
};

export default Header;
