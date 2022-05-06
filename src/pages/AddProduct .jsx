import React, { useState } from "react";

function AddProduct(props) {
  const [SKU, setSKU] = useState("");
  const [name, setname] = useState("");
  const [QTY, setQTY] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  //   const [productImage, setProductImage] = useState("");

  const addProdct = () => {};
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h1 className="mt-4">PRODUCTS</h1>
          <button className="btn btn-sm mt-3 ml-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 24.5714L17.5714 16L9 7.42857L10.7143 4L22.7143 16L10.7143 28L9 24.5714Z"
                fill="#001EB9"
              />
            </svg>
          </button>
          <a href="http://" className="mt-3 pt-3 font-weight-bold">
            Add new product
          </a>
        </div>
        <form action="" method="post" id="add_product">
          <div className="row">
            <div className="col-6 mt-5 row">
              <label class="form-label col-3">SKU</label>
              <input
                type="text"
                class="form-control bg-light col-9"
                id=""
                value={SKU}
                onChange={(event) => {
                  setSKU(event.target.value);
                }}
              />
            </div>
            <div className="col-6"></div>
          </div>

          <div className="row">
            <div className="col-6 mt-5 row  ">
              <label class="form-label col-3 ">Name</label>
              <input
                type="text"
                class="form-control bg-light col-9"
                id=""
                value={name}
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </div>
            <div className="col-6 mt-5 row ">
              <label class="form-label col-3">QTY</label>
              <input
                type="text"
                class="form-control bg-light col-9"
                id=""
                value={QTY}
                onChange={(event) => {
                  setQTY(event.target.value);
                }}
              />
            </div>
          </div>

          <label class="form-label mr-3 mt-5">Product Description</label>
          <p className="text-sm text-muted">
            A small description about the product
          </p>
          <textarea
            class="form-control bg-light"
            value={ProductDescription}
            onChange={(event) => setProductDescription(event.target.value)}
          ></textarea>

          <div className="d-flex mt-5">
            <p className="mr-5">Product Images</p>
            <a href="http://" className="font-weight-bold">
              Add images
            </a>
          </div>

          <div className="text-muted mt-3">
            <p>JPEG, PNG, SVG or GIF</p>
            <p>(Maximum file size 50 mb)</p>
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary float-right"
              onClick={addProdct}
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
