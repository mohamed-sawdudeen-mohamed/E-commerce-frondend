import React from "react";
import image from "../assets/img/product-img-1.png";

function ProductTable() {
  const handleDlete = (id) => {};
  return (
    <>
      <div class="product-table mt-5">
        <table class="table">
          <thead className="text-primary">
            <tr>
              <th>SKU</th>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>#CA25</td>
              <td>
                <img src={image} alt="" srcset="" width={50} />{" "}
              </td>
              <td>product-name</td>
              <td>$24.00</td>
              <td>
                <button
                  className="btn btn-sm"
                  // onClick={() => handleDlete(p.id)}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0938 6.25H17.9688V4.29688C17.9688 3.43506 17.2681 2.73438 16.4062 2.73438H8.59375C7.73193 2.73438 7.03125 3.43506 7.03125 4.29688V6.25H3.90625C3.47412 6.25 3.125 6.59912 3.125 7.03125V7.8125C3.125 7.91992 3.21289 8.00781 3.32031 8.00781H4.79492L5.39795 20.7764C5.43701 21.6089 6.12549 22.2656 6.95801 22.2656H18.042C18.877 22.2656 19.563 21.6113 19.6021 20.7764L20.2051 8.00781H21.6797C21.7871 8.00781 21.875 7.91992 21.875 7.8125V7.03125C21.875 6.59912 21.5259 6.25 21.0938 6.25ZM16.2109 6.25H8.78906V4.49219H16.2109V6.25Z"
                      fill="#001EB9"
                    />
                  </svg>
                </button>

                <a href="/EditProduct" className="btn btn-sm">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.375 19.4063V23.625H7.59375L20.0362 11.1825L15.8175 6.96378L3.375 19.4063ZM23.2987 7.92003C23.403 7.81596 23.4858 7.69233 23.5422 7.55624C23.5987 7.42014 23.6277 7.27425 23.6277 7.12691C23.6277 6.97957 23.5987 6.83368 23.5422 6.69758C23.4858 6.56149 23.403 6.43786 23.2987 6.33378L20.6663 3.70128C20.5622 3.59699 20.4385 3.51425 20.3025 3.4578C20.1664 3.40134 20.0205 3.37228 19.8731 3.37228C19.7258 3.37228 19.5799 3.40134 19.4438 3.4578C19.3077 3.51425 19.1841 3.59699 19.08 3.70128L17.0212 5.76003L21.24 9.97878L23.2987 7.92003Z"
                      fill="#001EB9"
                    />
                  </svg>
                </a>

                <button className="btn btn-sm">
                  <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6381 5.02032L11.1491 10.0644L5.58032 10.8738L9.60923 14.8026L8.65737 20.3476L13.6381 17.7293L18.6189 20.3449L17.667 14.7999L21.6959 10.8738L16.1272 10.0644L13.6381 5.02032Z"
                      fill="white"
                    />
                    <path
                      d="M24.0823 9.30235L17.3876 8.3294L14.395 2.26231C14.3132 2.0962 14.1788 1.96173 14.0126 1.87999C13.596 1.67433 13.0898 1.84571 12.8815 2.26231L9.88881 8.3294L3.19418 9.30235C3.00961 9.32872 2.84086 9.41573 2.71166 9.54757C2.55547 9.70811 2.4694 9.92409 2.47236 10.1481C2.47533 10.372 2.56709 10.5857 2.72748 10.742L7.57114 15.4644L6.4268 22.1326C6.39996 22.2877 6.41713 22.4473 6.47635 22.5931C6.53557 22.739 6.63447 22.8653 6.76184 22.9579C6.88922 23.0504 7.03996 23.1053 7.19698 23.1165C7.35401 23.1277 7.51103 23.0947 7.65024 23.0212L13.6382 19.873L19.6262 23.0212C19.7897 23.1082 19.9795 23.1372 20.1615 23.1056C20.6203 23.0265 20.9288 22.5914 20.8497 22.1326L19.7053 15.4644L24.549 10.742C24.6808 10.6128 24.7678 10.4441 24.7942 10.2595C24.8654 9.79806 24.5437 9.37091 24.0823 9.30235ZM17.6671 14.7999L18.619 20.3449L13.6382 17.7293L8.65746 20.3476L9.60932 14.8025L5.58041 10.8738L11.1492 10.0644L13.6382 5.02032L16.1273 10.0644L21.696 10.8738L17.6671 14.7999Z"
                      fill="#001EB9"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td>#CA34</td>
              <td>
                <img src={image} alt="" srcset="" width={50} />{" "}
              </td>
              <td>product-name</td>
              <td>$24.00</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductTable;
