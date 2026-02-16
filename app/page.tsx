import Image from "next/image";
import PlatformCard from "./PlatformCard";
import Header from "./components/header";
import Footer from "./components/footer";

export const dynamic = "force-dynamic"; // ✅ IMPORTANT for Vercel

async function getHomePage() {
  const res = await fetch(
    "https://lavender-alligator-176962.hostingersite.com/index.php/wp-json/wp/v2/pages?slug=home",
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] ?? null;
}

export default async function HomePage() {
    const [page, setPage] = useState<WPPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const base = process.env.WP_API;
        const id = "8";

        if (!base) {
          throw new Error(
            "Missing WP_API. Add it in .env.local and restart `npm run dev`."
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
   const heroTitleFull = page?.acf?.main_heading;

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
  const page = await getHomePage();

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

            <h1 className="h1">{heroTitle1} <br />
              {heroTitle2 ? heroTitle2.split(" ").slice(0, 1).join(" ") : ""}{" "}
              {heroTitle2 ? <span>{heroTitle2.split(" ").slice(1).join(" ")}</span> : null}</h1>

            <p className="lead">
             {heroDesc}
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
              <div className="collage">
                <div className="collageTop">
                  <div className="imgWrap">
                    <Image
                      src="/images/View.png"
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
                  src="/images/why1.png"
                  alt="Office workspace"
                  fill
                  className="whyImg"
                />
              </div>
            </div>

            <div className="whyCard whyCardTop">
              <div className="imgWrap">
                <Image
                  src="/images/why2.png"
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
          <div className="benefitsTitle">
            Benefits of choosing a virtual office with us
          </div>

          <div className="benefitsGrid">
            <ul className="checkList">
              <li>
                <Image
                  src="/images/icon.png"
                  alt="Check icon"
                  width={15}
                  height={20}
                  className="checkIcon"
                />
                <span>
                  A recognised business address that helps your company look
                  credible
                </span>
              </li>
              <li>
                <Image
                  src="/images/icon.png"
                  alt="Check icon"
                  width={15}
                  height={20}
                  className="checkIcon"
                />
                <span>Stronger SEO signals for customers searching in your sector</span>
              </li>
              <li>
                <Image
                  src="/images/icon.png"
                  alt="Check icon"
                  width={15}
                  height={20}
                  className="checkIcon"
                />
                <span>Secure mail handling and friendly support</span>
              </li>
              <li>
                <Image
                  src="/images/icon.png"
                  alt="Check icon"
                  width={15}
                  height={20}
                  className="checkIcon"
                />
                <span>Two clear packages with everything included</span>
              </li>
            </ul>

            <ul className="checkList">
              <li>
                <Image
                  src="/images/icon.png"
                  alt="Check icon"
                  width={15}
                  height={20}
                  className="checkIcon"
                />
                <span>Privacy for your home address on public records</span>
              </li>
              <li>
                <Image
                  src="/images/icon.png"
                  alt="Check icon"
                  width={15}
                  height={20}
                  className="checkIcon"
                />
                <span>A place to host clients with meeting rooms available to book</span>
              </li>
              <li>
                <Image
                  src="/images/icon.png"
                  alt="Check icon"
                  width={15}
                  height={20}
                  className="checkIcon"
                />
                <span>Straightforward monthly pricing with no setup fees or surprise charges</span>
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
              icon={<Image src="/images/symb1.png" alt="" width={40} height={40} />}
              title="Premium UK Address"
              q2="What This Means"
              desc="Use your address for business documents, websites and registrations."
              note="Why it helps"
              noteText="Builds trust and strengthens your company image."
            />
            <FeatureCard
              icon={<Image src="/images/symb2.png" alt="" width={40} height={40} />}
              title="Friendly Support"
              q2="What This Means"
              desc="Real people who help with updates and questions."
              note="Why it helps"
              noteText="A smoother experience without delays."
            />
            <FeatureCard
              icon={<Image src="/images/symb3.png" alt="" width={40} height={40} />}
              title="Thoughtful Mail Handling"
              q2="What This Means"
              desc="Mail is received, safely managed by our team."
              note="Why it helps"
              noteText="Peace of mind and better organisation."
            />
            <FeatureCard
              icon={<Image src="/images/symb4.png" alt="" width={40} height={40} />}
              title="Clear, Simple Pricing"
              q2="What This Means"
              desc="Two packages with no setup fees and no hidden extras."
              note="Why it helps"
              noteText="Easy budgeting and no surprise bills."
            />
            <FeatureCard
              icon={<Image src="/images/symb5.png" alt="" width={40} height={40} />}
              title="Meeting Rooms Available"
              q2="What This Means"
              desc="Book rooms at select locations when you need them."
              note="Why it helps"
              noteText="A more polished and professional presence."
            />
            <FeatureCard
              icon={<Image src="/images/symb6.png" alt="" width={40} height={40} />}
              title="Proper Compliance Checks"
              q2="What This Means"
              desc="We meet basic requirements and keep things secure."
              note="Why it helps"
              noteText="Helps you stay protected and meet UK requirements."
            />
          </div>
        </div>
      </section>

  <section className="business-address">
  <div className="container">
    <div className="left">
      <p  className="feature-location">Featured Location</p>
      <h2>Pick Your Perfect Business Address</h2>
      <p>Choose a professional location that supports the image you want for your business. Our Mayfair address is known for its reputation, stability, and high-quality surroundings.</p>
      <div className="mayfair"> 
        <div> 
          <Image
                  src="/images/map.png"
                  alt="Check icon"
                  className="checkIcon"
                />

        </div>
        <div className="mayfair-content"> 
          <h3 className="address">Mayfair, London W1</h3>
          <p className="address">Mayfair, London W1</p>
        </div>

      </div>
      <a href="#" className="view-plans-btn">View Plans</a>
    </div>
    <div className="right">
    <Image
                  src="/images/right.jpg"
                  alt="Check icon"
                  className="checkIcon"
                />
    </div>
  </div>
</section>

<section className="how-it-works">
  <div className="container">
    <p className="simple">Simple Process</p>
    <h2>How It Works</h2>
    <p>A simple walk-through process at every step. We help the process clear so you know what comes next.</p>
    <div className="steps">
      <div className="step">
        <span className="step-number">1</span>
          <div className="step-inner">
            <h3>Create Your Account</h3>
              <p>Choose your address, complete checkout and open your client profile.</p>
           </div>
      </div>
      <div className="step">
        <span className="step-number">2</span>
          <div className="step-inner">
               <h3>Upload Your Documents</h3>
                <p>Provide ID and proof of address for verification. Our team checks everything manually.</p>
             </div>
      </div>
      <div className="step">
        <span className="step-number">✔</span>
       <div className="step-inner">
            <h3>Start Using Your Address</h3>
            <p>Once approved, you receive your welcome email and can begin using your Mayfair address.</p>
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
              icon={<Image src="/images/1.png" alt="" width={30} height={36} />}
              title="Mail Dashboard"
              subtitle="View mail received and track delivery requests."
            />
            <PlatformCard
              icon={<Image src="/images/2.png" alt="" width={30} height={36} />}
              title="Automatic Billing"
              subtitle="Manage subscriptions with clear monthly billing."
            />
            <PlatformCard
              icon={<Image src="/images/3.png" alt="" width={30} height={36} />}
              title="Document Vault"
              subtitle="Store important files securely."
            />
            <PlatformCard
              icon={<Image src="/images/4.png" alt="" width={30} height={36} />}
              title="ID Upload Portal"
              subtitle="Easy compliance document upload."
            />
            <PlatformCard
              icon={<Image src="/images/5.png" alt="" width={30} height={36} />}
              title="AI Chat Support"
              subtitle="Quick answers and helpful guidance."
            />
            <PlatformCard
              icon={<Image src="/images/6.png" alt="" width={30} height={36} />}
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

function StepCard(props: { title: string; desc: string }) {
  return (
    <div className="stepCard">
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
      <div className="testStars" aria-hidden="true">
        ★★★★★
      </div>

      <div className="testQuote">“{props.quote}”</div>

      <div className="testPerson">
        <div className="testAvatar">
          {props.avatar ? (
            <Image
              src={props.avatar}
              alt=""
              width={28}
              height={28}
              className="testAvatarImg"
            />
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
