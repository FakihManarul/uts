import React from "react";
import ProductTable from "@/components/product-table";
import Navbar from "@/components/Navbar";
import Search from "@/components/search";
import { CreateButton } from "@/components/button";

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-5 bg-white">
      <Navbar />
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ProductTable />
    </div>
  );
};

export default Products;
