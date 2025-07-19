"use client";

import Link from "next/link";
// import FAQ from "./components/FAQ";
import { useTranslation } from "@/app/hooks/useTranslation";
import React from "react";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Image from "next/image";

export default function Home() {
  const { t, locale } = useTranslation();
  const arr = <T = string,>(val: T[] | T) => (Array.isArray(val) ? val : [val]);
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };
  return (
    <>
      <section className="hero_area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero_content">
                <h4>{String(t("home.hero.subtitle"))}</h4>
                <h1>{String(t("home.hero.title"))}</h1>
                <h3>{String(t("home.hero.tagline"))}</h3>
                <p>{String(t("home.hero.description"))}</p>
                <div className="slider_button">
                  <div className="hero_btn style_twos">
                    <Link href={getLocalizedPath("/contact")}>
                      <i className="far fa-thumbs-up"></i>
                      {String(t("home.hero.explore"))}
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
                    <span>{String(t("home.hero.howItWorks"))}</span>
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
                    <h4>{String(t("home.hero.powerfulTeam"))}</h4>
                    <p>{String(t("home.hero.members"))}</p>
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
                <h4>{String(t("home.about.sectionTitle"))}</h4>
                <h1>{String(t("home.about.title1"))}</h1>
                <h1>{String(t("home.about.title2"))}</h1>
                <p>{String(t("home.about.description"))}</p>
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
                      <h3>{String(t("home.about.feature1"))}</h3>
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
                      <h3>{String(t("home.about.feature2"))}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about_button style_upper">
                <div className="about_btn style_two style_three">
                  <Link href={getLocalizedPath("/about")}>
                    <i className="far fa-thumbs-up"></i>
                    {String(t("home.about.moreAbout"))}
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_shape two style_five bounce-animate ">
          <Image
            src="/images/main-home/about_shape2.png"
            width={50}
            height={50}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="about_shpe-three bounce-animate ">
          <Image
            src="/images/main-home/about_shape.png"
            width={80}
            height={80}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="about_shpe-four bounce-animate2">
          <Image
            src="/images/main-home/about_shape_3.png"
            width={80}
            height={80}
            alt=""
            loading="lazy"
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
                  {arr<string>(t("home.marquee") as string[]).map(
                    (item, idx) => (
                      <div className="item" key={idx}>
                        <h4 className="d-flex align-items-center whitespace-nowrap">
                          <Link href={getLocalizedPath("/about")}>
                            <img
                              className="marqee_img_left"
                              src="/images/main-home/marqee_star.png"
                              alt=""
                            />
                            <span>{item}</span>
                            <span className="icon-img-50 ml-40">
                              <img
                                src="/images/main-home/marqee_star.png"
                                alt=""
                              />
                            </span>
                          </Link>
                        </h4>
                      </div>
                    )
                  )}
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
                  <h4>{String(t("home.services.sectionTitle"))}</h4>
                  <h1>{String(t("home.services.subtitle"))}</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="service_list2 flex lg:flex-row flex-col ">
                {arr<{
                  category: string;
                  title: string;
                  description: string;
                  details: string;
                }>(
                  t("home.services.items") as {
                    category: string;
                    title: string;
                    description: string;
                    details: string;
                  }[]
                ).map((service, idx) => (
                  <div className="col-lg-3" key={idx}>
                    <div className="service_single_item style_two style_three">
                      <div className="service_thumb">
                        <img src={`/images/Main/${11 + idx}.png`} alt="" />
                        <div className="service_icon">
                          <Link href={getLocalizedPath("/service")}>
                            <img
                              src="/images/main-home/service_icon.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="service_content">
                        <h4>{service.category}</h4>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="service_btn">
                          <Link href={getLocalizedPath("/service")}>
                            {service.details}
                            <i className="flaticon flaticon-right-arrow"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="service_shape_three style_four rotate">
          <img src="/images/main-home/service_shpe2.png" alt="" />
        </div>
        <div className="service_shape_five bounce-animate2">
          <img src="/images/main-home/service_shape.png" alt="" />
        </div>
        <div className="service_shape_three style_six bounce-animate4">
          <img src="/images/main-home/tir.png" alt="" />
        </div>
        <div className="service_shape_seven bounce-animate">
          <img src="/images/main-home/boxs.png" alt="" />
        </div>
      </section>
      <section className="why_choose_us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose_thumb">
                <img src="/images/Main/15.png" alt="" />
              </div>
              <div className="choose_thumb_shpae2 bounce-animate2">
                <img src="/images/main-home/choose_dot2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="choose_right">
                <div className="section_title style_three pb-13">
                  <h4>{String(t("home.whyChooseUs.sectionTitle"))}</h4>
                  <h1>{String(t("home.whyChooseUs.title"))}</h1>
                  <p>{String(t("home.whyChooseUs.description"))}</p>
                </div>
                <div className="row">
                  {arr<string>(t("home.whyChooseUs.features") as string[]).map(
                    (feature, idx) => (
                      <div className="col-lg-6 col-md-6" key={idx}>
                        <div className="choose_list">
                          <ul>
                            <li>
                              <i className="bi bi-check-circle"></i>
                              {feature}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )
                  )}
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
                    <span>{String(t("home.whyChooseUs.watchVideo"))}</span>
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
      <section className="team_area style_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title style_three style_four text-center ">
                <h4>{String(t("home.team.sectionTitle"))}</h4>
                <h1>{String(t("home.team.title"))}</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {arr<{ name: string; role: string }>(
              t("home.team.members") as { name: string; role: string }[]
            ).map((member, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div className="single-team_item style_two">
                  <div className="team_thumb">
                    <img src={`/images/team/${idx + 1}.webp`} alt="" />
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
                      <a href="#">{member.name}</a>
                    </h3>
                    <span>{member.role}</span>
                  </div>
                  <div className="team_box_shape">
                    <img src="/images/main-home/team-dot.png" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="team_all_shape">
          <div className="shape_one">
            <img src="/images/main-home/team_rotate.png" alt="" />
          </div>
          <div className="shape_two !opacity-20">
            <img src="/images/main-home/tir.png" alt="" />
          </div>
          <div className="shape_three !opacity-20">
            <img src="/images/main-home/about_shape_3.png" alt="" />
          </div>
        </div>
      </section>
      <section className="testimonial_area style_two style_three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section_title style_three">
                <h4>{String(t("home.testimonial.sectionTitle"))}</h4>
                <h1>{String(t("home.testimonial.title1"))}</h1>
                <h1 className="pb-30">
                  {String(t("home.testimonial.title2"))}
                </h1>
                <p>{String(t("home.testimonial.description"))}</p>
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
                    <h5 className="title_two">
                      {String(t("home.testimonial.avgRating"))}
                    </h5>
                  </div>
                </div>
                <div className="counter_shape">
                  <img src="/images/main-home/about_shape_3.png" alt="" />
                </div>
              </div>
              <div className="testi-list">
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    {String(t("home.testimonial.guarantee"))}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-thumb">
                <img src="/images/main-home/Bizayl.jpg" alt="" />
                <div className="hero_thumb_shape">
                  <img src="/images/main-home/hero3_dot_shape.png" alt="" />
                </div>
                <div className="powerful_box bounce-animate4">
                  <div className="hero_power_check">
                    <i className="bi bi-check-circle"></i>
                  </div>
                  <div className="hero_powerful_content">
                    <h4>{String(t("home.testimonial.h1"))}</h4>
                    <h4>{String(t("home.testimonial.h2"))}</h4>
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
                      {String(t("home.counter.projects"))
                        .split(" ")
                        .map((word, i) => (
                          <React.Fragment key={i}>
                            {word}
                            {i === 1 && <br />}{" "}
                            {/* Insert <br /> after the second word */}
                          </React.Fragment>
                        ))}
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
                      {String(t("home.counter.customers"))
                        .split(" ")
                        .map((word, i) => (
                          <React.Fragment key={i}>
                            {word}
                            {i === 2 && <br />}{" "}
                            {/* Insert <br /> after the third word */}
                          </React.Fragment>
                        ))}
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
                      {String(t("home.counter.ratings"))
                        .split(" ")
                        .map((word, i) => (
                          <React.Fragment key={i}>
                            {word}
                            {i === 2 && <br />}{" "}
                            {/* Insert <br /> after the third word */}
                          </React.Fragment>
                        ))}
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
                <img src="/images/main-home/showcases.jpg" alt="" />
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
                  <h4>{String(t("home.contact.sectionTitle"))}</h4>
                  <h1>{String(t("home.contact.title"))}</h1>
                </div>
                <form action="https://formspree.io/f/myyleorq" method="POST">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="name"
                          placeholder={String(t("home.contact.form.yourName"))}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder={String(t("home.contact.form.phoneNo"))}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="email"
                          name="email"
                          placeholder={String(
                            t("home.contact.form.emailAddress")
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="subject"
                          placeholder={String(t("home.contact.form.subject"))}
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
                          placeholder={String(
                            t("home.contact.form.writeMessage")
                          )}
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
                        <i className="far fa-thumbs-up"></i>{" "}
                        {String(t("home.contact.form.requestCallBack"))}
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
                <h4>{String(t("home.blog.sectionTitle"))}</h4>
                <h1>{String(t("home.blog.title1"))}</h1>
                <h1>{String(t("home.blog.title2"))}</h1>
                <h1>{String(t("home.blog.title3"))}</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box style_three">
                <div className="single-blog-thumb">
                  <img src="/images/blog/7.png" alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h3>
                      <Link href={getLocalizedPath(`/blog/${7}`)}>
                        {String(t("home.blog.blog1.title"))}
                      </Link>
                    </h3>
                  </div>
                  <p className="blog_text">
                    {String(t("home.blog.blog1.desc"))}
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
                  <img src="/images/blog/8.png" alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h3>
                      <Link href={getLocalizedPath(`/blog/${8}`)}>
                        {String(t("home.blog.blog2.title"))}
                      </Link>
                    </h3>
                  </div>
                  <p className="blog_text">
                    {String(t("home.blog.blog2.desc"))}
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
                  <img src="/images/blog/9.png" alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h3>
                      <Link href={getLocalizedPath(`/blog/${9}`)}>
                        {String(t("home.blog.blog3.title"))}
                      </Link>
                    </h3>
                  </div>
                  <p className="blog_text">
                    {String(t("home.blog.blog3.desc"))}
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
