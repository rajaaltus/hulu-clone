import Link from "next/link";
const HeaderItem = ({ title, Icon, link }) => {
  return (
    <Link href={link}>
      <a className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
        <Icon className="h-6 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 duration-200 group-hover:opacity-100 tracking-widest text-sm">
          {title}
        </p>
      </a>
    </Link>
  );
};

export default HeaderItem;
