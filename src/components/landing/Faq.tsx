import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How long does it take to get my booking page live?",
    answer:
      "Most salons are up and running within a day of signing up. Once you tell us your services, stylists, and hours, we handle the setup and send you the link.",
  },
  {
    question: "Do my clients need to download an app?",
    answer:
      "No. Your booking page works right in any browser, on desktop or mobile. Clients just tap your link and book — no app, no account creation required.",
  },
  {
    question: "Can I switch between plans later?",
    answer:
      "Yes, you can upgrade, downgrade, or switch from monthly to a one-time purchase at any point. There's no lock-in contract.",
  },
  {
    question: "What happens if a client no-shows?",
    answer:
      "If you've enabled deposits, the deposit is collected automatically at booking, which covers you if the client doesn't show up.",
  },
  {
    question: "Can I manage multiple stylists or locations?",
    answer:
      "Yes. Each stylist gets their own profile and availability, and salon groups with multiple locations can use our Multi-Location plan to manage everything from one dashboard.",
  },
  {
    question: "Is there a contract or cancellation fee?",
    answer:
      "No. Monthly plans can be cancelled anytime with no fee. One-time purchases are yours to keep with no recurring obligation at all.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-layout">
        <div className="faq-left">
          <div className="eyebrow">FAQ</div>
          <h2 className="faq-tagline">You asked,<br />we answered.</h2>
          <p className="faq-subtext">
            Can't find what you're looking for? Reach out to us directly and we'll get back to you.
          </p>
        </div>

        <div className="faq-right">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item${isOpen ? " faq-item-open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-answer-wrapper">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}