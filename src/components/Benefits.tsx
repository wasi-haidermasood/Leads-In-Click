import {
  BarChart3,
  Check,
  Layers,
  Minus,
  Palette,
  ShieldCheck,
  UserCheck,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Accent, Reveal, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

type Benefit = { icon: LucideIcon; title: string; text: string };

const BENEFITS: Benefit[] = [
  {
    icon: Layers,
    title: "Everything under one roof",
    text: "Website, ads, social media and GMB managed by one integrated team — one strategy, zero coordination headaches.",
  },
  {
    icon: Zap,
    title: "Leads in real time",
    text: "Every enquiry lands on your WhatsApp within seconds, so you respond while the customer is still hot.",
  },
  {
    icon: UserCheck,
    title: "A manager who knows your name",
    text: "One dedicated growth manager who understands your business, picks up your calls and owns your results.",
  },
  {
    icon: BarChart3,
    title: "Reports you'll actually read",
    text: "Clear weekly dashboards — spend, leads, cost per lead, revenue. Full transparency, no jargon, no hiding.",
  },
  {
    icon: Palette,
    title: "Creatives done for you",
    text: "Ad designs, reels, copywriting and landing pages — produced in-house and included in your plan.",
  },
  {
    icon: ShieldCheck,
    title: "No lock-in. Ever.",
    text: "Month-to-month plans. We earn your business every 30 days with performance — not paperwork.",
  },
];

type Mark = "yes" | "no" | "mid";

const ROWS: { label: string; click: Mark; agency: Mark; freelancer: Mark }[] = [
  {
    label: "Dedicated growth manager",
    click: "yes",
    agency: "no",
    freelancer: "no",
  },
  {
    label: "Real-time WhatsApp lead alerts",
    click: "yes",
    agency: "no",
    freelancer: "mid",
  },
  {
    label: "Ad creatives & copy included",
    click: "yes",
    agency: "mid",
    freelancer: "no",
  },
  {
    label: "Transparent ROI reporting",
    click: "yes",
    agency: "mid",
    freelancer: "no",
  },
  {
    label: "Website + Ads + GMB in one place",
    click: "yes",
    agency: "mid",
    freelancer: "no",
  },
  {
    label: "No long-term lock-in contract",
    click: "yes",
    agency: "no",
    freelancer: "yes",
  },
  {
    label: "Campaigns live within 7 days",
    click: "yes",
    agency: "no",
    freelancer: "mid",
  },
];

// Made the icons slightly smaller on mobile to fit the table naturally
function MarkIcon({
  mark,
  highlight = false,
}: {
  mark: Mark;
  highlight?: boolean;
}) {
  if (mark === "yes") {
    return (
      <span
        className={cn(
          "inline-grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full",
          highlight ? "bg-brand text-black" : "bg-white/[0.08] text-zinc-300",
        )}
      >
        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (mark === "mid") {
    return (
      <span className="inline-grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full bg-white/[0.05] text-amber-300">
        <Minus className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} />
        <span className="sr-only">Sometimes / extra cost</span>
      </span>
    );
  }
  return (
    <span className="inline-grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full bg-white/[0.04] text-zinc-600">
      <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} />
      <span className="sr-only">Not included</span>
    </span>
  );
}

export default function Benefits() {
  return (
    <section
      id="why-us"
      className="relative w-full max-w-[100vw] overflow-hidden scroll-mt-20 py-24 sm:py-32"
      aria-labelledby="why-title"
    >
      {/* Wrapper to prevent background glow from causing horizontal scroll */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -right-52 bottom-0 h-[440px] w-[440px] rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: "radial-gradient(closest-side, #b8f135, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Leads In click"
          title={
            <>
              An agency built like a <Accent>growth partner</Accent>
            </>
          }
          description="Most agencies sell services. We build systems — and tie our success to the only metric that matters: your revenue."
        />

        <div className="mt-12 sm:mt-16 grid w-full items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          
          {/* Benefit list - Fixed strictly to 1 column on mobile, 2 on bigger screens */}
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div className="group w-full">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/25 bg-brand/[0.07] text-brand transition-all duration-400 group-hover:scale-110 group-hover:bg-brand group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-[15px] sm:text-[17px] font-semibold tracking-tight text-white break-words">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] sm:text-sm leading-relaxed text-zinc-400 break-words pr-2 sm:pr-0">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Comparison table */}
          <Reveal delay={0.12}>
            <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="border-b border-white/[0.07] px-4 py-4 sm:px-6 sm:py-5">
                <h3 className="font-display text-base sm:text-lg font-semibold tracking-tight text-white">
                  How we compare
                </h3>
                <p className="mt-0.5 text-[12px] sm:text-sm text-zinc-500">
                  The honest difference between us and the alternatives.
                </p>
              </div>
              
              {/* Table Wrapper */}
              <div className="w-full">
                {/* Changed to table-fixed on mobile to strictly fit viewport without scrolling */}
                <table className="w-full table-fixed sm:table-auto text-left">
                  <caption className="sr-only">
                    Comparison of Leads In click versus typical agencies and freelancers
                  </caption>
                  <thead>
                    <tr className="border-b border-white/[0.07] text-[9px] sm:text-xs tracking-wider uppercase">
                      <th
                        scope="col"
                        className="w-[40%] sm:w-auto px-2 py-3 sm:px-6 sm:py-4 font-medium text-zinc-500"
                      >
                        What you get
                      </th>
                      <th
                        scope="col"
                        className="w-[20%] sm:w-auto bg-brand/[0.06] px-1 py-3 sm:px-4 sm:py-4 text-center font-bold text-brand"
                      >
                        Click
                      </th>
                      <th
                        scope="col"
                        className="w-[20%] sm:w-auto px-1 py-3 sm:px-4 sm:py-4 text-center font-medium text-zinc-500"
                      >
                        Agencies
                      </th>
                      <th
                        scope="col"
                        className="w-[20%] sm:w-auto px-1 py-3 sm:px-4 sm:py-4 text-center font-medium text-zinc-500"
                      >
                        Freelancers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-white/[0.05] transition-colors last:border-0 hover:bg-white/[0.02]"
                      >
                        <th
                          scope="row"
                          className="px-2 py-3 sm:px-6 sm:py-3.5 text-[11px] sm:text-sm font-medium text-zinc-200 leading-[1.3] sm:leading-normal pr-1 sm:pr-4"
                        >
                          {row.label}
                        </th>
                        <td className="bg-brand/[0.06] px-1 py-3 sm:px-4 sm:py-3.5 text-center">
                          <div className="flex justify-center items-center">
                            <MarkIcon mark={row.click} highlight />
                          </div>
                        </td>
                        <td className="px-1 py-3 sm:px-4 sm:py-3.5 text-center">
                          <div className="flex justify-center items-center">
                            <MarkIcon mark={row.agency} />
                          </div>
                        </td>
                        <td className="px-1 py-3 sm:px-4 sm:py-3.5 text-center">
                          <div className="flex justify-center items-center">
                            <MarkIcon mark={row.freelancer} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-brand/[0.06] px-4 py-4 sm:px-6">
                <p className="text-[12px] sm:text-sm text-zinc-300 leading-relaxed">
                  <strong className="font-semibold text-brand">
                    Bottom line:
                  </strong>{" "}
                  agency-level firepower, freelancer-level accountability —
                  without either downside.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}