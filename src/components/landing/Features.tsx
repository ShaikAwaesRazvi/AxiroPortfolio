import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  { icon: "📅", title: "Smart scheduling", desc: "Clients book by stylist and service. No double-bookings, automatic buffer time between appointments." },
  { icon: "💳", title: "Deposits & payments", desc: "Collect a deposit at booking to cut no-shows, and take full payment right in the app." },
  { icon: "🔔", title: "Automatic reminders", desc: "SMS and email reminders sent automatically, so clients actually show up." },
  { icon: "👥", title: "Stylist profiles", desc: "Showcase each stylist's specialty, portfolio, and availability — clients choose who fits their style." },
  { icon: "📊", title: "Owner dashboard", desc: "Track revenue, bookings, and stylist performance in one clean view." },
  { icon: "🌐", title: "Your own branded page", desc: "A polished booking site with your salon's name, colors, and photos — live in under a day." },
];

export default function Features() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="features">
      <div className="section-head">
        <div className="eyebrow">WHY AXIRO</div>
        <h2>Everything your salon needs, nothing it doesn't</h2>
        <p>Built specifically for hair and nail salons — not a generic scheduler stretched to fit.</p>
      </div>
      <div className="features-grid" ref={gridRef}>
        {FEATURES.map((f) => (
          <div className="feature-card reveal reveal-stagger" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
