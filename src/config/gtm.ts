// src/config/gtm.ts
export const GTM_IDS = {
  "test.weboptim.cz": "GTM-P2CRQJ5Z",
  "weboptim.cz": "GTM-P2CRQJ5Z",

  "test.weboptim.sk": "GTM-NBQ5BV5M",
  "weboptim.sk": "GTM-NBQ5BV5M",

  "test.weboptim.eu": "GTM-PQDJCZP",
  "weboptim.eu": "GTM-PQDJCZP",
} as const;

export const getGtmIdForDomain = () => {
  const host = window.location.hostname;
  return GTM_IDS[host as keyof typeof GTM_IDS] ?? null;
};
