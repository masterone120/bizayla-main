"use client";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetails = () => {
  const params = useParams();
  const slug = params.slug;
  const { t, locale } = useTranslation();
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };

  return (
    <>
      <div className="breadcumb-area subBlog-page d-flex">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content style_two">
                <span className="category">
                  {t(`blog.blogCards.${Number(slug) - 1}.type`) as string}
                </span>
                <div className="breadcumb-title style_two style_three">
                  <h4>
                    {t(`blog.blogCards.${Number(slug) - 1}.title`) as string}
                  </h4>
                </div>
                <div className="breadcumb_meta-blog">
                  <p>
                    <span>
                      {t(`blog.blogCards.${Number(slug) - 1}.date`) as string}
                    </span>{" "}
                    {/* <span>
                      {t(`blog.blogCards.${Number(slug) - 1}.date`) as string}
                    </span>{" "}
                    <span>
                      {t(`blog.blogCards.${Number(slug) - 1}.date`) as string}
                    </span> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="portfolio_details">
        <div className="container">
          <div className="port_main style_two">
            <div className="row">
              <div className="col-lg-12">
                <div className="port_details_content style_two">
                  <p className="quote">
                    {t(`blog.blogCards.${Number(slug) - 1}.desc`) as string}
                  </p>
                  {/* <p className="port_text style_two">
                    "Globally engage cross-media leadership skills before
                    cross-media great oppotunities whereas process-centric
                    models efficiently "
                  </p> */}
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="port_details_content style_two">
                  <h2 className="pb-15">Sales Benifits</h2>
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
            </div> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination_container style_two">
                  <ul className="blog-category">
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">LOCAL GOODS</a>
                    </li>
                    <li>
                      <a href="#">GLOBAL TRADE</a>
                    </li>
                  </ul>
                  <div className="pagination_item">
                    <div className="call_social_icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
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
                          <a className="top-social-icon-left" href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pagination_container">
                  <div className="pagination_item">
                    <div className="pagination_btn">
                      <Link
                        href={getLocalizedPath(`/blog/${Number(slug) - 1}`)}
                      >
                        <img
                          src="/images/inner-img/pagination_icon1.png"
                          alt=""
                        />
                        Previous Article
                      </Link>
                    </div>
                  </div>
                  <div className="pagination_item">
                    <div className="pagination_btn style_right">
                      <Link
                        href={getLocalizedPath(`/blog/${Number(slug) + 1}`)}
                      >
                        Next Article{" "}
                        <img
                          src="/images/inner-img/pagination_icon2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="comment-form">
                  <div className="comment-title">
                    <h3>Post a Comments</h3>
                    <p>
                      Your eamil address will not be published. So, dont worry.
                    </p>
                    <span></span>
                  </div>
                  <form
                    action="https://formspree.io/f/myyleorq"
                    method="POST"
                    id="dreamit-form"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          name="comment-message"
                          className="mb-20"
                          id="comment-msg-box"
                          cols={30}
                          rows={4}
                          placeholder="Weite Comments"
                        ></textarea>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="comment-box"
                          name="comment-email"
                          placeholder="Email"
                        />
                      </div>

                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="comment-box"
                          name="comment-website"
                          placeholder="Your Website"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="submit"
                          value="SUBMIT COMMENTS"
                          className="submit-comment"
                        />
                      </div>
                    </div>
                  </form>
                  <div id="status"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogDetails;
