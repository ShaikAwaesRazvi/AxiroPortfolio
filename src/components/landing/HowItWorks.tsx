import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Step {
  num: number;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  { num: 1, title: "Tell us about your salon", desc: "Services, stylists, hours — takes about ten minutes to set up." },
  { num: 2, title: "We build your page", desc: "A branded booking site goes live, ready to share with clients." },
  { num: 3, title: "Clients book themselves", desc: "They pick a stylist, pick a time, and you get notified instantly." },
];

export default function HowItWorks() {
  const stepsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="how">
      <div className="section-head">
        <div className="eyebrow">HOW IT WORKS</div>
        <h2>Live in three steps</h2>
      </div>
      <div className="steps" ref={stepsRef}>
        {STEPS.map((s) => (
          <div className="step reveal reveal-stagger" key={s.num}>
            <div className="step-num">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}