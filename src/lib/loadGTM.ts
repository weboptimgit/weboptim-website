// src/lib/gtm-loader.ts
import { getGtmIdForDomain } from "@/config/gtm";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export function loadGtmOnce() {
  if (typeof window === "undefined") return;

  // aby sa to nenačítalo 2x
  if (document.getElementById("wo-gtm-script")) return;

  const gtmId = getGtmIdForDomain();
  if (!gtmId) return;

  // dataLayer init
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  // GTM script
  const s = document.createElement("script");
  s.id = "wo-gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(s);

  // noscript iframe (reálne v SPAs moc nedáva zmysel, ale nech je komplet)
  if (!document.getElementById("wo-gtm-noscript")) {
    const ns = document.createElement("noscript");
    ns.id = "wo-gtm-noscript";
    ns.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.prepend(ns);
  }
}
