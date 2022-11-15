import Link from "next/link";
import { ISearchData } from "../../../lib/search/types";

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<"div">;

export const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col w-5/6 max-w-screen space-y-1 ${className}`}
      {...props}
    >
      <Link href={url}>
        <a
          className="cursor:pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{url}</p>
          <p className="text-blue-600 text-xl">{title}</p>
        </a>
      </Link>
      <p>{text}</p>
    </div>
  );
};
