// Jeep Repair SPA - Core Routing and Render Logic

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Global Event Listeners
  initRouter();
  initStickyHeader();
  initMobileMenu();
  initLiveChat();
  initGlobalForms();
});

// ==========================================
// ROUTER ENGINE
// ==========================================
const routes = {
  home: renderHome,
  about: renderAbout,
  services: renderServiceDetail,
  gallery: renderGallery,
  testimonials: renderTestimonials,
  faqs: renderFAQs,
  blog: renderBlog,
  book: renderBookAppointment,
  contact: renderContact,
  "service-areas": renderServiceAreas,
  sitemap: renderSitemap,
  privacy: renderPrivacy,
  terms: renderTerms,
  "thank-you": renderThankYou
};

function initRouter() {
  const handleRouting = () => {
    const hash = window.location.hash || "#home";
    const appRoot = document.getElementById("app-root");
    
    // Clear active mobile menu overlay if open
    document.getElementById("mobile-menu-overlay").classList.remove("active");

    // Scroll to top on navigation
    window.scrollTo(0, 0);

    // Parse route and parameters (e.g. #services/engine-repair or #blog/solving-jeep-death-wobble)
    const segments = hash.substring(1).split("/");
    const primaryRoute = segments[0];
    const param = segments[1] || null;

    // Highlight Active Link in Header
    updateActiveNavLink(primaryRoute);

    // Dynamic SEO and Scheme Injection based on route
    updateSEO(primaryRoute, param);

    // Route Mapping
    if (routes[primaryRoute]) {
      // Execute matching page renderer
      appRoot.innerHTML = routes[primaryRoute](param);
      
      // Initialize interactive widgets present on the newly rendered page
      postRenderWidgets(primaryRoute, param);
      
      // Trigger animations
      triggerGSAPAnimations();
    } else {
      // Fallback
      window.location.hash = "#home";
    }
  };

  window.addEventListener("hashchange", handleRouting);
  // Initial run on load
  handleRouting();
}

function updateActiveNavLink(route) {
  const links = document.querySelectorAll(".nav-menu .nav-item");
  links.forEach(item => {
    item.classList.remove("active");
    const link = item.querySelector(".nav-link");
    if (link && link.getAttribute("href") === `#${route}`) {
      item.classList.add("active");
    }
  });
}

// ==========================================
// SEO & SCHEMA MARKUP MODULE
// ==========================================
function updateSEO(route, param) {
  let title = "Jeep Repair & Maintenance | Specialist Workshop";
  let desc = "Professional, certified Jeep repairs & diagnostics using Mopar OEM parts. 24-Month warranty. Denver's leading solid axle and off-road tuning specialist.";
  let schema = null;

  // Base LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Jeep Repair Pro",
    "image": "https://github.com/BilluBadshah5618/jeep-repair/images/hero_bg.jpg",
    "telePhone": "1-800-555-5337",
    "email": "service@jeeprepairpro.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1240 Offroad Trail Drive",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "postalCode": "80201",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$"
  };

  if (route === "home") {
    title = "Jeep Repair & Maintenance | Premium Certified Specialists";
    schema = localBusinessSchema;
  } else if (route === "about") {
    title = "About Us | Jeep Repair Pro Team & Certifications";
    desc = "Learn about our expert team of ASE-certified Jeep master technicians, our off-road workshop gallery, and Mopar factory training certifications.";
  } else if (route === "services" && param) {
    const service = window.JeepData.services.find(s => s.id === param);
    if (service) {
      title = `${service.name} | Certified Jeep Repair & Diagnostics`;
      desc = `${service.description.substring(0, 150)}... Solves common Jeep problems with Mopar components.`;
      
      // Service-specific Schema
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Jeep Repair Pro"
        },
        "description": service.description,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": service.costEstimate.toString(),
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceType": "StartingPrice"
          }
        }
      };
    }
  } else if (route === "gallery") {
    title = "Jeep Project Gallery | Before/After Off-Road Builds";
    desc = "Explore our premium gallery of Jeep suspension lifts, differential re-gearing, customized wheel fitments, engine repairs, and trail project builds.";
  } else if (route === "testimonials") {
    title = "Client Testimonials & Google Reviews | Jeep Repair Pro";
    desc = "Read verified reviews from Wrangler, Gladiator, and Grand Cherokee owners detailing suspension tuning, steering fixes, and differential rebuilds.";
  } else if (route === "faqs") {
    title = "Frequently Asked Questions | Jeep Repair Pro Diagnostics";
    desc = "Find answers regarding Mopar warranties, TIPM electrical diagnostics, off-road alignment specs, and pricing estimates for Jeep maintenance.";
    
    // FAQ Schema
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": window.JeepData.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };
  } else if (route === "blog") {
    title = "Jeep Owner Resource Blog | Tech Tips & Maintenance Guides";
    desc = "Stay informed with professional articles explaining the Death Wobble, Pentastar ticking noises, pre-trail checkups, and off-road recovery procedures.";
  } else if (route === "blog" && param) {
    const blog = window.JeepData.blogs.find(b => b.id === param);
    if (blog) {
      title = `${blog.title} | Jeep Specialist Blog`;
      desc = blog.summary;
    }
  } else if (route === "book") {
    title = "Book Certified Jeep Service Online | Repair Estimator";
    desc = "Schedule your service appointment online. Choose your model, select repairs, calculate estimates, and reserve a convenient date and time.";
  } else if (route === "contact") {
    title = "Contact Jeep Repair Pro | Denver Auto Shop Location";
    desc = "Get in touch with our certified Jeep diagnostics team. Find our phone number, address, business hours, and click to message via WhatsApp.";
  } else if (route === "service-areas") {
    title = "Service Areas | Jeep Repair Denver & Surrounding Districts";
    desc = "Providing premium Jeep repair services across Denver, Boulder, Aurora, Lakewood, Westminster, Golden, Arvada, and the Front Range.";
  } else if (route === "sitemap") {
    title = "Website Sitemap | Jeep Repair Pro Directory";
    desc = "Navigate our comprehensive website directory containing all 30 Jeep service pages, blog articles, resources, and corporate info.";
  }

  // Update Page Header Elements
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", desc);

  // Inject JSON-LD Schema
  let schemaScript = document.getElementById("jsonld-schema");
  if (schemaScript) {
    schemaScript.remove();
  }
  
  if (schema) {
    schemaScript = document.createElement("script");
    schemaScript.id = "jsonld-schema";
    schemaScript.type = "application/ld+json";
    schemaScript.innerHTML = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }
}

// ==========================================
// PAGE RENDERERS
// ==========================================

function renderHome() {
  // Featured services list (select 6 for landing layout display)
  const featuredIds = ["engine-repair", "transmission-repair", "suspension-repair", "differential-repair", "4x4-system-repair", "performance-tuning"];
  const featured = window.JeepData.services.filter(s => featuredIds.includes(s.id));

  let servicesHTML = featured.map(s => `
    <div class="glass-card service-card reveal-up">
      <div class="service-card-icon"><i class="${s.icon}"></i></div>
      <h3 class="service-card-title">${s.name}</h3>
      <p class="service-card-desc">${s.description.substring(0, 110)}...</p>
      <a href="#services/${s.id}" class="service-card-link">Explore Details <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  `).join("");

  let reviewHTML = window.JeepData.testimonials.slice(0, 3).map(r => `
    <div class="glass-card testimonial-card reveal-up">
      <div>
        <div class="rating-stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
        </div>
        <p class="testimonial-comment">"${r.comment}"</p>
      </div>
      <div class="testimonial-author" style="margin-top:20px;">
        <div class="author-avatar">${r.name.charAt(0)}</div>
        <div>
          <div class="author-name">${r.name}</div>
          <div class="author-model">${r.jeepModel} - <span style="color:var(--accent-green-bright);">${r.service}</span></div>
        </div>
      </div>
    </div>
  `).join("");

  let faqHTML = window.JeepData.faqs.slice(0, 4).map(f => `
    <div class="faq-item reveal-up">
      <button class="faq-trigger">
        <span class="faq-question">${f.q}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-content">
        <div class="faq-content-inner">
          <p>${f.a}</p>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div>
          <div class="badge reveal-up">Certified Jeep Specialists</div>
          <h1 class="hero-title reveal-up">Professional Jeep <span>Repair & Upgrades</span></h1>
          <p class="hero-subtitle reveal-up">Premium diagnostics, transmission rebuilds, differential re-gearing, and Rubicon suspension services. Backed by our nationwide 2-Year/24,000-Mile Warranty.</p>
          <div class="hero-cta reveal-up">
            <button class="btn btn-primary" onclick="window.location.hash='#book'">Book Appointment</button>
            <button class="btn btn-secondary" onclick="window.location.hash='#contact'">Get Free Quote</button>
          </div>
          <div class="hero-trust reveal-up">
            <div class="trust-item"><i class="fa-solid fa-certificate"></i> ASE Certified</div>
            <div class="trust-item"><i class="fa-solid fa-shield"></i> 2-Year Warranty</div>
            <div class="trust-item"><i class="fa-solid fa-gears"></i> Mopar OEM Parts</div>
          </div>
        </div>
        <div class="hero-image-wrapper reveal-up">
          <img src="images/hero_bg.jpg" alt="Jeep Wrangler trail off-road action" class="hero-img">
        </div>
      </div>
    </section>

    <!-- Before & After Showcase -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">Trail Proven Quality</div>
          <h2>Bumper-to-Bumper Reconstructs</h2>
          <p>Drag the slider bar to view the transformation from worn factory suspensions to heavy-duty off-road Rubicon builds engineered in our facility.</p>
        </div>
        <div class="before-after-container reveal-up" id="home-before-after">
          <!-- Before image (underneath) -->
          <div class="slider-img img-before" style="background-image: url('images/jeep_before.jpg');"></div>
          <!-- After image (clipped) -->
          <div class="slider-img img-after" id="slider-clipped-img" style="background-image: url('images/jeep_after.jpg');"></div>
          <!-- Draggable handle -->
          <div class="slider-handle" id="slider-drag-handle">
            <i class="fa-solid fa-arrows-left-right"></i>
          </div>
          <div class="slider-label label-before">Factory Worn</div>
          <div class="slider-label label-after">Upgraded Rig</div>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <section class="section section-darker">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">Expert Capabilities</div>
          <h2>Our Core Services</h2>
          <p>We provide comprehensive diagnostics, minor updates, and heavy-duty drivetrain retrofitting for all modern and classic Jeep configurations.</p>
        </div>
        <div class="services-grid">
          ${servicesHTML}
        </div>
        <div class="text-center" style="margin-top: 50px;">
          <a href="#sitemap" class="btn btn-outline">View All 30+ Service Divisions <i class="fa-solid fa-list" style="margin-left:8px;"></i></a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section section-dark" style="background-image: radial-gradient(circle at 10% 80%, rgba(15, 81, 50, 0.08) 0%, rgba(0, 0, 0, 0) 50%);">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">The Shop Standard</div>
          <h2>Why Owners Trust Us</h2>
          <p>Engineered to match the high expectations of off-road enthusiasts and luxury Jeep daily drivers alike.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
          <div class="glass-card reveal-up">
            <i class="fa-solid fa-user-shield" style="font-size:2.5rem; color:var(--accent-green-bright); margin-bottom:20px;"></i>
            <h3 style="margin-bottom:12px; font-size:1.35rem;">Jeep Certifications</h3>
            <p>Our mechanics undergo rigorous manufacturer-specific validation tests to maintain diagnostics competencies across Quadra-Trac, Rock-Trac, and electronic module updates.</p>
          </div>
          <div class="glass-card reveal-up">
            <i class="fa-solid fa-wrench" style="font-size:2.5rem; color:var(--accent-green-bright); margin-bottom:20px;"></i>
            <h3 style="margin-bottom:12px; font-size:1.35rem;">Mopar OEM Products</h3>
            <p>We source authentic Mopar gears, filters, and electronics, guaranteeing perfect fitment and maintaining active status on original powertrain warranties.</p>
          </div>
          <div class="glass-card reveal-up">
            <i class="fa-solid fa-clock-history" style="font-size:2.5rem; color:var(--accent-green-bright); margin-bottom:20px;"></i>
            <h3 style="margin-bottom:12px; font-size:1.35rem;">Rapid Turnaround</h3>
            <p>From simple oil changes to quick gear swaps, our specialized bays are optimized for Jeep chassis configurations, ensuring you spend less time waiting and more time on the trail.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Cost Estimator -->
    <section class="section section-darker">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">Transparency First</div>
          <h2>Service Cost Calculator</h2>
          <p>Get an immediate, high-probability estimate for your Jeep's service needs based on model selection and parts quality preferences.</p>
        </div>
        
        <div class="glass-card calculator-card reveal-up">
          <div class="calc-grid">
            <div class="form-group">
              <label for="calc-model">Select Jeep Model</label>
              <select id="calc-model" class="form-control">
                <option value="wrangler">Jeep Wrangler (TJ/JK/JL)</option>
                <option value="gladiator">Jeep Gladiator (JT)</option>
                <option value="gcherokee">Jeep Grand Cherokee (WK/WL)</option>
                <option value="cherokee">Jeep Cherokee (XJ/KL)</option>
                <option value="renegade">Jeep Renegade / Compass</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="calc-service">Select Repair Service</label>
              <select id="calc-service" class="form-control">
                <!-- Javascript will populate all 30 options dynamically -->
              </select>
            </div>
            
            <div class="form-group" style="grid-column: 1 / -1;">
              <label for="calc-parts">Preferred Parts Class</label>
              <select id="calc-parts" class="form-control">
                <option value="aftermarket">Premium Aftermarket (Standard Fitment)</option>
                <option value="oem" selected>Genuine Mopar OEM (Recommended)</option>
                <option value="performance">Heavy-Duty Off-Road / Performance Upgrades</option>
              </select>
            </div>
          </div>
          
          <div class="calc-result">
            <h4>Estimated Repair Budget</h4>
            <div class="calc-estimate" id="calc-result-price">$0.00</div>
            <p style="margin-bottom:12px; font-size:0.9rem;" id="calc-result-range">Range: $0 - $0</p>
            <p class="calc-disclaimer">*Estimates include average labor costs. Diagnostic verification is required to finalize quotes.</p>
          </div>
          
          <div class="text-center" style="margin-top: 24px;">
            <button class="btn btn-primary" onclick="window.location.hash='#book'">Pre-Schedule This Service</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Process Section -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">The Workshop Pipeline</div>
          <h2>Bumper-to-Bumper Repair Flow</h2>
          <p>How we ensure complete quality control, tracking, and calibration for every vehicle arriving in our shop.</p>
        </div>
        
        <div class="repair-process-timeline" style="max-width:850px; margin: 0 auto;">
          <div class="process-step reveal-up">
            <div class="step-number">1</div>
            <div class="step-details">
              <h4>Digital Check-in & Intake</h4>
              <p>We log your Jeep's active codes, check mechanical clearances, and register custom accessory load states to prepare a specialized diagnostic map.</p>
            </div>
          </div>
          <div class="process-step reveal-up">
            <div class="step-number">2</div>
            <div class="step-details">
              <h4>wiTECH Specialist Diagnosis</h4>
              <p>Using Chrysler's official diagnostics, we pinpoint module disruptions, solenoid failures, or mechanical wear to target repairs efficiently.</p>
            </div>
          </div>
          <div class="process-step reveal-up">
            <div class="step-number">3</div>
            <div class="step-details">
              <h4>Precision Repair Execution</h4>
              <p>Our certified team dismantles, services, and replaces faulty units using calibrated tools and heavy-duty Mopar replacements.</p>
            </div>
          </div>
          <div class="process-step reveal-up">
            <div class="step-number">4</div>
            <div class="step-details">
              <h4>Driveline Calibration & Articulation</h4>
              <p>We articulate steering components, run transmission adaptive relearns, and check suspension loads under simulated off-road stress.</p>
            </div>
          </div>
          <div class="process-step reveal-up">
            <div class="step-number">5</div>
            <div class="step-details">
              <h4>Final Dyno & Handover</h4>
              <p>We supply a complete diagnostic clearance sheet, walk you through parts replacements, and log your 2-Year warranty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="section section-darker">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">Verified Feedback</div>
          <h2>What Jeep Owners Say</h2>
          <p>Read detailed critiques from trail riders, off-road builds, and daily commuters on our diagnostic precision.</p>
        </div>
        <div class="testimonials-grid">
          ${reviewHTML}
        </div>
        <div class="text-center" style="margin-top: 50px;">
          <a href="#testimonials" class="btn btn-outline">Read All Owner Testimonials <i class="fa-solid fa-comments" style="margin-left:8px;"></i></a>
        </div>
      </div>
    </section>

    <!-- Accordion FAQs -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">FAQ Division</div>
          <h2>General Inquiries</h2>
          <p>Everything you need to know about our tooling, scheduling, warranty protection, and custom off-road lift installs.</p>
        </div>
        <div class="faq-list">
          ${faqHTML}
        </div>
      </div>
    </section>

    <!-- Contact CTA Banner -->
    <section class="section section-darker text-center" style="border-top:1px solid var(--border-color); background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(15, 81, 50, 0.15) 100%);">
      <div class="container" style="max-width: 800px;">
        <h2 style="font-size: 3rem; margin-bottom: 20px; text-transform: uppercase;">Ready to Conquer the Trail?</h2>
        <p style="font-size: 1.15rem; margin-bottom: 40px;">Get a comprehensive inspection or schedule your specialized repair service today. Speak directly to our Jeep advisor.</p>
        <div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="window.location.hash='#book'">Schedule Online</button>
          <a href="tel:+18005555337" class="btn btn-secondary"><i class="fa-solid fa-phone" style="color:var(--accent-green-bright);"></i> Call 1-800-555-JEEP</a>
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="subpage-hero">
      <div class="container subpage-hero-grid">
        <div>
          <div class="badge">Since 2012</div>
          <h1 class="subpage-title">About Jeep Repair Pro</h1>
          <p class="subpage-desc">Denver's premiere independent destination for certified Jeep diagnostics, transmission rebuilding, solid-axle maintenance, and high-clearance off-road fabrications.</p>
        </div>
        <div>
          <img src="images/about_shop.jpg" alt="Our premium clean auto workshop" style="border-radius:8px; border:1px solid var(--border-color); box-shadow:0 10px 30px rgba(0,0,0,0.5);">
        </div>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container" style="display:grid; grid-template-columns: 1.2fr 0.8fr; gap:48px; align-items:center;">
        <div>
          <h2 style="font-size:2.5rem; text-transform:uppercase; margin-bottom:20px;">Our Workshop Story</h2>
          <p style="margin-bottom:20px; font-size:1.05rem;">Founded by off-road enthusiasts and master mechanics, Jeep Repair Pro began with a simple mission: to provide dealership-level diagnostics and parts accuracy without the corporate dealership markup and delays.</p>
          <p style="margin-bottom:20px; font-size:1.05rem;">We noticed that standard automotive garages struggled with Jeep-specific geometries—specifically solid front axle track alignments, electronic sway bar disconnect modules, and transfer case gear sets. We decided to invest exclusively in official Chrysler wiTECH diagnostic infrastructure and heavy-duty Mopar calibration tables to give owners a specialized, highly reliable service center.</p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:30px;">
            <div class="glass-card">
              <h4 style="color:var(--accent-green-bright); font-size:1.2rem; margin-bottom:8px;">Our Mission</h4>
              <p style="font-size:0.9rem;">To keep your Jeep reliable on high-altitude mountain highways, daily commutes, and technical red-rock trails through meticulous mechanical preparation.</p>
            </div>
            <div class="glass-card">
              <h4 style="color:var(--accent-green-bright); font-size:1.2rem; margin-bottom:8px;">Our Vision</h4>
              <p style="font-size:0.9rem;">To define the gold standard for independent solid-axle 4x4 automotive servicing, matching technical expertise with transparent consumer pricing.</p>
            </div>
          </div>
        </div>
        
        <div class="glass-card" style="border-color:var(--border-color-glow);">
          <h3 style="font-size:1.5rem; margin-bottom:20px; text-transform:uppercase;">Shop Qualifications</h3>
          <ul class="service-ul">
            <li>ASE Certified Master Mechanics</li>
            <li>wiTECH 2.0 Direct Mopar Programming Link</li>
            <li>Hunter Laser Alignment System for Lifted Trucks</li>
            <li>EPA Section 609 AC Certification</li>
            <li>Amsoil & Liqui-Moly Authorized Driveline Center</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <div class="badge">Team Specialists</div>
          <h2>Meet Our Jeep Mechanics</h2>
          <p>Every technician working on your Jeep is ASE-certified and holds secondary validations in advanced electronic diagnostics or driveline setups.</p>
        </div>
        
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:30px;">
          <!-- Tech 1 -->
          <div class="glass-card text-center" style="padding-top:40px;">
            <div class="author-avatar" style="width:90px; height:90px; font-size:2rem; margin:0 auto 20px auto;">DV</div>
            <h3 style="font-size:1.35rem; margin-bottom:4px;">David Vance</h3>
            <p style="color:var(--accent-green-bright); font-size:0.85rem; font-weight:700; text-transform:uppercase; margin-bottom:16px;">Shop Foreman & Master Tech</p>
            <p style="font-size:0.9rem;">Over 18 years servicing Jeep solid axles and manual gearboxes. Specialist in restoring Pentastar engines and diagnosing 'Death Wobble' steering wobbles.</p>
          </div>
          <!-- Tech 2 -->
          <div class="glass-card text-center" style="padding-top:40px;">
            <div class="author-avatar" style="width:90px; height:90px; font-size:2rem; margin:0 auto 20px auto; background-color:var(--accent-green-bright);">MM</div>
            <h3 style="font-size:1.35rem; margin-bottom:4px;">Mark Miller</h3>
            <p style="color:var(--accent-green-bright); font-size:0.85rem; font-weight:700; text-transform:uppercase; margin-bottom:16px;">Off-Road Fabrication Lead</p>
            <p style="font-size:0.9rem;">Specializes in Dana axle re-gearing, long-arm suspension geometries, lockers, and pre-trail structural inspections for heavy Gladiator builds.</p>
          </div>
          <!-- Tech 3 -->
          <div class="glass-card text-center" style="padding-top:40px;">
            <div class="author-avatar" style="width:90px; height:90px; font-size:2rem; margin:0 auto 20px auto;">SJ</div>
            <h3 style="font-size:1.35rem; margin-bottom:4px;">Sarah Jenkins</h3>
            <p style="color:var(--accent-green-bright); font-size:0.85rem; font-weight:700; text-transform:uppercase; margin-bottom:16px;">Electrical & Tuning Lead</p>
            <p style="font-size:0.9rem;">Expert in TIPM module diagnostics, CAN-bus communications, auxiliary controller setups, and Mopar software ECU flashes.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServiceDetail(serviceId) {
  const service = window.JeepData.services.find(s => s.id === serviceId);
  if (!service) {
    return `<div class="container section text-center"><h2>Service not found.</h2><a href="#home" class="btn btn-primary" style="margin-top:20px;">Return Home</a></div>`;
  }

  // Sidebar link items
  let sidebarLinks = window.JeepData.services
    .filter(s => s.category === service.category)
    .map(s => `
      <li>
        <a href="#services/${s.id}" class="sidebar-services-link ${s.id === service.id ? 'active' : ''}">
          ${s.name} <i class="fa-solid fa-chevron-right" style="font-size:0.75rem;"></i>
        </a>
      </li>
    `).join("");

  let problemHTML = service.problems.map(p => `<li>${p}</li>`).join("");
  let benefitHTML = service.benefits.map(b => `<li>${b}</li>`).join("");
  
  let processHTML = service.process.map((p, index) => `
    <div class="process-step">
      <div class="step-number">${index + 1}</div>
      <div class="step-details">
        <h4>Stage ${index + 1}: Implementation</h4>
        <p>${p}</p>
      </div>
    </div>
  `).join("");

  let faqHTML = service.faqs.map(f => `
    <div class="faq-item">
      <button class="faq-trigger" style="padding: 16px 20px;">
        <span class="faq-question" style="font-size:1rem;">${f.q}</span>
        <i class="fa-solid fa-chevron-down faq-icon" style="font-size:0.85rem;"></i>
      </button>
      <div class="faq-content">
        <div class="faq-content-inner" style="padding: 0 20px 16px 20px; font-size:0.9rem;">
          <p>${f.a}</p>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <section class="subpage-hero" style="padding-bottom: 50px;">
      <div class="container">
        <div class="badge">${service.category} Division</div>
        <h1 class="subpage-title" style="margin-bottom:10px;">${service.name}</h1>
        <p class="subpage-desc" style="max-width:800px;">${service.description}</p>
      </div>
    </section>

    <div class="container">
      <div class="service-details-layout">
        <!-- Main Content Column -->
        <div class="service-main-content">
          <div class="glass-card reveal-up">
            <h3>When Is This Service Required?</h3>
            <p>If you observe any of the following symptoms on your Jeep's engine dashboard or while navigating street and trail settings, a specialized check is recommended:</p>
            <ul class="service-ul">
              ${problemHTML}
            </ul>
          </div>

          <div class="glass-card reveal-up" style="margin-top:30px;">
            <h3>Key Advantages of Professional Repair</h3>
            <p>Repairing components with certified technicians and Mopar parts prevents subsequent drivetrain errors and guarantees system longevity:</p>
            <ul class="service-ul">
              ${benefitHTML}
            </ul>
          </div>

          <div class="glass-card reveal-up" style="margin-top:30px;">
            <h3>Our Specialized Work Process</h3>
            <p>Each vehicle undergoes a structured five-stage restoration workflow ensuring absolute compliance with manufacturer guidelines:</p>
            <div class="repair-process-timeline">
              ${processHTML}
            </div>
          </div>

          <div class="glass-card reveal-up" style="margin-top:30px;">
            <h3>Service FAQ</h3>
            <div class="faq-list" style="margin-top:20px;">
              ${faqHTML}
            </div>
          </div>
        </div>

        <!-- Sidebar Column -->
        <div class="service-sidebar">
          <!-- Category Services Navigation -->
          <div class="sidebar-widget">
            <h3 class="widget-title">Related Services</h3>
            <ul class="sidebar-services-list">
              ${sidebarLinks}
            </ul>
          </div>

          <!-- Quick Quote Callout -->
          <div class="sidebar-widget contact-card-widget">
            <i class="fa-solid fa-truck-ramp-box"></i>
            <h3 style="color:#fff; margin-bottom:10px; text-transform:uppercase;">Immediate Estimate</h3>
            <p style="font-size:0.9rem; margin-bottom:20px;">Our base repair price for this category starts at <strong>$${service.costEstimate}</strong>. Speak to our Jeep Advisor to obtain a quote matching your precise VIN.</p>
            <a href="tel:+18005555337" class="btn btn-primary" style="width:100%;"><i class="fa-solid fa-phone"></i> Call Specialists</a>
            <button class="btn btn-secondary" style="width:100%; margin-top:10px;" onclick="window.location.hash='#book'">Book Service</button>
          </div>

          <!-- Contact Form Mini -->
          <div class="sidebar-widget">
            <h3 class="widget-title" style="margin-bottom: 15px;">Ask Our Mechanics</h3>
            <form id="sidebar-contact-form" class="newsletter-form">
              <input type="text" placeholder="Your Name" class="form-control" required>
              <input type="email" placeholder="Your Email" class="form-control" required>
              <textarea placeholder="Tell us about your Jeep issue..." class="form-control" style="height:100px; resize:none;" required></textarea>
              <button type="submit" class="btn btn-primary" style="width:100%;">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderGallery() {
  const galleryItems = [
    { title: "Rubicon 3.5\" Lift Install", desc: "Installed custom suspension lift with adjustable control arms & Falcon shocks.", category: "suspension" },
    { title: "Dana 44 Front Axle Re-gear", desc: "Upgraded ring and pinion to 4.88 ratio with ARB lockers.", category: "rebuilds" },
    { title: "Pentastar Engine Head Repair", desc: "Replaced ticking rocker arms & lifters, restoring quiet operation.", category: "rebuilds" },
    { title: "Gladiator Auxiliary Lighting", desc: "Integrated dual AGM battery system and customizable rocker switches.", category: "tuning" },
    { title: "Speedometer & Shift Calibration", desc: "Calibrated transmission shift intervals for 37\" tires.", category: "tuning" },
    { title: "Wrangler Big Brake Kit", desc: "Upgraded brake calipers and rotors for heavy off-road tires.", category: "suspension" }
  ];

  let itemsHTML = galleryItems.map(item => `
    <div class="gallery-card reveal-up" data-category="${item.category}">
      <img src="images/about_shop.jpg" alt="${item.title}" class="gallery-img"> <!-- Backup fallback display -->
      <div class="gallery-overlay">
        <span class="gallery-category">${item.category}</span>
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-desc">${item.desc}</p>
      </div>
    </div>
  `).join("");

  return `
    <section class="subpage-hero text-center">
      <div class="container">
        <div class="badge">Finished Works</div>
        <h1 class="subpage-title">Project Gallery</h1>
        <p class="subpage-desc" style="max-width:700px; margin:0 auto;">Explore our latest mechanical overhauls, custom trail-ready suspensions, and electrical controller systems implemented in our Denver workshop.</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div class="gallery-filter">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="suspension">Suspension & Brakes</button>
          <button class="filter-btn" data-filter="rebuilds">Engine & Drivetrain</button>
          <button class="filter-btn" data-filter="tuning">Electrical & Tuning</button>
        </div>
        
        <div class="gallery-grid" id="gallery-container">
          ${itemsHTML}
        </div>
      </div>
    </section>
  `;
}

function renderTestimonials() {
  let reviewsHTML = window.JeepData.testimonials.map(r => `
    <div class="glass-card testimonial-card reveal-up" style="margin-bottom:30px;">
      <div>
        <div class="rating-stars" style="font-size:1.1rem;">
          ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
        </div>
        <h4 style="margin-bottom:10px; text-transform:uppercase;">${r.service}</h4>
        <p class="testimonial-comment" style="font-size:1.05rem;">"${r.comment}"</p>
      </div>
      <div class="testimonial-author" style="margin-top:24px;">
        <div class="author-avatar" style="background-color:var(--accent-green-bright);">${r.name.charAt(0)}</div>
        <div>
          <div class="author-name" style="font-size:1.05rem;">${r.name}</div>
          <div class="author-model" style="font-size:0.85rem;">${r.jeepModel}</div>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <section class="subpage-hero text-center">
      <div class="container">
        <div class="badge">Reviews</div>
        <h1 class="subpage-title">Owner Feedback</h1>
        <p class="subpage-desc" style="max-width:700px; margin:0 auto;">We hold ourselves to extreme standards. Read detailed critiques from Jeep owners who trust us with their trail rigs and luxury daily drivers.</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container" style="display:grid; grid-template-columns:2fr 1fr; gap:48px;">
        <div>
          <div class="testimonials-grid" style="grid-template-columns:1fr;">
            ${reviewsHTML}
          </div>
        </div>
        
        <!-- Leave Review Sidebar Form -->
        <div>
          <div class="glass-card" style="position:sticky; top:100px;">
            <h3 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:20px; border-bottom:1px solid var(--accent-green-bright); padding-bottom:10px;">Write a Review</h3>
            <form id="testimonial-submission-form" class="newsletter-form" style="gap:15px;">
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="form-group">
                <label>Jeep Model & Year</label>
                <input type="text" placeholder="e.g. Wrangler 2018" class="form-control" required>
              </div>
              <div class="form-group">
                <label>Service Performed</label>
                <select class="form-control">
                  ${window.JeepData.services.map(s => `<option value="${s.name}">${s.name}</option>`).join("")}
                </select>
              </div>
              <div class="form-group">
                <label>Rating (1 to 5 Stars)</label>
                <select class="form-control">
                  <option value="5">5 Stars (Excellent)</option>
                  <option value="4">4 Stars (Good)</option>
                  <option value="3">3 Stars (Average)</option>
                  <option value="2">2 Stars (Poor)</option>
                  <option value="1">1 Star (Very Poor)</option>
                </select>
              </div>
              <div class="form-group">
                <label>Your Review</label>
                <textarea class="form-control" style="height:120px; resize:none;" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFAQs() {
  let listHTML = window.JeepData.faqs.map(f => `
    <div class="faq-item reveal-up">
      <button class="faq-trigger">
        <span class="faq-question">${f.q}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-content">
        <div class="faq-content-inner">
          <p>${f.a}</p>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <section class="subpage-hero text-center">
      <div class="container">
        <div class="badge">Knowledge Hub</div>
        <h1 class="subpage-title">Frequently Asked Questions</h1>
        <p class="subpage-desc" style="max-width:700px; margin:0 auto;">Browse answers covering service timelines, Mopar diagnostic protocols, and details about our comprehensive warranty program.</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div class="faq-list">
          ${listHTML}
        </div>
      </div>
    </section>
  `;
}

function renderBlog() {
  let listHTML = window.JeepData.blogs.map(b => `
    <div class="glass-card blog-card reveal-up">
      <div class="blog-card-img">
        <img src="images/about_shop.jpg" alt="${b.title}">
        <span class="blog-tag">${b.tag}</span>
      </div>
      <div class="blog-card-content">
        <div class="blog-meta">
          <span><i class="fa-solid fa-calendar-days"></i> ${b.date}</span>
          <span><i class="fa-solid fa-clock"></i> ${b.readTime}</span>
        </div>
        <h3 class="blog-card-title"><a href="#blog/${b.id}">${b.title}</a></h3>
        <p class="blog-card-summary">${b.summary}</p>
        <a href="#blog/${b.id}" class="service-card-link" style="margin-top:auto;">Read Article <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  `).join("");

  return `
    <section class="subpage-hero text-center">
      <div class="container">
        <div class="badge">Jeep Resources</div>
        <h1 class="subpage-title">The Owner's Blog</h1>
        <p class="subpage-desc" style="max-width:700px; margin:0 auto;">Read specialized mechanics guides explaining typical steering wobble causes, locker diagnostics, and trail preparation checklists.</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div class="blog-grid">
          ${listHTML}
        </div>
      </div>
    </section>
  `;
}

function renderBlogPost(blogId) {
  const blog = window.JeepData.blogs.find(b => b.id === blogId);
  if (!blog) {
    return `<div class="container section text-center"><h2>Article not found.</h2><a href="#blog" class="btn btn-primary" style="margin-top:20px;">Back to Blog</a></div>`;
  }

  return `
    <section class="subpage-hero" style="padding-bottom:40px;">
      <div class="container text-center" style="max-width:900px;">
        <span class="badge">${blog.tag}</span>
        <h1 style="font-size:3rem; text-transform:uppercase; margin:16px 0; line-height:1.15;">${blog.title}</h1>
        <div class="blog-meta" style="justify-content:center;">
          <span><i class="fa-solid fa-user"></i> By ${blog.author}</span>
          <span><i class="fa-solid fa-calendar-days"></i> Published ${blog.date}</span>
          <span><i class="fa-solid fa-clock"></i> ${blog.readTime}</span>
        </div>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container" style="max-width:800px;">
        <div class="blog-post-content">
          ${blog.content}
        </div>
        <div style="margin-top:50px; border-top:1px solid var(--border-color); padding-top:30px; display:flex; justify-content:space-between; align-items:center;">
          <a href="#blog" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> All Articles</a>
          <button class="btn btn-primary" onclick="window.location.hash='#book'">Schedule Inspection</button>
        </div>
      </div>
    </section>
  `;
}

function renderBookAppointment() {
  return `
    <section class="subpage-hero text-center" style="padding-bottom:40px;">
      <div class="container">
        <div class="badge">Online Booking</div>
        <h1 class="subpage-title">Reserve Service Appointment</h1>
        <p class="subpage-desc" style="max-width:700px; margin:0 auto;">Quickly configure vehicle details, select your required service division, and choose a convenient workshop slot below.</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div class="glass-card appointment-wizard-card">
          <!-- Wizard Step Headers -->
          <div class="wizard-steps-header">
            <div class="wizard-step-indicator active" id="wizard-step-ind-1">
              <div class="step-indicator-number">1</div>
              <span class="step-indicator-label">Jeep Model</span>
            </div>
            <div class="wizard-step-indicator" id="wizard-step-ind-2">
              <div class="step-indicator-number">2</div>
              <span class="step-indicator-label">Select Service</span>
            </div>
            <div class="wizard-step-indicator" id="wizard-step-ind-3">
              <div class="step-indicator-number">3</div>
              <span class="step-indicator-label">Date & Details</span>
            </div>
          </div>

          <!-- Wizard Forms -->
          <form id="wizard-appointment-form">
            <!-- STEP 1 PANEL -->
            <div class="wizard-panel active" id="wizard-panel-1">
              <h3 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:24px;">Step 1: Jeep Vehicle Details</h3>
              <div class="calc-grid">
                <div class="form-group">
                  <label for="book-model">Jeep Model</label>
                  <select id="book-model" class="form-control" required>
                    <option value="Wrangler Rubicon (JL)">Wrangler Rubicon (JL)</option>
                    <option value="Wrangler JK Unlimited">Wrangler JK Unlimited</option>
                    <option value="Gladiator Rubicon (JT)">Gladiator Rubicon (JT)</option>
                    <option value="Grand Cherokee (WL)">Grand Cherokee (WL)</option>
                    <option value="Cherokee Trailhawk (KL)">Cherokee Trailhawk (KL)</option>
                    <option value="Classic Cherokee XJ">Classic Cherokee XJ</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="book-year">Model Year</label>
                  <select id="book-year" class="form-control" required>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2018-2019">2018 - 2019</option>
                    <option value="2015-2017">2015 - 2017</option>
                    <option value="2010-2014">2010 - 2014</option>
                    <option value="Pre-2010">Pre-2010 (Classic/Vintage)</option>
                  </select>
                </div>
                <div class="form-group" style="grid-column: 1 / -1;">
                  <label for="book-vin">VIN Number (Optional)</label>
                  <input type="text" id="book-vin" placeholder="17-Digit Vehicle Identification Number" class="form-control">
                </div>
              </div>
            </div>

            <!-- STEP 2 PANEL -->
            <div class="wizard-panel" id="wizard-panel-2">
              <h3 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:24px;">Step 2: Service Classification</h3>
              <div class="calc-grid">
                <div class="form-group" style="grid-column: 1 / -1;">
                  <label for="book-service">Select Primary Service</label>
                  <select id="book-service" class="form-control" required>
                    ${window.JeepData.services.map(s => `<option value="${s.name}">${s.name}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group" style="grid-column: 1 / -1;">
                  <label for="book-symptoms">Symptoms or Detailed Notes</label>
                  <textarea id="book-symptoms" placeholder="Describe the sounds, vibrations, or services requested (e.g. ticking sounds, lift kit tightening, alignment wander)..." class="form-control" style="height:120px; resize:none;"></textarea>
                </div>
              </div>
            </div>

            <!-- STEP 3 PANEL -->
            <div class="wizard-panel" id="wizard-panel-3">
              <h3 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:24px;">Step 3: Contact & Scheduling</h3>
              <div class="calc-grid">
                <div class="form-group">
                  <label for="book-name">Contact Full Name</label>
                  <input type="text" id="book-name" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="book-email">Email Address</label>
                  <input type="email" id="book-email" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="book-phone">Phone Number</label>
                  <input type="tel" id="book-phone" placeholder="(303) 555-0199" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="book-date">Preferred Date</label>
                  <input type="date" id="book-date" class="form-control" required>
                </div>
              </div>
            </div>

            <!-- Wizard Bottom Actions -->
            <div class="wizard-buttons">
              <button type="button" class="btn btn-secondary" id="wizard-prev-btn" style="visibility:hidden;">Back</button>
              <button type="button" class="btn btn-primary" id="wizard-next-btn">Next Step</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="subpage-hero">
      <div class="container subpage-hero-grid">
        <div>
          <div class="badge">Contact Center</div>
          <h1 class="subpage-title">Connect With Advisors</h1>
          <p class="subpage-desc">Schedule drop-offs, request emergency roadside diagnostics support, or query specialized fabrication lead times with our workshop team.</p>
        </div>
        <div>
          <div class="map-container" id="contact-map">
            <!-- Simulated Canvas Map matching Dark Luxury Theme -->
            <div style="background-color:var(--bg-tertiary); width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px solid var(--border-color); text-align:center;">
              <i class="fa-solid fa-map-location-dot" style="font-size:3rem; color:var(--accent-green-bright); margin-bottom:12px;"></i>
              <h4 style="text-transform:uppercase; margin-bottom:6px;">Denver Workshop Location</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">1240 Offroad Trail Drive, Denver, CO 80201</p>
              <a href="https://maps.google.com" target="_blank" class="btn btn-outline" style="padding: 6px 14px; font-size:0.75rem; margin-top:10px;">Open Maps</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container contact-grid">
        <!-- Contact Form Box -->
        <div class="glass-card">
          <h3 style="font-size:1.8rem; text-transform:uppercase; margin-bottom:24px;">Send Message</h3>
          <form id="contact-inquiry-form" class="newsletter-form" style="gap:20px;">
            <div class="calc-grid" style="margin-bottom:0;">
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control" required>
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control" required>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" class="form-control" required>
              </div>
              <div class="form-group">
                <label>Jeep Model / Year</label>
                <input type="text" placeholder="e.g. 2020 Wrangler Rubicon" class="form-control" required>
              </div>
            </div>
            <div class="form-group">
              <label>Message Detail</label>
              <textarea class="form-control" style="height:150px; resize:none;" placeholder="Detail your Jeep issue, requested parts, or general schedule query..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Send Inquiry</button>
          </form>
        </div>

        <!-- Details Column -->
        <div class="contact-info-list">
          <div class="glass-card contact-info-item">
            <div class="contact-info-icon"><i class="fa-solid fa-phone"></i></div>
            <div class="contact-info-details">
              <h4>Advising Phone</h4>
              <p><a href="tel:+18005555337" style="font-size:1.2rem; font-weight:700; color:var(--accent-green-bright);">1-800-555-JEEP</a></p>
              <p>Direct Workshop Line: (303) 555-JEEP</p>
            </div>
          </div>
          <div class="glass-card contact-info-item">
            <div class="contact-info-icon"><i class="fa-solid fa-clock"></i></div>
            <div class="contact-info-details">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p style="color:var(--accent-green-bright); font-weight:600;">Sunday: Closed for Trail Runs</p>
            </div>
          </div>
          <div class="glass-card contact-info-item">
            <div class="contact-info-icon"><i class="fa-brands fa-whatsapp"></i></div>
            <div class="contact-info-details">
              <h4>Instant WhatsApp</h4>
              <p>Text message with photos of fluid leaks or dashboard errors to our on-call tech advisor.</p>
              <a href="https://wa.me/18005555337" target="_blank" class="btn btn-outline" style="padding:6px 14px; font-size:0.75rem; margin-top:8px;">Start WhatsApp Chat</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServiceAreas() {
  const cities = ["Denver (Core Shop)", "Boulder", "Aurora", "Lakewood", "Golden", "Westminster", "Arvada", "Littleton", "Centennial", "Thornton", "Castle Rock"];
  let citiesHTML = cities.map(c => `
    <div class="glass-card text-center" style="padding: 24px;">
      <i class="fa-solid fa-mountain-city" style="font-size:2rem; color:var(--accent-green-bright); margin-bottom:12px;"></i>
      <h4 style="text-transform:uppercase;">${c}</h4>
      <p style="font-size:0.85rem; margin-top:8px;">Specialized mechanical transit towing options available directly to our main workshop facility.</p>
    </div>
  `).join("");

  return `
    <section class="subpage-hero text-center">
      <div class="container">
        <div class="badge">Denver Metro</div>
        <h1 class="subpage-title">Service Areas</h1>
        <p class="subpage-desc" style="max-width:700px; margin:0 auto;">Providing dealer-grade Jeep mechanical services and trail recovery transportation links across the Colorado Front Range.</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:24px;">
          ${citiesHTML}
        </div>
      </div>
    </section>
  `;
}

function renderSitemap() {
  let listHTML = window.JeepData.services.map(s => `
    <li><a href="#services/${s.id}"><i class="fa-solid fa-chevron-right" style="font-size:0.75rem; color:var(--accent-green-bright); margin-right:8px;"></i> ${s.name} Repair Page</a></li>
  `).join("");

  return `
    <section class="subpage-hero text-center">
      <div class="container">
        <div class="badge">Navigation Index</div>
        <h1 class="subpage-title">HTML Sitemap</h1>
        <p class="subpage-desc" style="max-width:700px; margin:0 auto;">Complete structural links containing all active pages, specialized service divisions, blog posts, and legal sections.</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container" style="display:grid; grid-template-columns:1fr 1fr; gap:48px;">
        <div class="glass-card">
          <h3 style="text-transform:uppercase; margin-bottom:20px; border-bottom:1.5px solid var(--accent-green-bright); padding-bottom:8px;">General Pages</h3>
          <ul class="footer-links" style="gap:14px; font-size:1.05rem;">
            <li><a href="#home">Homepage</a></li>
            <li><a href="#about">About Us Company Info</a></li>
            <li><a href="#gallery">Project Showcase Gallery</a></li>
            <li><a href="#testimonials">Owner Reviews & Ratings</a></li>
            <li><a href="#faqs">Frequently Asked Questions</a></li>
            <li><a href="#blog">Jeep Resource Blog</a></li>
            <li><a href="#book">Appointment Booking Engine</a></li>
            <li><a href="#contact">Contact Support Location</a></li>
            <li><a href="#service-areas">Service Locations Map</a></li>
            <li><a href="#privacy">Privacy Statement</a></li>
            <li><a href="#terms">Terms and Conditions</a></li>
          </ul>
        </div>
        
        <div class="glass-card">
          <h3 style="text-transform:uppercase; margin-bottom:20px; border-bottom:1.5px solid var(--accent-green-bright); padding-bottom:8px;">All 30 Service Division Pages</h3>
          <ul class="footer-links" style="gap:10px; font-size:0.95rem; display:grid; grid-template-columns:1fr 1fr;">
            ${listHTML}
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderPrivacy() {
  return `
    <section class="subpage-hero text-center" style="padding-bottom:30px;">
      <div class="container">
        <h1 class="subpage-title">Privacy Policy</h1>
        <p class="subpage-desc">Effective Date: June 6, 2026</p>
      </div>
    </section>
    <section class="section section-darker">
      <div class="container" style="max-width:800px; font-size:1.05rem;">
        <p style="margin-bottom:20px;">Jeep Repair Pro respects your privacy. We collect client contact information, vehicle VINs, and scheduling requests solely to manage repair appointments and coordinate towing services.</p>
        <h3 style="margin:30px 0 15px 0; text-transform:uppercase;">Information Collection & Use</h3>
        <p style="margin-bottom:20px;">Contact names, phone numbers, and emails provided via our appointment booker or forms are stored locally and securely, used only for immediate booking operations and diagnostic callbacks. We do not sell your personal data to automotive marketing agencies.</p>
        <h3 style="margin:30px 0 15px 0; text-transform:uppercase;">Cookies & Diagnostics</h3>
        <p style="margin-bottom:20px;">This website uses minor cookies to track active pages and help route URL hashes. No third-party tracking scripts are utilized.</p>
      </div>
    </section>
  `;
}

function renderTerms() {
  return `
    <section class="subpage-hero text-center" style="padding-bottom:30px;">
      <div class="container">
        <h1 class="subpage-title">Terms & Conditions</h1>
        <p class="subpage-desc">Effective Date: June 6, 2026</p>
      </div>
    </section>
    <section class="section section-darker">
      <div class="container" style="max-width:800px; font-size:1.05rem;">
        <p style="margin-bottom:20px;">All repair services, estimates, and tow dispatch requests are subject to the following rules:</p>
        <h3 style="margin:30px 0 15px 0; text-transform:uppercase;">1. Diagnostic Approvals</h3>
        <p style="margin-bottom:20px;">Any visual cost calculation estimates provided via this website are preliminary approximations. Vehicles require direct physical intake verification by our technicians to establish final repair authorization bounds.</p>
        <h3 style="margin:30px 0 15px 0; text-transform:uppercase;">2. Parts Warranties</h3>
        <p style="margin-bottom:20px;">Our 24-Month/24,000-Mile warranty covers defects in craftsmanship under typical driving scenarios. Structural fractures or gear slippage arising from extreme trail obstacles, racing, or mud submersion are excluded.</p>
        <h3 style="margin:30px 0 15px 0; text-transform:uppercase;">3. Mopar Licensing Disclaimer</h3>
        <p style="margin-bottom:20px;">We are an independent repair garage. Jeep, Wrangler, Gladiator, Hemi, Pentastar, and Rubicon are registered trademarks of FCA US LLC. We use OEM parts but operate separately.</p>
      </div>
    </section>
  `;
}

function renderThankYou() {
  const booking = JSON.parse(localStorage.getItem("last_jeep_booking")) || {
    name: "Client", model: "Jeep", service: "Repair Inspection", date: "Scheduled Date"
  };

  return `
    <section class="section section-darker text-center" style="padding: 180px 0 140px 0;">
      <div class="container" style="max-width:600px;">
        <i class="fa-solid fa-circle-check" style="font-size:5rem; color:var(--accent-green-bright); margin-bottom:24px; animation: logoPulse 1.5s infinite alternate;"></i>
        <h1 style="font-size:3.5rem; text-transform:uppercase; margin-bottom:16px;">Booking Confirmed!</h1>
        <p style="font-size:1.15rem; margin-bottom:30px; color:var(--text-secondary);">Thank you, <strong>${booking.name}</strong>. Your Jeep service reservation has been received. Our technician advisor will call your provided number within 2 hours to confirm vehicle intake parameters.</p>
        
        <div class="glass-card text-left" style="margin-bottom:40px;">
          <h4 style="text-transform:uppercase; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:12px;">Reservation Details:</h4>
          <p><strong>Vehicle Model</strong>: ${booking.model}</p>
          <p><strong>Service Division</strong>: ${booking.service}</p>
          <p><strong>Preferred Intake Date</strong>: ${booking.date}</p>
        </div>
        
        <div style="display:flex; gap:20px; justify-content:center;">
          <a href="#home" class="btn btn-primary">Return Home</a>
          <a href="#contact" class="btn btn-secondary">Get Location Info</a>
        </div>
      </div>
    </section>
  `;
}

// ==========================================
// INTERACTIVE WIDGET CONTROLLERS
// ==========================================

function postRenderWidgets(route, param) {
  // Common across all route renders: setup FAQ accordions if present
  setupFAQAccordions();

  if (route === "home") {
    // 1. Setup Calculator Select elements
    populateCalculatorOptions();
    // 2. Setup Before/After Slider
    setupBeforeAfterSlider();
  } else if (route === "services") {
    // Scroll trigger setup or additional sidebar actions
  } else if (route === "gallery") {
    // Gallery filter event handlers
    setupGalleryFilters();
  } else if (route === "book") {
    // Multi-step booking wizard setup
    setupBookingWizard();
  }
}

// 1. FAQ Accordions Handler
function setupFAQAccordions() {
  const triggers = document.querySelectorAll(".faq-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      const content = item.querySelector(".faq-content");
      const isActive = item.classList.contains("active");

      // Close other FAQs on page
      document.querySelectorAll(".faq-item").forEach(otherItem => {
        otherItem.classList.remove("active");
        const otherContent = otherItem.querySelector(".faq-content");
        if (otherContent) otherContent.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        content.style.maxHeight = null;
      }
    });
  });
}

// 2. Before/After Image Slider Drag Handler
function setupBeforeAfterSlider() {
  const container = document.getElementById("home-before-after");
  const handle = document.getElementById("slider-drag-handle");
  const clipped = document.getElementById("slider-clipped-img");
  
  if (!container || !handle || !clipped) return;

  let isDragging = false;

  const updateSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let positionX = clientX - rect.left;

    // Boundaries
    if (positionX < 0) positionX = 0;
    if (positionX > rect.width) positionX = rect.width;

    const percentage = (positionX / rect.width) * 100;
    clipped.style.width = percentage + "%";
    handle.style.left = percentage + "%";
  };

  const startDrag = () => {
    isDragging = true;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updateSlider(clientX);
  };

  // Listeners
  handle.addEventListener("mousedown", startDrag);
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("mousemove", dragging);

  handle.addEventListener("touchstart", startDrag);
  window.addEventListener("touchend", stopDrag);
  window.addEventListener("touchmove", dragging);
}

// 3. Calculator Dynamic Population & Live Calculation
function populateCalculatorOptions() {
  const serviceSelect = document.getElementById("calc-service");
  if (!serviceSelect) return;

  // Insert 30 options
  serviceSelect.innerHTML = window.JeepData.services
    .map(s => `<option value="${s.id}" data-price="${s.costEstimate}">${s.name}</option>`)
    .join("");

  const calculateEstimate = () => {
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    const basePrice = parseFloat(selectedOption.getAttribute("data-price")) || 100;
    const model = document.getElementById("calc-model").value;
    const parts = document.getElementById("calc-parts").value;

    let multiplier = 1.0;
    // Adjust by model complexity
    if (model === "gcherokee") multiplier *= 1.1; // Luxury suspension/engine integration
    if (model === "gladiator") multiplier *= 1.05; // Longer chassis/drivetrain setup
    if (model === "renegade") multiplier *= 0.9;  // Compact SUV platform

    // Adjust by parts quality
    if (parts === "oem") multiplier *= 1.15; // OEM warranty markup
    if (parts === "performance") multiplier *= 1.35; // Heavy-duty offroad parts markup

    const estimatedTotal = basePrice * multiplier;
    const rangeLow = Math.round(estimatedTotal * 0.9);
    const rangeHigh = Math.round(estimatedTotal * 1.1);

    document.getElementById("calc-result-price").innerText = `$${Math.round(estimatedTotal)}`;
    document.getElementById("calc-result-range").innerText = `Estimated Range: $${rangeLow} - $${rangeHigh}`;
  };

  // Add listeners
  document.getElementById("calc-model").addEventListener("change", calculateEstimate);
  serviceSelect.addEventListener("change", calculateEstimate);
  document.getElementById("calc-parts").addEventListener("change", calculateEstimate);

  // Run initial calculation
  calculateEstimate();
}

// 4. Gallery Project Filter Animations
function setupGalleryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".gallery-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active styling
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "block";
          gsap.fromTo(card, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4 });
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 5. Multi-Step Booking Wizard Implementation
function setupBookingWizard() {
  const form = document.getElementById("wizard-appointment-form");
  if (!form) return;

  let currentStep = 1;
  const panels = [
    document.getElementById("wizard-panel-1"),
    document.getElementById("wizard-panel-2"),
    document.getElementById("wizard-panel-3")
  ];
  const indicators = [
    document.getElementById("wizard-step-ind-1"),
    document.getElementById("wizard-step-ind-2"),
    document.getElementById("wizard-step-ind-3")
  ];

  const prevBtn = document.getElementById("wizard-prev-btn");
  const nextBtn = document.getElementById("wizard-next-btn");

  const updateWizard = () => {
    // Update active panels
    panels.forEach((p, idx) => {
      p.classList.toggle("active", idx === (currentStep - 1));
    });

    // Update Indicators styling
    indicators.forEach((ind, idx) => {
      ind.classList.toggle("active", idx === (currentStep - 1));
      ind.classList.toggle("completed", idx < (currentStep - 1));
    });

    // Toggle Back button visibility
    prevBtn.style.visibility = currentStep === 1 ? "hidden" : "visible";

    // Toggle Next / Submit button text
    if (currentStep === 3) {
      nextBtn.innerText = "Submit Booking";
      nextBtn.classList.remove("btn-primary");
      nextBtn.classList.add("btn-primary"); // styled green
    } else {
      nextBtn.innerText = "Next Step";
    }
  };

  nextBtn.addEventListener("click", () => {
    // Basic Form validation check for the active step
    const inputs = panels[currentStep - 1].querySelectorAll("input, select, textarea");
    let isValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
    });

    if (!isValid) return;

    if (currentStep < 3) {
      currentStep++;
      updateWizard();
    } else {
      // Submitting final form
      const bookingData = {
        name: document.getElementById("book-name").value,
        model: document.getElementById("book-model").value,
        service: document.getElementById("book-service").value,
        date: document.getElementById("book-date").value
      };

      // Save to local storage for thank you screen display
      localStorage.setItem("last_jeep_booking", JSON.stringify(bookingData));

      // Trigger redirect to Thank You page
      showToast("Booking submitted successfully!");
      window.location.hash = "#thank-you";
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateWizard();
    }
  });
}

// ==========================================
// ADDITIONAL CONTROLLER FUNCTIONS
// ==========================================

function initStickyHeader() {
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}

function initMobileMenu() {
  const trigger = document.getElementById("mobile-menu-trigger");
  const overlay = document.getElementById("mobile-menu-overlay");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (!trigger || !overlay) return;

  trigger.addEventListener("click", () => overlay.classList.add("active"));
  closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
  
  // Close menu on link click
  const mobileLinks = overlay.querySelectorAll(".nav-link-mobile");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => overlay.classList.remove("active"));
  });
}

// Live Chat Widget Simulator
function initLiveChat() {
  const toggleBtn = document.getElementById("chat-widget-toggle");
  const closeBtn = document.getElementById("chat-box-close");
  const chatBox = document.getElementById("live-chat-box");
  const sendBtn = document.getElementById("chat-send-button");
  const inputField = document.getElementById("chat-input-field");
  const chatBody = document.getElementById("chat-box-body");

  if (!toggleBtn || !chatBox) return;

  toggleBtn.addEventListener("click", () => {
    chatBox.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    chatBox.classList.remove("active");
  });

  const appendMessage = (text, sender) => {
    const msg = document.createElement("div");
    msg.classList.add("chat-message", sender === "bot" ? "msg-bot" : "msg-user");
    msg.innerText = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleSend = () => {
    const text = inputField.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    inputField.value = "";

    // Simulated Bot Responses
    setTimeout(() => {
      let botResponse = "Thanks for asking! Our service advisor will be with you shortly. You can also reach us directly at 1-800-555-JEEP.";
      const query = text.toLowerCase();
      if (query.includes("death wobble") || query.includes("shake")) {
        botResponse = "The front-end shake (Death Wobble) is often caused by loose track bar bolts. We specialize in laser steering align and track bar fixes. Schedule an inspection via our booking wizard!";
      } else if (query.includes("price") || query.includes("cost")) {
        botResponse = "Use our interactive Service Cost Calculator on the homepage to find quick price ranges, or book service to receive a tailored estimate.";
      } else if (query.includes("location") || query.includes("address")) {
        botResponse = "We are located at 1240 Offroad Trail Drive, Denver, CO. Direct towing lines are active for standard and modified Jeeps.";
      }
      appendMessage(botResponse, "bot");
    }, 1000);
  };

  sendBtn.addEventListener("click", handleSend);
  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });

  // Pulse WhatsApp floating button occasionally
  const whatsapp = document.getElementById("whatsapp-btn");
  if (whatsapp) {
    whatsapp.addEventListener("click", () => {
      window.open("https://wa.me/18005555337", "_blank");
    });
  }
}

// Global Form Submissions (Sidebar query, generic contact form, newsletter)
function initGlobalForms() {
  document.body.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    
    if (form.id === "newsletter-form") {
      showToast("Thank you for subscribing to our trail bulletins!");
      form.reset();
    } else if (form.id === "contact-inquiry-form") {
      showToast("Your inquiry has been successfully sent to our service team.");
      form.reset();
    } else if (form.id === "sidebar-contact-form") {
      showToast("Message sent! Our Jeep master tech will reply shortly.");
      form.reset();
    } else if (form.id === "testimonial-submission-form") {
      showToast("Thank you for your feedback! Your review will be published shortly.");
      form.reset();
    }
  });
}

// Toast Alert Engine
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i><span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = "toastOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================
// GSAP & SCROLL TRIGGER ENGINE
// ==========================================
function triggerGSAPAnimations() {
  if (typeof gsap === "undefined") return;

  // Clear previous triggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // 1. Fade up entry animations on reveal targets
  gsap.utils.toArray(".reveal-up").forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // 2. Stagger animate lists
  const staggers = document.querySelectorAll(".services-grid, .testimonials-grid, .gallery-grid");
  staggers.forEach(grid => {
    const children = grid.children;
    if (children.length > 0) {
      gsap.fromTo(children, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%"
          }
        }
      );
    }
  });
}
