import Image from "next/image";

export interface ICatCard {
  title: string;
  body: string;
  author: string;
  time: string;
  tag: string;
}

export const CatCard: React.FC<ICatCard> = ({
  title,
  body,
  author,
  time,
  tag,
}) => {
  return (
    <div className="m-4">
      <div className="flex flex-col w-80 overflow-hidden shadow-md rounded bg-gray-200 bg-gradient-to-r from-white to-gray-200">
        <header className="card header">
          <Image
            src="https://www.chefbob.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg.webp"
            alt="Vercel image"
            className="max-w-full block object-cover"
            width="600"
            height="400"
          />
        </header>
        <main className="flex flex-col p-4 gap-1 ">
          <span className="items-start w-min px-2 py-1 rounded-3xl text-sm bg-gradient-to-b from-blue-200 to-blue-600 text-white">
            {tag}
          </span>
          <h4 className="text-xl font-bold">{title}</h4>
          <p>{body}</p>
        </main>
        <footer className="flex p-4 mt-auto">
          <div className="flex gap-4">
            <Image
              src="/vercel.svg"
              alt="Vercel image"
              className="rounded-full border"
              width="40"
              height="40"
            />
            <div className="text-sm gap-0">
              <h5 className="font-bold">{author}</h5>
              <small className="text-gray-400">{time}</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
