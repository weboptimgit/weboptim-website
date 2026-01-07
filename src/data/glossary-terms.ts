import { Language } from "@/contexts/LanguageContext";

export interface GlossaryResource {
  title: string;
  url: string;
}

export interface GlossaryTermContent {
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  examples: string[];
  whyItMatters: string;
}

// Service link type for connecting terms to our services
export type ServiceKey = "buildingWebsite" | "ecommerceWebsite" | "seo" | "ppc" | "digitalization" | "graphicDesign";

export interface ServiceLink {
  serviceKey: ServiceKey;
  label: {
    EN: string;
    CZ: string;
    SK: string;
  };
}

export interface GlossaryTerm {
  slugs: {
    EN: string;
    CZ: string;
    SK: string;
  };
  category: string;
  relatedTerms: string[];
  serviceLinks?: ServiceLink[];
  resources?: GlossaryResource[];
  content: {
    EN: GlossaryTermContent;
    CZ: GlossaryTermContent;
    SK: GlossaryTermContent;
  };
}

// Helper function to find a glossary term by its display name (in any language)
export const findTermByName = (name: string, language: Language): { key: string; term: GlossaryTerm } | null => {
  const normalizedName = name.toLowerCase().trim();
  
  for (const [key, term] of Object.entries(glossaryTermsData)) {
    const termName = term.content[language].term.toLowerCase();
    // Check exact match or partial match
    if (termName === normalizedName || termName.includes(normalizedName) || normalizedName.includes(termName)) {
      return { key, term };
    }
  }
  
  // Also search in other languages as fallback
  for (const [key, term] of Object.entries(glossaryTermsData)) {
    for (const lang of ["EN", "CZ", "SK"] as Language[]) {
      const termName = term.content[lang].term.toLowerCase();
      if (termName === normalizedName || termName.includes(normalizedName) || normalizedName.includes(termName)) {
        return { key, term };
      }
    }
  }
  
  return null;
};

export const glossaryTermsData: Record<string, GlossaryTerm> = {
  sslhttps: {
  slugs: { SK: "ssl-https", CZ: "ssl-https", EN: "ssl-https" },
  category: "Security",
  relatedTerms: [
    "TLS",
    "SSL Certificate",
    "Encryption",
    "HSTS",
    "Man-in-the-Middle Attack"
  ],
  resources: [
    { title: "What is HTTPS?", url: "https://www.cloudflare.com/learning/ssl/what-is-https/" },
    { title: "Transport Layer Security (TLS) - MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security" },
    { title: "NIST SP 800-52 Rev. 2: Guidelines for the Selection, Configuration, and Use of TLS", url: "https://csrc.nist.gov/pubs/sp/800/52/r2/final" }
  ],
  content: {
    SK: {
      term: "SSL / HTTPS",
      shortDefinition: "Šifrovaná komunikácia medzi používateľom a webom",
      fullDefinition:
        "SSL (Secure Sockets Layer), dnes technicky presnejšie označované ako TLS, je bezpečnostná technológia, ktorá zabezpečuje šifrovanú komunikáciu medzi webovým serverom a používateľom. HTTPS je verzia protokolu HTTP, ktorá používa SSL/TLS šifrovanie, vďaka čomu sú prenášané údaje chránené pred odpočúvaním alebo manipuláciou. Keď používateľ navštívi web s HTTPS, všetky údaje, ako prihlasovacie údaje, formuláre alebo platobné informácie, sú prenášané v zašifrovanej podobe. SSL certifikát zároveň overuje identitu webovej stránky, čím znižuje riziko, že používateľ komunikuje s falošným alebo podvodným webom. V praxi je SSL/HTTPS základným bezpečnostným štandardom každého moderného webu.",
      whyItMatters:
        "SSL a HTTPS sú dôležité preto, lebo chránia citlivé údaje používateľov pred zachytením tretími stranami, najmä na verejných alebo nezabezpečených sieťach. Bez šifrovania môžu útočníci ľahko získať prihlasovacie údaje, osobné informácie alebo platobné dáta. Z pohľadu dôvery je HTTPS kľúčové, pretože používatelia dnes očakávajú, že web bude bezpečný, a prehliadače dokonca označujú nezabezpečené stránky ako nebezpečné. SSL má význam aj pre SEO, keďže vyhľadávače uprednostňujú zabezpečené weby vo výsledkoch vyhľadávania. Pre firmy je HTTPS nielen technickou nutnosťou, ale aj dôležitým signálom profesionality, dôveryhodnosti a zodpovedného prístupu k ochrane dát.",
      examples: [
        "Webová stránka používa HTTPS na ochranu údajov z kontaktných a registračných formulárov.",
        "E-shop šifruje platobné informácie zákazníkov pomocou SSL certifikátu.",
        "Prehliadače zobrazujú ikonu zámku pri zabezpečených webových stránkach.",
        "Nezabezpečený web bez HTTPS je označený ako „Nezabezpečený“, čo odrádza návštevníkov.",
        "Migrácia webu z HTTP na HTTPS zlepší bezpečnosť aj dôveryhodnosť stránky."
      ]
    },
    CZ: {
      term: "SSL / HTTPS",
      shortDefinition: "Šifrovaná komunikace mezi uživatelem a webem",
      fullDefinition:
        "SSL (Secure Sockets Layer), dnes technicky přesněji označované jako TLS, je bezpečnostní technologie, která zajišťuje šifrovanou komunikaci mezi webovým serverem a uživatelem. HTTPS je verze protokolu HTTP, která používá SSL/TLS šifrování, díky čemuž jsou přenášená data chráněna před odposlechem nebo manipulací. Když uživatel navštíví web s HTTPS, všechna data, jako přihlašovací údaje, formuláře nebo platební informace, jsou přenášena v zašifrované podobě. SSL certifikát zároveň ověřuje identitu webové stránky, čímž snižuje riziko, že uživatel komunikuje s falešným nebo podvodným webem. V praxi je SSL/HTTPS základním bezpečnostním standardem každého moderního webu.",
      whyItMatters:
        "SSL a HTTPS jsou důležité proto, protože chrání citlivé údaje uživatelů před zachycením třetími stranami, zejména na veřejných nebo nezabezpečených sítích. Bez šifrování mohou útočníci snadno získat přihlašovací údaje, osobní informace nebo platební data. Z pohledu důvěry je HTTPS klíčové, protože uživatelé dnes očekávají, že web bude bezpečný, a prohlížeče dokonce označují nezabezpečené stránky jako nebezpečné. SSL má význam i pro SEO, protože vyhledávače upřednostňují zabezpečené weby ve výsledcích vyhledávání. Pro firmy je HTTPS nejen technickou nutností, ale i důležitým signálem profesionality, důvěryhodnosti a odpovědného přístupu k ochraně dat.",
      examples: [
        "Webová stránka používá HTTPS k ochraně údajů z kontaktních a registračních formulářů.",
        "E-shop šifruje platební informace zákazníků pomocí SSL certifikátu.",
        "Prohlížeče zobrazují ikonu zámku u zabezpečených webových stránek.",
        "Nezabezpečený web bez HTTPS je označen jako „Nezabezpečený“, což odrazuje návštěvníky.",
        "Migrace webu z HTTP na HTTPS zlepší bezpečnost i důvěryhodnost stránky."
      ]
    },
    EN: {
      term: "SSL / HTTPS",
      shortDefinition: "Encrypted communication between the user and the web",
      fullDefinition:
        "SSL (Secure Sockets Layer), today more technically accurately referred to as TLS, is a security technology that ensures encrypted communication between a web server and a user. HTTPS is a version of the HTTP protocol that uses SSL/TLS encryption, which protects transmitted data from eavesdropping or manipulation. When a user visits a website with HTTPS, all data such as login credentials, forms, or payment information is transmitted in encrypted form. An SSL certificate also verifies the identity of the website, reducing the risk that the user is communicating with a fake or fraudulent site. In practice, SSL/HTTPS is a basic security standard for every modern website.",
      whyItMatters:
        "SSL and HTTPS are important because they protect users’ sensitive data from being intercepted by third parties, especially on public or unsecured networks. Without encryption, attackers can easily obtain login credentials, personal information, or payment data. From a trust perspective, HTTPS is crucial because users today expect a website to be secure, and browsers even label unsecured pages as dangerous. SSL also matters for SEO, since search engines prioritize secure websites in search results. For companies, HTTPS is not only a technical necessity but also an important signal of professionalism, credibility, and a responsible approach to data protection.",
      examples: [
        "A website uses HTTPS to protect data from contact and registration forms.",
        "An e-shop encrypts customers’ payment information using an SSL certificate.",
        "Browsers display a lock icon next to secure websites.",
        "An unsecured website without HTTPS is labeled as “Not Secure,” which discourages visitors.",
        "Migrating a website from HTTP to HTTPS improves both security and site credibility."
      ]
    }
  }
},

dvojfaktorovaautentifikacia2fa: {
  slugs: { SK: "dvojfaktorova-autentifikacia-2fa", CZ: "dvoufaktorova-autentifikace-2fa", EN: "two-factor-authentication-2fa" },
  category: "Security",
  relatedTerms: [
    "Multi-Factor Authentication",
    "Authenticator App",
    "One-Time Password",
    "Phishing-Resistant MFA",
    "Account Security"
  ],
  resources: [
    { title: "Multifactor Authentication - CISA", url: "https://www.cisa.gov/topics/cybersecurity-best-practices/multifactor-authentication" },
    { title: "Require Multifactor Authentication - CISA", url: "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication" },
    { title: "NIST SP 800-63-4 Digital Identity Guidelines", url: "https://pages.nist.gov/800-63-4/sp800-63.html" }
  ],
  content: {
    SK: {
      term: "Dvojfaktorová autentifikácia (2FA)",
      shortDefinition: "Dodatočná ochrana prístupu k účtom a systémom",
      fullDefinition:
        "Dvojfaktorová autentifikácia, skrátene 2FA, je bezpečnostný mechanizmus, ktorý vyžaduje overenie identity používateľa pomocou dvoch nezávislých faktorov. Prvým faktorom býva niečo, čo používateľ pozná, napríklad heslo, a druhým faktorom niečo, čo má alebo je, napríklad jednorazový kód v mobilnej aplikácii, SMS správa alebo biometrický údaj. Cieľom 2FA je zabezpečiť, že aj v prípade úniku hesla sa útočník bez druhého faktora nedostane k účtu. Tento spôsob overovania sa dnes používa pri prihlasovaní do e-mailov, bankových aplikácií, administrácií webov či interných firemných systémov. V praxi 2FA výrazne zvyšuje úroveň zabezpečenia bez potreby zložitých technických riešení.",
      whyItMatters:
        "Dvojfaktorová autentifikácia je dôležitá preto, lebo samotné heslá už dnes neposkytujú dostatočnú ochranu pred útokmi. Používatelia často používajú slabé alebo opakovane použité heslá, ktoré môžu uniknúť pri phishingu alebo úniku databáz. 2FA výrazne znižuje riziko neoprávneného prístupu, pretože útočník potrebuje aj druhý faktor, ku ktorému sa zvyčajne nedostane. Z pohľadu firiem 2FA chráni citlivé dáta, administrátorské účty a interné systémy pred prevzatím. Implementácia 2FA je jedným z najefektívnejších a zároveň najjednoduchších krokov, ktoré môže firma urobiť na zvýšenie svojej kybernetickej bezpečnosti.",
      examples: [
        "Zamestnanci sa prihlasujú do firemného e-mailu pomocou hesla a jednorazového kódu z mobilnej aplikácie.",
        "Administrátor WordPress webu musí potvrdiť prihlásenie cez 2FA, čím sa znižuje riziko napadnutia stránky.",
        "Bankové aplikácie vyžadujú potvrdenie prihlásenia alebo platby pomocou biometrie alebo SMS kódu.",
        "Aj pri úniku hesla útočník nedokáže získať prístup bez druhého faktora.",
        "Firma zavádza povinné 2FA pre všetky interné systémy ako súčasť bezpečnostnej politiky."
      ]
    },
    CZ: {
      term: "Dvoufaktorová autentifikace (2FA)",
      shortDefinition: "Dodatečná ochrana přístupu k účtům a systémům",
      fullDefinition:
        "Dvoufaktorová autentifikace, zkráceně 2FA, je bezpečnostní mechanismus, který vyžaduje ověření identity uživatele pomocí dvou nezávislých faktorů. Prvním faktorem bývá něco, co uživatel zná, například heslo, a druhým faktorem něco, co má nebo je, například jednorázový kód v mobilní aplikaci, SMS zpráva nebo biometrický údaj. Cílem 2FA je zajistit, že i v případě úniku hesla se útočník bez druhého faktoru nedostane k účtu. Tento způsob ověřování se dnes používá při přihlašování do e-mailů, bankovních aplikací, administrací webů či interních firemních systémů. V praxi 2FA výrazně zvyšuje úroveň zabezpečení bez potřeby složitých technických řešení.",
      whyItMatters:
        "Dvoufaktorová autentifikace je důležitá proto, protože samotná hesla už dnes neposkytují dostatečnou ochranu před útoky. Uživatelé často používají slabá nebo opakovaně použitá hesla, která mohou uniknout při phishingu nebo úniku databází. 2FA výrazně snižuje riziko neoprávněného přístupu, protože útočník potřebuje i druhý faktor, ke kterému se obvykle nedostane. Z pohledu firem 2FA chrání citlivá data, administrátorské účty a interní systémy před převzetím. Implementace 2FA je jedním z nejefektivnějších a zároveň nejjednodušších kroků, které může firma udělat pro zvýšení své kybernetické bezpečnosti.",
      examples: [
        "Zaměstnanci se přihlašují do firemního e-mailu pomocí hesla a jednorázového kódu z mobilní aplikace.",
        "Administrátor WordPress webu musí potvrdit přihlášení přes 2FA, čímž se snižuje riziko napadení stránky.",
        "Bankovní aplikace vyžadují potvrzení přihlášení nebo platby pomocí biometrie nebo SMS kódu.",
        "I při úniku hesla útočník nedokáže získat přístup bez druhého faktoru.",
        "Firma zavádí povinné 2FA pro všechny interní systémy jako součást bezpečnostní politiky."
      ]
    },
    EN: {
      term: "Two-factor authentication (2FA)",
      shortDefinition: "Additional protection for access to accounts and systems",
      fullDefinition:
        "Two-factor authentication, abbreviated 2FA, is a security mechanism that requires verifying a user’s identity using two independent factors. The first factor is usually something the user knows, such as a password, and the second factor is something they have or are, such as a one-time code in a mobile app, an SMS message, or a biometric attribute. The goal of 2FA is to ensure that even if a password is leaked, an attacker cannot access the account without the second factor. This verification method is commonly used today for logging into email, banking apps, website administrations, and internal corporate systems. In practice, 2FA significantly increases the level of security without requiring complex technical solutions.",
      whyItMatters:
        "Two-factor authentication is important because passwords alone no longer provide sufficient protection against attacks. Users often use weak or reused passwords that can be exposed through phishing or database leaks. 2FA significantly reduces the risk of unauthorized access because the attacker also needs the second factor, which they usually cannot obtain. From a company perspective, 2FA protects sensitive data, administrator accounts, and internal systems from takeover. Implementing 2FA is one of the most effective and at the same time simplest steps a company can take to increase its cybersecurity.",
      examples: [
        "Employees log in to corporate email using a password and a one-time code from a mobile app.",
        "A WordPress website administrator must confirm login via 2FA, reducing the risk of site compromise.",
        "Banking apps require confirming login or a payment using biometrics or an SMS code.",
        "Even if a password leaks, an attacker cannot gain access without the second factor.",
        "A company introduces mandatory 2FA for all internal systems as part of its security policy."
      ]
    }
  }
},

zalohovaniedatbackup: {
  slugs: { SK: "zalohovanie-dat-backup", CZ: "zalohovani-dat-backup", EN: "data-backup" },
  category: "Security",
  relatedTerms: [
    "Data Recovery",
    "Business Continuity",
    "Disaster Recovery",
    "RPO/RTO",
    "Ransomware Resilience"
  ],
  resources: [
    { title: "CIS Control 11: Data Recovery", url: "https://www.cisecurity.org/controls/data-recovery" },
    { title: "NIST SP 800-34 Rev. 1: Contingency Planning Guide", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final" },
    { title: "CIS Control 11: Data Recovery (CAS)", url: "https://cas.docs.cisecurity.org/en/latest/source/Controls11/" }
  ],
  content: {
    SK: {
      term: "Zálohovanie dát (Backup)",
      shortDefinition: "Ochrana dát pred stratou a zničením",
      fullDefinition:
        "Zálohovanie dát je proces vytvárania kópií digitálnych údajov, ktoré slúžia ako náhrada v prípade ich straty, poškodenia alebo zneprístupnenia. Zálohy môžu zahŕňať dokumenty, databázy, webové stránky, e-maily, systémy alebo celé servery. Vytvárajú sa na samostatných úložiskách, ktoré sú oddelené od pôvodných dát, napríklad na externých diskoch, cloudových službách alebo záložných serveroch. Zálohovanie môže prebiehať manuálne alebo automaticky v pravidelných intervaloch, aby boli údaje čo najaktuálnejšie. V praxi je backup základným pilierom bezpečnosti, pretože rieši situácie, keď zlyhajú všetky ostatné ochranné mechanizmy.",
      whyItMatters:
        "Zálohovanie dát je dôležité preto, lebo strata údajov môže mať pre firmu alebo jednotlivca katastrofálne následky. Dôvodom straty dát nemusí byť len kybernetický útok, ale aj technická porucha, ľudská chyba alebo fyzické poškodenie zariadenia. Bez aktuálnych záloh môže firma prísť o dôležité dokumenty, databázy zákazníkov alebo celé systémy, čo môže viesť k výpadku prevádzky a finančným stratám. Zálohy sú kľúčové aj pri ransomware útokoch, pretože umožňujú obnoviť dáta bez platenia výkupného. Pre zodpovedný prístup k bezpečnosti sú pravidelné a testované zálohy absolútnou nevyhnutnosťou.",
      examples: [
        "Firma automaticky zálohuje databázu webovej stránky každý deň na externý server.",
        "Cloudová služba uchováva viacero verzií súborov, aby bolo možné obnoviť starší stav.",
        "Po útoku ransomware firma obnoví systémy zo záloh bez zaplatenia výkupného.",
        "Zamestnanec omylom vymaže dôležité súbory, ktoré sa obnovia zo zálohy.",
        "IT oddelenie pravidelne testuje obnovu dát zo záloh, aby overilo ich funkčnosť."
      ]
    },
    CZ: {
      term: "Zálohování dat (Backup)",
      shortDefinition: "Ochrana dat před ztrátou a zničením",
      fullDefinition:
        "Zálohování dat je proces vytváření kopií digitálních údajů, které slouží jako náhrada v případě jejich ztráty, poškození nebo znepřístupnění. Zálohy mohou zahrnovat dokumenty, databáze, webové stránky, e-maily, systémy nebo celé servery. Vytvářejí se na samostatných úložištích, která jsou oddělena od původních dat, například na externích discích, cloudových službách nebo záložních serverech. Zálohování může probíhat manuálně nebo automaticky v pravidelných intervalech, aby byly údaje co nejaktuálnější. V praxi je backup základním pilířem bezpečnosti, protože řeší situace, kdy selžou všechny ostatní ochranné mechanismy.",
      whyItMatters:
        "Zálohování dat je důležité proto, protože ztráta údajů může mít pro firmu nebo jednotlivce katastrofální následky. Důvodem ztráty dat nemusí být jen kybernetický útok, ale i technická porucha, lidská chyba nebo fyzické poškození zařízení. Bez aktuálních záloh může firma přijít o důležité dokumenty, databáze zákazníků nebo celé systémy, což může vést k výpadku provozu a finančním ztrátám. Zálohy jsou klíčové i při ransomware útocích, protože umožňují obnovit data bez placení výkupného. Pro odpovědný přístup k bezpečnosti jsou pravidelné a testované zálohy absolutní nezbytností.",
      examples: [
        "Firma automaticky zálohuje databázi webové stránky každý den na externí server.",
        "Cloudová služba uchovává více verzí souborů, aby bylo možné obnovit starší stav.",
        "Po útoku ransomware firma obnoví systémy ze záloh bez zaplacení výkupného.",
        "Zaměstnanec omylem smaže důležité soubory, které se obnoví ze zálohy.",
        "IT oddělení pravidelně testuje obnovu dat ze záloh, aby ověřilo jejich funkčnost."
      ]
    },
    EN: {
      term: "Data backup (Backup)",
      shortDefinition: "Protecting data from loss and destruction",
      fullDefinition:
        "Data backup is the process of creating copies of digital information that serve as a replacement in case of loss, damage, or unavailability. Backups can include documents, databases, websites, emails, systems, or entire servers. They are created on separate storage that is isolated from the original data, such as external drives, cloud services, or backup servers. Backups can be performed manually or automatically at regular intervals to keep data as up to date as possible. In practice, backup is a fundamental pillar of security because it addresses situations where all other protective mechanisms fail.",
      whyItMatters:
        "Data backup is important because data loss can have catastrophic consequences for a company or an individual. The cause of data loss does not have to be only a cyberattack, but also a technical failure, human error, or physical damage to a device. Without current backups, a company can lose important documents, customer databases, or entire systems, which can lead to operational downtime and financial losses. Backups are also crucial during ransomware attacks because they make it possible to restore data without paying a ransom. For a responsible approach to security, regular and tested backups are an absolute necessity.",
      examples: [
        "A company automatically backs up a website database every day to an external server.",
        "A cloud service keeps multiple file versions so an older state can be restored.",
        "After a ransomware attack, the company restores systems from backups without paying the ransom.",
        "An employee accidentally deletes important files that are restored from a backup.",
        "The IT department regularly tests data restoration from backups to verify they work."
      ]
    }
  }
},

aktualizacieabezpecnostnezaplatysecuritypatches: {
  slugs: { SK: "aktualizacie-a-bezpecnostne-zaplaty-security-patches", CZ: "aktualizace-a-bezpecnostni-zaplaty-security-patches", EN: "security-patches" },
  category: "Security",
  relatedTerms: [
    "Patch Management",
    "Vulnerability Management",
    "Known Exploited Vulnerabilities",
    "CVE",
    "Attack Surface"
  ],
  resources: [
    { title: "NIST SP 800-40 Rev. 4: Guide to Enterprise Patch Management Planning", url: "https://csrc.nist.gov/pubs/sp/800/40/r4/final" },
    { title: "Known Exploited Vulnerabilities Catalog - CISA", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" },
    { title: "CIS Control 7: Continuous Vulnerability Management", url: "https://www.cisecurity.org/controls/continuous-vulnerability-management" }
  ],
  content: {
    SK: {
      term: "Aktualizácie a bezpečnostné záplaty (Security Patches)",
      shortDefinition: "Opravy chýb a zraniteľností v systémoch",
      fullDefinition:
        "Aktualizácie a bezpečnostné záplaty, často označované ako security patches, sú úpravy softvéru, ktoré opravujú zistené chyby, slabiny alebo bezpečnostné zraniteľnosti v systémoch, aplikáciách a zariadeniach. Výrobcovia softvéru ich vydávajú pravidelne po tom, čo sa objaví nová hrozba alebo sa odhalí spôsob, akým môžu útočníci zneužiť konkrétnu chybu. Aktualizácie môžu zahŕňať opravy jadra systému, doplnkov, pluginov, redakčných systémov alebo serverových služieb. Ich cieľom nie je len pridávanie nových funkcií, ale predovšetkým zvýšenie bezpečnosti a stability. V praxi sú bezpečnostné záplaty neoddeliteľnou súčasťou údržby každého digitálneho riešenia.",
      whyItMatters:
        "Bezpečnostné aktualizácie sú dôležité preto, lebo väčšina kybernetických útokov zneužíva práve známe a neopravené zraniteľnosti. Ak firma nepoužíva aktuálnu verziu softvéru, vystavuje sa riziku, že útočník získa prístup k jej systémom bez potreby zložitých útokov. Odkladanie aktualizácií často vedie k situáciám, kde je web alebo systém napadnutý aj napriek iným bezpečnostným opatreniam. Pravidelné aktualizácie znižujú riziko výpadkov, únikov dát a poškodenia reputácie. Z pohľadu zodpovedného podnikania sú bezpečnostné záplaty základným hygienickým štandardom v oblasti IT a kybernetickej bezpečnosti.",
      examples: [
        "WordPress web je napadnutý preto, že používa starú verziu pluginu so známou bezpečnostnou chybou.",
        "Firma má nastavené automatické aktualizácie operačných systémov na pracovných staniciach.",
        "Hostingová spoločnosť pravidelne aplikuje bezpečnostné záplaty na serveroch.",
        "IT tím testuje aktualizácie najprv v testovacom prostredí pred nasadením do produkcie.",
        "Pravidelná údržba systémov znižuje počet bezpečnostných incidentov a výpadkov."
      ]
    },
    CZ: {
      term: "Aktualizace a bezpečnostní záplaty (Security Patches)",
      shortDefinition: "Opravy chyb a zranitelností v systémech",
      fullDefinition:
        "Aktualizace a bezpečnostní záplaty, často označované jako security patches, jsou úpravy softwaru, které opravují zjištěné chyby, slabiny nebo bezpečnostní zranitelnosti v systémech, aplikacích a zařízeních. Výrobci softwaru je vydávají pravidelně poté, co se objeví nová hrozba nebo se odhalí způsob, jak mohou útočníci zneužít konkrétní chybu. Aktualizace mohou zahrnovat opravy jádra systému, doplňků, pluginů, redakčních systémů nebo serverových služeb. Jejich cílem není jen přidávání nových funkcí, ale především zvýšení bezpečnosti a stability. V praxi jsou bezpečnostní záplaty neoddělitelnou součástí údržby každého digitálního řešení.",
      whyItMatters:
        "Bezpečnostní aktualizace jsou důležité proto, protože většina kybernetických útoků zneužívá právě známé a neopravované zranitelnosti. Pokud firma nepoužívá aktuální verzi softwaru, vystavuje se riziku, že útočník získá přístup k jejím systémům bez potřeby složitých útoků. Odkládání aktualizací často vede k situacím, kdy je web nebo systém napaden i přes jiná bezpečnostní opatření. Pravidelné aktualizace snižují riziko výpadků, úniků dat a poškození reputace. Z pohledu odpovědného podnikání jsou bezpečnostní záplaty základním hygienickým standardem v oblasti IT a kybernetické bezpečnosti.",
      examples: [
        "WordPress web je napaden, protože používá starou verzi pluginu se známou bezpečnostní chybou.",
        "Firma má nastavené automatické aktualizace operačních systémů na pracovních stanicích.",
        "Hostingová společnost pravidelně aplikuje bezpečnostní záplaty na serverech.",
        "IT tým testuje aktualizace nejprve v testovacím prostředí před nasazením do produkce.",
        "Pravidelná údržba systémů snižuje počet bezpečnostních incidentů a výpadků."
      ]
    },
    EN: {
      term: "Updates and security patches (Security Patches)",
      shortDefinition: "Fixes for errors and vulnerabilities in systems",
      fullDefinition:
        "Updates and security patches, often referred to as security patches, are software changes that fix discovered errors, weaknesses, or security vulnerabilities in systems, applications, and devices. Software vendors release them regularly after a new threat emerges or a way is discovered for attackers to exploit a specific flaw. Updates can include fixes for the operating system core, add-ons, plugins, content management systems, or server services. Their goal is not only to add new features but primarily to increase security and stability. In practice, security patches are an integral part of maintaining every digital solution.",
      whyItMatters:
        "Security updates are important because most cyberattacks exploit known and unpatched vulnerabilities. If a company does not use an up-to-date software version, it risks an attacker gaining access to its systems without needing sophisticated attacks. Delaying updates often leads to situations where a website or system is compromised despite other security measures. Regular updates reduce the risk of outages, data breaches, and reputational damage. From the perspective of responsible business, security patches are a basic hygiene standard in IT and cybersecurity.",
      examples: [
        "A WordPress site is attacked because it uses an old plugin version with a known security flaw.",
        "A company enables automatic operating system updates on workstations.",
        "A hosting provider regularly applies security patches on servers.",
        "The IT team tests updates in a staging environment before deploying to production.",
        "Regular system maintenance reduces the number of security incidents and outages."
      ]
    }
  }
},

spravapristupovaopravneniaccessmanagement: {
  slugs: { SK: "sprava-pristupov-a-opravneni-access-management", CZ: "sprava-pristupu-a-opravneni-access-management", EN: "access-management" },
  category: "Security",
  relatedTerms: [
    "Least Privilege",
    "Role-Based Access Control",
    "Account Management",
    "Privileged Access Management",
    "Identity and Access Management"
  ],
  resources: [
    { title: "NIST SP 800-53 (AC family): Access Control", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" },
    { title: "AC-6: Least Privilege (NIST SP 800-53 reference)", url: "https://csf.tools/reference/nist-sp-800-53/r5/ac/ac-6/" },
    { title: "AC-2: Account Management (NIST SP 800-53 reference)", url: "https://csf.tools/reference/nist-sp-800-53/r5/ac/ac-2/" }
  ],
  content: {
    SK: {
      term: "Správa prístupov a oprávnení (Access Management)",
      shortDefinition: "Riadenie toho, kto má k čomu prístup",
      fullDefinition:
        "Správa prístupov a oprávnení, často označovaná ako access management, je proces, ktorým firma kontroluje, kto má prístup k jednotlivým systémom, dátam a funkciám. Zahŕňa vytváranie používateľských účtov, prideľovanie rolí, nastavovanie oprávnení a ich pravidelnú kontrolu. Cieľom je zabezpečiť, aby každý používateľ mal prístup len k tým informáciám a nástrojom, ktoré skutočne potrebuje na svoju prácu. Access management rieši aj situácie, keď zamestnanec mení pozíciu alebo odchádza z firmy, aby mu boli prístupy včas upravené alebo zrušené. V praxi ide o kombináciu technických nastavení a interných pravidiel, ktoré chránia firmu pred zneužitím prístupov.",
      whyItMatters:
        "Správa prístupov je dôležitá preto, lebo nekontrolované alebo nadmerné oprávnenia výrazne zvyšujú bezpečnostné riziká. Ak má príliš veľa ľudí prístup k citlivým dátam alebo administrácii systémov, zvyšuje sa pravdepodobnosť úniku informácií, chýb alebo úmyselného zneužitia. Z pohľadu firiem je access management kľúčový aj pri dodržiavaní legislatívnych povinností, napríklad v oblasti ochrany osobných údajov. Správne nastavené oprávnenia zároveň zvyšujú prehľadnosť a zodpovednosť, pretože je jasné, kto za čo nesie zodpovednosť. Pre bezpečné a udržateľné fungovanie firmy je správa prístupov základným pilierom kybernetickej bezpečnosti.",
      examples: [
        "Zamestnanci majú prístup len k tým systémom, ktoré potrebujú na svoju pracovnú pozíciu.",
        "Administrátorské práva sú obmedzené len na niekoľko overených osôb.",
        "Po odchode zamestnanca sú jeho prístupy okamžite zrušené.",
        "Externí dodávatelia majú dočasné a obmedzené prístupy.",
        "Firma pravidelne kontroluje a reviduje oprávnenia používateľov."
      ]
    },
    CZ: {
      term: "Správa přístupů a oprávnění (Access Management)",
      shortDefinition: "Řízení toho, kdo má k čemu přístup",
      fullDefinition:
        "Správa přístupů a oprávnění, často označovaná jako access management, je proces, kterým firma kontroluje, kdo má přístup k jednotlivým systémům, datům a funkcím. Zahrnuje vytváření uživatelských účtů, přidělování rolí, nastavování oprávnění a jejich pravidelnou kontrolu. Cílem je zajistit, aby každý uživatel měl přístup pouze k těm informacím a nástrojům, které skutečně potřebuje pro svou práci. Access management řeší i situace, kdy zaměstnanec mění pozici nebo odchází z firmy, aby mu byly přístupy včas upraveny nebo zrušeny. V praxi jde o kombinaci technických nastavení a interních pravidel, která chrání firmu před zneužitím přístupů.",
      whyItMatters:
        "Správa přístupů je důležitá proto, protože nekontrolovaná nebo nadměrná oprávnění výrazně zvyšují bezpečnostní rizika. Pokud má příliš mnoho lidí přístup k citlivým datům nebo administraci systémů, zvyšuje se pravděpodobnost úniku informací, chyb nebo úmyslného zneužití. Z pohledu firem je access management klíčový i při dodržování legislativních povinností, například v oblasti ochrany osobních údajů. Správně nastavená oprávnění zároveň zvyšují přehlednost a odpovědnost, protože je jasné, kdo za co nese odpovědnost. Pro bezpečné a udržitelné fungování firmy je správa přístupů základním pilířem kybernetické bezpečnosti.",
      examples: [
        "Zaměstnanci mají přístup jen k těm systémům, které potřebují pro svou pracovní pozici.",
        "Administrátorská práva jsou omezena jen na několik ověřených osob.",
        "Po odchodu zaměstnance jsou jeho přístupy okamžitě zrušeny.",
        "Externí dodavatelé mají dočasné a omezené přístupy.",
        "Firma pravidelně kontroluje a reviduje oprávnění uživatelů."
      ]
    },
    EN: {
      term: "Access management (Access Management)",
      shortDefinition: "Managing who has access to what",
      fullDefinition:
        "Access management, often referred to as access management, is the process by which a company controls who has access to specific systems, data, and functions. It includes creating user accounts, assigning roles, setting permissions, and regularly reviewing them. The goal is to ensure that each user has access only to the information and tools they truly need for their work. Access management also addresses situations where an employee changes position or leaves the company, so their access is adjusted or revoked in time. In practice, it is a combination of technical settings and internal rules that protect a company from abuse of access.",
      whyItMatters:
        "Access management is important because uncontrolled or excessive permissions significantly increase security risks. If too many people have access to sensitive data or system administration, the likelihood of information leaks, mistakes, or intentional abuse increases. From a business perspective, access management is also crucial for meeting legal obligations, for example in the area of personal data protection. Properly configured permissions also improve clarity and accountability because it is clear who is responsible for what. For secure and sustainable business operation, access management is a fundamental pillar of cybersecurity.",
      examples: [
        "Employees have access only to the systems they need for their job role.",
        "Administrative privileges are limited to only a few verified individuals.",
        "When an employee leaves, their access is revoked immediately.",
        "External vendors have temporary and limited access.",
        "The company regularly reviews and revises user permissions."
      ]
    }
  }
},
  phishing: {
      slugs: { SK: "phishing", CZ: "phishing", EN: "phishing" },
      category: "Security",
      relatedTerms: [
        "Social Engineering",
        "Email Security",
        "Credential Theft",
        "Spoofing",
        "Multi-Factor Authentication"
      ],
      resources: [
        { title: "What is Phishing?", url: "https://www.cisa.gov/phishing" },
        { title: "Phishing Attacks Explained", url: "https://www.cloudflare.com/learning/access-management/phishing-attack/" },
        { title: "Avoiding Phishing Attacks", url: "https://www.kaspersky.com/resource-center/threats/phishing" }
      ],
      content: {
        SK: {
          term: "Phishing",
          shortDefinition: "Podvodné získavanie citlivých údajov",
          fullDefinition:
            "Phishing je forma kybernetického útoku, pri ktorej sa útočník snaží podvodom vylákať citlivé informácie od používateľov, ako sú prihlasovacie údaje, heslá, čísla platobných kariet alebo osobné údaje. Najčastejšie sa phishing realizuje prostredníctvom e-mailov, SMS správ, falošných webových stránok alebo správ na sociálnych sieťach, ktoré sa tvária ako dôveryhodné zdroje. Útočník často napodobňuje komunikáciu známych firiem, bánk, kuriérskych služieb alebo interných systémov spoločnosti. Phishing útoky sú navrhnuté tak, aby pôsobili naliehavo a prinútili obeť konať rýchlo bez overenia pravosti správy. V digitálnom prostredí ide o jednu z najrozšírenejších foriem útokov, pretože cieli priamo na ľudský faktor.",
          whyItMatters:
            "Phishing je mimoriadne dôležitý bezpečnostný problém, pretože obchádza technické ochrany a zameriava sa na chyby v správaní ľudí. Aj dobre zabezpečený systém môže byť ohrozený, ak používateľ nevedomky poskytne svoje prihlasovacie údaje útočníkovi. Úspešný phishingový útok môže viesť k úniku citlivých dát, finančným stratám alebo úplnému prevzatiu firemných účtov. Pre firmy má phishing často vážne reputačné a právne dôsledky, najmä ak dôjde k ohrozeniu údajov zákazníkov. Prevencia phishingu je preto kľúčová a zahŕňa nielen technické opatrenia, ale aj pravidelné školenia a zvyšovanie povedomia zamestnancov.",
          examples: [
            "Zamestnanec dostane e-mail, ktorý sa tvári ako správa od banky a vyzýva ho na okamžité prihlásenie cez falošný odkaz.",
            "Podvodná SMS informuje o probléme s doručením balíka a vyžaduje zadanie údajov z platobnej karty.",
            "Útočník sa vydáva za interné IT oddelenie a žiada zamestnancov o reset hesla.",
            "Falošná prihlasovacia stránka zachytáva prihlasovacie údaje do firemných systémov.",
            "Pravidelné školenia pomáhajú zamestnancom phishing rozpoznať a nahlásiť."
          ]
        },
    
        CZ: {
          term: "Phishing",
          shortDefinition: "Podvodné získávání citlivých údajů",
          fullDefinition:
            "Phishing je forma kybernetického útoku, při kterém se útočník snaží podvodem vylákat citlivé informace od uživatelů, jako jsou přihlašovací údaje, hesla, čísla platebních karet nebo osobní údaje. Nejčastěji se phishing realizuje prostřednictvím e-mailů, SMS zpráv, falešných webových stránek nebo zpráv na sociálních sítích, které se tváří jako důvěryhodné zdroje. Útočník často napodobuje komunikaci známých firem, bank, kurýrních služeb nebo interních systémů společnosti. Phishingové útoky jsou navrženy tak, aby působily naléhavě a přiměly oběť jednat rychle bez ověření pravosti zprávy. V digitálním prostředí jde o jednu z nejrozšířenějších forem útoků, protože cílí přímo na lidský faktor.",
          whyItMatters:
            "Phishing je mimořádně důležitý bezpečnostní problém, protože obchází technické ochrany a zaměřuje se na chyby v chování lidí. I dobře zabezpečený systém může být ohrožen, pokud uživatel nevědomky poskytne své přihlašovací údaje útočníkovi. Úspěšný phishingový útok může vést k úniku citlivých dat, finančním ztrátám nebo úplnému převzetí firemních účtů. Pro firmy má phishing často vážné reputační a právní důsledky, zejména pokud dojde k ohrožení údajů zákazníků. Prevence phishingu je proto klíčová a zahrnuje nejen technická opatření, ale i pravidelná školení a zvyšování povědomí zaměstnanců.",
          examples: [
            "Zaměstnanec obdrží e-mail, který se tváří jako zpráva od banky a vyzývá k okamžitému přihlášení přes falešný odkaz.",
            "Podvodná SMS informuje o problému s doručením balíku a vyžaduje zadání údajů z platební karty.",
            "Útočník se vydává za interní IT oddělení a žádá zaměstnance o reset hesla.",
            "Falešná přihlašovací stránka zachytává přihlašovací údaje do firemních systémů.",
            "Pravidelná školení pomáhají zaměstnancům phishing rozpoznat a nahlásit."
          ]
        },
    
        EN: {
          term: "Phishing",
          shortDefinition: "Fraudulent acquisition of sensitive information",
          fullDefinition:
            "Phishing is a form of cyberattack in which an attacker attempts to fraudulently obtain sensitive information from users, such as login credentials, passwords, payment card numbers, or personal data. Phishing is most commonly carried out via emails, SMS messages, fake websites, or social media messages that appear to come from trusted sources. Attackers often imitate communication from well-known companies, banks, courier services, or internal corporate systems. Phishing attacks are designed to create a sense of urgency and pressure victims to act quickly without verifying the authenticity of the message. In the digital environment, phishing is one of the most widespread forms of attacks because it directly targets the human factor.",
          whyItMatters:
            "Phishing is an extremely important security issue because it bypasses technical protections and focuses on human behavior errors. Even a well-secured system can be compromised if a user unknowingly provides their login credentials to an attacker. A successful phishing attack can lead to data breaches, financial losses, or complete takeover of corporate accounts. For companies, phishing often has serious reputational and legal consequences, especially if customer data is compromised. Phishing prevention is therefore critical and includes not only technical measures but also regular training and awareness programs for employees.",
          examples: [
            "An employee receives an email posing as a bank message urging immediate login via a fake link.",
            "A fraudulent SMS reports a delivery issue and requests payment card details.",
            "An attacker impersonates the internal IT department and asks employees to reset their passwords.",
            "A fake login page captures credentials for corporate systems.",
            "Regular training helps employees recognize and report phishing attempts."
          ]
        }
      }
    },
    
    ransomware: {
      slugs: { SK: "ransomware", CZ: "ransomware", EN: "ransomware" },
      category: "Security",
      relatedTerms: [
        "Malware",
        "Data Encryption",
        "Backup Strategy",
        "Incident Response",
        "Business Continuity"
      ],
      resources: [
        { title: "Ransomware Explained", url: "https://www.cisa.gov/ransomware" },
        { title: "What is Ransomware?", url: "https://www.cloudflare.com/learning/security/ransomware/"},
        { title: "Ransomware Prevention", url: "https://www.kaspersky.com/resource-center/threats/ransomware" }
      ],
      content: {
        SK: {
          term: "Ransomware",
          shortDefinition: "Vydieračský škodlivý softvér",
          fullDefinition:
            "Ransomware je špecifický typ malwaru, ktorého cieľom je zablokovať prístup k dátam alebo celému systému obete a následne požadovať výkupné za ich obnovenie. Najčastejšie funguje tak, že po infikovaní zariadenia zašifruje súbory na počítači alebo serveri, čím ich spraví nepoužiteľnými. Útočníci potom kontaktujú obeť prostredníctvom správy na obrazovke alebo e-mailu a požadujú zaplatenie výkupného, často v kryptomenách. Ransomware sa do systému dostáva podobne ako iný malware, napríklad cez phishingové e-maily, nezabezpečené vzdialené prístupy alebo zraniteľný softvér. V posledných rokoch sa ransomware stal jednou z najnebezpečnejších kybernetických hrozieb, pretože cieli najmä na firmy, nemocnice a inštitúcie s kritickými dátami.",
          whyItMatters:
            "Ransomware je dôležitý bezpečnostný problém preto, lebo jeho dopady môžu byť pre firmu likvidačné. Útok môže paralyzovať prevádzku na niekoľko dní alebo týždňov, čo vedie k výpadkom služieb, stratám príjmov a poškodeniu reputácie. Zaplatenie výkupného navyše nezaručuje, že útočníci dáta skutočne obnovia, a zároveň podporuje ďalšiu trestnú činnosť. Firmy často čelia aj právnym a regulačným dôsledkom, najmä ak dôjde k ohrozeniu osobných údajov. Prevencia proti ransomware útokom, ako sú zálohovanie dát a bezpečnostné opatrenia, je preto pre moderné podnikanie absolútne kľúčová.",
          examples: [
            "Zamestnanec otvorí infikovanú prílohu a ransomware zašifruje súbory na firemnom serveri.",
            "Firma stratí prístup k účtovnému systému počas uzávierky a nemôže fungovať.",
            "Útočníci požadujú výkupné v kryptomene za obnovenie dát.",
            "Zálohy umožnia firme obnoviť systémy bez zaplatenia výkupného.",
            "Pravidelné aktualizácie a školenia výrazne znižujú riziko útoku."
          ]
        },
    
        CZ: {
          term: "Ransomware",
          shortDefinition: "Vyděračský škodlivý software",
          fullDefinition:
            "Ransomware je specifický typ malwaru, jehož cílem je zablokovat přístup k datům nebo celému systému oběti a následně požadovat výkupné za jejich obnovení. Nejčastěji funguje tak, že po infikování zařízení zašifruje soubory na počítači nebo serveru, čímž je učiní nepoužitelnými. Útočníci poté kontaktují oběť prostřednictvím zprávy na obrazovce nebo e-mailu a požadují zaplacení výkupného, často v kryptoměnách. Ransomware se do systému dostává podobně jako jiný malware, například prostřednictvím phishingových e-mailů, nezabezpečených vzdálených přístupů nebo zranitelného softwaru. V posledních letech se ransomware stal jednou z nejnebezpečnějších kybernetických hrozeb, protože cílí zejména na firmy, nemocnice a instituce s kritickými daty.",
          whyItMatters:
            "Ransomware je důležitý bezpečnostní problém, protože jeho dopady mohou být pro firmu likvidační. Útok může paralyzovat provoz na několik dní nebo týdnů, což vede k výpadkům služeb, ztrátám příjmů a poškození reputace. Zaplacení výkupného navíc nezaručuje, že útočníci data skutečně obnoví, a zároveň podporuje další trestnou činnost. Firmy často čelí i právním a regulačním důsledkům, zejména pokud dojde k ohrožení osobních údajů. Prevence proti ransomware útokům, jako je zálohování dat a bezpečnostní opatření, je proto pro moderní podnikání naprosto klíčová.",
          examples: [
            "Zaměstnanec otevře infikovanou přílohu a ransomware zašifruje soubory na firemním serveru.",
            "Firma ztratí přístup k účetnímu systému během uzávěrky a nemůže fungovat.",
            "Útočníci požadují výkupné v kryptoměně za obnovení dat.",
            "Zálohy umožní firmě obnovit systémy bez zaplacení výkupného.",
            "Pravidelné aktualizace a školení výrazně snižují riziko útoku."
          ]
        },
    
        EN: {
          term: "Ransomware",
          shortDefinition: "Extortion-based malicious software",
          fullDefinition:
            "Ransomware is a specific type of malware designed to block access to a victim’s data or entire system and then demand a ransom for its restoration. It most commonly works by encrypting files on a computer or server after infection, rendering them unusable. Attackers then contact the victim via on-screen messages or email and demand payment, often in cryptocurrencies. Ransomware enters systems in similar ways to other malware, such as through phishing emails, unsecured remote access, or vulnerable software. In recent years, ransomware has become one of the most dangerous cyber threats, particularly targeting companies, hospitals, and institutions with critical data.",
          whyItMatters:
            "Ransomware is an important security issue because its impact can be devastating for businesses. An attack can paralyze operations for days or weeks, leading to service outages, revenue losses, and reputational damage. Paying the ransom does not guarantee that attackers will actually restore the data and also fuels further criminal activity. Companies often face legal and regulatory consequences, especially if personal data is compromised. Prevention against ransomware attacks, such as data backups and security measures, is therefore absolutely critical for modern businesses.",
          examples: [
            "An employee opens an infected attachment and ransomware encrypts files on the corporate server.",
            "A company loses access to its accounting system during a critical closing period.",
            "Attackers demand a ransom in cryptocurrency for data recovery.",
            "Backups allow the company to restore systems without paying the ransom.",
            "Regular updates and training significantly reduce the risk of attack."
          ]
        }
      }
    },
    
    firewall: {
      slugs: { SK: "firewall", CZ: "firewall", EN: "firewall" },
      category: "Security",
      relatedTerms: [
        "Network Security",
        "Access Control",
        "Intrusion Prevention",
        "Packet Filtering",
        "Zero Trust"
      ],
      resources: [
        { title: "What is a Firewall?", url: "https://www.cisa.gov/firewalls" },
        { title: "Firewall Explained", url: "https://www.cloudflare.com/learning/security/what-is-a-firewall/" },
        { title: "Network Firewalls Overview", url: "https://www.paloaltonetworks.com/cyberpedia/what-is-a-firewall" }
      ],
      content: {
        SK: {
          term: "Firewall",
          shortDefinition: "Ochranná bariéra medzi sieťou a hrozbami",
          fullDefinition:
            "Firewall je bezpečnostný mechanizmus, ktorý slúži ako ochranná bariéra medzi internou sieťou alebo zariadením a vonkajším prostredím, najčastejšie internetom. Jeho úlohou je kontrolovať prichádzajúcu a odchádzajúcu komunikáciu a rozhodovať, ktoré dáta sú povolené a ktoré majú byť zablokované. Firewall funguje na základe vopred definovaných pravidiel, ktoré určujú, aký typ komunikácie je považovaný za bezpečný. Môže mať podobu softvéru nainštalovaného na zariadení alebo samostatného hardvérového zariadenia chrániaceho celú sieť. V praxi je firewall jednou zo základných vrstiev kybernetickej ochrany, ktorá pomáha zabrániť neoprávneným prístupom a útokom ešte predtým, než sa dostanú k citlivým systémom.",
          whyItMatters:
            "Firewall je dôležitý preto, lebo predstavuje prvú líniu obrany proti širokému spektru kybernetických hrozieb. Bez firewallu by boli systémy a siete vystavené priamemu prístupu útočníkov, ktorí by mohli zneužívať otvorené porty alebo slabiny v službách. Správne nakonfigurovaný firewall dokáže výrazne znížiť riziko útokov tým, že obmedzí komunikáciu len na nevyhnutné služby. Z pohľadu firmy firewall chráni nielen technickú infraštruktúru, ale aj dáta zákazníkov a interné informácie. Pre dlhodobú bezpečnosť podnikania je firewall nevyhnutným prvkom, ktorý dopĺňa ďalšie bezpečnostné opatrenia, ako sú antivírusy, monitoring a školenia zamestnancov.",
          examples: [
            "Firemná sieť používa firewall na blokovanie pokusov o prístup z neznámych alebo podozrivých IP adries.",
            "Firewall povoľuje len nevyhnutné služby, ako je web alebo e-mail, a ostatnú komunikáciu automaticky blokuje.",
            "Malá firma využíva softvérový firewall na ochranu jednotlivých počítačov.",
            "Väčšie organizácie používajú hardvérové firewally na ochranu celej internej siete.",
            "Firewall zaznamenáva pokusy o útok, ktoré môže bezpečnostný tím ďalej analyzovať."
          ]
        },
    
        CZ: {
          term: "Firewall",
          shortDefinition: "Ochranná bariéra mezi sítí a hrozbami",
          fullDefinition:
            "Firewall je bezpečnostní mechanismus, který slouží jako ochranná bariéra mezi interní sítí nebo zařízením a vnějším prostředím, nejčastěji internetem. Jeho úkolem je kontrolovat příchozí a odchozí komunikaci a rozhodovat, která data jsou povolena a která mají být blokována. Firewall funguje na základě předem definovaných pravidel, která určují, jaký typ komunikace je považován za bezpečný. Může mít podobu softwaru nainstalovaného na zařízení nebo samostatného hardwarového zařízení chránícího celou síť. V praxi je firewall jednou ze základních vrstev kybernetické ochrany, která pomáhá zabránit neoprávněným přístupům a útokům ještě předtím, než se dostanou k citlivým systémům.",
          whyItMatters:
            "Firewall je důležitý, protože představuje první linii obrany proti širokému spektru kybernetických hrozeb. Bez firewallu by byly systémy a sítě vystaveny přímému přístupu útočníků, kteří by mohli zneužívat otevřené porty nebo slabiny ve službách. Správně nakonfigurovaný firewall dokáže výrazně snížit riziko útoků tím, že omezí komunikaci pouze na nezbytné služby. Z pohledu firmy firewall chrání nejen technickou infrastrukturu, ale i data zákazníků a interní informace. Pro dlouhodobou bezpečnost podnikání je firewall nezbytným prvkem, který doplňuje další bezpečnostní opatření, jako jsou antiviry, monitoring a školení zaměstnanců.",
          examples: [
            "Firemní síť používá firewall k blokování pokusů o přístup z neznámých nebo podezřelých IP adres.",
            "Firewall povoluje pouze nezbytné služby, jako je web nebo e-mail, a ostatní komunikaci automaticky blokuje.",
            "Malá firma využívá softwarový firewall k ochraně jednotlivých počítačů.",
            "Větší organizace používají hardwarové firewally k ochraně celé interní sítě.",
            "Firewall zaznamenává pokusy o útok, které může bezpečnostní tým dále analyzovat."
          ]
        },
    
        EN: {
          term: "Firewall",
          shortDefinition: "Protective barrier between a network and threats",
          fullDefinition:
            "A firewall is a security mechanism that serves as a protective barrier between an internal network or device and the external environment, most commonly the internet. Its role is to monitor incoming and outgoing communication and decide which data is allowed and which should be blocked. A firewall operates based on predefined rules that determine what type of communication is considered safe. It can take the form of software installed on a device or a standalone hardware appliance protecting an entire network. In practice, a firewall is one of the fundamental layers of cybersecurity protection that helps prevent unauthorized access and attacks before they reach sensitive systems.",
          whyItMatters:
            "A firewall is important because it represents the first line of defense against a wide range of cyber threats. Without a firewall, systems and networks would be exposed to direct attacker access, allowing exploitation of open ports or service vulnerabilities. A properly configured firewall can significantly reduce the risk of attacks by limiting communication to only essential services. From a business perspective, a firewall protects not only technical infrastructure but also customer data and internal information. For long-term business security, a firewall is an essential component that complements other security measures such as antivirus solutions, monitoring, and employee training.",
          examples: [
            "A corporate network uses a firewall to block access attempts from unknown or suspicious IP addresses.",
            "The firewall allows only essential services such as web and email while automatically blocking other traffic.",
            "A small business uses a software firewall to protect individual computers.",
            "Larger organizations use hardware firewalls to protect the entire internal network.",
            "The firewall logs attack attempts that can be further analyzed by the security team."
          ]
        }
      }
    },
  malware: {
    slugs: { SK: "malware", CZ: "malware", EN: "malware" },
    category: "Security",
    relatedTerms: [
      "Virus",
      "Trojan Horse",
      "Spyware",
      "Ransomware",
      "Endpoint Security"
    ],
    resources: [
      { title: "What is Malware?", url: "https://www.cisa.gov/news-events/news/what-malware" },
      { title: "Malware Explained", url: "https://www.kaspersky.com/resource-center/threats/malware" },
      { title: "Types of Malware", url: "https://www.cloudflare.com/learning/security/threats/what-is-malware/" }
    ],
    content: {
      SK: {
        term: "Malware",
        shortDefinition: "Škodlivý softvér",
        fullDefinition:
          "Malware je všeobecné označenie pre akýkoľvek škodlivý softvér, ktorého cieľom je poškodiť systém, získať neoprávnený prístup k dátam alebo narušiť bežné fungovanie zariadení a služieb. Pod pojem malware patria rôzne typy hrozieb, ako sú vírusy, trójske kone, spyware, ransomware alebo adware. Malware sa môže dostať do systému prostredníctvom infikovaných e-mailových príloh, podvodných odkazov, nezabezpečených webových stránok alebo zraniteľného softvéru. Často funguje skryto, bez vedomia používateľa, a postupne zbiera údaje, mení správanie systému alebo otvára dvere ďalším útokom. V digitálnom prostredí je malware jednou z najčastejších a najnebezpečnejších bezpečnostných hrozieb.",
        whyItMatters:
          "Malware je dôležitá téma preto, lebo jeho dôsledky môžu byť pre firmu alebo jednotlivca veľmi vážne. Infikovaný systém môže viesť k úniku citlivých údajov, strate prístupov, finančným stratám alebo úplnému vyradeniu služieb z prevádzky. V prípade firiem môže malware ohroziť osobné údaje zákazníkov, obchodné tajomstvá alebo interné dokumenty, čo má priamy dopad na dôveru a reputáciu. Odstránenie následkov malware útoku býva časovo aj finančne náročné a často si vyžaduje zásah odborníkov. Prevencia proti malwaru je preto kľúčová súčasť kybernetickej bezpečnosti a základná povinnosť každého, kto pracuje s digitálnymi systémami.",
        examples: [
          "Zamestnanec otvorí e-mailovú prílohu, ktorá obsahuje malware a infikuje firemnú sieť.",
          "Webová stránka bez aktualizácií je napadnutá škodlivým skriptom, ktorý presmerúva návštevníkov na podvodné stránky.",
          "Ransomware zašifruje dáta na serveri a útočník požaduje výkupné za ich obnovenie.",
          "Spyware sleduje správanie používateľov a odosiela citlivé informácie útočníkovi.",
          "Antivírusový softvér zachytí a zablokuje malware ešte pred jeho spustením."
        ]
      },
  
      CZ: {
        term: "Malware",
        shortDefinition: "Škodlivý software",
        fullDefinition:
          "Malware je obecné označení pro jakýkoli škodlivý software, jehož cílem je poškodit systém, získat neoprávněný přístup k datům nebo narušit běžné fungování zařízení a služeb. Pod pojem malware patří různé typy hrozeb, jako jsou viry, trojské koně, spyware, ransomware nebo adware. Malware se může dostat do systému prostřednictvím infikovaných e-mailových příloh, podvodných odkazů, nezabezpečených webových stránek nebo zranitelného softwaru. Často funguje skrytě, bez vědomí uživatele, a postupně sbírá údaje, mění chování systému nebo otevírá dveře dalším útokům. V digitálním prostředí je malware jednou z nejčastějších a nejnebezpečnějších bezpečnostních hrozeb.",
        whyItMatters:
          "Malware je důležité téma, protože jeho důsledky mohou být pro firmu nebo jednotlivce velmi vážné. Infikovaný systém může vést k úniku citlivých údajů, ztrátě přístupů, finančním ztrátám nebo úplnému vyřazení služeb z provozu. V případě firem může malware ohrozit osobní údaje zákazníků, obchodní tajemství nebo interní dokumenty, což má přímý dopad na důvěru a reputaci. Odstranění následků malware útoku bývá časově i finančně náročné a často vyžaduje zásah odborníků. Prevence proti malwaru je proto klíčovou součástí kybernetické bezpečnosti a základní povinností každého, kdo pracuje s digitálními systémy.",
        examples: [
          "Zaměstnanec otevře e-mailovou přílohu, která obsahuje malware a infikuje firemní síť.",
          "Webová stránka bez aktualizací je napadena škodlivým skriptem, který přesměrovává návštěvníky na podvodné stránky.",
          "Ransomware zašifruje data na serveru a útočník požaduje výkupné za jejich obnovení.",
          "Spyware sleduje chování uživatelů a odesílá citlivé informace útočníkovi.",
          "Antivirový software zachytí a zablokuje malware ještě před jeho spuštěním."
        ]
      },
  
      EN: {
        term: "Malware",
        shortDefinition: "Malicious software",
        fullDefinition:
          "Malware is a general term for any malicious software designed to damage systems, gain unauthorized access to data, or disrupt the normal operation of devices and services. Malware includes various types of threats such as viruses, trojans, spyware, ransomware, or adware. It can enter a system through infected email attachments, fraudulent links, unsecured websites, or vulnerable software. Malware often operates silently without the user’s knowledge and gradually collects data, alters system behavior, or opens doors to further attacks. In the digital environment, malware is one of the most common and dangerous security threats.",
        whyItMatters:
          "Malware is an important issue because its consequences can be very serious for both companies and individuals. An infected system can lead to data breaches, loss of access, financial losses, or complete service outages. In companies, malware can compromise customer personal data, trade secrets, or internal documents, directly impacting trust and reputation. Removing the consequences of a malware attack is often time-consuming and costly and usually requires professional intervention. Malware prevention is therefore a key part of cybersecurity and a basic responsibility for anyone working with digital systems.",
        examples: [
          "An employee opens an email attachment containing malware and infects the corporate network.",
          "An outdated website is compromised by a malicious script that redirects visitors to fraudulent pages.",
          "Ransomware encrypts data on a server and attackers demand a ransom for recovery.",
          "Spyware monitors user behavior and sends sensitive information to attackers.",
          "Antivirus software detects and blocks malware before it is executed."
        ]
      }
    }
  },
  cybersecurity: {
    slugs: { EN: "cybersecurity", CZ: "kyberneticka-bezpecnost", SK: "kyberneticka-bezpecnost" },
    category: "Security",
    relatedTerms: [
      "Threat Landscape",
      "Vulnerability",
      "Risk Management",
      "Incident Response",
      "Zero Trust Architecture",
      "NIST Cybersecurity Framework",
      "ISO/IEC 27001"
    ],
    resources: [
      {
        title: "What is Cybersecurity? | CISA",
        url: "https://www.cisa.gov/news-events/news/what-cybersecurity"
      },
      {
        title: "Cybersecurity Glossary of Terms | SANS Institute",
        url: "https://www.sans.org/security-resources/glossary-of-terms"
      },
      {
        title: "Cybersecurity: Definition & Core Concepts | Palo Alto Networks",
        url: "https://www.paloaltonetworks.com/cyberpedia/what-is-cyber-security"
      },
      {
        title: "NIST Cybersecurity Framework",
        url: "https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework"
      },
      {
        title: "ISO/IEC 27001 Information Security Standard",
        url: "https://en.wikipedia.org/wiki/ISO/IEC_27001"
      }
    ],
    content: {
      SK: {
        term: "Kybernetická bezpečnosť",
        shortDefinition: "Ochrana digitálnych systémov, dát a používateľov",
        fullDefinition:
          "Kybernetická bezpečnosť je súbor postupov, technológií a pravidiel, ktorých cieľom je chrániť digitálne systémy, siete, zariadenia a dáta pred neoprávneným prístupom, útokmi alebo zneužitím. Zahŕňa ochranu webových stránok, serverov, databáz, e-mailovej komunikácie aj interných firemných systémov. Kybernetická bezpečnosť rieši nielen technické hrozby, ale aj ľudský faktor, ako sú slabé heslá, nepozornosť zamestnancov alebo podvodné e-maily. Jej cieľom je zabezpečiť dôvernosť, integritu a dostupnosť dát, teda aby sa k nim nedostal nepovolaný subjekt, neboli pozmenené a boli dostupné oprávneným osobám. V modernom digitálnom prostredí je kybernetická bezpečnosť neoddeliteľnou súčasťou fungovania každej firmy, bez ohľadu na jej veľkosť.",
        whyItMatters:
          "Kybernetická bezpečnosť je dôležitá preto, lebo digitálne útoky môžu firme spôsobiť obrovské finančné straty, poškodenie reputácie a právne dôsledky. Únik citlivých dát, ako sú osobné údaje zákazníkov alebo prístupové údaje, môže viesť k strate dôvery, ktorú je veľmi ťažké získať späť. Bezpečnostné incidenty často znamenajú výpadky systémov, čo môže paralyzovať prevádzku firmy na hodiny alebo dni. Z pohľadu legislatívy je kybernetická bezpečnosť dôležitá aj kvôli dodržiavaniu nariadení, ako je GDPR, ktoré ukladajú povinnosti v oblasti ochrany dát. Pre modernú firmu je kybernetická bezpečnosť nielen technickou otázkou, ale strategickým rozhodnutím, ktoré chráni jej budúcnosť.",
        examples: [
          "Firma zabezpečí svoje webové stránky proti útokom, ktoré sa snažia zneužiť slabiny v redakčnom systéme.",
          "Zamestnanci sú školení, aby rozoznali podvodné e-maily a neklikli na škodlivé odkazy.",
          "Pravidelné aktualizácie systémov a softvéru znižujú riziko zneužitia známych chýb.",
          "Firma používa viacfaktorové overovanie na ochranu prístupov do interných systémov.",
          "Zálohovanie dát chráni podnik pred stratou informácií v prípade útoku alebo technickej poruchy."
        ]
      },
      CZ: {
        term: "Kybernetická bezpečnost",
        shortDefinition: "Ochrana digitálních systémů, dat a uživatelů",
        fullDefinition:
          "Kybernetická bezpečnost je soubor postupů, technologií a pravidel, jejichž cílem je chránit digitální systémy, sítě, zařízení a data před neoprávněným přístupem, útoky nebo zneužitím. Zahrnuje ochranu webových stránek, serverů, databází, e-mailové komunikace i interních firemních systémů. Kybernetická bezpečnost řeší nejen technické hrozby, ale i lidský faktor, jako jsou slabá hesla, nepozornost zaměstnanců nebo podvodné e-maily. Jejím cílem je zajistit důvěrnost, integritu a dostupnost dat, tedy aby se k nim nedostal nepovolaný subjekt, nebyla pozměněna a byla dostupná oprávněným osobám. V moderním digitálním prostředí je kybernetická bezpečnost neoddělitelnou součástí fungování každé firmy, bez ohledu na její velikost.",
        whyItMatters:
          "Kybernetická bezpečnost je důležitá proto, že digitální útoky mohou firmě způsobit obrovské finanční ztráty, poškození reputace a právní důsledky. Únik citlivých dat, jako jsou osobní údaje zákazníků nebo přístupové údaje, může vést ke ztrátě důvěry, kterou je velmi těžké získat zpět. Bezpečnostní incidenty často znamenají výpadky systémů, což může paralyzovat provoz firmy na hodiny nebo dny. Z pohledu legislativy je kybernetická bezpečnost důležitá i kvůli dodržování předpisů, jako je GDPR, které ukládají povinnosti v oblasti ochrany dat. Pro moderní firmu je kybernetická bezpečnost nejen technickou záležitostí, ale strategickým rozhodnutím, které chrání její budoucnost.",
        examples: [
          "Firma zabezpečí své webové stránky proti útokům, které se snaží zneužít slabiny v redakčním systému.",
          "Zaměstnanci jsou školeni, aby rozeznali podvodné e-maily a neklikli na škodlivé odkazy.",
          "Pravidelné aktualizace systémů a softwaru snižují riziko zneužití známých chyb.",
          "Firma používá vícefaktorové ověřování k ochraně přístupů do interních systémů.",
          "Zálohování dat chrání podnik před ztrátou informací v případě útoku nebo technické poruchy."
        ]
      },
      EN: {
        term: "Cybersecurity",
        shortDefinition: "Protection of digital systems, data, and users",
        fullDefinition:
          "Cybersecurity is a set of practices, technologies, and rules designed to protect digital systems, networks, devices, and data from unauthorized access, attacks, or misuse. It includes protecting websites, servers, databases, email communication, and internal business systems. Cybersecurity addresses not only technical threats but also the human factor, such as weak passwords, employee inattentiveness, or phishing emails. Its goal is to ensure the confidentiality, integrity, and availability of data—that unauthorized entities cannot access it, that it is not altered, and that it is available to authorized persons. In the modern digital environment, cybersecurity is an integral part of the operation of every business, regardless of its size.",
        whyItMatters:
          "Cybersecurity is important because digital attacks can cause enormous financial losses, reputational damage, and legal consequences for a company. The leakage of sensitive data, such as customers’ personal information or access credentials, can lead to a loss of trust that is very difficult to regain. Security incidents often mean system outages, which can paralyze business operations for hours or days. From a legal perspective, cybersecurity is also crucial due to compliance with regulations such as GDPR, which impose obligations in the field of data protection. For a modern company, cybersecurity is not just a technical issue but a strategic decision that protects its future.",
        examples: [
          "A company secures its websites against attacks that attempt to exploit vulnerabilities in the content management system.",
          "Employees are trained to recognize phishing emails and not click on malicious links.",
          "Regular system and software updates reduce the risk of exploitation of known flaws.",
          "The company uses multi-factor authentication to protect access to internal systems.",
          "Data backups protect the business from loss of information in the event of an attack or technical failure."
        ]
      }
    }
  },
  sla: {
  slugs: { EN: "sla", CZ: "sla", SK: "sla" },
  category: "Business",
  relatedTerms: ["Workflow", "Deadline", "Projectový manažment", "Audit"],
  resources: [
    { title: "What is a service level agreement (SLA)?", url: "https://www.ibm.com/think/topics/service-level-agreement" },
    { title: "What Is SLA? Service Level Agreements Explained", url: "https://www.atlassian.com/itsm/service-request-management/slas" }
  ],
  content: {
    SK: {
      term: "SLA (Service Level Agreement)",
      shortDefinition: "Dohoda o úrovni poskytovaných služieb",
      fullDefinition:
        "SLA je formálna dohoda medzi poskytovateľom služby a klientom, ktorá definuje očakávanú úroveň kvality služieb. Obsahuje parametre ako dostupnosť, reakčný čas, rozsah podpory a spôsob riešenia problémov. SLA jasne stanovuje, čo klient môže očakávať a za akých podmienok. Slúži ako referenčný bod pri hodnotení výkonu služby. Zvyčajne je súčasťou zmluvy alebo samostatným dokumentom.",
      whyItMatters:
        "SLA chráni obe strany tým, že nastavuje jasné pravidlá spolupráce. Znižuje riziko nedorozumení a sporov pri očakávaniach kvality. Pomáha udržiavať konzistentnú úroveň služieb a zvyšuje dôveru klienta. Umožňuje merať výkon a vyvodzovať zodpovednosť pri nedodržaní podmienok. Pre firmy je SLA dôležitým nástrojom profesionality a transparentnosti.",
      examples: [
        "Reakčný čas podpory do 24 hodín.",
        "Garantovaná dostupnosť služby 99,9 %.",
        "Definované časy riešenia incidentov.",
        "Sankcie pri nedodržaní podmienok.",
        "SLA pre hostingové alebo IT služby."
      ]
    },
    CZ: {
      term: "SLA (Service Level Agreement)",
      shortDefinition: "Dohoda o úrovni poskytovaných služeb",
      fullDefinition:
        "SLA je formální dohoda mezi poskytovatelem služby a klientem, která definuje očekávanou úroveň kvality služeb. Obsahuje parametry jako dostupnost, reakční čas, rozsah podpory a způsob řešení problémů. SLA jasně stanovuje, co klient může očekávat a za jakých podmínek. Slouží jako referenční bod při hodnocení výkonu služby. Obvykle je součástí smlouvy nebo samostatným dokumentem.",
      whyItMatters:
        "SLA chrání obě strany tím, že nastavuje jasná pravidla spolupráce. Snižuje riziko nedorozumění a sporů při očekáváních kvality. Pomáhá udržovat konzistentní úroveň služeb a zvyšuje důvěru klienta. Umožňuje měřit výkon a vyvozovat odpovědnost při nedodržení podmínek. Pro firmy je SLA důležitým nástrojem profesionality a transparentnosti.",
      examples: [
        "Reakční čas podpory do 24 hodin.",
        "Garantovaná dostupnost služby 99,9 %.",
        "Definované časy řešení incidentů.",
        "Sankce při nedodržení podmínek.",
        "SLA pro hostingové nebo IT služby."
      ]
    },
    EN: {
      term: "SLA (Service Level Agreement)",
      shortDefinition: "Service level agreement",
      fullDefinition:
        "An SLA is a formal agreement between a service provider and a client that defines the expected level of service quality. It includes parameters such as availability, response time, scope of support, and how issues are handled. An SLA clearly states what the client can expect and under what conditions. It serves as a reference point when evaluating service performance. It is usually part of a contract or a standalone document.",
      whyItMatters:
        "An SLA protects both parties by setting clear rules for cooperation. It reduces the risk of misunderstandings and disputes about quality expectations. It helps maintain a consistent level of service and increases client trust. It enables performance measurement and accountability when conditions are not met. For companies, an SLA is an important tool of professionalism and transparency.",
      examples: [
        "Support response time within 24 hours.",
        "Guaranteed service availability of 99.9%.",
        "Defined incident resolution times.",
        "Penalties for not meeting conditions.",
        "An SLA for hosting or IT services."
      ]
    }
  }
},

workflow: {
  slugs: { EN: "workflow", CZ: "workflow", SK: "workflow" },
  category: "Business",
  relatedTerms: ["Projektový manažment", "Roadmap", "Deadline", "Onboarding"],
  resources: [
    { title: "What is Workflow Management?", url: "https://www.atlassian.com/agile/project-management/workflow-management" }
  ],
  content: {
    SK: {
      term: "Workflow",
      shortDefinition: "Pracovný postup",
      fullDefinition:
        "Workflow je definovaný sled krokov, ktorými prechádza úloha alebo proces od začiatku po dokončenie. Zahŕňa rozdelenie úloh, zodpovednosti a poradie činností. Workflow pomáha štandardizovať prácu a zabezpečiť konzistentné výsledky. Môže byť manuálny alebo automatizovaný pomocou nástrojov. Je základom efektívneho riadenia procesov.",
      whyItMatters:
        "Dobre nastavený workflow zvyšuje produktivitu a znižuje chybovosť. Umožňuje tímom pracovať koordinovane a prehľadne. Zjednodušuje zaškolenie nových členov tímu. Pomáha identifikovať úzke miesta a optimalizovať procesy. Pre firmy znamená vyššiu efektivitu a nižšie náklady.",
      examples: [
        "Proces spracovania objednávky od dopytu po fakturáciu.",
        "Schvaľovanie marketingových kampaní.",
        "Automatizované workflow v CRM systéme.",
        "Postup onboardingu nového klienta.",
        "Interné procesy v projektovom manažmente."
      ]
    },
    CZ: {
      term: "Workflow",
      shortDefinition: "Pracovní postup",
      fullDefinition:
        "Workflow je definovaná posloupnost kroků, kterými prochází úkol nebo proces od začátku po dokončení. Zahrnuje rozdělení úkolů, odpovědnosti a pořadí činností. Workflow pomáhá standardizovat práci a zajistit konzistentní výsledky. Může být manuální nebo automatizovaný pomocí nástrojů. Je základem efektivního řízení procesů.",
      whyItMatters:
        "Dobře nastavený workflow zvyšuje produktivitu a snižuje chybovost. Umožňuje týmům pracovat koordinovaně a přehledně. Zjednodušuje zaškolení nových členů týmu. Pomáhá identifikovat úzká místa a optimalizovat procesy. Pro firmy znamená vyšší efektivitu a nižší náklady.",
      examples: [
        "Proces zpracování objednávky od poptávky po fakturaci.",
        "Schvalování marketingových kampaní.",
        "Automatizovaný workflow v CRM systému.",
        "Postup onboardingu nového klienta.",
        "Interní procesy v projektovém managementu."
      ]
    },
    EN: {
      term: "Workflow",
      shortDefinition: "Work process",
      fullDefinition:
        "A workflow is a defined sequence of steps that a task or process goes through from start to completion. It includes task division, responsibilities, and the order of activities. A workflow helps standardize work and ensure consistent results. It can be manual or automated using tools. It is the foundation of effective process management.",
      whyItMatters:
        "A well-set workflow increases productivity and reduces errors. It allows teams to work in a coordinated and transparent way. It simplifies training new team members. It helps identify bottlenecks and optimize processes. For companies, it means higher efficiency and lower costs.",
      examples: [
        "Order processing from inquiry to invoicing.",
        "Approval of marketing campaigns.",
        "Automated workflow in a CRM system.",
        "New client onboarding process.",
        "Internal processes in project management."
      ]
    }
  }
},

deadline: {
  slugs: { EN: "deadline", CZ: "deadline", SK: "deadline" },
  category: "Business",
  relatedTerms: ["Roadmap", "Workflow", "SLA", "Projektový manažment"],
  resources: [
    { title: "DEADLINE | English meaning", url: "https://dictionary.cambridge.org/dictionary/english/deadline" }
  ],
  content: {
    SK: {
      term: "Deadline",
      shortDefinition: "Konečný termín",
      fullDefinition:
        "Deadline je dátum alebo čas, dokedy musí byť úloha alebo projekt dokončený. Slúži ako časový záväzok medzi tímami, klientmi alebo partnermi. Deadliny pomáhajú plánovať prácu a rozdeľovať kapacity. Môžu byť interné alebo externé. Dodržiavanie deadlineov je znakom profesionality.",
      whyItMatters:
        "Deadliny zabezpečujú plynulosť práce a zabraňujú zbytočnému odkladaniu úloh. Pomáhajú koordinovať tímové aktivity a závislosti medzi úlohami. Zvyšujú dôveru klientov a partnerov. Umožňujú lepšie plánovanie rozpočtov a zdrojov. Nedodržané deadliny môžu viesť k stratám a poškodeniu reputácie.",
      examples: [
        "Termín odovzdania webovej stránky.",
        "Deadline pre spustenie marketingovej kampane.",
        "Interný termín na schválenie dizajnu.",
        "Záväzný termín pre klienta.",
        "Harmonogram projektu s míľnikmi."
      ]
    },
    CZ: {
      term: "Deadline",
      shortDefinition: "Konečný termín",
      fullDefinition:
        "Deadline je datum nebo čas, do kdy musí být úkol nebo projekt dokončen. Slouží jako časový závazek mezi týmy, klienty nebo partnery. Deadliny pomáhají plánovat práci a rozdělovat kapacity. Mohou být interní nebo externí. Dodržování deadlinů je znakem profesionality.",
      whyItMatters:
        "Deadliny zajišťují plynulost práce a zabraňují zbytečnému odkládání úkolů. Pomáhají koordinovat týmové aktivity a závislosti mezi úkoly. Zvyšují důvěru klientů a partnerů. Umožňují lepší plánování rozpočtů a zdrojů. Nedodržené deadliny mohou vést ke ztrátám a poškození reputace.",
      examples: [
        "Termín odevzdání webové stránky.",
        "Deadline pro spuštění marketingové kampaně.",
        "Interní termín pro schválení designu.",
        "Závazný termín pro klienta.",
        "Harmonogram projektu s milníky."
      ]
    },
    EN: {
      term: "Deadline",
      shortDefinition: "Final due date",
      fullDefinition:
        "A deadline is a date or time by which a task or project must be completed. It serves as a time commitment between teams, clients, or partners. Deadlines help plan work and allocate capacity. They can be internal or external. Meeting deadlines is a sign of professionalism.",
      whyItMatters:
        "Deadlines ensure smooth work flow and prevent unnecessary postponement of tasks. They help coordinate team activities and dependencies between tasks. They increase trust from clients and partners. They allow better planning of budgets and resources. Missed deadlines can lead to losses and damage to reputation.",
      examples: [
        "Website delivery date.",
        "Deadline for launching a marketing campaign.",
        "Internal deadline for design approval.",
        "Binding due date for a client.",
        "Project timeline with milestones."
      ]
    }
  }
},

roadmap: {
  slugs: { EN: "roadmap", CZ: "roadmap", SK: "roadmap" },
  category: "Business",
  relatedTerms: ["Projektový manažment", "MVP", "Workflow", "Stakeholder"],
  resources: [
    { title: "Product Roadmap Guide: What is it & How to Create One", url: "https://www.atlassian.com/agile/product-management/product-roadmaps" }
  ],
  content: {
    SK: {
      term: "Roadmap",
      shortDefinition: "Plán budúceho vývoja",
      fullDefinition:
        "Roadmap je strategický plán, ktorý vizuálne alebo textovo znázorňuje smerovanie projektu alebo firmy v čase. Obsahuje hlavné ciele, míľniky a priority. Roadmap pomáha zosúladiť tím okolo spoločnej vízie. Nejde o detailný plán úloh, ale o prehľadný smer. Často sa aktualizuje podľa vývoja situácie.",
      whyItMatters:
        "Roadmap poskytuje jasný obraz o budúcnosti a prioritách. Pomáha predchádzať chaosu a nejasnostiam v rozhodovaní. Umožňuje lepšiu komunikáciu so stakeholdermi. Zvyšuje motiváciu tímu, pretože každý vie, kam projekt smeruje. Pre firmy je roadmap základom strategického plánovania.",
      examples: [
        "Produktová roadmapa na 12 mesiacov.",
        "Plán vývoja novej funkcionality.",
        "Strategické ciele firmy na rok.",
        "Fázy projektu rozdelené do kvartálov.",
        "Roadmap pre startupový produkt."
      ]
    },
    CZ: {
      term: "Roadmap",
      shortDefinition: "Plán budoucího vývoje",
      fullDefinition:
        "Roadmap je strategický plán, který vizuálně nebo textově znázorňuje směřování projektu nebo firmy v čase. Obsahuje hlavní cíle, milníky a priority. Roadmap pomáhá sladit tým kolem společné vize. Nejde o detailní plán úkolů, ale o přehledný směr. Často se aktualizuje podle vývoje situace.",
      whyItMatters:
        "Roadmap poskytuje jasný obraz o budoucnosti a prioritách. Pomáhá předcházet chaosu a nejasnostem v rozhodování. Umožňuje lepší komunikaci se stakeholdery. Zvyšuje motivaci týmu, protože každý ví, kam projekt směřuje. Pro firmy je roadmap základem strategického plánování.",
      examples: [
        "Produktová roadmapa na 12 měsíců.",
        "Plán vývoje nové funkcionality.",
        "Strategické cíle firmy na rok.",
        "Fáze projektu rozdělené do kvartálů.",
        "Roadmap pro startupový produkt."
      ]
    },
    EN: {
      term: "Roadmap",
      shortDefinition: "Future development plan",
      fullDefinition:
        "A roadmap is a strategic plan that visually or textually shows the direction of a project or company over time. It contains main goals, milestones, and priorities. A roadmap helps align the team around a shared vision. It is not a detailed task plan, but a clear direction. It is often updated as the situation evolves.",
      whyItMatters:
        "A roadmap provides a clear picture of the future and priorities. It helps prevent chaos and uncertainty in decision-making. It enables better communication with stakeholders. It increases team motivation because everyone knows where the project is heading. For companies, a roadmap is the foundation of strategic planning.",
      examples: [
        "A 12-month product roadmap.",
        "A plan for developing new functionality.",
        "Company strategic goals for the year.",
        "Project phases divided into quarters.",
        "A roadmap for a startup product."
      ]
    }
  }
},

project_management: {
  slugs: { EN: "project-management", CZ: "projektovy-manazment", SK: "projektovy-manazment" },
  category: "Business",
  relatedTerms: ["Roadmap", "Workflow", "Stakeholder", "Deadline"],
  resources: [
    { title: "What Is Project Management", url: "https://www.pmi.org/about/what-is-project-management" }
  ],
  content: {
    SK: {
      term: "Projektový manažment",
      shortDefinition: "Riadenie projektov",
      fullDefinition:
        "Projektový manažment je proces plánovania, riadenia a kontroly projektov od začiatku po dokončenie. Zahŕňa koordináciu ľudí, zdrojov, času a rozpočtu. Cieľom je dosiahnuť stanovené ciele v dohodnutom rozsahu. Projektový manažér dohliada na komunikáciu, kvalitu a dodržiavanie termínov. Ide o kľúčovú disciplínu v každej organizácii.",
      whyItMatters:
        "Projektový manažment zvyšuje pravdepodobnosť úspešného dokončenia projektov. Pomáha predchádzať chaosu, oneskoreniam a prekročeniu rozpočtu. Zabezpečuje jasnú komunikáciu medzi tímami a klientmi. Umožňuje efektívne riadenie rizík. Pre firmy znamená vyššiu kvalitu výstupov a spokojnejších zákazníkov.",
      examples: [
        "Riadenie vývoja webovej platformy.",
        "Koordinácia marketingovej kampane.",
        "Používanie nástrojov ako Asana alebo Trello.",
        "Riadenie IT projektov.",
        "Kontrola rozpočtu a harmonogramu."
      ]
    },
    CZ: {
      term: "Projektový management",
      shortDefinition: "Řízení projektů",
      fullDefinition:
        "Projektový management je proces plánování, řízení a kontroly projektů od začátku po dokončení. Zahrnuje koordinaci lidí, zdrojů, času a rozpočtu. Cílem je dosáhnout stanovených cílů v dohodnutém rozsahu. Projektový manažer dohlíží na komunikaci, kvalitu a dodržování termínů. Jde o klíčovou disciplínu v každé organizaci.",
      whyItMatters:
        "Projektový management zvyšuje pravděpodobnost úspěšného dokončení projektů. Pomáhá předcházet chaosu, zpožděním a překročení rozpočtu. Zajišťuje jasnou komunikaci mezi týmy a klienty. Umožňuje efektivní řízení rizik. Pro firmy znamená vyšší kvalitu výstupů a spokojenější zákazníky.",
      examples: [
        "Řízení vývoje webové platformy.",
        "Koordinace marketingové kampaně.",
        "Používání nástrojů jako Asana nebo Trello.",
        "Řízení IT projektů.",
        "Kontrola rozpočtu a harmonogramu."
      ]
    },
    EN: {
      term: "Project management",
      shortDefinition: "Project leadership",
      fullDefinition:
        "Project management is the process of planning, managing, and controlling projects from start to completion. It involves coordinating people, resources, time, and budget. The goal is to achieve defined objectives within the agreed scope. A project manager oversees communication, quality, and meeting deadlines. It is a key discipline in every organization.",
      whyItMatters:
        "Project management increases the probability of successfully completing projects. It helps prevent chaos, delays, and budget overruns. It ensures clear communication between teams and clients. It enables effective risk management. For companies, it means higher quality outputs and more satisfied customers.",
      examples: [
        "Managing the development of a web platform.",
        "Coordinating a marketing campaign.",
        "Using tools like Asana or Trello.",
        "Managing IT projects.",
        "Controlling budget and timeline."
      ]
    }
  }
},

mvp: {
  slugs: { EN: "mvp", CZ: "mvp", SK: "mvp" },
  category: "Business",
  relatedTerms: ["Roadmap", "Onboarding", "Projektový manažment", "KPI"],
  resources: [
    { title: "Minimum viable product (MVP): What is it & how to start", url: "https://www.atlassian.com/agile/product-management/minimum-viable-product" }
  ],
  content: {
    SK: {
      term: "MVP (Minimum Viable Product)",
      shortDefinition: "Minimálne funkčný produkt",
      fullDefinition:
        "MVP je verzia produktu, ktorá obsahuje len základné funkcie potrebné na jeho používanie. Slúži na rýchle overenie nápadu na trhu. MVP umožňuje získať spätnú väzbu od reálnych používateľov. Nejde o dokonalý produkt, ale o funkčný základ. Používa sa najmä v startupovom prostredí.",
      whyItMatters:
        "MVP znižuje riziko zlyhania produktu. Umožňuje testovať trh s minimálnymi nákladmi. Pomáha rýchlo identifikovať, čo funguje a čo nie. Skracuje čas uvedenia produktu na trh. Pre firmy je to efektívny spôsob inovácie.",
      examples: [
        "Jednoduchá verzia aplikácie.",
        "Základná verzia online platformy.",
        "Testovanie funkcií s prvými používateľmi.",
        "Pilotný projekt pre nový nápad.",
        "Zber spätnej väzby pred rozšírením."
      ]
    },
    CZ: {
      term: "MVP (Minimum Viable Product)",
      shortDefinition: "Minimálně funkční produkt",
      fullDefinition:
        "MVP je verze produktu, která obsahuje jen základní funkce potřebné pro jeho používání. Slouží k rychlému ověření nápadu na trhu. MVP umožňuje získat zpětnou vazbu od reálných uživatelů. Nejde o dokonalý produkt, ale o funkční základ. Používá se zejména ve startupovém prostředí.",
      whyItMatters:
        "MVP snižuje riziko selhání produktu. Umožňuje testovat trh s minimálními náklady. Pomáhá rychle identifikovat, co funguje a co ne. Zkracuje čas uvedení produktu na trh. Pro firmy je to efektivní způsob inovace.",
      examples: [
        "Jednoduchá verze aplikace.",
        "Základní verze online platformy.",
        "Testování funkcí s prvními uživateli.",
        "Pilotní projekt pro nový nápad.",
        "Sběr zpětné vazby před rozšířením."
      ]
    },
    EN: {
      term: "MVP (Minimum Viable Product)",
      shortDefinition: "Minimum viable product",
      fullDefinition:
        "An MVP is a version of a product that contains only the basic features needed to use it. It is used to quickly validate an idea in the market. An MVP allows you to get feedback from real users. It is not a perfect product, but a functional foundation. It is used mainly in the startup environment.",
      whyItMatters:
        "An MVP reduces the risk of product failure. It enables market testing with minimal costs. It helps quickly identify what works and what does not. It shortens the time to market. For companies, it is an effective way to innovate.",
      examples: [
        "A simple version of an app.",
        "A basic version of an online platform.",
        "Testing features with first users.",
        "A pilot project for a new idea.",
        "Collecting feedback before expansion."
      ]
    }
  }
},

onboarding: {
  slugs: { EN: "onboarding", CZ: "onboarding", SK: "onboarding" },
  category: "Business",
  relatedTerms: ["Workflow", "Retencia klienta", "SLA", "Projektový manažment"],
  resources: [
    { title: "Onboarding", url: "https://dictionary.cambridge.org/dictionary/english/onboarding" }
  ],
  content: {
    SK: {
      term: "Onboarding",
      shortDefinition: "Zavedenie zákazníka alebo zamestnanca",
      fullDefinition:
        "Onboarding je proces, ktorým sa nový zákazník alebo zamestnanec zoznamuje s produktom, službou alebo firmou. Zahŕňa úvodné informácie, návody a podporu. Cieľom je rýchle a bezproblémové zapojenie. Onboarding môže byť manuálny alebo automatizovaný. Je prvým dôležitým kontaktom so značkou.",
      whyItMatters:
        "Kvalitný onboarding zvyšuje spokojnosť a znižuje mieru odchodu. Pomáha rýchlejšie pochopiť hodnotu produktu. Znižuje počet otázok a podporu. Posilňuje dôveru a vzťah k značke. Pre firmy znamená vyššiu retenciu.",
      examples: [
        "Uvítacie e-maily po registrácii.",
        "Video návody k platforme.",
        "Sprievodca prvými krokmi.",
        "Úvodné školenie zamestnancov.",
        "Automatické onboardingové sekvencie."
      ]
    },
    CZ: {
      term: "Onboarding",
      shortDefinition: "Zavedení zákazníka nebo zaměstnance",
      fullDefinition:
        "Onboarding je proces, kterým se nový zákazník nebo zaměstnanec seznamuje s produktem, službou nebo firmou. Zahrnuje úvodní informace, návody a podporu. Cílem je rychlé a bezproblémové zapojení. Onboarding může být manuální nebo automatizovaný. Je prvním důležitým kontaktem se značkou.",
      whyItMatters:
        "Kvalitní onboarding zvyšuje spokojenost a snižuje míru odchodu. Pomáhá rychleji pochopit hodnotu produktu. Snižuje počet dotazů a zátěž podpory. Posiluje důvěru a vztah ke značce. Pro firmy znamená vyšší retenci.",
      examples: [
        "Uvítací e-maily po registraci.",
        "Video návody k platformě.",
        "Průvodce prvními kroky.",
        "Úvodní školení zaměstnanců.",
        "Automatické onboardingové sekvence."
      ]
    },
    EN: {
      term: "Onboarding",
      shortDefinition: "Introducing a customer or employee",
      fullDefinition:
        "Onboarding is the process through which a new customer or employee becomes familiar with a product, service, or company. It includes introductory information, guides, and support. The goal is quick and smooth adoption. Onboarding can be manual or automated. It is the first important contact with the brand.",
      whyItMatters:
        "High-quality onboarding increases satisfaction and reduces churn. It helps users understand the product’s value faster. It reduces the number of questions and support load. It strengthens trust and the relationship with the brand. For companies, it means higher retention.",
      examples: [
        "Welcome emails after registration.",
        "Video tutorials for the platform.",
        "A guide to first steps.",
        "Introductory employee training.",
        "Automated onboarding sequences."
      ]
    }
  }
},

upsell: {
  slugs: { EN: "upsell", CZ: "upsell", SK: "upsell" },
  category: "Business",
  relatedTerms: ["Cross-sell", "Pricing", "Value Proposition", "Retencia klienta"],
  resources: [
    { title: "Suggestive Selling (Upselling)", url: "https://www.investopedia.com/terms/s/suggestive-selling.asp" }
  ],
  content: {
    SK: {
      term: "Upsell",
      shortDefinition: "Predaj vyššej hodnoty",
      fullDefinition:
        "Upsell je technika, pri ktorej sa zákazníkovi ponúka lepšia alebo drahšia verzia produktu. Cieľom je zvýšiť hodnotu objednávky. Upsell sa často ponúka v momente rozhodovania. Musí prinášať reálnu pridanú hodnotu. Ide o bežnú obchodnú stratégiu.",
      whyItMatters:
        "Upsell zvyšuje tržby bez získavania nových zákazníkov. Zvyšuje priemernú hodnotu objednávky. Pomáha lepšie využiť existujúci dopyt. Pri správnom nastavení zvyšuje spokojnosť zákazníka. Pre firmy je to efektívny rastový nástroj.",
      examples: [
        "Prémiový balíček služieb.",
        "Rozšírené funkcie za príplatok.",
        "Vyšší tarif platformy.",
        "Doplnkové služby.",
        "Dlhodobejšie predplatné."
      ]
    },
    CZ: {
      term: "Upsell",
      shortDefinition: "Prodej vyšší hodnoty",
      fullDefinition:
        "Upsell je technika, při které se zákazníkovi nabízí lepší nebo dražší verze produktu. Cílem je zvýšit hodnotu objednávky. Upsell se často nabízí v momentu rozhodování. Musí přinášet reálnou přidanou hodnotu. Jde o běžnou obchodní strategii.",
      whyItMatters:
        "Upsell zvyšuje tržby bez získávání nových zákazníků. Zvyšuje průměrnou hodnotu objednávky. Pomáhá lépe využít existující poptávku. Při správném nastavení zvyšuje spokojenost zákazníka. Pro firmy je to efektivní růstový nástroj.",
      examples: [
        "Prémiový balíček služeb.",
        "Rozšířené funkce za příplatek.",
        "Vyšší tarif platformy.",
        "Doplňkové služby.",
        "Dlouhodobější předplatné."
      ]
    },
    EN: {
      term: "Upsell",
      shortDefinition: "Selling higher value",
      fullDefinition:
        "Upsell is a technique where a customer is offered a better or more expensive version of a product. The goal is to increase the order value. Upsell is often offered at the moment of decision. It must deliver real added value. It is a common sales strategy.",
      whyItMatters:
        "Upsell increases revenue without acquiring new customers. It increases the average order value. It helps make better use of existing demand. When set up correctly, it increases customer satisfaction. For companies, it is an effective growth tool.",
      examples: [
        "A premium service package.",
        "Extended features for an extra fee.",
        "A higher platform plan.",
        "Additional services.",
        "Longer-term subscription."
      ]
    }
  }
},

cross_sell: {
  slugs: { EN: "cross-sell", CZ: "cross-sell", SK: "cross-sell" },
  category: "Business",
  relatedTerms: ["Upsell", "Pricing", "Value Proposition", "Retencia klienta"],
  resources: [
    { title: "Cross Selling & Upselling Explained", url: "https://www.investopedia.com/terms/c/cross-sell.asp" }
  ],
  content: {
    SK: {
      term: "Cross-sell",
      shortDefinition: "Doplnkový predaj",
      fullDefinition:
        "Cross-sell je ponuka doplnkových produktov alebo služieb k hlavnému nákupu. Cieľom je rozšíriť objednávku o relevantné položky. Cross-sell vychádza z potrieb zákazníka. Musí byť logický a užitočný. Používa sa v e-shopoch aj službách.",
      whyItMatters:
        "Zvyšuje hodnotu objednávky. Zlepšuje zákaznícku skúsenosť, ak je správne cielený. Pomáha lepšie využiť potenciál zákazníka. Znižuje náklady na získanie príjmu. Pre firmy znamená vyššiu ziskovosť.",
      examples: [
        "Doplnkové služby k objednávke.",
        "Príslušenstvo k produktu.",
        "Odporúčané služby.",
        "Balíčky služieb.",
        "Súvisiace produkty."
      ]
    },
    CZ: {
      term: "Cross-sell",
      shortDefinition: "Doplňkový prodej",
      fullDefinition:
        "Cross-sell je nabídka doplňkových produktů nebo služeb k hlavnímu nákupu. Cílem je rozšířit objednávku o relevantní položky. Cross-sell vychází z potřeb zákazníka. Musí být logický a užitečný. Používá se v e-shopech i službách.",
      whyItMatters:
        "Zvyšuje hodnotu objednávky. Zlepšuje zákaznickou zkušenost, pokud je správně cílený. Pomáhá lépe využít potenciál zákazníka. Snižuje náklady na získání příjmu. Pro firmy znamená vyšší ziskovost.",
      examples: [
        "Doplňkové služby k objednávce.",
        "Příslušenství k produktu.",
        "Doporučené služby.",
        "Balíčky služeb.",
        "Související produkty."
      ]
    },
    EN: {
      term: "Cross-sell",
      shortDefinition: "Complementary selling",
      fullDefinition:
        "Cross-sell is offering complementary products or services alongside the main purchase. The goal is to expand the order with relevant items. Cross-sell is based on the customer’s needs. It must be logical and useful. It is used in e-shops as well as services.",
      whyItMatters:
        "It increases the order value. It improves the customer experience if targeted correctly. It helps better utilize the customer’s potential. It reduces the cost of generating revenue. For companies, it means higher profitability.",
      examples: [
        "Additional services with an order.",
        "Accessories to a product.",
        "Recommended services.",
        "Service packages.",
        "Related products."
      ]
    }
  }
},

audit: {
  slugs: { EN: "audit", CZ: "audit", SK: "audit" },
  category: "Business",
  relatedTerms: ["Benchmarking", "KPI", "ROI", "Forecasting"],
  resources: [
    { title: "Audit: Meaning in Finance and Accounting and 3 Main Types", url: "https://www.investopedia.com/terms/a/audit.asp" }
  ],
  content: {
    SK: {
      term: "Audit",
      shortDefinition: "Kontrola a analýza",
      fullDefinition:
        "Audit je systematická kontrola a analýza procesov, výkonu alebo výsledkov. Môže ísť o finančný, marketingový alebo technický audit. Cieľom je identifikovať problémy a príležitosti na zlepšenie. Audit poskytuje objektívny pohľad na stav firmy. Je základom pre optimalizáciu.",
      whyItMatters:
        "Audit odhaľuje slabé miesta skôr, než spôsobia škody. Pomáha zvyšovať efektivitu a výkon. Poskytuje dáta pre strategické rozhodnutia. Zvyšuje transparentnosť a kontrolu. Pre firmy je audit nástrojom rastu.",
      examples: [
        "SEO audit webu.",
        "Finančný audit firmy.",
        "Procesný audit.",
        "Audit marketingových kampaní.",
        "Bezpečnostný audit."
      ]
    },
    CZ: {
      term: "Audit",
      shortDefinition: "Kontrola a analýza",
      fullDefinition:
        "Audit je systematická kontrola a analýza procesů, výkonu nebo výsledků. Může jít o finanční, marketingový nebo technický audit. Cílem je identifikovat problémy a příležitosti ke zlepšení. Audit poskytuje objektivní pohled na stav firmy. Je základem pro optimalizaci.",
      whyItMatters:
        "Audit odhaluje slabá místa dříve, než způsobí škody. Pomáhá zvyšovat efektivitu a výkon. Poskytuje data pro strategická rozhodnutí. Zvyšuje transparentnost a kontrolu. Pro firmy je audit nástrojem růstu.",
      examples: [
        "SEO audit webu.",
        "Finanční audit firmy.",
        "Procesní audit.",
        "Audit marketingových kampaní.",
        "Bezpečnostní audit."
      ]
    },
    EN: {
      term: "Audit",
      shortDefinition: "Review and analysis",
      fullDefinition:
        "An audit is a systematic review and analysis of processes, performance, or results. It can be a financial, marketing, or technical audit. The goal is to identify problems and opportunities for improvement. An audit provides an objective view of a company’s current state. It is the basis for optimization.",
      whyItMatters:
        "An audit reveals weak points before they cause damage. It helps increase efficiency and performance. It provides data for strategic decisions. It increases transparency and control. For companies, an audit is a tool for growth.",
      examples: [
        "An SEO audit of a website.",
        "A financial audit of a company.",
        "A process audit.",
        "An audit of marketing campaigns.",
        "A security audit."
      ]
    }
  }
},

retention: {
  slugs: { EN: "customer-retention", CZ: "retence-klienta", SK: "retencia-klienta" },
  category: "Business",
  relatedTerms: ["Onboarding", "Upsell", "Cross-sell", "KPI"],
  resources: [
    { title: "What is customer retention?", url: "https://www.salesforce.com/eu/service/digital-customer-engagement-platform/customer-retention/" }
  ],
  content: {
    SK: {
      term: "Retencia klienta",
      shortDefinition: "Udržanie zákazníka",
      fullDefinition:
        "Retencia klienta vyjadruje schopnosť firmy udržať si existujúcich zákazníkov. Sleduje sa v časovom horizonte. Zahŕňa spokojnosť, opakované nákupy a vzťah k značke. Retencia je často lacnejšia než získavanie nových zákazníkov. Je dôležitou súčasťou dlhodobej stratégie.",
      whyItMatters:
        "Udržiavanie zákazníkov zvyšuje stabilitu príjmov. Znižuje náklady na marketing. Spokojní zákazníci odporúčajú firmu ďalej. Zvyšuje hodnotu zákazníka v čase. Pre firmy je retencia kľúčom k udržateľnému rastu.",
      examples: [
        "Vernostné programy.",
        "Pravidelná komunikácia.",
        "Kvalitná zákaznícka podpora.",
        "Personalizované ponuky.",
        "Dlhodobé spolupráce."
      ]
    },
    CZ: {
      term: "Retence klienta",
      shortDefinition: "Udržení zákazníka",
      fullDefinition:
        "Retence klienta vyjadřuje schopnost firmy udržet si stávající zákazníky. Sleduje se v časovém horizontu. Zahrnuje spokojenost, opakované nákupy a vztah ke značce. Retence je často levnější než získávání nových zákazníků. Je důležitou součástí dlouhodobé strategie.",
      whyItMatters:
        "Udržování zákazníků zvyšuje stabilitu příjmů. Snižuje náklady na marketing. Spokojení zákazníci doporučují firmu dál. Zvyšuje hodnotu zákazníka v čase. Pro firmy je retence klíčem k udržitelnému růstu.",
      examples: [
        "Věrnostní programy.",
        "Pravidelná komunikace.",
        "Kvalitní zákaznická podpora.",
        "Personalizované nabídky.",
        "Dlouhodobé spolupráce."
      ]
    },
    EN: {
      term: "Customer retention",
      shortDefinition: "Keeping customers",
      fullDefinition:
        "Customer retention expresses a company’s ability to keep its existing customers. It is tracked over a time horizon. It includes satisfaction, repeat purchases, and a relationship with the brand. Retention is often cheaper than acquiring new customers. It is an important part of a long-term strategy.",
      whyItMatters:
        "Keeping customers increases revenue stability. It reduces marketing costs. Satisfied customers recommend the company further. It increases customer value over time. For companies, retention is the key to sustainable growth.",
      examples: [
        "Loyalty programs.",
        "Regular communication.",
        "High-quality customer support.",
        "Personalized offers.",
        "Long-term collaborations."
      ]
    }
  }
},

forecasting: {
  slugs: { EN: "forecasting", CZ: "forecasting", SK: "forecasting" },
  category: "Business",
  relatedTerms: ["Cashflow", "KPI", "Audit", "ROI"],
  resources: [
    { title: "What Is Business Forecasting?", url: "https://www.investopedia.com/articles/financial-theory/11/basics-business-forcasting.asp" }
  ],
  content: {
    SK: {
      term: "Forecasting",
      shortDefinition: "Predikcia budúcich výsledkov",
      fullDefinition:
        "Forecasting je proces predpovedania budúcich výsledkov na základe historických dát. Používa sa pri plánovaní tržieb, nákladov a rastu. Pomáha odhadnúť vývoj trhu. Forecasting nie je presná veda, ale pracuje s pravdepodobnosťou. Je základom strategického plánovania.",
      whyItMatters:
        "Umožňuje lepšie plánovať rozpočet a kapacity. Znižuje riziko nečakaných výkyvov. Pomáha pripraviť sa na rast alebo pokles. Podporuje informované rozhodovanie. Pre firmy je forecasting nástrojom stability.",
      examples: [
        "Predikcia mesačných tržieb.",
        "Plánovanie rastu firmy.",
        "Odhad sezónnych výkyvov.",
        "Finančné plánovanie.",
        "Strategické rozhodnutia."
      ]
    },
    CZ: {
      term: "Forecasting",
      shortDefinition: "Predikce budoucích výsledků",
      fullDefinition:
        "Forecasting je proces předpovídání budoucích výsledků na základě historických dat. Používá se při plánování tržeb, nákladů a růstu. Pomáhá odhadnout vývoj trhu. Forecasting není přesná věda, ale pracuje s pravděpodobností. Je základem strategického plánování.",
      whyItMatters:
        "Umožňuje lépe plánovat rozpočet a kapacity. Snižuje riziko nečekaných výkyvů. Pomáhá připravit se na růst nebo pokles. Podporuje informované rozhodování. Pro firmy je forecasting nástrojem stability.",
      examples: [
        "Predikce měsíčních tržeb.",
        "Plánování růstu firmy.",
        "Odhad sezónních výkyvů.",
        "Finanční plánování.",
        "Strategická rozhodnutí."
      ]
    },
    EN: {
      term: "Forecasting",
      shortDefinition: "Predicting future results",
      fullDefinition:
        "Forecasting is the process of predicting future results based on historical data. It is used when planning revenue, costs, and growth. It helps estimate market development. Forecasting is not an exact science, but it works with probability. It is the foundation of strategic planning.",
      whyItMatters:
        "It enables better planning of budget and capacity. It reduces the risk of unexpected fluctuations. It helps prepare for growth or decline. It supports informed decision-making. For companies, forecasting is a tool of stability.",
      examples: [
        "Prediction of monthly revenue.",
        "Planning company growth.",
        "Estimating seasonal fluctuations.",
        "Financial planning.",
        "Strategic decisions."
      ]
    }
  }
},
  outsourcing: {
  slugs: { EN: "outsourcing", CZ: "outsourcing", SK: "outsourcing" },
  category: "Business",
  relatedTerms: ["Pricing", "KPI", "ROI", "Stakeholder"],
  resources: [
    { title: "Outsourcing", url: "https://www.investopedia.com/terms/o/outsourcing.asp" }
  ],
  content: {
    SK: {
      term: "Outsourcing",
      shortDefinition: "Prenesenie činností na externého dodávateľa",
      fullDefinition:
        "Outsourcing znamená, že firma presunie určitú časť práce alebo procesov na externú spoločnosť alebo špecialistu. Najčastejšie ide o oblasti ako IT, marketing, účtovníctvo alebo zákaznícka podpora. Cieľom outsourcingu je zefektívniť fungovanie firmy a sústrediť sa na jej hlavné aktivity. Externý dodávateľ má zvyčajne vyššiu odbornosť v danej oblasti. Outsourcing môže byť krátkodobý aj dlhodobý.",
      whyItMatters:
        "Outsourcing umožňuje firmám znížiť náklady na zamestnancov a infraštruktúru. Zvyšuje flexibilitu, pretože služby je možné rýchlo škálovať podľa potreby. Firmy získajú prístup k expertom bez nutnosti ich zamestnávať na plný úväzok. Pomáha urýchliť realizáciu projektov a zvýšiť kvalitu výstupov. Pre malé a stredné firmy je outsourcing často kľúčom k rastu.",
      examples: [
        "Externá agentúra spravuje SEO a reklamy.",
        "Účtovníctvo zabezpečuje externá firma.",
        "Vývoj webu rieši externý tím.",
        "Zákaznícka podpora je outsourcovaná.",
        "Externý copywriter tvorí obsah."
      ]
    },
    CZ: {
      term: "Outsourcing",
      shortDefinition: "Přesunutí činností na externího dodavatele",
      fullDefinition:
        "Outsourcing znamená, že firma přesune určitou část práce nebo procesů na externí společnost nebo specialistu. Nejčastěji jde o oblasti jako IT, marketing, účetnictví nebo zákaznická podpora. Cílem outsourcingu je zefektivnit fungování firmy a soustředit se na její hlavní aktivity. Externí dodavatel má obvykle vyšší odbornost v dané oblasti. Outsourcing může být krátkodobý i dlouhodobý.",
      whyItMatters:
        "Outsourcing umožňuje firmám snížit náklady na zaměstnance a infrastrukturu. Zvyšuje flexibilitu, protože služby je možné rychle škálovat podle potřeby. Firmy získají přístup k expertům bez nutnosti je zaměstnávat na plný úvazek. Pomáhá urychlit realizaci projektů a zvýšit kvalitu výstupů. Pro malé a střední firmy je outsourcing často klíčem k růstu.",
      examples: [
        "Externí agentura spravuje SEO a reklamy.",
        "Účetnictví zajišťuje externí firma.",
        "Vývoj webu řeší externí tým.",
        "Zákaznická podpora je outsourcovaná.",
        "Externí copywriter tvoří obsah."
      ]
    },
    EN: {
      term: "Outsourcing",
      shortDefinition: "Transferring activities to an external supplier",
      fullDefinition:
        "Outsourcing means that a company moves a certain part of work or processes to an external company or specialist. Most often, it involves areas such as IT, marketing, accounting, or customer support. The goal of outsourcing is to make the company’s operations more efficient and focus on its main activities. An external supplier usually has higher expertise in the given area. Outsourcing can be short-term or long-term.",
      whyItMatters:
        "Outsourcing allows companies to reduce costs for employees and infrastructure. It increases flexibility because services can be quickly scaled as needed. Companies gain access to experts without having to employ them full-time. It helps speed up project delivery and increase the quality of outputs. For small and medium-sized companies, outsourcing is often the key to growth.",
      examples: [
        "An external agency manages SEO and ads.",
        "Accounting is handled by an external company.",
        "Website development is done by an external team.",
        "Customer support is outsourced.",
        "An external copywriter creates content."
      ]
    }
  }
},

cashflow: {
  slugs: { EN: "cashflow", CZ: "cashflow", SK: "cashflow" },
  category: "Business",
  relatedTerms: ["ROI", "KPI", "Pricing", "Benchmarking"],
  resources: [
    { title: "Cash Flow", url: "https://www.investopedia.com/terms/c/cashflow.asp" }
  ],
  content: {
    SK: {
      term: "Cashflow",
      shortDefinition: "Tok peňazí vo firme",
      fullDefinition:
        "Cashflow vyjadruje pohyb peňazí do firmy a z firmy v určitom časovom období. Zahŕňa všetky príjmy a výdavky, ktoré ovplyvňujú dostupnú hotovosť. Pozitívny cashflow znamená, že firma má viac príjmov než výdavkov. Negatívny cashflow signalizuje potenciálne finančné problémy. Cashflow sa líši od zisku, pretože sleduje reálne peniaze, nie účtovné položky.",
      whyItMatters:
        "Firma môže byť zisková, ale bez hotovosti nemusí prežiť. Cashflow zabezpečuje schopnosť platiť faktúry, mzdy a investície. Pomáha plánovať budúce výdavky a rast. Pravidelné sledovanie cashflow znižuje riziko finančných kríz. Pre stabilitu firmy je cashflow rovnako dôležité ako tržby.",
      examples: [
        "Pravidelné mesačné sledovanie príjmov a výdavkov.",
        "Problém s oneskorenými platbami od klientov.",
        "Plánovanie investícií do marketingu.",
        "Rezerva pre nečakané výdavky.",
        "Vyhodnocovanie sezónnych výkyvov."
      ]
    },
    CZ: {
      term: "Cashflow",
      shortDefinition: "Tok peněz ve firmě",
      fullDefinition:
        "Cashflow vyjadřuje pohyb peněz do firmy a z firmy v určitém časovém období. Zahrnuje všechny příjmy a výdaje, které ovlivňují dostupnou hotovost. Pozitivní cashflow znamená, že firma má více příjmů než výdajů. Negativní cashflow signalizuje potenciální finanční problémy. Cashflow se liší od zisku, protože sleduje reálné peníze, nikoli účetní položky.",
      whyItMatters:
        "Firma může být zisková, ale bez hotovosti nemusí přežít. Cashflow zajišťuje schopnost platit faktury, mzdy a investice. Pomáhá plánovat budoucí výdaje a růst. Pravidelné sledování cashflow snižuje riziko finančních krizí. Pro stabilitu firmy je cashflow stejně důležité jako tržby.",
      examples: [
        "Pravidelné měsíční sledování příjmů a výdajů.",
        "Problém se zpožděnými platbami od klientů.",
        "Plánování investic do marketingu.",
        "Rezerva pro nečekané výdaje.",
        "Vyhodnocování sezónních výkyvů."
      ]
    },
    EN: {
      term: "Cashflow",
      shortDefinition: "Cash flow in a company",
      fullDefinition:
        "Cashflow expresses the movement of money into and out of a company over a certain period of time. It includes all income and expenses that affect available cash. Positive cashflow means the company has more income than expenses. Negative cashflow signals potential financial problems. Cashflow differs from profit because it tracks real money, not accounting items.",
      whyItMatters:
        "A company can be profitable, but without cash it may not survive. Cashflow ensures the ability to pay invoices, wages, and investments. It helps plan future expenses and growth. Regular cashflow monitoring reduces the risk of financial crises. For company stability, cashflow is just as important as revenue.",
      examples: [
        "Regular monthly tracking of income and expenses.",
        "Problem with delayed payments from clients.",
        "Planning investments into marketing.",
        "A reserve for unexpected expenses.",
        "Evaluating seasonal fluctuations."
      ]
    }
  }
},

b2b_b2c: {
  slugs: { EN: "b2b-b2c", CZ: "b2b-b2c", SK: "b2b-b2c" },
  category: "Business",
  relatedTerms: ["Value Proposition", "Pricing", "Marketing", "Stakeholder"],
  resources: [
    { title: "Business-to-Business (B2B)", url: "https://www.investopedia.com/terms/b/btob.asp" },
    { title: "Business-to-Consumer (B2C)", url: "https://www.investopedia.com/terms/b/btoc.asp" }
  ],
  content: {
    SK: {
      term: "B2B / B2C",
      shortDefinition: "Obchodné modely podnikania",
      fullDefinition:
        "B2B (Business to Business) označuje obchod medzi firmami, zatiaľ čo B2C (Business to Consumer) znamená predaj priamo koncovým zákazníkom. Každý model má iný spôsob komunikácie, predaja a marketingu. B2B sa zameriava na dlhodobé vzťahy a racionálne rozhodovanie. B2C pracuje viac s emóciami a impulzívnymi nákupmi. Správne pochopenie modelu ovplyvňuje celú stratégiu firmy.",
      whyItMatters:
        "Rozlíšenie medzi B2B a B2C pomáha správne nastaviť marketing a predajné procesy. Ovplyvňuje dĺžku nákupného cyklu, ceny aj komunikáciu. Pomáha vybrať vhodné marketingové kanály. Znižuje riziko neefektívnych kampaní. Pre úspech firmy je kľúčové vedieť, komu predáva.",
      examples: [
        "Agentúra predáva služby firmám (B2B).",
        "E-shop predáva produkty koncovým zákazníkom (B2C).",
        "Iný tón komunikácie pre firmy a jednotlivcov.",
        "Dlhšie rozhodovanie v B2B segmente.",
        "Rýchle nákupy v B2C prostredí."
      ]
    },
    CZ: {
      term: "B2B / B2C",
      shortDefinition: "Obchodní modely podnikání",
      fullDefinition:
        "B2B (Business to Business) označuje obchod mezi firmami, zatímco B2C (Business to Consumer) znamená prodej přímo koncovým zákazníkům. Každý model má jiný způsob komunikace, prodeje a marketingu. B2B se zaměřuje na dlouhodobé vztahy a racionální rozhodování. B2C pracuje více s emocemi a impulzivními nákupy. Správné pochopení modelu ovlivňuje celou strategii firmy.",
      whyItMatters:
        "Rozlišení mezi B2B a B2C pomáhá správně nastavit marketing a prodejní procesy. Ovlivňuje délku nákupního cyklu, ceny i komunikaci. Pomáhá vybrat vhodné marketingové kanály. Snižuje riziko neefektivních kampaní. Pro úspěch firmy je klíčové vědět, komu prodává.",
      examples: [
        "Agentura prodává služby firmám (B2B).",
        "E-shop prodává produkty koncovým zákazníkům (B2C).",
        "Jiný tón komunikace pro firmy a jednotlivce.",
        "Delší rozhodování v B2B segmentu.",
        "Rychlé nákupy v B2C prostředí."
      ]
    },
    EN: {
      term: "B2B / B2C",
      shortDefinition: "Business models",
      fullDefinition:
        "B2B (Business to Business) refers to trade between companies, while B2C (Business to Consumer) means selling directly to end customers. Each model has a different way of communication, sales, and marketing. B2B focuses on long-term relationships and rational decision-making. B2C works more with emotions and impulse purchases. Correctly understanding the model affects the entire company strategy.",
      whyItMatters:
        "Distinguishing between B2B and B2C helps set up marketing and sales processes correctly. It affects the length of the buying cycle, pricing, and communication. It helps choose suitable marketing channels. It reduces the risk of ineffective campaigns. For a company’s success, it is crucial to know who it sells to.",
      examples: [
        "An agency sells services to companies (B2B).",
        "An e-shop sells products to end customers (B2C).",
        "A different tone of communication for companies and individuals.",
        "Longer decision-making in the B2B segment.",
        "Fast purchases in the B2C environment."
      ]
    }
  }
},

value_proposition: {
  slugs: { EN: "value-proposition", CZ: "value-proposition", SK: "value-proposition" },
  category: "Business",
  relatedTerms: ["B2B / B2C", "Branding", "Conversion", "Marketing"],
  resources: [
    { title: "Value Proposition", url: "https://www.investopedia.com/terms/v/valueproposition.asp" }
  ],
  content: {
    SK: {
      term: "Value Proposition",
      shortDefinition: "Jedinečná hodnota ponuky",
      fullDefinition:
        "Value proposition je jasné vyjadrenie toho, prečo by si zákazník mal vybrať práve vašu firmu. Odpovedá na otázku, akú hodnotu prinášate a aký problém riešite. Nejde len o cenu, ale o kombináciu benefitov, kvality, rýchlosti a dôvery. Value proposition musí byť zrozumiteľná a stručná. Je základom marketingovej a obchodnej komunikácie.",
      whyItMatters:
        "Silná value proposition odlišuje firmu od konkurencie. Pomáha zákazníkom rýchlo pochopiť výhody spolupráce. Zvyšuje mieru konverzie a dôveru. Zjednodušuje marketingové posolstvá. Bez jasnej hodnoty je firma pre zákazníkov ľahko nahraditeľná.",
      examples: [
        "„Služby priamo u vás doma.“",
        "„Rýchle riešenie bez čakania.“",
        "„Komplexná starostlivosť na jednom mieste.“",
        "„Transparentné ceny bez skrytých poplatkov.“",
        "„Lokálni overení profesionáli.“"
      ]
    },
    CZ: {
      term: "Value Proposition",
      shortDefinition: "Jedinečná hodnota nabídky",
      fullDefinition:
        "Value proposition je jasné vyjádření toho, proč by si zákazník měl vybrat právě vaši firmu. Odpovídá na otázku, jakou hodnotu přinášíte a jaký problém řešíte. Nejde jen o cenu, ale o kombinaci benefitů, kvality, rychlosti a důvěry. Value proposition musí být srozumitelná a stručná. Je základem marketingové a obchodní komunikace.",
      whyItMatters:
        "Silná value proposition odlišuje firmu od konkurence. Pomáhá zákazníkům rychle pochopit výhody spolupráce. Zvyšuje míru konverze a důvěru. Zjednodušuje marketingová sdělení. Bez jasné hodnoty je firma pro zákazníky snadno nahraditelná.",
      examples: [
        "„Služby přímo u vás doma.“",
        "„Rychlé řešení bez čekání.“",
        "„Komplexní péče na jednom místě.“",
        "„Transparentní ceny bez skrytých poplatků.“",
        "„Lokální ověření profesionálové.“"
      ]
    },
    EN: {
      term: "Value Proposition",
      shortDefinition: "Unique value of an offer",
      fullDefinition:
        "A value proposition is a clear expression of why a customer should choose your company. It answers the question of what value you bring and what problem you solve. It is not only about price, but about a combination of benefits, quality, speed, and trust. A value proposition must be understandable and concise. It is the foundation of marketing and sales communication.",
      whyItMatters:
        "A strong value proposition differentiates a company from competitors. It helps customers quickly understand the benefits of working with you. It increases conversion rate and trust. It simplifies marketing messages. Without clear value, a company is easily replaceable for customers.",
      examples: [
        "“Services directly at your home.”",
        "“A fast solution without waiting.”",
        "“Comprehensive care in one place.”",
        "“Transparent prices with no hidden fees.”",
        "“Local verified professionals.”"
      ]
    }
  }
},

pricing: {
  slugs: { EN: "pricing", CZ: "pricing", SK: "pricing" },
  category: "Business",
  relatedTerms: ["Value Proposition", "ROI", "Benchmarking", "B2B / B2C"],
  resources: [
    { title: "Pricing Strategy", url: "https://blog.hubspot.com/sales/pricing-strategy" }
  ],
  content: {
    SK: {
      term: "Pricing",
      shortDefinition: "Tvorba cien",
      fullDefinition:
        "Pricing je stratégia, ktorou firma stanovuje ceny svojich produktov alebo služieb. Zohľadňuje náklady, hodnotu pre zákazníka, konkurenciu a cieľový trh. Pricing nie je jednorazové rozhodnutie, ale dynamický proces. Správna cena musí byť udržateľná pre firmu aj prijateľná pre zákazníka. Ovplyvňuje vnímanie značky a kvalitu služieb.",
      whyItMatters:
        "Zlá cenová stratégia môže firmu poškodiť aj pri kvalitnom produkte. Správny pricing zvyšuje ziskovosť a konkurencieschopnosť. Pomáha komunikovať hodnotu značky. Umožňuje lepšie plánovať rast a investície. Pre firmy je pricing jedným z najcitlivejších rozhodnutí.",
      examples: [
        "Balíčkové ceny služieb.",
        "Prémiové a základné varianty.",
        "Cenová politika podľa trhu.",
        "Zľavy pre verných zákazníkov.",
        "Dynamické ceny podľa dopytu."
      ]
    },
    CZ: {
      term: "Pricing",
      shortDefinition: "Tvorba cen",
      fullDefinition:
        "Pricing je strategie, kterou firma stanovuje ceny svých produktů nebo služeb. Zohledňuje náklady, hodnotu pro zákazníka, konkurenci a cílový trh. Pricing není jednorázové rozhodnutí, ale dynamický proces. Správná cena musí být udržitelná pro firmu i přijatelná pro zákazníka. Ovlivňuje vnímání značky a kvalitu služeb.",
      whyItMatters:
        "Špatná cenová strategie může firmu poškodit i při kvalitním produktu. Správný pricing zvyšuje ziskovost a konkurenceschopnost. Pomáhá komunikovat hodnotu značky. Umožňuje lépe plánovat růst a investice. Pro firmy je pricing jedním z nejcitlivějších rozhodnutí.",
      examples: [
        "Balíčkové ceny služeb.",
        "Prémiové a základní varianty.",
        "Cenová politika podle trhu.",
        "Slevy pro věrné zákazníky.",
        "Dynamické ceny podle poptávky."
      ]
    },
    EN: {
      term: "Pricing",
      shortDefinition: "Price setting",
      fullDefinition:
        "Pricing is a strategy by which a company sets prices for its products or services. It considers costs, value for the customer, competition, and the target market. Pricing is not a one-time decision, but a dynamic process. The right price must be sustainable for the company and acceptable for the customer. It influences brand perception and service quality.",
      whyItMatters:
        "A bad pricing strategy can damage a company even with a quality product. The right pricing increases profitability and competitiveness. It helps communicate brand value. It enables better planning of growth and investments. For companies, pricing is one of the most sensitive decisions.",
      examples: [
        "Package pricing for services.",
        "Premium and basic variants.",
        "Pricing policy based on the market.",
        "Discounts for loyal customers.",
        "Dynamic pricing based on demand."
      ]
    }
  }
},
  brief: {
  slugs: { EN: "brief", CZ: "brief", SK: "brief" },
  category: "Business",
  relatedTerms: ["Project Management", "Strategy", "Marketing"],
  resources: [
    { title: "Creative Brief", url: "https://www.investopedia.com/terms/c/creative-brief.asp" }
  ],
  content: {
    SK: {
      term: "Brief",
      shortDefinition: "Zadanie projektu",
      fullDefinition:
        "Brief je dokument alebo súbor informácií, ktorý presne definuje zadanie projektu. Obsahuje ciele, očakávania, cieľovú skupinu, rozpočet a časový rámec. Slúži ako základ pre plánovanie a realizáciu projektu. Dobrý brief eliminuje nejasnosti a znižuje riziko chýb. Je kľúčovým nástrojom komunikácie medzi klientom a dodávateľom.",
      whyItMatters:
        "Bez kvalitného briefu môže projekt stratiť smer a prekročiť rozpočet. Brief pomáha všetkým stranám pochopiť, čo je cieľom spolupráce. Zjednodušuje rozhodovanie počas realizácie projektu. Minimalizuje zbytočné úpravy a nedorozumenia. Pre firmy znamená úsporu času, peňazí a energie.",
      examples: [
        "Zadanie na nový web alebo e-shop.",
        "Marketingový brief pre kampaň.",
        "Redizajn značky.",
        "Technické zadanie pre vývoj.",
        "Obsahový plán pre blog."
      ]
    },
    CZ: {
      term: "Brief",
      shortDefinition: "Zadání projektu",
      fullDefinition:
        "Brief je dokument nebo soubor informací, který přesně definuje zadání projektu. Obsahuje cíle, očekávání, cílovou skupinu, rozpočet a časový rámec. Slouží jako základ pro plánování a realizaci projektu. Dobrý brief eliminuje nejasnosti a snižuje riziko chyb. Je klíčovým nástrojem komunikace mezi klientem a dodavatelem.",
      whyItMatters:
        "Bez kvalitního briefu může projekt ztratit směr a překročit rozpočet. Brief pomáhá všem stranám pochopit, co je cílem spolupráce. Zjednodušuje rozhodování během realizace projektu. Minimalizuje zbytečné úpravy a nedorozumění. Pro firmy znamená úsporu času, peněz a energie.",
      examples: [
        "Zadání na nový web nebo e-shop.",
        "Marketingový brief pro kampaň.",
        "Redesign značky.",
        "Technické zadání pro vývoj.",
        "Obsahový plán pro blog."
      ]
    },
    EN: {
      term: "Brief",
      shortDefinition: "Project brief",
      fullDefinition:
        "A brief is a document or set of information that precisely defines a project assignment. It contains goals, expectations, target audience, budget, and timeline. It serves as the foundation for planning and project execution. A good brief eliminates ambiguities and reduces the risk of errors. It is a key communication tool between the client and the supplier.",
      whyItMatters:
        "Without a quality brief, a project can lose direction and exceed its budget. A brief helps all parties understand the goal of the collaboration. It simplifies decision-making during project execution. It minimizes unnecessary changes and misunderstandings. For companies, it means saving time, money, and energy.",
      examples: [
        "Assignment for a new website or e-shop.",
        "Marketing brief for a campaign.",
        "Brand redesign.",
        "Technical assignment for development.",
        "Content plan for a blog."
      ]
    }
  }
},

benchmarking: {
  slugs: { EN: "benchmarking", CZ: "benchmarking", SK: "benchmarking" },
  category: "Business",
  relatedTerms: ["Competition", "Strategy", "Analysis"],
  resources: [
    { title: "Benchmarking", url: "https://www.investopedia.com/terms/b/benchmarking.asp" }
  ],
  content: {
    SK: {
      term: "Benchmarking",
      shortDefinition: "Porovnávanie s konkurenciou",
      fullDefinition:
        "Benchmarking je proces porovnávania vlastných výsledkov, procesov alebo produktov s konkurenciou alebo lídrami na trhu. Slúži na identifikáciu silných a slabých stránok firmy. Môže sa zamerať na ceny, kvalitu služieb, marketing alebo zákaznícku skúsenosť. Benchmarking poskytuje objektívny pohľad na pozíciu firmy na trhu. Pomáha hľadať inšpiráciu na zlepšenie.",
      whyItMatters:
        "Umožňuje firmám pochopiť, kde zaostávajú a kde majú náskok. Pomáha nastaviť realistické ciele. Podporuje inovácie a zlepšovanie procesov. Znižuje riziko, že firma stratí konkurencieschopnosť. Benchmarking je dôležitým nástrojom strategického riadenia.",
      examples: [
        "Porovnanie cien služieb s konkurenciou.",
        "Analýza marketingových kampaní lídrov trhu.",
        "Hodnotenie zákazníckej podpory.",
        "Porovnanie rýchlosti dodania služieb.",
        "Analýza webov konkurencie."
      ]
    },
    CZ: {
      term: "Benchmarking",
      shortDefinition: "Porovnávání s konkurencí",
      fullDefinition:
        "Benchmarking je proces porovnávání vlastních výsledků, procesů nebo produktů s konkurencí nebo lídry na trhu. Slouží k identifikaci silných a slabých stránek firmy. Může se zaměřit na ceny, kvalitu služeb, marketing nebo zákaznickou zkušenost. Benchmarking poskytuje objektivní pohled na pozici firmy na trhu. Pomáhá hledat inspiraci ke zlepšení.",
      whyItMatters:
        "Umožňuje firmám pochopit, kde zaostávají a kde mají náskok. Pomáhá nastavit realistické cíle. Podporuje inovace a zlepšování procesů. Snižuje riziko, že firma ztratí konkurenceschopnost. Benchmarking je důležitým nástrojem strategického řízení.",
      examples: [
        "Porovnání cen služeb s konkurencí.",
        "Analýza marketingových kampaní lídrů trhu.",
        "Hodnocení zákaznické podpory.",
        "Porovnání rychlosti dodání služeb.",
        "Analýza webů konkurence."
      ]
    },
    EN: {
      term: "Benchmarking",
      shortDefinition: "Comparison with competitors",
      fullDefinition:
        "Benchmarking is the process of comparing a company’s own results, processes, or products with competitors or market leaders. It is used to identify strengths and weaknesses of a business. It can focus on pricing, service quality, marketing, or customer experience. Benchmarking provides an objective view of a company’s position in the market. It helps find inspiration for improvement.",
      whyItMatters:
        "It allows companies to understand where they are falling behind and where they have an advantage. It helps set realistic goals. It supports innovation and process improvement. It reduces the risk of losing competitiveness. Benchmarking is an important tool of strategic management.",
      examples: [
        "Comparison of service prices with competitors.",
        "Analysis of marketing campaigns of market leaders.",
        "Evaluation of customer support.",
        "Comparison of service delivery speed.",
        "Analysis of competitors’ websites."
      ]
    }
  }
},
  roi: {
    slugs: { EN: "roi", CZ: "roi", SK: "roi" },
    category: "Business",
    relatedTerms: ["KPI", "Benchmarking", "Investment", "Marketing"],
    resources: [{ title: "Return on Investment (ROI)", url: "https://www.investopedia.com/terms/r/returnoninvestment.asp" }],
    content: {
      SK: {
        term: "ROI (Return on Investment)",
        shortDefinition: "Návratnosť investície",
        fullDefinition:
          "ROI je metrika, ktorá vyjadruje, koľko peňazí firma zarobila v porovnaní s tým, koľko investovala. Používa sa na hodnotenie efektivity investícií do marketingu, technológií, zamestnancov alebo projektov. ROI sa zvyčajne vyjadruje v percentách, čo umožňuje jednoduché porovnávanie rôznych investícií. Nezameriava sa len na tržby, ale na reálny zisk po odpočítaní nákladov. Je to jeden z najdôležitejších ukazovateľov úspešnosti biznisových rozhodnutí.",
        whyItMatters:
          "ROI pomáha firmám pochopiť, ktoré aktivity prinášajú reálnu hodnotu a ktoré nie. Umožňuje robiť racionálne rozhodnutia založené na dátach, nie pocitoch. Vďaka ROI vie podnikateľ zistiť, či sa mu oplatí investovať do reklamy, webu alebo nového produktu. Pomáha optimalizovať rozpočet a presúvať investície tam, kde majú najväčší efekt. Pre rast firmy je sledovanie ROI absolútne kľúčové.",
        examples: [
          "Investícia 1 000 € do reklamy priniesla zisk 3 000 €.",
          "Porovnanie návratnosti SEO vs. PPC kampaní.",
          "Vyhodnotenie investície do nového webu.",
          "Rozhodovanie o nákupe nového softvéru.",
          "Optimalizácia marketingového rozpočtu."
        ]
      },
      CZ: {
        term: "ROI (Return on Investment)",
        shortDefinition: "Návratnost investice",
        fullDefinition:
          "ROI je metrika, která vyjadřuje, kolik peněz firma vydělala ve srovnání s tím, kolik investovala. Používá se k hodnocení efektivity investic do marketingu, technologií, zaměstnanců nebo projektů. ROI se obvykle vyjadřuje v procentech, což umožňuje snadné porovnávání různých investic. Nezaměřuje se pouze na tržby, ale na skutečný zisk po odečtení nákladů. Je to jeden z nejdůležitějších ukazatelů úspěšnosti obchodních rozhodnutí.",
        whyItMatters:
          "ROI pomáhá firmám pochopit, které aktivity přinášejí skutečnou hodnotu a které ne. Umožňuje činit racionální rozhodnutí založená na datech, nikoli na pocitech. Díky ROI může podnikatel zjistit, zda se mu vyplatí investovat do reklamy, webu nebo nového produktu. Pomáhá optimalizovat rozpočet a přesouvat investice tam, kde mají největší efekt. Pro růst firmy je sledování ROI naprosto klíčové.",
        examples: [
          "Investice 1 000 € do reklamy přinesla zisk 3 000 €.",
          "Porovnání návratnosti SEO vs. PPC kampaní.",
          "Vyhodnocení investice do nového webu.",
          "Rozhodování o nákupu nového softwaru.",
          "Optimalizace marketingového rozpočtu."
        ]
      },
      EN: {
        term: "ROI (Return on Investment)",
        shortDefinition: "Return on investment",
        fullDefinition:
          "ROI is a metric that expresses how much money a company has earned compared to how much it has invested. It is used to evaluate the effectiveness of investments in marketing, technologies, employees, or projects. ROI is usually expressed as a percentage, which allows easy comparison of different investments. It does not focus only on revenue, but on real profit after deducting costs. It is one of the most important indicators of successful business decisions.",
        whyItMatters:
          "ROI helps companies understand which activities bring real value and which do not. It enables rational, data-driven decisions instead of emotional ones. Thanks to ROI, an entrepreneur can determine whether it is worth investing in advertising, a website, or a new product. It helps optimize budgets and shift investments where they have the greatest impact. Monitoring ROI is absolutely crucial for company growth.",
        examples: [
          "An investment of €1,000 in advertising generated a profit of €3,000.",
          "Comparison of SEO vs. PPC return on investment.",
          "Evaluation of an investment into a new website.",
          "Decision-making about purchasing new software.",
          "Optimization of the marketing budget."
        ]
      }
    }
  },

 kpi: {
  slugs: { EN: "kpi", CZ: "kpi", SK: "kpi" },
  category: "Business",
  relatedTerms: ["ROI", "Metrics", "Analytics", "Performance"],
  resources: [
    { title: "Key Performance Indicators (KPIs)", url: "https://www.investopedia.com/terms/k/kpi.asp" }
  ],
  content: {
    SK: {
      term: "KPI (Key Performance Indicators)",
      shortDefinition: "Kľúčové ukazovatele výkonnosti",
      fullDefinition:
        "KPI sú merateľné ukazovatele, ktoré slúžia na sledovanie výkonnosti firmy, tímu alebo konkrétneho procesu. Každý KPI má jasne definovaný cieľ a spôsob merania. Môže ísť o tržby, počet dopytov, mieru konverzie alebo spokojnosť zákazníkov. KPI pomáhajú sledovať, či firma napreduje správnym smerom. Bez KPI je veľmi ťažké objektívne hodnotiť úspech.",
      whyItMatters:
        "KPI poskytujú jasný prehľad o tom, čo funguje a čo nie. Pomáhajú identifikovať problémy skôr, než sa stanú vážnymi. Umožňujú manažérom a majiteľom robiť rýchle a informované rozhodnutia. Zlepšujú zodpovednosť v tímoch, pretože každý vie, čo sa od neho očakáva. KPI sú základom pre strategické plánovanie a rast firmy.",
      examples: [
        "Počet nových zákazníkov za mesiac.",
        "Priemerná hodnota objednávky.",
        "Miera konverzie webu.",
        "Náklady na získanie zákazníka (CAC).",
        "Retencia zákazníkov."
      ]
    },
    CZ: {
      term: "KPI (Key Performance Indicators)",
      shortDefinition: "Klíčové ukazatele výkonnosti",
      fullDefinition:
        "KPI jsou měřitelné ukazatele, které slouží ke sledování výkonnosti firmy, týmu nebo konkrétního procesu. Každý KPI má jasně definovaný cíl a způsob měření. Může jít o tržby, počet poptávek, míru konverze nebo spokojenost zákazníků. KPI pomáhají sledovat, zda firma postupuje správným směrem. Bez KPI je velmi obtížné objektivně hodnotit úspěch.",
      whyItMatters:
        "KPI poskytují jasný přehled o tom, co funguje a co ne. Pomáhají identifikovat problémy dříve, než se stanou vážnými. Umožňují manažerům a majitelům činit rychlá a informovaná rozhodnutí. Zlepšují odpovědnost v týmech, protože každý ví, co se od něj očekává. KPI jsou základem strategického plánování a růstu firmy.",
      examples: [
        "Počet nových zákazníků za měsíc.",
        "Průměrná hodnota objednávky.",
        "Míra konverze webu.",
        "Náklady na získání zákazníka (CAC).",
        "Retence zákazníků."
      ]
    },
    EN: {
      term: "KPI (Key Performance Indicators)",
      shortDefinition: "Key performance indicators",
      fullDefinition:
        "KPIs are measurable indicators used to track the performance of a company, team, or specific process. Each KPI has a clearly defined goal and method of measurement. It can include revenue, number of leads, conversion rate, or customer satisfaction. KPIs help monitor whether a company is moving in the right direction. Without KPIs, it is very difficult to objectively evaluate success.",
      whyItMatters:
        "KPIs provide a clear overview of what works and what does not. They help identify problems before they become serious. They allow managers and owners to make quick and informed decisions. They improve accountability within teams, as everyone knows what is expected of them. KPIs are the foundation of strategic planning and company growth.",
      examples: [
        "Number of new customers per month.",
        "Average order value.",
        "Website conversion rate.",
        "Customer acquisition cost (CAC).",
        "Customer retention."
      ]
    }
  }
},
stakeholder: {
  slugs: { EN: "stakeholder", CZ: "stakeholder", SK: "stakeholder" },
  category: "Business",
  relatedTerms: ["Project Management", "Business", "Strategy"],
  resources: [
    { title: "Stakeholder Definition", url: "https://www.investopedia.com/terms/s/stakeholder.asp" }
  ],
  content: {
    SK: {
      term: "Stakeholder",
      shortDefinition: "Zainteresovaná strana",
      fullDefinition:
        "Stakeholder je osoba alebo skupina, ktorá má záujem alebo vplyv na projekt, firmu alebo rozhodnutie. Môže ísť o majiteľa firmy, investorov, zamestnancov, zákazníkov alebo partnerov. Stakeholderi nemusia byť priamo zapojení do každodennej práce, ale ich rozhodnutia majú významný dopad. Každý stakeholder má iné očakávania a ciele. Riadenie vzťahov so stakeholdermi je dôležitou súčasťou projektového a strategického manažmentu.",
      whyItMatters:
        "Pochopenie potrieb stakeholderov pomáha predchádzať konfliktom a nedorozumeniam. Umožňuje lepšie plánovanie a komunikáciu v rámci projektov. Spokojní stakeholderi podporujú rast a stabilitu firmy. Ignorovanie kľúčových stakeholderov môže viesť k zlyhaniu projektu. Pre úspešný biznis je dôležité vedieť, kto má aký vplyv a očakávania.",
      examples: [
        "Investor očakávajúci návratnosť investície.",
        "Klient, ktorý zadáva projekt.",
        "Zamestnanci zapojení do realizácie.",
        "Obchodní partneri.",
        "Dodávatelia služieb."
      ]
    },
    CZ: {
      term: "Stakeholder",
      shortDefinition: "Zainteresovaná strana",
      fullDefinition:
        "Stakeholder je osoba nebo skupina, která má zájem nebo vliv na projekt, firmu nebo rozhodnutí. Může jít o majitele firmy, investory, zaměstnance, zákazníky nebo partnery. Stakeholdeři nemusí být přímo zapojeni do každodenní práce, ale jejich rozhodnutí mají významný dopad. Každý stakeholder má jiná očekávání a cíle. Řízení vztahů se stakeholdery je důležitou součástí projektového a strategického managementu.",
      whyItMatters:
        "Pochopení potřeb stakeholderů pomáhá předcházet konfliktům a nedorozuměním. Umožňuje lepší plánování a komunikaci v rámci projektů. Spokojení stakeholdeři podporují růst a stabilitu firmy. Ignorování klíčových stakeholderů může vést k selhání projektu. Pro úspěšný byznys je důležité vědět, kdo má jaký vliv a očekávání.",
      examples: [
        "Investor očekávající návratnost investice.",
        "Klient, který zadává projekt.",
        "Zaměstnanci zapojení do realizace.",
        "Obchodní partneři.",
        "Dodavatelé služeb."
      ]
    },
    EN: {
      term: "Stakeholder",
      shortDefinition: "Interested party",
      fullDefinition:
        "A stakeholder is a person or group that has an interest or influence in a project, company, or decision. This can include company owners, investors, employees, customers, or partners. Stakeholders may not be directly involved in daily operations, but their decisions have a significant impact. Each stakeholder has different expectations and goals. Managing stakeholder relationships is an important part of project and strategic management.",
      whyItMatters:
        "Understanding stakeholder needs helps prevent conflicts and misunderstandings. It enables better planning and communication within projects. Satisfied stakeholders support company growth and stability. Ignoring key stakeholders can lead to project failure. For a successful business, it is important to know who has what influence and expectations.",
      examples: [
        "An investor expecting a return on investment.",
        "A client commissioning a project.",
        "Employees involved in implementation.",
        "Business partners.",
        "Service providers."
      ]
    }
  }
},
  copywriting: {
  slugs: { EN: "copywriting", CZ: "copywriting", SK: "copywriting" },
  category: "Marketing",
  relatedTerms: ["CTA", "Branding", "Conversion", "Content Marketing"],
  resources: [
    { title: "What Is Copywriting?", url: "https://copyblogger.com/what-is-copywriting/" }
  ],
  content: {
    SK: {
      term: "Copywriting",
      shortDefinition: "Písanie presvedčivých textov",
      fullDefinition:
        "Copywriting je tvorba textov, ktorých cieľom je presvedčiť čitateľa k akcii. Nejde len o gramatiku, ale o psychológiu, emócie a štruktúru textu. Copywriter pracuje s nadpismi, benefitmi, výzvami k akcii a argumentmi. Texty musia byť zrozumiteľné, jasné a prispôsobené cieľovej skupine. Copywriting sa používa na weboch, v reklamách, e-mailoch aj na sociálnych sieťach.",
      whyItMatters:
        "Aj najkrajší web bez kvalitného textu nebude predávať. Dobrý copywriting zvyšuje konverzie a pomáha používateľovi rýchlo pochopiť hodnotu ponuky. Vytvára dôveru, odstraňuje obavy a odpovedá na otázky zákazníkov. Správne zvolené slová môžu výrazne ovplyvniť rozhodnutie o kúpe. Copywriting je preto jedným z najsilnejších nástrojov online marketingu.",
      examples: [
        "Texty na landing page zamerané na benefity.",
        "Reklamné slogany a claimy.",
        "E-mailové kampane s výzvou k akcii.",
        "Popisy služieb a produktov.",
        "CTA texty ako „Objednať teraz“."
      ]
    },
    CZ: {
      term: "Copywriting",
      shortDefinition: "Psaní přesvědčivých textů",
      fullDefinition:
        "Copywriting je tvorba textů, jejichž cílem je přesvědčit čtenáře k akci. Nejde pouze o gramatiku, ale o psychologii, emoce a strukturu textu. Copywriter pracuje s nadpisy, benefity, výzvami k akci a argumenty. Texty musí být srozumitelné, jasné a přizpůsobené cílové skupině. Copywriting se používá na webech, v reklamách, e-mailech i na sociálních sítích.",
      whyItMatters:
        "Ani ten nejhezčí web bez kvalitního textu nebude prodávat. Dobrý copywriting zvyšuje konverze a pomáhá uživateli rychle pochopit hodnotu nabídky. Buduje důvěru, odstraňuje obavy a odpovídá na otázky zákazníků. Správně zvolená slova mohou výrazně ovlivnit rozhodnutí o nákupu. Copywriting je proto jedním z nejsilnějších nástrojů online marketingu.",
      examples: [
        "Texty na landing page zaměřené na benefity.",
        "Reklamní slogany a claimy.",
        "E-mailové kampaně s výzvou k akci.",
        "Popisy služeb a produktů.",
        "CTA texty jako „Objednat nyní“."
      ]
    },
    EN: {
      term: "Copywriting",
      shortDefinition: "Persuasive writing",
      fullDefinition:
        "Copywriting is the creation of texts designed to persuade the reader to take action. It is not just about grammar, but about psychology, emotions, and text structure. A copywriter works with headlines, benefits, calls to action, and arguments. Texts must be clear, understandable, and tailored to the target audience. Copywriting is used on websites, in ads, emails, and on social media.",
      whyItMatters:
        "Even the most beautiful website will not sell without strong copy. Good copywriting increases conversions and helps users quickly understand the value of an offer. It builds trust, removes objections, and answers customer questions. The right choice of words can significantly influence purchasing decisions. Copywriting is therefore one of the most powerful tools in online marketing.",
      examples: [
        "Landing page texts focused on benefits.",
        "Advertising slogans and taglines.",
        "Email campaigns with a call to action.",
        "Service and product descriptions.",
        "CTA texts like “Order now”."
      ]
    }
  }
},

retargeting: {
  slugs: { EN: "retargeting", CZ: "retargeting", SK: "retargeting" },
  category: "Marketing",
  relatedTerms: ["PPC", "Conversion", "Funnel", "Remarketing"],
  resources: [
    { title: "What Is Retargeting?", url: "https://www.wordstream.com/retargeting" }
  ],
  content: {
    SK: {
      term: "Retargeting",
      shortDefinition: "Opätovné oslovovanie návštevníkov",
      fullDefinition:
        "Retargeting je marketingová stratégia, pri ktorej sa reklamy zobrazujú ľuďom, ktorí už predtým navštívili web alebo interagovali so značkou. Funguje na základe cookies alebo používateľských identifikátorov, ktoré umožňujú sledovať správanie návštevníkov. Retargeting pripomína značku tým, ktorí prejavili záujem, ale ešte nevykonali požadovanú akciu. Tento typ reklamy je personalizovanejší než bežné kampane. Často sa využíva v kombinácii s PPC reklamou a sociálnymi sieťami.",
      whyItMatters:
        "Väčšina návštevníkov nekonvertuje pri prvej návšteve webu, a práve retargeting pomáha ich získať späť. Zvyšuje pravdepodobnosť konverzie, pretože oslovuje už „zahriate“ publikum. Pomáha udržať značku v povedomí používateľa počas rozhodovacieho procesu. Retargeting kampane sú často nákladovo efektívnejšie než kampane na úplne nové publikum. Pre firmy predstavuje silný nástroj na zvýšenie návratnosti investícií do marketingu.",
      examples: [
        "Reklama na službu, ktorú si používateľ prezeral, ale neobjednal.",
        "Zobrazenie bannera po opustení e-shopu bez nákupu.",
        "Retargetingová reklama na Facebooku pre návštevníkov webu.",
        "Pripomienkový e-mail po nedokončenej rezervácii.",
        "Dynamické reklamy zobrazujúce konkrétne produkty."
      ]
    },
    CZ: {
      term: "Retargeting",
      shortDefinition: "Opětovné oslovování návštěvníků",
      fullDefinition:
        "Retargeting je marketingová strategie, při které se reklamy zobrazují lidem, kteří již dříve navštívili web nebo interagovali se značkou. Funguje na základě cookies nebo uživatelských identifikátorů, které umožňují sledovat chování návštěvníků. Retargeting připomíná značku těm, kteří projevili zájem, ale ještě nevykonali požadovanou akci. Tento typ reklamy je personalizovanější než běžné kampaně. Často se využívá v kombinaci s PPC reklamou a sociálními sítěmi.",
      whyItMatters:
        "Většina návštěvníků nekonvertuje při první návštěvě webu a právě retargeting pomáhá je získat zpět. Zvyšuje pravděpodobnost konverze, protože oslovuje již „zahřáté“ publikum. Pomáhá udržet značku v povědomí uživatele během rozhodovacího procesu. Retargetingové kampaně jsou často nákladově efektivnější než kampaně na zcela nové publikum. Pro firmy představuje silný nástroj ke zvýšení návratnosti investic do marketingu.",
      examples: [
        "Reklama na službu, kterou si uživatel prohlížel, ale neobjednal.",
        "Zobrazení banneru po opuštění e-shopu bez nákupu.",
        "Retargetingová reklama na Facebooku pro návštěvníky webu.",
        "Připomínkový e-mail po nedokončené rezervaci.",
        "Dynamické reklamy zobrazující konkrétní produkty."
      ]
    },
    EN: {
      term: "Retargeting",
      shortDefinition: "Re-engaging previous visitors",
      fullDefinition:
        "Retargeting is a marketing strategy in which ads are shown to people who have previously visited a website or interacted with a brand. It works using cookies or user identifiers that track visitor behavior. Retargeting reminds the brand to users who showed interest but did not complete a desired action. This type of advertising is more personalized than standard campaigns. It is often used in combination with PPC advertising and social media.",
      whyItMatters:
        "Most visitors do not convert on their first visit, and retargeting helps bring them back. It increases conversion likelihood by targeting already “warm” audiences. It keeps the brand top of mind during the decision-making process. Retargeting campaigns are often more cost-effective than campaigns targeting completely new audiences. For businesses, it is a powerful tool to increase marketing ROI.",
      examples: [
        "Ads for a service a user viewed but did not purchase.",
        "Displaying banners after leaving an e-shop without buying.",
        "Facebook retargeting ads for website visitors.",
        "Reminder emails after an incomplete booking.",
        "Dynamic ads showing specific products."
      ]
    }
  }
},

marketingAutomation: {
  slugs: { EN: "marketing-automation", CZ: "marketingova-automatizace", SK: "marketingova-automatizacia" },
  category: "Marketing",
  relatedTerms: ["Leads", "CRM", "Email Marketing", "Funnel"],
  serviceLinks: [
    { serviceKey: "digitalization", label: { EN: "Digitalization & Automation", CZ: "Digitalizace a automatizace", SK: "Digitalizácia a automatizácia" } },
  ],
  resources: [
    { title: "What Is Marketing Automation?", url: "https://www.salesforce.com/marketing/marketing-automation/" }
  ],
  content: {
    SK: {
      term: "Marketingová automatizácia",
      shortDefinition: "Automatizované marketingové procesy",
      fullDefinition:
        "Marketingová automatizácia je využívanie nástrojov a softvéru na automatické vykonávanie marketingových úloh. Zahŕňa automatické e-maily, segmentáciu kontaktov, lead nurturing a spúšťanie kampaní na základe správania používateľov. Automatizácia umožňuje personalizovať komunikáciu bez manuálneho zásahu. Používa sa najmä pri práci s leadmi a zákazníkmi v rôznych fázach nákupného procesu. Je bežnou súčasťou moderného digitálneho marketingu.",
      whyItMatters:
        "Marketingová automatizácia šetrí čas a znižuje manuálnu prácu marketingových tímov. Zvyšuje efektivitu kampaní tým, že správu posiela správnemu človeku v správnom čase. Pomáha budovať dlhodobý vzťah so zákazníkmi prostredníctvom konzistentnej komunikácie. Zvyšuje kvalitu leadov a podporuje predajný proces. Firmám umožňuje škálovať marketing bez dramatického zvyšovania nákladov.",
      examples: [
        "Automatické uvítacie e-maily po registrácii.",
        "Séria e-mailov po stiahnutí e-booku.",
        "Automatické pripomenutie rezervácie služby.",
        "Segmentácia kontaktov podľa správania.",
        "Prepojenie marketingu s CRM systémom."
      ]
    },
    CZ: {
      term: "Marketingová automatizace",
      shortDefinition: "Automatizované marketingové procesy",
      fullDefinition:
        "Marketingová automatizace je využívání nástrojů a softwaru pro automatické provádění marketingových úkolů. Zahrnuje automatické e-maily, segmentaci kontaktů, lead nurturing a spouštění kampaní na základě chování uživatelů. Automatizace umožňuje personalizovat komunikaci bez manuálního zásahu. Používá se zejména při práci s leady a zákazníky v různých fázích nákupního procesu. Je běžnou součástí moderního digitálního marketingu.",
      whyItMatters:
        "Marketingová automatizace šetří čas a snižuje manuální práci marketingových týmů. Zvyšuje efektivitu kampaní tím, že doručuje správnou zprávu správnému člověku ve správný čas. Pomáhá budovat dlouhodobé vztahy se zákazníky prostřednictvím konzistentní komunikace. Zvyšuje kvalitu leadů a podporuje prodejní proces. Firmám umožňuje škálovat marketing bez dramatického zvyšování nákladů.",
      examples: [
        "Automatické uvítací e-maily po registraci.",
        "Série e-mailů po stažení e-booku.",
        "Automatické připomenutí rezervace služby.",
        "Segmentace kontaktů podle chování.",
        "Propojení marketingu s CRM systémem."
      ]
    },
    EN: {
      term: "Marketing Automation",
      shortDefinition: "Automated marketing processes",
      fullDefinition:
        "Marketing automation is the use of tools and software to automatically execute marketing tasks. It includes automated emails, contact segmentation, lead nurturing, and campaign triggers based on user behavior. Automation enables personalized communication without manual intervention. It is mainly used when working with leads and customers at different stages of the buying process. It is a standard component of modern digital marketing.",
      whyItMatters:
        "Marketing automation saves time and reduces manual workload for marketing teams. It increases campaign efficiency by delivering the right message to the right person at the right time. It helps build long-term customer relationships through consistent communication. It improves lead quality and supports the sales process. For companies, it enables marketing scalability without dramatically increasing costs.",
      examples: [
        "Automated welcome emails after registration.",
        "Email sequences after downloading an e-book.",
        "Automatic service booking reminders.",
        "Behavior-based contact segmentation.",
        "Integration of marketing tools with CRM systems."
      ]
    }
  }
},
  branding: {
  slugs: { EN: "branding", CZ: "branding", SK: "branding" },
  category: "Marketing",
  relatedTerms: ["Brand", "Brand Identity", "Copywriting", "UX"],
  serviceLinks: [
    { serviceKey: "graphicDesign", label: { EN: "Graphic Design", CZ: "Grafický design", SK: "Grafický dizajn" } },
  ],
  resources: [
    { title: "What Is Branding?", url: "https://www.investopedia.com/terms/b/branding.asp" }
  ],
  content: {
    SK: {
      term: "Branding",
      shortDefinition: "Budovanie značky",
      fullDefinition:
        "Branding je proces budovania značky, jej identity, imidžu a vnímania verejnosťou. Zahŕňa vizuálne prvky, ako logo, farby a typografiu, ale aj tón komunikácie, hodnoty a spôsob vystupovania. Branding určuje, ako si ľudia značku pamätajú a ako sa pri nej cítia. Nejde len o dizajn, ale o celkový zážitok zo značky. Silný branding vytvára emocionálne spojenie medzi značkou a zákazníkom.",
      whyItMatters:
        "Dobrý branding zvyšuje dôveru a odlišuje značku od konkurencie. Pomáha zákazníkom rýchlejšie sa rozhodnúť, pretože vedia, čo môžu očakávať. Konzistentná značka pôsobí profesionálne a zapamätateľne. Branding zvyšuje hodnotu firmy aj jej služieb, často umožňuje vyššie ceny. Pre dlhodobý rast je značka rovnako dôležitá ako samotný produkt.",
      examples: [
        "Konzistentné farby a fonty na webe a sociálnych sieťach.",
        "Jednotný tón komunikácie v reklamách a e-mailoch.",
        "Zapamätateľný názov a logo projektu.",
        "Brand voice prispôsobený cieľovej skupine.",
        "Dôraz na dôveru a profesionalitu v komunikácii."
      ]
    },
    CZ: {
      term: "Branding",
      shortDefinition: "Budování značky",
      fullDefinition:
        "Branding je proces budování značky, její identity, image a způsobu, jak ji vnímá veřejnost. Zahrnuje vizuální prvky, jako logo, barvy a typografii, ale také tón komunikace, hodnoty a vystupování. Branding určuje, jak si lidé značku pamatují a jaké v nich vyvolává emoce. Nejde pouze o design, ale o celkový zážitek ze značky. Silný branding vytváří emocionální spojení mezi značkou a zákazníkem.",
      whyItMatters:
        "Dobrý branding zvyšuje důvěru a odlišuje značku od konkurence. Pomáhá zákazníkům rychleji se rozhodnout, protože vědí, co mohou očekávat. Konzistentní značka působí profesionálně a zapamatovatelně. Branding zvyšuje hodnotu firmy i jejích služeb a často umožňuje vyšší ceny. Pro dlouhodobý růst je značka stejně důležitá jako samotný produkt.",
      examples: [
        "Konzistentní barvy a fonty na webu a sociálních sítích.",
        "Jednotný tón komunikace v reklamách a e-mailech.",
        "Zapamatovatelný název a logo projektu.",
        "Brand voice přizpůsobený cílové skupině.",
        "Důraz na důvěru a profesionalitu v komunikaci."
      ]
    },
    EN: {
      term: "Branding",
      shortDefinition: "Building a brand",
      fullDefinition:
        "Branding is the process of building a brand’s identity, image, and public perception. It includes visual elements such as logos, colors, and typography, as well as tone of voice, values, and overall communication style. Branding defines how people remember the brand and how it makes them feel. It goes beyond design and represents the complete brand experience. Strong branding creates an emotional connection between the brand and its customers.",
      whyItMatters:
        "Good branding builds trust and differentiates a brand from competitors. It helps customers make faster decisions because they know what to expect. A consistent brand appears professional and memorable. Branding increases the perceived value of a company and its services, often allowing higher pricing. For long-term growth, a strong brand is as important as the product itself.",
      examples: [
        "Consistent colors and fonts across website and social media.",
        "Unified tone of communication in ads and emails.",
        "Memorable brand name and logo.",
        "Brand voice tailored to the target audience.",
        "Emphasis on trust and professionalism."
      ]
    }
  }
},

lead: {
  slugs: { EN: "lead", CZ: "lead", SK: "lead" },
  category: "Marketing",
  relatedTerms: ["Conversion", "Funnel", "CRM", "Marketing Automation"],
  resources: [
    { title: "What Is a Lead?", url: "https://www.hubspot.com/marketing-statistics" }
  ],
  content: {
    SK: {
      term: "Lead",
      shortDefinition: "Potenciálny zákazník",
      fullDefinition:
        "Lead je osoba, ktorá prejavila záujem o produkt alebo službu, ale ešte sa nestala zákazníkom. Zvyčajne ide o používateľa, ktorý zanechal kontakt, napríklad e-mail alebo telefón. Lead vzniká prostredníctvom formulárov, registrácií, stiahnutia obsahu alebo rezervácií. V marketingu sa leady ďalej triedia podľa kvality a pripravenosti na nákup. Sú základom pre obchodné a predajné procesy.",
      whyItMatters:
        "Leady predstavujú budúcich zákazníkov a potenciálny príjem firmy. Umožňujú systematickú prácu s kontaktmi a budovanie vzťahu. Vďaka leadom je možné cieliť marketingové kampane presnejšie. Kvalitné leady zvyšujú efektivitu predaja a skracujú rozhodovací proces. Bez leadov by marketing nemal na koho nadväzovať.",
      examples: [
        "Odoslaný dopyt cez formulár.",
        "Registrácia poskytovateľa do platformy.",
        "Prihlásenie sa do newslettera.",
        "Rezervácia služby bez okamžitej platby.",
        "Stiahnutie e-booku výmenou za e-mail."
      ]
    },
    CZ: {
      term: "Lead",
      shortDefinition: "Potenciální zákazník",
      fullDefinition:
        "Lead je osoba, která projevila zájem o produkt nebo službu, ale ještě se nestala zákazníkem. Obvykle jde o uživatele, který zanechal kontakt, například e-mail nebo telefon. Lead vzniká prostřednictvím formulářů, registrací, stažení obsahu nebo rezervací. V marketingu se leady dále třídí podle kvality a připravenosti k nákupu. Jsou základem obchodních a prodejních procesů.",
      whyItMatters:
        "Leady představují budoucí zákazníky a potenciální příjem firmy. Umožňují systematickou práci s kontakty a budování vztahu. Díky leadům lze marketingové kampaně cílit přesněji. Kvalitní leady zvyšují efektivitu prodeje a zkracují rozhodovací proces. Bez leadů by marketing neměl na koho navazovat.",
      examples: [
        "Odeslaná poptávka přes formulář.",
        "Registrace poskytovatele do platformy.",
        "Přihlášení k newsletteru.",
        "Rezervace služby bez okamžité platby.",
        "Stažení e-booku výměnou za e-mail."
      ]
    },
    EN: {
      term: "Lead",
      shortDefinition: "Potential customer",
      fullDefinition:
        "A lead is a person who has shown interest in a product or service but has not yet become a customer. This usually involves leaving contact information such as an email address or phone number. Leads are generated through forms, registrations, content downloads, or reservations. In marketing, leads are further categorized based on quality and readiness to buy. They are the foundation of sales and business development processes.",
      whyItMatters:
        "Leads represent future customers and potential revenue. They enable systematic relationship-building and contact management. Leads allow for more precise targeting of marketing campaigns. High-quality leads increase sales efficiency and shorten the decision-making process. Without leads, marketing has no one to convert.",
      examples: [
        "Submitting an inquiry through a form.",
        "Registering as a service provider.",
        "Signing up for a newsletter.",
        "Booking a service without immediate payment.",
        "Downloading an e-book in exchange for an email."
      ]
    }
  }
},

contentMarketing: {
  slugs: { EN: "content-marketing", CZ: "content-marketing", SK: "content-marketing" },
  category: "Marketing",
  relatedTerms: ["SEO", "Branding", "Copywriting", "Organic Traffic"],
  resources: [
    { title: "What Is Content Marketing?", url: "https://contentmarketinginstitute.com/what-is-content-marketing/" }
  ],
  content: {
    SK: {
      term: "Content marketing",
      shortDefinition: "Marketing založený na obsahu",
      fullDefinition:
        "Content marketing je stratégia založená na tvorbe hodnotného a relevantného obsahu pre cieľovú skupinu. Nejde o priamy predaj, ale o vzdelávanie, pomoc a budovanie dôvery. Obsah môže mať formu článkov, videí, návodov, blogov či sociálnych príspevkov. Content marketing odpovedá na otázky používateľov a rieši ich problémy. Je dlhodobým pilierom SEO a brandingu.",
      whyItMatters:
        "Kvalitný obsah priťahuje návštevníkov organicky bez nutnosti platených reklám. Pomáha budovať autoritu značky a odborné postavenie na trhu. Content marketing zvyšuje dôveru, pretože zákazník má pocit, že značka mu pomáha. Podporuje SEO, keďže vyhľadávače uprednostňujú hodnotný obsah. Z dlhodobého hľadiska ide o veľmi udržateľnú marketingovú stratégiu.",
      examples: [
        "Blogové články zamerané na riešenie problémov zákazníkov.",
        "Návody „ako na to“ pre mobilné služby.",
        "Edukačné videá a reels.",
        "Prípadové štúdie a recenzie.",
        "Obsah optimalizovaný pre SEO."
      ]
    },
    CZ: {
      term: "Content marketing",
      shortDefinition: "Marketing založený na obsahu",
      fullDefinition:
        "Content marketing je strategie založená na tvorbě hodnotného a relevantního obsahu pro cílovou skupinu. Nejde o přímý prodej, ale o vzdělávání, pomoc a budování důvěry. Obsah může mít podobu článků, videí, návodů, blogů nebo příspěvků na sociálních sítích. Content marketing odpovídá na otázky uživatelů a řeší jejich problémy. Je dlouhodobým pilířem SEO a brandingu.",
      whyItMatters:
        "Kvalitní obsah přitahuje návštěvníky organicky bez nutnosti placené reklamy. Pomáhá budovat autoritu značky a odborné postavení na trhu. Content marketing zvyšuje důvěru, protože zákazník má pocit, že mu značka pomáhá. Podporuje SEO, protože vyhledávače upřednostňují hodnotný obsah. Z dlouhodobého hlediska jde o velmi udržitelnou marketingovou strategii.",
      examples: [
        "Blogové články zaměřené na řešení problémů zákazníků.",
        "Návody „jak na to“ pro mobilní služby.",
        "Edukační videa a reels.",
        "Případové studie a recenze.",
        "SEO optimalizovaný obsah."
      ]
    },
    EN: {
      term: "Content Marketing",
      shortDefinition: "Marketing based on valuable content",
      fullDefinition:
        "Content marketing is a strategy focused on creating valuable and relevant content for a target audience. It is not about direct selling, but about educating, helping, and building trust. Content can take the form of articles, videos, guides, blogs, or social media posts. Content marketing answers user questions and solves their problems. It is a long-term pillar of SEO and branding.",
      whyItMatters:
        "High-quality content attracts visitors organically without paid advertising. It helps build brand authority and expert positioning. Content marketing increases trust because customers feel the brand is helping them. It supports SEO since search engines prioritize valuable content. In the long term, it is a highly sustainable marketing strategy.",
      examples: [
        "Blog articles solving customer problems.",
        "How-to guides for mobile services.",
        "Educational videos and reels.",
        "Case studies and reviews.",
        "SEO-optimized content."
      ]
    }
  }
},
cta: {
  slugs: { EN: "cta", CZ: "cta", SK: "cta" },
  category: "Marketing",
  relatedTerms: ["Conversion", "Landing Page", "UX", "Copywriting"],
  resources: [
    { title: "What Is a Call to Action?", url: "https://www.optimizely.com/optimization-glossary/call-to-action/" }
  ],
  content: {
    SK: {
      term: "CTA (Call to Action)",
      shortDefinition: "Výzva k akcii",
      fullDefinition:
        "CTA je prvok na webe alebo v reklame, ktorý vyzýva používateľa k vykonaniu konkrétnej akcie. Môže ísť o tlačidlo, text alebo grafický prvok s jasným posolstvom. Typickými CTA sú výzvy ako „Objednať teraz“, „Získať ponuku“ alebo „Kontaktujte nás“. CTA pomáha návštevníkovi pochopiť, čo má urobiť ďalej. Bez CTA je web často nejasný a má nižšiu konverziu.",
      whyItMatters:
        "CTA priamo ovplyvňuje mieru konverzií, pretože navádza používateľa k želanej akcii. Jasná výzva znižuje váhanie a zlepšuje používateľský zážitok. Dobre navrhnuté CTA zvyšuje počet objednávok, dopytov alebo registrácií. Pomáha tiež usmerniť návštevníkov po stránke a viesť ich konverznou cestou. Bez CTA môže byť aj kvalitný obsah marketingovo neefektívny.",
      examples: [
        "Tlačidlo „Nájsť poskytovateľa“ na domovskej stránke.",
        "Výzva „Pridať svoju službu“ pre poskytovateľov.",
        "CTA v e-maili „Získať zľavu“.",
        "Bannery s výzvou na rezerváciu služby.",
        "Sticky CTA tlačidlo na mobile."
      ]
    },
    CZ: {
      term: "CTA (Call to Action)",
      shortDefinition: "Výzva k akci",
      fullDefinition:
        "CTA je prvek na webu nebo v reklamě, který vyzývá uživatele k provedení konkrétní akce. Může jít o tlačítko, text nebo grafický prvek s jasným sdělením. Typickými CTA jsou výzvy jako „Objednat nyní“, „Získat nabídku“ nebo „Kontaktujte nás“. CTA pomáhá návštěvníkovi pochopit, co má udělat dál. Bez CTA je web často nejasný a má nižší konverzi.",
      whyItMatters:
        "CTA přímo ovlivňuje míru konverzí, protože navádí uživatele k požadované akci. Jasná výzva snižuje váhání a zlepšuje uživatelský zážitek. Dobře navržené CTA zvyšuje počet objednávek, poptávek nebo registrací. Pomáhá také směrovat návštěvníky po webu a vést je konverzní cestou. Bez CTA může být i kvalitní obsah marketingově neefektivní.",
      examples: [
        "Tlačítko „Najít poskytovatele“ na domovské stránce.",
        "Výzva „Přidat svou službu“ pro poskytovatele.",
        "CTA v e-mailu „Získat slevu“.",
        "Bannery s výzvou k rezervaci služby.",
        "Sticky CTA tlačítko na mobilu."
      ]
    },
    EN: {
      term: "CTA (Call to Action)",
      shortDefinition: "Action prompt",
      fullDefinition:
        "A CTA is an element on a website or in an advertisement that encourages users to take a specific action. It can be a button, text, or graphical element with a clear message. Typical CTAs include phrases like “Order now,” “Get a quote,” or “Contact us.” A CTA helps visitors understand what to do next. Without a CTA, a website is often unclear and achieves lower conversion rates.",
      whyItMatters:
        "CTAs directly influence conversion rates by guiding users toward the desired action. Clear calls to action reduce hesitation and improve the user experience. Well-designed CTAs increase the number of orders, inquiries, or registrations. They also help guide visitors through the site along the conversion path. Without CTAs, even high-quality content can be marketing-ineffective.",
      examples: [
        "A “Find a provider” button on the homepage.",
        "A “Add your service” CTA for providers.",
        "An email CTA saying “Get a discount”.",
        "Banners encouraging service reservations.",
        "Sticky CTA buttons on mobile devices."
      ]
    }
  }
},
conversion: {
  slugs: { EN: "conversion", CZ: "konverze", SK: "konverzia" },
  category: "Marketing",
  relatedTerms: ["CTA", "Conversion Rate", "Landing Page", "PPC"],
  resources: [
    { title: "What Is Conversion?", url: "https://www.wordstream.com/conversion" }
  ],
  content: {
    SK: {
      term: "Konverzia",
      shortDefinition: "Splnenie marketingového cieľa",
      fullDefinition:
        "Konverzia nastáva vtedy, keď návštevník vykoná požadovanú akciu na webe. Môže to byť nákup, vyplnenie formulára, registrácia, rezervácia alebo telefonát. Každý web má definované vlastné konverzné ciele podľa svojho účelu. Konverzia je základnou metrikou úspešnosti marketingu. Bez merania konverzií nie je možné vyhodnocovať efektivitu kampaní.",
      whyItMatters:
        "Konverzie ukazujú, či marketing prináša reálnu hodnotu, nie len návštevnosť. Pomáhajú identifikovať, ktoré kanály a kampane fungujú najlepšie. Optimalizácia konverzií zvyšuje zisk bez nutnosti zvyšovať rozpočet. Umožňuje robiť rozhodnutia na základe dát, nie pocitov. Pre firmy sú konverzie priamym mostom medzi marketingom a tržbami.",
      examples: [
        "Odoslaný dopyt cez kontaktný formulár.",
        "Dokončená rezervácia služby.",
        "Nákup v e-shope.",
        "Kliknutie na telefónne číslo na mobile.",
        "Registrácia do newslettera."
      ]
    },
    CZ: {
      term: "Konverze",
      shortDefinition: "Splnění marketingového cíle",
      fullDefinition:
        "Konverze nastává tehdy, když návštěvník provede požadovanou akci na webu. Může se jednat o nákup, vyplnění formuláře, registraci, rezervaci nebo telefonát. Každý web má definované vlastní konverzní cíle podle svého účelu. Konverze je základní metrikou úspěšnosti marketingu. Bez měření konverzí není možné vyhodnocovat efektivitu kampaní.",
      whyItMatters:
        "Konverze ukazují, zda marketing přináší skutečnou hodnotu, nejen návštěvnost. Pomáhají identifikovat, které kanály a kampaně fungují nejlépe. Optimalizace konverzí zvyšuje zisk bez nutnosti zvyšovat rozpočet. Umožňuje dělat rozhodnutí na základě dat, nikoli pocitů. Pro firmy jsou konverze přímým mostem mezi marketingem a tržbami.",
      examples: [
        "Odeslaná poptávka přes kontaktní formulář.",
        "Dokončená rezervace služby.",
        "Nákup v e-shopu.",
        "Kliknutí na telefonní číslo na mobilu.",
        "Registrace k newsletteru."
      ]
    },
    EN: {
      term: "Conversion",
      shortDefinition: "Completion of a marketing goal",
      fullDefinition:
        "A conversion occurs when a visitor completes a desired action on a website. This can include a purchase, form submission, registration, reservation, or phone call. Each website defines its own conversion goals based on its purpose. Conversion is a fundamental metric of marketing success. Without tracking conversions, it is impossible to evaluate campaign effectiveness.",
      whyItMatters:
        "Conversions show whether marketing delivers real value, not just traffic. They help identify which channels and campaigns perform best. Conversion optimization increases profit without increasing advertising spend. It enables data-driven decision-making rather than relying on assumptions. For businesses, conversions are the direct link between marketing and revenue.",
      examples: [
        "Submitting an inquiry via a contact form.",
        "Completing a service reservation.",
        "Making a purchase in an online store.",
        "Clicking a phone number on mobile.",
        "Signing up for a newsletter."
      ]
    }
  }
},
conversionRate: {
  slugs: { EN: "conversion-rate", CZ: "konverzni-pomer", SK: "konverzny-pomer" },
  category: "Marketing",
  relatedTerms: ["Conversion", "CTA", "A/B Testing", "UX"],
  resources: [
    { title: "Conversion Rate Optimization Guide", url: "https://www.crazyegg.com/blog/conversion-rate-optimization/" }
  ],
  content: {
    SK: {
      term: "Konverzný pomer (Conversion Rate)",
      shortDefinition: "Pomer návštevníkov, ktorí vykonali akciu",
      fullDefinition:
        "Konverzný pomer vyjadruje percento návštevníkov webu, ktorí vykonali požadovanú akciu, napríklad nákup alebo odoslanie formulára. Vypočíta sa ako podiel konverzií a celkovej návštevnosti. Tento ukazovateľ pomáha pochopiť, ako efektívne web alebo kampaň premieňa návštevníkov na zákazníkov. Konverzný pomer sa môže líšiť podľa typu stránky, zdroja návštevnosti či zariadenia. Ide o jednu z najdôležitejších metrík v online marketingu.",
      whyItMatters:
        "Vyšší konverzný pomer znamená, že z rovnakej návštevnosti získava firma viac zákazníkov alebo dopytov. Umožňuje optimalizovať web bez nutnosti zvyšovať rozpočet na reklamu. Pomáha identifikovať slabé miesta v používateľskej ceste, napríklad neprehľadné formuláre alebo zlé CTA. Vďaka sledovaniu konverzného pomeru sa marketingové rozhodnutia opierajú o dáta, nie odhady. Pre firmy je to priamy ukazovateľ efektivity webu a kampaní.",
      examples: [
        "100 návštev webu a 5 dopytov = 5 % konverzný pomer.",
        "Optimalizácia formulára zvýši konverzie bez zvýšenia návštevnosti.",
        "Mobilná verzia má nižší konverzný pomer než desktop.",
        "A/B testovanie CTA tlačidiel.",
        "Porovnávanie výkonu rôznych landing pages."
      ]
    },
    CZ: {
      term: "Konverzní poměr (Conversion Rate)",
      shortDefinition: "Poměr návštěvníků, kteří provedli akci",
      fullDefinition:
        "Konverzní poměr vyjadřuje procento návštěvníků webu, kteří provedli požadovanou akci, například nákup nebo odeslání formuláře. Vypočítává se jako podíl konverzí a celkové návštěvnosti. Tento ukazatel pomáhá pochopit, jak efektivně web nebo kampaň převádí návštěvníky na zákazníky. Konverzní poměr se může lišit podle typu stránky, zdroje návštěvnosti nebo zařízení. Jedná se o jednu z nejdůležitějších metrik v online marketingu.",
      whyItMatters:
        "Vyšší konverzní poměr znamená, že ze stejné návštěvnosti získá firma více zákazníků nebo poptávek. Umožňuje optimalizovat web bez nutnosti zvyšovat rozpočet na reklamu. Pomáhá identifikovat slabá místa v uživatelské cestě, například nepřehledné formuláře nebo špatná CTA. Díky sledování konverzního poměru se marketingová rozhodnutí opírají o data, nikoli odhady. Pro firmy je to přímý ukazatel efektivity webu a kampaní.",
      examples: [
        "100 návštěv webu a 5 poptávek = 5% konverzní poměr.",
        "Optimalizace formuláře zvýší konverze bez zvýšení návštěvnosti.",
        "Mobilní verze má nižší konverzní poměr než desktop.",
        "A/B testování CTA tlačítek.",
        "Porovnávání výkonu různých landing pages."
      ]
    },
    EN: {
      term: "Conversion Rate",
      shortDefinition: "Percentage of visitors who take action",
      fullDefinition:
        "Conversion rate represents the percentage of website visitors who complete a desired action, such as making a purchase or submitting a form. It is calculated as the ratio of conversions to total traffic. This metric helps measure how effectively a website or campaign turns visitors into customers. Conversion rates can vary by page type, traffic source, or device. It is one of the most important metrics in online marketing.",
      whyItMatters:
        "A higher conversion rate means more customers or leads from the same amount of traffic. It allows website optimization without increasing advertising budgets. It helps identify weak points in the user journey, such as unclear forms or ineffective CTAs. Tracking conversion rate enables data-driven marketing decisions. For businesses, it is a direct indicator of website and campaign performance.",
      examples: [
        "100 website visits and 5 leads = 5% conversion rate.",
        "Form optimization increases conversions without more traffic.",
        "Mobile version has a lower conversion rate than desktop.",
        "A/B testing CTA buttons.",
        "Comparing performance of different landing pages."
      ]
    }
  }
},
seo: {
  slugs: { EN: "seo", CZ: "seo", SK: "seo" },
  category: "Marketing",
  relatedTerms: ["Keywords", "SERP", "Meta Description", "Backlinks", "Organic Traffic"],
  serviceLinks: [
    { serviceKey: "seo", label: { EN: "SEO Services", CZ: "SEO služby", SK: "SEO služby" } },
  ],
  resources: [
    { title: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }
  ],
  content: {
    SK: {
      term: "SEO (Search Engine Optimization)",
      shortDefinition: "Optimalizácia pre vyhľadávače",
      fullDefinition:
        "SEO je súbor techník a stratégií, ktorých cieľom je zlepšiť viditeľnosť webovej stránky vo vyhľadávačoch ako Google. Zahŕňa úpravy obsahu, technického nastavenia webu aj získavanie externých odkazov. Cieľom SEO je, aby sa web zobrazoval čo najvyššie vo výsledkoch vyhľadávania na relevantné dopyty. Ide o dlhodobý proces, ktorý si vyžaduje systematickú prácu a analýzu dát. SEO neznamená platenú reklamu, ale organickú (neplatenú) návštevnosť.",
      whyItMatters:
        "Väčšina ľudí kliká len na prvé výsledky vo vyhľadávaní, preto je vysoká pozícia kľúčová pre návštevnosť webu. Kvalitné SEO prináša stabilný a dlhodobý zdroj návštevníkov bez nutnosti neustále platiť za reklamu. Pomáha osloviť ľudí presne v momente, keď aktívne hľadajú riešenie svojho problému. SEO zvyšuje dôveryhodnosť značky, pretože weby na popredných pozíciách pôsobia profesionálnejšie. Z dlhodobého hľadiska má SEO veľmi vysokú návratnosť investície.",
      examples: [
        "Optimalizácia článku na kľúčové slovo „mobilný autoservis Bratislava“.",
        "Technické zrýchlenie webu pre lepšie hodnotenie Googlom.",
        "Písanie blogov, ktoré odpovedajú na otázky zákazníkov.",
        "Získavanie spätných odkazov z relevantných webov.",
        "Úprava titulkov a meta popisov stránok."
      ]
    },
    CZ: {
      term: "SEO (Search Engine Optimization)",
      shortDefinition: "Optimalizace pro vyhledávače",
      fullDefinition:
        "SEO je soubor technik a strategií, jejichž cílem je zlepšit viditelnost webové stránky ve vyhledávačích, jako je Google. Zahrnuje úpravy obsahu, technického nastavení webu i získávání externích odkazů. Cílem SEO je, aby se web zobrazoval co nejvýše ve výsledcích vyhledávání na relevantní dotazy. Jedná se o dlouhodobý proces, který vyžaduje systematickou práci a analýzu dat. SEO neznamená placenou reklamu, ale organickou (neplacenou) návštěvnost.",
      whyItMatters:
        "Většina lidí kliká pouze na první výsledky ve vyhledávání, proto je vysoká pozice klíčová pro návštěvnost webu. Kvalitní SEO přináší stabilní a dlouhodobý zdroj návštěvníků bez nutnosti neustále platit za reklamu. Pomáhá oslovit lidi přesně ve chvíli, kdy aktivně hledají řešení svého problému. SEO zvyšuje důvěryhodnost značky, protože weby na předních pozicích působí profesionálněji. Z dlouhodobého hlediska má SEO velmi vysokou návratnost investice.",
      examples: [
        "Optimalizace článku na klíčové slovo „mobilní autoservis Bratislava“.",
        "Technické zrychlení webu pro lepší hodnocení Googlem.",
        "Psaní blogů, které odpovídají na otázky zákazníků.",
        "Získávání zpětných odkazů z relevantních webů.",
        "Úprava titulků a meta popisů stránek."
      ]
    },
    EN: {
      term: "SEO (Search Engine Optimization)",
      shortDefinition: "Search engine optimization",
      fullDefinition:
        "SEO is a set of techniques and strategies aimed at improving the visibility of a website in search engines such as Google. It includes content optimization, technical website configuration, and acquiring external links. The goal of SEO is to ensure that a website appears as high as possible in search results for relevant queries. It is a long-term process that requires systematic work and data analysis. SEO does not mean paid advertising, but organic (unpaid) traffic.",
      whyItMatters:
        "Most people click only on the first search results, which is why high rankings are crucial for website traffic. Quality SEO provides a stable and long-term source of visitors without the need to constantly pay for advertising. It helps reach people exactly when they are actively searching for a solution to their problem. SEO increases brand credibility because websites in top positions appear more professional. In the long term, SEO offers a very high return on investment.",
      examples: [
        "Optimizing an article for the keyword “mobile car service Bratislava”.",
        "Improving website speed for better Google evaluation.",
        "Writing blog posts that answer customer questions.",
        "Acquiring backlinks from relevant websites.",
        "Optimizing page titles and meta descriptions."
      ]
    }
  }
},
ppc: {
  slugs: { EN: "ppc", CZ: "ppc", SK: "ppc" },
  category: "Marketing",
  relatedTerms: ["Google Ads", "Meta Ads", "CPC", "CTR", "Conversion"],
  serviceLinks: [
    { serviceKey: "ppc", label: { EN: "PPC Advertising", CZ: "PPC reklama", SK: "PPC reklama" } },
  ],
  resources: [
    { title: "Google Ads Help", url: "https://support.google.com/google-ads" }
  ],
  content: {
    SK: {
      term: "PPC reklama (Pay-Per-Click)",
      shortDefinition: "Platená reklama za preklik",
      fullDefinition:
        "PPC reklama je forma online reklamy, pri ktorej inzerent platí len vtedy, keď používateľ klikne na reklamu. Najznámejšie PPC platformy sú Google Ads a Meta Ads (Facebook, Instagram). Reklamy sa zobrazujú vo vyhľadávačoch, na sociálnych sieťach alebo partnerských weboch. PPC umožňuje veľmi presné cielenie podľa záujmov, lokality, správania či demografie. Ide o rýchly spôsob, ako okamžite priviesť návštevnosť na web.",
      whyItMatters:
        "PPC reklama umožňuje okamžité výsledky, čo je ideálne pri nových projektoch alebo kampaniach. Poskytuje plnú kontrolu nad rozpočtom, cieľovou skupinou aj obsahom reklamy. Správne nastavené PPC kampane dokážu generovať predaje, dopyty alebo registrácie veľmi efektívne. Zároveň poskytujú presné dáta o výkonnosti, ktoré pomáhajú optimalizovať marketingové rozhodnutia. PPC je silným doplnkom SEO, najmä pri konkurenčných kľúčových slovách.",
      examples: [
        "Google reklama na výraz „mobilná masáž Košice“.",
        "Facebook reklama cielená na lokálnych podnikateľov.",
        "Remarketingová kampaň na návštevníkov webu.",
        "Propagácia novej služby cez Instagram Ads.",
        "Testovanie rôznych reklamných textov a vizuálov."
      ]
    },
    CZ: {
      term: "PPC reklama (Pay-Per-Click)",
      shortDefinition: "Placená reklama za proklik",
      fullDefinition:
        "PPC reklama je forma online reklamy, při které inzerent platí pouze tehdy, když uživatel klikne na reklamu. Nejznámější PPC platformy jsou Google Ads a Meta Ads (Facebook, Instagram). Reklamy se zobrazují ve vyhledávačích, na sociálních sítích nebo partnerských webech. PPC umožňuje velmi přesné cílení podle zájmů, lokality, chování nebo demografie. Jedná se o rychlý způsob, jak okamžitě přivést návštěvnost na web.",
      whyItMatters:
        "PPC reklama umožňuje okamžité výsledky, což je ideální pro nové projekty nebo kampaně. Poskytuje plnou kontrolu nad rozpočtem, cílovou skupinou i obsahem reklamy. Správně nastavené PPC kampaně dokážou efektivně generovat prodeje, poptávky nebo registrace. Zároveň poskytují přesná data o výkonnosti, která pomáhají optimalizovat marketingová rozhodnutí. PPC je silným doplňkem SEO, zejména u konkurenčních klíčových slov.",
      examples: [
        "Google reklama na výraz „mobilní masáž Košice“.",
        "Facebook reklama cílená na lokální podnikatele.",
        "Remarketingová kampaň na návštěvníky webu.",
        "Propagace nové služby přes Instagram Ads.",
        "Testování různých reklamních textů a vizuálů."
      ]
    },
    EN: {
      term: "PPC Advertising (Pay-Per-Click)",
      shortDefinition: "Paid advertising per click",
      fullDefinition:
        "PPC advertising is an online advertising model where advertisers pay only when a user clicks on an ad. The most well-known platforms are Google Ads and Meta Ads (Facebook, Instagram). Ads appear in search engines, on social networks, or partner websites. PPC allows very precise targeting based on interests, location, behavior, or demographics. It is a fast way to immediately drive traffic to a website.",
      whyItMatters:
        "PPC advertising delivers immediate results, making it ideal for new projects or campaigns. It provides full control over budget, audience, and ad content. Well-optimized PPC campaigns can effectively generate sales, inquiries, or registrations. It also provides accurate performance data that helps optimize marketing decisions. PPC is a strong complement to SEO, especially for competitive keywords.",
      examples: [
        "Google ad for the keyword “mobile massage Košice”.",
        "Facebook ads targeting local businesses.",
        "Remarketing campaigns for website visitors.",
        "Promoting a new service via Instagram Ads.",
        "Testing different ad creatives and copy."
      ]
    }
  }
},
 frontend: {
  slugs: { EN: "frontend", CZ: "frontend", SK: "frontend" },
  category: "Development",
  relatedTerms: ["Backend", "Fullstack Development", "HTML", "CSS", "JavaScript", "UI", "UX", "Responsiveness"],
  serviceLinks: [
    { serviceKey: "buildingWebsite", label: { EN: "Website Development", CZ: "Tvorba webových stránek", SK: "Tvorba webových stránok" } },
  ],
  resources: [
    { title: "MDN — Front-end web developer", url: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" },
    { title: "web.dev — Learn responsive design", url: "https://web.dev/learn/design/" },
    { title: "MDN — HTML, CSS, JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn" }
  ],
  content: {
    EN: {
      term: "Frontend",
      shortDefinition: "User interface development",
      fullDefinition:
        "Frontend is the part of a website or application that a visitor directly sees and uses. It is the visual and interactive layer of the project—how texts, images, buttons, forms, navigation, and other elements look and behave. Frontend is mainly built with HTML, CSS, and JavaScript, which define structure, design, and interactions. It ensures content is clearly organized, easy to read, and accessible across devices including mobile phones and tablets. In practice, it is the first layer of user experience that can strongly influence whether a visitor continues browsing or leaves.",
      examples: [
        "A menu that automatically changes into a hamburger icon on mobile.",
        "A homepage image slider that responds to touch gestures.",
        "Form validation that warns about missing or incorrect inputs.",
        "Modern scroll-triggered animations of elements on the page.",
        "Different button styles for actions (primary vs. secondary CTA)."
      ],
      whyItMatters:
        "A quality frontend is crucial for how fast and intuitively a visitor can complete an action—such as a purchase or submitting a contact form. Professional frontend work increases brand credibility and creates a strong first impression. Good interface design helps users navigate without frustration, reducing bounce rate. Frontend also impacts loading speed and mobile optimization, which affects SEO. In modern web projects, frontend is one of the key pillars of overall user experience."
    },
    CZ: {
      term: "Frontend",
      shortDefinition: "Vývoj uživatelského rozhraní",
      fullDefinition:
        "Frontend je část webové stránky nebo aplikace, kterou návštěvník přímo vidí a používá. Jde o vizuální a interaktivní vrstvu projektu—jak vypadají a fungují texty, obrázky, tlačítka, formuláře, navigace a další prvky. Frontend je postavený hlavně na HTML, CSS a JavaScriptu, které určují strukturu, vzhled a chování webu. Zajišťuje přehledné uspořádání obsahu, dobrou čitelnost a dostupnost na různých zařízeních včetně mobilů a tabletů. V praxi je to první vrstva uživatelského zážitku, která výrazně ovlivňuje, zda návštěvník na webu zůstane.",
      examples: [
        "Menu, které se na mobilu automaticky změní na hamburger ikonu.",
        "Slider na hlavní stránce, který reaguje na dotykové ovládání.",
        "Validace formuláře, která upozorní na chybějící nebo špatné údaje.",
        "Moderní animace prvků při scrollování stránky.",
        "Odlišené styly tlačítek podle typu akce (primární vs. sekundární CTA)."
      ],
      whyItMatters:
        "Kvalitní frontend zásadně ovlivňuje, jak rychle a intuitivně uživatel provede požadovanou akci—například nákup nebo odeslání formuláře. Profesionální zpracování zvyšuje důvěryhodnost značky a vytváří pozitivní první dojem. Dobře navržené rozhraní snižuje frustraci a míru odchodů (bounce rate). Frontend zároveň ovlivňuje rychlost načítání a mobilní optimalizaci, což má dopad i na SEO. Ve moderních projektech je frontend jedním z klíčových pilířů uživatelského zážitku."
    },
    SK: {
      term: "Frontend",
      shortDefinition: "Vývoj používateľského rozhrania",
      fullDefinition:
        "Frontend je časť webstránky alebo aplikácie, ktorú priamo vidí a používa návštevník, a preto predstavuje vizuálnu a interaktívnu vrstvu projektu. Definuje, ako vyzerajú texty, obrázky, tlačidlá, formuláre, navigácia či iné prvky na stránke. Je postavený najmä na technológiách HTML, CSS a JavaScript, ktoré určujú štruktúru, vzhľad a správanie webu. Frontend zabezpečuje, aby bol obsah prehľadne usporiadaný, ľahko čitateľný a dostupný na rôznych zariadeniach, vrátane mobilov a tabletov. V praxi ide o prvú vrstvu používateľského zážitku, ktorá dokáže ovplyvniť, či sa návštevník rozhodne pokračovať v prehliadaní webu alebo nie.",
      examples: [
        "Menu, ktoré sa na mobilnom zariadení automaticky zmení na hamburger ikonu.",
        "Slider s obrázkami na hlavnej stránke, ktorý reaguje na dotykové ovládanie.",
        "Validácia formulára, ktorá upozorní používateľa na chýbajúce alebo nesprávne údaje.",
        "Moderná animácia prvkov pri scrollovaní stránky.",
        "Farebné odlíšenie tlačidiel podľa typu akcie (napr. primárna vs. sekundárna CTA)."
      ],
      whyItMatters:
        "Kvalitný frontend zohráva kľúčovú úlohu v tom, ako rýchlo a intuitívne vie návštevník vykonať požadovanú akciu, či už ide o nákup alebo vyplnenie kontaktného formulára. Profesionálne spracovaný frontend zvyšuje dôveryhodnosť značky a vytvára pozitívny prvý dojem. Vďaka správne navrhnutému rozhraniu sa používateľ dokáže bez frustrácie orientovať, čo výrazne znižuje mieru odchodov zo stránky (bounce rate). Frontend zároveň priamo ovplyvňuje rýchlosť načítania webu a jeho optimalizáciu pre mobilné zariadenia, čo má dopad aj na SEO. Pri moderných webových projektoch je preto frontend jedným z najdôležitejších pilierov celkového používateľského zážitku."
    }
  }
},

backend: {
  slugs: { EN: "backend", CZ: "backend", SK: "backend" },
  category: "Development",
  relatedTerms: ["Frontend", "Fullstack Development", "Database", "API", "REST API", "PHP", "Deployment", "Debugging"],
  resources: [
    { title: "MDN — Server-side programming", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side" },
    { title: "web.dev — Server-side basics", url: "https://web.dev/learn/server-side/" },
    { title: "OWASP Top 10 (security)", url: "https://owasp.org/www-project-top-ten/" }
  ],
  content: {
    EN: {
      term: "Backend",
      shortDefinition: "Server-side logic and data processing",
      fullDefinition:
        "Backend is the part of a website or application that is not visible to users, but runs all logic operations and data processing in the background. It works with servers, databases, and services that make the website dynamic and reliable. Backend includes authentication, order processing, data storage, integrations with external services, and automated tasks. It is commonly built with technologies such as PHP, Python, Node.js, or Java depending on the project. You can think of backend as the “brain” of the system—deciding what happens with data after user interactions.",
      examples: [
        "An online store saves an order to a database and sends a confirmation email.",
        "Login verifies a password on the server and creates an active session.",
        "A booking system calculates available times based on user input.",
        "A website automatically sends emails after a contact form submission.",
        "Backend processes payments via a gateway and updates order status."
      ],
      whyItMatters:
        "Without a backend, a website would behave like a static image—unable to store data or interact with systems. Backend ensures data security, user management, and communication between system parts—essential for modern web services. It enables actions like creating an account, logging in, saving orders, or calculating shipping costs. A stable, well-designed backend strongly impacts performance, scalability, and security, and is critical for e-commerce and business portals."
    },
    CZ: {
      term: "Backend",
      shortDefinition: "Serverová logika a zpracování dat",
      fullDefinition:
        "Backend je část webu nebo aplikace, která není pro uživatele viditelná, ale zajišťuje veškerou logiku a zpracování dat na pozadí. Pracuje se serverem, databází a službami, díky kterým web funguje dynamicky a spolehlivě. Patří sem autentizace uživatelů, zpracování objednávek, ukládání informací, propojení s externími službami i automatizované úkony. Používají se technologie jako PHP, Python, Node.js nebo Java podle typu projektu. Backend lze chápat jako „mozek“ webu, který rozhoduje, co se stane s daty po interakci uživatele.",
      examples: [
        "E-shop uloží objednávku do databáze a odešle zákazníkovi potvrzení.",
        "Přihlášení ověří heslo na serveru a vytvoří aktivní relaci.",
        "Rezervační systém vypočítá dostupné termíny podle zadání.",
        "Web automaticky odešle e-mail po odeslání kontaktního formuláře.",
        "Backend zpracuje platbu a aktualizuje stav objednávky."
      ],
      whyItMatters:
        "Bez backendu by web fungoval jen jako statická stránka bez práce s daty a bez reálných procesů. Backend zajišťuje bezpečnost dat, správu uživatelů a komunikaci mezi částmi systému. Díky němu web umí vytvořit účet, přihlásit uživatele, uložit objednávku nebo vypočítat dopravu. Kvalitní backend zásadně ovlivňuje výkon, škálovatelnost a bezpečnost—u e-shopů a firemních portálů je kritickou částí infrastruktury."
    },
    SK: {
      term: "Backend",
      shortDefinition: "Serverová logika a spracovanie dát",
      fullDefinition:
        "Backend je časť webu alebo aplikácie, ktorá nie je viditeľná pre používateľa, no zabezpečuje všetky logické operácie a spracovanie dát na pozadí. Pracuje so serverom, databázou a aplikáciami, ktoré umožňujú webovej stránke fungovať dynamicky a spoľahlivo. Do backendu patria procesy ako autentifikácia používateľov, spracovanie objednávok, ukladanie informácií, prepojenia s externými službami či automatizované úkony. Programuje sa v jazykoch ako PHP, Python, Node.js či Java, v závislosti od typu projektu. Backend možno považovať za „mozog“ webu, ktorý rozhoduje o tom, ako sa budú dáta správať a čo sa stane po interakcii používateľa.",
      examples: [
        "E-shop uloží objednávku do databázy a odošle zákazníkovi potvrdenie.",
        "Prihlásenie používateľa overí heslo cez backend a vytvorí aktívnu reláciu.",
        "Rezervačný systém vypočíta dostupné termíny podľa zadania používateľa.",
        "Web automaticky odosiela e-maily po vyplnení kontaktného formulára.",
        "Backend spracuje platbu cez platobnú bránu a aktualizuje stav objednávky."
      ],
      whyItMatters:
        "Bez backendu by webová stránka fungovala len ako statický obrázok, bez možnosti spracovania údajov či interakcie so systémami. Backend zabezpečuje bezpečnosť dát, správu používateľov a komunikáciu medzi rôznymi časťami systému, čo je nevyhnutné pre každú modernú webovú službu. Práve vďaka backendu môže web vykonávať akcie, ako je vytvoriť účet, prihlásiť používateľa, uložiť objednávku alebo vypočítať cenu dopravy. Stabilný a kvalitne navrhnutý backend výrazne ovplyvňuje výkonnosť webu, jeho škálovateľnosť a bezpečnosť. V prípade e-shopov či firemných portálov tvorí backend absolútne kritickú časť infraštruktúry."
    }
  }
},

fullstack: {
  slugs: { EN: "fullstack-development", CZ: "fullstack-vyvoj", SK: "fullstack-vyvoj" },
  category: "Development",
  relatedTerms: ["Frontend", "Backend", "API", "Database", "Framework", "Deployment", "Debugging"],
  resources: [
    { title: "roadmap.sh — Full Stack", url: "https://roadmap.sh/full-stack" },
    { title: "MDN — Learn web development", url: "https://developer.mozilla.org/en-US/docs/Learn" }
  ],
  content: {
    EN: {
      term: "Fullstack Development",
      shortDefinition: "Combined frontend and backend development",
      fullDefinition:
        "Fullstack development is an approach where a developer works on both frontend (the visible part of the web) and backend (server logic and data). A fullstack developer can design the user interface, implement its behavior, and build the system that processes data in the background. They often combine multiple technologies such as HTML, CSS, JavaScript, PHP, SQL databases, and various frameworks. Because they understand multiple layers, they can solve problems end-to-end and build a functional whole—especially where several layers must be connected.",
      examples: [
        "A developer builds a complete e-shop including design, cart logic, and order processing.",
        "A startup relies on one fullstack developer to create the first working version of an app.",
        "A developer builds a REST API and consumes it in their own frontend.",
        "A fullstack developer edits a WordPress theme design and adds new backend functionality.",
        "A fullstack developer quickly finds whether an issue is in frontend or backend."
      ],
      whyItMatters:
        "A fullstack developer can cover areas that would otherwise require at least two specialists, which speeds up delivery and reduces costs. It enables flexibility because one person understands the entire pipeline and can react quickly to changes. In small teams, a fullstack developer can take responsibility for the whole system, improving consistency and reducing communication errors. It also supports fast prototyping and efficient iteration."
    },
    CZ: {
      term: "Fullstack vývoj",
      shortDefinition: "Kombinovaný frontendový i backendový vývoj",
      fullDefinition:
        "Fullstack vývoj je přístup, kdy jeden vývojář ovládá jak frontend (viditelnou část webu), tak backend (serverovou logiku a práci s daty). Zvládne navrhnout UI, naprogramovat chování a současně vytvořit systém, který zpracovává data na pozadí. Fullstack vývojáři kombinují více technologií, například HTML, CSS, JavaScript, PHP, SQL databáze a frameworky. Díky širokým znalostem dokážou řešit problémy komplexně, vidět souvislosti mezi vrstvami a budovat funkční celek.",
      examples: [
        "Vývojář vytvoří kompletní e-shop včetně designu i logiky košíku a objednávek.",
        "Startup využije jednoho fullstack developera na první funkční verzi aplikace.",
        "Programátor naprogramuje REST API a následně ho použije ve vlastním frontendu.",
        "Fullstack vývojář upraví design WordPress šablony a doplní funkce do backendu.",
        "Interní fullstack developer rychle určí, zda je problém ve frontendu nebo backendu."
      ],
      whyItMatters:
        "Fullstack vývoj pokrývá oblasti, na které by jinak byli potřeba minimálně dva specialisté, což zrychluje vývoj a snižuje náklady. Jeden člověk rozumí celému procesu, rychle reaguje na změny a udržuje konzistenci. V menších týmech je to velká výhoda, protože se snižuje riziko komunikačních chyb a zrychluje prototypování i iterace."
    },
    SK: {
      term: "Fullstack vývoj",
      shortDefinition: "Kombinovaný frontendový aj backendový vývoj",
      fullDefinition:
        "Fullstack vývoj predstavuje prístup, pri ktorom jeden vývojár ovláda aj frontend (viditeľnú časť webu), aj backend (serverovú logiku a prácu s dátami). Takýto človek teda zvládne navrhnúť vzhľad používateľského rozhrania, naprogramovať jeho správanie a zároveň vytvoriť systém, ktorý spracúva údaje na pozadí. Fullstack vývojári pracujú s viacerými technológiami naraz – môžu kombinovať napríklad HTML, CSS, JavaScript, PHP, SQL databázy a rôzne frameworky. Vďaka širokým znalostiam dokážu riešiť problémy komplexne, vidieť súvislosti medzi rôznymi časťami systému a tvoriť funkčný celok. Tento typ vývoja je obzvlášť dôležitý pri projektoch, kde sa vyžaduje prepojenie viacerých vrstiev aplikácie.",
      examples: [
        "Vývojár vytvorí kompletný e-shop vrátane jeho dizajnu aj logiky košíka a objednávok.",
        "Startup využije jedného fullstack developera na vytvorenie prvej funkčnej verzie svojej aplikácie.",
        "Programátor naprogramuje REST API, ktoré následne použije vo vlastnom frontende.",
        "Fullstack vývojár upraví dizajn WordPress šablóny a zároveň doplní nové funkcie do backendu.",
        "Interný fullstack developer dokáže rýchlo analyzovať, kde je problém – či v kóde frontendu alebo backendu."
      ],
      whyItMatters:
        "Fullstack vývojár dokáže pokryť oblasti, na ktoré by inak bolo potrebné najmenej dvoch špecialistov, čo výrazne zrýchľuje vývoj a znižuje náklady. Umožňuje flexibilnejší postup, pretože jeden človek rozumie celému procesu od návrhu až po implementáciu a vie rýchlo reagovať na zmeny v projekte. Pri menších tímoch je to obrovská výhoda – fullstack vývojár dokáže prebrať kompletnú zodpovednosť za celý systém. Vývoj je vďaka tomu ucelenejší, konzistentnejší a znižuje sa riziko komunikačných chýb medzi frontendovými a backendovými programátormi. Okrem toho fullstack prístup podporuje rýchlu prototypizáciu a efektívne iterácie."
    }
  }
},

cms: {
  slugs: { EN: "cms", CZ: "cms", SK: "cms" },
  category: "Development",
  relatedTerms: ["WordPress", "Plugin", "Hosting", "Database", "HTML", "SEO"],
  serviceLinks: [
    { serviceKey: "buildingWebsite", label: { EN: "Website Development", CZ: "Tvorba webových stránek", SK: "Tvorba webových stránok" } },
    { serviceKey: "ecommerceWebsite", label: { EN: "E-commerce Development", CZ: "Tvorba e-shopů", SK: "Tvorba e-shopov" } },
  ],
  resources: [
    { title: "Cloudflare — What is a CMS?", url: "https://www.cloudflare.com/learning/content-management/what-is-a-cms/" },
    { title: "WordPress — About", url: "https://wordpress.org/about/" }
  ],
  content: {
    EN: {
      term: "CMS",
      shortDefinition: "Content management system",
      fullDefinition:
        "A CMS is a software system that lets you manage website content without programming. It allows admins to easily add texts, images, products, blog posts, or update pages through a clear interface. The best-known CMS is WordPress, used by over 40% of the web. A CMS saves time and makes content management accessible even to non-technical users. It is the foundation of most modern websites—especially where content changes often.",
      examples: [
        "An editor publishes a new blog post through a visual editor.",
        "A store owner updates product prices without touching code.",
        "A marketing team edits campaign texts inside the admin panel.",
        "A company creates new pages using a drag & drop builder.",
        "A developer installs a plugin to extend website functionality."
      ],
      whyItMatters:
        "A CMS enables fast, efficient content updates without a developer, reducing costs and speeding up work. It helps businesses react quickly—changing offers, publishing news, or adding pages. Plugins and templates increase flexibility. It also supports SEO by allowing edits of content, meta tags, and site structure. Overall, a CMS simplifies building and maintaining web projects."
    },
    CZ: {
      term: "CMS",
      shortDefinition: "Systém pro správu obsahu",
      fullDefinition:
        "CMS je softwarový systém, který umožňuje spravovat obsah webu bez programování. Admin může jednoduše přidávat texty, obrázky, produkty, články nebo upravovat stránky přes přehledné rozhraní. Nejznámější CMS je WordPress, který používá více než 40 % webu. CMS šetří čas a zpřístupňuje správu webu i lidem bez technických znalostí. Je základem většiny moderních webů, kde se obsah často mění.",
      examples: [
        "Redaktor přidá nový článek ve vizuálním editoru.",
        "Majitel e-shopu změní ceny produktů bez zásahu do kódu.",
        "Marketing upraví texty kampaní přímo v administraci.",
        "Firma vytvoří nové podstránky pomocí drag & drop builderu.",
        "Webdeveloper nainstaluje plugin pro rozšíření funkcí."
      ],
      whyItMatters:
        "CMS umožňuje rychlé úpravy obsahu bez programátora, což snižuje náklady a urychluje aktualizace webu. Firmy mohou pružně reagovat na situaci a měnit obsah bez komplikací. Pluginy a šablony zvyšují flexibilitu. CMS podporuje i SEO díky správě obsahu, meta tagů a struktury webu. Celkově zjednodušuje tvorbu i správu webových projektů."
    },
    SK: {
      term: "CMS",
      shortDefinition: "Systém na správu obsahu",
      fullDefinition:
        "CMS je softvérový systém, ktorý umožňuje spravovať obsah webovej stránky bez potreby programovania. Umožňuje adminom jednoducho pridávať texty, obrázky, produkty, blogové články alebo aktualizovať existujúce stránky cez prehľadné rozhranie. Najznámejším CMS na svete je WordPress, ktorý využíva viac ako 40 % celého internetu. CMS šetrí čas a robí správu webu prístupnú aj pre bežného používateľa bez technických znalostí. Je to základ väčšiny moderných webových riešení, najmä tam, kde sa obsah často mení alebo dopĺňa.",
      examples: [
        "Redaktor pridáva nový blogový článok cez vizuálny editor.",
        "Majiteľ e-shopu mení ceny produktov bez kompromitovania štruktúry webu.",
        "Marketingový tím upravuje texty kampaní priamo v administrácii.",
        "Firma vytvára nové podstránky pomocou drag & drop buildera.",
        "Webdeveloper inštaluje plugin na rozšírenie funkcií webu."
      ],
      whyItMatters:
        "CMS umožňuje rýchlu a efektívnu správu obsahu bez zásahu programátora, čo znižuje náklady a zrýchľuje proces aktualizácie webu. Umožňuje firmám reagovať na aktuálne dianie, meniť ponuky, pridávať články či správy bez technických komplikácií. Ponúka množstvo pluginov a šablón, ktoré rozširujú funkcie webu a zvyšujú jeho flexibilitu. CMS je dôležitý aj pre SEO, pretože umožňuje optimalizovať obsah, meta tagy a štruktúru webu. Celkovo výrazne zrýchľuje a zjednodušuje tvorbu a správu webových projektov."
    }
  }
},

plugin: {
  slugs: { EN: "plugin", CZ: "plugin", SK: "plugin" },
  category: "Development",
  relatedTerms: ["CMS", "WordPress", "PHP", "Child Theme", "Deployment", "Debugging"],
  resources: [
    { title: "WordPress — Plugins", url: "https://wordpress.org/plugins/" },
    { title: "WordPress Developer Resources", url: "https://developer.wordpress.org/" }
  ],
  content: {
    EN: {
      term: "Plugin",
      shortDefinition: "Website functionality extension",
      fullDefinition:
        "A plugin is a software package that adds new features or extends existing functionality of a website. It’s most common in WordPress, where thousands of plugins exist—from forms and SEO to e-commerce solutions. Plugins let you add capabilities without building everything from scratch. They are usually easy to install and configure. Plugins are a key part of a modular approach to building websites.",
      examples: [
        "Installing a booking system via the Bookly plugin.",
        "Using Yoast SEO to optimize content.",
        "Adding a contact form with Contact Form 7.",
        "Extending an online store with WooCommerce.",
        "Integrating analytics via a plugin."
      ],
      whyItMatters:
        "Plugins significantly speed up development and reduce costs by offering ready-made solutions for common needs. They allow flexible feature additions without changing core code, improving stability and safety. Thanks to plugins, WordPress can serve small and large projects. They also simplify updates. For businesses, plugins mean faster delivery of functionality that would otherwise take many hours of custom development."
    },
    CZ: {
      term: "Plugin",
      shortDefinition: "Rozšíření funkcí webu",
      fullDefinition:
        "Plugin je malý softwarový balíček, který přidává nové funkce nebo rozšiřuje stávající funkcionalitu webu. Nejčastěji se používá ve WordPressu, kde existují tisíce pluginů pro různé účely—od formulářů přes SEO až po e-shopová řešení. Pluginy umožňují rozšířit možnosti webu bez nutnosti programovat vše od základů. Obvykle se snadno instalují a konfigurují. Jsou klíčovým prvkem modulárního přístupu k tvorbě webů.",
      examples: [
        "Instalace rezervačního systému přes plugin Bookly.",
        "Použití Yoast SEO pro optimalizaci obsahu.",
        "Přidání kontaktního formuláře přes Contact Form 7.",
        "Rozšíření e-shopu pomocí WooCommerce.",
        "Integrace analytických nástrojů přes plugin."
      ],
      whyItMatters:
        "Pluginy výrazně urychlují vývoj a snižují náklady, protože poskytují hotová řešení pro běžné potřeby. Umožňují přidávat funkce bez zásahu do hlavního kódu, což zvyšuje stabilitu a bezpečnost. Díky pluginům je WordPress univerzální. Umožňují také jednodušší aktualizace. Firmám přinášejí rychlou implementaci funkcí, které by jinak stály desítky až stovky hodin vývoje."
    },
    SK: {
      term: "Plugin",
      shortDefinition: "Rozšírenie funkcií webu",
      fullDefinition:
        "Plugin je malý softvérový balíček, ktorý pridáva novej alebo rozširuje existujúcu funkcionalitu webovej stránky. Najčastejšie sa používa vo WordPresse, kde existujú tisíce pluginov pre rôzne účely – od formulárov cez SEO až po e-shopové riešenia. Pluginy umožňujú rozšíriť možnosti webu bez nutnosti programovať všetko od základov. Umožňujú jednoduchú inštaláciu a konfiguráciu podľa potrieb používateľa. Sú kľúčovým prvkom modulárneho prístupu k tvorbe webov.",
      examples: [
        "Inštalácia rezervačného systému cez plugin Bookly.",
        "Použitie Yoast SEO na optimalizáciu obsahu.",
        "Pridanie kontaktného formulára cez Contact Form 7.",
        "Rozšírenie e-shopu pomocou WooCommerce.",
        "Integrácia analytických nástrojov cez plugin."
      ],
      whyItMatters:
        "Pluginy výrazne zrýchľujú vývoj webu a znižujú náklady, pretože poskytujú hotové riešenia pre najčastejšie potreby. Umožňujú flexibilné pridávanie funkcií bez zásahu do hlavného kódu, čo zvyšuje stabilitu a bezpečnosť. Vďaka pluginom je WordPress univerzálny nástroj pre malé aj veľké projekty. Umožňujú aj jednoduché aktualizácie bez komplikovaných zásahov do systému. Pre firmy znamenajú rýchlu implementáciu funkcií, ktoré by inak stáli stovky hodín vývoja."
    }
  }
},

api: {
  slugs: { EN: "api", CZ: "api", SK: "api" },
  category: "Development",
  relatedTerms: ["REST API", "Endpoint", "Backend", "JSON", "Integration", "Authentication"],
  resources: [
    { title: "MDN — Introduction to web APIs", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" },
    { title: "RESTful API Tutorial", url: "https://restfulapi.net/" }
  ],
  content: {
    EN: {
      term: "API",
      shortDefinition: "Application Programming Interface",
      fullDefinition:
        "An API is an interface that allows different applications to communicate and exchange data. It works as a mediator—one app requests data or an action, and the API processes it and returns a result. APIs enable automation, integrations with external services, and complex system connections. They are the foundation of modern web, mobile, and cloud applications. Without APIs, websites could not connect to payment gateways, maps, social networks, or external databases.",
      examples: [
        "A website loads weather data from an external service via an API.",
        "A mobile app displays WordPress content through REST API.",
        "A payment gateway communicates with an e-shop during checkout.",
        "A CRM automatically saves contacts from a web form via API.",
        "Inventory systems sync with an e-shop using an API integration."
      ],
      whyItMatters:
        "APIs connect technologies without building everything from scratch. They help companies build complex solutions, automate processes, and connect systems that would otherwise be isolated. APIs reduce development costs, speed up implementation, and support scalability. They are key in ecosystems where data must flow between platforms and are essential for modern integrations and mobile apps."
    },
    CZ: {
      term: "API",
      shortDefinition: "Programové rozhraní pro komunikaci systémů",
      fullDefinition:
        "API je rozhraní, které umožňuje různým aplikacím komunikovat a vyměňovat si data. Funguje jako prostředník—jedna aplikace požádá o data nebo akci, API požadavek zpracuje a vrátí výsledek. API umožňuje automatizaci, integraci externích služeb a vytváření komplexních propojení. Je základem moderních webových aplikací, mobilních aplikací i cloudových řešení. Bez API by weby neuměly pracovat s externími databázemi, mapami, platebními branami či sociálními sítěmi.",
      examples: [
        "Web načítá údaje o počasí z externí služby přes API.",
        "Mobilní aplikace zobrazuje obsah WordPressu přes REST API.",
        "Platební brána komunikuje s e-shopem při nákupu.",
        "CRM automaticky ukládá kontakty z webového formuláře.",
        "Propojení skladu s e-shopem přes API."
      ],
      whyItMatters:
        "API propojuje technologie bez toho, aby se vše programovalo od nuly. Firmám umožňuje budovat komplexní řešení, automatizovat procesy a spojovat systémy. Zrychluje implementaci, snižuje náklady a podporuje škálování. Je klíčové tam, kde data musí proudit mezi platformami, a výrazně rozšiřuje možnosti webu i aplikací."
    },
    SK: {
      term: "API",
      shortDefinition: "Programové rozhranie pre komunikáciu systémov",
      fullDefinition:
        "API je rozhranie, ktoré umožňuje rôznym aplikáciám komunikovať medzi sebou a vymieňať si údaje. Funguje ako sprostredkovateľ – jedna aplikácia požiada o údaje alebo akciu, API ju spracuje a doručí výsledok. API umožňuje automatizáciu, integráciu externých služieb a vytváranie komplexných prepojení. Je základom moderných webových aplikácií, mobilných aplikácií aj cloudových riešení. Bez API by weby nemohli pracovať s externými databázami, mapami, platobnými bránami či sociálnymi sieťami.",
      examples: [
        "Web načíta údaje o počasí z externej služby cez API.",
        "Mobilná aplikácia zobrazuje obsah WordPressu cez REST API.",
        "Platobná brána komunikuje s e-shopom pri každom nákupe.",
        "CRM systém automaticky ukladá kontakty z webového formulára.",
        "Prepojenie skladového systému s e-shopom."
      ],
      whyItMatters:
        "API umožňuje prepojenie rôznych technológií bez toho, aby musel vývojár všetko programovať od nuly. Vďaka API môžu firmy budovať komplexné riešenia, automatizovať procesy a prepájať systémy, ktoré by inak fungovali izolovane. API znižuje náklady na vývoj, zvyšuje rýchlosť implementácie a umožňuje škálovanie systémov. Je kľúčové pre moderný ekosystém služieb, kde dáta musia prúdiť medzi rôznymi platformami. API zároveň urýchľuje vývoj mobilných aplikácií a rozširuje možnosti webu."
    }
  }
},

database: {
  slugs: { EN: "database", CZ: "databaze", SK: "databaza" },
  category: "Development",
  relatedTerms: ["Backend", "SQL", "MySQL", "MariaDB", "WordPress", "Data Storage"],
  resources: [
    { title: "MySQL — Documentation", url: "https://dev.mysql.com/doc/" },
    { title: "MariaDB — Documentation", url: "https://mariadb.com/kb/en/documentation/" },
    { title: "WordPress — Database Description", url: "https://developer.wordpress.org/apis/wp-config-php/" }
  ],
  content: {
    EN: {
      term: "Database",
      shortDefinition: "Organized data storage",
      fullDefinition:
        "A database is a system used to store, process, and search data in an organized way. It contains records needed for a website to function—users, articles, products, orders, and settings. Databases are designed to be fast, stable, and able to handle large amounts of data. WordPress typically uses MySQL or MariaDB. A database is essential for any dynamic website or application.",
      examples: [
        "An e-shop stores products and orders in database tables.",
        "User login checks data stored in the database.",
        "Blog posts are loaded from the WordPress database.",
        "Booking systems store available times and reservations.",
        "A CRM works with customer data stored in a database."
      ],
      whyItMatters:
        "A database allows websites to handle information efficiently and safely. It enables fast searching and updates—critical for e-shops and high-traffic systems. A well-designed database improves speed, reliability, and readiness for growth. Databases also support backups and help protect data from loss. Without a stable database, modern websites would not be truly dynamic."
    },
    CZ: {
      term: "Databáze",
      shortDefinition: "Úložiště dat",
      fullDefinition:
        "Databáze je systém pro organizované ukládání, zpracování a vyhledávání dat. Obsahuje záznamy potřebné pro fungování webu—uživatele, články, produkty, objednávky i nastavení. Databáze jsou navrženy tak, aby byly rychlé, stabilní a zvládaly velké objemy dat. WordPress používá MySQL nebo MariaDB. Databáze je nezbytná součást každého dynamického webu nebo aplikace.",
      examples: [
        "E-shop ukládá produkty a objednávky do databázových tabulek.",
        "Přihlášení uživatele ověřuje údaje v databázi.",
        "Články blogu se načítají z databáze WordPressu.",
        "Rezervační systém ukládá dostupné termíny.",
        "CRM pracuje se zákaznickými daty uloženými v databázi."
      ],
      whyItMatters:
        "Databáze umožňuje webu data uchovávat a efektivně s nimi pracovat. Zajišťuje rychlé vyhledávání a aktualizace dat, což je klíčové pro e-shopy i weby s vysokou návštěvností. Dobře navržená databáze zvyšuje rychlost, spolehlivost a připravenost na růst. Podporuje zálohování a chrání data před ztrátou. Bez databáze by moderní web neměl dynamiku."
    },
    SK: {
      term: "Databáza",
      shortDefinition: "Úložisko dát",
      fullDefinition:
        "Databáza je systém, ktorý slúži na organizované ukladanie, spracovanie a vyhľadávanie dát. Obsahuje záznamy potrebné pre fungovanie webu – od používateľov cez články až po objednávky alebo nastavenia. Databázy sú navrhnuté tak, aby boli rýchle, stabilné a schopné spracovať veľké množstvo dát. WordPress využíva databázy MySQL alebo MariaDB. Databáza je nevyhnutná súčasť každého dynamického webového riešenia.",
      examples: [
        "E-shop ukladá produkty a objednávky do databázových tabuliek.",
        "Prihlásenie používateľa overuje údaje uložené v databáze.",
        "Blogové články sa načítavajú z databázy WordPressu.",
        "Rezervačné systémy ukladajú dostupné termíny.",
        "CRM pracuje so zákazníckymi dátami uloženými v databáze."
      ],
      whyItMatters:
        "Databáza umožňuje webom pracovať s informáciami efektívne a bezpečne. Umožňuje rýchle vyhľadávanie a aktualizáciu dát, čo je kľúčové najmä pre e-shopy a systémy s vysokou návštevnosťou. Vďaka dobre navrhnutej databáze je web rýchly, spoľahlivý a pripravený na rast. Databázové systémy chránia dáta pred stratou a ponúkajú možnosti zálohovania. Bez stabilnej databázy by moderné weby nemali žiadnu dynamiku."
    }
  }
},

hosting: {
  slugs: { EN: "hosting", CZ: "hosting", SK: "hosting" },
  category: "Development",
  relatedTerms: ["Server", "Deployment", "SSL", "Domain", "Database", "Performance"],
  resources: [
    { title: "Cloudflare — What is web hosting?", url: "https://www.cloudflare.com/learning/performance/what-is-web-hosting/" },
    { title: "web.dev — Performance", url: "https://web.dev/learn/performance/" }
  ],
  content: {
    EN: {
      term: "Hosting",
      shortDefinition: "Server space for your website",
      fullDefinition:
        "Hosting is a service that provides space on a server where a website is stored and made accessible to visitors. It includes website files, databases, emails, and configurations needed to run the site. Hosting providers deliver infrastructure that affects speed, stability, and availability. There are multiple types—shared hosting, VPS, cloud hosting, or dedicated servers. The choice of hosting directly influences overall website performance.",
      examples: [
        "A website is migrated from slow hosting to a faster cloud server.",
        "Hosting provides an SSL certificate to secure the site.",
        "A stronger server handles traffic spikes during big campaigns.",
        "Automatic daily backups protect the website from data loss.",
        "Hosting support helps solve server-side technical issues."
      ],
      whyItMatters:
        "Hosting quality directly impacts loading speed, security, and uptime. Poor hosting can cause outages, slow loading, or failures during high traffic. Hosting also affects SEO because search engines consider site performance. Good providers offer security, backups, and support. Choosing the right hosting is a key step for any professional website."
    },
    CZ: {
      term: "Hosting",
      shortDefinition: "Serverový prostor pro web",
      fullDefinition:
        "Hosting je služba, která poskytuje prostor na serveru, kde je web uložen a odkud je dostupný návštěvníkům. Zahrnuje soubory webu, databáze, e-maily i konfigurace potřebné pro chod stránky. Hostingové služby poskytují infrastrukturu, která ovlivňuje rychlost, stabilitu a dostupnost. Existují různé typy—sdílený hosting, VPS, cloud hosting nebo dedikovaný server. Výběr hostingu má přímý vliv na výkon webu.",
      examples: [
        "Web se přesune z pomalého hostingu na rychlejší cloud server.",
        "Hosting poskytne SSL certifikát pro zabezpečení webu.",
        "Výkonnější server zvládne nápor během velké kampaně.",
        "Automatické denní zálohy chrání web před ztrátou dat.",
        "Podpora hostingu řeší technické problémy se serverem."
      ],
      whyItMatters:
        "Kvalita hostingu ovlivňuje rychlost načítání, bezpečnost a dostupnost webu. Nekvalitní hosting může způsobit výpadky, pomalé načítání nebo problémy při vyšší návštěvnosti. Hosting má dopad i na SEO. Kvalitní poskytovatel nabízí bezpečnostní funkce, zálohy a podporu. Správná volba hostingu je zásadní pro profesionální web."
    },
    SK: {
      term: "Hosting",
      shortDefinition: "Serverový priestor pre web",
      fullDefinition:
        "Hosting je služba, ktorá poskytuje priestor na serveri, kde je webová stránka uložená a odkiaľ je dostupná návštevníkom. Obsahuje všetky súbory webu, databázy, e-maily a konfigurácie potrebné pre chod webu. Hostingové služby poskytujú technickú infraštruktúru, ktorá zabezpečuje rýchlosť, stabilitu a dostupnosť stránky. Existuje viacero typov hostingu – zdieľaný, VPS, cloud hosting či dedikovaný server. Výber hostingu ovplyvňuje výkon celého webu.",
      examples: [
        "Web sa presunie z pomalého hostingu na rýchlejší cloudový server.",
        "Hosting poskytne SSL certifikát pre zabezpečenie webu.",
        "Výkonný server zvládne nápor počas veľkej kampane.",
        "Automatické denné zálohy chránia web pred stratou dát.",
        "Podpora hostingu rieši technické problémy so serverom."
      ],
      whyItMatters:
        "Kvalitný hosting zabezpečí rýchle načítanie webu, vysokú dostupnosť a bezpečnosť. Pri nekvalitnom hostingu môžu vzniknúť výpadky, pomalé načítavanie alebo problémy pri vyššej návštevnosti. Hosting ovplyvňuje SEO, pretože Google hodnotí rýchlosť stránok. Kvalitný poskytovateľ ponúka aj bezpečnostné funkcie, zálohy a podporu. Výber správneho hostingu je preto zásadným krokom pri tvorbe profesionálneho webu."
    }
  }
},

openSource: {
  slugs: { EN: "open-source", CZ: "open-source", SK: "open-source" },
  category: "Development",
  relatedTerms: ["WordPress", "Git", "Plugin", "Framework", "Community"],
  resources: [
    { title: "Open Source Initiative — Definition", url: "https://opensource.org/osd" },
    { title: "GitHub — Open Source Guides", url: "https://opensource.guide/" }
  ],
  content: {
    EN: {
      term: "Open Source",
      shortDefinition: "Software with publicly available source code",
      fullDefinition:
        "Open Source means the source code of a software is publicly available, and anyone can view, modify, and distribute it. This approach allows developers worldwide to collaborate, fix issues faster, and build new features. Open source projects are typically maintained by communities. WordPress, Linux, and many widely used tools follow open-source principles, making them flexible and customizable compared to closed solutions.",
      examples: [
        "WordPress is built on an open-source license.",
        "WooCommerce is an open-source e-commerce solution.",
        "Bootstrap is an open-source frontend framework.",
        "Developers build custom plugins based on open-source code.",
        "A theme is customized to a client’s needs thanks to open code."
      ],
      whyItMatters:
        "Open Source gives freedom to customize software, increasing flexibility. Community support means frequent updates and faster security fixes. It reduces licensing costs and avoids vendor lock-in. Companies can grow solutions internally or with external teams. Open source technologies are a core part of modern web development."
    },
    CZ: {
      term: "Open Source",
      shortDefinition: "Software s otevřeným zdrojovým kódem",
      fullDefinition:
        "Open Source je typ softwaru, jehož zdrojový kód je veřejně dostupný—kdokoli si ho může prohlédnout, upravit nebo dále šířit. Díky tomu mohou vývojáři z celého světa spolupracovat, rychleji opravovat chyby a přidávat funkce. Open-source projekty obvykle rozvíjí komunita. WordPress, Linux a mnoho dalších nástrojů funguje na open-source principech a bývá flexibilnější než uzavřená řešení.",
      examples: [
        "WordPress je postavený na open-source licenci.",
        "WooCommerce jako open-source e-commerce řešení.",
        "Bootstrap jako open-source framework pro frontend.",
        "Vývojáři vytvářejí vlastní pluginy vycházející z open-source kódu.",
        "Úprava šablony podle potřeb klienta díky otevřenému kódu."
      ],
      whyItMatters:
        "Open Source dává svobodu upravit software podle potřeb, zvyšuje flexibilitu a snižuje náklady na licence. Komunitní podpora znamená časté aktualizace a rychlejší opravy bezpečnostních chyb. Firmy nejsou závislé na jednom dodavateli a mohou systém dále rozvíjet. Open-source technologie dnes tvoří základ velké části webu."
    },
    SK: {
      term: "Open Source",
      shortDefinition: "Softvér s otvoreným zdrojovým kódom",
      fullDefinition:
        "Open Source je typ softvéru, ktorého zdrojový kód je voľne dostupný pre kohokoľvek, kto si ho chce pozrieť, upraviť alebo distribuovať. Tento prístup umožňuje vývojárom z celého sveta spolupracovať na vylepšovaní softvéru a rýchlo opravovať chyby či pridávať nové funkcie. Open Source projekty vznikajú vďaka komunite, ktorá ich priebežne udržiava a rozvíja. WordPress, Linux a mnoho ďalších veľkých projektov sú postavené práve na open-source princípoch. Takýto softvér býva často flexibilnejší a prispôsobiteľnejší ako uzavreté riešenia.",
      examples: [
        "WordPress, ktorý je postavený na open-source licencii.",
        "WooCommerce ako open-source e-commerce riešenie.",
        "Bootstrap ako open-source framework pre frontend.",
        "Vývojári vytvárajú vlastné pluginy na mieru, ktoré vychádzajú z open-source kódu.",
        "Úprava WordPress šablóny podľa potrieb klienta."
      ],
      whyItMatters:
        "Open Source dáva firmám aj vývojárom slobodu upravovať softvér podľa vlastných potrieb, čo zvyšuje flexibilitu riešení. Komunitná podpora znamená, že softvér je neustále aktualizovaný, bezpečnostné chyby sa opravujú rýchlejšie a funkcie sa vyvíjajú dynamicky. Používanie open-source riešení znižuje náklady na licencie a zároveň umožňuje vyššiu kontrolu nad projektom. Firmy nie sú viazané jedným dodávateľom a môžu systém ďalej rozvíjať interne alebo s externými tímami. Open-source technológie sú dnes základom väčšiny moderných webov a aplikácií."
    }
  }
},

ux: {
  slugs: { EN: "ux", CZ: "ux", SK: "ux" },
  category: "Development",
  relatedTerms: ["UI", "Frontend", "Responsiveness", "Conversion", "Accessibility"],
  serviceLinks: [
    { serviceKey: "buildingWebsite", label: { EN: "Website Development", CZ: "Tvorba webových stránek", SK: "Tvorba webových stránok" } },
    { serviceKey: "graphicDesign", label: { EN: "Graphic Design", CZ: "Grafický design", SK: "Grafický dizajn" } },
  ],
  resources: [
    { title: "Nielsen Norman Group — UX", url: "https://www.nngroup.com/articles/definition-user-experience/" },
    { title: "web.dev — UX", url: "https://web.dev/learn/design/" }
  ],
  content: {
    EN: {
      term: "UX",
      shortDefinition: "User experience",
      fullDefinition:
        "UX describes how a user feels when using a website or application—simplicity, clarity, speed, and intuitiveness. UX is not only about visuals, but also structure, logic, accessibility, and overall comfort while completing tasks.",
      examples: [
        "Simple checkout forms.",
        "Clear navigation with logical structure.",
        "Fast loading on mobile.",
        "Step-by-step booking or purchase flows.",
        "Helpful and understandable error messages in forms."
      ],
      whyItMatters:
        "Good UX helps users quickly find what they need, complete tasks, and leave satisfied. Poor UX leads to high bounce rates, lower conversions, and frustration. UX has a direct impact on business results and is also considered in modern SEO and performance evaluation."
    },
    CZ: {
      term: "UX",
      shortDefinition: "Uživatelská zkušenost",
      fullDefinition:
        "UX popisuje celkový zážitek uživatele při používání webu nebo aplikace—jednoduchost, přehlednost, rychlost a intuitivnost. Neřeší jen vizuál, ale i strukturu, logiku, dostupnost a pohodlí při plnění úkolů.",
      examples: [
        "Jednoduché objednávkové formuláře.",
        "Přehledné menu s logickým uspořádáním.",
        "Rychlé načítání mobilní verze webu.",
        "Krokové rezervace nebo nákupní proces.",
        "Srozumitelná chybová hlášení ve formulářích."
      ],
      whyItMatters:
        "Dobrý UX znamená, že uživatel rychle najde to, co hledá, zvládne úkol a odchází spokojený. Špatný UX vede k odchodům, nízkým konverzím a frustraci. UX má přímý dopad na výsledky a je důležité i z pohledu moderního SEO."
    },
    SK: {
      term: "UX",
      shortDefinition: "Používateľská skúsenosť",
      fullDefinition:
        "UX opisuje celkový zážitok používateľa pri interakcii s webom, aplikáciou alebo digitálnym produktom. Zahŕňa pocity, komfort, jednoduchosť orientácie a celkovú spokojnosť s používaním. UX sa nezaoberá len dizajnom, ale aj logikou, rýchlosťou, dostupnosťou a zrozumiteľnosťou funkcionalít. Ide o multidisciplinárnu oblasť, ktorá kombinuje psychológiu, dizajn, analytiku aj technické znalosti. Cieľom UX je, aby používateľ dosiahol svoj cieľ rýchlo, jednoducho a bez frustrácie.",
      examples: [
        "Jednoduché a jasné menu, kde používateľ hneď nájde, čo hľadá.",
        "Prehľadný nákupný proces v e-shope.",
        "Rýchle načítanie webu na mobile.",
        "Logické rozloženie obsahu na stránke.",
        "Zrozumiteľné chybové hlášky pri formulároch."
      ],
      whyItMatters:
        "Dobrý UX môže výrazne zvýšiť konverzie, pretože používateľ sa jednoduchšie dostane tam, kam potrebuje. Znižuje mieru odchodov zo stránky, zlepšuje reputáciu značky a podporuje opakované návštevy. Pre firmy znamená kvalitný UX nižší počet podporných požiadaviek, pretože všetko je pre používateľa intuitívne. Google a ďalšie vyhľadávače hodnotia UX ako zásadné kritérium pri SEO, čo ovplyvňuje pozície vo vyhľadávaní. UX je preto strategickou súčasťou každého moderného digitálneho produktu."
    }
  }
},

ui: {
  slugs: { EN: "ui", CZ: "ui", SK: "ui" },
  category: "Development",
  relatedTerms: ["UX", "Frontend", "Design System", "Responsiveness", "Accessibility"],
  resources: [
    { title: "Interaction Design Foundation — UI Design", url: "https://www.interaction-design.org/literature/topics/ui-design" },
    { title: "web.dev — Design basics", url: "https://web.dev/learn/design/" }
  ],
  content: {
    EN: {
      term: "UI",
      shortDefinition: "User interface",
      fullDefinition:
        "UI is the visual part of a website or application—colors, fonts, buttons, layout, icons, and imagery. It is what users see and interact with. Good UI supports clarity and usability and works closely with UX.",
      examples: [
        "A clear CTA button (“Order now”) with strong visual emphasis.",
        "Consistent colors and typography across the whole site.",
        "A clean cart design in an e-shop.",
        "Well-spaced sections for readability.",
        "Icons that help users understand actions quickly."
      ],
      whyItMatters:
        "High-quality UI increases trust, professionalism, and supports better UX. It helps users navigate naturally and improves clarity of actions—often increasing conversions through better visual hierarchy."
    },
    CZ: {
      term: "UI",
      shortDefinition: "Uživatelské rozhraní",
      fullDefinition:
        "UI je vizuální stránka webu nebo aplikace—barvy, fonty, tlačítka, rozložení prvků, ikonky a obrázky. Je to design, který uživatel vidí a se kterým interaguje. UI úzce souvisí s UX.",
      examples: [
        "CTA tlačítko s jasnou výzvou k akci (např. „Objednat“).",
        "Designově konzistentní web se stejnými barvami a typografií.",
        "Přehledný košík v e-shopu.",
        "Vizuálně oddělené sekce pro lepší čitelnost.",
        "Ikony, které rychle vysvětlují funkce."
      ],
      whyItMatters:
        "Kvalitní UI zvyšuje důvěru a profesionalitu a zlepšuje UX. Pomáhá uživateli přirozeně se orientovat a rychleji provést akci."
    },
    SK: {
      term: "UI",
      shortDefinition: "Používateľské rozhranie",
      fullDefinition:
        "UI je vizuálna časť digitálneho produktu, teda to, čo používateľ vidí na obrazovke. Zahŕňa farby, typografiu, tlačidlá, ikonky, rozloženie, obrázky aj vizuálne efekty. Jeho úlohou je poskytnúť používateľovi prehľadné a estetické prostredie, v ktorom sa môže jednoducho orientovať. UI úzko spolupracuje s UX, pretože vizuálny dizajn musí podporovať funkčnosť a intuitívnosť. Moderné UI využíva minimalistický dizajn, konzistentnú vizuálnu identitu a responzívne prvky.",
      examples: [
        "CTA tlačidlo, ktoré je farebne odlíšené a viditeľné.",
        "Konzistentná vizuálna identita naprieč celým webom.",
        "Prehľadné formuláre s dostatkom miesta medzi prvkami.",
        "Ikony, ktoré používateľom pomáhajú rýchlo pochopiť funkcie.",
        "Moderný, čistý dizajn prispôsobený pre mobilné zariadenia."
      ],
      whyItMatters:
        "UI vytvára prvý dojem používateľa, ktorý výrazne ovplyvňuje jeho dôveru k značke. Profesionálny vizuálny dizajn zvyšuje prehľadnosť a pomáha používateľovi navigovať stránku bez premýšľania. Konzistentné UI zlepšuje použiteľnosť a podporuje pozitívny UX. Jasne navrhnuté tlačidlá a prvky pomáhajú používateľovi rýchlejšie vykonať akciu, čo zvyšuje konverzie. UI je dôležité aj preto, že esteticky príťažlivé prostredie podporuje emocionálnu väzbu k produktu."
    }
  }
},

responsiveness: {
  slugs: { EN: "responsiveness", CZ: "responzivita", SK: "responzivita" },
  category: "Development",
  relatedTerms: ["Frontend", "CSS", "UX", "UI", "Mobile First", "Performance"],
  resources: [
    { title: "MDN — Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
    { title: "web.dev — Responsive web design basics", url: "https://web.dev/responsive-web-design-basics/" }
  ],
  content: {
    EN: {
      term: "Responsiveness",
      shortDefinition: "Adapting a website to different devices",
      fullDefinition:
        "Responsiveness means a website automatically adapts to different screen sizes—mobile, tablet, laptop, and large monitors. Layout, typography, images, and navigation adjust so the site remains readable and usable on any device. It’s commonly implemented with flexible layouts and CSS media queries.",
      examples: [
        "The menu turns into a hamburger icon on mobile.",
        "Images scale down based on screen width.",
        "Content collapses into a single column on small screens.",
        "Tables become horizontally scrollable blocks.",
        "Forms are optimized for touch interaction."
      ],
      whyItMatters:
        "Most visits come from mobile devices today. Without responsiveness, a website becomes hard to use and readability drops. Responsiveness improves user satisfaction, lowers bounce rate, and supports SEO (mobile-first indexing). It also reduces costs because you don’t need a separate mobile site."
    },
    CZ: {
      term: "Responzivita",
      shortDefinition: "Přizpůsobení webu různým zařízením",
      fullDefinition:
        "Responzivita znamená, že se web automaticky přizpůsobí velikosti obrazovky—mobil, tablet, notebook i velký monitor. Mění se rozložení prvků, velikosti textů a obrázků i navigace tak, aby byl web čitelný a použitelný. Často se řeší pomocí flexibilních layoutů a CSS media queries.",
      examples: [
        "Menu se na mobilu změní na hamburger ikonu.",
        "Obrázky se zmenšují podle šířky zařízení.",
        "Obsah se na mobilu přeskupí do jednoho sloupce.",
        "Tabulky jsou scrollovatelné vodorovně.",
        "Formuláře jsou optimalizované pro dotyk."
      ],
      whyItMatters:
        "Dnes přichází většina návštěv z mobilů. Bez responzivity je web nečitelný a nepoužitelný, zvyšuje se bounce rate a klesají konverze. Responzivita je důležitá i pro SEO (mobile-first). Navíc šetří náklady, protože není nutné vytvářet zvláštní mobilní web."
    },
    SK: {
      term: "Responzivita",
      shortDefinition: "Prispôsobenie webu rôznym zariadeniam",
      fullDefinition:
        "Responzivita znamená, že webová stránka sa automaticky prispôsobuje šírke a výške obrazovky zariadenia. Zabezpečuje, že obsah zostane čitateľný a použiteľný aj na menších obrazovkách, ako sú smartfóny a tablety. Responzívny web mení rozloženie prvkov, veľkosti textov, obrázkov a navigácie tak, aby bol komfortný na používanie. Využíva CSS techniky, flexibilné mriežky a mediálne dotazy (media queries). Bez responzivity by moderný web pôsobil neprofesionálne a ťažko použiteľne.",
      examples: [
        "Menu sa na mobiloch zmení na hamburger ikonu.",
        "Obrázky sa automaticky zmenšujú podľa šírky obrazovky.",
        "Text sa preusporiada do jedného stĺpca na mobilných zariadeniach.",
        "Tabuľky sa menia na scrollovateľné bloky.",
        "Formuláre sa optimalizujú pre dotykové ovládanie."
      ],
      whyItMatters:
        "Väčšina návštev webových stránok dnes pochádza z mobilných zariadení, preto je responzivita kľúčovou súčasťou moderného dizajnu. Responzívny web zvyšuje spokojnosť používateľov a minimalizuje riziko, že stránku rýchlo opustia. Google uprednostňuje responzívne weby v mobilnom vyhľadávaní, čo zlepšuje SEO. Pre firmy to znamená vyššie konverzie, pretože zákazníci dokážu vykonať akciu na akomkoľvek zariadení. Responzivita tiež znižuje náklady, keďže nie je potrebné vytvárať samostatnú mobilnú verziu webu."
    }
  }
},

git: {
  slugs: { EN: "git", CZ: "git", SK: "git" },
  category: "Development",
  relatedTerms: ["Deployment", "Debugging", "Open Source", "Repository", "Branch"],
  resources: [
    { title: "Git — Official documentation", url: "https://git-scm.com/doc" },
    { title: "GitHub — About Git", url: "https://docs.github.com/en/get-started/using-git/about-git" }
  ],
  content: {
    EN: {
      term: "Git",
      shortDefinition: "Code version control system",
      fullDefinition:
        "Git is a tool that tracks changes in code, lets you return to older versions, and enables multiple developers to work on one project without conflicts. It stores a full history of edits and supports branches for parallel development. Git is the foundation of professional development workflows and is commonly used with platforms like GitHub or GitLab.",
      examples: [
        "Working on different features in separate branches.",
        "Rolling back to a version before a bug was introduced.",
        "Reviewing changes via pull requests.",
        "Automated deployments triggered by commits.",
        "Managing WordPress plugins in a Git repository."
      ],
      whyItMatters:
        "Git protects projects from accidental mistakes, supports teamwork, and creates an organized development process. It makes it easier to test new features safely and maintain code quality over time."
    },
    CZ: {
      term: "Git",
      shortDefinition: "Systém verzování kódu",
      fullDefinition:
        "Git je nástroj pro sledování změn v kódu, návrat ke starším verzím a spolupráci více vývojářů na jednom projektu bez konfliktů. Uchovává historii úprav a podporuje větve (branches) pro paralelní vývoj. Git je základem profesionálních vývojových workflow a často se používá s GitHubem nebo GitLabem.",
      examples: [
        "Paralelní práce na funkcích v různých větvích.",
        "Návrat k verzi před chybou.",
        "Kontrola změn přes pull requesty.",
        "Automatické nasazení po commitu.",
        "Správa WordPress pluginů v Git repozitáři."
      ],
      whyItMatters:
        "Git chrání projekt před ztrátou práce a chybami, zlepšuje týmovou spolupráci a přináší organizovaný proces vývoje. Umožňuje bezpečné testování změn a dlouhodobou udržitelnost kódu."
    },
    SK: {
      term: "Git",
      shortDefinition: "Systém verzionovania kódu",
      fullDefinition:
        "Git je nástroj, ktorý umožňuje sledovať všetky zmeny v kóde a pracovať na projekte viacerým vývojárom naraz. Uchováva históriu úprav, takže je možné vrátiť sa k starším verziám alebo analyzovať, kde vznikla chyba. Git používa systém vetiev (branches), ktoré umožňujú paralelný vývoj bez narušenia hlavného kódu. Git je základným nástrojom pre profesionálne tímy, pretože organizuje a zabezpečuje proces vývoja. Platformy ako GitHub či GitLab umožňujú zdieľanie kódu medzi vývojármi po celom svete.",
      examples: [
        "Vývojári pracujú paralelne na rôznych funkciách projektu.",
        "Návrat k predchádzajúcej verzii webu po neúspešnom nasadení.",
        "Kontrola zmien prostredníctvom pull requestov.",
        "Automatické nasadenie kódu cez CI/CD pipeline.",
        "Ukladanie a správa WordPress pluginov v Git repozitári."
      ],
      whyItMatters:
        "Git zabraňuje strate práce a minimalizuje riziko chýb pri vývoji. Umožňuje jednoduché porovnávanie verzií, testovanie nových funkcií a bezpečné nasadzovanie zmien. Tímová spolupráca je efektívnejšia, pretože každý vývojár môže pracovať v samostatnej vetve a následne zlúčiť výsledky. Git podporuje organizovaný spôsob práce a umožňuje transparentnú dokumentáciu kódu. Pre firmy znamená Git vyššiu kvalitu vývoja a nižšie riziko kritických chýb."
    }
  }
},

framework: {
  slugs: { EN: "framework", CZ: "framework", SK: "framework" },
  category: "Development",
  relatedTerms: ["JavaScript", "PHP", "Frontend", "Backend", "Library", "Deployment"],
  resources: [
    { title: "MDN — JavaScript frameworks", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" },
    { title: "Laravel — Documentation", url: "https://laravel.com/docs" }
  ],
  content: {
    EN: {
      term: "Framework",
      shortDefinition: "Structure and tools for faster development",
      fullDefinition:
        "A framework is a pre-built structure (“skeleton”) with modules, tools, and conventions that speed up building websites or applications. It provides common solutions so developers don’t have to reinvent basics. Frameworks exist for both frontend and backend (e.g., React, Laravel) and improve maintainability by enforcing consistent project organization.",
      examples: [
        "React for modern user interfaces.",
        "Laravel as a PHP backend framework.",
        "Tailwind CSS as a utility styling framework.",
        "Vue.js for interactive web apps.",
        "Framework-based structure that keeps projects organized."
      ],
      whyItMatters:
        "Frameworks reduce development time, improve security through maintained components, and help teams work consistently. They support clean, scalable code and faster delivery of products."
    },
    CZ: {
      term: "Framework",
      shortDefinition: "Struktura a nástroje pro rychlejší vývoj",
      fullDefinition:
        "Framework je předpřipravená „kostra“, která urychluje a zjednodušuje vývoj webů a aplikací. Obsahuje moduly, knihovny a postupy pro běžné úkoly, takže je není nutné vyvíjet od nuly. Framework zároveň určuje strukturu projektu, což zlepšuje přehlednost a údržbu. Existují frontendové i backendové frameworky (např. React, Laravel).",
      examples: [
        "React pro moderní uživatelská rozhraní.",
        "Laravel jako PHP backend framework.",
        "TailwindCSS pro rychlé stylování.",
        "Vue.js pro interaktivní aplikace.",
        "Standardizovaná struktura projektu díky frameworku."
      ],
      whyItMatters:
        "Frameworky šetří čas, zvyšují bezpečnost a přinášejí konzistenci v týmu. Usnadňují údržbu, rozšiřování a podporují škálovatelný kód, což firmám pomáhá rychleji uvádět produkty na trh."
    },
    SK: {
      term: "Framework",
      shortDefinition: "Štruktúra a nástroje pre rýchlejší vývoj",
      fullDefinition:
        "Framework je predpripravená štruktúra alebo „kostra“, ktorá vývojárom uľahčuje a zrýchľuje tvorbu webových aplikácií alebo stránok. Obsahuje hotové funkcie, knižnice, moduly a postupy, ktoré riešia bežné úlohy, aby ich programátori nemuseli vytvárať od nuly. Framework zároveň určuje štandardy, ako by mal byť projekt organizovaný, čo výrazne zlepšuje prehľadnosť a udržiavateľnosť kódu. Používa sa na frontend aj backend, pričom každá oblasť má svoje špecializované frameworky (napr. React, Laravel). Framework tak poskytuje pevný základ pre rýchly a spoľahlivý vývoj.",
      examples: [
        "React sa používa na vývoj moderných používateľských rozhraní.",
        "Laravel poskytuje robustný základ pre backend aplikácie v PHP.",
        "TailwindCSS zrýchľuje tvorbu dizajnu stránok.",
        "Vue.js sa používa na interaktívne webové aplikácie.",
        "WordPress developerské frameworky ako Genesis uľahčujú tvorbu tém."
      ],
      whyItMatters:
        "Frameworky výrazne skracujú čas vývoja, pretože poskytujú overené riešenia pre časté programátorské úlohy. Zvyšujú bezpečnosť, pretože obsahujú aktualizované knižnice a ochranné mechanizmy proti bežným útokom. Prinášajú konzistentnosť medzi vývojármi v tíme, čo zlepšuje údržbu a rozširovanie projektu. Pomáhajú písať čistejší, organizovaný a lepšie škálovateľný kód. Firmám umožňujú rýchlejšie uvádzať produkty na trh a efektívnejšie pracovať s rozpočtom."
    }
  }
},

html: {
  slugs: { EN: "html", CZ: "html", SK: "html" },
  category: "Development",
  relatedTerms: ["CSS", "JavaScript", "Frontend", "Accessibility", "SEO"],
  resources: [
    { title: "MDN — HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "web.dev — Semantic HTML", url: "https://web.dev/learn/html/" }
  ],
  content: {
    EN: {
      term: "HTML",
      shortDefinition: "The structure of the web",
      fullDefinition:
        "HTML is a markup language that defines the structure of a web page. It describes elements such as headings, paragraphs, images, links, and forms. Browsers use HTML to understand what content exists and how it is organized. HTML is the foundation of every website.",
      examples: [
        "Creating a main heading using <h1>.",
        "Displaying an image with <img>.",
        "Building forms with <form> and <input>.",
        "Creating links using <a>.",
        "Structuring sections with semantic tags."
      ],
      whyItMatters:
        "Without HTML, there is no web page structure. Good semantic HTML improves accessibility and helps SEO by making content understandable to search engines and assistive technologies."
    },
    CZ: {
      term: "HTML",
      shortDefinition: "Základní kostra webu",
      fullDefinition:
        "HTML je značkovací jazyk, který určuje strukturu webové stránky. Definuje prvky jako nadpisy, odstavce, obrázky, odkazy a formuláře. Prohlížeč podle HTML zobrazí obsah ve správné struktuře. HTML je základ každého webu.",
      examples: [
        "Nadpis stránky pomocí <h1>.",
        "Obrázek přes <img>.",
        "Formulář s <form> a <input>.",
        "Odkaz přes <a>.",
        "Rozdělení obsahu do sekcí."
      ],
      whyItMatters:
        "Bez HTML by web neměl strukturu. Správně napsané (sémantické) HTML zlepšuje SEO i přístupnost, takže je web použitelný i pro čtečky obrazovky."
    },
    SK: {
      term: "HTML",
      shortDefinition: "Základná kostra webu",
      fullDefinition:
        "HTML je značkovací jazyk, ktorý určuje štruktúru webovej stránky. Definuje základné prvky ako nadpisy, odstavce, obrázky, odkazy či formuláre, ktoré tvoria základ obsahu webu. Prehliadač dokáže na základe HTML zobraziť jednotlivé časti obsahu v správnom poradí a štruktúre. HTML neobsahuje dizajn ani pokročilú logiku – len obsah a jeho usporiadanie. Ide o základný kameň každého webu, bez ktorého by neexistovala digitálna stránka.",
      examples: [
        "Nadpis hlavnej stránky je napísaný pomocou tagu <h1>.",
        "Obrázky sú vložené pomocou <img> značiek.",
        "Formuláre využívajú tagy <form>, <input>, <textarea>.",
        "Odkazy sú vytvorené pomocou tagu <a>.",
        "Rozloženie stránky využíva základné kontajnerové bloky <div>."
      ],
      whyItMatters:
        "Bez HTML by žiadny web nemal kostru – texty, obrázky, bloky ani formuláre by nemali svoju pozíciu. Správne štruktúrované HTML pomáha optimalizovať web pre vyhľadávače (SEO) aj pre používateľov so znevýhodnením. Kvalitná HTML štruktúra zlepšuje rýchlosť načítania a uľahčuje prácu dizajnérom a programátorom. HTML je dôležité aj pre dostupnosť webu, pretože umožňuje čítačkám obrazovky správne interpretovať obsah. Je to univerzálny a nadčasový základ pre všetky webové technológie."
    }
  }
},

css: {
  slugs: { EN: "css", CZ: "css", SK: "css" },
  category: "Development",
  relatedTerms: ["HTML", "Frontend", "Responsiveness", "UI", "Tailwind CSS"],
  resources: [
    { title: "MDN — CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "web.dev — Learn CSS", url: "https://web.dev/learn/css/" }
  ],
  content: {
    EN: {
      term: "CSS",
      shortDefinition: "Styling for the web",
      fullDefinition:
        "CSS is the language that defines how a website looks—colors, typography, spacing, layout, and even animations. While HTML is the structure, CSS provides the design and visual identity. CSS is essential for responsive layouts and modern UI styling.",
      examples: [
        "Changing button colors to increase visibility.",
        "Setting font size and line spacing for readability.",
        "Building mobile layouts with responsive rules.",
        "Creating hover and scroll animations.",
        "Adding shadows, rounding, and gradients."
      ],
      whyItMatters:
        "CSS strongly influences how professional and usable a website feels. It supports readability, visual hierarchy, responsiveness, and overall user experience—often impacting conversions and SEO indirectly."
    },
    CZ: {
      term: "CSS",
      shortDefinition: "Stylování webu",
      fullDefinition:
        "CSS určuje, jak web vypadá—barvy, písmo, velikosti, rozestupy, rozložení prvků i animace. Zatímco HTML je kostra, CSS dává webu vizuální styl a identitu. Je nezbytné pro responzivní design a moderní UI.",
      examples: [
        "Změna barvy tlačítek.",
        "Nastavení velikosti a řádkování textu.",
        "Tvorba mobilní verze pomocí responzivních pravidel.",
        "Animace při hoveru nebo scrollu.",
        "Stíny, zaoblení a přechody."
      ],
      whyItMatters:
        "CSS rozhoduje o tom, zda web působí profesionálně a je příjemný na používání. Pomáhá s čitelností, hierarchií obsahu a responzivitou, což má dopad i na UX a výsledky webu."
    },
    SK: {
      term: "CSS",
      shortDefinition: "Štýlovanie a dizajn webových stránok",
      fullDefinition:
        "CSS je jazyk, ktorý určuje vzhľad webovej stránky – farby, fonty, veľkosti, rozostupy, umiestnenie prvkov a dokonca aj animácie. Zatiaľ čo HTML vytvára kostru stránky, CSS jej dáva vizuálny štýl, identitu a používateľskú príťažlivosť. Umožňuje vytvárať moderné dizajny, ktoré sú estetické a použiteľné. CSS môže byť aplikované priamo do HTML alebo uložené ako samostatný súbor, čo zlepšuje prehľadnosť a správu. Je nevyhnutné pre vytváranie responzívnych webov, ktoré sa prispôsobujú rôznym zariadeniam.",
      examples: [
        "Zafarbenie CTA tlačidiel výraznou farbou pre zvýšenie konverzií.",
        "Nastavenie responzívnych stĺpcov pre mobilný dizajn.",
        "Vytvorenie grafických animácií pri scrollovaní.",
        "Úprava medzier medzi sekciami pre lepšie čítanie.",
        "Dizajnové prvky ako tieňe, zaoblenia či prechody."
      ],
      whyItMatters:
        "CSS určuje, či je web profesionálny, príťažlivý a prehľadný. Zlepšuje používateľský zážitok tým, že pomáha používateľovi lepšie čítať texty, orientovať sa medzi sekciami a pochopiť vizuálnu hierarchiu. Responzivita webu závisí od správnej implementácie CSS, čo má zásadný vplyv na SEO aj použiteľnosť. CSS umožňuje vytvárať vizuálne efektívne riešenia, ktoré podporujú konverzie. Bez CSS by boli weby neorganizované a vizuálne neatraktívne."
    }
  }
},

javascript: {
  slugs: { EN: "javascript", CZ: "javascript", SK: "javascript" },
  category: "Development",
  relatedTerms: ["Frontend", "Framework", "API", "React", "Node.js", "Debugging"],
  resources: [
    { title: "MDN — JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "web.dev — Learn JavaScript", url: "https://web.dev/learn/javascript/" }
  ],
  content: {
    EN: {
      term: "JavaScript",
      shortDefinition: "Programming language for web interactivity",
      fullDefinition:
        "JavaScript enables websites to be interactive and dynamic. While HTML and CSS define structure and style, JavaScript adds logic and behavior—validating forms, loading data without refresh, animations, and communication with servers. JavaScript is also used on the backend through Node.js.",
      examples: [
        "Opening a popup when a button is clicked.",
        "Loading products dynamically without page refresh.",
        "Validating a form before submitting.",
        "Interactive homepage animations.",
        "Real-time cart updates in an e-shop."
      ],
      whyItMatters:
        "Without JavaScript, most modern web experiences would be static and limited. JavaScript enables advanced UI, faster interactions, and app-like experiences through frameworks like React, Vue, or Angular."
    },
    CZ: {
      term: "JavaScript",
      shortDefinition: "Jazyk pro interaktivitu na webu",
      fullDefinition:
        "JavaScript umožňuje webům být interaktivní a dynamické. Zatímco HTML a CSS řeší strukturu a styl, JavaScript přidává logiku—kontrolu formulářů, načítání dat bez obnovy, animace a komunikaci se serverem. JavaScript se používá i na backendu přes Node.js.",
      examples: [
        "Zobrazení popup okna po kliknutí.",
        "Dynamické načtení produktů bez reloadu.",
        "Validace formuláře před odesláním.",
        "Interaktivní animace na homepage.",
        "Aktualizace košíku v reálném čase."
      ],
      whyItMatters:
        "Bez JavaScriptu by weby působily staticky a méně moderně. JavaScript umožňuje pokročilá rozhraní a rychlejší interakce, často pomocí frameworků jako React nebo Vue."
    },
    SK: {
      term: "JavaScript",
      shortDefinition: "Programovací jazyk pre interaktivitu na webe",
      fullDefinition:
        "JavaScript je jazyk, ktorý umožňuje webovým stránkam byť interaktívne, dynamické a reagovať na akcie používateľov. Zatiaľ čo HTML a CSS určujú štruktúru a štýl, JavaScript prináša funkcionalitu a logiku do rozhrania. Umožňuje meniť obsah stránky bez načítania, kontrolovať formuláre, vytvárať animácie, posielať údaje na server a mnoho ďalšieho. Moderný JavaScript sa používa aj na backend prostredníctvom Node.js. Je neoddeliteľnou súčasťou väčšiny moderných webových aplikácií.",
      examples: [
        "Zobrazenie popup okna pri kliknutí na tlačidlo.",
        "Automatické načítanie produktov bez obnovy stránky.",
        "Overovanie polí vo formulári pred odoslaním.",
        "Interaktívne animácie na domovskej stránke.",
        "Funkčnosť e-shopového košíka v reálnom čase."
      ],
      whyItMatters:
        "Bez JavaScriptu by weby pôsobili zastaralo a staticky, pretože by neumožňovali interakciu ani pokročilé funkcie. JavaScript poskytuje používateľom pohodlnejší a rýchlejší zážitok, čo zlepšuje ich spokojnosť a konverzie. Umožňuje vývojárom vytvárať pokročilé rozhrania podobné natívnym aplikáciám. Vďaka frameworkom ako React, Vue či Angular je JavaScript základom moderného vývoja. Taktiež zlepšuje komunikáciu so serverom, čo umožňuje dynamické načítanie obsahu."
    }
  }
},

php: {
  slugs: { EN: "php", CZ: "php", SK: "php" },
  category: "Development",
  relatedTerms: ["WordPress", "Backend", "Plugin", "Child Theme", "Database", "REST API"],
  resources: [
    { title: "PHP — Manual", url: "https://www.php.net/manual/en/" },
    { title: "WordPress Developer Resources", url: "https://developer.wordpress.org/" }
  ],
  content: {
    EN: {
      term: "PHP",
      shortDefinition: "Server-side language used by WordPress",
      fullDefinition:
        "PHP is a server-side scripting language that processes website logic before content is shown to users. It is used for dynamic content generation, database work, and handling forms. PHP is the core language of WordPress, WooCommerce, and many plugins and themes, enabling anything from simple forms to complex booking systems.",
      examples: [
        "Adding a custom function to functions.php.",
        "Building a custom WordPress plugin.",
        "Customizing WooCommerce behavior.",
        "Automating emails with PHP scripts.",
        "Integrating external systems into WordPress."
      ],
      whyItMatters:
        "PHP powers WordPress functionality—generating pages, storing content, and communicating with databases. It’s essential for custom features, themes, and plugins. Good PHP code helps keep WordPress projects stable, secure, and maintainable."
    },
    CZ: {
      term: "PHP",
      shortDefinition: "Serverový jazyk používaný WordPressem",
      fullDefinition:
        "PHP je skriptovací jazyk běžící na serveru, který zpracovává logiku webu ještě před zobrazením uživateli. Používá se pro dynamické generování obsahu, práci s databázemi a zpracování formulářů. PHP je základ WordPressu, WooCommerce i většiny pluginů a šablon.",
      examples: [
        "Přidání funkce do functions.php.",
        "Tvorba vlastního WordPress pluginu.",
        "Úprava WooCommerce funkcí.",
        "Automatizace e-mailů pomocí PHP.",
        "Napojení externích systémů na WordPress."
      ],
      whyItMatters:
        "PHP umožňuje WordPressu fungovat, generovat stránky a komunikovat s databází. Je klíčové pro pluginy, šablony a vlastní funkcionality. Kvalitní PHP kód zvyšuje stabilitu i bezpečnost webu."
    },
    SK: {
      term: "PHP",
      shortDefinition: "Serverový programovací jazyk využívaný WordPressom",
      fullDefinition:
        "PHP je skriptovací jazyk, ktorý beží na serveri a spracúva logiku webovej stránky ešte predtým, než sa zobrazí používateľovi. Používa sa na dynamické generovanie obsahu, prácu s databázami, spracovanie formulárov a mnohé iné funkcie. Je to základný jazyk WordPressu, WooCommerce a väčšiny pluginov a tém. PHP dokáže vytvoriť akúkoľvek funkcionalitu — od jednoduchého formulára až po komplexný systém rezervácií. Je veľmi flexibilné a univerzálne.",
      examples: [
        "Úprava functions.php pre doplnenie novej funkcie.",
        "Tvorba vlastného WordPress pluginu.",
        "Programovanie logiky pre WooCommerce košík.",
        "Automatizácia e-mailov pomocou PHP skriptov.",
        "Napojenie externých systémov na WordPress."
      ],
      whyItMatters:
        "PHP umožňuje WordPressu fungovať, ukladať obsah, generovať stránky a komunikovať s databázou. Je kľúčové pri tvorbe pluginov, úprave tém a rozširovaní funkcií webu. Firmy môžu vďaka PHP jednoducho prispôsobiť web svojim individuálnym potrebám. PHP sa neustále vyvíja, čo zvyšuje jeho bezpečnosť a výkon. Bez kvalitného PHP kódu by WordPressové projekty neboli stabilné ani bezpečné."
    }
  }
},

childTheme: {
  slugs: { EN: "child-theme", CZ: "child-theme", SK: "child-theme" },
  category: "Development",
  relatedTerms: ["WordPress", "PHP", "Plugin", "Theme", "Deployment"],
  resources: [
    { title: "WordPress — Child Themes", url: "https://developer.wordpress.org/themes/advanced-topics/child-themes/" },
    { title: "WordPress — Theme Handbook", url: "https://developer.wordpress.org/themes/" }
  ],
  content: {
    EN: {
      term: "Child Theme",
      shortDefinition: "Safe WordPress theme customization",
      fullDefinition:
        "A child theme is a WordPress theme that inherits functionality and styling from a parent theme while allowing custom changes without losing them during updates. It contains only the modified or added files and works together with the parent theme. It’s the safest approach for advanced theme customization.",
      examples: [
        "Customizing design without losing changes after updates.",
        "Overriding parent theme templates.",
        "Adding custom PHP functions safely.",
        "Adding custom CSS styling.",
        "Customizing WooCommerce templates in a maintainable way."
      ],
      whyItMatters:
        "Without a child theme, custom edits can be overwritten when the parent theme is updated. Child themes protect custom work, improve maintainability, and enable safe long-term updates."
    },
    CZ: {
      term: "Child Theme",
      shortDefinition: "Dětská šablona ve WordPressu",
      fullDefinition:
        "Child theme je doplňková šablona, která dědí funkce a vzhled parent (hlavní) šablony a umožňuje dělat úpravy bez rizika jejich ztráty při aktualizaci. Obsahuje jen změněné nebo přidané soubory a funguje společně s parent šablonou. Je to nejbezpečnější způsob úprav WordPress šablon.",
      examples: [
        "Úprava designu bez ztráty změn po aktualizaci.",
        "Přepsání šablon parent tématu.",
        "Přidání vlastních PHP funkcí bezpečně.",
        "Přidání vlastních CSS stylů.",
        "Bezpečné úpravy WooCommerce šablon."
      ],
      whyItMatters:
        "Bez child theme se vlastní úpravy při aktualizaci parent tématu přepíšou. Child theme chrání úpravy a umožňuje bezpečné aktualizace a dlouhodobou údržbu."
    },
    SK: {
      term: "Child Theme",
      shortDefinition: "Detská téma pre bezpečné úpravy WordPress šablón",
      fullDefinition:
        "Child theme je doplnková téma, ktorá dedí všetky vlastnosti hlavnej (parent) témy a zároveň umožňuje vývojárovi robiť úpravy bez ich straty pri aktualizáciách. Obsahuje len zmenené alebo doplnené súbory, čo umožňuje flexibilné prispôsobenie webu. Používa sa pri pokročilých úpravách dizajnu, funkcií alebo štruktúry. Child theme vždy funguje spolu s parent témou, ktorá zostáva základným zdrojom kódu. Je to najbezpečnejší spôsob úprav WordPress šablón.",
      examples: [
        "Úprava dizajnu len pre mobilnú verziu webu.",
        "Pridanie vlastných PHP funkcií bez zásahu do parent témy.",
        "Vytvorenie jedinečného headeru alebo footeru.",
        "Odstránenie nepotrebných funkcií zo základnej témy.",
        "Prispôsobenie WooCommerce šablón."
      ],
      whyItMatters:
        "Používanie child theme zaručuje, že vlastné úpravy sa pri aktualizácii hlavnej témy neprepíšu. To zvyšuje bezpečnosť, stabilitu a dlhodobú udržateľnosť projektu. Umožňuje vývojárom robiť pokročilé úpravy bez rizika poškodenia základného kódu. Znižuje aj budúce náklady na údržbu, pretože aktualizácie je možné vykonávať bez obáv. Firmy tak môžu mať dizajn a funkcionalitu na mieru bez ohrozenia kompatibility."
    }
  }
},

restApi: {
  slugs: { EN: "rest-api", CZ: "rest-api", SK: "rest-api" },
  category: "Development",
  relatedTerms: ["API", "Backend", "JSON", "Endpoint", "Authentication", "WordPress"],
  resources: [
    { title: "RESTful API Tutorial", url: "https://restfulapi.net/" },
    { title: "WordPress — REST API Handbook", url: "https://developer.wordpress.org/rest-api/" }
  ],
  content: {
    EN: {
      term: "REST API",
      shortDefinition: "Standard for data communication between systems",
      fullDefinition:
        "REST API is a common way for systems to communicate over HTTP. In WordPress, REST API allows external apps to read and write data (posts, users, products) by sending requests to endpoints that return JSON. It’s widely used for integrations, automation, mobile apps, and headless architectures.",
      examples: [
        "A mobile app loads blog posts from WordPress.",
        "A booking system sends reservation data into WordPress.",
        "Orders are exported automatically to an ERP system.",
        "WordPress is connected to a CRM via API.",
        "A headless WordPress setup provides content for a frontend app."
      ],
      whyItMatters:
        "REST API unlocks advanced integrations and real-time data flows. It makes WordPress usable beyond a classic website and enables modern architectures where frontend and backend are separate but connected."
    },
    CZ: {
      term: "REST API",
      shortDefinition: "Rozhraní pro komunikaci systémů",
      fullDefinition:
        "REST API je běžný způsob, jak spolu systémy komunikují přes HTTP. Ve WordPressu umožňuje REST API číst a zapisovat data (články, uživatele, produkty) přes endpointy, které vrací JSON. Používá se pro integrace, automatizaci, mobilní aplikace a headless řešení.",
      examples: [
        "Mobilní aplikace načítá články z WordPressu.",
        "Rezervační systém posílá data do WordPressu.",
        "Automatický export objednávek do ERP systému.",
        "Propojení WordPressu s CRM.",
        "Headless WordPress pro frontendovou aplikaci."
      ],
      whyItMatters:
        "REST API výrazně rozšiřuje možnosti integrací a propojení systémů. Umožňuje moderní architektury a práci s daty v reálném čase."
    },
    SK: {
      term: "REST API",
      shortDefinition: "Rozhranie WordPressu pre komunikáciu s externými systémami",
      fullDefinition:
        "REST API je spôsob, akým WordPress komunikuje s inými aplikáciami, systémami alebo službami. Umožňuje aplikáciám získavať obsah z WordPressu a odosielať dáta späť na server. REST API funguje na princípe URL požiadaviek, ktoré vracajú dáta vo formáte JSON. Používa sa najmä pri mobilných aplikáciách, externých systémoch a automatizáciách. Je to moderný spôsob, ako rozšíriť WordPress za hranice klasického webu.",
      examples: [
        "Mobilná aplikácia načítava články z WordPressu.",
        "Rezervačný systém odosiela údaje do WordPressu.",
        "Automatický export objednávok do ERP systému.",
        "Prepojenie WordPressu s CRM.",
        "Tvorba headless WordPress riešení."
      ],
      whyItMatters:
        "REST API výrazne zvyšuje potenciál WordPressu, pretože umožňuje jeho prepojenie s akýmkoľvek digitálnym produktom. Umožňuje budovať aplikácie, ktoré zdieľajú obsah alebo dáta v reálnom čase. Znižuje duplicitu a spája systémy, ktoré by inak fungovali samostatne. Zefektívňuje automatizáciu procesov a zrýchľuje prenos údajov. Pre firmy znamená možnosť integrovať WordPress s ich internými systémami, CRM, skladom či mobilnými aplikáciami."
    }
  }
},

deployment: {
  slugs: { EN: "deployment", CZ: "deployment", SK: "deployment" },
  category: "Development",
  relatedTerms: ["Hosting", "Git", "CI/CD", "Build", "Release"],
  resources: [
    { title: "GitHub Actions — Documentation", url: "https://docs.github.com/en/actions" },
    { title: "web.dev — Deploying", url: "https://web.dev/learn/" }
  ],
  content: {
    EN: {
      term: "Deployment",
      shortDefinition: "Publishing a project to a live server",
      fullDefinition:
        "Deployment is the process of moving a website or application from development to a production (live) server so real users can access it. It can include copying files, setting up databases and environment variables, and configuring servers. Deployment can be manual or automated through CI/CD pipelines.",
      examples: [
        "Moving a site from staging to production.",
        "Deploying a new version through GitHub Actions.",
        "Releasing updates without website downtime.",
        "Migrating a site between hosting providers.",
        "Publishing a new feature after testing."
      ],
      whyItMatters:
        "Correct deployment ensures the website works reliably, securely, and fast in real conditions. Automation reduces human errors and speeds up delivery of updates."
    },
    CZ: {
      term: "Deployment",
      shortDefinition: "Nasazení webu nebo aplikace na server",
      fullDefinition:
        "Deployment je proces přesunu projektu z vývojového prostředí na produkční server, aby byl dostupný uživatelům. Zahrnuje nastavení serveru, souborů, databází a konfigurací. Může být manuální nebo automatizovaný pomocí CI/CD.",
      examples: [
        "Přesun webu ze stagingu na produkci.",
        "Automatické nasazení přes GitHub Actions.",
        "Aktualizace bez výpadku webu.",
        "Migrace webu mezi hostingy.",
        "Nasazení nové funkce po otestování."
      ],
      whyItMatters:
        "Správný deployment minimalizuje riziko výpadků a chyb při aktualizacích. Automatizace šetří čas a zvyšuje spolehlivost nasazování."
    },
    SK: {
      term: "Deployment",
      shortDefinition: "Nasadenie webu alebo aplikácie na server",
      fullDefinition:
        "Deployment je proces, pri ktorom sa projekt presúva z vývojového prostredia na produkčný server, aby bol dostupný reálnym používateľom. Zahŕňa nastavenie servera, databáz, súborov a konfigurácií. Deployment môže byť manuálny alebo automatizovaný cez systémy CI/CD. Umožňuje stabilné publikovanie nových verzií webu vrátane opráv, nových funkcií a designových úprav. Je to nevyhnutný krok pri každom projekte, ktorý má ísť „naživo“.",
      examples: [
        "Prekopírovanie webu zo stagingu na produkčný server.",
        "Automatické nasadenie novej verzie cez GitHub Actions.",
        "Pravidelné aktualizácie bez výpadku webu.",
        "Migrácia webu medzi hostingami.",
        "Nasadenie novej funkcionality po testovaní."
      ],
      whyItMatters:
        "Správne vykonaný deployment zabezpečuje, že web bude fungovať bezpečne, rýchlo a bez chýb. Minimalizuje riziko výpadkov počas aktualizácií a umožňuje hladké publikovanie nových funkcií. Automatizovaný deployment šetrí čas a eliminuje ľudské chyby. Umožňuje rýchlo reagovať na problémy alebo zmeny v projekte. Je kľúčový pre profesionálny vývoj, kde sa vyžaduje stabilita a kontrola verzií."
    }
  }
},

debugging: {
  slugs: { EN: "debugging", CZ: "debugging", SK: "debugging" },
  category: "Development",
  relatedTerms: ["Git", "JavaScript", "Backend", "Logs", "Error Handling", "Deployment"],
  resources: [
    { title: "MDN — Debugging JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Debugging" },
    { title: "web.dev — Debugging", url: "https://web.dev/learn/" }
  ],
  content: {
    EN: {
      term: "Debugging",
      shortDefinition: "Finding and fixing errors",
      fullDefinition:
        "Debugging is the process of identifying, analyzing, and fixing errors in code or configuration. Developers use logs, browser devtools, tests, and debugging tools to understand why something doesn’t behave as expected and how to correct it. Debugging is a daily part of software development.",
      examples: [
        "Fixing a broken WordPress plugin.",
        "Finding a JavaScript error using the browser console.",
        "Analyzing server logs for a 500 error.",
        "Fixing an API integration that returns incorrect data.",
        "Optimizing a slow database query."
      ],
      whyItMatters:
        "Without debugging, it’s impossible to ensure stable, high-quality software. Debugging prevents outages, incorrect data, and poor user experience, and can also uncover security issues."
    },
    CZ: {
      term: "Debugging",
      shortDefinition: "Hledání a oprava chyb",
      fullDefinition:
        "Debugging je proces identifikace, analýzy a opravy chyb v kódu nebo konfiguraci. Vývojáři používají logy, nástroje v prohlížeči, testování a debug nástroje, aby pochopili příčinu problému a odstranili ji. Je to běžná součást vývoje.",
      examples: [
        "Oprava nefunkčního pluginu ve WordPressu.",
        "Hledání chyby v JavaScriptu pomocí konzole.",
        "Analýza serverových logů při chybě 500.",
        "Oprava API integrace vracející špatná data.",
        "Ladění pomalého databázového dotazu."
      ],
      whyItMatters:
        "Bez debuggingu nelze zajistit stabilitu a kvalitu softwaru. Pomáhá eliminovat výpadky, chyby v datech a zhoršený uživatelský zážitek a často odhalí i bezpečnostní slabiny."
    },
    SK: {
      term: "Debugging",
      shortDefinition: "Hľadanie a oprava chýb",
      fullDefinition:
        "Debugging je proces identifikácie, analýzy a opravy chýb v kóde alebo systéme. Zahŕňa zisťovanie, prečo niektorá funkcia nefunguje podľa očakávania a akým spôsobom ju opraviť. Programátori používajú debug nástroje, logy a testovanie, aby pochopili správanie aplikácie. Debugging môže byť jednoduchý, ale aj veľmi komplexný, najmä pri rozsiahlych systémoch. Je to každodenná súčasť práce vývojára.",
      examples: [
        "Oprava nefunkčného pluginu vo WordPresse.",
        "Diagnostika chyby v JavaScripte pomocou konzoly.",
        "Analýza serverových logov pri chybe 500.",
        "Oprava prepojenia API, ktoré vracia nesprávne údaje.",
        "Otestovanie a oprava problémov v databázových dotazoch."
      ],
      whyItMatters:
        "Bez debuggingu by bolo nemožné zabezpečiť stabilitu a kvalitu softvéru. Odstraňuje chyby, ktoré môžu spôsobiť výpadky, nesprávne údaje alebo zlé používateľské zážitky. Debugging zvyšuje bezpečnosť, pretože opravuje aj zraniteľnosti a slabé miesta v systéme. Umožňuje kontinuálne zlepšovanie projektu a optimalizáciu výkonu. Firmám prináša stabilitu, spoľahlivosť a dôveru používateľov v ich digitálne produkty."
    }
  }
},

};
