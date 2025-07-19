"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";
import Link from "next/link";
import MobileLanguageSwitcher from "../../MobileLanguageSwitcher";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaImages,
  FaBlog,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaQuestion,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  "navigation.home": <FaHome className="text-lg mr-2 text-[#0c6e6d]" />,
  "navigation.about": <FaInfoCircle className="text-lg mr-2 text-[#0c6e6d]" />,
  "navigation.services": (
    <FaServicestack className="text-lg mr-2 text-[#0c6e6d]" />
  ),
  "navigation.gallery": <FaImages className="text-lg mr-2 text-[#0c6e6d]" />,
  "navigation.blog": <FaBlog className="text-lg mr-2 text-[#0c6e6d]" />,
  "navigation.contact": <FaEnvelope className="text-lg mr-2 text-[#0c6e6d]" />,
  "navigation.FAQs": <FaQuestion className="text-lg mr-2 text-[#0c6e6d]" />,
};

const MobileMenu = () => {
  const { t, locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { key: "navigation.home", path: "/" },
    { key: "navigation.about", path: "/about" },
    { key: "navigation.services", path: "/service" },
    { key: "navigation.gallery", path: "/gallery" },
    { key: "navigation.blog", path: "/blog" },
    { key: "navigation.contact", path: "/contact" },
    { key: "navigation.FAQs", path: "/faq" },
  ];

  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };

  // Close drawer on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Fixed Mobile Header */}
      <header className="fixed top-0 left-0 w-full z-50 md:hidden h-12 bg-[#0c6e6d]">
        <MobileLanguageSwitcher />
      </header>
      {/* Logo and Hamburger Row */}
      <div className="fixed top-12 left-0 w-full z-40 flex items-center justify-between px-4 h-14 md:hidden bg-[#0c6e6d]">
        <div className="col-lg-2">
          <div className="header-logo !w-36">
            <Link className="active_header " href={getLocalizedPath("/")}>
              <img src="/images/bizaylaText.png" alt="logo" />
            </Link>
          </div>
        </div>
        <button
          className="flex flex-col items-center justify-center w-10 h-10 ml-2 bg-[#0c6e6d] rounded-full focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-opacity-40 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <nav
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 md:hidden flex flex-col rounded-l-2xl border-l pt-0 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b bg-[#0c6e6d] rounded-tl-2xl">
          <Link
            href={getLocalizedPath("/")}
            className="flex items-center"
            aria-label="Home"
          >
            <img
              src="/images/bizaylaLogo.png"
              alt="logo"
              className="h-8 w-auto mr-2"
            />
            <span className="text-white font-bold text-lg">Bizayla</span>
          </Link>
          <button
            className="text-white hover:text-gray-200 text-3xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        {/* Menu Items */}
        <ul className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto">
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link
                href={getLocalizedPath(item.path)}
                className="flex items-center px-3 py-3 rounded-lg hover:bg-[#f0f7ef] text-[#0c6e6d] font-medium transition-all"
                onClick={() => setOpen(false)}
              >
                {iconMap[item.key] || null}
                {String(t(item.key))}
              </Link>
            </li>
          ))}
        </ul>
        {/* Drawer Footer */}
        <footer className="px-4 py-4 border-t bg-[#f0f7ef] rounded-bl-2xl flex flex-col items-center gap-2">
          <div className="flex gap-4 mb-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-[#0c6e6d] text-xl" />
            </a>
            <a
              href="https://www.facebook.com/bizayla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <FaFacebook className="text-[#0c6e6d] text-xl" />
            </a>
            <a
              href="https://wa.me/491749111715"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
            >
              <FaWhatsapp className="text-[#0c6e6d] text-xl" />
            </a>
            <a
              href="https://de.pinterest.com/bizayla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="pinterest"
            >
              <FaPinterest className="text-[#0c6e6d] text-xl" />
            </a>
            <a
              href="https://x.com/BizAyla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="x"
            >
              <FaTwitter className="text-[#0c6e6d] text-xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-[#0c6e6d] text-xl" />
            </a>
          </div>
          <span className="text-xs text-gray-500">
            © {new Date().getFullYear()} Bizayla. All rights reserved.
          </span>
        </footer>
      </nav>
      {/* Spacer to prevent content from being hidden behind the header and logo row */}
      <div className="h-32 md:hidden" />
    </>
  );
};

export default MobileMenu;
