import React from "react";
import type { ReviewsPlatformRow } from "@/data/blog-tables";

export default function ComparisonTable({
  title,
  rows,
}: {
  title?: string;
  rows: ReviewsPlatformRow[];
}) {
  return (
    <div className="my-10">
      {title ? (
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
          {title}
        </h3>
      ) : null}

      <div className="glass rounded-2xl border border-border/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-separate border-spacing-0">
            <thead>
              <tr className="bg-background/50">
                {[
                  "Platforma",
                  "Cieľová skupina",
                  "Typ podnikania",
                  "Dôveryhodnosť recenzií",
                  "Vplyv na konverzie",
                  "Vplyv na SEO / viditeľnosť",
                  "Lokalita použitia",
                ].map((h) => (
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
          Tip: na mobile sa tabuľka posúva horizontálne.
        </div>
      </div>
    </div>
  );
}
