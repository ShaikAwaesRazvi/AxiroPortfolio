interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-mark">AS</div>
        <div>
          <div className="logo-text">AXIRO SYSTEMS</div>
          <div className="logo-sub">BOOKING PLATFORM</div>
        </div>
      </div>
      <div className="nav-links">
        <a href="#who-its-for">Who It's For</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#how-it-works">How it works</a>
        <a href="#faq">FAQ</a>
        <button className="btn-pill" onClick={onGetStarted}>GET STARTED</button>
      </div>
    </nav>
  );
}