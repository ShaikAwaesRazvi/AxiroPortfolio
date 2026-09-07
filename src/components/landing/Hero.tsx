import heroImage from "../../assets/image.jpeg";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="eyebrow">FOR YOUR BUSINESS</div>
        <h1>Booking, Made Effortless</h1>
          <p>
              <div className="hero-promise">
                  <p>You bring the business.</p>
                  <strong className="promise-we">
                      <span className="promise-text">We handle the technology.</span>
                      <svg className="promise-highlight" viewBox="0 0 320 24" preserveAspectRatio="none">
                          <path d="M2 18 Q 80 8, 160 14 T 318 12" stroke="#8b5cf6" strokeWidth="10"
                                strokeLinecap="round" fill="none"/>
                      </svg>
                  </strong>
              </div>
          </p>
          <div className="hero-ctas">
              <button className="btn-pill hero-cta" onClick={onGetStarted}>GET STARTED</button>
              <a href="#demo" className="btn-outline">SEE A DEMO</a>
          </div>
      </div>
        <div className="hero-right">
            <img src={heroImage} alt="Salon interior"/>
        </div>
    </section>
  );
}
