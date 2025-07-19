"use client";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function ServiceDetails() {
  const params = useParams();
  const slug = params.slug;
  const { t, locale } = useTranslation();
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };
  return (
    <>
      <div className="breadcumb-area d-flex service-details-page ">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur  !px-10">
                <div className="breadcumb-title style_two">
                  <h4>
                    {
                      t(
                        `service.serviceCards.${Number(slug) - 1}.title`
                      ) as string
                    }
                  </h4>
                </div>
                <ul>
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      <i className="bi bi-house-door-fill"></i>{" "}
                      {t("service.breadcrumb.home") as string}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>
                    {t("service.breadcrumb.service") as string}
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>
                    {
                      t(
                        `service.serviceCards.${Number(slug) - 1}.category`
                      ) as string
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="feature_area inner_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>
                  {
                    t(
                      `service.serviceCards.${Number(slug) - 1}.info.miniTitle`
                    ) as string
                  }
                </h4>
                <h1>
                  {
                    t(
                      `service.serviceCards.${Number(slug) - 1}.info.mainTitle`
                    ) as string
                  }
                </h1>
                <p>
                  {
                    t(
                      `service.serviceCards.${Number(slug) - 1}.info.subTitle`
                    ) as string
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item style_two">
                <div className="feature_icon">
                  <img src="/images/main-home/feature_icon01.png" alt="" />
                </div>
                <div className="feature_content">
                  <h3>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.0.title`
                      ) as string
                    }
                  </h3>
                  <p>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.0.info`
                      ) as string
                    }
                  </p>
                </div>
                {/* <div className="feature_btn">
                  <a href="#">
                    <i className="flaticon flaticon-right-arrow"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item style_two">
                <div className="feature_icon">
                  <img src="/images/main-home/feature_icon02.png" alt="" />
                </div>
                <div className="feature_content">
                  <h3>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.1.title`
                      ) as string
                    }
                  </h3>
                  <p>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.1.info`
                      ) as string
                    }
                  </p>
                </div>
                {/* <div className="feature_btn">
                  <a href="#">
                    <i className="flaticon flaticon-right-arrow"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item style_two">
                <div className="feature_icon">
                  <img src="/images/main-home/feature_icon03.png" alt="" />
                </div>
                <div className="feature_content">
                  <h3>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.2.title`
                      ) as string
                    }
                  </h3>
                  <p>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.2.info`
                      ) as string
                    }
                  </p>
                </div>
                {/* <div className="feature_btn">
                  <a href="#">
                    <i className="flaticon flaticon-right-arrow"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item style_two">
                <div className="feature_icon">
                  <img src="/images/main-home/feature_icon04.png" alt="" />
                </div>
                <div className="feature_content">
                  <h3>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.3.title`
                      ) as string
                    }
                  </h3>
                  <p>
                    {
                      t(
                        `service.serviceCards.${
                          Number(slug) - 1
                        }.info.cardsInfos.3.info`
                      ) as string
                    }
                  </p>
                </div>
                {/* <div className="feature_btn">
                  <a href="#">
                    <i className="flaticon flaticon-right-arrow"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination">
                <span>
                  Feel free to reach out to our consulting{" "}
                  <Link href={getLocalizedPath("/contact")}>Services</Link> for
                  inquiries and assistance.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="feature_shape bounce-animate-3">
          <img src="/images/main-home/arrow.png" alt="" />
        </div>
      </section>
      <section className="service_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service_details_img">
                <img src="/images/Main/serviceSlug.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-lg-8">
              <div className="service_details_content">
                <h2>
                  {
                    t(
                      `service.serviceCards.${
                        Number(slug) - 1
                      }.info.middleInfoTitle`
                    ) as string
                  }
                </h2>
                <p className="details_decs1">
                  {
                    t(
                      `service.serviceCards.${Number(slug) - 1}.info.middleInfo`
                    ) as string
                  }
                </p>
              </div>
              <div className="row pt-32">
                <div className="col-lg-6 col-md-12">
                  <div className="service_details_item">
                    <div className="service_detls_icon">
                      <img src="/images/inner-img/service_icon1.png" alt="" />
                    </div>
                    <div className="service_dtls_content">
                      <h3>
                        {" "}
                        {
                          t(
                            `service.serviceCards.${
                              Number(slug) - 1
                            }.info.iconItem1.title`
                          ) as string
                        }
                      </h3>
                      <p>
                        {
                          t(
                            `service.serviceCards.${
                              Number(slug) - 1
                            }.info.iconItem1.info`
                          ) as string
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="service_details_item">
                    <div className="service_detls_icon">
                      <img src="/images/inner-img/service_icon2.png" alt="" />
                    </div>
                    <div className="service_dtls_content">
                      <h3>
                        {" "}
                        {
                          t(
                            `service.serviceCards.${
                              Number(slug) - 1
                            }.info.iconItem2.title`
                          ) as string
                        }
                      </h3>
                      <p>
                        {
                          t(
                            `service.serviceCards.${
                              Number(slug) - 1
                            }.info.iconItem2.info`
                          ) as string
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar_box">
                <h2 className="sidebar_title">
                  {
                    t(
                      `service.serviceCards.${
                        Number(slug) - 1
                      }.info.middleCardItems.title`
                    ) as string
                  }
                </h2>
                <p>
                  {
                    t(
                      `service.serviceCards.${
                        Number(slug) - 1
                      }.info.middleCardItems.info`
                    ) as string
                  }
                </p>
                <div className="sidebar-list">
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>{" "}
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.middleCardItems.list.0`
                        ) as string
                      }
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.middleCardItems.list.1`
                        ) as string
                      }
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.middleCardItems.list.2`
                        ) as string
                      }
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.middleCardItems.list.3`
                        ) as string
                      }
                    </li>
                  </ul>
                </div>
                <div className="advisar_btn sidebar_style pt-37">
                  <a href="contact.html">
                    Contact With Us<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter_area style_two inner_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item style_two">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter">
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.counterPart1.count`
                        ) as string
                      }
                    </h1>
                  </div>
                  <div className="counter_title">
                    <h5>
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.counterPart1.info`
                        ) as string
                      }
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item style_two second">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter text-white">
                      {" "}
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.counterPart2.count`
                        ) as string
                      }
                    </h1>
                  </div>
                  <div className="counter_title">
                    <div className="counter-star">
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                    </div>
                    <h5 className="title_two text-white">
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.counterPart2.info`
                        ) as string
                      }
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item style_two">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter">
                      {" "}
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.counterPart3.count`
                        ) as string
                      }
                    </h1>
                  </div>
                  <div className="counter_title">
                    <h5>
                      {
                        t(
                          `service.serviceCards.${
                            Number(slug) - 1
                          }.info.counterPart3.info`
                        ) as string
                      }
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
