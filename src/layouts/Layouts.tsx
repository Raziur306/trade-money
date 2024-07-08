import Footer from "@/components/Footer";
import React from "react";

const Layouts = ({ children }: any) => {
  return (
    <>
      <main className={"pt-10 pl-32 pr-32"}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layouts;
