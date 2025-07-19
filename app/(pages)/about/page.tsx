"use client";

import { useTranslation } from "@/app/hooks/useTranslation";
import { CiCircleCheck } from "../../../node_modules/react-icons/ci/index";
import Link from "next/link";

export default function AboutPage() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-lg">{String(t("common.loading"))}</p>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcumb-area about-page d-flex ">
        <div className="container !w-fit">
          <div className="row align-items-center ">
            <div className="col-lg-12 text-center ">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title ">
                  <h4>About Us</h4>
                </div>
                <ul>
                  <li>
                    <Link href="/">
                      <i className="bi bi-house-door-fill"></i> Home{" "}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>Abour Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="about_area style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about_thumb">
                <img src="/images/main-home/global.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section_title">
                <h4>Our Field of Activity</h4>
                <h1> GLOBAL IMPORT AND EXPORT</h1>
                <h1>OF GOODS</h1>
                <p>
                  Bizayla is an international trading company established in
                  Bavaria, Germany, with the mission of bridging the gap between
                  the rich natural resources of Central Asia and global markets.
                  The brand was founded in 2025 by Dr.Abdulkarim Sadeqi
                  (resident of Germany) and Ilkhomjon Ismoilovich (resident of
                  Uzbekistan).
                </p>
                <p>
                  With a dynamic and globally-oriented approach, Bizayla has
                  rapidly expanded its presence in the field of strategic import
                  and export, securing a strong position in international
                  markets.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-icon_box">
                    <div className="about_icon">
                      <img src="/images/home_two/about_icon1.png" alt="" />
                    </div>
                    <div className="about_content style_two">
                      <h3>Dynamic and globally-oriented approach</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-icon_box">
                    <div className="about_icon">
                      <img src="/images/home_two/about_icon2.png" alt="" />
                    </div>
                    <div className="about_content style_two">
                      <h3>Strategic import and export</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about_button style_upper">
                <div className="about_btn style_two">
                  <Link href="/contact">
                    <i className="far fa-thumbs-up"></i>More About<span></span>
                  </Link>
                </div>
                <div className="about_info style-two">
                  <span>
                    <Link href="/services">
                      Our Service{" "}
                      <i className="flaticon flaticon-right-arrow"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_shape two">
          <img src="/images/home_two/about_shape2.png" alt="" />
        </div>
      </section>
      <section className="counter_area boxed">
        <div className="container">
          <div className="counter_upper">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section_title style_two">
                  <h1>Natural Salt from Uzbekistan</h1>
                  <p className="text-left text-lg text-white">
                    One of Bizayla&apos;s core specialties is the export of
                    high-purity natural salt from Uzbekistan to global markets.
                    This salt is sourced from the Khodjaikansky mine, located in
                    the Surkhandarya region, and is distinguished by the
                    following features:
                    <ul>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck /> High sodium chloride (NaCl) purity
                      </li>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck /> White or pink crystalline structure
                      </li>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck /> 100% natural, free from chemical
                        additives
                      </li>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck />
                        Suitable for food, industrial, pharmaceutical, and
                        decorative uses
                      </li>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck />
                        Customizable, high-quality packaging tailored to various
                        markets
                      </li>
                    </ul>
                    Bizayla holds official export licenses for this product
                    across multiple continents and is proud to be among the
                    first high-quality packaging tailored to various markets
                    Bizayla holds official export licenses for this product
                    across multiple continents and is proud to be among the
                    first companies to introduce Uzbek natural salt to European
                    and global markets with professional branding and packaging.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="advisar_btn text-right">
                  <Link href="/contact">
                    Get Started Now <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item">
                <div className="counter-content none">
                  <div className="counter-_number">
                    <h1 className="counter">12</h1>
                    <span>K+</span>
                  </div>
                  <div className="counter_title">
                    <h5>
                      total Projects <br />
                      Complated
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item">
                <div className="counter-content">
                  <div className="counter-_number">
                    <h1 className="counter">950</h1>
                    <span>+</span>
                  </div>
                  <div className="counter_title">
                    <h5>
                      SATIFIED ACTIVE <br />
                      CUSTOMERS
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-item">
                <div className="counter-content">
                  <div className="counter-_number">
                    <h1 className="counter">4.7</h1>
                    <span>*</span>
                  </div>
                  <div className="counter_title">
                    <h5>
                      AVERAGE CLIENTS <br />
                      RATINGS
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team_area inner_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>MEET OUR TEAM</h4>
                <h1>We&apos;ve 36+ Active & Dedicated Members</h1>
                <h1>for Helping the Customers</h1>
                <p>
                  At Bizayla, we are proud of our multinational and experienced
                  team, consisting of international trade experts, natural
                  resource engineers, and business consultants. With deep
                  knowledge of global markets, our team is committed to building
                  sustainable and trustworthy partnerships worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team_item">
                <div className="team_thumb">
                  <img src="/images/team/1.jpg" alt="" />
                </div>
                <div className="team-content">
                  <h3>
                    <a href="#">Zeinab Ghiyasi noei</a>
                  </h3>
                  <span>business manager In Central Asia country</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team_item">
                <div className="team_thumb">
                  <img src="/images/team/2.jpg" alt="" />
                </div>
                <div className="team-content">
                  <h3>
                    <a href="#">Oksana Shevchenko</a>
                  </h3>
                  <span>Regional Export Coordinator Europe</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team_item">
                <div className="team_thumb">
                  <img src="/images/team/3.jpg" alt="" />
                </div>
                <div className="team-content">
                  <h3>
                    <a href="#">Dilnoza Karimova</a>
                  </h3>
                  <span>Sourcing & Quality Manager Central Asia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="why_choose_us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose_thumb">
                <img src="/images/main-home/Bizayla_Image.webp" alt="" />
                <div className="choose_thumb_shpae bounce-animate">
                  <img src="/images/main-home/choose_dot.png" alt="" />
                </div>
                <div className="choose_thumb_shpae2 bounce-animate2">
                  <img src="/images/main-home/choose_dot2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="choose_right">
                <div className="section_title style_three pb-1">
                  <h4>Our Mission & Vision</h4>
                  <h1> Transparent, Responsible, and Sustainable Trade</h1>
                  <p>
                    We believe that transparent, responsible, and sustainable
                    trade plays a vital role in global progress. Our mission
                    includes:
                    <ul>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck /> Introducing the hidden natural
                        treasures of Central Asia to the world
                      </li>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck /> Supporting local producers and
                        responsible mining practices
                      </li>
                      <li className="flex items-center gap-2">
                        <CiCircleCheck /> Providing fast, accurate, and reliable
                        services to international clients
                      </li>
                    </ul>
                  </p>
                  <p>
                    Our vision is to become, by 2028, one of the leading global
                    brands in the export of salt and natural materials — a
                    trusted reference for major companies and industries
                    worldwide.
                  </p>
                </div>
                {/* <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="choose_list">
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i>Profissional
                          Team Member
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
                          <i className="bi bi-check-circle"></i>Lifetime Free
                          Services
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="choose_list">
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i>Affordable
                          Pricing Plans
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="about_button">
                  <div className="hero_video_btn">
                    <a
                      className="video-vemo-icon venobox vbox-item"
                      data-vbtype="youtube"
                      data-autoplay="true"
                      href="#"
                    >
                      <i className="bi bi-play-circle"></i>
                    </a>
                    <span>Watch Video</span>
                  </div>
                </div>
                <div className="choose_all_shape">
                  <div className="choose_one bounce-animate">
                    <img src="/images/main-home/box.png" alt="" />
                  </div>
                  <div className="choose_two rotate">
                    <img src="/images/main-home/choose_rotete.png" alt="" />
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
