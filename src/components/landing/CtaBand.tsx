import { useScrollReveal } from "../../hooks/useScrollReveal";

interface CtaBandProps {
  onGetStarted: () => void;
}

export default function CtaBand({ onGetStarted }: CtaBandProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="cta-band reveal" id="get-started" ref={ref}>
      <h2>Ready to stop juggling the phone?</h2>
      <p>Join salons already booking smarter with Axiro.</p>
      <button className="btn-pill hero-cta" onClick={onGetStarted}>GET STARTED FREE</button>
    </div>
  );
}