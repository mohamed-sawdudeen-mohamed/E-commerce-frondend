import React from "react";
import MainBar from "../components/MainBar";
import ProductTable from "../components/ProductTable";

function Main(props) {
  return (
    <>
      <div className="container">
        <h1 className="mt-4">PRODUCTS</h1>

        <MainBar />
        <ProductTable />
      </div>
    </>
  );
}

export default Main;
