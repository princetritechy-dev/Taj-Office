"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import "./about.css"; 
export default function AboutUsPage() {
  return (
    <main className="about-page">
      <Header />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-top">
            <div className="hero-kicker">MORE THAN JUST AN ADDRESS</div>
            <p className="hero-sub">
              Anywhere is a virtual office provider for businesses that want a reliable UK address and a service that is properly looked after.
            </p>
          </div>

          <h1 className="hero-title">ABOUT US</h1>

          <div className="scroll-hint">
            SCROLL TO EXPLORE <div className="divider-img">
              <img src="/images/Divider.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY + EXPERIENCE ================= */}
      <section className="section">
        <div className="container quality-grid">
          {/* Left logo/heading */}
          <div className="quality-left">
            <div className="quality-mark">
              <div className="qm-line1">Quality</div>
              <div className="qm-line2">over</div>
              <div className="qm-line3">Quantity</div>
            </div>
            <div className="divider"></div>
            <div className="quality-caption">OUR CORE PHILOSOPHY</div>
          </div>

          {/* Right content */}
          <div className="quality-right">
            <h2 className="h2">
              We don’t run a large network of offices. We work with a small number of locations that we know well and manage carefully.
            </h2>
            <p className="muted">
              This means you aren’t sharing your business address with an unlimited number of companies, and we have a clear understanding of who is using each address.
            </p>

            <div className="experience-card">
              <div className="experience-card-icon">
              <div className="exp-icon" aria-hidden="true"><img src="/images/loction.png" alt="" /></div>
                 <div className="exp-title">Real Experience</div>

              </div>
              <div>
              
                <p className="exp-text">
                  We operate our own virtual office from Albemarle Street in Mayfair, so we understand how the service works in practice.
                </p>
                <p className="exp-text small">
                  We deal with post arriving every day, client requests, compliance checks, and the practical details that matter when you are using a virtual office as part of a real business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STANDARDS ================= */}
      <section className="section section-light">
        <div className="container standards-head">
          <h2 className="h2">The standards that define us.</h2>

          <div className="standards-scroll">
            SCROLL TO DISCOVER <span className="scroll-arrow" aria-hidden="true">↓</span>
          </div>
        </div>

        <div className="container standards-grid">
          {/* Big left card */}
          <div className="card big-card">
            <div className="card-icon" aria-hidden="true"><img src="/images/compliance.png" alt="" srcset="" /></div>
            <h3 className="card-title">Compliance handled in house</h3>
            <p className="card-text">
              Using a business address comes with legal responsibilities. AML and KYC checks are carried out by our own team and reviewed properly.
            </p>

            <div className="card-divider" />

            <div className="card-bottom">
              <div className="card-label">OUR PROMISE</div>
              <div className="card-small">
                We don’t outsource compliance or rush approvals. This protects the reputation of everyone involved.
              </div>
            </div>
          </div>

          {/* Right column cards */}
          <div className="right-stack">
            <div className="card pricing-card">
              <div className="pricing-top">
                <div className="icon" aria-hidden="true"> <img src="/images/tag.png" alt=""/></div>
                <div className="pricing-title">Clear Pricing</div>
              </div>

              <p className="card-text">
                Our pricing is fair and easy to understand. You won’t be charged inflated fees or unexpected extras.
              </p>

              <div className="tags">
                <span className="tag">Sensible</span>
                <span className="tag">Consistent</span>
              </div>

              <div className="money-badge" aria-hidden="true"><img src="/images/currency.png" alt=""/></div>
            </div>

            <div className="card team-card">
              <div className="team-title">Approachable Team</div>
              <p className="card-text">
                We are a small team by choice. That allows us to stay responsive and deal with queries quickly. Support feels personal, not informal.
              </p>
              <a className="text-link" href="#">
                MEET THE TEAM →
              </a>
            </div>

            <div className="card years-card">
              <div className="years-num">60</div>
              <div className="years-sub">YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (DARK) ================= */}
      <section className="services-dark">
        <div className="container services-grid">
          <div className="services-left">
            <h2 className="services-title">
              Our <span>Services</span>
            </h2>
            <div className="divider"></div>

            <p className="services-text">
              Registered office and business address services suitable for Companies House, HMRC, and everyday business use.
            </p>

            <div className="service-pills">
              <span className="pill-btn">Mail Collection</span>
              <span className="pill-btn">Forwarding</span>
              <span className="pill-btn">Scan &amp; Email</span>
            </div>
          </div>

          <div className="services-right">
            <div className="service-card">
              <div className="service-card-top">
                <div className="service-ic" aria-hidden="true"><img src="/images/meeting.png" alt="" /></div>
                <div className="service-card-title">Meeting Rooms</div>
              </div>

              <p className="service-card-text">
                At selected locations, meeting rooms are available to book when you need a physical space for client meetings or internal sessions.
              </p>

              <a className="service-btn" href="#">
                View Locations
              </a>

              <div className="service-bg" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

       

      <Footer />
    </main>
  );
}



