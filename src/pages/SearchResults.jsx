import React from "react";
import MainBar from "../components/MainBar";

function SearchResult(props) {
  return (
    <>
      <div className="container">
        <h1 className="mt-4">PRODUCTS</h1>

        <MainBar />

        <h6 className="mt-4">4 results found for 'Books' </h6>

        <div className="row mt-5">
          <div className="col-8">
            <b>#CA25</b>
            <p>Product-name</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <button className="btn btn-sm">
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
          </div>
        </div>
        <hr />

        <div className="row mt-5">
          <div className="col-8">
            <b>#CA25</b>
            <p>Product-name</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <button className="btn btn-sm">
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
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default SearchResult;
