import "./globals.css";

export const metadata = {
  title: "Fahrul Tech Rescue",
  description: "Landing page layanan rescue website, deployment, AI chatbot, dan security audit."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
