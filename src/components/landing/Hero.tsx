import heroImage from "../../assets/image.jpeg";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="eyebrow">FOR HAIR & NAIL SALONS</div>
        <h1>Booking, Made Effortless</h1>
        <p>
          Axiro gives your salon a beautiful booking page in minutes — clients
          pick their stylist, pick their time, and show up. No more phone
          tag, no more double-bookings.
        </p>
        <div className="hero-ctas">
          <button className="btn-pill hero-cta" onClick={onGetStarted}>GET STARTED FREE</button>
          <a href="#demo" className="btn-outline">SEE A DEMO</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Salon interior" />
      </div>
    </section>
  );
}