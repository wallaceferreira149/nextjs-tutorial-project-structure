import Link from "next/link";

export interface ISearchResult extends React.ComponentPropsWithoutRef<"div"> {
  url: string;
  title: string;
  text: string;
}

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
