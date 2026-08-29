import { useState, useEffect, useRef } from "react";

interface AudienceCard {
  tag: string;
  title: string;
  desc: string;
  image: string;
}

const AUDIENCES: AudienceCard[] = [
  {
    tag: "HAIR",
    title: "Hair Salons",
    desc: "Let clients pick their stylist and book cuts, color, and treatments online.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "NAILS",
    title: "Nail Salons",
    desc: "Manage nail techs, services, and appointment slots without the phone tag.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "BARBER",
    title: "Barbershops",
    desc: "Give regulars a fast way to rebook with their preferred barber.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "SPA",
    title: "Spas & Massage",
    desc: "Showcase treatments and therapists, and let clients book in seconds.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "TATTOO",
    title: "Tattoo Studios",
    desc: "Let clients browse artist portfolios and book consultations or sessions.",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "MED SPA",
    title: "Med Spas",
    desc: "Handle higher-ticket bookings like Botox and facials with a polished page.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80",
  },
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

      <div className="who-carousel" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
        {AUDIENCES.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.title}
              className={`who-card${isActive ? " who-card-active" : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => goTo(index)}
            >
              {isActive && (
                <>
                  <span className="who-card-tag">{item.tag}</span>
                  <div className="who-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}