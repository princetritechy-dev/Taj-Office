

import Image from "next/image";
import { useMemo } from "react";
import PlatformCard from "./PlatformCard";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";


async function getHomePage() {
  const res = await fetch(
    "https://lavender-alligator-176962.hostingersite.com/index.php/wp-json/wp/v2/pages?slug=home",
    { cache: "force-cache" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] ?? null;
}


export default async function HomePage() {

    const page = await getHomePage();
    const h1 = page?.acf?.main_heading

  return (
    <main>
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
              <span>
              Live in 24 HOURS
              </span>
            </div>

            <h1 className="h1"> Your UK Business <br /> Address. <br /> 
            <span className="accent">Anywhere.</span> </h1>

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

            <div className="heroNote">
              <p>
                A virtual office gives you the freedom to work from anywhere
                while keeping your company linked to a respected UK location.
                Our virtual office addresses help you build trust with clients,
                protect your privacy and strengthen your online presence. Setup
                is quick and there are no setup fees or hidden extras—just
                honest support.
              </p>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroMediaCard">
              {/* Replace these with your real images in /public/images */}
              <div className="collage">
                <div className="collageTop">
                  <div className="imgWrap">
                    <Image
                      src="/View.png"   // put this file in /public
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
    </main>
