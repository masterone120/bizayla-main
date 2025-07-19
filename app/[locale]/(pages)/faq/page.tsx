"use client";
import FAQ from "@/app/components/FAQ";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Link from "next/link";
import React from "react";

const FAQs = () => {
  const { t, locale } = useTranslation();
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };
  return (
    <>
      <div className="breadcumb-area faq-page d-flex">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title">
                  <h4> {String(t("faq.breadcrumb.title"))}</h4>
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
                    {String(t("faq.breadcrumb.current"))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
};
export default FAQs;
