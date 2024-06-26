"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";

const Header6 = () => {
  const [navbar, setNavbar] = useState(false);

  const activeHeaderTheme = 1;
  const logoText = (
    <span
      style={{
        fontSize: 20,
        color: navbar && activeHeaderTheme == 0 ? "white" : "#13357b",
        fontWeight: "bold",
      }}
    >
      Bilet 48
    </span>
  );
  const navbarThemes = [
    {
      logo: "/img/general/logo-dark-3-without-text.png",
      headerBackgroundColor: "",
      headerItemsColor: "text-dark",
      becomeButton: "bg-dark-4 text-white",
      signButton: "border-dark-4 text-dark-4",
      isSticky: {
        logo: "/img/general/logo-light-without-text.png",
        headerBackgroundColor: "bg-dark-4 is-sticky",
        headerItemsColor: "text-white",
        becomeButton: "bg-white",
        signButton: "border-white text-white",
      },
    },
    {
      logo: "/img/general/logo-dark-3-without-text.png",
      headerBackgroundColor: "",
      headerItemsColor: "text-dark",
      becomeButton: "bg-dark-4 text-white",
      signButton: "border-dark-4 text-dark-4",
      isSticky: {
        logo: "/img/general/logo-dark-3-without-text.png",
        headerBackgroundColor: "bg-white is-sticky",
        headerItemsColor: "text-dark",
        becomeButton: "bg-dark-4 text-white",
        signButton: "border-dark-4 text-dark-4",
      },
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      {" "}
      <header
        className={`header ${
          !navbar
            ? navbarThemes[activeHeaderTheme].headerBackgroundColor
            : navbarThemes[activeHeaderTheme].isSticky.headerBackgroundColor
        }`}
      >
        <div className="header__container container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link
                  href="/"
                  className="header-logo mr-20"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {navbar ? (
                    <>
                      <img
                        src={navbarThemes[activeHeaderTheme].isSticky.logo}
                        alt="logo icon"
                        className="mr-20"
                        style={{ width: "auto" }}
                      />
                      {logoText}
                    </>
                  ) : (
                    <>
                      <img
                        src={navbarThemes[activeHeaderTheme].logo}
                        alt="logo icon"
                        className="mr-20"
                        style={{ width: "auto" }}
                      />
                      {logoText}
                    </>
                  )}
                </Link>
                {/* End logo */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu
                      style={
                        !navbar
                          ? navbarThemes[activeHeaderTheme].headerItemsColor
                          : navbarThemes[activeHeaderTheme].isSticky
                              .headerItemsColor
                      }
                    />
                  </div>
                </div>
                {/* End header-menu */}

                {/* Start btn-group */}
                {/* <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  <Link
                    href="/login"
                    className={`button px-30 fw-400 text-14 -blue-1 h-50 ${
                      !navbar
                        ? navbarThemes[activeHeaderTheme].becomeButton
                        : navbarThemes[activeHeaderTheme].isSticky.becomeButton
                    }`}
                  >
                    Become An Expert
                  </Link>
                  <Link
                    href="/signup"
                    className={`button px-30 fw-400 text-14 -blue-1 h-50 ml-20 ${
                      !navbar
                        ? navbarThemes[activeHeaderTheme].signButton
                        : navbarThemes[activeHeaderTheme].isSticky.signButton
                    }`}
                  >
                    Sign In / Register
                  </Link>
                </div> */}
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30">
                  {/* <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit"
                    />
                  </div> */}
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header6;
