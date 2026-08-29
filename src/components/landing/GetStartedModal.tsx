import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessType: "Hair Salon",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Keeping these key names (salon_name, salon_type) so your existing
    // EmailJS templates keep working without needing to be edited.
    const templateParams = {
      salon_name: form.storeName,
      owner_name: form.ownerName,
      email: form.email,
      phone: form.phone,
      salon_type: form.businessType,
    };

    Promise.all([
      // Email 1: notifies YOU of the new signup
      emailjs.send(
        "service_5ftudb5",
        "template_jph1qja",
        templateParams,
        "84IXr5c6Iqrctj9QF"
      ),
      // Email 2: confirmation sent to the store owner
      emailjs.send(
        "service_5ftudb5",
        "template_x1c6jfe",
        templateParams,
        "84IXr5c6Iqrctj9QF"
      ),
    ])
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        alert("Something went wrong — please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {!submitted ? (
          <>
            <div className="modal-eyebrow">GET STARTED</div>
            <h2 className="modal-title">Set up your business</h2>
            <p className="modal-subtitle">
              Takes about two minutes. We'll follow up to finish setting up your booking page.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <label>
                Store name
                <input
                  type="text"
                  name="storeName"
                  value={form.storeName}
                  onChange={handleChange}
                  placeholder="Bloom & Co."
                  required
                />
              </label>

              <label>
                Your name
                <input
                  type="text"
                  name="ownerName"
                  value={form.ownerName}
                  onChange={handleChange}
                  placeholder="Axiro Systems"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="axirosystems@salon.com"
                  required
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </label>

              <label>
                Business Type
                <select name="businessType" value={form.businessType} onChange={handleChange}>
                  <option>Hair Salon</option>
                  <option>Nail Salon</option>
                  <option>Barbershop</option>
                  <option>Spa & Massage</option>
                  <option>Tattoo Studio</option>
                  <option>Med Spa</option>
                  <option>Other</option>
                </select>
              </label>

              <button type="submit" className="btn-pill modal-submit" disabled={isSending}>
                {isSending ? "SENDING..." : "CREATE MY BOOKING PAGE"}
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h2 className="modal-title">You're on the list!</h2>
            <p className="modal-subtitle">
              We'll email {form.email || "you"} shortly to finish setting up {form.storeName || "your business"}'s booking page.
            </p>
            <p className="modal-spam-note">
              Don't see it in a few minutes? Check your spam or promotions folder.
            </p>
            <button className="btn-pill modal-submit" onClick={onClose}>
              DONE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}