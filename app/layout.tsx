import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/partials/header";
import Footer from "./components/partials/footer";
import Script from "next/script";
import MobileMenu from "./components/partials/mobileMemu";
import SidebarCartItem from "./components/partials/sidebarCartItem";

export const metadata: Metadata = {
  title: "Bizayla",
  description: "Bizayla Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="56x56"
          href="/images/fav-icon/icon.png"
        />
        <link
          rel="stylesheet"
          href="/css/bootstrap.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/owl.carousel.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/animate.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/animated-text.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/all.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/theme-default.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/meanmenu.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/owl.transitions.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/bootstrap-icons.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/flaticon.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/responsive.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/coustom-animation.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/scroll-up.css"
          type="text/css"
          media="all"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <MobileMenu />
          <SidebarCartItem />
          <main>{children}</main>
          <Footer />
        </div>
        <Script
          src="/js/vendor/jquery-3.6.2.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script
          src="/js/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/animated-text.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.meanmenu.js" strategy="afterInteractive" />
        <Script src="/js/jquery.scrollUp.js" strategy="afterInteractive" />
        <Script src="/js/theme.js" strategy="afterInteractive" />
        <Script src="/js/jquery.barfiller.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
