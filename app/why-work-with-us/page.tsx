"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

import "./listing.css"; // ✅ only this page css

export default function ListingPage() {
  return (
    <main className="listing-page">
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="pill">PARTNERSHIP PROGRAM</div>

          <h1>
            Why work with <br /> Virtual Office Anywhere
          </h1>

          <div className="hero-divider" />

          <p>
            Generate additional revenue from virtual office services, without the
            hassle that usually comes with running them.
          </p>

          <div className="hero-down" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 16l-6-6m6 6l6-6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Curved white bottom */}
        <div className="hero-curve" aria-hidden="true" />
      </section>

      {/* FLOATING CARD */}
      <section className="float-wrap">
        <div className="container">
          <div className="float-card">
            <h3>
              Virtual Office Anywhere partners with office buildings and <br />
              virtual office providers.
            </h3>

            <p>
              We operate deliberately. We don’t aim to list hundreds of buildings
              or flood a single address with large volumes of companies.
            </p>

            <div className="promise">
              <div className="promise-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"
                    stroke="#13b6a6"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="promise-small">OUR PROMISE</div>
                <div className="promise-text">
                  We work with a small number of office partners so each location
                  stays credible and well managed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE SPLIT */}
      <section className="section">
        <div className="container split">
          <div className="rev-card">
            <div className="rev-top">REVENUE SPLIT</div>

            <div className="rev-numbers">
              <div className="big">60</div>
              <div className="slash">/</div>
              <div className="small">40</div>
            </div>

            <div className="rev-bar">
              <span />
            </div>

            <div className="rev-note">
              The larger share goes to the <strong>building partner</strong>.
            </div>
          </div>

          <div className="split-text">
            <h2>A fair and transparent split</h2>
            <p>
              We believe the building should benefit properly from the address it
              provides, and we structure our partnerships to reflect that.
            </p>

            <ul className="ticks">
              <li>
                <span className="tick">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                No hidden fees
              </li>
              <li>
                <span className="tick">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                No complex pricing models
              </li>
              <li>
                <span className="tick">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                See exactly what is generated from your address
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="section">
        <div className="container">
          <div className="title-center">
            <h2>How we support you</h2>
            <div className="underline" />
          </div>

          <div className="cards">
            <div className="info-card">
              <div className="ic" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s-7-4.4-7-11V6l7-3 7 3v4c0 6.6-7 11-7 11z"
                    stroke="#13b6a6"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 12l2 2 4-5"
                    stroke="#13b6a6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>We handle the work</h3>
              <p>
                We manage client onboarding, including KYC and AML checks,
                handled thoroughly in-house.
              </p>
            </div>

            <div className="info-card">
              <div className="ic" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 14h16v6H4v-6z" stroke="#13b6a6" strokeWidth="2" />
                  <path
                    d="M7 14V7a5 5 0 0 1 10 0v7"
                    stroke="#13b6a6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Low effort for your team</h3>
              <p>
                Your role is simple. Mail is received and stored securely. You
                take care of the basics.
              </p>
            </div>

            <div className="info-card">
              <div className="ic" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11 21a9 9 0 1 1 6.36-2.64L21 22"
                    stroke="#13b6a6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 11h6"
                    stroke="#13b6a6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Strong listings</h3>
              <p>
                We create high quality, SEO optimised listings to protect the
                location and attract legitimate businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DARK */}
      <section className="dark">
        <div className="container dark-inner">
          <h2>
            Built by people who use <br />
            <span>virtual offices themselves</span>
          </h2>

          <p>
            We operate our own virtual office, so we understand how these
            services work day to day.
          </p>

          <div className="quote">
            <em>
              “We have seen the other side of the industry: unfair revenue splits,
              poor marketing, and compliance checks not carried out to standard.”
            </em>
            <strong>
              Those experiences are exactly why we built Virtual Office Anywhere
              differently.
            </strong>
          </div>

          <div className="footer-line">
            We care about long term partnerships, not quick wins.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-wrap">
        <div className="container">
          <div className="cta">
            {/* ✅ Next/Image fill: parent must be relative + height */}
            <div className="cta-media">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                alt="Partner with us"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div>
              <h3>Partner with us</h3>
              <p>
                If you operate an office building and would like to explore
                offering virtual office services without the operational overhead,
                we would be happy to talk.
              </p>

              <div className="btns">
                <a className="btn primary" href="#">
                  Get in touch
                </a>
                <a className="btn" href="#">
                  Learn More
                </a>
              </div>

              <small>
                We will walk you through how the partnership works and answer any
                questions.
              </small>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
