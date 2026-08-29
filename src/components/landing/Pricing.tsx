import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Tier {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const MONTHLY_TIERS: Tier[] = [
  {
    name: "Standard",
    price: "$29",
    period: "/month",
    desc: "For a single stylist or small salon just getting started.",
    features: [
      "1 stylist profile",
      "Unlimited bookings",
      "Email reminders",
      "Branded booking page",
    ],
    cta: "GET STARTED",
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    desc: "For salons with a full team and steady bookings.",
    features: [
      "Up to 8 stylist profiles",
      "Unlimited bookings",
      "SMS + email reminders",
      "Owner dashboard & reports",
    ],
    cta: "GET STARTED",
    highlighted: true,
  },
  {
    name: "Multi-Location",
    price: "Custom",
    period: "",
    desc: "For salon groups with multiple locations or franchises.",
    features: [
      "Unlimited stylists & locations",
      "Everything in Premium",
      "Dedicated onboarding support",
      "Custom integrations",
    ],
    cta: "CONTACT US",
  },
];

const ONE_TIME_TIERS: Tier[] = [
  {
    name: "Standard",
    price: "$499",
    period: "one-time",
    desc: "Own your booking page outright. No recurring fees.",
    features: [
      "1 stylist profile",
      "Unlimited bookings",
      "Email reminders",
      "Branded booking page",
      "Lifetime updates for this tier",
    ],
    cta: "BUY NOW",
  },
  {
    name: "Premium",
    price: "$999",
    period: "one-time",
    desc: "Full feature set, purchased once, yours for good.",
    features: [
      "Up to 8 stylist profiles",
      "Unlimited bookings",
      "SMS + email reminders",
      "Owner dashboard & reports",
      "Lifetime updates for this tier",
    ],
    cta: "BUY NOW",
    highlighted: true,
  },
  {
    name: "Multi-Location",
    price: "Custom",
    period: "",
    desc: "One-time build-out for salon groups or franchises.",
    features: [
      "Unlimited stylists & locations",
      "Everything in Premium",
      "Dedicated onboarding support",
      "Custom integrations",
    ],
    cta: "CONTACT US",
  },
];

interface PricingProps {
  onGetStarted: () => void;
}

export default function Pricing({ onGetStarted }: PricingProps) {
  const gridRef = useScrollReveal<HTMLDivElement>();
  const [billing, setBilling] = useState<"monthly" | "onetime">("monthly");

  const tiers = billing === "monthly" ? MONTHLY_TIERS : ONE_TIME_TIERS;

  return (
    <section id="pricing">
      <div className="section-head">
        <div className="eyebrow">PRICING</div>
        <h2>Simple pricing, no surprises</h2>
        <p>Pay monthly, or buy your booking system outright — whichever fits your salon.</p>

        <div className="billing-toggle">
          <button
            className={billing === "monthly" ? "billing-option active" : "billing-option"}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={billing === "onetime" ? "billing-option active" : "billing-option"}
            onClick={() => setBilling("onetime")}
          >
            One-Time Purchase
          </button>
        </div>
      </div>

      <div className="pricing-grid" ref={gridRef}>
        {tiers.map((tier) => (
          <div
            className={`pricing-card reveal reveal-stagger${tier.highlighted ? " pricing-highlighted" : ""}`}
            key={tier.name}
          >
            {tier.highlighted && <div className="pricing-badge">MOST POPULAR</div>}
            <h3>{tier.name}</h3>
            <div className="pricing-amount">
              <span className="pricing-price">{tier.price}</span>
              <span className="pricing-period">{tier.period}</span>
            </div>
            <p className="pricing-desc">{tier.desc}</p>
            <ul className="pricing-features">
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button
              className={tier.highlighted ? "btn-pill pricing-cta" : "btn-outline pricing-cta"}
              onClick={onGetStarted}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}