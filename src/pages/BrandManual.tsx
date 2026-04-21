import { useState } from "react";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  Users,
  MessageSquare,
  Palette,
  Type,
  Image as ImageIcon,
  Layout,
  Share2,
  Trophy,
  Check,
  X,
  Printer,
  Copy,
  Download,
  ChevronRight,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { WeboptimLogo } from "@/components/brand/WeboptimLogo";

/**
 * Hidden brand manual page — not linked anywhere, noindex.
 * Access via /brand-manual.
 * Built using actual website design tokens (index.css) and copy.
 */

type Section = {
  id: string;
  title: string;
  icon: typeof Sparkles;
};

const sections: Section[] = [
  { id: "overview", title: "Brand Overview", icon: Sparkles },
  { id: "audience", title: "Audience", icon: Users },
  { id: "voice", title: "Tone of Voice", icon: MessageSquare },
  { id: "visual", title: "Visual Identity", icon: Palette },
  { id: "typography", title: "Typography", icon: Type },
  { id: "logo", title: "Logo Guidelines", icon: ImageIcon },
  { id: "imagery", title: "Photography & Imagery", icon: ImageIcon },
  { id: "ui", title: "UI / Web Design Rules", icon: Layout },
  { id: "social", title: "Social Media", icon: Share2 },
  { id: "positioning", title: "Competitor Positioning", icon: Trophy },
  { id: "quickref", title: "Quick Reference Sheet", icon: ChevronRight },
];

// Actual brand colors from src/index.css (HSL → HEX equivalents)
const brandColors = {
  primary: { name: "Cyan", hsl: "hsl(193 88% 61%)", hex: "#42C8F2", role: "Primary brand color · CTAs · highlights" },
  secondary: { name: "Brand Blue", hsl: "hsl(210 60% 55%)", hex: "#4F8DD1", role: "Secondary actions · links · accents" },
  purple: { name: "Brand Purple", hsl: "hsl(270 50% 55%)", hex: "#7B5BBF", role: "Gradient accent · glow effects" },
  pink: { name: "Magenta Accent", hsl: "hsl(320 70% 55%)", hex: "#D946A6", role: "Hero gradient end · marketing accents" },
  background: { name: "Deep Navy", hsl: "hsl(230 35% 7%)", hex: "#0B0E1A", role: "Primary background · dark canvas" },
  card: { name: "Card Surface", hsl: "hsl(230 35% 10%)", hex: "#11151F", role: "Cards · elevated surfaces" },
  muted: { name: "Muted Surface", hsl: "hsl(230 30% 15%)", hex: "#1B1F2E", role: "Inputs · borders · subtle backgrounds" },
  foreground: { name: "Off-White", hsl: "hsl(210 40% 98%)", hex: "#F8FAFC", role: "Primary text · headings" },
  mutedFg: { name: "Muted Text", hsl: "hsl(220 15% 65%)", hex: "#9BA3B5", role: "Secondary text · descriptions" },
  border: { name: "Border", hsl: "hsl(230 30% 18%)", hex: "#23283A", role: "Dividers · card borders" },
};

const Swatch = ({ name, hex, hsl, role }: { name: string; hex: string; hsl: string; role: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
      <div
        className="h-28 w-full relative"
        style={{ backgroundColor: hex }}
      >
        <button
          onClick={() => copy(hex)}
          className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/40 backdrop-blur text-xs text-white flex items-center gap-1 hover:bg-black/60 transition no-print"
        >
          <Copy className="w-3 h-3" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="p-4">
        <div className="font-display font-semibold text-foreground">{name}</div>
        <div className="font-mono text-xs text-muted-foreground mt-1">{hex.toUpperCase()}</div>
        <div className="font-mono text-xs text-muted-foreground">{hsl}</div>
        <div className="text-xs text-muted-foreground mt-2">{role}</div>
      </div>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, eyebrow, title, description }: { icon: typeof Sparkles; eyebrow: string; title: string; description?: string }) => (
  <div className="mb-10">
    <div className="flex items-center gap-2 mb-3">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium tracking-wider uppercase text-primary">
        <Icon className="w-3.5 h-3.5" />
        {eyebrow}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
      {title.split(" ").map((w, i, arr) =>
        i === arr.length - 1 ? (
          <span key={i} className="text-gradient">{w}</span>
        ) : (
          <span key={i}>{w} </span>
        )
      )}
    </h2>
    {description && (
      <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">{description}</p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass rounded-2xl p-6 hover:border-primary/30 transition-all ${className}`}>
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
    {children}
  </span>
);

// Logo paths kept verbatim from src/assets/weboptim-logo.svg — used to
// generate downloadable SVGs with arbitrary fill colors (single source of truth
// alongside the inline <WeboptimLogo /> component).
const LOGO_PATHS = [
  "M10.51 23.061C10.1444 23.0001 9.77885 22.9493 9.42342 22.8884C7.53459 22.533 5.84886 21.7409 4.33576 20.5528C4.09204 20.3598 4.08188 20.2481 4.29514 20.0247C4.49824 19.8216 4.70134 19.5982 4.92475 19.4154C5.42235 19.0092 5.84886 18.9889 6.38707 19.3342C7.10808 19.7911 7.86971 20.1872 8.69226 20.4309C11.4544 21.2738 14.0846 20.9894 16.5319 19.4459C19.0605 17.8515 20.533 15.526 20.8681 12.5506C21.1728 9.85952 20.401 7.46294 18.6137 5.41163C17.0194 3.58372 14.9985 2.5276 12.6019 2.24326C11.0076 2.05031 9.45389 2.29403 7.97126 2.90334C7.41273 3.1369 6.93544 3.04551 6.51909 2.60884C6.31599 2.39558 6.10273 2.19248 5.89963 1.98938C5.61529 1.70504 5.62545 1.61365 5.97072 1.43086C7.0573 0.852022 8.18451 0.415356 9.39296 0.202101C12.6527 -0.36658 15.6688 0.252876 18.3598 2.21279C21.0103 4.14225 22.5843 6.75209 23.0108 9.99154C23.4577 13.3021 22.6046 16.2876 20.4721 18.8772C18.5223 21.2433 15.9836 22.6041 12.9371 23.0103C12.8152 23.0306 12.6933 23.0407 12.5715 23.061C11.8911 23.061 11.2006 23.061 10.51 23.061Z",
  "M75.9899 14.2567C75.9289 14.3278 75.8782 14.409 75.8071 14.4598C75.5024 14.6629 75.1267 14.4902 75.0759 14.1247C75.0658 14.0231 75.0658 13.9216 75.0658 13.8302C75.0658 12.9061 75.0658 11.9718 75.0658 11.0477C75.0658 10.936 75.0658 10.8141 75.0455 10.7024C74.9642 10.2759 74.8119 9.90018 74.3245 9.79863C73.7558 9.68692 73.2683 9.80878 72.9129 10.2861C72.659 10.6313 72.5879 11.0274 72.5879 11.4437C72.5778 12.3069 72.5879 13.1599 72.5879 14.0231C72.5879 14.2364 72.5473 14.4192 72.3138 14.5106C71.9888 14.6324 71.7045 14.4598 71.6638 14.1145C71.6537 14.0333 71.6537 13.9419 71.6537 13.8606C71.6537 12.9365 71.6537 12.0023 71.6537 11.0782C71.6537 10.9563 71.6435 10.8344 71.6232 10.7126C71.5521 10.3165 71.4303 9.96111 70.9936 9.82909C70.5265 9.69708 70.0797 9.74785 69.6938 10.0728C69.2774 10.4384 69.1759 10.9258 69.1657 11.4437C69.1555 12.3069 69.1657 13.1599 69.1657 14.0231C69.1657 14.2262 69.1251 14.409 68.9118 14.5004C68.5869 14.6426 68.2822 14.4699 68.2416 14.1145C68.2314 14.0637 68.2314 14.0028 68.2314 13.952C68.2314 12.4999 68.2314 11.0477 68.2314 9.59553C68.2314 9.38227 68.2416 9.16902 68.4752 9.06747C68.79 8.9253 69.0946 9.09793 69.1454 9.43305C69.1657 9.55491 69.1657 9.67677 69.1759 9.85956C69.6125 9.26041 70.1711 8.98623 70.8717 9.00654C71.6029 9.01669 72.1107 9.34165 72.4153 10.0423C72.659 9.6463 72.9434 9.35181 73.3496 9.17917C73.8878 8.94561 74.426 8.94561 74.9744 9.1284C75.4212 9.28072 75.6954 9.60568 75.8477 10.0525C75.9086 10.2251 75.9493 10.4079 76 10.5806C75.9899 11.7992 75.9899 13.0279 75.9899 14.2567Z",
  "M0 11.525C0.0304651 9.70722 0.436666 7.99103 1.23891 6.36622C1.88883 5.07654 2.77232 3.94933 3.8386 2.96429C3.99092 2.82212 4.11278 2.82212 4.25495 2.96429C4.45805 3.17755 4.67131 3.37049 4.87441 3.58375C5.2603 4.00011 5.23999 4.57894 4.84394 4.9953C3.49333 6.417 2.63015 8.08242 2.31534 10.022C2.031 11.8195 2.2341 13.5661 2.95511 15.2316C3.06682 15.4854 3.14806 15.4956 3.37147 15.2722C5.372 13.2716 7.37254 11.2711 9.38324 9.28071C9.53556 9.12839 9.74882 9.01668 9.95192 8.96591C10.2261 8.89482 10.4698 9.01668 10.6729 9.21978C12.3079 10.8547 13.9428 12.4897 15.5778 14.1247C15.9231 14.4699 15.984 14.4598 16.2074 14.0231C17.0401 12.3881 17.0604 10.7532 16.248 9.11823C15.9434 8.49878 16.0043 8.10273 16.5019 7.60514C16.6948 7.41219 16.8776 7.21925 17.0706 7.03646C17.2737 6.84351 17.3651 6.84351 17.5377 7.06692C17.9642 7.6356 18.2993 8.25506 18.5532 8.91513C18.868 9.72754 19.0305 10.5704 19.0407 11.4336C19.0508 12.835 18.6954 14.1551 17.9744 15.3636C17.6291 15.9424 17.2128 16.4603 16.7253 16.9274C16.309 17.3336 15.852 17.354 15.4052 16.9884C15.3341 16.9274 15.2731 16.8665 15.2021 16.7954C13.5874 15.1808 11.9728 13.5661 10.3581 11.9616C10.0535 11.657 10.0535 11.657 9.73866 11.9718C7.65688 14.0434 5.58526 16.1252 3.50348 18.1968C3.0262 18.6741 2.42705 18.6233 2.04116 18.0546C1.02566 16.5822 0.396046 14.9472 0.14217 13.1802C0.0609301 12.6319 0.0406201 12.0733 0 11.525Z",
  "M29.4899 12.3983C29.6625 11.9514 29.8351 11.4945 29.9976 11.0476C30.1906 10.5297 30.3937 10.0118 30.5765 9.49393C30.6983 9.16897 30.9217 8.98618 31.2568 8.96587C31.6021 8.94556 31.8458 9.1385 31.9677 9.44315C32.1911 10.0017 32.3942 10.5602 32.5973 11.1289C32.7496 11.5351 32.8918 11.9413 33.034 12.3373C33.0441 12.378 33.0746 12.4186 33.1152 12.4998C33.1863 12.3373 33.2371 12.2155 33.2777 12.0835C33.5722 11.2812 33.8667 10.479 34.1612 9.68687C34.2729 9.37207 34.4151 9.07757 34.7908 8.98618C35.3493 8.84401 35.8165 9.25021 35.6438 9.80873C35.4813 10.3266 35.2579 10.8242 35.065 11.332C34.7299 12.1647 34.4049 13.0076 34.0596 13.8301C33.9784 14.0129 33.8667 14.216 33.7144 14.3277C33.166 14.7644 32.4551 14.5308 32.1708 13.8301C31.8865 13.1193 31.6123 12.3983 31.3381 11.6773C31.3178 11.6163 31.2873 11.5554 31.2365 11.4335C31.1756 11.5452 31.135 11.6163 31.1147 11.6874C30.8303 12.4287 30.5562 13.17 30.2718 13.9012C30.1093 14.3176 29.8148 14.5207 29.3985 14.5207C28.9313 14.5207 28.6369 14.3379 28.4642 13.9114C27.9463 12.642 27.4284 11.3625 26.9105 10.0931C26.8902 10.0321 26.8699 9.98137 26.8496 9.92044C26.7277 9.47362 26.8496 9.15881 27.205 9.0268C27.6721 8.85416 28.1088 9.00649 28.2814 9.433C28.5251 10.0423 28.7486 10.6516 28.972 11.2609C29.1141 11.6366 29.2563 12.0124 29.3985 12.3983C29.4391 12.3983 29.4696 12.3983 29.4899 12.3983Z",
  "M44.1336 13.7388C44.0118 14.3786 43.8087 14.5512 43.2095 14.5309C42.783 14.5207 42.4987 14.2465 42.4987 13.82C42.4987 11.6672 42.4885 9.50415 42.4987 7.35129C42.4987 6.89431 42.7525 6.65059 43.2197 6.60997C43.7173 6.5592 44.0219 6.75214 44.1235 7.19896C44.1539 7.33098 44.1641 7.47315 44.1641 7.60517C44.1641 8.28555 44.1641 8.96594 44.1641 9.66663C44.2047 9.64632 44.2352 9.64632 44.2453 9.63617C44.9257 8.76284 46.4896 8.72222 47.3324 9.48384C47.759 9.86973 48.0027 10.3572 48.1042 10.9157C48.2769 11.8703 48.2159 12.7944 47.6574 13.6372C46.9567 14.7137 45.1288 14.9168 44.2859 13.8911C44.2352 13.8505 44.1945 13.8099 44.1336 13.7388ZM46.5302 11.8093C46.4896 11.5453 46.4794 11.3422 46.4388 11.1493C46.3169 10.6009 45.9311 10.2252 45.4538 10.1947C44.8546 10.1642 44.3976 10.4283 44.2352 10.936C44.0625 11.4742 44.0625 12.0226 44.2453 12.5608C44.3875 12.9975 44.8445 13.3123 45.3014 13.3224C45.7787 13.3224 46.1951 13.0584 46.3474 12.6014C46.4388 12.3374 46.4794 12.0429 46.5302 11.8093Z",
  "M39.574 12.0934C39.0764 12.0934 38.5788 12.0934 38.071 12.0934C37.8375 12.0934 37.7968 12.1544 37.8578 12.3778C37.9898 12.8348 38.2741 13.1394 38.7413 13.2511C39.2998 13.3831 39.838 13.312 40.3661 13.1191C40.4575 13.0886 40.5387 13.048 40.6199 13.0175C40.9347 12.8957 41.2089 12.9769 41.3511 13.2206C41.4933 13.4847 41.4323 13.8604 41.1886 14.033C41.0261 14.1448 40.8434 14.2463 40.6606 14.3072C39.5943 14.683 38.528 14.6931 37.5125 14.1448C36.6696 13.6979 36.2838 12.9363 36.2127 12.0224C36.1517 11.3217 36.2939 10.6514 36.7204 10.0523C37.1774 9.41251 37.807 9.05709 38.5686 8.96569C39.2389 8.89461 39.8888 8.95554 40.4676 9.36174C41.1074 9.81871 41.412 10.4483 41.5136 11.21C41.5237 11.3318 41.5339 11.4537 41.5441 11.5755C41.5644 11.8903 41.4019 12.0833 41.0871 12.0833C40.5895 12.0934 40.0817 12.0934 39.574 12.0934ZM38.9748 11.2607C39.2896 11.2607 39.6044 11.2607 39.9192 11.2607C39.9396 11.2607 39.9497 11.2709 39.9599 11.2607C40.0208 11.2201 40.1325 11.1896 40.1325 11.1389C40.1833 10.7834 39.8685 10.2554 39.5232 10.1437C38.7819 9.91011 38.0913 10.1335 37.8476 10.9865C37.7867 11.1896 37.8375 11.2506 38.0507 11.2607C38.3655 11.2607 38.6702 11.2607 38.9748 11.2607Z",
  "M56.3907 9.83908C56.5633 9.6766 56.6954 9.53443 56.8477 9.41257C57.7007 8.72202 59.4677 8.80326 60.1887 10.164C60.6964 11.1288 60.6964 12.8348 59.9246 13.7488C59.5286 14.226 59.0107 14.5002 58.3912 14.5307C57.457 14.5612 57.264 14.4799 56.3806 13.6878C56.3806 13.7995 56.3806 13.8808 56.3806 13.962C56.3806 14.6221 56.3806 15.2822 56.3806 15.9422C56.3806 16.3281 56.2079 16.5109 55.8931 16.5109C55.6494 16.5109 55.4869 16.3688 55.4564 16.125C55.4463 16.0539 55.4463 15.9727 55.4463 15.8915C55.4463 13.7995 55.4463 11.7178 55.4463 9.62582C55.4463 9.55474 55.4463 9.48365 55.4463 9.42272C55.4666 9.179 55.6189 9.02668 55.8626 9.01652C56.0962 9.00637 56.279 9.14854 56.3298 9.37195C56.3501 9.44303 56.3602 9.52427 56.3704 9.59536C56.3805 9.66644 56.3805 9.74768 56.3907 9.83908ZM59.6098 11.667C59.5794 11.4842 59.5794 11.1897 59.4778 10.9257C59.3661 10.6312 59.2138 10.3164 58.9904 10.1133C58.1069 9.35164 56.8172 9.74768 56.4719 10.8546C56.279 11.4842 56.279 12.1138 56.4923 12.7333C56.6852 13.3019 57.0812 13.6878 57.7007 13.7691C58.3608 13.8503 58.9193 13.6878 59.295 13.0785C59.5388 12.6825 59.5794 12.2357 59.6098 11.667Z",
  "M49.0385 11.7381C49.008 11.2202 49.1197 10.7124 49.3634 10.2453C49.7595 9.51412 50.3891 9.10792 51.2015 9.01652C52.0545 8.91497 52.8263 9.09776 53.4356 9.73753C53.8012 10.1234 54.0043 10.5906 54.0855 11.1085C54.2277 11.9818 54.1566 12.8145 53.6285 13.5558C53.1919 14.1753 52.5724 14.4901 51.8108 14.5307C51.1913 14.5612 50.6023 14.4901 50.0743 14.1143C49.3939 13.6269 49.0994 12.9262 49.0283 12.124C49.0283 12.0021 49.0385 11.8802 49.0385 11.7381ZM53.2325 11.8396C53.1817 11.4842 53.1614 11.1694 53.0802 10.8749C52.8974 10.1844 52.3389 9.75784 51.6382 9.73753C50.8867 9.71722 50.3079 10.1031 50.0946 10.7937C49.9017 11.4334 49.8915 12.0833 50.0946 12.7231C50.2977 13.3629 50.8359 13.7691 51.4452 13.7894C52.2576 13.8097 52.7857 13.4949 53.0294 12.7942C53.1411 12.4794 53.1716 12.1341 53.2325 11.8396Z",
  "M62.9307 11.3523C62.9307 11.7687 62.9206 12.1851 62.9307 12.5913C62.9612 13.4849 63.4689 13.8809 64.3423 13.7286C64.3626 13.7286 64.3829 13.7185 64.4134 13.7083C64.7078 13.6474 64.8196 13.6982 64.8703 13.9013C64.9313 14.145 64.8196 14.3887 64.5758 14.4395C63.7939 14.6121 63.0424 14.6324 62.4433 13.9825C62.0777 13.5865 62.0168 13.0889 62.0066 12.5913C61.9965 11.7789 62.0066 10.9665 62.0066 10.1541C62.0066 9.83925 61.9965 9.83925 61.6817 9.8291C61.5293 9.8291 61.377 9.8291 61.2247 9.80879C61.0013 9.77832 60.8997 9.63615 60.9099 9.43305C60.92 9.2198 61.0622 9.11825 61.2551 9.09794C61.4278 9.07763 61.6106 9.08778 61.7832 9.08778C61.9457 9.09794 62.0168 9.02685 62.0168 8.85421C62.0066 8.5191 62.0066 8.19414 62.0168 7.85902C62.0269 7.52391 62.1894 7.37158 62.5042 7.37158C62.7886 7.37158 62.9307 7.5036 62.9409 7.79809C62.951 8.12305 62.951 8.45817 62.9409 8.79328C62.9307 9.00654 63.0018 9.09794 63.2252 9.08778C63.5806 9.07763 63.9361 9.07763 64.2813 9.08778C64.5657 9.08778 64.6774 9.17918 64.6875 9.41274C64.6977 9.66662 64.5758 9.80879 64.2915 9.81894C63.9259 9.83925 63.5502 9.8291 63.1846 9.8291C63.0018 9.8291 62.9206 9.89003 62.9307 10.083C62.9409 10.5095 62.9307 10.9258 62.9307 11.3523Z",
  "M65.6924 11.7787C65.6924 11.0273 65.6924 10.2758 65.6924 9.52433C65.6924 9.1689 65.8853 9.00642 66.2408 9.0572C66.4134 9.08766 66.5454 9.17906 66.5759 9.36185C66.5962 9.48371 66.6165 9.60557 66.6165 9.72743C66.6165 11.1085 66.6165 12.4896 66.6165 13.8707C66.6165 13.9519 66.6165 14.0433 66.5962 14.1246C66.5454 14.3987 66.3829 14.5206 66.0884 14.5003C65.8244 14.48 65.6924 14.348 65.6924 14.0636C65.6924 13.2918 65.6924 12.5302 65.6924 11.7787Z",
  "M66.1398 6.74194C66.5358 6.74194 66.7389 6.92473 66.7389 7.28016C66.7389 7.63558 66.5155 7.84884 66.1398 7.859C65.764 7.859 65.5508 7.64574 65.5508 7.28016C65.5609 6.89427 65.7234 6.74194 66.1398 6.74194Z",
];

const downloadLogoSvg = (color: string, filename: string) => {
  const paths = LOGO_PATHS.map((d) => `<path d="${d}" fill="${color}"/>`).join("");
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="76" height="24" viewBox="0 0 76 24" fill="none">${paths}</svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const BrandManual = () => {
  const handlePrint = () => window.print();

  return (
    <>
      <SEO
        title="WebOptim — Brand Manual"
        description="Internal brand manual"
        noindex
      />

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          section { break-inside: avoid; }
        }
      `}</style>

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-purple-500/15 blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 py-20 md:py-28">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Brand Manual · v1.0 · 2025
              </span>
              <span className="no-print inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive border border-destructive/20">
                Internal · Not Indexed
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient">WebOptim</span>
              <br />
              Brand Guidelines
            </h1>

            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed mb-10">
              The single source of truth for how WebOptim looks, sounds and behaves —
              across every website, ad, deck and social post.
            </p>

            <div className="flex flex-wrap gap-3 no-print">
              <Button onClick={handlePrint} size="lg" className="gap-2">
                <Printer className="w-4 h-4" />
                Print / Save as PDF
              </Button>
              <a href="#overview">
                <Button variant="outline" size="lg" className="gap-2">
                  Start reading <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* TOC */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {sections.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="glass rounded-xl p-3 flex items-center gap-3 hover:border-primary/40 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-sm">
                      <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                      <div className="font-medium text-foreground leading-tight">{s.title}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-20 space-y-32">
          {/* 1. BRAND OVERVIEW */}
          <section id="overview">
            <SectionHeader
              icon={Sparkles}
              eyebrow="01 · Foundation"
              title="Brand Overview"
              description="Who we are, why we exist, and how we show up. Every piece of communication should ladder back to these foundations."
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help ambitious businesses win online — through fast, beautifully engineered
                  websites, e-shops and digital growth that actually convert. We replace agency
                  bloat with senior craft, measurable results and zero friction.
                </p>
              </Card>

              <Card>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted digital partner for SMEs across Central Europe —
                  the studio teams call when their website has to perform, not just look pretty.
                </p>
              </Card>

              <Card className="md:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">Core Values</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { t: "Speed", d: "Fast delivery, fast websites, fast replies. Time is the real currency." },
                    { t: "Craft", d: "Senior-level execution. No juniors learning on the client's dime." },
                    { t: "Transparency", d: "Clear pricing, honest timelines, no jargon used to inflate scope." },
                    { t: "Results", d: "We measure what matters: conversions, revenue, organic growth." },
                  ].map((v) => (
                    <div key={v.t} className="rounded-xl border border-border/60 bg-muted/30 p-4">
                      <div className="font-display font-semibold text-foreground mb-1">{v.t}</div>
                      <div className="text-sm text-muted-foreground">{v.d}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-display font-semibold mb-4">Brand Personality</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Confident", "Pragmatic", "Modern", "Direct", "Helpful", "Senior", "Future-forward"].map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We sound like a senior consultant — not an over-eager intern, not a corporate brochure.
                  We are calm, technical, and slightly bold. We use modern visuals (glassmorphism,
                  glowing gradients) because we build for clients who want to look ahead, not behind.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-display font-semibold mb-4">Unique Selling Proposition</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">"Premium websites without the agency tax."</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Senior team, no account-manager middlemen",
                    "Multi-domain, multi-language ready (EU/CZ/SK)",
                    "Performance-first stack (React, edge, real Core Web Vitals scores)",
                    "Transparent pricing via live online configurator",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* 2. AUDIENCE */}
          <section id="audience">
            <SectionHeader
              icon={Users}
              eyebrow="02 · People"
              title="Audience"
              description="We don't talk to everyone. Knowing exactly who we serve makes our copy sharper and our design more decisive."
            />

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: "The Ambitious Founder",
                  age: "30–45",
                  role: "Owner / CEO of a 5–50 person company",
                  quote: "I need a website that sells, not just exists.",
                  goals: ["Generate qualified leads", "Look as serious as bigger competitors", "Stop losing deals to a bad first impression"],
                },
                {
                  name: "The In-house Marketer",
                  age: "28–40",
                  role: "Marketing Manager / Head of Growth",
                  quote: "I need a partner who can keep up with my campaigns.",
                  goals: ["Faster landing pages for paid ads", "SEO that compounds", "A dev team that ships in days, not months"],
                },
                {
                  name: "The E-commerce Operator",
                  age: "25–50",
                  role: "Shop owner scaling beyond template platforms",
                  quote: "My platform is the bottleneck.",
                  goals: ["Higher conversion rate", "Better mobile UX", "Custom features without enterprise prices"],
                },
              ].map((p) => (
                <Card key={p.name}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                      {p.name.split(" ").slice(-1)[0][0]}
                    </div>
                    <div>
                      <div className="font-display font-semibold">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.age} · {p.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/40 pl-3 mb-4">
                    "{p.quote}"
                  </blockquote>
                  <div className="text-xs uppercase tracking-wider text-primary mb-2 font-medium">Top goals</div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {p.goals.map((g) => (
                      <li key={g} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <h3 className="font-display font-semibold mb-3 text-foreground">Pain Points</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Slow, outdated websites that leak conversions",
                    "Agencies that overpromise and underdeliver",
                    "Hidden costs and never-ending change requests",
                    "No clarity on what's actually being built",
                    "DIY tools that hit a wall once they grow",
                  ].map((x) => <li key={x} className="flex gap-2"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
              <Card>
                <h3 className="font-display font-semibold mb-3 text-foreground">Desired Outcomes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "A site that loads instantly and ranks",
                    "More qualified leads in the inbox",
                    "Higher conversion rate from existing traffic",
                    "A brand presence that matches their ambition",
                    "A long-term partner, not a one-off vendor",
                  ].map((x) => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
              <Card>
                <h3 className="font-display font-semibold mb-3 text-foreground">Buying Motivations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Trust — visible portfolio, real reviews, named team",
                    "Speed — clear timeline, fast first reply",
                    "Transparency — live configurator, fixed quotes",
                    "Expertise — senior craft visible on the site itself",
                    "ROI proof — measurable case studies",
                  ].map((x) => <li key={x} className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
            </div>
          </section>

          {/* 3. TONE OF VOICE */}
          <section id="voice">
            <SectionHeader
              icon={MessageSquare}
              eyebrow="03 · Voice"
              title="Tone of Voice"
              description="How WebOptim sounds in writing — from website headlines to support emails."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { t: "Communication style", d: "Direct, confident, helpful. We lead with the outcome, then explain the how. We never bury the value under buzzwords." },
                { t: "Vocabulary style", d: "Modern, slightly technical, plain-spoken. Use real terms (Core Web Vitals, conversion rate, edge hosting) — explain them only when needed. No corporate fluff (synergy, leverage, holistic)." },
                { t: "Sentence style", d: "Short and rhythmic. Mix punchy 4-word lines with longer explanations. Active voice. One idea per sentence." },
                { t: "Emotional tone", d: "Calm confidence with a spark of excitement. We're the senior pro who has seen it all — but still genuinely loves shipping great work." },
              ].map((x) => (
                <Card key={x.t}>
                  <h3 className="font-display font-semibold text-foreground mb-2">{x.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-primary/20">
                <h3 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Do
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Lead with results: "Faster sites. More conversions."',
                    "Use specific numbers (3x, 90+ PageSpeed, 14 days)",
                    "Address the reader as 'you'",
                    "Keep CTAs verb-led: 'Get your quote', 'See our work'",
                    "Use Slovak/Czech idioms naturally — never machine-translated",
                  ].map((x) => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
              <Card className="border-destructive/20">
                <h3 className="font-display font-semibold text-destructive mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> Don't
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Don't say 'world-class', 'best-in-class', 'cutting-edge'",
                    "Don't use exclamation marks to fake enthusiasm!!!",
                    "Don't use AI-sounding phrases ('In today's digital landscape…')",
                    "Don't speak about ourselves in third person on the site",
                    "Don't promise what we can't measure",
                  ].map((x) => <li key={x} className="flex gap-2"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-4">Example headlines & CTAs</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-primary font-medium">Headlines</div>
                  {[
                    "Premium websites. Without the agency tax.",
                    "Your website should sell — not just exist.",
                    "From idea to launch in 14 days.",
                    "Built for speed. Engineered for conversions.",
                  ].map((x) => (
                    <div key={x} className="rounded-lg border border-border bg-muted/30 p-3 font-display text-foreground">
                      {x}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-primary font-medium">CTAs</div>
                  {[
                    "Get your free quote",
                    "See our work",
                    "Start your project",
                    "Calculate your price",
                  ].map((x) => (
                    <div key={x} className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-sm text-foreground">
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          {/* 4. VISUAL IDENTITY — COLORS */}
          <section id="visual">
            <SectionHeader
              icon={Palette}
              eyebrow="04 · Visual"
              title="Visual Identity — Colors"
              description="The exact palette pulled from our live design tokens. Always use HSL variables in code; HEX is for external tools (Figma, print, ads)."
            />

            <div className="mb-6">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Primary</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.primary} />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Secondary & Accents</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.secondary} />
                <Swatch {...brandColors.purple} />
                <Swatch {...brandColors.pink} />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Surfaces</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.background} />
                <Swatch {...brandColors.card} />
                <Swatch {...brandColors.muted} />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Text & Borders</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.foreground} />
                <Swatch {...brandColors.mutedFg} />
                <Swatch {...brandColors.border} />
              </div>
            </div>

            {/* Gradients */}
            <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Signature Gradients</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="overflow-hidden p-0">
                <div className="h-32 bg-gradient-hero" />
                <div className="p-4">
                  <div className="font-display font-semibold">Hero Gradient</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    linear-gradient(135deg, #42C8F2 → #5B9BFF → #9B7BFF → #D946A6)
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Hero buttons · key brand moments · marketing artwork</div>
                </div>
              </Card>
              <Card className="overflow-hidden p-0">
                <div className="h-32 bg-gradient-primary" />
                <div className="p-4">
                  <div className="font-display font-semibold">Primary Gradient</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    linear-gradient(135deg, #42C8F2 → #4F8DD1)
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Text gradients · icon backgrounds · subtle CTAs</div>
                </div>
              </Card>
            </div>
          </section>

          {/* 5. TYPOGRAPHY */}
          <section id="typography">
            <SectionHeader
              icon={Type}
              eyebrow="05 · Typography"
              title="Typography System"
              description="Two fonts. Clear hierarchy. Loaded with display=swap for performance."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Display font</div>
                <div className="font-display text-5xl mb-2">Outfit</div>
                <div className="text-sm text-muted-foreground">
                  All headings (H1–H6) · hero copy · large numbers. Modern geometric sans, slightly rounded.
                </div>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Body font</div>
                <div className="font-body text-5xl mb-2">Space Grotesk</div>
                <div className="text-sm text-muted-foreground">
                  Body copy · UI labels · small print. Distinctive but highly legible at small sizes.
                </div>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-6">Type scale</h3>
              <div className="space-y-4">
                {[
                  { tag: "H1", size: "text-5xl md:text-7xl", weight: "font-bold", sample: "Premium websites." },
                  { tag: "H2", size: "text-3xl md:text-4xl", weight: "font-bold", sample: "What we build" },
                  { tag: "H3", size: "text-2xl", weight: "font-semibold", sample: "Service title" },
                  { tag: "H4", size: "text-xl", weight: "font-semibold", sample: "Card heading" },
                  { tag: "Body L", size: "text-lg", weight: "font-normal font-body", sample: "Long-form paragraph copy on services and case studies." },
                  { tag: "Body", size: "text-base", weight: "font-normal font-body", sample: "Default paragraph text — the workhorse for almost everything." },
                  { tag: "Small", size: "text-sm", weight: "font-normal font-body", sample: "Captions, labels, secondary information." },
                  { tag: "Button", size: "text-sm", weight: "font-medium font-body", sample: "GET YOUR QUOTE" },
                ].map((row) => (
                  <div key={row.tag} className="grid grid-cols-12 gap-4 items-baseline border-b border-border/50 pb-3">
                    <div className="col-span-2 text-xs text-muted-foreground uppercase tracking-wider">{row.tag}</div>
                    <div className={`col-span-10 font-display ${row.size} ${row.weight} text-foreground`}>{row.sample}</div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* 6. LOGO */}
          <section id="logo">
            <SectionHeader
              icon={ImageIcon}
              eyebrow="06 · Logo"
              title="Logo Guidelines"
              description="The WebOptim mark is a single inline SVG using currentColor. Variations are produced via CSS — no separate files needed. Always preserve clear space, contrast and proportions."
            />

            {/* Logo variations grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                {
                  label: "Primary — White",
                  desc: "Default usage on dark or branded backgrounds.",
                  bg: "bg-background border border-border",
                  color: "text-foreground",
                  filename: "weboptim-logo-white.svg",
                  hex: "#F8FAFC",
                },
                {
                  label: "Inverted — Black",
                  desc: "On light, neutral backgrounds and print materials.",
                  bg: "bg-foreground",
                  color: "text-background",
                  filename: "weboptim-logo-black.svg",
                  hex: "#0B0E1A",
                },
                {
                  label: "Brand — Cyan",
                  desc: "Accent variant for hero moments and feature highlights.",
                  bg: "bg-background border border-border",
                  color: "text-primary",
                  filename: "weboptim-logo-cyan.svg",
                  hex: "#42C8F2",
                },
                {
                  label: "Monochrome — Muted",
                  desc: "Low-emphasis placements: footers, signatures, watermarks.",
                  bg: "bg-muted border border-border",
                  color: "text-muted-foreground",
                  filename: "weboptim-logo-muted.svg",
                  hex: "#9BA3B5",
                },
              ].map((v) => (
                <Card key={v.label} className="!p-0 overflow-hidden flex flex-col">
                  <div className={`h-40 flex items-center justify-center p-8 ${v.bg}`}>
                    <WeboptimLogo className={`h-10 w-auto ${v.color}`} />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs uppercase tracking-wider text-primary font-medium mb-1">{v.label}</div>
                    <div className="font-mono text-xs text-muted-foreground mb-2">{v.hex}</div>
                    <p className="text-sm text-muted-foreground flex-1">{v.desc}</p>
                    <button
                      onClick={() => downloadLogoSvg(v.hex, v.filename)}
                      className="no-print mt-4 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 text-xs font-medium text-primary transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download SVG
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Background variants */}
            <h3 className="text-xs uppercase tracking-wider text-primary font-medium mb-3">Background variants</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <Card className="!p-0 overflow-hidden">
                <div className="h-32 bg-foreground flex items-center justify-center p-6">
                  <WeboptimLogo className="h-8 w-auto text-background" />
                </div>
                <div className="p-4 text-xs text-muted-foreground">Light surface</div>
              </Card>
              <Card className="!p-0 overflow-hidden">
                <div className="h-32 bg-background flex items-center justify-center p-6">
                  <WeboptimLogo className="h-8 w-auto text-foreground" />
                </div>
                <div className="p-4 text-xs text-muted-foreground">Dark surface</div>
              </Card>
              <Card className="!p-0 overflow-hidden">
                <div className="h-32 bg-gradient-hero flex items-center justify-center p-6">
                  <WeboptimLogo className="h-8 w-auto text-foreground" />
                </div>
                <div className="p-4 text-xs text-muted-foreground">Brand gradient</div>
              </Card>
              <Card className="!p-0 overflow-hidden">
                <div className="h-32 bg-primary flex items-center justify-center p-6">
                  <WeboptimLogo className="h-8 w-auto text-background" />
                </div>
                <div className="p-4 text-xs text-muted-foreground">Brand cyan</div>
              </Card>
            </div>

            {/* Clear space + minimum size */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-3">Safe space</div>
                <div className="rounded-xl bg-background border border-border h-44 flex items-center justify-center p-6">
                  <div className="relative">
                    <div className="absolute -inset-6 border border-dashed border-primary/40 rounded-md pointer-events-none" />
                    <WeboptimLogo className="h-10 w-auto text-foreground" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Minimum clear space (<span className="font-mono">x</span>) on all sides equals the height of the symbol.
                </p>
              </Card>

              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-3">Minimum size</div>
                <div className="rounded-xl bg-background border border-border h-44 flex items-end justify-around p-6">
                  <div className="flex flex-col items-center gap-2">
                    <WeboptimLogo className="h-3 w-auto text-foreground" />
                    <span className="text-[10px] font-mono text-muted-foreground">12px · favicon</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <WeboptimLogo className="h-6 w-auto text-foreground" />
                    <span className="text-[10px] font-mono text-muted-foreground">24px · digital min</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <WeboptimLogo className="h-10 w-auto text-foreground" />
                    <span className="text-[10px] font-mono text-muted-foreground">40px · default</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Never reproduce the wordmark below 24&nbsp;px height in digital, or 8&nbsp;mm in print.
                </p>
              </Card>
            </div>

            {/* Do / Don't */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <h3 className="font-display font-semibold text-primary mb-3 flex items-center gap-2"><Check className="w-5 h-5" /> Correct usage</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use the original SVG and recolor via CSS <span className="font-mono">currentColor</span></li>
                  <li>• Maintain the safe space equal to the symbol height</li>
                  <li>• Use white on dark, black on light, cyan only as accent</li>
                  <li>• Keep the logo at minimum 24&nbsp;px height in digital</li>
                </ul>
              </Card>
              <Card className="border-destructive/20">
                <h3 className="font-display font-semibold text-destructive mb-3 flex items-center gap-2"><X className="w-5 h-5" /> Incorrect usage</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Don't recolor outside the brand palette</li>
                  <li>• Don't add shadows, strokes, glows or 3D effects</li>
                  <li>• Don't stretch, skew, rotate or distort the proportions</li>
                  <li>• Don't place over busy photos without a solid backdrop</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* 7. IMAGERY */}
          <section id="imagery">
            <SectionHeader
              icon={ImageIcon}
              eyebrow="07 · Imagery"
              title="Photography & Imagery Style"
              description="Our visual world is digital-first: glowing gradients, glass surfaces, abstract shapes — humans only when they earn the moment."
            />

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <div className="h-32 rounded-lg bg-gradient-hero mb-4" />
                <h3 className="font-display font-semibold mb-2">Abstract & Atmospheric</h3>
                <p className="text-sm text-muted-foreground">Glowing orbs, soft gradients, blurred light. Used as backgrounds and hero artwork.</p>
              </Card>
              <Card>
                <div className="h-32 rounded-lg glass border border-primary/20 mb-4 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Glassmorphism UI</h3>
                <p className="text-sm text-muted-foreground">Translucent cards over rich backgrounds. Real product UI screenshots when available.</p>
              </Card>
              <Card>
                <div className="h-32 rounded-lg bg-muted border border-border mb-4 flex items-center justify-center text-muted-foreground text-sm">
                  Editorial portrait
                </div>
                <h3 className="font-display font-semibold mb-2">Real People</h3>
                <p className="text-sm text-muted-foreground">Only the actual team. Natural light, neutral backdrops, no stock smiles.</p>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-4">Mood, lighting & framing</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Mood</div>
                  Premium · futuristic · calm. Never cheerful-stock or corporate-handshake.
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Lighting</div>
                  Cool, blueish highlights. Soft glows. Deep shadows. Never harsh flash.
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Framing</div>
                  Generous negative space. Hero subject off-center. Layered depth.
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Product images</div>
                  Real device mockups (laptop / phone) with subtle perspective and brand-tinted glow.
                </div>
              </div>
            </Card>
          </section>

          {/* 8. UI / WEB DESIGN RULES */}
          <section id="ui">
            <SectionHeader
              icon={Layout}
              eyebrow="08 · UI"
              title="UI / Web Design Rules"
              description="The components and spacing primitives every page must respect."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Buttons */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Buttons</h3>
                <div className="space-y-3">
                  <Button className="w-full">Default — Primary action</Button>
                  <Button variant="hero" className="w-full">Hero — Marketing CTA</Button>
                  <Button variant="outline" className="w-full">Outline — Secondary</Button>
                  <Button variant="ghost" className="w-full">Ghost — Tertiary</Button>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Sizes: <span className="font-mono">sm · default · lg · xl</span> · Always rounded-lg or larger.
                </div>
              </Card>

              {/* Forms */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Forms</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Tell us about your project…"
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="text-xs text-muted-foreground">
                    Always include explicit success modal · Anti-spam delay 3s · Labels above fields.
                  </div>
                </div>
              </Card>

              {/* Cards */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Cards</h3>
                <div className="space-y-3">
                  <div className="glass rounded-2xl p-4">
                    <div className="text-sm font-display font-semibold">Glass card (default)</div>
                    <div className="text-xs text-muted-foreground">bg-card/50 · backdrop-blur-xl · border-border/50</div>
                  </div>
                  <div className="rounded-2xl bg-card border border-border p-4">
                    <div className="text-sm font-display font-semibold">Solid card</div>
                    <div className="text-xs text-muted-foreground">bg-card · border-border</div>
                  </div>
                </div>
              </Card>

              {/* Tokens */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Tokens</h3>
                <ul className="text-sm text-muted-foreground space-y-2 font-mono">
                  <li>radius: <span className="text-foreground">0.75rem</span> (sm/md/lg derived)</li>
                  <li>shadow-card: <span className="text-foreground">0 8px 32px rgba(0,0,0,.5)</span></li>
                  <li>shadow-glow: <span className="text-foreground">0 0 40px hsl(193 88% 61% / .4)</span></li>
                  <li>section py: <span className="text-foreground">py-20 md:py-28</span></li>
                  <li>container px: <span className="text-foreground">px-6 · max-w-7xl</span></li>
                </ul>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-4">Spacing system</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {[1, 2, 3, 4, 6, 8, 12, 16].map((n) => (
                  <div key={n} className="text-center">
                    <div
                      className="bg-primary/30 border border-primary/40 rounded mb-2 mx-auto"
                      style={{ width: `${n * 4}px`, height: `${n * 4}px` }}
                    />
                    <div className="text-xs text-muted-foreground font-mono">{n * 4}px</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Tailwind 4px base. Most components use 4 · 6 · 8 · 16 · 24. Sections always use 80–112px vertical rhythm.
              </div>
            </Card>
          </section>

          {/* 9. SOCIAL */}
          <section id="social">
            <SectionHeader
              icon={Share2}
              eyebrow="09 · Social"
              title="Social Media Guidelines"
              description="Channel-specific tone — same voice, different volume."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  ch: "Instagram",
                  tone: "Visual & aspirational",
                  body: "Showcase the craft. Big visuals, before/after of websites, behind-the-scenes from the studio. Captions short and punchy with 1–2 emoji max.",
                },
                {
                  ch: "Facebook",
                  tone: "Informative & local",
                  body: "Longer-form posts about projects, milestones, and Czech/Slovak market insights. Plain language, conversational. Avoid hashtags.",
                },
                {
                  ch: "LinkedIn",
                  tone: "Professional & expert",
                  body: "Case studies with real numbers, lessons learned, hiring posts. First-person from the team. No motivational fluff.",
                },
              ].map((c) => (
                <Card key={c.ch}>
                  <h3 className="font-display font-semibold text-foreground mb-2">{c.ch}</h3>
                  <Pill>{c.tone}</Pill>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.body}</p>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-3">Ad creative style</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Dark background + signature gradient orb</li>
                  <li>• Headline in Outfit Bold, max 6 words</li>
                  <li>• One clear CTA button (Primary or Hero variant)</li>
                  <li>• Logo bottom-left, small but legible</li>
                  <li>• Real screenshot of the product when relevant</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-3">Caption style</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Hook in the first line — no warm-up</li>
                  <li>• Sentence case, not Title Case</li>
                  <li>• Numbers as digits ("3x", not "three times")</li>
                  <li>• End with a clear next step or question</li>
                  <li>• Sk/Cz captions feel native — no Google-translate vibe</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* 10. POSITIONING */}
          <section id="positioning">
            <SectionHeader
              icon={Trophy}
              eyebrow="10 · Positioning"
              title="Competitor Positioning"
              description="Where WebOptim sits in the market — and why people choose us over everyone else."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Premium without being pricey</div>
                <p className="text-sm text-muted-foreground">
                  We sit above DIY tools (Wix, Webflow templates) and freelancers — but well below
                  traditional agencies in cost. Our website itself is the proof: senior craft visible
                  in every interaction.
                </p>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Trusted, not hyped</div>
                <p className="text-sm text-muted-foreground">
                  Real Google reviews on the homepage. Named team. Multi-domain presence
                  (.eu / .cz / .sk). Transparent live pricing. Trust comes from showing, not telling.
                </p>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Modern, not trendy</div>
                <p className="text-sm text-muted-foreground">
                  Glassmorphism, gradient orbs and animated borders signal that we build for
                  what's next — not what was hot in 2018. But we never sacrifice clarity for
                  visual gimmicks.
                </p>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Expert, not mysterious</div>
                <p className="text-sm text-muted-foreground">
                  We share knowledge openly — blog, glossary, FAQ, free price calculator.
                  The more clients understand, the better they buy.
                </p>
              </Card>
            </div>
          </section>

          {/* 11. QUICK REFERENCE */}
          <section id="quickref">
            <SectionHeader
              icon={ChevronRight}
              eyebrow="11 · Cheat Sheet"
              title="One-Page Quick Reference"
              description="Print this. Pin it. Live by it."
            />

            <Card className="!p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Mission</div>
                  <p className="text-sm text-muted-foreground mb-6">Premium websites that actually convert — without the agency tax.</p>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Voice in 5 words</div>
                  <p className="text-sm text-foreground mb-6">Confident · direct · modern · helpful · senior.</p>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Always</div>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>✓ Lead with the outcome</li>
                    <li>✓ Use real numbers</li>
                    <li>✓ Verb-led CTAs</li>
                    <li>✓ Dark theme by default</li>
                    <li>✓ HSL tokens in code</li>
                  </ul>

                  <div className="text-xs uppercase tracking-wider text-destructive font-medium mb-2">Never</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✗ Buzzwords or AI clichés</li>
                    <li>✗ Stock corporate photography</li>
                    <li>✗ Hard-coded colors in components</li>
                    <li>✗ Toast-only success feedback</li>
                  </ul>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Colors</div>
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {[brandColors.primary, brandColors.secondary, brandColors.purple, brandColors.pink].map((c) => (
                      <div key={c.hex}>
                        <div className="h-12 rounded-lg" style={{ backgroundColor: c.hex }} />
                        <div className="font-mono text-[10px] text-muted-foreground mt-1">{c.hex}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Type</div>
                  <div className="mb-6">
                    <div className="font-display font-bold text-2xl">Outfit — headlines</div>
                    <div className="font-body text-base text-muted-foreground">Space Grotesk — body</div>
                  </div>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Signature CTA</div>
                  <Button variant="hero" size="lg" className="mb-2">Get your free quote</Button>
                  <div className="text-xs text-muted-foreground">Hero gradient · Outfit semibold · rounded-lg</div>
                </div>
              </div>
            </Card>

            <div className="text-center mt-12 text-sm text-muted-foreground">
              WebOptim Brand Manual v1.0 · 2025 · Built from <span className="font-mono text-foreground">weboptim.eu / .cz / .sk</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BrandManual;
