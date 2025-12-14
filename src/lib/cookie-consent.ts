export type CookieConsent = {
  necessary: true;         // vždy true
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: number;
};

const KEY = "wo_cookie_consent_v1";

export function getConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function setConsent(consent: Omit<CookieConsent, "timestamp">) {
  const payload: CookieConsent = { ...consent, timestamp: Date.now() };
  localStorage.setItem(KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent("wo:cookie-consent", { detail: payload }));
}

export function clearConsent() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent("wo:cookie-consent-cleared"));
}
