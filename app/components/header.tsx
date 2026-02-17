"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="nav">
      <div className="container navInner">
        <Link href="/" className="brand">
          <Image
            src="/images/logo.png"
            alt="Virtual Office Anywhere Logo"
            width={150}
            height={50}
            className="brandLogo"
            priority
          />
        </Link>

        {/* <nav className="navLinks" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/why-work-with-us">Why work with us</Link>
          <Link href="/Listing">Locations</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav> */}

        <div className="navWrapper">
            <button className="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
            </button>
            
            <nav className="navLinks" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/about-us/">About Us</Link>
            <Link href="/why-work-with-us/">Why work with us</Link>
            <Link href="/Listing/">Locations</Link>
            <Link href="/contact-us/">Contact Us</Link>
            </nav>
            </div>
      </div>
    </header>
  );
}
