import Image from "next/image";
import PlatformCard from "./PlatformCard";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export const dynamic = "force-dynamic"; // ✅ IMPORTANT for Vercel

async function getHomePage() {
  const res = await fetch(
    "https://lavender-alligator-176962.hostingersite.com/index.php/wp-json/wp/v2/pages?slug=home",
    { cache: "no-store" } // test ke liye no-store (baad me force-cache kar sakte ho)
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] ?? null;
}

export default async function HomePage() {
  const page = await getHomePage();

  // ✅ ACF value safe fallback
  const h1 = page?.acf?.main_heading || "Your UK Business Address. Anywhere.";

  return (
    <div className="page">
      <Header />

      <section className="hero">
        <div className="heroBg" aria-hidden="true" />
        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="pill">
              <Image
                src="/icon-top.png"
                alt="Check icon"
                width={8}
                height={8}
                className="dotIcon"
              />
              <span>Live in 24 HOURS</span>
            </div>

            {/* ✅ NOW USING ACF HEADING */}
            <h1 className="h1">{h1}</h1>

            {/* baaki aapka content same */}
            <p className="lead">
              A trusted UK business address from £20 a month. Choose a
              professional location for your company and enjoy simple pricing,
              friendly support and a service that helps you present your
              business well from day one.
            </p>

            <div className="heroCtas">
              <button className="btn btnPrimary">Get Started</button>
              <button className="btn btnGhost">Choose Your Address</button>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroMediaCard">
              <div className="collage">
                <div className="collageTop">
                  <div className="imgWrap">
                    <Image
                      src="/View.png"
                      alt="Office"
                      fill
                      className="collageImg"
                      priority
                    />
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

      <Footer />
    </div>
  );
}
