import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="error-area d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="error-page-content">
              <div className="error-info text-center">
                <h1 className="error-text">404</h1>
                <h2 className="error-title">Page not Found</h2>
                <p className="lead">
                  Oh no! you’re searching the page are Not Found. Thank You.
                </p>
                <Link href="/">
                  <i className="bi bi-house-door-fill"></i>Back to Home
                </Link>
              </div>
              <div className="error_shape1 bounce-animate">
                <img
                  src="/images/inner-img/error_shape2.png"
                  alt="error_shape2"
                />
              </div>
              <div className="error_shape2 dance">
                <img
                  src="/images/inner-img/error_shape3.png"
                  alt="error_shape3"
                />
              </div>
              <div className="error_shape3 dance2">
                <img src="/images/inner-img/404_shape1.png" alt="404_shape1" />
              </div>
              <div className="error_shape4 dance3">
                <img src="/images/inner-img/404_shape2.png" alt="404_shape2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
