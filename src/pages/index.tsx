import DataItems from "@/components/DataItems";
import Header from "@/components/Header";
import UserController from "@/components/UserController";
import Layouts from "@/layouts/Layouts";
import React from "react";

const Index = () => {
  return (
    <Layouts>
      <Header />
      <UserController />
      <DataItems />
    </Layouts>
  );
};

export default Index;
