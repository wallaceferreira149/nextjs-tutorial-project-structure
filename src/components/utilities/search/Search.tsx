import { FormEvent, useState } from "react";

export interface ISearch {}

export const Search: React.FC<ISearch> = () => {
  const [searchItem, setSearchItem] = useState<string>();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert(`Action requested. Search for: ${searchItem}`);
  }

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-4"
        onChange={(e) => setSearchItem(e.target.value)}
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
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};
