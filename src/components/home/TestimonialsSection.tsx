"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of 2",
    text: "The kids absolutely loved picking their own vegetables! It was such a refreshing experience away from the city. The farm-to-table lunch was the highlight — we could taste the freshness.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Food Blogger",
    text: "I've visited many organic farms, but Raghu Farm stands apart. The passion of the family, the quality of produce, and the beautiful setting make it a must-visit for anyone who values real food.",
    rating: 5,
  },
  {
    name: "Anita & Vikram",
    role: "Weekend Visitors",
    text: "We come here every month for fresh vegetables. The guided tour was eye-opening — learning about organic composting and sustainable water management. Highly recommend for families!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">What Visitors Say</h2>
            <div className="vintage-divider">
              <span>⭐</span>
            </div>
            <p className="section-subtitle">
              Stories from our farm family
            </p>
          </div>
        </ScrollAnimator>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <ScrollAnimator key={t.name} delay={index * 150}>
              <div className={styles.card}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <p className={styles.text}>{t.text}</p>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong className={styles.name}>{t.name}</strong>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
