// src/lib/loadGTM.ts
import { getGtmIdForDomain } from "@/config/gtm";

declare global {
  interface Window {
    dataLayer?: any[];
    __woGtmLoaded?: boolean;
  }
}

export function loadGTM() {
  if (window.__woGtmLoaded) return;

  const gtmId = getGtmIdForDomain();
  if (!gtmId) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  // noscript fallback (voliteľné, ale ok)
  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.appendChild(noscript);

  window.__woGtmLoaded = true;
}
