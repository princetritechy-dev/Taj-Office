 "use client";

import Header from "../components/header";
import Footer from "../components/footer";
import "./listing.css";

export default function LocationPage() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="badge">
                <span className="dot" /> Available Now
              </div>

              <h1 className="h1">
                45 Albemarle Street,
                <br />
                Mayfair
              </h1>

              <div className="priceRow">
                <div className="price">£25</div>
                <div className="per">/pcm + VAT</div>
              </div>

              <p className="discount">10% discount on annual subscriptions</p>

              <nav className="tabs" aria-label="tabs">
                <a className="tab active" href="#">
                  Services
                </a>
                <a className="tab" href="#">
                  Location
                </a>
                <a className="tab" href="#">
                  Compliance
                </a>
              </nav>

              <p className="desc">
                <b>Prestigious Mayfair</b> virtual office address.
                <br />
                Give your business the credibility of a prestigious Mayfair address in London’s most exclusive district, without the cost of physical office space.
                Our virtual office service at 45 Albemarle Street offers a professional mailing address with comprehensive mail handling options.
              </p>

              <button className="cta" type="button">
                Add to Cart
              </button>
            </div>

            <div className="heroCard">
              <div className="heroMedia">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=70"
                  alt="Buildings"
                />
                <div className="locPill">
                  <svg className="locIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  London, W1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="content">
        <div className="wrap">
          <div className="contentGrid">
            {/* Left: Services Card */}
            <div className="whiteCard">
              <h2 className="cardTitle">
                <svg className="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3 3 8l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 16l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Virtual Office Services
              </h2>

              <ul className="list">
                {[
                  { text: "Registered office address" },
                  { text: "Director service address" },
                  { text: "Secure mail handling" },
                  { text: "Free – Mail collection" },
                  { text: "Telephone line and divert", small: "+ £10.99 per month" },
                  { text: "“Pay-as-you-go” meeting rooms" },
                ].map((item, idx) => (
                  <li className="li" key={idx}>
                    <svg className="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      {item.text}
                      {item.small ? <small>{item.small}</small> : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Transport + Map */}
            <div className="rightCol">
              <h3>Transport Links</h3>

              <div className="transport">
                {[
                  { title: "Green Park Station", time: "~ 3 mins walk" },
                  { title: "Victoria Station", time: "~ 12 mins walk" },
                ].map((t, i) => (
                  <div className="tItem" key={i}>
                    <div className="tIcon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M7 3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M8 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 11h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8.5 20.5 7 22m9.5-1.5L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="tText">
                      <b>{t.title}</b>
                      <span>{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mapCard">
                <img
                  src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=60"
                  alt="Map"
                />
                <div className="mapBar">
                  <div className="mapLeft">
                    <svg className="pinMini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <div className="mapTxt">
                      <b>45 Albemarle Street</b>
                      <span>W1S 4JL, London</span>
                    </div>
                  </div>
                  <div className="tag">Mayfair</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section className="featureStrip">
        <div className="wrap">
          <div className="features">
            {[
              { title: "Verified Clients Only", desc: "Strict compliance checks for safety", icon: "usercheck" },
              { title: "Protecting your address", desc: "Keep your home address private", icon: "shield" },
              { title: "Trusted Management", desc: "Professional on-site team", icon: "users" },
            ].map((f, i) => (
              <div className="featureItem" key={i}>
                <div className="fIconWrap">
                  {f.icon === "usercheck" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M17 11l1.5 1.5L22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : f.icon === "shield" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <p className="fTitle">{f.title}</p>
                <p className="fDesc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

