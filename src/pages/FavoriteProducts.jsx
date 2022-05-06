import React from "react";
import MainBar from "../components/MainBar";
import ProductTable from "../components/ProductTable";

function FavoriteProducts(props) {
  return (
    <>
      <div className="container">
        <h1 className="mt-4">FAVORITE PRODUCTS</h1>

        <MainBar />
        <ProductTable />
      </div>
    </>
  );
}

export default FavoriteProducts;
