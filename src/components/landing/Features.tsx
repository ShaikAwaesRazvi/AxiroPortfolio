import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Feature {
  icon: string;
  title: string;
  desc: string;
  premium?: boolean;
}

const FEATURES: Feature[] = [
  {
    icon: "📅",
    title: "Smart scheduling",
    desc: "Clients book by service and employee. No double-bookings, with automatic buffer time between appointments.",
  },
  {
    icon: "✕",
    title: "Easy cancellations",
    desc: "Clients can cancel their appointments easily without calling or messaging your business.",
  },
  {
    icon: "↻",
    title: "Easy rescheduling",
    premium: true,
    desc: "Premium members can let clients reschedule appointments themselves based on real-time availability.",
  },
  {
    icon: "🔔",
    title: "Automatic reminders",
    desc: "SMS and email reminders are sent automatically, helping reduce missed appointments.",
  },
  {
    icon: "👤",
    title: "Employee profiles",
    premium: true,
    desc: "Showcase each employee's specialties, experience, portfolio, and availability so clients can choose who they trust.",
  },
  {
    icon: "📊",
    title: "Admin dashboard",
    desc: "Manage bookings, employees, services, customers, and business activity from one clean dashboard.",
  },
  {
    icon: "🌐",
    title: "Your own branded page",
    desc: "A polished booking website with your business name, colors, photos, services, and branding.",
  },
];

export default function Features() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="features">
      <div className="section-head">
        <div className="eyebrow">WHY AXIRO</div>

        <h2>Everything your business needs, nothing it doesn't</h2>

        <p>
          Axiro builds your business a website of its own, one that shows off
          your work, lists your services and prices plainly, and lets clients
          book a time with the person they trust.
        </p>

        <p>
          No back-and-forth over text, no guessing at availability. Just the
          tools a modern business needs to run smoothly, and nothing to slow it
          down.
        </p>
      </div>

      <div className="features-grid" ref={gridRef}>
          {FEATURES.map((f) => (
              <div className="feature-card reveal reveal-stagger" key={f.title}>
                  {f.premium && (
                      <div className="premium-badge">★</div>
                  )}

                  <div className="feature-icon">{f.icon}</div>

                  <h3>{f.title}</h3>

                  <p>{f.desc}</p>
              </div>
          ))}
      </div>
    </section>
  );
}
