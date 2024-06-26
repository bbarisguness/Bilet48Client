"use client";

import Header6 from "@/components/header/header-6";
import Footer8 from "@/components/footer/footer-8";
import ScrollToTop from "@/components/common/ScrollTop";
import { Providers } from "@/store/provider";
import Aos from "aos";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import "../styles/index.scss";
import "./globals.css";
import store from "@/store";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <Providers store={store}>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="./favicon.ico" />
        </head>
        <body>
          <main>
            <Header6 />
            {children}
            <Footer8 />
            <ScrollToTop />
          </main>
        </body>
      </html>
    </Providers>
  );
}
