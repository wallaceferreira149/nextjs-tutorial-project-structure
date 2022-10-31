import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../../navigation/footer/Footer";
import { Header } from "../../navigation/header/Header";

export interface IPrimaryLayout {
  children: ReactNode;
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>
      <Header />
      <main className="min-h-screen flex flex-col items-center">
        {children}
      </main>
      <div className="m-auto" />
      <Footer />
    </>
  );
};
