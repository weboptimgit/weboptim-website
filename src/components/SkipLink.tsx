import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  EN: "Skip to main content",
  CZ: "Přeskočit na hlavní obsah",
  SK: "Preskočiť na hlavný obsah",
};

const SkipLink = () => {
  const { language } = useLanguage();
  
  return (
    <a
      href="#main-content"
      className="skip-link"
    >
      {translations[language]}
    </a>
  );
};

export default SkipLink;
