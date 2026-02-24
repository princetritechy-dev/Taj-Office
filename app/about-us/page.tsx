
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import "./about.css"; 

export const dynamic = "force-dynamic"; 


async function getAboutPage() {
  const res = await fetch(
    "https://lavender-alligator-176962.hostingersite.com/index.php/wp-json/wp/v2/pages/24",
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.log("❌ API failed");
    return null;
  }

  return res.json();

}


export default async function AboutUsPage() {
  const page = await getAboutPage();


   console.log("ABOUT PAGE DATA---:", page.acf.secound_section__content.heading);


  const h1 = page?.acf?.banner?.main_heading;
  const benefits = page?.acf?.benefits_section ?? [];



  
  const banner = page?.acf?.[""] || {};
 const kicker = banner?.heading;
const subText =
  banner?.subheading;
const pageName =
  banner?.page_name ||
  page?.title?.rendered ||
  "ABOUT US";
  const section2 = page?.acf?.secound_section__content || {};
  const section3 = page?.acf?.third_section_content || {};
  const services = page?.acf || {};

const leftIconUrl = await getMediaUrl(section3?.left_section_icon_image);
const rightIconUrl = await getMediaUrl(section3?.right_side_upper_section_icon);

const servicesImageUrl = await getMediaUrl(services?.our_services_right_image);
  const partnerImageUrl = await getMediaUrl(services?.partner_with_us_image);


  async function getMediaUrl(id: number | null | undefined): Promise<string | null> {
  if (!id) return null;

  const res = await fetch(
    `https://lavender-alligator-176962.hostingersite.com/index.php/wp-json/wp/v2/media/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const media: { source_url?: string } = await res.json();
  return media?.source_url ?? null;
}
   
  return (
    <main className="about-page">
      <Header />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-top">
            <div className="hero-kicker">{kicker}</div>
            <p className="hero-sub">
              {subText}
            </p>
          </div>

          <h1 className="hero-title">{pageName}</h1>

          <div className="scroll-hint">
            SCROLL TO EXPLORE <span className="scroll-arrow" aria-hidden="true">↓</span>
          </div>
        </div>
      </section>

      {/* ================= QUALITY + EXPERIENCE ================= */}
      <section className="section">
        <div className="container quality-grid">
          {/* Left logo/heading */}
          <div className="quality-left">
           <div className="quality-mark">
              <div
                className="qm-line1"
                dangerouslySetInnerHTML={{ __html: section2?.heading || "" }}
              />
            </div>
            <div className="quality-caption">{section2?.sub_heading}</div>
          </div>

          {/* Right content */}
          <div className="quality-right">
            <h2 className="h2">
              {section2?.right_heading}
            </h2>
            <p className="muted">
              {section2?.right_content}
            </p>

            
          </div>
        </div>

        <div className="container real-row">
             <div className="experience-card">
              <div className="exp-icon" aria-hidden="true"> <Image
                src="/images/map.png"
                alt="Check icon"
                width={8}
                height={8}
                className="dotIcon"
              />
              </div>
              <div>
                <div className="exp-title">{section2?.box__heading}</div>
                <p
                className="exp-text"
                dangerouslySetInnerHTML={{ __html: section2?.box_sub_heading || "" }}
                />

                <p
                className="exp-text small"
                dangerouslySetInnerHTML={{ __html: section2?.box_content || "" }}
                />
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
            <div className="card-icon" aria-hidden="true"> 
              <Image
                src={leftIconUrl ?? "/images/weight.png"}
                alt="Check icon"
                width={8}
                height={8}
                className="dotIcon"
              />
            </div>
            <h3 className="card-title">{section3?.left_section_heading}</h3>
            <p className="card-text">
              {section3?.left_section_summary}
            </p>


            <div className="card-bottom">
                <div className="card-divider" />
              <div className="card-label">{(section3?.left_section_lower_heading).toUpperCase()}</div>
              <div className="card-small">
                {section3?.left_section_lower_paragraph}
              </div>
            </div>
          </div>

          {/* Right column cards */}
          <div className="right-stack">
            <div className="card pricing-card">
              <div className="pricing-top">
                <div className="dot" aria-hidden="true" />
                <div className="pricing-title">{section3?.right_side_upper_section_heading}</div>
              </div>

              <p className="card-text">
                {section3?.right_side_upper_section_paragraph}
              </p>

              <div className="tags">
                {section3?.clear_pricing_button_text ? (
                      <span className="tag">{section3.clear_pricing_button_text}</span>
                    ) : null}
                    {section3?.clear_pricing_button_two ? (
                      <span className="tag">{section3.clear_pricing_button_two}</span>
                    ) : null}
              </div>

              <div className="money-badge" aria-hidden="true">££</div>
            </div>

            <div className="card team-card">
              <div className="team-title">{section3?.right_side_lower_left_section_heading}</div>
              <p className="card-text">
                {section3?.approachable_team_paragraph}
              </p>
              <a
                className="text-link"
                href={section3?.approachable_team_link?.url || "#"}
                target={section3?.approachable_team_link?.target || undefined}
                rel={section3?.approachable_team_link?.target === "_blank" ? "noreferrer" : undefined}
              >
                {(section3?.approachable_team_link_text || "Meet the team").toUpperCase()} →
              </a>
            </div>

            <div className="card years-card">
              <div className="years-num">{section3?.years_experience ?? ""}</div>
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
              {services?.our_services_heading || "Our Services"}
            </h2>

            <p className="services-text">
              {services?.our_services_heading_subheading}
            </p>

            <div className="service-pills">
              {services?.our_services_button?.map((btn: any, index: number) => (
                <span key={index} className="pill-btn">
                {btn?.our_services_button_label}
                </span>
                ))}
            </div>
          </div>

          <div className="services-right">
            <div className="service-card">
              <div className="service-card-top">
                <div className="service-ic" aria-hidden="true"> 
                 <Image
                src="/images/meeting.png"
                alt="Check icon"
                width={15}
                height={15}
                className="dotIcon"
              />
                </div>
                <div className="service-card-title">{services?.our_services_right_title}</div>
              </div>

              <p className="service-card-text">
                {services?.our_services_right_paragraph}
              </p>

              <a
                className="service-btn"
                href={services?.our_services_button_link?.url}
                target={services?.our_services_button_link?.target}
                rel={
                  services?.our_services_button_link?.target === "_blank"
                    ? "noreferrer"
                    : undefined
                }
              >
                {services?.our_services_right_button}
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



