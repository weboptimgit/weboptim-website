// src/lib/loadGTM.ts
import { getGtmIdForDomain } from "@/config/gtm";

export function loadGTM() {
  if ((window as any).__gtmLoaded) return;

  const gtmId = getGtmIdForDomain();
  if (!gtmId) return;

  // dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: "gtm.init",
  });

  // script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  // noscript iframe (fallback)
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  document.body.appendChild(iframe);

  (window as any).__gtmLoaded = true;
}
