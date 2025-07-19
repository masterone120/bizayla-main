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
                  <h4>Gallery</h4>
                </div>
                <ul>
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      <i className="bi bi-house-door-fill"></i> Home{" "}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>Gallery
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
                <h4>LATEST WORKS</h4>
                <h1>Visit the Real Results of</h1>
                <h1> Latest Case Studies</h1>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 ">
              <div className="portfolio_nav">
                <div className="portfolio_menu">
                  <ul className="menu-filtering">
                    <li className="current_menu_item" data-filter="*">
                      All Items
                    </li>
                    <li data-filter=".export-technology" className="">
                      Export Technology
                    </li>
                    <li data-filter=".global-trade" className="">
                      Global Trade
                    </li>
                    <li data-filter=".packaging-design" className="">
                      Packaging Design
                    </li>
                    <li data-filter=".salt" className="">
                      Salt
                    </li>
                    <li data-filter=".organic-food" className="">
                      Organic Food
                    </li>
                    <li data-filter=".dried-fruits" className="">
                      Dried Fruits
                    </li>
                    <li data-filter=".dried-vegetables" className="">
                      Dried Vegetables
                    </li>
                    <li data-filter=".nuts" className="mt-2">
                      Nuts
                    </li>
                    <li data-filter=".food-industry" className="mt-2">
                      Food Industry
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
                      <span>Export Technology</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/1")}>
                          Advanced Export Solutions
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
                    alt="Export Technology"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Export Technology</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/36")}>
                          Advanced Export Solutions
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/36")}>
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
                    src="/images/Gallery/Export-Tech/Tech(3).jpg"
                    width={600}
                    height={400}
                    alt="Export Technology"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Export Technology</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/37")}>
                          Advanced Export Solutions
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/37")}>
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
                    alt="Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Global Trade</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/2")}>
                          International Trade Network
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
            <div className="col-lg-6 col-md-6 grid-item global-trade">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Global-Trade/Global(2).jpg"
                    width={600}
                    height={400}
                    alt="Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Global Trade</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/38")}>
                          International Trade Network
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/38")}>
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
                    src="/images/Gallery/Global-Trade/Global(3).jpg"
                    width={600}
                    height={400}
                    alt="Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Global Trade</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/39")}>
                          International Trade Network
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/39")}>
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
                    src="/images/Gallery/Global-Trade/Global(4).jpg"
                    width={600}
                    height={400}
                    alt="Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Global Trade</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/40")}>
                          International Trade Network
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/40")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Packaging Design"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Packaging Design</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/3")}>
                          Custom Export Packaging
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
            <div className="col-lg-6 col-md-6 grid-item packaging-design">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Packaging-Design/Pack(2).jpg"
                    width={600}
                    height={400}
                    alt="Packaging Design"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Packaging Design</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/41")}>
                          Custom Export Packaging
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/41")}>
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
                    src="/images/Gallery/Packaging-Design/Pack(3).jpg"
                    width={600}
                    height={400}
                    alt="Packaging Design"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Packaging Design</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/42")}>
                          Custom Export Packaging
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/42")}>
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
                    alt="Natural Salt"
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
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(1).jpg"
                    width={600}
                    height={400}
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/14")}>
                          Uzbek Natural Salt Export
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
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(2).jpg"
                    width={600}
                    height={400}
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/15")}>
                          Uzbek Natural Salt Export
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
            <div className="col-lg-6 col-md-6 grid-item salt">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Salt/salt(3).jpg"
                    width={600}
                    height={400}
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/16")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/16")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/17")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/17")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/18")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/18")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/19")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/19")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/20")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/20")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/21")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/21")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/22")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/22")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/23")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/23")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/24")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/24")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/25")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/25")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/26")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/26")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/27")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/27")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/28")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/28")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/29")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/29")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/30")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/30")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/31")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/31")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/32")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/32")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/33")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/33")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/34")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/34")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                    alt="Natural Salt"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Natural Salt</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/35")}>
                          Uzbek Natural Salt Export
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/35")}>
                        <i className="bi bi-arrow-right-short"></i>
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
                      <span>Organic Food</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/5")}>
                          Premium Organic Products
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/5")}>
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
                    alt="Organic Food"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Organic Food</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/44")}>
                          Premium Organic Products
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/44")}>
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
                    src="/images/Gallery/Organic-Food/Organic(3).jpg"
                    width={600}
                    height={400}
                    alt="Organic Food"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Organic Food</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/45")}>
                          Premium Organic Products
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/45")}>
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
                      <span>Dried Fruits</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/6")}>
                          Premium Dried Fruits
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/6")}>
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item dried-fruits">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Dried-Food/Dried(2).jpg"
                    width={600}
                    height={400}
                    alt="Dried Fruits"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Dried Fruits</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/46")}>
                          Premium Dried Fruits
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/46")}>
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
                      <span>Dried Vegetables</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/7")}>
                          Natural Dried Vegetables
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
            <div className="col-lg-6 col-md-6 grid-item dried-vegetables">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Dried-Veg/Dried(2).jpg"
                    width={600}
                    height={400}
                    alt="Dried Vegetables"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Dried Vegetables</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/47")}>
                          Natural Dried Vegetables
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/47")}>
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
                    src="/images/Gallery/Nuts/Nuts(1).jpg"
                    width={600}
                    height={400}
                    alt="Nuts"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Nuts</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/8")}>
                          Premium Quality Nuts
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
            <div className="col-lg-6 col-md-6 grid-item nuts">
              <div className="portfolio_item">
                <div className="portfolio_thumb">
                  <Image
                    src="/images/Gallery/Nuts/Nuts(2).jpg"
                    width={600}
                    height={400}
                    alt="Nuts"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Nuts</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/48")}>
                          Premium Quality Nuts
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/48")}>
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
                    src="/images/Gallery/Nuts/Nuts(2) (1).jpg"
                    width={600}
                    height={400}
                    alt="Nuts"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Nuts</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/49")}>
                          Premium Quality Nuts
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/49")}>
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
                      <span>Food Industry</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/9")}>
                          Food Industry Solutions
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
                      <span>Food Industry</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/50")}>
                          Food Industry Solutions
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/50")}>
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
                    src="/images/Gallery/Food-Industry/Food(3).jpg"
                    width={600}
                    height={400}
                    alt="Food Industry"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Food Industry</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/51")}>
                          Food Industry Solutions
                        </Link>
                      </h3>
                    </div>
                    <div className="port_right">
                      <Link href={getLocalizedPath("/gallery/51")}>
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
                    src="/images/Gallery/COMBINED/Combined(1).jpg"
                    width={600}
                    height={400}
                    alt="Export Technology & Global Trade"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Export Technology & Global Trade</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/10")}>
                          Integrated Export Solutions
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
                    src="/images/Gallery/COMBINED/Combined(2).jpg"
                    width={600}
                    height={400}
                    alt="Organic Food & Dried Fruits"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Organic Food & Dried Fruits</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/11")}>
                          Natural Organic Products
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
                    src="/images/Gallery/COMBINED/Combined(3).jpg"
                    width={600}
                    height={400}
                    alt="Packaging Design & Food Industry"
                    loading="lazy"
                  />
                  <div className="portfolio_content">
                    <div className="prot-text">
                      <span>Packaging Design & Food Industry</span>
                      <h3>
                        <Link href={getLocalizedPath("/gallery/12")}>
                          Food Industry Packaging
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
