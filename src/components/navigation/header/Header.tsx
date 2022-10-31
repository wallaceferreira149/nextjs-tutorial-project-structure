import Link from "next/link";

export interface IHeader extends React.ComponentPropsWithoutRef<`header`> {}

export const Header: React.FC<IHeader> = ({ className, ...props }) => {
  return (
    <header className={`w-full flex justify-between ${className}`} {...props}>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Store</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <button className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white">
          Sign In
        </button>
      </div>
    </header>
  );
};
