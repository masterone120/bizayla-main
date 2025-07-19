/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Gallery = () => {
  const { t, locale } = useTranslation();
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };

  useEffect(() => {
    // Initialize isotope filtering after component mounts
    if (typeof window !== "undefined" && (window as any).jQuery) {
      const $ = (window as any).jQuery;

      // Initialize isotope
      $(".image_load").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });

      // Filter items on click
      $(".menu-filtering li").on("click", function (this: any) {
        $(".menu-filtering li").removeClass("current_menu_item");
        $(this).addClass("current_menu_item");

        const filterValue = $(this).attr("data-filter");
        $(".image_load").isotope({ filter: filterValue });
      });
    }
  }, []);

  return (
    <>
      <div className="breadcumb-area gallery-page d-flex">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title">
                  <h4>{String(t("gallery.breadcrumb.title"))}</h4>
                </div>
                <ul>
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      <i className="bi bi-house-door-fill"></i>{" "}
                      {String(t("gallery.breadcrumb.home"))}{" "}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>
                    {String(t("gallery.breadcrumb.current"))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case-study-area inner_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>{String(t("gallery.hero.sectionTitle"))}</h4>
                <h1>{String(t("gallery.hero.title1"))}</h1>
                <h1>{String(t("gallery.hero.title2"))}</h1>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 ">
              <div className="portfolio_nav">
                <div className="portfolio_menu">
                  <ul className="menu-filtering">
                    <li className="current_menu_item" data-filter="*">
                      {String(t("gallery.filters.allItems"))}
                    </li>
                    <li data-filter=".export-technology" className="">
                      {String(t("gallery.filters.exportTechnology"))}
                    </li>
                    <li data-filter=".global-trade" className="">
                      {String(t("gallery.filters.globalTrade"))}
                    </li>
                    <li data-filter=".packaging-design" className="">
                      {String(t("gallery.filters.packagingDesign"))}
                    </li>
                    <li data-filter=".salt" className="">
                      {String(t("gallery.filters.salt"))}
                    </li>
                    <li data-filter=".organic-food" className="">
                      {String(t("gallery.filters.organicFood"))}
                    </li>
                    <li data-filter=".dried-fruits" className="">
                      {String(t("gallery.filters.driedFruits"))}
                    </li>
                    <li data-filter=".dried-vegetables" className="">
                      {String(t("gallery.filters.driedVegetables"))}
                    </li>
                    <li data-filter=".nuts" className="mt-2">
                      {String(t("gallery.filters.nuts"))}
                    </li>
                    <li data-filter=".food-industry" className="mt-2">
                      {String(t("gallery.filters.foodIndustry"))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row image_load">
            {/* ===== EXPORT TECHNOLOGY SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item export-technology">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Export-Tech/Tech(1).jpg"
                    width={600}
                    height={400}
                    alt="Export Technology"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.0.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/1")}>
                          {String(t("gallery.items.0.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/1")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item export-technology">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Export-Tech/Tech(2).jpg"
                    width={600}
                    height={400}
                    alt="Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.1.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/2")}>
                          {String(t("gallery.items.1.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/2")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item export-technology">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Export-Tech/Tech(2).jpg"
                    width={600}
                    height={400}
                    alt="Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.2.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/2")}>
                          {String(t("gallery.items.2.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/2")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item export-technology">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Global-Trade/Global(3).jpg"
                    width={600}
                    height={400}
                    alt="Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.3.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/2")}>
                          {String(t("gallery.items.3.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/2")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== GLOBAL TRADE SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item global-trade">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Global-Trade/Global(1).jpg"
                    width={600}
                    height={400}
                    alt="Packaging Design"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.4.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/3")}>
                          {String(t("gallery.items.4.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/3")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item global-trade">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Global-Trade/Global(2).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.5.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.5.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/4")}>
                          {String(t("gallery.items.14.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/4")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item global-trade">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Global-Trade/Global(3).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.6.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.6.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/5")}>
                          {String(t("gallery.items.14.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/5")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PACKAGING DESIGN SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item packaging-design">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Packaging-Design/Pack(1).jpg"
                    width={600}
                    height={400}
                    alt="Organic Food"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.5.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/7")}>
                          {String(t("gallery.items.5.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/7")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item packaging-design">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Packaging-Design/Pack(2).jpg"
                    width={600}
                    height={400}
                    alt="Dried Fruits"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.6.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/8")}>
                          {String(t("gallery.items.6.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/8")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== NATURAL SALT SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(2).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.15.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.15.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/15")}>
                          {String(t("gallery.items.15.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/15")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(3).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.16.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.16.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/16")}>
                          {String(t("gallery.items.16.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/16")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(4).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.17.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.17.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/17")}>
                          {String(t("gallery.items.17.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/17")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(5).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.18.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.18.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/18")}>
                          {String(t("gallery.items.18.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/18")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(6).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.19.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.19.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/19")}>
                          {String(t("gallery.items.19.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/19")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(7).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.20.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.20.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/20")}>
                          {String(t("gallery.items.20.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/20")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(8).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.21.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.21.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/21")}>
                          {String(t("gallery.items.21.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/21")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(9).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.22.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.22.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/22")}>
                          {String(t("gallery.items.22.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/22")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(10).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.23.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.23.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/23")}>
                          {String(t("gallery.items.23.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/23")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(11).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.24.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.24.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/24")}>
                          {String(t("gallery.items.24.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/24")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(12).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.25.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.25.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/25")}>
                          {String(t("gallery.items.25.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/25")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(13).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.26.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.26.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/26")}>
                          {String(t("gallery.items.26.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/26")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(14).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.27.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.27.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/27")}>
                          {String(t("gallery.items.27.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/27")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(15).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.28.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.28.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/28")}>
                          {String(t("gallery.items.28.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/28")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(16).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.29.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.29.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/29")}>
                          {String(t("gallery.items.29.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/29")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(17).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.30.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.30.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/30")}>
                          {String(t("gallery.items.30.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/30")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(18).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.31.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.31.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/31")}>
                          {String(t("gallery.items.31.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/31")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(19).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.32.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.32.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/32")}>
                          {String(t("gallery.items.32.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/32")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(20).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.33.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.33.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/33")}>
                          {String(t("gallery.items.33.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/33")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(21).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.34.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.34.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/34")}>
                          {String(t("gallery.items.34.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/34")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(22).jpg"
                    width={600}
                    height={400}
                    alt={String(t("gallery.items.35.alt"))}
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.35.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/35")}>
                          {String(t("gallery.items.35.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/35")}>
                        {" "}
                        <i className="bi bi-arrow-right-short"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== ORGANIC FOOD SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item organic-food">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Organic-Food/Organic(1).jpg"
                    width={600}
                    height={400}
                    alt="Organic Food"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.7.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/8")}>
                          {String(t("gallery.items.7.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/8")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item organic-food">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Organic-Food/Organic(2).jpg"
                    width={600}
                    height={400}
                    alt="Dried Fruits"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.8.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/9")}>
                          {String(t("gallery.items.8.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/9")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== DRIED FRUITS SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item dried-fruits">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Dried-Food/Dried(1).jpg"
                    width={600}
                    height={400}
                    alt="Dried Fruits"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.9.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/10")}>
                          {String(t("gallery.items.9.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/10")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== DRIED VEGETABLES SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item dried-vegetables">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Dried-Veg/Dried(1).jpg"
                    width={600}
                    height={400}
                    alt="Dried Vegetables"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.10.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/11")}>
                          {String(t("gallery.items.10.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/11")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== NUTS SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item nuts">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Nuts/Nuts(2) (1).jpg"
                    width={600}
                    height={400}
                    alt="Nuts"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.11.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/12")}>
                          {String(t("gallery.items.11.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/12")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item nuts">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Nuts/Nuts(1).jpg"
                    width={600}
                    height={400}
                    alt="Nuts"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.12.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/13")}>
                          {String(t("gallery.items.12.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/13")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== FOOD INDUSTRY SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item food-industry">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Food-Industry/Food(1).jpg"
                    width={600}
                    height={400}
                    alt="Food Industry"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.13.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/14")}>
                          {String(t("gallery.items.13.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/14")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item food-industry">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Food-Industry/Food(2).jpg"
                    width={600}
                    height={400}
                    alt="Food Industry"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.14.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/15")}>
                          {String(t("gallery.items.14.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/15")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== COMBINED CATEGORIES SECTION ===== */}
            <div className="col-lg-6 col-md-6 grid-item export-technology global-trade">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Organic-Food/Organic(3).jpg"
                    width={600}
                    height={400}
                    alt="Export Technology & Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.9.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/10")}>
                          {String(t("gallery.items.9.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/10")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item organic-food dried-fruits">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Organic-Food/Organic(2).jpg"
                    width={600}
                    height={400}
                    alt="Organic Food & Dried Fruits"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.10.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/11")}>
                          {String(t("gallery.items.10.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/11")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item packaging-design food-industry">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Packaging-Design/Pack(3).jpg"
                    width={600}
                    height={400}
                    alt="Packaging Design & Food Industry"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>{String(t("gallery.items.11.category"))}</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/12")}>
                          {String(t("gallery.items.11.title"))}
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/12")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
