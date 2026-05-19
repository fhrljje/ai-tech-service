export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://phirk-itsolution.my.id/sitemap.xml",
    host: "https://phirk-itsolution.my.id",
  };
}
