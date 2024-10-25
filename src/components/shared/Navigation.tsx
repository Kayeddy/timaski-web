"use client";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
import { Image } from "@nextui-org/react";
import NavLink from "./NavLink";

// Navigation Component
const Navigation: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > 32);
  }, []);

  useEffect(() => {
    // Add scroll listener for detecting scroll changes
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-padding duration-500 max-lg:py-4",
        hasScrolled && "py-4 bg-black-100 backdrop-blur-[8px]"
      )}
      aria-label="Main navigation"
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Mobile Logo */}
        <a
          href="/"
          className="z-2 flex-1 cursor-pointer lg:hidden"
          aria-label="Home"
        >
          <Image
            src="assets/core/logo_timaski-sm.svg"
            width={100}
            height={55}
            alt="logo"
            className="object-contain lg:object-cover"
          />
        </a>

        {/* Sidebar */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 transition-opacity duration-300",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
          aria-hidden={!isOpen}
        >
          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav
              className="max-lg:relative max-lg:z-2 max-lg:my-auto"
              aria-label="Sidebar navigation"
            >
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="únete" onClick={() => setIsOpen(false)} />
                  <div className="dot" />
                  <NavLink
                    title="beneficios"
                    onClick={() => setIsOpen(false)}
                  />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="cursor-pointer transition-transform duration-500 max-lg:hidden"
                    aria-label="Scroll to hero"
                  >
                    <Image
                      src="assets/core/logo_timaski-lg.svg"
                      width={200}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" onClick={() => setIsOpen(false)} />
                  <div className="dot" />
                  <NavLink title="demo" onClick={() => setIsOpen(false)} />
                </li>
              </ul>
            </nav>

            {/* Background Outlines */}
            <div className="absolute left-0 top-1/2 block h-[380px] w-[960px] -translate-y-1/2 translate-x-[-290px] rotate-90 lg:hidden">
              <Image
                src="assets/svg/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <Image
                src="assets/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/25 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Image
            src={`assets/svg/${isOpen ? "close" : "magic"}.svg`}
            alt={isOpen ? "Close icon" : "Menu icon"}
            className="object-contain lg:object-cover"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
