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

      {/* ================= WHY CHOOSE ================= */}
      <section className="section sectionWhy">
        <div className="container whyGrid">
          <div className="whyImages">
            <div className="whyCard whyCardTall">
              <div className="imgWrap">
              <Image
                src="/why1.png"   // put in /public
                alt="Office workspace"
                fill
                className="whyImg"
              />
            </div>
            </div>
            <div className="whyCard whyCardTop">
              <div className="imgWrap">
              <Image
                src="/why2.png"
                alt="Business team"
                fill
                className="whyImg"
              />
            </div>
            </div>
          </div>

          <div className="whyText">
            <h2 className="h2">
              Why Choose Virtual Office <span className="accent">Anywhere</span>
            </h2>
            <h3 className="subhead">
              A virtual office service designed to support your business
            </h3>
            <p className="muted">
              Not all virtual office providers work in the same way. We keep
              things small, personal and professional, offering a premium UK
              address with a service that is friendly, reliable and easy to
              understand.
            </p>
            <p className="muted-two">
              A UK virtual office is more than a postcode. It helps improve
              client confidence, meet UK trading expectations and strengthen
              your brand so you're seen as a real business from day one.
            </p>
          </div>
        </div>

        <div className="container benefitsCard">
          <div className="benefitsTitle">Benefits of choosing a virtual office with us</div>

          <div className="benefitsGrid">
            <ul className="checkList">
              <li>
              <Image
                src="/icon.png"
                alt="Check icon"
                width={15}
                height={20}
                className="checkIcon"
              />
                <span> A recognised business address that helps your company look credible</span>
              </li>
              <li>
                <Image
                src="/icon.png"
                alt="Check icon"
                width={15}
                height={20}
                className="checkIcon"
              />
                <span> Stronger SEO signals for customers searching in your sector</span>
              </li>
              <li>
                <Image
                src="/icon.png"
                alt="Check icon"
                width={15}
                height={20}
                className="checkIcon"
              />
                <span> Secure mail handling and friendly support </span>
              </li>
              <li>
                <Image
                src="/icon.png"
                alt="Check icon"
                width={15}
                height={20}
                className="checkIcon"
              />
                <span> Two clear packages with everything included </span>
              </li>
            </ul>

            <ul className="checkList">
              <li>
                <Image
                src="/icon.png"
                alt="Check icon"
                width={15}
                height={20}
                className="checkIcon"
              />
                <span> Privacy for your home address on public records</span>   
              </li>
              <li>
                <Image
                src="/icon.png"
                alt="Check icon"
                width={15}
                height={20}
                className="checkIcon"
              />
                <span> A place to host clients with meeting rooms available to book</span> 
              </li>
              <li>
                <Image
                src="/icon.png"
                alt="Check icon"
                width={15}
                height={20}
                className="checkIcon"
              />
                <span> Straightforward monthly pricing with no setup fees or surprise charges</span>   
              </li>
            </ul>
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
            <FeatureCard
              icon={
              <Image
                src="/symb1.png"
                alt="Premium UK Address Icon"
                width={40}
                height={40}
                className="featureIconImg"
              />
            }
              title="Premium UK Address"
              q2="What This Means"
              desc="Use your address for business documents, websites and registrations."
              note="Why it helps"
              noteText="Builds trust and strengthens your company image."
            />
            <FeatureCard
              icon={
                <Image
                src="/symb2.png"
                alt="Premium UK Address Icon"
                width={40}
                height={40}
                className="featureIconImg"
              />
              }
              title="Friendly Support"
              q2="What This Means"
              desc="Real people who help with updates and questions."
              note="Why it helps"
              noteText="A smoother experience without delays."
            />
            <FeatureCard
              icon={
                <Image
                src="/symb3.png"
                alt="Premium UK Address Icon"
                width={40}
                height={40}
                className="featureIconImg"
              />
              }
              title="Thoughtful Mail Handling"
              q2="What This Means"
              desc="Mail is received, safely managed by our team."
              note="Why it helps"
              noteText="Peace of mind and better organisation."
            />
            <FeatureCard
              icon={
                <Image
                src="/symb4.png"
                alt="Premium UK Address Icon"
                width={40}
                height={40}
                className="featureIconImg"
              />
              }
              title="Clear, Simple Pricing"
              q2="What This Means"
              desc="Two packages with no setup fees and no hidden extras."
              note="Why it helps"
              noteText="Easy budgeting and no surprise bills."
            />
            <FeatureCard
              icon={
                <Image
                src="/symb5.png"
                alt="Premium UK Address Icon"
                width={40}
                height={40}
                className="featureIconImg"
              />
              }
              title="Meeting Rooms Available"
              q2="What This Means"
              desc="Book rooms at select locations when you need them."
              note="Why it helps"
              noteText="A more polished and professional presence."
            />
            <FeatureCard
              icon={
                <Image
                src="/symb6.png"
                alt="Premium UK Address Icon"
                width={40}
                height={40}
                className="featureIconImg"
              />
              }
              title="Proper Compliance Checks"
              q2="What This Means"
              desc="We meet basic requirements and keep things secure."
              note="Why it helps"
              noteText="Helps you stay protected and meet UK requirements."
            />
          </div>
        </div>
      </section>

      {/* ================= PICK ADDRESS ================= */}
      <section className="picksection">
        <div className="container">
          <div className="pickCard">
            <div className="pickLeft">
              <div className="pill soft">FEATURED LOCATION</div>
              <h2 className="h2 light">
                Pick Your Perfect Business <br />
                Address
              </h2>
              <p className="muted lightMuted">
                Choose a professional location that supports the image you want
                for your business. Our Mayfair address is known for its
                reputation, stability and high quality surroundings.
              </p>

              <div className="locationRow">
                <div className="locIcon" aria-hidden="true">
                  <Image
                    src="/location.png"
                    alt=""
                    width={47}
                    height={47}
                    className="locIconImg"
                  />
                </div>
                <div className="locText">
                  <div className="locTitle">Mayfair, London W1</div>
                  <div className="locSub">
                    Business address for Companies House, HMRC & banking
                  </div>
                </div>
              </div>

              <button className="btn btnLight">View Plans</button>
            </div>

            <div className="pickRight">
            <div className="pickImage">
              <Image
                src="/bg1.png"
                alt="Why choose us"
                fill
                className="pickImageImg"
              />
            </div>
            </div>
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
        <StepCard
                title="Create Your Account"
                desc="Choose your address, complete checkout and open your client profile." num={""}        />
        <StepCard
                title="Upload Your Documents"
                desc="Provide ID and proof of address for verification. Our team checks everything manually." num={""}        />
        <StepCard
                title="Start Using Your Address"
                desc="Once approved, you receive your welcome email and can begin using your Mayfair address." num={""}        />
      </div>

      <div className="howFoot muted centerMax">
        Compliance is part of UK regulations, and we manage the process carefully without making it complicated for you.
      </div>
    </div>
  </div>
</section>


      {/* ================= COMPLIANCE & SECURITY ================= */}
      <section className="section-compliance">
        <div className="container complianceGrid">
          <div className="complianceLeft">
            <h2 className="h2">Compliance and Security</h2>
            <div className="pil">We keep things simple while protecting your business</div>
            <p className="muted">
              Every virtual office in the UK must follow certain checks. We make
              this as easy as possible while ensuring your business is protected.
            </p>

            <div className="miniCards">

              <div className="miniCard">
                <div className="miniIcon">
                  <Image src="/id.png" alt="" width={50} height={40} />
                </div>
                <div>
                  <div className="miniTitle">Identity and Address Documents</div>
                  <div className="miniDesc">
                    We verify your company and personal details.
                  </div>
                </div>
              </div>

              <div className="miniCard">
                <div className="miniIcon">
                  <Image src="/business.png" alt="" width={50} height={40} />
                </div>
                <div>
                  <div className="miniTitle">Business Details</div>
                  <div className="miniDesc">
                    We collect basic business information to protect your reputation.
                  </div>
                </div>
              </div>

              <div className="miniCard">
                <div className="miniIcon">
                  <Image src="/check.png" alt="" width={50} height={40} />
                </div>
                <div>
                  <div className="miniTitle">Companies House Cross Checks</div>
                  <div className="miniDesc">
                    We ensure your listing information is accurate and compliant.
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="complianceRight">
              <div className="codeCollage singleImage">
                
                <div className="imgWrap">
                  <Image
                    src="/Secure.png"   // put your real image here
                    alt="Secure compliance process"
                    fill
                    className="collageImg"
                  />
                </div>

                <div className="secureBadge">
                  <div className="play" aria-hidden="true" />
                  <div className="secureTxt">
                    <div className="secureTop">100%</div>
                    <div className="secureBot">Secure</div>
                  </div>
                </div>

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

  <PlatformCard
  icon={<Image src="/1.png" alt="" width={30} height={36} />}
  title="Mail Dashboard"
  subtitle="View mail received and track delivery requests."
/>

  <PlatformCard
    icon={<Image src="/2.png" alt="" width={30} height={36} />}
    title="Automatic Billing"
    subtitle="Manage subscriptions with clear monthly billing."
  />

  <PlatformCard
    icon={<Image src="/3.png" alt="" width={30} height={36} />}
    title="Document Vault"
    subtitle="Store important files securely."
  />

  <PlatformCard
    icon={<Image src="/4.png" alt="" width={30} height={36} />}
    title="ID Upload Portal"
    subtitle="Easy compliance document upload."
  />

  <PlatformCard
    icon={<Image src="/5.png" alt="" width={30} height={36} />}
    title="AI Chat Support"
    subtitle="Quick answers and helpful guidance."
  />

  <PlatformCard
    icon={<Image src="/6.png" alt="" width={30} height={36} />}
    title="Future Integrations"
    subtitle="More tools coming soon."
    ghost
  />

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
            avatar="/Daniel.png"
          />

          <TestimonialCard
            quote="Mail handling has been smooth from the start. The dashboard makes everything easy to manage and support replies fast."
            name="Priya"
            role="Digital Consultant"
            avatar="/Priya.png"
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
                    <div className="diffLabel">Starting Price</div>
                    <div className="diffLabel">Packages</div>
                    <div className="diffLabel">Address Quality</div>
                    <div className="diffLabel">Mail Handling</div>
                    <div className="diffLabel">Hidden Fees</div>
                    <div className="diffLabel">Client Support</div>
                  </div>

                  {/* CENTER MAIN CARD */}
                  <div className="diffCenter">
                    <div className="diffMainCard">
                      <div className="diffBrand">
                        <Image
                          src="/logo2.png"
                          alt="Virtual Office Anywhere"
                          width={180}
                          height={80}
                          className="diffLogo"
                          priority
                        />
                      </div>


                      <div className="diffMainList">
                        <div className="diffMainItem per-month">From £20 per month</div>
                        <div className="diffMainItem">Only two simple packages</div>
                        <div className="diffMainItem">No setup fees, no extras</div>
                        <div className="diffMainItem">Prestigious Mayfair</div>
                        <div className="diffMainItem collect-scan">Collect or Scan &amp; Forward</div>
                        <div className="diffMainItem collect-scan">NONE</div>
                        <div className="diffMainItem">Friendly, responsive team</div>
                      </div>

                      <button className="btn btnPrimary full diffBtn">Choose Us</button>
                    </div>
                  </div>

                  {/* RIGHT PROVIDERS CARD */}
                  <div className="diffRight">
                    <div className="diffOtherCard">
                      <div className="diffOtherHead">Large Mass Providers</div>
                      <div className="diffOtherList">
                        <div className="diffOtherItem">Often higher with add ons</div>
                        <div className="diffOtherItem">Complicated plans with extras</div>
                        <div className="diffOtherItem">Generic addresses</div>
                        <div className="diffOtherItem">Mixed locations, variable standards</div>
                        <div className="diffOtherItem">Often charged per action</div>
                        <div className="diffOtherItem">Setup fees, small charges and add ons</div>
                        <div className="diffOtherItem">Ticket queues and slow replies</div>
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
