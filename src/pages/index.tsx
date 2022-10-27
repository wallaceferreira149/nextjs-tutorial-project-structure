import { CatCard } from "../components/cards/cat/CatCard";
import { PrimaryLayout } from "../components/layouts/primary/PrimaryLayout";
import { Sidebar } from "../components/layouts/sidebar/SideBar";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return (
    <section className="p-8 flex flex-col h-screen w-full">
      <h1 className="mx-auto text-2xl bg-gray-100 p-8 rounded-full text-gray-700 font-semibold">
        Bem vindo ao Projeto de Estrura do Next.js
      </h1>
      <CatCard
        title="Gato siames"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi perspiciatis blanditiis quos similique aperiam autem hic corporis non voluptatum, vel praesentium sint neque quia. Explicabo tempora ex nobis itaque."
        author="Wallace"
        time="01:22"
        tag="lista"
      />
      {/* <CatCard {...mockCatCardProps.base} /> */}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Sidebar />
      {page}
    </PrimaryLayout>
  );
};
