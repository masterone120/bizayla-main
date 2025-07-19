"use client";

import React from "react";
import SidebarCartItem from "../sidebarCartItem";
import Link from "next/link";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from "../../../hooks/useTranslation";
import { getLocalizedPathname } from "../../../../lib/i18n-config";

const Header = () => {
  const { t, locale } = useTranslation();
  const arr = <T = string,>(val: T[] | T) => (Array.isArray(val) ? val : [val]);
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };

  return (
    <>
      <div className="topber_area style_two">
        <div className="container">
          <div className="row topber_upper align-items-center d-flex">
            <div className="col-lg-6">
              <div className="header-address-info">
                <div className="d-flex align-items-center gap-3 text-white">
                  <span>
                    <i className="bi bi-envelope"></i>
                    <a
                      href="mailto:info@bizayla.com?subject=Inquiry from Website"
                      className="text-white text-decoration-none hover:text-primary"
                      title="Send us an email"
                    >
                      info@bizayla.com
                    </a>
                  </span>
                  <span className="right_info">
                    <i className="fas fa-phone-alt"></i>
                    <a
                      href="tel:+491749111715"
                      className="text-white text-decoration-none hover:text-primary"
                      title="Call us"
                    >
                      +49 174 911 17 15
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="topber_right_social style_two">
                <h2>FOLLOW US :</h2>
                <ul className="top_header_social">
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
                      className="top-social-icon-left"
                      href="https://de.pinterest.com/bizayla/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="top-social-icon-left"
                      href="https://x.com/BizAyla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="advisar-header-area style_two style_three inner_page"
        id="sticky-header"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="header-logo">
                <Link className="active_header" href={getLocalizedPath("/")}>
                  <img
                    className="w-28"
                    src="/images/Main/bizayla-logo.webp"
                    alt="logo"
                  />
                </Link>
                <Link className="active_sticky" href={getLocalizedPath("/")}>
                  <img
                    className="w-28"
                    src="/images/Main/bizayla-logo.webp"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="header-menu">
                <ul className="nav_scroll">
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      {String(t("navigation.home"))}
                    </Link>
                  </li>
                  <li>
                    <Link href={getLocalizedPath("/about")}>
                      {String(t("navigation.about"))}
                    </Link>
                  </li>
                  <li>
                    <Link href={getLocalizedPath("/service")}>
                      {String(t("navigation.services"))}{" "}
                      <span>
                        <i className="fas fa-angle-down"></i>
                      </span>
                    </Link>
                    <ul className="sub_menu">
                      {arr<string[]>(
                        t("navigation.ServiceDetails") as string[]
                      ).map((service, index) => (
                        <li key={index}>
                          <Link
                            href={getLocalizedPath(
                              index === 0 ? "/service" : `/service/${index}`
                            )}
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link href={getLocalizedPath("/gallery")}>
                      {String(t("navigation.gallery"))}
                    </Link>
                  </li>
                  <li>
                    <Link href={getLocalizedPath("/blog")}>
                      {String(t("navigation.blog"))}
                    </Link>
                  </li>
                  <li>
                    <Link href={getLocalizedPath("/contact")}>
                      {String(t("navigation.contact"))}
                    </Link>
                  </li>
                  <li>
                    <Link href={getLocalizedPath("/faq")}>
                      {String(t("navigation.FAQs"))}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="advisar_header-right">
                {/* <div className="header-button style_two">
                  <Link href={getLocalizedPath("/contact")}>
                    Get A Quote <i className="bi bi-arrow-right"></i>
                  </Link>
                </div> */}
                <div className="col-lg-3">
                  <div className="language-switcher-container">
                    <LanguageSwitcher />
                  </div>
                </div>
                <div className="sidebar-btn">
                  <div className="nav-btn navSidebar-button">
                    <span>
                      <i className="bi bi-filter-left"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="search-popup">
        <button className="close-search style-two">
          <span className="flaticon-multiply">
            <i className="far fa-times-circle"></i>
          </span>
        </button>
        <button className="close-search">
          <i className="bi bi-arrow-up"></i>
        </button>
        <form method="post" action="#">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              defaultValue=""
              placeholder="Search Here"
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div> */}
      <SidebarCartItem />
    </>
  );
};
export default Header;
