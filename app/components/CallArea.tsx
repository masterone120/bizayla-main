"use client";
import Link from "next/link";
import React from "react";

const CallArea = () => {
  return (
    <section className="call_area style_three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className="call-do-action-info !flex !flex-row">
              <div className="call-do-social_icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="call_info">
                <p>Say Hello</p>
                <a
                  href="tel:+491749111715"
                  className="text-white text-decoration-none hover:text-primary"
                  title="Call us"
                >
                  {" "}
                  <h3> +49 174 911 17 15</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="flex justify-start items-center gap-6 ">
              <Link href="/">
                <img
                  className="w-28"
                  src="/images/Main/bizayla-logo.webp"
                  alt=""
                />
              </Link>
              <a href="https://uzsalt.com/" target="_blank" rel="noopener noreferrer" >
                <img
                  className="w-28"
                  src="/images/Main/uzsalt.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="call_social_icon">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/bizayla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/491749111715"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/bizayla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="top-social-icon-left"
                    href="https://www.instagram.com/bizayla/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/BizAyla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-x"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://de.pinterest.com/bizayla/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallArea;
