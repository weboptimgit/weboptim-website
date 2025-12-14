import React from "react";
import type { ReviewsPlatformRow } from "@/data/blog-tables";
import type { Language } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";

const tipText: Record<Language, string> = {
  EN: "Tip: On mobile, the table scrolls horizontally.",
  CZ: "Tip: Na mobilu se tabulka posouvá horizontálně.",
  SK: "Tip: Na mobile sa tabuľka posúva horizontálne.",
};

const defaultHeaders: string[] = [
  "Platform",
  "Audience",
  "Business type",
  "Review trust",
  "Conversion impact",
  "SEO / visibility impact",
  "Where it’s used",
];

export default function ComparisonTable({
  title,
  rows,
  headers,
}: {
  title?: string;
  rows: ReviewsPlatformRow[];
  headers?: string[]; // 👈 nech je optional
}) {
  const { language } = useLanguage();

  const finalHeaders = headers?.length ? headers : defaultHeaders;

  return (
    <div className="my-10">
      {title ? (
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
          {title}
        </h3>
      ) : null}

      <div className="glass rounded-2xl border border-border/60 overflow-hidden">
        <div className="overflow-x-auto -mx-6 px-6 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent hover:scrollbar-thumb-primary/50">
          <table className="w-full min-w-[980px] border-separate border-spacing-0">
            <thead>
              <tr className="bg-background/50">
                {finalHeaders.map((h) => (
                  <th
                    key={h}
                    className="text-left text-sm font-semibold text-foreground/80 px-5 py-4 border-b border-border/60"
                  >
                    <span className="italic">{h}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.platform}
                  className={idx % 2 === 0 ? "bg-background" : "bg-muted/10"}
                >
                  <td className="px-5 py-5 align-top border-b border-border/40 font-semibold text-foreground">
                    {r.platform}
                  </td>
                  <td className="px-5 py-5 align-top border-b border-border/40 text-muted-foreground">
                    {r.audience}
                  </td>
                  <td className="px-5 py-5 align-top border-b border-border/40 text-muted-foreground">
                    {r.businessType}
                  </td>
                  <td className="px-5 py-5 align-top border-b border-border/40 text-muted-foreground">
                    {r.trust}
                  </td>
                  <td className="px-5 py-5 align-top border-b border-border/40 text-muted-foreground">
                    {r.conversion}
                  </td>
                  <td className="px-5 py-5 align-top border-b border-border/40 text-muted-foreground">
                    {r.seo}
                  </td>
                  <td className="px-5 py-5 align-top border-b border-border/40 text-muted-foreground">
                    {r.locality}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-3 text-xs text-muted-foreground border-t border-border/40">
          {tipText[language]}
        </div>
      </div>
    </div>
  );
}
