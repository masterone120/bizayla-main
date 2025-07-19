"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero_area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero_content">
                <h4>From the Heart of Europe to Global Reach</h4>
                <h1>
                  Connecting Continents
                  <br /> Through Quality Trade
                </h1>
                <h3>Natural Products, Global Vision</h3>
                <p>
                  Bizayla is a global trading company based in Germany,
                  specializing in the import and export of natural and
                  high-quality goods — with a strong focus on food products,
                  minerals, and sustainable resources. From Europe to Asia,
                  Africa, and the Americas, we build trusted bridges between
                  producers and international markets
                </p>
                <div className="slider_button">
                  <div className="hero_btn style_twos">
                    <Link href="/contact">
                      <i className="far fa-thumbs-up"></i>Explore Our Trade
                      Solutions
                      <span></span>
                    </Link>
                  </div>
                  <div className="hero_video_btn">
                    <a
                      className="video-vemo-icon venobox vbox-item"
                      data-vbtype="youtube"
                      data-autoplay="true"
                      href="https://youtu.be/BS4TUd7FJSg"
                    >
                      <i className="bi bi-play-btn"></i>
                    </a>
                    <span>How It Works</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-thumb">
                <Image
                  src="/images/Main/main.webp"
                  width={684}
                  height={711}
                  alt=""
                  loading="lazy"
                />
                <div className="hero_thumb_shape">
                  <Image
                    src="/images/main-home/hero3_dot_shape.png"
                    width={600}
                    height={600}
                    alt=""
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
        <div className="hero_shape rotate">
          <Image
            src="/images/main-home/box.png"
            width={50}
            height={50}
            alt=""
            loading="lazy"
          />
        </div>
      </section>
      <section
        className="about_area style_three"
        style={{
          background: "url(/images/main-home/about_bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about_thumb">
                <Image
                  src="/images/main-home/about-tumb.webp"
                  width={600}
                  height={500}
                  alt=""
                  loading="lazy"
                />
                {/* <div className="about_play style_two style_three">
                  <a data-aos="flip-left" className="banner-play-btn">
                    <div className="text-inner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="250.5"
                        height="250.5"
                        viewBox="0 0 250.5 250.5"
                      >
                        <path
                          d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                          id="e-path-35ee1b2"
                        ></path>
                        <text>
                          <textPath
                            id="e-text-path-35ee1b2"
                            href="#e-path-35ee1b2"
                            startOffset="0%"
                          >
                            * Natural Products * Quality Trade * Bizayla
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="like">
                      <img src="/images/main-home/like_2.png" alt="" />
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section_title style_three">
                <h4>ABOUT BIZAYLA</h4>
                <h1>Empowering Global Trade </h1>
                <h1>with Integrity and Innovation</h1>
                <p>
                  Since its establishment, Bizayla has built a strong foundation
                  in international trade by connecting high-quality natural
                  products and food goods with markets across Europe, Asia, and
                  beyond. Our mission goes beyond transactions—we create
                  long-term value through ethical sourcing, efficient logistics,
                  and reliable partnerships.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-icon_box style_two">
                    <div className="about_icon style_none">
                      <Image
                        src="/images/main-home/about_icon1.png"
                        width={60}
                        height={60}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="about_content style_two">
                      <h3>
                        Natural & Food Product Specialization
                        <br /> Tailored Branding & Packaging Solutions
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-icon_box style_two">
                    <div className="about_icon style_none">
                      <Image
                        src="/images/main-home/about_icon2.png"
                        width={60}
                        height={60}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="about_content style_two">
                      <h3>
                        Central Asia & Europe Logistics Hub
                        <br />
                        Global Supply Chain Solutions
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about_button style_upper">
                <div className="about_btn style_two style_three">
                  <Link href="/about">
                    <i className="far fa-thumbs-up"></i>More About<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_shape two style_five bounce-animate ">
          <Image
            width={50}
            height={50}
            src="/images/main-home/about_shape2.png"
            alt=""
          />
        </div>
        <div className="about_shpe-three bounce-animate ">
          <Image
            width={80}
            height={80}
            src="/images/main-home/about_shape.png"
            alt=""
          />
        </div>
        <div className="about_shpe-four bounce-animate2">
          <Image
            width={80}
            height={80}
            src="/images/main-home/about_shape_3.png"
            alt=""
          />
        </div>
      </section>
      {/* <FAQ /> */}
      <div className="marquee_area style_two inner_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="slide-har st1">
                <div className="box">
                  <div className="item">
                    <h4 className="d-flex align-items-center">
                      <Link href="/about">
                        <img
                          className="marqee_img_left"
                          src="/images/main-home/marqee_star.png"
                          alt=""
                        />
                        <span>TRANSPARENT TRADE</span>
                        <span className="icon-img-50 ml-40">
                          <img src="/images/main-home/marqee_star.png" alt="" />
                        </span>
                      </Link>
                    </h4>
                  </div>
                  <div className="item">
                    <h4 className="d-flex align-items-center">
                      <Link href="/about">
                        <span>MARKETING STRATEGY</span>
                        <span className="icon-img-50">
                          <img src="/images/main-home/marqee_star.png" alt="" />
                        </span>
                      </Link>
                    </h4>
                  </div>
                  <div className="item">
                    <h4 className="d-flex align-items-center">
                      <Link href="/about">
                        <span>RESPONSIBLE TRADE</span>
                        <span className="icon-img-50">
                          <img src="/images/main-home/marqee_star.png" alt="" />
                        </span>
                      </Link>
                    </h4>
                  </div>
                  <div className="item">
                    <h4 className="d-flex align-items-center">
                      <Link href="/about">
                        <span>EXPERIENCED TEAM</span>
                        <span className="icon-img-50">
                          <img src="/images/main-home/marqee_star.png" alt="" />
                        </span>
                      </Link>
                    </h4>
                  </div>
                  <div className="item">
                    <h4 className="d-flex align-items-center">
                      <Link href="/about">
                        <span>SUSTAINABLE TRADE</span>
                        <span className="icon-img-50">
                          <img src="/images/main-home/marqee_star.png" alt="" />
                        </span>
                      </Link>
                    </h4>
                  </div>
                </div>
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
                  <h4>SERVICES WE PROVIDE</h4>
                  <h1>Individuals Professional Offer</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="service_list2 flex lg:flex-row flex-col ">
                <div className="col-lg-3">
                  <div className="service_single_item style_two style_three">
                    <div className="service_thumb">
                      <Image
                        src="/images/Main/11.png"
                        width={371}
                        height={306}
                        alt=""
                        loading="lazy"
                      />
                      <div className="service_icon">
                        <Link href="/service">
                          <Image
                            src="/images/main-home/service_icon.png"
                            width={60}
                            height={60}
                            alt=""
                            loading="lazy"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="service_content">
                      <h4>NATURAL PRODUCTS</h4>
                      <h3>High-quality goods</h3>
                      <p>
                        Bizayla exports high-purity, Natural Products for
                        diverse global uses with packaging.
                      </p>
                      <div className="service_btn">
                        <Link href="/service">
                          View Details{" "}
                          <i className="flaticon flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service_single_item style_two style_three">
                    <div className="service_thumb">
                      <Image
                        width={371}
                        height={306}
                        src="/images/Main/12.png"
                        alt=""
                      />
                      <div className="service_icon">
                        <Link href="/service">
                          <Image
                            width={60}
                            height={60}
                            src="/images/main-home/service_icon.png"
                            alt=""
                            loading="lazy"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="service_content">
                      <h4>GLOBAL TRADE</h4>
                      <h3>Import/Export Solutions</h3>
                      <p>
                        Connecting producers to global markets, ensuring
                        efficient and transparent trade
                      </p>
                      <div className="service_btn">
                        <Link href="/service">
                          View Details{" "}
                          <i className="flaticon flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service_single_item style_two style_three">
                    <div className="service_thumb">
                      <Image
                        width={371}
                        height={306}
                        src="/images/Main/14.png"
                        alt=""
                      />
                      <div className="service_icon">
                        <Link href="/service">
                          <Image
                            width={60}
                            height={60}
                            src="/images/main-home/service_icon.png"
                            alt=""
                            loading="lazy"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="service_content">
                      <h4>PRODUCT BRANDING</h4>
                      <h3>Packaging Solutions</h3>
                      <p>
                        Designing tailored, export-ready branding and packaging
                        for global markets.
                      </p>
                      <div className="service_btn">
                        <Link href="/service">
                          View Details{" "}
                          <i className="flaticon flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service_single_item style_two style_three">
                    <div className="service_thumb">
                      <Image
                        width={371}
                        height={306}
                        src="/images/Main/13.png"
                        alt=""
                      />
                      <div className="service_icon">
                        <Link href="/service">
                          <Image
                            width={60}
                            height={60}
                            src="/images/main-home/service_icon.png"
                            alt=""
                            loading="lazy"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="service_content">
                      <h4>LOGISTICS</h4>
                      <h3>Supply Chain Solutions</h3>
                      <p>
                        We provide secure warehousing and smart logistics for
                        your supply chain.
                      </p>
                      <div className="service_btn">
                        <Link href="/service">
                          View Details{" "}
                          <i className="flaticon flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service_shape_three style_four rotate">
          <Image
            width={100}
            height={100}
            src="/images/main-home/service_shpe2.png"
            alt=""
          />
        </div>
        <div className="service_shape_five bounce-animate2">
          <Image
            width={100}
            height={100}
            src="/images/main-home/service_shape.png"
            alt=""
          />
        </div>
        <div className="service_shape_three style_six bounce-animate4">
          <Image
            width={50}
            height={50}
            src="/images/main-home/tir.png"
            alt=""
          />
        </div>
        <div className="service_shape_seven bounce-animate">
          <Image
            width={50}
            height={50}
            src="/images/main-home/boxs.png"
            alt=""
          />
        </div>
      </section>
      <section className="why_choose_us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose_thumb">
                <Image
                  width={619}
                  height={537}
                  src="/images/Main/15.png"
                  alt=""
                />
              </div>
              <div className="choose_thumb_shpae2 bounce-animate2">
                <Image
                  width={100}
                  height={100}
                  src="/images/main-home/choose_dot2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="choose_right">
                <div className="section_title style_three pb-13">
                  <h4>WHY CHOOSE US</h4>
                  <h1>We Provide Innovative Solutions</h1>
                  <p>
                    At Bizayla, we go beyond simple import and export we build
                    trusted bridges between producers and international markets.
                    With a foundation of integrity, strategic partnerships, and
                    operational strength across Europe and Central Asia, we
                    deliver creative and practical solutions in branding,
                    packaging, logistics, and distribution.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="choose_list">
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i>
                          Professional Team
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="choose_list">
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i>Implements
                          Business
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="choose_list">
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i>Long-Term
                          Services
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="choose_list">
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i>Transparent &
                          Flexible Pricing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="about_button">
                  <div className="hero_video_btn">
                    <a
                      className="video-vemo-icon venobox vbox-item"
                      data-vbtype="youtube"
                      data-autoplay="true"
                      href="https://youtu.be/BS4TUd7FJSg"
                    >
                      <i className="bi bi-play-circle"></i>
                    </a>
                    <span>Watch Video</span>
                  </div>
                </div>
                <div className="choose_all_shape">
                  <div className="choose_one bounce-animate">
                    <Image
                      width={50}
                      height={50}
                      src="/images/main-home/box.png"
                      alt=""
                    />
                  </div>
                  <div className="choose_two rotate">
                    <Image
                      width={50}
                      height={50}
                      src="/images/main-home/choose_rotete.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team_area style_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title style_three style_four text-center">
                <h4>MEET THE TEAM</h4>
                <h1>
                  Bizayla&apos;s international team builds the future of global
                  trade with passion, expertise, and collaboration
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-team_item style_two">
                <div className="team_thumb">
                  <Image
                    width={300}
                    height={300}
                    src="/images/team/1.webp"
                    alt=""
                  />
                  <div className="team-share">
                    <div className="team-share-icon">
                      <span>
                        <i className="bi bi-share"></i>
                      </span>
                    </div>
                  </div>
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <a href="#">Dr. A.K. Sadeqi</a>
                  </h3>
                  <span>General Director</span>
                </div>
                <div className="team_box_shape">
                  <Image
                    width={230}
                    height={230}
                    src="/images/main-home/team-dot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team_item style_two">
                <div className="team_thumb">
                  <Image
                    width={300}
                    height={300}
                    src="/images/team/2.webp"
                    alt=""
                  />
                  <div className="team-share">
                    <div className="team-share-icon">
                      <span>
                        <i className="bi bi-share"></i>
                      </span>
                    </div>
                  </div>
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <a href="#">Ilkhomjon Ismoilovich</a>
                  </h3>
                  <span>CEO</span>
                </div>
                <div className="team_box_shape">
                  <Image
                    width={230}
                    height={230}
                    src="/images/main-home/team-dot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team_item style_two">
                <div className="team_thumb">
                  <Image
                    width={300}
                    height={300}
                    src="/images/team/3.webp"
                    alt=""
                  />
                  <div className="team-share">
                    <div className="team-share-icon">
                      <span>
                        <i className="bi bi-share"></i>
                      </span>
                    </div>
                  </div>
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <a href="#">Hamed Shakeb Sadeqi</a>
                  </h3>
                  <span>International Marketing Manager</span>
                </div>
                <div className="team_box_shape">
                  <Image
                    width={230}
                    height={230}
                    src="/images/main-home/team-dot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team_item style_two">
                <div className="team_thumb">
                  <Image
                    width={300}
                    height={300}
                    src="/images/team/4.webp"
                    alt=""
                  />
                  <div className="team-share">
                    <div className="team-share-icon">
                      <span>
                        <i className="bi bi-share"></i>
                      </span>
                    </div>
                  </div>
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3>
                    <a href="#">Shakhobiddin Bokijonov</a>
                  </h3>
                  <span>International Sales Manager</span>
                </div>
                <div className="team_box_shape">
                  <Image
                    width={230}
                    height={230}
                    src="/images/main-home/team-dot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team_all_shape">
          <div className="shape_one">
            <Image
              width={50}
              height={50}
              src="/images/main-home/team_rotate.png"
              alt=""
            />
          </div>
          {/* <div className="shape_two">
            <Image
              width={50}
              height={50}
              src="/images/main-home/tir.png"
              alt=""
            />
          </div> */}
          {/* <div className="shape_three">
            <Image
              width={50}
              height={50}
              src="/images/main-home/about_shape_3.png"
              alt=""
            />
          </div> */}
        </div>
      </section>
      <section className="testimonial_area style_two style_three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section_title style_three">
                <h4>FINANCE CONSULTING</h4>
                <h1>Your Innovative Partner in Global Trade</h1>
                {/* <h1 className="pb-30">In Town Since 2007</h1> */}
                <p>
                  Bizayla launched this year with a fresh and professional
                  vision to bridge the gap between natural product producers and
                  global markets.
                </p>
              </div>
              <div className="counter-single-item style_two style_three style_four">
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
                    <h5 className="title_two">Customer Satisfaction</h5>
                  </div>
                </div>
                <div className="counter_shape">
                  <img src="/images/main-home/about_shape_3.png" alt="" />
                </div>
              </div>
              <div className="testi-list">
                <ul>
                  <li>
                    <i className="bi bi-check"></i>100% Clients Satisfaction
                    Gaurantee
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testi_list2 flex lg:flex-row flex-col justify-center gap-4">
                <div className="hero-thumb">
                  <Image
                    width={650}
                    height={550}
                    src="/images/main-home/Bizayl.jpg"
                    alt=""
                    loading="lazy"
                  />
                  <div className="hero_thumb_shape">
                    <img src="/images/main-home/hero3_dot_shape.png" alt="" />
                  </div>
                  <div className="powerful_box bounce-animate4">
                    <div className="hero_power_check">
                      <i className="bi bi-check-circle"></i>
                    </div>
                    <div className="hero_powerful_content">
                      <h4>Smart solutions for </h4>
                      <h4>import and export</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testi_shape_all">
          <div className="testi_shape_two dance3">
            <img src="/images/main-home/service_shpe2.png" alt="" />
          </div>
          <div className="testi_shape_three dance">
            <img src="/images/main-home/service_shpe2.png" alt="" />
          </div>
          <div className="testi_shape_four bounce-animate">
            <img src="/images/main-home/tir.png" alt="" />
          </div>
        </div>
      </section>
      <section className="counter_area style_two style_three">
        <div className="container">
          <div className="row style_bg_two">
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item style_five">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter">+12K</h1>
                  </div>
                  <div className="counter_title">
                    <h5>
                      Completed Projects
                      <br />
                      Proven experience across diverse industries.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item style_five">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter">+950</h1>
                  </div>
                  <div className="counter_title">
                    <h5>
                      Active Clients <br />
                      Trusted by businesses worldwide.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item style_five">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter">*4.9</h1>
                  </div>
                  <div className="counter_title">
                    <h5>
                      Average Rating <br />
                      Customer satisfaction is our priority.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="contact_thumb">
                <Image
                  width={760}
                  height={550}
                  src="/images/main-home/showcases.jpg"
                  alt=""
                  loading="lazy"
                />
                <div className="call-do-action-info style_two">
                  <div className="call-do-social_icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="call_info">
                    <h3>+49 174 9111715</h3>
                  </div>
                </div>
                <div className="contact_thumb_shape bounce-animate">
                  <img src="/images/main-home/contact_shapes.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-form-box style_two">
                <div className="section_title style_three style_four text-center ">
                  <h4>CONTACT US</h4>
                  <h1>Get In Touch with advisar</h1>
                </div>
                <form action="https://formspree.io/f/myyleorq" method="POST">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone No"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="E-Mail Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box message">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Write Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label htmlFor="vehicle1"> I have a bike</label>
                    </div>
                    <div className="contact-form">
                      <button type="submit">
                        <i className="far fa-thumbs-up"></i> Request Call Back{" "}
                      </button>
                    </div>
                  </div>
                </form>
                <div className="contact_shape bounce-animate">
                  <img src="/images/main-home/contact_shape.png" alt="" />
                </div>
                <div id="status"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_shape1 dance">
          <img src="/images/main-home/animate.png" alt="" />
        </div>
        <div className="contact_shape2 dance2">
          <img src="/images/main-home/service_shpe2.png" alt="" />
        </div>
      </section>
      <section className="blog_area style_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title style_three style_four text-center">
                <h4>DISCOVER OUR LATEST INSIGHTS & IDEAS</h4>
                <h1>
                  Explore the Bizayla blog for fresh perspectives on
                  <span>
                    international trade, branding, packaging innovation
                  </span>
                </h1>
                <h1>and smart strategies to grow your business.</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box style_three">
                <div className="single-blog-thumb">
                  <Image
                    width={410}
                    height={320}
                    src="/images/blog/7.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h3>
                      <Link href={`/blog/${7}`}>
                        Globally disintermediate exten services resource
                      </Link>
                    </h3>
                  </div>
                  <p className="blog_text">
                    Discover how Bizayla helps traditional producers turn local
                    excellence into global success through smart trade and
                    branding strategies.
                  </p>
                  <div className="meta-blog style_two">
                    <p>
                      22 Jan, 2024
                      <span className="solution">
                        <i className="bi bi-heart"></i> 2 Comments
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box style_three">
                <div className="single-blog-thumb">
                  <Image
                    width={410}
                    height={320}
                    src="/images/blog/8.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h3>
                      <Link href={`/blog/${8}`}>
                        Packaging that Speaks to the World
                      </Link>
                    </h3>
                  </div>
                  <p className="blog_text">
                    Explore the impact of culturally aware, export-ready
                    packaging—and how Bizayla tailors designs to resonate with
                    global markets.
                  </p>
                  <div className="meta-blog style_two">
                    <p>
                      22 Jan, 2024
                      <span className="solution">
                        <i className="bi bi-heart"></i> 2 Comments
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box style_three">
                <div className="single-blog-thumb">
                  <Image
                    width={410}
                    height={320}
                    src="/images/blog/9.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h3>
                      <Link href={`/blog/${9}`}>
                        Sustainable Trade Solutions in Practice
                      </Link>
                    </h3>
                  </div>
                  <p className="blog_text">
                    Learn how we balance commercial growth with eco-conscious
                    logistics and ethical sourcing across our food and mineral
                    supply chains.
                  </p>
                  <div className="meta-blog style_two">
                    <p>
                      22 Jan, 2024
                      <span className="solution">
                        <i className="bi bi-heart"></i> 2 Comments
                      </span>
                    </p>
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
