import { useState, useEffect, useRef } from "react";

interface AudienceCard {
  emoji: string;
  title: string;
  desc: string;
}

const AUDIENCES: AudienceCard[] = [
  { emoji: "💇", title: "Hair Salons", desc: "Let clients pick their stylist and book cuts, color, and treatments online." },
  { emoji: "💅", title: "Nail Salons", desc: "Manage nail techs, services, and appointment slots without the phone tag." },
  { emoji: "💈", title: "Barbershops", desc: "Give regulars a fast way to rebook with their preferred barber." },
  { emoji: "🧖", title: "Spas & Massage", desc: "Showcase treatments and therapists, with deposits to cut no-shows." },
  { emoji: "🎨", title: "Tattoo Studios", desc: "Let clients browse artist portfolios and book consultations or sessions." },
  { emoji: "💆", title: "Med Spas", desc: "Handle higher-ticket bookings like Botox and facials with a polished page." },
];

export default function WhoItsFor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % AUDIENCES.length);
    }, 3200);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goTo = (index: number) => {
    setActiveIndex(index);
    startAutoplay(); // reset the timer so it doesn't jump right after a manual click
  };

  return (
    <section id="who-its-for" className="who-section">
      <div className="section-head">
        <div className="eyebrow">WHO IT'S FOR</div>
        <h2>Built for beauty & wellness businesses</h2>
        <p>If your business runs on appointments and stylists, Axiro fits right in.</p>
      </div>

      <div
        className="who-carousel"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div
          className="who-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {AUDIENCES.map((item) => (
            <div className="who-card" key={item.title}>
              <div className="who-emoji">{item.emoji}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="who-dots">
        {AUDIENCES.map((item, index) => (
          <button
            key={item.title}
            className={`who-dot${index === activeIndex ? " who-dot-active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Show ${item.title}`}
          />
        ))}
      </div>
    </section>
  );
}