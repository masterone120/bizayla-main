"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SidebarCartItem = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Function to handle opening the sidebar
    const handleOpenSidebar = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      setIsActive(true);
    };

    // Function to handle closing the sidebar
    const handleCloseSidebar = (e: Event) => {
      e.preventDefault();
      setIsActive(false);
    };

    // Function to handle clicking outside
    const handleOutsideClick = () => {
      setIsActive(false);
    };

    // Function to prevent event bubbling
    const handleSidebarClick = (e: Event) => {
      e.stopPropagation();
    };

    // Add event listeners
    const sidebarButton = document.querySelector(".navSidebar-button");
    const closeButton = document.querySelector(".close-side-widget");
    const sidebarWidget = document.querySelector(".xs-sidebar-widget");

    if (sidebarButton) {
      sidebarButton.addEventListener("click", handleOpenSidebar);
    }

    if (closeButton) {
      closeButton.addEventListener("click", handleCloseSidebar);
    }

    if (sidebarWidget) {
      sidebarWidget.addEventListener("click", handleSidebarClick);
    }

    // Add body click listener
    document.body.addEventListener("click", handleOutsideClick);

    // Cleanup function
    return () => {
      if (sidebarButton) {
        sidebarButton.removeEventListener("click", handleOpenSidebar);
      }
      if (closeButton) {
        closeButton.removeEventListener("click", handleCloseSidebar);
      }
      if (sidebarWidget) {
        sidebarWidget.removeEventListener("click", handleSidebarClick);
      }
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        className={`xs-sidebar-group info-group ${isActive ? "isActive" : ""}`}
      >
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                <i className="far fa-times-circle"></i>
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="nav-logo">
                    <a href="index.html">
                      <img
                        className="w-28"
                        src="/images/Main/bizayla-logo.webp"
                        alt="sid img"
                      />
                    </a>
                  </div>
                  <div className="row padding-two">
                    <div className="col-lg-6">
                      <div className="content-thumb-box">
                        <img src="/images/main-home/Bizayl.jpg" alt="team" />
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <div className="content-thumb-box">
                        <img
                          src="/images/main-home/Bizayla_Team_Meeting.jpg"
                          alt="team1"
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-6 ">
                      <div className="content-thumb-box">
                        <img src="/images/main-home/team2.jpg" alt="team2" />
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <div className="content-thumb-box">
                        <img src="/images/main-home/team.jpg" alt="team" />
                      </div>
                    </div> */}
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li>
                        <i className="bi bi-house"></i>Bizayla Darmstädter
                        Straße 11, 63811 Stockstadt, Bayern, Germany
                      </li>
                      <li>
                        <i className="bi bi-phone"></i>+49 174 911 17 15
                      </li>
                      <li>
                        <i className="bi bi-envelope"></i>info@bizayla.com.com
                      </li>
                      {/* <li>
                        <i className="bi bi-envelope"></i>Week Days: 09.00 to
                        18.00 Sunday: Closed
                      </li> */}
                    </ul>
                  </div>
                  <ul className="social-box">
                    <li className="facebook">
                      <Link
                        href="https://www.facebook.com/bizayla"
                        className="fab fa-facebook-f"
                      ></Link>
                    </li>
                    <li className="linkedin">
                      <Link
                        href="https://www.linkedin.com/company/bizayla"
                        className="fab fa-linkedin-in"
                      ></Link>
                    </li>
                    <li className="whatsapp">
                      <Link
                        href="https://wa.me/491749111715"
                        className="fab fa-whatsapp"
                      ></Link>
                    </li>
                    <li className="instagram">
                      <Link
                        href="https://www.instagram.com/bizayla/"
                        className="fab fa-instagram"
                      ></Link>
                    </li>
                    <li className="twitter">
                      <Link
                        href="https://x.com/BizAyla"
                        className="fab fa-x"
                      ></Link>
                    </li>
                    <li className="pinterest">
                      <Link
                        href="https://de.pinterest.com/bizayla/"
                        className="fab fa-pinterest"
                      ></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SidebarCartItem;
