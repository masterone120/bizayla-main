"use client";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Link from "next/link";
import React from "react";
import CallArea from "@/app/components/CallArea";
import { CiLocationOn, CiPhone } from "react-icons/ci";

const Footer = () => {
  const { t, locale } = useTranslation();
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };
  return (
    <>
      <CallArea />
      <section className="footer_area style_two style_three">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-content style_two">
                <div className="footer-widget-title">
                  <h4>{String(t("footer.about.title"))}</h4>
                </div>
                <p className="footer_desc">{String(t("footer.about.desc"))}</p>
                <form
                  action="https://formspree.io/f/myyleorq"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="subscribe_form">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      data-error="Please enter your email"
                      placeholder="Your E-Mail"
                    />
                    <button type="submit" className="btn">
                      <i className="bi bi-send-fill"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget-content style_two">
                <div className="footer-widget-title">
                  <h4>{String(t("footer.company.title"))}</h4>
                </div>
                <div className="footer-widget-menu">
                  <ul>
                    <li>
                      <Link href={getLocalizedPath("/about")}>
                        <i className="bi bi-chevron-double-right"></i>{" "}
                        {String(t("footer.company.about"))}
                      </Link>
                    </li>
                    <li>
                      <Link href={getLocalizedPath("/gallery")}>
                        <i className="bi bi-chevron-double-right"></i>
                        {String(t("footer.company.gallery"))}
                      </Link>
                    </li>
                    <li>
                      <Link href={getLocalizedPath("/blog")}>
                        <i className="bi bi-chevron-double-right"></i>{" "}
                        {String(t("footer.company.blog"))}
                      </Link>
                    </li>
                    <li>
                      <Link href={getLocalizedPath("/contact")}>
                        <i className="bi bi-chevron-double-right"></i>
                        {String(t("footer.company.contact"))}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-content style_two">
                <div className="footer-widget-title">
                  <h4> {String(t("footer.service.title"))}</h4>
                </div>
                <div className="footer-widget-menu">
                  <ul>
                    <li>
                      <Link href={getLocalizedPath("/service")}>
                        <i className="bi bi-chevron-double-right"></i>{" "}
                        {String(t("footer.service.trade"))}
                      </Link>
                    </li>
                    <li>
                      <Link href={getLocalizedPath("/service")}>
                        <i className="bi bi-chevron-double-right"></i> Web
                        {String(t("footer.service.export"))}
                      </Link>
                    </li>
                    <li>
                      <Link href={getLocalizedPath("/service")}>
                        <i className="bi bi-chevron-double-right"></i>{" "}
                        {String(t("footer.service.packaging"))}
                      </Link>
                    </li>
                    <li>
                      <Link href={getLocalizedPath("/service")}>
                        <i className="bi bi-chevron-double-right"></i>{" "}
                        {String(t("footer.service.marketing"))}
                      </Link>
                    </li>
                    <li>
                      <Link href={getLocalizedPath("/service")}>
                        <i className="bi bi-chevron-double-right"></i>
                        {String(t("footer.service.supply"))}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-content style_two">
                <div className="footer-widget-title">
                  <h4>Contact</h4>
                </div>
                <div className="recent-post-item !m-0 !p-0">
                  <CiLocationOn size={28} />
                  <div className="recent-post-text">
                    <p>
                      Bizayla Darmstädter Straße 11, 63811 Stockstadt, Bayern,
                      Germany
                    </p>
                  </div>
                </div>
                <div className="recent-post-item !m-0 !p-0">
                  <CiLocationOn size={28} />
                  <div className="recent-post-text ">
                    <p>
                      Chorbog Neighborhood, Sherobod District, Surxondaryo
                      Region, 191400 Republic of Uzbekistan
                    </p>
                  </div>
                </div>

                <div className="recent-post-item">
                  <CiPhone size={28} />
                  <div className="recent-post-text ">
                    <p>
                      info@bizayla.com <br />
                      +49 174 911 17 15 <br />
                      +998 93 796 99 99 <br /> (WhatsApp & Direct)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row add-border style_two align-items-center">
            <div className="col-md-7">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy style_two">
                  <p>
                    Copyright © 2025 Bizayla. Designed & Developed by Bizayla-IT
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-right">
              <div className="footer-bottom-content">
                <div className="footer-bottom-menu style_two">
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">FAQ&apos;s</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_all_shape">
          <div className="footer_shape_one dance">
            <img
              src="/images/main-home/choose_rotete.png"
              alt="choose_rotete"
            />
          </div>
          <div className="footer_shape_two bounce-animate !opacity-15">
            <img src="/images/main-home/footer_shape.png" alt="footer_shape" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
