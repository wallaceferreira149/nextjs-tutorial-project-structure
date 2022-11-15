import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../../navigation/footer/Footer";
import { Header } from "../../navigation/header/Header";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  justify?: "items-center" | "items-start";
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = "items-center",
  ...props
}) => {
  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>
      <div className={`min-h-screen flex flex-col ${justify}`} {...props}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};
