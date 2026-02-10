"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CSS from "../globals.css";
export default function Listing() {
    return (
        <main>
            <Header />
             <section class="hero">
    <div class="container hero-inner">
      <div class="pill">PARTNERSHIP PROGRAM</div>

      <h1>Why work with<br/>Virtual Office Anywhere</h1>
      <div class="hero-divider"></div>

      <p>Generate additional revenue from virtual office services, without the hassle that usually comes with running them.</p>

      <div class="hero-down" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 16l-6-6m6 6l6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </section>

  <!-- Floating Card -->
  <div class="floating-card">
    <div class="container">
      <div class="card">
        <h3>Virtual Office Anywhere partners with office buildings and<br/>virtual office providers.</h3>
        <p>We operate deliberately. We don’t aim to list hundreds of buildings or flood a single address with large volumes of companies.</p>

        <div class="promise">
          <div class="icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#13b6a6" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <small>OUR PROMISE</small>
            <div>We work with a small number of office partners so each location stays credible and well managed.</div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Revenue Split -->
  <section class="section">
    <div class="container split">
      <div class="rev-card">
        <div class="rev-top">REVENUE SPLIT</div>
        <div class="rev-numbers">
          <div class="big">60</div>
          <div class="slash">/</div>
          <div class="small">40</div>
        </div>
        <div class="rev-bar"><span></span></div>
        <div class="rev-note">The larger share goes to the <strong>building partner</strong>.</div>
      </div>

      <div class="split-text">
        <h2>A fair and transparent split</h2>
        <p>We believe the building should benefit properly from the address it provides, and we structure our partnerships to reflect that.</p>

        <ul class="ticks">
          <li><span class="tick">
            <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span> No hidden fees</li>

          <li><span class="tick">
            <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span> No complex pricing models</li>

          <li><span class="tick">
            <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span> See exactly what is generated from your address</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Support Cards -->
  <section class="section">
    <div class="container">
      <div class="title-center">
        <h2>How we support you</h2>
        <div class="underline"></div>
      </div>

      <div class="cards">
        <div class="info-card">
          <div class="ic" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 21s-7-4.4-7-11V6l7-3 7 3v4c0 6.6-7 11-7 11z" stroke="#13b6a6" stroke-width="2"/>
              <path d="M9 12l2 2 4-5" stroke="#13b6a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>We handle the work</h3>
          <p>Running a virtual office properly takes time. We manage all client onboarding, including KYC and AML checks, handled thoroughly in-house.</p>
        </div>

        <div class="info-card">
          <div class="ic" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 14h16v6H4v-6z" stroke="#13b6a6" stroke-width="2"/>
              <path d="M7 14V7a5 5 0 0 1 10 0v7" stroke="#13b6a6" stroke-width="2"/>
            </svg>
          </div>
          <h3>Low effort for your team</h3>
          <p>Your role is simple. Mail is received and stored securely. You take care of the basics, we handle the rest.</p>
        </div>

        <div class="info-card">
          <div class="ic" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M11 21a9 9 0 1 1 6.36-2.64L21 22" stroke="#13b6a6" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 11h6" stroke="#13b6a6" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Strong listings</h3>
          <p>We create high quality, SEO optimised listings for each partner to attract legitimate businesses and protect the location.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Dark Section -->
  <section class="dark">
    <div class="container dark-inner">
      <h2>Built by people who use<br/><span>virtual offices themselves</span></h2>
      <p>We operate our own virtual office, so we understand how these services work day to day. That experience shapes how we onboard clients, manage post, and protect the reputation of each address.</p>

      <div class="quote">
        <em>“We have seen the other side of the industry: unfair revenue splits, poor marketing, and compliance checks not carried out to standard.”</em>
        <strong>Those experiences are exactly why we built Virtual Office Anywhere differently.</strong>
      </div>

      <div class="footer-line">We care about long term partnerships, not quick wins.</div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-wrap">
    <div class="container">
      <div class="cta">
        <div class="cta-media">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="Partner with us" />
        </div>

        <div>
          <h3>Partner with us</h3>
          <p>If you operate an office building and would like to explore offering virtual office services without the operational overhead, we would be happy to talk.</p>

          <div class="btns">
            <a class="btn primary" href="#">Get in touch</a>
            <a class="btn" href="#">Learn More</a>
          </div>

          <small>We will walk you through how the partnership works and answer any questions.</small>
        </div>
      </div>
    </div>
  </section>
            <Footer />
        </main>
    )
}
