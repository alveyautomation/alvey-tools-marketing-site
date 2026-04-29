export type ProductCategory = "Downloads" | "MCP Servers" | "Marketplace Apps";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  pricing: string;
  ctaLabel: string;
  ctaHref: string;
  status?: "live" | "coming-soon";
  /** If false, the card links directly to ctaHref instead of /tools/<slug>. */
  hasLandingPage?: boolean;
};

export const products: Product[] = [
  // Downloads, live + buyable on Gumroad
  {
    slug: "make-me-a-brett",
    name: "Make Me a Brett. Methodology Pack",
    tagline:
      "A 92-page operational methodology and 28-file pattern library for shipping high-stakes automation that doesn't silently corrupt your business.",
    category: "Downloads",
    pricing: "$149 one-time",
    ctaLabel: "Buy on Gumroad",
    ctaHref: "https://alveyautomation.gumroad.com/l/make-me-a-brett",
    status: "live",
  },
  {
    slug: "security-stack",
    name: "Alvey Security Stack",
    tagline:
      "A pre-commit security stack that blocks AWS keys, Stripe secrets, OAuth tokens, and ~100 other credential patterns before they enter your git history.",
    category: "Downloads",
    pricing: "$49 one-time",
    ctaLabel: "Buy on Gumroad",
    ctaHref: "https://alveyautomation.gumroad.com/l/alvey-security-stack",
    status: "live",
  },
  {
    slug: "flask-scaffold",
    name: "Flask SaaS Scaffold",
    tagline:
      "Multi-tenant Flask foundation with enforced query scoping, Stripe billing, idempotent webhooks, super-admin dashboard, and 28 passing tests.",
    category: "Downloads",
    pricing: "$79 one-time",
    ctaLabel: "Buy on Gumroad",
    ctaHref: "https://alveyautomation.gumroad.com/l/flask-saas-scaffold",
    status: "live",
  },
  {
    slug: "alvey-oauth-generator",
    name: "Alvey OAuth Generator",
    tagline:
      "CLI scaffold for OAuth 2.0 in 60 seconds. Six providers covered (QBO, Shopify, Stripe, Salesforce, Google, Slack) with all the production quirks handled.",
    category: "Downloads",
    pricing: "$79 one-time",
    ctaLabel: "Buy on Gumroad",
    ctaHref: "https://alveyautomation.gumroad.com/l/alvey-oauth-generator",
    status: "live",
    hasLandingPage: false,
  },
  {
    slug: "cold-outreach-pack",
    name: "B2B Cold Outreach + Email Warmup Pack",
    tagline:
      "A 90-page playbook plus 11 templates for converting cold inbox into paid services pipeline, without burning your domain.",
    category: "Downloads",
    pricing: "$99 one-time",
    ctaLabel: "Buy on Gumroad",
    ctaHref: "https://alveyautomation.gumroad.com/l/cold-outreach-pack",
    status: "live",
    hasLandingPage: false,
  },

  // MCP Servers, free, open-source, live on GitHub
  {
    slug: "sellercloud-mcp",
    name: "SellerCloud MCP",
    tagline:
      "Plug Claude into your SellerCloud catalog, inventory, orders, and channel listings. Read-only, in five minutes.",
    category: "MCP Servers",
    pricing: "Free / MIT",
    ctaLabel: "View on GitHub",
    ctaHref: "https://github.com/alveyautomation/sellercloud-mcp",
    status: "live",
  },
  {
    slug: "walmart-mcp",
    name: "Walmart MCP",
    tagline:
      "A Model Context Protocol server for Walmart Marketplace. Catalog, inventory, orders, pricing, settlement reports.",
    category: "MCP Servers",
    pricing: "Free / MIT",
    ctaLabel: "View on GitHub",
    ctaHref: "https://github.com/alveyautomation/walmart-mcp",
    status: "live",
  },
  {
    slug: "etsy-mcp",
    name: "Etsy MCP",
    tagline:
      "Production-grade MCP server for Etsy. Listings, orders, variation inventory, shop stats, read-only, in five minutes.",
    category: "MCP Servers",
    pricing: "Free / MIT",
    ctaLabel: "View on GitHub",
    ctaHref: "https://github.com/alveyautomation/etsy-mcp",
    status: "live",
    hasLandingPage: false,
  },
  {
    slug: "qbo-mcp",
    name: "QuickBooks MCP",
    tagline:
      "Read-only MCP server for QuickBooks Online, vendors, bills, customers, invoices, chart of accounts. Production-tested OAuth + retry handling.",
    category: "MCP Servers",
    pricing: "Free / MIT",
    ctaLabel: "View on GitHub",
    ctaHref: "https://github.com/alveyautomation/qbo-mcp",
    status: "live",
  },

  // Marketplace Apps, built, awaiting marketplace approval
  {
    slug: "qbo-vendor-anomaly",
    name: "QBO Vendor Anomaly Alerts",
    tagline:
      "Catch the wrong vendor bill before you pay it. Daily QuickBooks scan, Slack alert when a bill is 3x normal.",
    category: "Marketplace Apps",
    pricing: "$29/month",
    ctaLabel: "Notify me at launch",
    ctaHref: "mailto:brett@alveyautomation.com?subject=QBO%20Vendor%20Anomaly%20availability",
    status: "coming-soon",
  },
  {
    slug: "shopify-reorder",
    name: "Shopify Reorder Point Alerts",
    tagline:
      "Stop running out of best-sellers. Daily Slack digest of which Shopify SKUs to reorder, ranked by urgency.",
    category: "Marketplace Apps",
    pricing: "$19/month",
    ctaLabel: "Notify me at launch",
    ctaHref: "mailto:brett@alveyautomation.com?subject=Shopify%20Reorder%20availability",
    status: "coming-soon",
  },
  {
    slug: "stripe-failed-payment",
    name: "Stripe Failed Payment Recovery",
    tagline:
      "Stop losing subscriptions to expired cards. Branded, idempotent dunning on the schedule you control.",
    category: "Marketplace Apps",
    pricing: "$39/month",
    ctaLabel: "Notify me at launch",
    ctaHref: "mailto:brett@alveyautomation.com?subject=Stripe%20Failed%20Payment%20availability",
    status: "coming-soon",
  },
];

export const categoryOrder: ProductCategory[] = [
  "Downloads",
  "MCP Servers",
  "Marketplace Apps",
];

export const categoryDescriptions: Record<ProductCategory, string> = {
  Downloads:
    "One-time downloads, methodology, scaffolds, and tooling distilled from running production at scale. Buy once, use forever.",
  "MCP Servers":
    "Free, open-source Model Context Protocol servers. Plug Claude (and any MCP-aware client) into the platforms you already use.",
  "Marketplace Apps":
    "Subscription apps installed from QuickBooks, Shopify, and Stripe marketplaces. Awaiting approval, leave your email and I'll notify you the day each one goes live.",
};

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
