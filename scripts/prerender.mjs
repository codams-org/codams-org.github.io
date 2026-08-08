// Generates a real dist/<route>/index.html per route with route-specific
// <title>/meta tags baked in, so:
//  - GitHub Pages serves each route as a real 200 (not the SPA 404.html
//    fallback), which matters for search engine indexing.
//  - Crawlers that don't execute JS (link unfurlers for WhatsApp, Slack,
//    Twitter, etc.) see the right title/description/OG tags immediately.
//
// The app itself is still a client-rendered SPA — this only duplicates the
// build's index.html shell per route with different <head> content. React
// Router takes over navigation as soon as the JS bundle loads, exactly like
// before.
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const siteUrl = "https://codams.in";

const routes = [
  {
    path: "/about-us",
    title: "About Us | Codams",
    description:
      "Learn about Codams and why businesses choose us for custom software, automation, and integration solutions.",
  },
  {
    path: "/services",
    title: "Our Services | Codams",
    description:
      "Explore Codams' software services: web development, WhatsApp bots, API integrations, and custom automation tools.",
  },
  {
    path: "/products",
    title: "Solutions & Products | Codams",
    description:
      "Discover Codams' software products and ready-to-deploy automation solutions built for modern businesses.",
  },
  {
    path: "/why-us",
    title: "Why Choose Codams",
    description:
      "See why businesses partner with Codams for reliable, end-to-end software development and automation.",
  },
  {
    path: "/team",
    title: "Leadership Team | Codams",
    description:
      "Meet the leadership team behind Codams' software development and automation solutions.",
  },
  {
    path: "/connect",
    title: "Contact Us | Codams",
    description:
      "Get in touch with Codams to discuss your web development, automation, or integration project.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Codams",
    description: "Read Codams' privacy policy on how we collect, use, and protect your information.",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Codams",
    description: "Review the terms of service governing use of Codams' website and services.",
  },
  {
    path: "/vcard",
    title: "Mukta Gupta - Founder & CEO, Codams",
    description: "Digital business card for Mukta Gupta, Founder & CEO of Codams.",
    robots: "noindex, follow",
  },
];

const template = readFileSync(join(distDir, "index.html"), "utf8");

function withReplacements(html, route) {
  // Trailing slash: static file servers (GitHub Pages included) resolve a
  // bare directory request with a 301 to the slash-suffixed URL before
  // serving its index.html, so that's the URL that actually resolves to
  // 200 — canonical/OG should point there directly rather than at a URL
  // that immediately redirects away from itself. React Router v6 doesn't
  // care about trailing slashes when matching, so client-side nav/hydration
  // is unaffected either way.
  const url = `${siteUrl}${route.path}/`;
  let out = html
    .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${route.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

  if (route.robots) {
    out = out.replace(
      /<link rel="canonical"[^>]*\/>/,
      (match) => `${match}\n    <meta name="robots" content="${route.robots}" />`
    );
  }

  return out;
}

for (const route of routes) {
  const outDir = join(distDir, route.path.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), withReplacements(template, route));
  console.log(`prerendered ${route.path}/`);
}
