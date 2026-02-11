"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./listing.module.css";

export default function ListingPage() {
  return (
    <main>
      <Header />

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.pill}>PARTNERSHIP PROGRAM</div>

          <h1 className={styles.h1}>
            Why work with <br /> Virtual Office Anywhere
          </h1>

          <div className={styles.heroDivider}></div>

          <p className={styles.heroP}>
            Generate additional revenue from virtual office services,
            without the hassle that usually comes with running them.
          </p>

          <div className={styles.heroDown} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
      </section>

      {/* ================= FLOATING CARD ================= */}
      <div className={styles.floatingCard}>
        <div className="container">
          <div className={styles.card}>
            <h3>
              Virtual Office Anywhere partners with office buildings and
              virtual office providers.
            </h3>

            <p>
              We operate deliberately. We don’t aim to list hundreds of
              buildings or flood a single address with large volumes of companies.
            </p>

            <div className={styles.promise}>
              <div className={styles.icon}>
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
                <small>OUR PROMISE</small>
                <div>
                  We work with a small number of office partners so each
                  location stays credible and well managed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
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
              <h3>Partner with us</h3>
              <p>
                If you operate an office building and would like to explore
                offering virtual office services without the operational
                overhead, we would be happy to talk.
              </p>

              <div className={styles.btns}>
                <a className={styles.primaryBtn} href="#">
                  Get in touch
                </a>
                <a className={styles.secondaryBtn} href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
