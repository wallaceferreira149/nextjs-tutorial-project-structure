import Link from "next/link";

export interface ISidebar {}

export const Sidebar: React.FC<ISidebar> = () => {
  return (
    <nav className="flex h-screen flex-col w-72 bg-gray-100 p-8 border-r">
      <input
        type="text"
        className="mt-8 px-2 py-2 rounded"
        placeholder="Search..."
      />
      <div className="flex flex-col gap-4 mt-10">
        <Link href="/">
          <a className="bg-gray-300 text-center py-2 px-2 font-semibold hover:bg-gray-600 hover:text-gray-100 transition-all duration-300 text-gray-600 rounded">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="bg-gray-300 text-center py-2 px-2 font-semibold hover:bg-gray-600 hover:text-gray-100 transition-all duration-300 text-gray-600 rounded">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="bg-gray-300 text-center py-2 px-2 font-semibold hover:bg-gray-600 hover:text-gray-100 transition-all duration-300 text-gray-600 rounded">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};
