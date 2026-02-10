<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Why Work - Sections</title>

  <style>
    :root{
    
      --ink: #0b1b2b;
      --muted: #6a7a8a;
      --brand: #13b6a6;
      --brand-2:#0aa095;
      --navy:#0f2036;
      --card:#ffffff;
      --line:#e6eef5;
      --shadow: 0 18px 45px rgba(10, 35, 55, .12);
      --shadow-soft: 0 10px 30px rgba(10, 35, 55, .10);
      --radius: 18px;
      --radius-lg: 22px;
      --container: 1120px;
    }

    *{ box-sizing:border-box; }
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Helvetica Neue", sans-serif;
      color:var(--ink);
      background: var(--bg);
    }
    a{ color: inherit; text-decoration:none; }
    img{ max-width:100%; display:block; }

    .container{
      width:min(var(--container), calc(100% - 40px));
      margin-inline:auto;
    }

    /* ================= HERO ================= */
    .hero{
      position:relative;
      min-height: 520px;
      padding: 90px 0 160px;
      overflow:hidden;
      background:
        linear-gradient(180deg, rgba(10,24,42,.80), rgba(10,24,42,.55)),
        url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat;
      color:#fff;
    }

    .hero:after{
      content:"";
      position:absolute;
      left:0; right:0; bottom:-120px;
      height: 220px;
      background: var(--bg);
      border-top-left-radius: 140px;
      border-top-right-radius: 140px;
      filter: drop-shadow(0 -20px 40px rgba(10,24,42,.10));
    }

    .hero-inner{
      position:relative;
      z-index:2;
      text-align:center;
      max-width: 820px;
      margin: 0 auto;
    }

    .pill{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(19,182,166,.14);
      border: 1px solid rgba(19,182,166,.35);
      font-size:12px;
      letter-spacing:.08em;
      text-transform:uppercase;
      color: #bff7f1;
    }

    .hero h1{
      margin: 18px 0 10px;
      font-size: clamp(34px, 4.2vw, 54px);
      line-height:1.05;
      font-weight: 800;
      letter-spacing:-.02em;
    }

    .hero p{
      margin: 0 auto 22px;
      max-width: 620px;
      color: rgba(255,255,255,.78);
      font-size: 14px;
      line-height: 1.7;
    }

    .hero-divider{
      width: 52px;
      height: 3px;
      margin: 18px auto 22px;
      background: var(--brand);
      border-radius: 999px;
    }

    .hero-down{
      width: 34px;
      height: 34px;
      border-radius: 999px;
      display:grid;
      place-items:center;
      margin: 10px auto 0;
      background: rgba(255,255,255,.10);
      border: 1px solid rgba(255,255,255,.22);
      backdrop-filter: blur(6px);
    }
    .hero-down svg{ opacity:.9; }

    /* floating card under hero */
    .floating-card{
      position: relative;
      z-index: 3;
      margin-top: -110px;
    }
    .floating-card .card{
      background: var(--card);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow);
      padding: 28px 30px;
      max-width: 760px;
      margin: 0 auto;
      text-align:center;
      border: 1px solid rgba(230,238,245,.85);
    }
    .floating-card h3{
      margin: 0 0 10px;
      font-size: 18px;
      font-weight: 800;
      color:#1b2d43;
    }
    .floating-card p{
      margin: 0 auto 16px;
      max-width: 620px;
      font-size: 13px;
      color: var(--muted);
      line-height: 1.7;
    }

    .promise{
      text-align:left;
      background: #f7fbff;
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 14px 14px 14px 16px;
      display:flex;
      gap: 12px;
      align-items:flex-start;
      max-width: 640px;
      margin: 0 auto;
      position:relative;
    }
    .promise:before{
      content:"";
      position:absolute;
      left:0;
      top:10px;
      bottom:10px;
      width: 3px;
      border-radius: 999px;
      background: var(--brand);
    }
    .promise .icon{
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: rgba(19,182,166,.14);
      display:grid;
      place-items:center;
      flex: 0 0 auto;
      margin-left:6px; /* to clear the left bar */
    }
    .promise small{
      display:block;
      font-weight: 800;
      letter-spacing:.06em;
      text-transform:uppercase;
      color:#324a63;
      font-size: 10px;
      margin-bottom: 4px;
    }
    .promise div{
      font-size: 12px;
      color: #4a5e73;
      line-height: 1.6;
    }

    /* ================= SPLIT SECTION ================= */
    .section{
      padding: 52px 0;
    }

    .split{
      display:grid;
      grid-template-columns: 1.05fr .95fr;
      gap: 28px;
      align-items:center;
      position:relative;
    }

    /* decorative blob behind right text (like screenshot) */
    .split:before{
      content:"";
      position:absolute;
      right: -40px;
      top: -20px;
      width: 520px;
      height: 320px;
      border-radius: 80px;
      background:
        radial-gradient(closest-side, rgba(19,182,166,.10), transparent 70%),
        linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.40));
      filter: blur(.2px);
      z-index: 0;
    }

    .rev-card{
      position:relative;
      z-index:1;
      background: linear-gradient(180deg, #1a2e4a, #11243d);
      border-radius: 16px;
      padding: 26px;
      color:#fff;
      box-shadow: var(--shadow-soft);
      border: 1px solid rgba(255,255,255,.10);
      min-height: 150px;
    }
    .rev-top{
      font-size: 10px;
      letter-spacing:.08em;
      text-transform:uppercase;
      color: rgba(255,255,255,.65);
      margin-bottom: 12px;
    }
    .rev-numbers{
      display:flex;
      align-items:baseline;
      gap: 8px;
      margin-bottom: 14px;
    }
    .rev-numbers .big{
      font-size: 54px;
      line-height:1;
      font-weight: 900;
    }
    .rev-numbers .slash{
      color: rgba(255,255,255,.35);
      font-weight: 800;
    }
    .rev-numbers .small{
      font-size: 26px;
      font-weight: 800;
      color: rgba(255,255,255,.55);
    }
    .rev-bar{
      height: 8px;
      border-radius: 999px;
      background: rgba(255,255,255,.12);
      overflow:hidden;
      margin-bottom: 10px;
    }
    .rev-bar span{
      display:block;
      height:100%;
      width: 60%;
      background: linear-gradient(90deg, var(--brand), #39d8c7);
      border-radius: 999px;
    }
    .rev-note{
      font-size: 12px;
      color: rgba(255,255,255,.70);
    }

    .split-text{
      position:relative;
      z-index:1;
      padding-left: 18px;
    }
    .split-text h2{
      margin: 0 0 10px;
      font-size: 26px;
      letter-spacing:-.02em;
    }
    .split-text p{
      margin: 0 0 14px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.75;
      max-width: 520px;
    }
    .ticks{
      list-style:none;
      padding:0;
      margin:0;
      display:grid;
      gap:10px;
    }
    .ticks li{
      display:flex;
      gap:10px;
      align-items:flex-start;
      font-size: 13px;
      color:#3d566f;
    }
    .tick{
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: rgba(19,182,166,.18);
      display:grid;
      place-items:center;
      flex: 0 0 auto;
      margin-top: 1px;
    }
    .tick svg{ width: 12px; height: 12px; color: var(--brand); }

    /* ================= SUPPORT CARDS ================= */
    .title-center{
      text-align:center;
      margin-bottom: 26px;
    }
    .title-center h2{
      margin: 0;
      font-size: 22px;
      font-weight: 900;
      letter-spacing:-.02em;
    }
    .title-center .underline{
      width: 40px; height: 3px;
      background: var(--brand);
      border-radius:999px;
      margin: 10px auto 0;
    }

    .cards{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .info-card{
      background: var(--card);
      border: 1px solid rgba(230,238,245,.9);
      border-radius: 14px;
      padding: 18px;
      box-shadow: 0 10px 25px rgba(10,35,55,.06);
      min-height: 160px;
    }
 

    .ic{
      width: 40px; height: 40px;
      border-radius: 12px;
      background: rgba(19,182,166,.16);
      display:grid;
      place-items:center;
      margin-bottom: 12px;
    }
    .info-card h3{
      margin: 0 0 6px;
      font-size: 14px;
      font-weight: 900;
    }
    .info-card p{
      margin: 0;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.65;
    }

    /* ================= DARK SECTION ================= */
    .dark{
      background:
        linear-gradient(180deg, rgba(9,20,38,.88), rgba(9,20,38,.88)),
        url("https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop") center/cover no-repeat;
      color:#fff;
      padding: 70px 0;
    }

    .dark-inner{
      max-width: 820px;
      margin: 0 auto;
      text-align:center;
    }
    .dark h2{
      margin: 0 0 10px;
      font-size: 28px;
      font-weight: 900;
      letter-spacing:-.02em;
      line-height:1.15;
    }
    .dark h2 span{
      color: var(--brand);
      display:inline-block;
    }
    .dark p{
      margin: 0 auto 18px;
      max-width: 720px;
      color: rgba(255,255,255,.78);
      font-size: 13px;
      line-height: 1.75;
    }

    .quote{
      margin: 0 auto 18px;
      max-width: 760px;
      text-align:left;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.10);
      border-radius: 14px;
      padding: 16px 16px 16px 18px;
      position:relative;
      backdrop-filter: blur(6px);
    }
    .quote:before{
      content:"";
      position:absolute;
      left: 0;
      top: 10px;
      bottom: 10px;
      width: 3px;
      border-radius: 999px;
      background: var(--brand);
    }
    .quote em{
      display:block;
      font-style: italic;
      color: rgba(255,255,255,.78);
      font-size: 12px;
      line-height: 1.7;
      margin-bottom: 6px;
      padding-left: 10px;
    }
    .quote strong{
      display:block;
      color: rgba(19,182,166,.95);
      font-size: 11px;
      padding-left: 10px;
    }

    .dark .footer-line{
      margin-top: 16px;
      font-weight: 800;
      color: rgba(255,255,255,.90);
      font-size: 12px;
      letter-spacing:.02em;
    }

    /* ================= CTA CARD ================= */
    .cta-wrap{
      padding: 46px 0 78px;
    }
    .cta{
      background: linear-gradient(180deg, #13b6a6, #0ea89a);
      border-radius: 18px;
      box-shadow: var(--shadow);
      padding: 26px;
      display:grid;
      grid-template-columns: 320px 1fr;
      gap: 22px;
      align-items:center;
      border: 1px solid rgba(255,255,255,.25);
    }

    .cta-media{
      border-radius: 14px;
      overflow:hidden;
      border: 3px solid rgba(255,255,255,.65);
      box-shadow: 0 12px 30px rgba(0,0,0,.18);
    }
    .cta-media img{
      height: 220px;
      width: 100%;
      object-fit: cover;
    }

    .cta h3{
      margin: 0 0 6px;
      color:#fff;
      font-size: 26px;
      font-weight: 900;
      letter-spacing:-.02em;
    }
    .cta p{
      margin: 0 0 14px;
      color: rgba(255,255,255,.85);
      font-size: 13px;
      line-height: 1.7;
      max-width: 520px;
    }

    .btns{
      display:flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      height: 40px;
      padding: 0 18px;
      border-radius: 999px;
      font-weight: 800;
      font-size: 13px;
      border: 1px solid rgba(255,255,255,.70);
      color:#fff;
      background: transparent;
      cursor:pointer;
    }
    .btn.primary{
      background: #ffffff;
      color: #0e2a33;
      border-color: #ffffff;
    }
    .cta small{
      display:block;
      margin-top: 10px;
      color: rgba(255,255,255,.78);
      font-size: 11px;
    }
    .info-card:hover {
    border: 2px solid rgba(19, 182, 166, .55);
    box-shadow: 0 14px 34px rgba(19, 182, 166, .12), 0 10px 25px rgba(10, 35, 55, .08);
}

    /* ================= RESPONSIVE ================= */
    @media (max-width: 980px){
      .hero{ padding: 70px 0 150px; }
      .split{ grid-template-columns: 1fr; }
      .split:before{ right: -120px; top: 50px; width: 520px; height: 320px; }
      .cards{ grid-template-columns: 1fr; }
      .cta{ grid-template-columns: 1fr; }
      .cta-media img{ height: 240px; }
      .floating-card{ margin-top: -90px; }
    }

    @media (max-width: 520px){
      .floating-card .card{ padding: 20px; }
      .rev-card{ padding: 18px; }
      .rev-numbers .big{ font-size: 44px; }
      .cta{ padding: 18px; }
    }
  </style>
</head>

<body>

  <!-- HERO -->
  <section class="hero">
    <div class="container hero-inner">
      <div class="pill">PARTNERSHIP PROGRAM</div>

      <h1>Why work with<br/>Virtual Office Anywhere</h1>
      <div class="hero-divider"></div>

      <p>Generate additional revenue from virtual office services, without the hassle that usually comes with running them.</p>

      <div class="hero-down" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 16l-6-6m6 6l6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </section>

  <!-- Floating Card -->
  <div class="floating-card">
    <div class="container">
      <div class="card">
        <h3>Virtual Office Anywhere partners with office buildings and<br/>virtual office providers.</h3>
        <p>We operate deliberately. We don’t aim to list hundreds of buildings or flood a single address with large volumes of companies.</p>

        <div class="promise">
          <div class="icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#13b6a6" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <small>OUR PROMISE</small>
            <div>We work with a small number of office partners so each location stays credible and well managed.</div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Revenue Split -->
  <section class="section">
    <div class="container split">
      <div class="rev-card">
        <div class="rev-top">REVENUE SPLIT</div>
        <div class="rev-numbers">
          <div class="big">60</div>
          <div class="slash">/</div>
          <div class="small">40</div>
        </div>
        <div class="rev-bar"><span></span></div>
        <div class="rev-note">The larger share goes to the <strong>building partner</strong>.</div>
      </div>

      <div class="split-text">
        <h2>A fair and transparent split</h2>
        <p>We believe the building should benefit properly from the address it provides, and we structure our partnerships to reflect that.</p>

        <ul class="ticks">
          <li><span class="tick">
            <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span> No hidden fees</li>

          <li><span class="tick">
            <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span> No complex pricing models</li>

          <li><span class="tick">
            <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span> See exactly what is generated from your address</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Support Cards -->
  <section class="section">
    <div class="container">
      <div class="title-center">
        <h2>How we support you</h2>
        <div class="underline"></div>
      </div>

      <div class="cards">
        <div class="info-card">
          <div class="ic" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 21s-7-4.4-7-11V6l7-3 7 3v4c0 6.6-7 11-7 11z" stroke="#13b6a6" stroke-width="2"/>
              <path d="M9 12l2 2 4-5" stroke="#13b6a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>We handle the work</h3>
          <p>Running a virtual office properly takes time. We manage all client onboarding, including KYC and AML checks, handled thoroughly in-house.</p>
        </div>

        <div class="info-card">
          <div class="ic" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 14h16v6H4v-6z" stroke="#13b6a6" stroke-width="2"/>
              <path d="M7 14V7a5 5 0 0 1 10 0v7" stroke="#13b6a6" stroke-width="2"/>
            </svg>
          </div>
          <h3>Low effort for your team</h3>
          <p>Your role is simple. Mail is received and stored securely. You take care of the basics, we handle the rest.</p>
        </div>

        <div class="info-card">
          <div class="ic" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M11 21a9 9 0 1 1 6.36-2.64L21 22" stroke="#13b6a6" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 11h6" stroke="#13b6a6" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Strong listings</h3>
          <p>We create high quality, SEO optimised listings for each partner to attract legitimate businesses and protect the location.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Dark Section -->
  <section class="dark">
    <div class="container dark-inner">
      <h2>Built by people who use<br/><span>virtual offices themselves</span></h2>
      <p>We operate our own virtual office, so we understand how these services work day to day. That experience shapes how we onboard clients, manage post, and protect the reputation of each address.</p>

      <div class="quote">
        <em>“We have seen the other side of the industry: unfair revenue splits, poor marketing, and compliance checks not carried out to standard.”</em>
        <strong>Those experiences are exactly why we built Virtual Office Anywhere differently.</strong>
      </div>

      <div class="footer-line">We care about long term partnerships, not quick wins.</div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-wrap">
    <div class="container">
      <div class="cta">
        <div class="cta-media">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="Partner with us" />
        </div>

        <div>
          <h3>Partner with us</h3>
          <p>If you operate an office building and would like to explore offering virtual office services without the operational overhead, we would be happy to talk.</p>

          <div class="btns">
            <a class="btn primary" href="#">Get in touch</a>
            <a class="btn" href="#">Learn More</a>
          </div>

          <small>We will walk you through how the partnership works and answer any questions.</small>
        </div>
      </div>
    </div>
  </section>

</body>
</html>
