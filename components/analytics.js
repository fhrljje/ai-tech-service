"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", GA_ID, {
      page_path: `${pathname}${window.location.search}`,
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest('a[href*="wa.me/"]');

      if (!link) {
        return;
      }

      const locationLabel =
        link.getAttribute("aria-label")?.trim() ||
        link.textContent?.trim() ||
        "whatsapp_link";

      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: locationLabel,
          value: 1,
        });
      }

      if (typeof window.clarity === "function") {
        window.clarity("event", "whatsapp_click");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!GA_ID && !CLARITY_ID) {
    return null;
  }

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      ) : null}

      {CLARITY_ID ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/" + i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      ) : null}
    </>
  );
}
