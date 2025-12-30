import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register Roboto font with diacritics support
Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf", fontWeight: 400 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf", fontWeight: 700 },
  ],
});

export type PdfData = {
  title: string;
  dateLabel: string;
  selectionsLabel: string;
  totalsLabel: string;
  oneTimeLabel: string;
  afterDiscountLabel: string;
  monthlyLabel: string;
  disclaimer: string;

  // hodnoty
  dateText: string;
  oneTime: string;
  afterDiscount?: string;
  monthly?: string;
  discountText?: string;

  // položky
  design?: string;
  pages?: string;
  languages: string[];
  maintenance?: string;
  hosting?: string;
  articles?: string;
  functionalitiesByCategory: Array<{ category: string; items: string[] }>;
  marketingOneTime: string[];
  marketingMonthly: string[];
};

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontSize: 10,
    color: "#0f172a",
    fontFamily: "Roboto",
  },
  header: {
    marginBottom: 18,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    borderBottomStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  brand: { fontSize: 16, fontWeight: 700 },
  meta: { fontSize: 9, color: "#475569" },

  grid: { flexDirection: "row", gap: 10 },
  col: { flexGrow: 1 },
  card: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  cardTitle: { fontSize: 11, fontWeight: 700, marginBottom: 6 },

  bigPrice: { fontSize: 16, fontWeight: 700, marginTop: 2 },
  small: { fontSize: 9, color: "#475569" },

  row: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    gap: 8, 
    marginBottom: 5,
    flexWrap: "wrap",
  },
  label: { color: "#475569", flexShrink: 0, width: 90 },
  value: { fontWeight: 700, textAlign: "right", flex: 1, maxWidth: 180 },

  pillWrap: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginTop: 4 },
  pill: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderStyle: "solid",
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 8,
    color: "#0f172a",
    backgroundColor: "#f8fafc",
  },

  section: { marginTop: 4 },
  subTitle: { fontSize: 9, fontWeight: 700, marginBottom: 4, color: "#0f172a" },
  hr: { borderBottomWidth: 1, borderBottomColor: "#e2e8f0", borderBottomStyle: "solid", marginVertical: 6 },

  footer: { marginTop: 8, fontSize: 8, color: "#64748b" },
});

export const QuotePdf = ({ data }: { data: PdfData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>WebOptim</Text>
          <Text style={styles.meta}>{data.title}</Text>
        </View>
        <View>
          <Text style={styles.meta}>{data.dateLabel}: {data.dateText}</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {/* Left: selections */}
        <View style={[styles.col, { width: "60%" }]}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{data.selectionsLabel}</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Typ dizajnu</Text>
              <Text style={styles.value}>{data.design ?? "—"}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Počet stránok</Text>
              <Text style={styles.value}>{data.pages ?? "—"}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Jazykové verzie</Text>
              <Text style={styles.value}>
                {data.languages.length ? data.languages.join(", ") : "—"}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Údržba</Text>
              <Text style={styles.value}>{data.maintenance ?? "—"}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Doména & hosting</Text>
              <Text style={styles.value}>{data.hosting ?? "—"}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Články</Text>
              <Text style={styles.value}>{data.articles ?? "—"}</Text>
            </View>

            <View style={styles.hr} />

            {/* Functionalities grouped */}
            <Text style={styles.subTitle}>Požadované funkcie</Text>
            {data.functionalitiesByCategory.length ? (
              data.functionalitiesByCategory.map((grp) => (
                <View key={grp.category} style={styles.section}>
                  <Text style={[styles.small, { fontWeight: 700 }]}>{grp.category}</Text>
                  <View style={styles.pillWrap}>
                    {grp.items.map((it) => (
                      <Text key={it} style={styles.pill}>{it}</Text>
                    ))}
                  </View>
                </View>
              ))
            ) : (
              <Text style={styles.small}>—</Text>
            )}

            <View style={styles.hr} />

            <Text style={styles.subTitle}>Marketing (jednorazovo)</Text>
            {data.marketingOneTime.length ? (
              <View style={styles.pillWrap}>
                {data.marketingOneTime.map((it) => (
                  <Text key={it} style={styles.pill}>{it}</Text>
                ))}
              </View>
            ) : (
              <Text style={styles.small}>—</Text>
            )}

            <View style={[styles.section, { marginTop: 10 }]} />
            <Text style={styles.subTitle}>Marketing (mesačne)</Text>
            {data.marketingMonthly.length ? (
              <View style={styles.pillWrap}>
                {data.marketingMonthly.map((it) => (
                  <Text key={it} style={styles.pill}>{it}</Text>
                ))}
              </View>
            ) : (
              <Text style={styles.small}>—</Text>
            )}
          </View>
        </View>

        {/* Right: totals */}
        <View style={[styles.col, { width: "38%" }]}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{data.totalsLabel}</Text>

            <Text style={styles.small}>{data.oneTimeLabel}</Text>
            <Text style={styles.bigPrice}>{data.oneTime}</Text>

            {data.afterDiscount && (
              <View style={{ marginTop: 10 }}>
                <Text style={styles.small}>{data.afterDiscountLabel}</Text>
                <Text style={[styles.bigPrice, { color: "#16a34a" }]}>{data.afterDiscount}</Text>
                {data.discountText && <Text style={styles.small}>{data.discountText}</Text>}
              </View>
            )}

            {data.monthly && (
              <View style={{ marginTop: 10 }}>
                <Text style={styles.small}>{data.monthlyLabel}</Text>
                <Text style={[styles.bigPrice, { color: "#7c3aed" }]}>{data.monthly}</Text>
              </View>
            )}

            <View style={styles.hr} />
            <Text style={styles.footer}>{data.disclaimer}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Zdieľanie</Text>
            <Text style={styles.small}>
              Tento PDF súhrn je generovaný z vašej konfigurácie v kalkulačke.
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
