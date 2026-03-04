/**
 * Collagen+ — Case Study Version (Portfolio)
 * Features:
 * - Casebar toggle (persisted)
 * - EN/DE i18n (persisted)
 * - One Shopify URL used by all buy buttons
 * - Display prices per locale (USD/EUR)
 * - FAQ accordion: single open
 * - Smooth scroll buttons
 * - Active nav link on scroll (IntersectionObserver)
 * - Image fallback: tries multiple URLs then uses gradient only
 */

const CONFIG = {
  // Change once if you want:
  shopifyBuyUrl: "https://www.shopify.com",

  prices: {
    en: { currency: "USD", hero: 29.90, offer1: 29.90, offer2: 79.90, offer3: 149.90 },
    de: { currency: "EUR", hero: 29.90, offer1: 29.90, offer2: 79.90, offer3: 149.90 }
  },

  // Images with fallback order (if one fails, try next)
  images: {
    hero: [
      "https://images.unsplash.com/photo-1729701792980-7db9030836e4?auto=format&fit=crop&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1620912189866-5f2b9f6d0b2a?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    ],
    mid: [
      "https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?auto=format&fit=crop&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    ]
  }
};

const I18N = {
  en: {
    "top.tag": "International • Single product",

    "nav.benefits": "Benefits",
    "nav.how": "How it works",
    "nav.proof": "Proof",
    "nav.offers": "Offers",
    "nav.faq": "FAQ",

    "cta.buyNow": "Buy now",
    "cta.seeOffers": "See offers",
    "cta.howItWorks": "How it works",

    "hero.badge": "LIMITED LOT • WORLDWIDE SHIPPING",
    "hero.title": "Premium collagen capsules designed for skin, hair & joints.",
    "hero.sub": "Conversion-focused long-form landing with Shopify-ready checkout flow.",
    "hero.q1k": "Rating",
    "hero.q2k": "Customers",
    "hero.q3k": "Supply",
    "hero.q3v": "30 days",
    "hero.mediaNote": "Capsules • Easy daily use • Bestseller",

    "trust.t1": "Secure Shopify checkout",
    "trust.t2": "Worldwide shipping options",
    "trust.t3": "Quality tested",

    "mini.k1": "Skin",
    "mini.v1": "Elasticity support",
    "mini.k2": "Hair",
    "mini.v2": "Strength & shine",
    "mini.k3": "Joints",
    "mini.v3": "Daily mobility",

    "strip.s1t": "Beauty support",
    "strip.s1d": "Skin hydration & glow",
    "strip.s2t": "Movement support",
    "strip.s2d": "Joints & mobility",
    "strip.s3t": "Clean formula",
    "strip.s3d": "Transparent ingredients",
    "strip.s4t": "Global sales",
    "strip.s4d": "Shopify checkout",

    "story.title": "A simple daily routine — built for consistency",
    "story.p1": "Collagen+ is designed to be easy: capsule format, clean stack, and a long-form flow that explains value clearly.",
    "story.callk": "What’s inside",
    "story.callv": "Hydrolyzed collagen + Vitamin C + Hyaluronic acid",

    "how.title": "How it works",
    "how.sub": "A step-by-step block commonly used on sales pages.",
    "how.s1t": "Take daily",
    "how.s1d": "Add it to your routine. Consistency matters.",
    "how.s2t": "Support your body",
    "how.s2d": "Ingredients selected to complement wellness habits.",
    "how.s3t": "Track results",
    "how.s3d": "Most people aim for 4–8 weeks of consistent use.",
    "how.c1t": "Quality mindset",
    "how.c1d": "Clear copy + premium UI to build trust.",
    "how.c2t": "Global fulfillment",
    "how.c2d": "Shipping and taxes calculated at Shopify checkout.",
    "how.c3t": "Secure payment",
    "how.c3d": "Checkout handled by Shopify.",

    "proof.title": "Proof that builds trust",
    "proof.sub": "Guarantee + reviews — classic conversion blocks.",
    "proof.gtitle": "30-day guarantee",
    "proof.gdesc": "If you’re not satisfied, you can request a refund according to the store policy.",
    "proof.r1m": "Verified purchase",
    "proof.r1t": "“Easy daily capsules. Noticed my skin looking better after a few weeks.”",
    "proof.r2m": "Verified purchase",
    "proof.r2t": "“Great for routine. Packaging looks premium.”",

    "offers.title": "Choose your offer",
    "offers.sub": "Three tiers — a very common sales-page pattern.",
    "offers.best": "BEST VALUE",
    "offers.o1t": "Starter",
    "offers.o1b": "1 bottle",
    "offers.o1n": "Best to try",
    "offers.o2t": "Most Popular",
    "offers.o2b": "3 bottles",
    "offers.o2n": "Save more",
    "offers.o3t": "Bundle",
    "offers.o3b": "6 bottles",
    "offers.o3n": "Max savings",
    "offers.c1": "Worldwide shipping",
    "offers.c2": "Secure checkout",
    "offers.c3": "Support included",
    "offers.c4": "Priority dispatch",
    "offers.c5": "Bonus guide",
    "offers.c6": "Extended guarantee",
    "offers.noteT": "Note",
    "offers.noteD": "Prices shown are for display only. Final price, taxes and shipping are calculated in Shopify checkout.",

    "faq.title": "FAQ",
    "faq.sub": "Remove objections before the final CTA.",
    "faq.q1": "When will I see results?",
    "faq.a1": "Many people aim for 4–8 weeks of consistent daily use.",
    "faq.q2": "Do you ship worldwide?",
    "faq.a2": "Yes. Shipping and taxes are calculated at Shopify checkout.",
    "faq.q3": "Is payment secure?",
    "faq.a3": "Checkout is handled by Shopify with secure payment methods.",
    "faq.q4": "How do I request a refund?",
    "faq.a4": "Refund requests follow the store policy shown during checkout.",

    "final.title": "Final step: secure your order",
    "final.desc": "Click below to continue to Shopify checkout.",

    "sticky.k": "Today",
    "footer.note": "© Collagen+. All rights reserved."
  },

  de: {
    "top.tag": "International • 1 Produkt",

    "nav.benefits": "Vorteile",
    "nav.how": "So funktioniert’s",
    "nav.proof": "Nachweise",
    "nav.offers": "Angebote",
    "nav.faq": "FAQ",

    "cta.buyNow": "Jetzt kaufen",
    "cta.seeOffers": "Angebote ansehen",
    "cta.howItWorks": "So funktioniert’s",

    "hero.badge": "LIMITIERTER VORRAT • WELTWEITER VERSAND",
    "hero.title": "Premium-Kollagenkapseln für Haut, Haare & Gelenke.",
    "hero.sub": "Conversion-fokussierte Long-Form Landingpage mit Shopify-Checkout-Flow.",
    "hero.q1k": "Bewertung",
    "hero.q2k": "Kunden",
    "hero.q3k": "Vorrat",
    "hero.q3v": "30 Tage",
    "hero.mediaNote": "Kapseln • Tägliche Anwendung • Bestseller",

    "trust.t1": "Sicherer Shopify-Checkout",
    "trust.t2": "Weltweite Versandoptionen",
    "trust.t3": "Qualitätsgeprüft",

    "mini.k1": "Haut",
    "mini.v1": "Elastizität",
    "mini.k2": "Haare",
    "mini.v2": "Stärke & Glanz",
    "mini.k3": "Gelenke",
    "mini.v3": "Beweglichkeit",

    "strip.s1t": "Beauty-Support",
    "strip.s1d": "Feuchtigkeit & Glow",
    "strip.s2t": "Bewegung",
    "strip.s2d": "Gelenke & Mobility",
    "strip.s3t": "Saubere Formel",
    "strip.s3d": "Transparente Inhaltsstoffe",
    "strip.s4t": "Global",
    "strip.s4d": "Shopify-Checkout",

    "story.title": "Eine einfache Routine — für konsequente Anwendung",
    "story.p1": "Collagen+ ist leicht: Kapseln, cleanes Setup und ein Long-Form-Flow, der den Nutzen klar erklärt.",
    "story.callk": "Inhalt",
    "story.callv": "Hydrolysiertes Kollagen + Vitamin C + Hyaluronsäure",

    "how.title": "So funktioniert’s",
    "how.sub": "Ein Step-by-Step-Block wie in vielen Sales Pages.",
    "how.s1t": "Täglich einnehmen",
    "how.s1d": "In deine Routine integrieren. Konsistenz zählt.",
    "how.s2t": "Den Körper unterstützen",
    "how.s2d": "Zutaten passend zu Wellness-Gewohnheiten.",
    "how.s3t": "Fortschritt verfolgen",
    "how.s3d": "Viele zielen auf 4–8 Wochen konsequente Anwendung.",
    "how.c1t": "Qualitätsfokus",
    "how.c1d": "Klare Copy + Premium UI = mehr Vertrauen.",
    "how.c2t": "Globaler Versand",
    "how.c2d": "Versand/Steuern im Shopify-Checkout berechnet.",
    "how.c3t": "Sichere Zahlung",
    "how.c3d": "Checkout über Shopify.",

    "proof.title": "Nachweise, die Vertrauen schaffen",
    "proof.sub": "Garantie + Reviews — klassische Conversion-Blöcke.",
    "proof.gtitle": "30-Tage-Garantie",
    "proof.gdesc": "Wenn du nicht zufrieden bist, kannst du gemäß Store-Policy eine Rückerstattung anfordern.",
    "proof.r1m": "Verifizierter Kauf",
    "proof.r1t": "„Einfache tägliche Kapseln. Nach ein paar Wochen sah meine Haut besser aus.“",
    "proof.r2m": "Verifizierter Kauf",
    "proof.r2t": "„Super für Routine. Premium-Verpackung.“",

    "offers.title": "Wähle dein Angebot",
    "offers.sub": "Drei Stufen — sehr gängiges Sales-Page-Muster.",
    "offers.best": "BESTES ANGEBOT",
    "offers.o1t": "Starter",
    "offers.o1b": "1 Flasche",
    "offers.o1n": "Zum Testen",
    "offers.o2t": "Beliebt",
    "offers.o2b": "3 Flaschen",
    "offers.o2n": "Mehr sparen",
    "offers.o3t": "Bundle",
    "offers.o3b": "6 Flaschen",
    "offers.o3n": "Max sparen",
    "offers.c1": "Weltweiter Versand",
    "offers.c2": "Sicherer Checkout",
    "offers.c3": "Support inklusive",
    "offers.c4": "Prioritätsversand",
    "offers.c5": "Bonus-Guide",
    "offers.c6": "Erweiterte Garantie",
    "offers.noteT": "Hinweis",
    "offers.noteD": "Preise dienen nur zur Anzeige. Finaler Preis, Steuern und Versand im Shopify-Checkout.",

    "faq.title": "FAQ",
    "faq.sub": "Einwände entfernen vor dem finalen CTA.",
    "faq.q1": "Wann sehe ich Ergebnisse?",
    "faq.a1": "Viele zielen auf 4–8 Wochen konsequente tägliche Anwendung.",
    "faq.q2": "Lieferung weltweit?",
    "faq.a2": "Ja. Versand und Steuern werden im Shopify-Checkout berechnet.",
    "faq.q3": "Ist die Zahlung sicher?",
    "faq.a3": "Der Checkout läuft über Shopify mit sicheren Zahlungsmethoden.",
    "faq.q4": "Wie fordere ich eine Rückerstattung an?",
    "faq.a4": "Rückerstattungen erfolgen gemäß der Store-Policy im Checkout.",

    "final.title": "Letzter Schritt: Bestellung sichern",
    "final.desc": "Klicke unten, um zum Shopify-Checkout zu gehen.",

    "sticky.k": "Heute",
    "footer.note": "© Collagen+. Alle Rechte vorbehalten."
  }
};

function money(locale, value) {
  const cfg = CONFIG.prices[locale] || CONFIG.prices.en;
  const currency = cfg.currency;
  const lang = locale === "de" ? "de-DE" : "en-US";
  return new Intl.NumberFormat(lang, { style: "currency", currency }).format(value);
}

function setBuyLinks(url) {
  const ids = ["buyTop","buyHero","buyStory","buyHow","buyProof","buyOffer1","buyOffer2","buyOffer3","buyBottom","buySticky"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", url);
  });
}

function applyTranslations(locale) {
  const dict = I18N[locale] || I18N.en;
  document.documentElement.lang = locale;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const val = dict[key];
    if (typeof val === "string") el.textContent = val;
  });

  const p = CONFIG.prices[locale] || CONFIG.prices.en;
  const hero = money(locale, p.hero);

  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set("priceHero", hero);
  set("priceHow", hero);
  set("priceProof", hero);
  set("priceSticky", hero);
  set("offer1", money(locale, p.offer1));
  set("offer2", money(locale, p.offer2));
  set("offer3", money(locale, p.offer3));

  document.querySelectorAll(".lang__btn").forEach(btn => {
    const active = btn.getAttribute("data-lang") === locale;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  localStorage.setItem("cs_lang", locale);
}

function setupLanguageSwitch() {
  document.querySelectorAll(".lang__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const locale = btn.getAttribute("data-lang") || "en";
      applyTranslations(locale);
    });
  });

  const saved = localStorage.getItem("cs_lang");
  if (saved === "de" || saved === "en") applyTranslations(saved);
  else applyTranslations("en");
}

function setupAccordionSingleOpen() {
  const wrapper = document.getElementById("accordion");
  if (!wrapper) return;

  wrapper.addEventListener("toggle", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLDetailsElement)) return;
    if (!target.open) return;
    wrapper.querySelectorAll("details.acc").forEach(d => { if (d !== target) d.open = false; });
  }, true);
}

function setupScrollButtons() {
  const btnOffers = document.getElementById("scrollOffers");
  const targetOffers = document.getElementById("offers");
  if (btnOffers && targetOffers) {
    btnOffers.addEventListener("click", () => targetOffers.scrollIntoView({behavior:"smooth", block:"start"}));
  }

  const btnHow = document.getElementById("scrollHow");
  const targetHow = document.getElementById("how");
  if (btnHow && targetHow) {
    btnHow.addEventListener("click", () => targetHow.scrollIntoView({behavior:"smooth", block:"start"}));
  }
}

function setupActiveNav() {
  const links = Array.from(document.querySelectorAll(".nav__link[data-nav]"));
  const map = new Map(links.map(a => [a.getAttribute("data-nav"), a]));

  const sections = Array.from(document.querySelectorAll("[data-section]"))
    .filter(s => s.id || s.getAttribute("data-section"));

  const obs = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const key = visible.target.id || visible.target.getAttribute("data-section");
    links.forEach(a => a.classList.remove("is-active"));
    const active = map.get(key);
    if (active) active.classList.add("is-active");
  }, { root: null, threshold: [0.25, 0.4, 0.6] });

  sections.forEach(s => obs.observe(s));
}

function setupCasebarToggle() {
  const casebar = document.getElementById("casebar");
  const btn = document.getElementById("toggleCasebar");
  if (!casebar || !btn) return;

  const saved = localStorage.getItem("cs_casebar");
  const collapsed = saved === "collapsed";
  if (collapsed) {
    casebar.classList.add("is-collapsed");
    btn.textContent = "Show";
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => {
    const isCollapsed = casebar.classList.toggle("is-collapsed");
    btn.textContent = isCollapsed ? "Show" : "Hide";
    btn.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
    localStorage.setItem("cs_casebar", isCollapsed ? "collapsed" : "expanded");
  });
}

/**
 * Load background image safely:
 * - tries URLs in order
 * - if all fail, leaves gradient only
 */
function preload(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error("failed"));
    img.referrerPolicy = "no-referrer";
    img.src = url;
  });
}

async function applyBg(el, urls) {
  for (const url of urls) {
    try {
      await preload(url);
      el.style.backgroundImage =
        `linear-gradient(135deg, rgba(0,0,0,.22), rgba(0,0,0,.60)), url("${url}")`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      return;
    } catch (_) {}
  }
  // keep gradient-only fallback
}

function setupImages() {
  document.querySelectorAll(".js-bg").forEach(async (el) => {
    const key = el.getAttribute("data-bg");
    const urls = CONFIG.images[key] || [];
    await applyBg(el, urls);
  });
}

(function init(){
  setBuyLinks(CONFIG.shopifyBuyUrl);
  setupLanguageSwitch();
  setupAccordionSingleOpen();
  setupScrollButtons();
  setupActiveNav();
  setupImages();
})();