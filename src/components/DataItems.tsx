import { allData } from "@/utils/data";
import React from "react";
import MainCard from "./MainCard";
import Pagination from "./Pagination";

const DataItems = () => {
  return (
    <div className="flex flex-col gap-10">
      {allData.map((item, index) => {
        const { token_name, mention, data } = item;
        return (
          <MainCard
            key={index}
            tokenName={token_name}
            mention={mention}
            data={data}
          />
        );
      })}
      <Pagination />
    </div>
  );
};

export default DataItems;
