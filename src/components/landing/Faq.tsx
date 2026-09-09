import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How long does it take to get my booking page live?",
    answer:
      "Most salons are up and running within 2 days of signing up. Once you tell us your services, stylists, and hours, we handle the setup and send you the link.",
  },
  {
    question: "Do my clients need to download an app?",
    answer:
      "No. Your booking page works right in any browser, on desktop or mobile. Clients just tap your link and book. No app, no account creation required.",
  },
  {
    question: "Can I switch between plans later?",
    answer:
      "Yes, you can upgrade, downgrade, or switch from monthly to a one-time purchase at any point. There's no lock-in contract.",
  },
  {
    question: "How do clients cancel or reschedule an appointment?",
    answer:
      "Every booking confirmation email includes a unique booking reference number and a secure link. Clients can use it anytime to reschedule or cancel their appointment, no need to call you directly.",
  },
  // {
  //   question: "Can I manage multiple stylists or locations?",
  //   answer:
  //     "Yes. Each stylist gets their own profile and availability, and salon groups with multiple locations can use our Multi-Location plan to manage everything from one dashboard.",
  // },
  {
  question: "Can I try it out before committing to a plan?",
  answer:
    "Yes. Reach out and we can walk you through a demo of your booking page before you decide on a plan.",
  },
  // {
  // question: "What if I need help after my page is live?",
  // answer:
  //   "We're just an email or call away. If you need to add a new service, update your hours, or run into any issues, reach out and we'll sort it out for you.",
  // },
  {
    question: "What happens to my bookings if I switch plans?",
    answer:
      "Nothing gets lost. All your existing bookings, clients, and settings carry over automatically, whether you're upgrading, downgrading, or switching from monthly to one-time.",
  },
  {
  question: "Is there a contract or cancellation fee?",
  answer:
    "No contracts. If you're on a monthly plan, you can cancel anytime with no fee. If you buy the one-time plan, it's yours to keep for good.",
  },
  {
  question: "Do I need any technical skills to set this up?",
  answer:
    "None at all. Just tell us about your business, things like your services, staff, and hours, and we'll handle the setup and get your page live for you.",
  },
  {
  question: "Can I use my own domain name?",
  answer:
    "Yes, you can use your own domain, or if you don't have one yet, we can help you get set up with one.",
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