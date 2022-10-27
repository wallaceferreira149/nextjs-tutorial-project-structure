import Head from "next/head";
import { ReactNode } from "react";

export interface IPrimaryLayout {
  children: ReactNode;
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout</title>
      </Head>
      <main className="h-screen w-full flex bg-white">{children}</main>
    </>
  );
};
