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
    desc: "Core booking tools for a single admin managing one business.",
    features: [
      "Book by service & stylist",
      "Email confirmation & cancellation",
      "Unlimited bookings",
      "Employee, service & gallery management",
    ],
    cta: "GET STARTED",
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    desc: "Automated scheduling with staff logins & SMS reminders.",
    features: [
      "Everything in Standard",
      "Client self-reschedule via email",
      "Automated email notification if a stylist is unavailable",
      "SMS + email reminders",
      "Individual employee logins",
    ],
    cta: "GET STARTED",
    highlighted: true,
  },
];

const ONE_TIME_TIERS: Tier[] = [
  {
    name: "Standard",
    price: "$499",
    period: "one-time",
    desc: "Own your booking page outright. No recurring fees.",
    features: [
      "Book by service & stylist",
      "Email confirmation & cancellation",
      "Employee, service & gallery management",
      "Unlimited bookings",
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
      "Everything in Standard",
      "Client self-reschedule via email",
      "Automated email notification if a stylist is unavailable",
      "SMS + email reminders",
      "Individual employee logins",
      "Lifetime updates for this tier",
    ],
    cta: "BUY NOW",
    highlighted: true,
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
        <p>Pay monthly, or buy your booking system outright - whichever fits your business.</p>

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