"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";

const defaultLinks = [
  { href: "#home", text: "Home", className: "active" },
  { href: "#about", text: "About" },
  { href: "#portfolio", text: "Portfolio" },
  { href: "#contact", text: "Contact" },
];

export default function Header2({ links }) {
  const menuLinks = links?.length ? links : defaultLinks;
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <Link href="/" className="logo font-alt flex items-center gap-0">
          {/* Text before the logo image */}
          <span
            className="logo-text tracking-tight"
            style={{ fontSize: "2rem", display: "inline-block" }}
          >
            Code_
          </span>

          {/* Light Mode Logo */}
          <Image
            src="/assets/images/Code_V_Logo.png"
            alt="Code_V Logo"
            width={30}
            height={30}
            style={{ width: 30, height: "auto" }}
            className="light-mode-logo inline-block align-middle"
          />

          {/* Dark Mode Logo */}
          <Image
            src="/assets/images/Code_V_LogoEdited.png"
            alt="Code_V Logo"
            width={30}
            height={30}
            style={{ width: 30, height: "auto" }}
            className="dark-mode-logo inline-block align-middle"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={menuLinks} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          <li>
            <a href="#contact" className="opacity-1 no-hover">
              <span
                className="btn btn-mod btn-small btn-border btn-border-white btn-circle ttn"
                data-btn-animate="y"
              >
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">
                    Let’s talk{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Let’s talk{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
