import Header from "@/components/Header";
import UserController from "@/components/UserController";
import Layouts from "@/layouts/Layouts";
import React from "react";

const Index = () => {
  return (
    <Layouts>
      <Header />
      <UserController />
    </Layouts>
  );
};

export default Index;
