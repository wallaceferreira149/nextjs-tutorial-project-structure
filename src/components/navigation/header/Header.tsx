import Link from "next/link";
import { AuthButton } from "../../button/auth/AuthButton";

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
        <AuthButton />
      </div>
    </header>
  );
};
