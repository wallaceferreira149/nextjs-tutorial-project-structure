import type { NextPage } from "next";
import { CatCard } from "../components/cards/cat/CatCard";
import { mockCatCardProps } from "../components/cards/cat/CatCard.mocks";

const Home: NextPage = () => {
  return (
    <>
      <CatCard
        title="Gato siames"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi perspiciatis blanditiis quos similique aperiam autem hic corporis non voluptatum, vel praesentium sint neque quia. Explicabo tempora ex nobis itaque."
        author="Wallace"
        time="01:22"
        tag="lista"
      />
      <CatCard {...mockCatCardProps.base} />
    </>
  );
};

export default Home;
