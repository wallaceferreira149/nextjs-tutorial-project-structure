import { PrimaryLayout } from "../components/layouts/primary/PrimaryLayout";
import { Sidebar } from "../components/layouts/sidebar/SideBar";
import { NextPageWithLayout } from "./page";

const About: NextPageWithLayout = () => {
  return (
    <section className="">
      <h1 className="">Sobre nós</h1>
      <p className="">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Sidebar />
      {page}
    </PrimaryLayout>
  );
};
