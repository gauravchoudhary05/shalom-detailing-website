'use client';

import { useState } from 'react';
import { useConfigStore, SERVICE_LABELS } from '@/store/useConfigStore';
import SoftAurora from './SoftAurora';
import BorderGlow from './BorderGlow';

export function ContactForm() {
  const showContact = useConfigStore((s) => s.showContact);
  const toggleContact = useConfigStore((s) => s.toggleContact);
  const activeService = useConfigStore((s) => s.activeService);
  const vehicleSize = useConfigStore((s) => s.vehicleSize);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!showContact) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API
    console.log('Lead submitted:', {
      ...formData,
      service: activeService,
      vehicleSize,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      toggleContact();
    }, 3000);
  };

  return (
    <div className="contact-overlay" id="contact-overlay">
      <div className="contact-overlay__backdrop" onClick={toggleContact} />
      <div className="contact-overlay__panel">
        {/* SoftAurora WebGL background — low amplitude to avoid GPU contention */}
        <div className="contact-overlay__aurora-bg">
          <SoftAurora />
        </div>

        <button
          className="contact-overlay__close"
          onClick={toggleContact}
          id="contact-close-btn"
          aria-label="Close contact form"
        >
          ✕
        </button>

        {submitted ? (
          <div className="contact-overlay__success">
            <div className="contact-overlay__success-icon">✓</div>
            <h2>Booking Confirmed</h2>
            <p>Our team will contact you within 2 hours.</p>
          </div>
        ) : (
          <>
            <h2 className="contact-overlay__title">Book Your Appointment</h2>
            <p className="contact-overlay__subtitle">
              Selected: <strong>{SERVICE_LABELS[activeService].title}</strong> | {vehicleSize.charAt(0).toUpperCase() + vehicleSize.slice(1)}
            </p>

            <form onSubmit={handleSubmit} className="contact-overlay__form">
              <div className="contact-overlay__field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className="contact-overlay__field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="contact-overlay__field">
                <label htmlFor="contact-vehicle">Vehicle Model</label>
                <input
                  id="contact-vehicle"
                  type="text"
                  required
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  placeholder="e.g. BMW 3 Series, Hyundai Creta"
                />
              </div>

              <div className="contact-overlay__field">
                <label htmlFor="contact-message">Additional Notes</label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific requirements..."
                />
              </div>

              <BorderGlow
                glowColor="0 85 45"
                colors={['#E50914', '#ff3333', '#990000']}
                backgroundColor="#0A0A0C"
                borderRadius={12}
                glowIntensity={1.0}
                className="contact-overlay__submit-glow"
              >
                <button
                  type="submit"
                  className="contact-overlay__submit-btn"
                  id="contact-submit-btn"
                >
                  Submit Booking Request
                </button>
              </BorderGlow>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
