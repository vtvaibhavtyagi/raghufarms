"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./PlanYourVisit.module.css";

const pricing = [
  { label: "Adult Tour", price: "₹500", note: "per person" },
  { label: "Child (5-12 yrs)", price: "₹300", note: "per child" },
  { label: "Family Package", price: "₹1,500", note: "2 adults + 2 kids" },
  { label: "Farm Kitchen Add-on", price: "₹400", note: "per person" },
];

export default function PlanYourVisit() {
  return (
    <section className={styles.plan} id="plan">
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">Plan Your Visit</h2>
            <div className="vintage-divider">
              <span>🎟️</span>
            </div>
          </div>
        </ScrollAnimator>

        <div className={styles.content}>
          {/* Ticket-style pricing */}
          <ScrollAnimator className={styles.ticketCol}>
            <div className={styles.ticket}>
              <div className={styles.ticketHeader}>
                <h3 className={styles.ticketTitle}>🎫 Admission</h3>
                <span className={styles.ticketBadge}>Walk-in Welcome</span>
              </div>
              <div className={styles.ticketBody}>
                {pricing.map((item) => (
                  <div className={styles.priceRow} key={item.label}>
                    <div>
                      <span className={styles.priceLabel}>{item.label}</span>
                      <span className={styles.priceNote}>{item.note}</span>
                    </div>
                    <span className={styles.priceValue}>{item.price}</span>
                  </div>
                ))}
              </div>
              <div className={styles.ticketFooter}>
                <p>* Under 5 years — Free entry</p>
                <p>* Group discounts available for 10+ visitors</p>
              </div>
              <div className={styles.ticketPerf}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className={styles.perfDot}></span>
                ))}
              </div>
            </div>
          </ScrollAnimator>

          {/* Info Column */}
          <div className={styles.infoCol}>
            <ScrollAnimator>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>🕐 Operating Hours</h4>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <strong>Saturday & Sunday</strong>
                    <span>10:00 AM — 5:00 PM</span>
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Weekdays</strong>
                    <span>By appointment only</span>
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Farm Kitchen</strong>
                    <span>12:00 PM — 2:00 PM</span>
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Best Season</strong>
                    <span>Oct — March</span>
                  </div>
                </div>
              </div>
            </ScrollAnimator>

            <ScrollAnimator delay={200}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>📍 How to Reach</h4>
                <p className={styles.infoText}>
                  Raghu Organic Farm, Village Molna - Ibalpur, Roorkee, Uttarakhand, India - 247668.
                  30 minutes from Roorkee, 3 hour from Delhi.
                </p>
                <div className={styles.mapPlaceholder}>
                  <span>🗺️</span>
                  <span>Map & directions coming soon</span>
                </div>
              </div>
            </ScrollAnimator>

            <ScrollAnimator delay={400}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>📞 Book Now</h4>
                <p className={styles.infoText}>
                  Call or WhatsApp us to reserve your spot:
                </p>
                <a href="tel:+919876543210" className="btn btn-secondary">
                  📞 +91 79832 46387
                </a>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </div>
    </section>
  );
}
