import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export interface ISearch {}

export const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    router.push(`/results?search=${searchTerm}`);
  }

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className=" space-x-3">
        <button
          className="border-0 p-2 px-6 bg-slate-100 rounded-md"
          type="submit"
        >
          Google Search
        </button>
        <button
          className="border-0 p-2 px-6 bg-slate-100 rounded-md"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            alert("FEATURE COMING SOON!");
          }}
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};
