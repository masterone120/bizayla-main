/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";

export default function AboutPage() {
  const { t, loading, translations, locale } = useTranslation();

  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };

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
      <div className="breadcumb-area about-page d-flex">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title">
                  <h4>{String(t("about.breadcrumb.title"))}</h4>
                </div>
                <ul>
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      <i className="bi bi-house-door-fill"></i>{" "}
                      {String(t("about.breadcrumb.home"))}{" "}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>
                    {String(t("about.breadcrumb.current"))}
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
                <h4>{String(t("about.section.activityTitle"))}</h4>
                <h1>{String(t("about.section.globalImportExport"))}</h1>
                <h1>{String(t("about.section.ofGoods"))}</h1>
                <p>{String(t("about.section.desc1"))}</p>
                <p>{String(t("about.section.desc2"))}</p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-icon_box">
                    <div className="about_icon">
                      <img src="/images/home_two/about_icon1.png" alt="" />
                    </div>
                    <div className="about_content style_two">
                      <h3>{String(t("about.section.dynamicApproach"))}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-icon_box">
                    <div className="about_icon">
                      <img src="/images/home_two/about_icon2.png" alt="" />
                    </div>
                    <div className="about_content style_two">
                      <h3>
                        {String(t("about.section.strategicImportExport"))}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about_button style_upper">
                <div className="about_btn style_two">
                  <Link href={getLocalizedPath("/contact")}>
                    <i className="far fa-thumbs-up"></i>
                    {String(t("about.section.moreAbout"))}
                    <span></span>
                  </Link>
                </div>
                <div className="about_info style-two">
                  <span>
                    <Link href={getLocalizedPath("/service")}>
                      {String(t("about.section.ourService"))}{" "}
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
                  <h1>{String(t("about.salt.title"))}</h1>
                  <div className="text-left text-lg text-white">
                    {String(t("about.salt.desc"))}
                    <ul>
                      {(typeof translations?.about === "object" &&
                      "salt" in translations.about &&
                      Array.isArray((translations.about as any).salt.features)
                        ? ((translations.about as any).salt
                            .features as string[])
                        : [String(t("about.salt.features"))]
                      ).map((feature: string, idx: number) => (
                        <li className="flex items-center gap-2" key={idx}>
                          <CiCircleCheck /> {feature}
                        </li>
                      ))}
                    </ul>
                    {String(t("about.salt.desc2"))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="advisar_btn text-right">
                  <Link href={getLocalizedPath("/contact")}>
                    {String(t("about.salt.getStarted"))} <span></span>
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
                      {String(t("about.counters.projects"))
                        .split(" ")
                        .map((word, i) => (
                          <span key={i}>
                            {word} <br />
                          </span>
                        ))}
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
                      {String(t("about.counters.customers"))
                        .split(" ")
                        .map((word, i) => (
                          <span key={i}>
                            {word} <br />
                          </span>
                        ))}
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
                      {String(t("about.counters.ratings"))
                        .split(" ")
                        .map((word, i) => (
                          <span key={i}>
                            {word} <br />
                          </span>
                        ))}
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
                <h4>{String(t("about.team.title"))}</h4>
                <h1>{String(t("about.team.subtitle"))}</h1>
                <p>{String(t("about.team.desc"))}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {(typeof translations?.about === "object" &&
            "team" in translations.about &&
            Array.isArray((translations.about as any).team.members)
              ? ((translations.about as any).team.members as {
                  name: string;
                  role: string;
                }[])
              : [{ name: String(t("about.team.members")), role: "" }]
            ).map((member: { name: string; role: string }, idx: number) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="single-team_item">
                  <div className="team_thumb">
                    <img src={`/images/team/${idx + 1}.jpg`} alt="" />
                  </div>
                  <div className="team-content">
                    <h3>
                      <a href="#">{member.name}</a>
                    </h3>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="marquee_area style_two inner_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="slide-har st1">
                <div className="box">
                  {(typeof translations?.about === "object" &&
                  "marquee" in translations.about &&
                  Array.isArray((translations.about as any).marquee)
                    ? ((translations.about as any).marquee as string[])
                    : [String(t("about.marquee"))]
                  ).map((item: string, idx: number) => (
                    <div className="item" key={idx}>
                      <h4 className="d-flex align-items-center">
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
                  ))}
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
                  <h4>{String(t("about.missionVision.title"))}</h4>
                  <h1>{String(t("about.missionVision.mission"))}</h1>
                  <div>
                    {String(t("about.missionVision.desc"))}
                    <ul>
                      {(typeof translations?.about === "object" &&
                      "missionVision" in translations.about &&
                      Array.isArray(
                        (translations.about as any).missionVision.points
                      )
                        ? ((translations.about as any).missionVision
                            .points as string[])
                        : [String(t("about.missionVision.points"))]
                      ).map((point: string, idx: number) => (
                        <li className="flex items-center gap-2" key={idx}>
                          <CiCircleCheck /> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>{String(t("about.missionVision.vision"))}</p>
                </div>
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
                    <span>{String(t("about.missionVision.watchVideo"))}</span>
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
