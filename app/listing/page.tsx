"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CSS from "/listing.css";
export default function Listing() {
    return (
        <main>
            <Header />
                    <section className="hero">
    <div className="container hero-inner">
      <div className="pill">PARTNERSHIP PROGRAM</div>

      <h1>Why work with<br/>Virtual Office Anywhere</h1>
      <div className="hero-divider"></div>

      <p>Generate additional revenue from virtual office services, without the hassle that usually comes with running them.</p>

      <div className="hero-down" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 16l-6-6m6 6l6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </section>
            <Footer />
        </main>
    )
}
