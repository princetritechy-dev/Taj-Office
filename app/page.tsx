"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import PlatformCard from "./PlatformCard";
import Header from "./components/header";
import Footer from "./components/footer";

export const dynamic = "force-dynamic"; // (optional; mostly for server components)


type ContentBox = {
  content_box: string;
};
type DifferenceContent = {
  first_difference_content: {
    difference_content: ContentBox[];
  };
  second_difference_content: {
    difference_content: ContentBox[];
  };
  third_difference_content: {
    difference_content: ContentBox[];
  };
};


type Step = {
  title: string;
  description: string;
};
type ACFImage = {
  url: string;
  alt?: string;
};
type platform = {
  icon_image: ACFImage;
  feature_title: string;
  feature_subtitle: string;
}

type FAQ = {
  question: string;
  answer: string;
};
type HeroButton = {
  button_text?: string;
  button_link?: {
    title?: string;
    url?: string;
    target?: string;
  };
};
type Benefit = {
  benefit_content?: string;
}

type WPPage = {
  id: number;
  title: string;
  slug: string;
  acf?: {
    main_heading?: string;
    sub_heading?: string;
    bottom_content?: string;
    address_content?: string;
    hero_buttons?: HeroButton[];
    hero_note?: string;
    hero_image?: ACFImage;
    why_section?: {
      why_image_first?: ACFImage;  // Image for "Why First"
      why_image_second?: ACFImage; // Image for "Why Second"
      why_heading?: string;
      why_sub_heading?: string;
      why_paragraph_one?: string;
      why_paragraph_two?: string;
    };
    benefits_section?: Benefit[];
    what_you_recieve_section?: {
      icon_image?: ACFImage;
      title?: string;
      question?: string;
      description?: string;
      note?: string;
      note_text?: string;
    }[];
    how_it_work_section?: Step[];
    platform_features_section?: platform[];
    first_difference_content?: {
      difference_content: ContentBox[];
    };
    second_difference_content?: {
      difference_content: ContentBox[];
    };
    third_difference_content?: {
      difference_content: ContentBox[];
    }
  };
};

const faqs: FAQ[] = [
    {
      question: "What is a virtual office and how does it work?",
      answer:
        "A virtual office gives your company a professional UK business address with mail handling. You use the address on your website, invoices and registrations.",
    },
    {
      question: "Do you charge setup fees or add ons?",
      answer:
        "No. We have two simple packages with everything included. No setup fees, no hidden extras.",
    },
    {
      question: "Can I use the address as my registered office?",
      answer:
        "Yes. Our Mayfair address is suitable for registered office use and helps keep your home address private.",
    },
    {
      question: "How does a virtual office help with SEO?",
      answer:
        "Search engines use local business signals. A clear, local address can improve trust and visibility for location-based searches.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most clients can be set up the same day once documents are uploaded and approved.",
    },
  ];

  

export default function HomePage() {
  const [page, setPage] = useState<WPPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const base = process.env.NEXT_PUBLIC_WP_API;
        const id = process.env.NEXT_PUBLIC_HOME_PAGE_ID || "8";

        if (!base) {
          throw new Error(
            "Missing NEXT_PUBLIC_WP_API. Add it in .env.local and restart `npm run dev`."
          );
        }

        const url = `${base}/wp-json/custom/v1/page/${id}`;
        const res = await fetch(url, { cache: "no-store" });

        if (!res.ok) {
          const t = await res.text();
          throw new Error(`WP API Error: ${res.status}\n${t.slice(0, 300)}`);
        }

        const data: WPPage = await res.json();
        setPage(data);
      } catch (e: any) {
        console.error(e);
        setErrorText(e?.message || "Failed to load WP content");
        setPage(null);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const heroTitleFull = page?.acf?.main_heading || "Your UK Business Address. Anywhere.";

  const [heroTitle1, heroTitle2] = useMemo(() => {
    const parts = heroTitleFull.split(" Address.");
    if (parts.length > 1) {
      return [parts[0].trim(), `Address. ${parts.slice(1).join(" Address.").trim()}`];
    }
    const words = heroTitleFull.trim().split(/\s+/);
    if (words.length <= 3) return [heroTitleFull, ""];
    const cut = Math.max(2, Math.floor(words.length / 2));
    return [words.slice(0, cut).join(" "), words.slice(cut).join(" ")];
  }, [heroTitleFull]);

  const heroDesc = page?.acf?.sub_heading || "";

  if (loading) return <div className="container" style={{ padding: 24 }}>Loading...</div>;
  if (errorText) return <div className="container" style={{ padding: 24 }}>{errorText}</div>;

  return (
    <div className="page">
      <Header />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="heroBg" aria-hidden="true" />
        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="pill">
              <Image
                src="/images/icon-top.png"
                alt="Check icon"
                width={8}
                height={8}
                className="dotIcon"
              />
              <span>Live in 24 HOURS</span>
            </div>

            <h1 className="h1">
              {heroTitle1} <br />
              {heroTitle2 ? heroTitle2.split(" ").slice(0, 1).join(" ") : ""}{" "}
              {heroTitle2 ? <span>{heroTitle2.split(" ").slice(1).join(" ")}</span> : null}
            </h1>

            <p className="lead">{heroDesc}</p>

            {page?.acf?.hero_buttons?.length ? (
              <div className="heroCtas">
                {page.acf.hero_buttons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn?.button_link?.url || "#"}
                    target={btn?.button_link?.target || "_self"}
                    className={`btn ${index === 0 ? "btnPrimary" : "btnGhost"}`}
                  >
                    {btn?.button_text || btn?.button_link?.title || "Button"}
                  </a>
                ))}
              </div>
            ) : null}



            <div className="heroNote">
                {page?.acf?.hero_note && (
                  <p>{page.acf.hero_note}</p>
                )}
            </div>
          </div>

          <div className="heroRight">
            <div className="heroMediaCard">
              <div className="collage">
                <div className="collageTop">
                  <div className="imgWrap">
                    {page?.acf?.hero_image?.url && (
                      <Image
                        src={page.acf.hero_image.url}
                        alt={page.acf.hero_image.alt ?? "Hero Image"}
                        fill
                        className="collageImg"
                        priority
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="statusPill">
              <div className="statusIcon" aria-hidden="true" />
              <div className="statusText">
                <div className="statusLabel">STATUS</div>
                <div className="statusValue">Mail Received</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE ================= */}
      <section className="section sectionWhy">
        <div className="container whyGrid">
          <div className="whyImages">
            <div className="whyCard whyCardTall">
              <div className="imgWrap">
                {page?.acf?.why_section?.why_image_first?.url && (
                  <Image
                    src={page.acf.why_section.why_image_first.url}
                    alt={page.acf.why_section.why_image_first.alt || "Why Image First"}
                    fill
                    className="whyImg"
                  />
                )}
              </div>
            </div>

            <div className="whyCard whyCardTop">
              <div className="imgWrap">
                {page?.acf?.why_section?.why_image_second?.url && (
                  <Image
                    src={page.acf.why_section.why_image_second.url}
                    alt={page.acf.why_section.why_image_second.alt || "Why Image Second"}
                    fill
                    className="whyImg"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="whyText">
            <h2 className="h2">{page?.acf?.why_section?.why_heading}</h2>
            <h3 className="subhead">{page?.acf?.why_section?.why_sub_heading}</h3>
            <p className="muted">{page?.acf?.why_section?.why_paragraph_one}</p>
            <p className="muted-two">{page?.acf?.why_section?.why_paragraph_two}</p>
          </div>
        </div>

        <div className="container benefitsCard">
          <div className="benefitsTitle">
            Benefits of choosing a virtual office with us
          </div>


          <div className="benefitsGrid">
          {page?.acf?.benefits_section?.map((benefit: Benefit, index) => (
          <ul className="checkList" key={index}>
            <li>
              <span>{benefit?.benefit_content}</span> {/* Update 'benefit_content' field name */}
            </li>
          </ul>
        ))}
      </div>


        </div>
      </section>

      {/* ================= WHAT YOU RECEIVE ================= */}
      <section className="section">
        <div className="container">
          <div className="centerTitle">
            <h2 className="h2">What You Receive</h2>
            <div className="titleUnderline" aria-hidden="true" />
          </div>

          <div className="cardsGrid">
              {page?.acf?.what_you_recieve_section?.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon_image?.url ? (
                    <Image
                      src={item.icon_image.url}
                      alt={item.icon_image.alt || "Icon Image"}
                      width={40}
                      height={40}
                    />
                  ) : null} 
                  title={item.title || "Default Title"}
                  q2={item.question || "What This Means"} 
                  desc={item.description || "Description not available."} 
                  note={item.note || "Why it helps"} 
                  
                  noteText={item.note_text || "Default note text"}  
                />
              ))}
            </div>






        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section-how-work">
  <div className="container">
    <div className="centerTitle">
      <div className="pill soft-two">Simple process</div>
      <h2 className="h2">How It Works</h2>
      <p className="muted centerMax">
        A simple setup with support at every step. We keep the process clear so you
        always know what comes next.
      </p>
    </div>

    <div className="howWrap">
      {/* Track (circles + line) */}
      <div className="howTrack" aria-hidden="true">
        <div className="howLine" />
        <div className="howNodes">
          <div className="howNode">
            <div className="howCircle howCircleIdle">1</div>
          </div>

          <div className="howNode">
            <div className="howCircle howCircleActive">
              2
              <span className="howActiveRing" />
            </div>
          </div>

          <div className="howNode">
            <div className="howCircle howCircleDone">
              ✓
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="howCards">
        {(page?.acf?.how_it_work_section) && page.acf.how_it_work_section.map((Step, index) => (
              <StepCard
                title={Step.title}
                desc={Step.description}
              />
        ))}

      </div>

      <div className="howFoot muted centerMax">
        Compliance is part of UK regulations, and we manage the process carefully without making it complicated for you.
      </div>
    </div>
  </div>
</section>

      {/* ================= PLATFORM FEATURES ================= */}
      <section className="section-platform">
        <div className="container platform">
          <div className="platformTitle">
            <h2 className="h2">Platform Features</h2>
            <p className="muted">
              Everything you need in one place. Your client dashboard gives you
              access to tools that make managing your virtual office simple.
            </p>
          </div>

          <div className="platformGrid">
          {page?.acf?.platform_features_section?.map((platform, index) => (
            <PlatformCard
              key={index}
              icon={<Image src={platform.icon_image.url} alt={platform.feature_title} width={30} height={36} />}
              title={platform.feature_title}
              subtitle={platform.feature_subtitle}
            />
          ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section dark">
        <div className="container">
          <div className="centerTitle darkTitle">
            <h2 className="h2 light">Trusted by businesses of all sizes</h2>
          </div>

          <div className="testGrid">
            <TestimonialCard
              quote="Setting up our UK business address was quick and stress free. The team was incredibly helpful and the Mayfair location gives our company real presence."
              name="Daniel"
              role="Executive Owner"
              avatar="/images/Daniel.png"
            />
            <TestimonialCard
              quote="Mail handling has been smooth from the start. The dashboard makes everything easy to manage and support replies fast."
              name="Priya"
              role="Digital Consultant"
              avatar="/images/Priya.png"
            />
          </div>
        </div>
      </section>


      {/* ================= SEE THE DIFFERENCE ================= */}
      <section className="section-see-difference">
              <div className="container">
                <div className="diffHead">
                  <h2 className="h2 diffTitle">See the Difference</h2>
                  <p className="muted diffSub">Why businesses switch to Virtual Office Anywhere.</p>
                </div>

                <div className="diffWrap">
  {/* LEFT LABELS */}
  <div className="diffLeft">
    {Array.isArray(page?.acf?.first_difference_content?.difference_content) ? (
      page?.acf?.first_difference_content?.difference_content?.map((item: ContentBox, index: number) => (
        <div key={index} className="diffLabel">
          {item.content_box}
        </div>
      ))
    ) : (
      <div>No data available</div> // Display a fallback message if it's not an array
    )}
  </div>

  {/* CENTER MAIN CARD */}
  <div className="diffCenter">
    <div className="diffMainCard">
      <div className="diffBrand">
        <Image
          src="/images/logo2.png"
          alt="Virtual Office Anywhere"
          width={180}
          height={80}
          className="diffLogo"
          priority
        />
      </div>

      <div className="diffMainList">
        {Array.isArray(page?.acf?.second_difference_content?.difference_content) ? (
          page?.acf?.second_difference_content?.difference_content?.map((item: ContentBox, index: number) => (
            <div key={index} className="diffMainItem per-month">
              <div dangerouslySetInnerHTML={{ __html: item.content_box }} />
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>

      <button className="btn btnPrimary full diffBtn">Choose Us</button>
    </div>
  </div>

  {/* RIGHT PROVIDERS CARD */}
  <div className="diffRight">
    <div className="diffOtherCard">
      <div className="diffOtherHead">Large Mass Providers</div>
      <div className="diffOtherList">
        {Array.isArray(page?.acf?.third_difference_content?.difference_content) ? (
          page?.acf?.third_difference_content?.difference_content?.map((item: ContentBox, index: number) => (
            <div key={index} className="diffOtherItem">
              {item.content_box}
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  </div>
</div>

              </div>
      </section>
      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function FeatureCard(props: {
  icon: React.ReactNode;
  title: string;
  q2: string;
  desc: string;
  note: string;
  noteText: string;
}) {
  return (
    <div className="featureCard">
      <div className="featureIcon">{props.icon}</div>
      <div className="featureTitle">{props.title}</div>
      <div className="featureq2">{props.q2}</div>
      <div className="featureDesc">{props.desc}</div>
      <div className="featureNote">
        <div className="noteHead">{props.note}</div>
        <div className="noteText">{props.noteText}</div>
      </div>
    </div>
  );
}

function StepCard(props: {
  title: string;
  desc: string;
  active?: boolean;
  done?: boolean;
}) {
  return (
    <div className={`stepCard ${props.active ? "active" : ""} ${props.done ? "done" : ""}`}>
      <div className="stepTitle">{props.title}</div>
      <div className="stepDesc">{props.desc}</div>
    </div>
  );
}

function TestimonialCard(props: {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}) {
  return (
    <div className="testCard">
      <div className="testStars" aria-hidden="true">★★★★★</div>
      <div className="testQuote">“{props.quote}”</div>

      <div className="testPerson">
        <div className="testAvatar">
          {props.avatar ? (
            <Image src={props.avatar} alt="" width={28} height={28} className="testAvatarImg" />
          ) : (
            <span className="testAvatarFallback" aria-hidden="true" />
          )}
        </div>

        <div className="testMeta">
          <div className="testName">{props.name}</div>
          <div className="testRole">{props.role}</div>
        </div>
      </div>
    </div>
  );
}
