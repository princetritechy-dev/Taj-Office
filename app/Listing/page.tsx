"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./listing.module.css";

export default function ListingPage() {
  return (
    <main className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.pill}>PARTNERSHIP PROGRAM</div>

          <h1 className={styles.heroH1}>
            Why work with <br /> Virtual Office Anywhere
          </h1>

          <div className={styles.heroDivider} />

          <p className={styles.heroP}>
            Generate additional revenue from virtual office services, without the
            hassle that usually comes with running them.
          </p>

          <div className={styles.heroDown} aria-hidden="true">
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

        {/* Curved white shape */}
        <div className={styles.heroCurve} aria-hidden="true" />
      </section>

      {/* FLOATING CARD */}
      <section className={styles.floatWrap}>
        <div className={`container ${styles.floatContainer}`}>
          <div className={styles.floatCard}>
            <h3 className={styles.floatTitle}>
              Virtual Office Anywhere partners with office buildings and <br />
              virtual office providers.
            </h3>

            <p className={styles.floatDesc}>
              We operate deliberately. We don’t aim to list hundreds of buildings
              or flood a single address with large volumes of companies.
            </p>

            <div className={styles.promise}>
              <div className={styles.promiseIcon} aria-hidden="true">
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
                <div className={styles.promiseSmall}>OUR PROMISE</div>
                <div className={styles.promiseText}>
                  We work with a small number of office partners so each location
                  stays credible and well managed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE SPLIT */}
      <section className={styles.section}>
        <div className={`container ${styles.split}`}>
          <div className={styles.revCard}>
            <div className={styles.revTop}>REVENUE SPLIT</div>

            <div className={styles.revNums}>
              <div className={styles.revBig}>60</div>
              <div className={styles.revSlash}>/</div>
              <div className={styles.revSmall}>40</div>
            </div>

            <div className={styles.revBar}>
              <span />
            </div>

            <div className={styles.revNote}>
              The larger share goes to the <strong>building partner</strong>.
            </div>
          </div>

          <div className={styles.splitText}>
            <h2 className={styles.h2}>A fair and transparent split</h2>
            <p className={styles.muted}>
              We believe the building should benefit properly from the address it
              provides, and we structure our partnerships to reflect that.
            </p>

            <ul className={styles.ticks}>
              <li>
                <span className={styles.tick}>
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
                <span className={styles.tick}>
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
                <span className={styles.tick}>
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

      {/* SUPPORT CARDS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centerTitle}>
            <h2 className={styles.h2}>How we support you</h2>
            <div className={styles.underline} />
          </div>

          <div className={styles.cards}>
            <div className={styles.infoCard}>
              <div className={styles.ic} aria-hidden="true">
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

            <div className={styles.infoCard}>
              <div className={styles.ic} aria-hidden="true">
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

            <div className={styles.infoCard}>
              <div className={styles.ic} aria-hidden="true">
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

      {/* DARK SECTION */}
      <section className={styles.dark}>
        <div className={`container ${styles.darkInner}`}>
          <h2 className={styles.darkH2}>
            Built by people who use <br />
            <span>virtual offices themselves</span>
          </h2>

          <p className={styles.darkP}>
            We operate our own virtual office, so we understand how these
            services work day to day.
          </p>

          <div className={styles.quote}>
            <em>
              “We have seen the other side of the industry: unfair revenue
              splits, poor marketing, and compliance checks not carried out to
              standard.”
            </em>
            <strong>
              Those experiences are exactly why we built Virtual Office Anywhere
              differently.
            </strong>
          </div>

          <div className={styles.footerLine}>
            We care about long term partnerships, not quick wins.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaWrap}>
        <div className="container">
          <div className={styles.cta}>
            <div className={styles.ctaMedia}>
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                alt="Partner with us"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div>
              <h3 className={styles.ctaH3}>Partner with us</h3>
              <p className={styles.ctaP}>
                If you operate an office building and would like to explore
                offering virtual office services without the operational
                overhead, we would be happy to talk.
              </p>

              <div className={styles.btns}>
                <a className={styles.btnPrimary} href="#">
                  Get in touch
                </a>
                <a className={styles.btnGhost} href="#">
                  Learn More
                </a>
              </div>

              <small className={styles.ctaSmall}>
                We will walk you through how the partnership works and answer
                any questions.
              </small>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
