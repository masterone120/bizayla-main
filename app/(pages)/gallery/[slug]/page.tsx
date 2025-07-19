"use client";

import Image from "next/image";
import React from "react";

const GalleyDetails = () => {
  //   const params = useParams();
  //   const slug = params.slug;
  //   const { t, locale } = useTranslation();
  //   const getLocalizedPath = (path: string) => {
  //     return getLocalizedPathname(path, locale);
  //   };

  return (
    <>
      <div className="breadcumb-area d-flex ">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur  !px-10">
                <div className="breadcumb-title style_two">
                  <h4>Business Implements</h4>
                </div>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="bi bi-house-door-fill"></i> Home{" "}
                    </a>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>Galley
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="portfolio_details">
        <div className="container">
          <div className="port_main">
            <div className="row">
              <div className="col-lg-12">
                <div className="port_details_content">
                  <h2>Introduce the Projects</h2>
                  <p className="quote">
                    Globally engage cross-media leadership skills before
                    cross-media innovation forward morph flexible whereas
                    process-centric models predominates Efficiently transform
                    customer directed alignments for front-end meta Dramatically
                    harness cross-platform best practices whereas centric data
                    without business services. Conveniently formula standards in
                    innovation with wireless vertical intellectual capital
                    before global architectures technically sound engage based
                    results with visionary models. Dramatically harness-platform
                    best practices whereas business services. Conveniently
                    experiences. formula standards in innovation with wireless{" "}
                  </p>
                </div>
                <section className="port_details_content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section_title text-center mb-5">
                          <h4>GALLERY SHOWCASE</h4>
                          <h1>Our Project Gallery</h1>
                          <p>
                            Explore our diverse range of products and services
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="gallery-showcase flex lg:flex-row flex-col gap-4">
                          <div className="gallery-item flex-1">
                            <div className="gallery-image">
                              <Image
                                src="/images/inner-img/port_2.png"
                                width={400}
                                height={300}
                                alt="Gallery Image 1"
                                loading="lazy"
                                className="w-full h-auto rounded-lg shadow-lg"
                              />
                            </div>
                          </div>
                          <div className="gallery-item flex-1">
                            <div className="gallery-image">
                              <Image
                                src="/images/inner-img/port_2.png"
                                width={400}
                                height={300}
                                alt="Gallery Image 2"
                                loading="lazy"
                                className="w-full h-auto rounded-lg shadow-lg"
                              />
                            </div>
                          </div>
                          <div className="gallery-item flex-1">
                            <div className="gallery-image">
                              <Image
                                src="/images/inner-img/port_3.png"
                                width={400}
                                height={300}
                                alt="Gallery Image 3"
                                loading="lazy"
                                className="w-full h-auto rounded-lg shadow-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="row pt-40">
              <div className="col-lg-8">
                <div className="port_details_content style_two">
                  <h2 className="pb-15">advisar Values</h2>
                  <p>
                    Dramatically harness cross-platform best practices whereas
                    business services. Conveniently standards in innovation with
                    wireless Globally engage cross-media leadership best breed
                    to rather than bricks-and-clicks infomediaries
                    monotonectally standards in innovation within wireless
                    vertical intellectual capital before global architectures
                    engage based results main visionary models digitalizations
                    completed
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="sidebar-list">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>Professional Team
                          Member
                        </li>
                        <li>
                          <i className="fas fa-check"></i>Solutions the Clients
                          Problems
                        </li>
                        <li>
                          <i className="fas fa-check"></i>Extra Facilities Sales
                          Increase
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="sidebar-list">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>Any Problem Solvingr
                        </li>
                        <li>
                          <i className="fas fa-check"></i>24/7 Supports
                          Available
                        </li>
                        <li>
                          <i className="fas fa-check"></i>Free Tools Provides
                          for Clients
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row pt-32">
                  <div className="col-lg-6 col-md-6">
                    <div className="port_details_thumb">
                      <img src="assets/images/inner-img/port_img1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="port_details_thumb">
                      <img src="assets/images/inner-img/port_img2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="port_details_content style_two three">
                  <h2 className="pb-15">advisar Values</h2>
                  <p>
                    Dramatically harness cross-platform best practices whereas
                    business services. Conveniently standards in innovation with
                    wireless Globally engage cross-media leadership best breed
                    to rather than bricks-and-clicks infomediaries
                    monotonectally standards in innovation within wireless
                    vertical intellectual capital before global architectures
                    engage based results main visionary models digitalizations
                    completed
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar_box style_two">
                  <h2 className="sidebar_title">Projects Information</h2>
                  <div className="sidebar_icon_box">
                    <div className="sidebar_icon">
                      <i className="bi bi-calendar-check"></i>
                    </div>
                    <div className="sidebar_text">
                      <p>Created By : </p>
                      <h5>Dream IT Solutions</h5>
                    </div>
                  </div>
                  <div className="sidebar_icon_box">
                    <div className="sidebar_icon">
                      <i className="bi bi-calendar3"></i>
                    </div>
                    <div className="sidebar_text">
                      <p>Created By : </p>
                      <h5>01 May, 2024</h5>
                    </div>
                  </div>
                  <div className="sidebar_icon_box">
                    <div className="sidebar_icon">
                      <i className="bi bi-grid"></i>
                    </div>
                    <div className="sidebar_text">
                      <p>Created By : </p>
                      <h5>Business Consultant</h5>
                    </div>
                  </div>
                  <div className="sidebar_icon_box">
                    <div className="sidebar_icon">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="sidebar_text">
                      <p>Created By : </p>
                      <h5>102/B, JR Road California, USA</h5>
                    </div>
                  </div>
                  <div className="advisar_btn sidebar_style">
                    <a href="contact.html">
                      Contact With Us<span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GalleyDetails;
