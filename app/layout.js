import "./globals.css";

export const metadata = {
  title: "Phirk IT Solution",
  description: "Layanan rescue website, deployment, AI chatbot, dan security audit untuk bisnis yang butuh eksekusi teknis cepat dan rapi.",
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
