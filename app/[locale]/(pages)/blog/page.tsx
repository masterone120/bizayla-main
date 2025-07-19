"use client";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const { t, locale } = useTranslation();
  const arr = <T = string,>(val: T[] | T) => (Array.isArray(val) ? val : [val]);
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };

  return (
    <>
      <div className="breadcumb-area blog-page d-flex">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title">
                  <h4> {String(t("blog.breadcrumb.title"))}</h4>
                </div>
                <ul>
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      <i className="bi bi-house-door-fill"></i>{" "}
                      {String(t("blog.breadcrumb.home"))}{" "}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>{" "}
                    {String(t("blog.breadcrumb.current"))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="blog_area inner_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>{String(t("blog.title"))}</h4>
                <h1>{String(t("blog.subtitle"))}</h1>
                <h1>{String(t("blog.subtitle2"))}</h1>
                <p>{String(t("blog.detail"))}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {arr<{
              id: string;
              title: string;
              date: string;
              type: string;
            }>(
              t("blog.blogCards") as {
                id: string;
                title: string;
                date: string;
                type: string;
              }[]
            ).map(
              (
                blog: { type: string; date: string; id: string; title: string },
                index: number
              ) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="single-blog-box">
                    <div className="single-blog-thumb">
                      <img src={`/images/blog/${index + 1}.webp`} alt="" />
                    </div>
                    <div className="blog-content">
                      <div className="meta-blog">
                        <p>
                          <span className="solution">{blog?.type}</span>
                          {blog?.date}
                        </p>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link href={getLocalizedPath(`/blog/${blog?.id}`)}>
                            {blog?.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="blog_btn">
                        <Link href={getLocalizedPath(`/blog/${blog?.id}`)}>
                          {String(t("blog.readMore"))}{" "}
                          <i className="flaticon flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
