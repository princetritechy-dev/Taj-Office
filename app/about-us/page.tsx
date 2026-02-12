"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./about-us.module.css";

export default function AboutUsPage() {
  return (
    <main className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.pill}>MORE THAN JUST AN ADDRESS</div>

          <p className={styles.heroTopText}>
            Anywhere is a virtual office provider for businesses that want a reliable UK address
            and a service that is properly looked after.
          </p>

          <h1 className={styles.h1}>ABOUT US</h1>

          <div className={styles.scrollHint}>
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </div>
        </div>
      </section>

      {/* STANDARDS SECTION (matches your screenshot block) */}
      <section className={styles.standardsSection}>
        <div className={`container ${styles.standardsHead}`}>
          <h2 className={styles.h2}>The standards that define us.</h2>
          <div className={styles.discover}>
            SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
          </div>
        </div>

        <div className={`container ${styles.standardsGrid}`}>
          {/* Left Tall Card */}
          <div className={styles.tallCard}>
            <div className={styles.tallIcon} aria-hidden="true">⚖️</div>

            <h3 className={styles.cardTitle}>Compliance handled in house</h3>
            <p className={styles.cardText}>
              Using a business address comes with legal responsibilities. AML and KYC checks are
              carried out by our own team and reviewed properly.
            </p>

            <div className={styles.hr} />

            <div className={styles.promiseLabel}>OUR PROMISE</div>
            <p className={styles.promiseText}>
              We don’t outsource compliance or rush approvals. This protects the reputation of everyone involved.
            </p>
          </div>

          {/* Right 2x2 Cards */}
          <div className={styles.rightCards}>
            <div className={styles.wideCard}>
              <div className={styles.wideTop}>
                <div>
                  <div className={styles.dotTitle}>
                    <span className={styles.dot} /> Clear Pricing
                  </div>
                  <p className={styles.cardText}>
                    Our pricing is fair and easy to understand. You won’t be charged inflated fees or unexpected extras.
                  </p>

                  <div className={styles.pillsRow}>
                    <span className={styles.miniPill}>Sensible</span>
                    <span className={styles.miniPill}>Consistent</span>
                  </div>
                </div>

                <div className={styles.poundBubble}>££</div>
              </div>
            </div>

            <div className={styles.whiteCard}>
              <div className={styles.dotTitle}>
                <span className={styles.dot} /> Approachable Team
              </div>
              <p className={styles.cardText}>
                We are a small team by choice. That allows us to stay responsive and deal with queries quickly.
              </p>
              <a className={styles.link} href="#">
                MEET THE TEAM <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.darkStat}>
              <div className={styles.statNum}>60+</div>
              <div className={styles.statSub}>YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES (dark block + right card) */}
      <section className={styles.servicesSection}>
        <div className={`container ${styles.servicesGrid}`}>
          <div>
            <h2 className={styles.servicesTitle}>
              Our <span>Services</span>
            </h2>
            <p className={styles.servicesText}>
              Registered office and business address services suitable for Companies House, HMRC,
              and everyday business use.
            </p>

            <div className={styles.servicesPills}>
              <span className={styles.servicePill}>Mail Collection</span>
              <span className={styles.servicePill}>Forwarding</span>
              <span className={styles.servicePill}>Scan &amp; Email</span>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.serviceCardTop}>
              <div className={styles.serviceIcon} aria-hidden="true">🏢</div>
              <div>
                <div className={styles.serviceCardTitle}>Meeting Rooms</div>
                <div className={styles.serviceCardDesc}>
                  At selected locations, meeting rooms are available to book when you need a physical space
                  for client meetings or internal sessions.
                </div>
              </div>
            </div>

            <button className={styles.serviceBtn}>View Locations</button>
          </div>
        </div>
      </section>

      {/* CTA (optional - aap chaho to remove) */}
      <section className={styles.ctaWrap}>
        <div className="container">
          <div className={styles.cta}>
            <div className={styles.ctaMedia}>
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                alt="Partner with us"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>

            <div>
              <h3 className={styles.ctaTitle}>Partner with us</h3>
              <p className={styles.ctaText}>
                If you operate an office building and would like to explore offering virtual office services without the operational overhead, we would be happy to talk.
              </p>

              <div className={styles.ctaBtns}>
                <a className={styles.ctaPrimary} href="#">Get in touch</a>
                <a className={styles.ctaGhost} href="#">Learn More</a>
              </div>

              <small className={styles.ctaSmall}>
                We will walk you through how the partnership works and answer any questions.
              </small>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
