"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./about.module.css";

export default function Aboutus() {
  return (
    <main className={styles.page}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.kicker}>MORE THAN JUST AN ADDRESS</div>

          <p className={styles.heroSub}>
            Anywhere is a virtual office provider for businesses that want a
            reliable UK address and a service that is properly looked after.
          </p>

          <h1 className={styles.heroTitle}>ABOUT US</h1>

          <div className={styles.scrollHint}>
            <span>SCROLL TO EXPLORE</span>
            <div className={styles.scrollLine} />
          </div>
        </div>

        {/* big background word effect */}
        <div className={styles.heroGhost} aria-hidden="true">
          ABOUT
        </div>
      </section>

      {/* SECTION 1 */}
      <section className={styles.sectionWhite}>
        <div className={`container ${styles.twoCol}`}>
          <div className={styles.leftBrand}>
            <div className={styles.quality}>
              <div className={styles.qTop}>Quality</div>
              <div className={styles.qMid}>over</div>
              <div className={styles.qBot}>Quantity</div>
            </div>
            <div className={styles.philosophy}>OUR CORE PHILOSOPHY</div>
          </div>

          <div className={styles.rightText}>
            <h2 className={styles.h2}>
              We don’t run a large network of offices.
            </h2>
            <p className={styles.p}>
              We work with a small number of locations that we know well and
              manage carefully.
            </p>
            <p className={styles.pMuted}>
              This means you aren’t sharing your business address with an
              unlimited number of companies, and we have a clear understanding
              of who is using each address.
            </p>

            <div className={styles.darkCard}>
              <div className={styles.darkCardHead}>
                <span className={styles.pin} aria-hidden="true" />
                <strong>Real Experience</strong>
              </div>
              <p className={styles.darkCardP}>
                We operate our own virtual office from Albemarle Street in
                Mayfair, so we understand how the service works in practice.
              </p>
              <p className={styles.darkCardSmall}>
                We deal with post arriving every day, client requests, compliance
                checks, and the practical details that matter when you are using
                a virtual office as part of a real business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Standards */}
      <section className={styles.sectionSoft}>
        <div className={`container ${styles.standardsHead}`}>
          <h2 className={styles.h2Big}>The standards that define us.</h2>
          <div className={styles.discover}>
            <span>SCROLL TO DISCOVER</span>
            <span className={styles.arrow} aria-hidden="true">↓</span>
          </div>
        </div>

        <div className={`container ${styles.standardsGrid}`}>
          {/* Left tall card */}
          <div className={styles.tallCard}>
            <div className={styles.badgeIcon} aria-hidden="true">⚖</div>
            <h3 className={styles.cardH3}>Compliance handled in house</h3>
            <p className={styles.cardP}>
              Using a business address comes with legal responsibilities. AML and
              KYC checks are carried out by our own team and reviewed properly.
            </p>

            <div className={styles.cardFoot}>
              <div className={styles.cardFootTitle}>OUR PROMISE</div>
              <div className={styles.cardFootText}>
                We don’t outsource compliance or rush approvals. This protects
                the reputation of everyone involved.
              </div>
            </div>
          </div>

          {/* Right grid 2x2 */}
          <div className={styles.rightCards}>
            <div className={styles.whiteCard}>
              <div className={styles.whiteCardTop}>
                <span className={styles.dot} aria-hidden="true" />
                <h3 className={styles.whiteH3}>Clear Pricing</h3>
              </div>
              <p className={styles.whiteP}>
                Our pricing is fair and easy to understand. You won’t be charged
                inflated fees or unexpected extras.
              </p>

              <div className={styles.tagsRow}>
                <span className={styles.tag}>Sensible</span>
                <span className={styles.tag}>Consistent</span>
              </div>

              <div className={styles.bigCircle} aria-hidden="true">££</div>
            </div>

            <div className={styles.whiteCard}>
              <h3 className={styles.whiteH3}>Approachable Team</h3>
              <p className={styles.whiteP}>
                We are a small team by choice. That allows us to stay responsive
                and deal with queries quickly.
              </p>
              <a className={styles.link} href="#">MEET THE TEAM →</a>
            </div>

            <div className={styles.darkMini}>
              <div className={styles.bigNum}>60</div>
              <div className={styles.years}>YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.sectionDarkServices}>
        <div className={`container ${styles.servicesGrid}`}>
          <div className={styles.servicesLeft}>
            <h2 className={styles.servicesTitle}>
              Our <span>Services</span>
            </h2>
            <p className={styles.servicesP}>
              Registered office and business address services suitable for
              Companies House, HMRC, and everyday business use.
            </p>

            <div className={styles.servicePills}>
              <div className={styles.servicePill}>Mail Collection</div>
              <div className={styles.servicePill}>Forwarding</div>
              <div className={styles.servicePill}>Scan &amp; Email</div>
            </div>
          </div>

          <div className={styles.servicesRight}>
            <div className={styles.meetingCard}>
              <div className={styles.meetingTop}>
                <span className={styles.meetingIcon} aria-hidden="true">🛋</span>
                <h3 className={styles.meetingH3}>Meeting Rooms</h3>
              </div>
              <p className={styles.meetingP}>
                At selected locations, meeting rooms are available to book when
                you need a physical space for client meetings or internal
                sessions.
              </p>

              <button className={styles.meetingBtn}>View Locations</button>
            </div>
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
                alt="About us"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div>
              <h3 className={styles.ctaH3}>Talk to our team</h3>
              <p className={styles.ctaP}>
                We’ll help you choose the right location and explain how our
                compliance-first service works.
              </p>

              <div className={styles.btns}>
                <a className={styles.btnPrimary} href="#">Get in touch</a>
                <a className={styles.btnGhost} href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

