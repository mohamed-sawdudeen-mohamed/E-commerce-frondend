import React from "react";

function MainBar() {
  return (
    <>
      <div class="row mt-5">
        <div class="col-sm-8">
          <form className="d-flex">
            <input
              type="text"
              class="form-control rounded-pill"
              placeholder="Search for products"
              name="search"
            />
            <button type="submit" class="btn btn-primary rounded-pill">
              Search
            </button>
          </form>
        </div>

        <div class="col-sm-4 d-flex justify-content-end">
          <a href="/AddProduct" className="btn btn-primary">
            New Products
          </a>

          <a href="/FavoriteProducts" className="btn btn-outline-primary ml-2">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6381 5.02031L11.1491 10.0644L5.58032 10.8738L9.60923 14.8025L8.65737 20.3476L13.6381 17.7293L18.6189 20.3449L17.667 14.7999L21.6959 10.8738L16.1272 10.0644L13.6381 5.02031Z"
                fill="#001EB9"
              />
              <path
                d="M24.0823 9.30234L17.3876 8.32939L14.395 2.2623C14.3132 2.09619 14.1788 1.96171 14.0126 1.87997C13.596 1.67431 13.0898 1.8457 12.8815 2.2623L9.88881 8.32939L3.19418 9.30234C3.00961 9.3287 2.84086 9.41572 2.71166 9.54755C2.55547 9.70809 2.4694 9.92408 2.47236 10.148C2.47533 10.372 2.56709 10.5856 2.72748 10.742L7.57114 15.4643L6.4268 22.1326C6.39996 22.2877 6.41713 22.4473 6.47635 22.5931C6.53557 22.739 6.63447 22.8653 6.76184 22.9578C6.88922 23.0503 7.03996 23.1053 7.19698 23.1165C7.35401 23.1277 7.51103 23.0947 7.65024 23.0212L13.6382 19.8729L19.6262 23.0212C19.7897 23.1082 19.9795 23.1372 20.1615 23.1056C20.6203 23.0265 20.9288 22.5914 20.8497 22.1326L19.7053 15.4643L24.549 10.742C24.6808 10.6128 24.7678 10.444 24.7942 10.2595C24.8654 9.79804 24.5437 9.37089 24.0823 9.30234ZM17.6671 14.7999L18.619 20.3449L13.6382 17.7293L8.65746 20.3476L9.60932 14.8025L5.58041 10.8738L11.1492 10.0643L13.6382 5.02031L16.1273 10.0643L21.696 10.8738L17.6671 14.7999Z"
                fill="#001EB9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default MainBar;
