export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-mark">AS</div>
            <div>
              <div className="logo-text">AXIRO SYSTEMS</div>
              <div className="logo-sub">BOOKING PLATFORM</div>
            </div>
          </div>
          <p className="footer-tagline">
            Booking software built for hair and nail salons  so you spend less
            time on the phone and more time behind the chair.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
        <a href="#who-its-for">Who It's For</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#how-it-works">How it works</a>
        <a href="#faq">FAQ</a>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <a href="mailto:axirosystems@gmail.com" className="footer-icon-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" strokeLinejoin="round" />
              <path d="M4 6l8 7 8-7" strokeLinejoin="round" />
            </svg>
            <span>axirosystems@gmail.com</span>
          </a>
          <a href="tel:+14168057878" className="footer-icon-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span>+1 (416) 805-7878</span>
          </a>
          <a href="tel:+14377666063" className="footer-icon-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span>+1 (437) 766-6063</span>
          </a>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="footer-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="footer-social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 8h2V4h-2a5 5 0 0 0-5 5v2H8v4h2v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1z" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Axiro Systems — Booking software built for salons</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}