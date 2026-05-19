import "./globals.css";
import Analytics from "../components/analytics";

const siteUrl = "https://phirk-itsolution.my.id";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IT Consultant & IT Solution | Phirk IT Solution",
    template: "%s | Phirk IT Solution",
  },
  description:
    "Phirk IT Solution provides IT Consultant and IT Solution services including emergency website rescue, VPS deployment, Docker setup, AI business chatbot, and website security audit.",
  keywords: [
    "IT Consultant",
    "IT Solution",
    "website rescue service",
    "emergency website fix",
    "VPS deployment",
    "Docker setup",
    "website security audit",
    "AI chatbot development",
    "production website fix",
    "server deployment service",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Phirk IT Solution",
    title: "IT Consultant & IT Solution | Phirk IT Solution",
    description:
      "IT Consultant and IT Solution services for website rescue, VPS deployment, Docker setup, AI chatbot, and security audit.",
    locale: "en_US",
    images: [
      {
        url: "/phirk-logo.png",
        width: 1200,
        height: 630,
        alt: "Phirk IT Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consultant & IT Solution | Phirk IT Solution",
    description:
      "IT Consultant and IT Solution services for website rescue, VPS deployment, Docker setup, AI chatbot, and security audit.",
    images: ["/phirk-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
