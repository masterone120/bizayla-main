"use client";
import React, { useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Image from "next/image";
import Link from "next/link";
import { CiCircleList } from "react-icons/ci";

const Service = () => {
  const { t, locale } = useTranslation();
  const arr = <T = string,>(val: T[] | T) => (Array.isArray(val) ? val : [val]);
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };
  const [showModalstarter, setShowModalstarter] = useState<boolean>(false);
  const [showModalbusiness, setShowModalbusiness] = useState<boolean>(false);
  return (
    <>
      <div className="breadcumb-area service-page d-flex">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title">
                  <h4>{String(t("service.breadcrumb.title"))}</h4>
                </div>
                <ul>
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      <i className="bi bi-house-door-fill"></i>{" "}
                      {String(t("service.breadcrumb.home"))}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>
                    {String(t("service.breadcrumb.current"))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="service_area style_two style_three">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title style_three style_four text-center ">
                  <h4>{String(t("service.hero.sectionTitle"))}</h4>
                  <h1>{String(t("service.hero.title"))}</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                {arr<{
                  id: string;
                  category: string;
                  title: string;
                  description: string;
                  details: string;
                  image: string;
                }>(
                  t("service.serviceCards") as {
                    id: string;
                    category: string;
                    title: string;
                    description: string;
                    details: string;
                    image: string;
                  }
                ).map(
                  (
                    service: {
                      id: string;
                      category: string;
                      title: string;
                      description: string;
                      details: string;
                      image: string;
                    },
                    id: number
                  ) => (
                    <div
                      key={id}
                      className="service_single_item style_two style_three"
                    >
                      <div className="service_thumb">
                        {service?.image && (
                          <Image
                            src={service.image}
                            width={371}
                            height={306}
                            alt={service.title}
                            loading="lazy"
                          />
                        )}
                        <div className="service_icon">
                          <Link href={getLocalizedPath(`/service/${id + 1}`)}>
                            <Image
                              src="/images/main-home/service_icon.png"
                              width={60}
                              height={60}
                              alt="Image"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="service_content">
                        <h4>{service.category}</h4>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="service_btn">
                          <Link href={getLocalizedPath(`/service/${id + 1}`)}>
                            {service.details}{" "}
                            <i className="flaticon flaticon-right-arrow"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="service_shape_three style_four rotate">
          <Image
            width={100}
            height={100}
            src="/images/main-home/service_shpe2.png"
            alt="Image"
          />
        </div>
        <div className="service_shape_five bounce-animate2">
          <Image
            width={100}
            height={100}
            src="/images/main-home/service_shape.png"
            alt="Image"
          />
        </div>
        <div className="service_shape_three style_six bounce-animate4">
          <Image
            width={50}
            height={50}
            src="/images/main-home/tir.png"
            alt="Image"
          />
        </div>
        <div className="service_shape_seven bounce-animate">
          <Image
            width={50}
            height={50}
            src="/images/main-home/boxs.png"
            alt="Image"
          />
        </div>
      </section>
      <section className="call_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="call-do-content">
                <h4>{String(t("service.callArea.title"))}</h4>
                <h2>
                  {String(t("service.callArea.description"))}
                  <br />
                  {String(t("service.callArea.description2"))}
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="call-right">
                <div className="call-do-action-info">
                  <div className="call-do-social_icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="call_info">
                    <p className="whitespace-nowrap !mr-2">
                      {String(t("service.callArea.button"))}
                    </p>
                    <a
                      href="tel:+491749111715"
                      className="text-white text-decoration-none hover:text-primary"
                      title="Call us"
                    >
                      <h3> +49 174 911 17 15</h3>
                    </a>
                  </div>
                </div>
                <div className="advisar_btn style_two style_four whitespace-nowrap">
                  <Link href={getLocalizedPath("/contact")}>
                    <i className="far fa-thumbs-up"></i>
                    {String(t("service.callArea.contact"))}
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call_shape">
          <img src="/images/home_two/call_shpe.png" alt="" />
        </div>
      </section>
      <section className="testimonial_area style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section_title style_two">
                <h4>{String(t("service.marketing.title"))}</h4>
                <h1>{String(t("service.marketing.description"))}</h1>
                <p>{String(t("service.marketing.features"))}</p>
              </div>
              <div className="counter-single-item style_two style_three">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter">4.98</h1>
                  </div>
                  <div className="counter_title">
                    <div className="counter-star">
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                      <i className="fa fa-star active"></i>
                    </div>
                    <h5 className="title_two">Avg. Clients Satisfaction</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testi_list">
                <div className="col-lg-12">
                  <div className="hero-thumb">
                    <Image
                      src="/images/main-home/Bizayla_Team_Meeting.jpg"
                      width={684}
                      height={711}
                      alt="Image"
                      loading="lazy"
                    />
                    <div className="hero_thumb_shape">
                      <Image
                        src="/images/main-home/hero3_dot_shape.png"
                        width={600}
                        height={600}
                        alt="Image"
                        loading="lazy"
                      />
                    </div>
                    <div className="powerful_box bounce-animate4">
                      <div className="hero_power_check">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="hero_powerful_content">
                        <h4>Powerful Team</h4>
                        <p>36+ Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-area style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section_title">
                <h4>{String(t("service.pricing.title"))}</h4>
                <h1>{String(t("service.pricing.description"))}</h1>
                <h1>{String(t("service.pricing.description1"))}</h1>
                <h1>{String(t("service.pricing.description2"))}</h1>
                <p>{String(t("service.pricing.features"))}</p>
              </div>
              <div className="pricing_list">
                <ul>
                  <li>
                    <img src="/images/home_two/check_pricing.png" alt="Image" />{" "}
                    {String(t("service.pricing.guaranteed1"))}
                  </li>
                </ul>
              </div>
              <div className="pricing_list">
                <ul>
                  <li>
                    <img src="/images/home_two/check_pricing.png" alt="Image" />{" "}
                    {String(t("service.pricing.guaranteed2"))}
                  </li>
                </ul>
              </div>
              <div className="advisar_btn style_two style_four five">
                <Link href={getLocalizedPath("/contact")}>
                  <i className="far fa-thumbs-up"></i>
                  {String(t("service.callArea.contact"))} <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="pricing-single-items style_two">
                    <div className="pricing_inner">
                      <div className="pricing_icon">
                        <img
                          src="/images/home_two/price_icon_01.png"
                          alt="Image"
                        />
                      </div>
                      <div className="pricing-title">
                        <h3>
                          {String(t("service.pricing.starterPlan.title"))}
                        </h3>
                        <span>
                          {String(t("service.pricing.starterPlan.subtitle"))}
                        </span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <div className="pricing-feature">
                        <ul>
                          {(() => {
                            const features = t(
                              "service.pricing.starterPlan.features"
                            );
                            return Array.isArray(features)
                              ? (features as string[]).map((feature, index) => (
                                  <li key={index}>
                                    <img
                                      src="/images/home_two/icon.png"
                                      alt=""
                                    />
                                    {feature}
                                  </li>
                                ))
                              : null;
                          })()}
                        </ul>
                      </div>
                    </div>
                    <div className="advisar_btn style_two">
                      <button onClick={() => setShowModalstarter(true)}>
                        {String(t("service.pricing.starterPlan.button"))}
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="pricing-single-items style_two upper">
                    <div className="pricing_inner">
                      <div className="pricing_icon">
                        <img
                          src="/images/home_two/price_icon_02.png"
                          alt="Image"
                        />
                      </div>
                      <div className="pricing-title">
                        <h3>
                          {String(t("service.pricing.businessPlan.title"))}
                        </h3>
                        <span>
                          {String(t("service.pricing.businessPlan.subtitle"))}
                        </span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <div className="pricing-feature">
                        <ul>
                          {(() => {
                            const features = t(
                              "service.pricing.businessPlan.features"
                            );
                            return Array.isArray(features)
                              ? (features as string[]).map((feature, index) => (
                                  <li key={index}>
                                    <img
                                      src="/images/home_two/icon.png"
                                      alt="Image"
                                    />
                                    {feature}
                                  </li>
                                ))
                              : null;
                          })()}
                        </ul>
                      </div>
                    </div>
                    <div className="advisar_btn style_two">
                      <button onClick={() => setShowModalbusiness(true)}>
                        {String(t("service.pricing.businessPlan.button"))}
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing_shape bounce-animate">
          <img src="/images/home_two/pricing_shape1.png" alt="Image" />
        </div>
      </section>
      {showModalstarter && (
        <div
          onClick={() => setShowModalstarter(false)}
          className="modalBack-class"
        >
          <div
            className="modal-class lg:!mt-0 lg:!mb-0 !mt-10 !mb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModalstarter(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                fontSize: "2rem",
                color: "#0c6e6d",
                cursor: "pointer",
                zIndex: 100,
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-content">
              <ul style={{ padding: 0, margin: "1rem 0", listStyle: "none" }}>
                {(() => {
                  const detail = t("service.pricing.starterPlan.detail");
                  return Array.isArray(detail)
                    ? (detail as string[]).map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 0",
                            borderBottom: "1px solid #f0f0f0",
                          }}
                        >
                          <span style={{ color: "#22c55e", fontSize: "1.2em" }}>
                            <CiCircleList />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))
                    : null;
                })()}
              </ul>
            </div>
          </div>
        </div>
      )}
      {showModalbusiness && (
        <div
          onClick={() => setShowModalbusiness(false)}
          className="modalBack-class "
        >
          <div
            className="modal-class lg:!mt-0 lg:!mb-0 !mt-10 !mb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModalbusiness(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                fontSize: "2rem",
                color: "#0c6e6d",
                cursor: "pointer",
                zIndex: 100,
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="modal-content">
              <ul style={{ padding: 0, margin: "1rem 0", listStyle: "none" }}>
                {(() => {
                  const detail = t("service.pricing.businessPlan.detail");
                  return Array.isArray(detail)
                    ? (detail as string[]).map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 0",
                            borderBottom: "1px solid #f0f0f0",
                          }}
                        >
                          <span style={{ color: "#22c55e", fontSize: "1.2em" }}>
                            <CiCircleList />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))
                    : null;
                })()}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
