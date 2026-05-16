"use client";

import { useState } from "react";
import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "Walk-ins are welcome on weekends! However, we recommend calling ahead for weekday visits and large groups (10+) to ensure the best experience.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable clothes and closed-toe shoes are best. The farm can be muddy after rain, so leave your fancy footwear at home! We also recommend sunscreen and a hat.",
  },
  {
    q: "Is the farm safe for small children?",
    a: "Absolutely! Our farm is family-friendly and we love having kids. Children under 5 enter free. We have designated safe areas for animal interactions and supervised activities.",
  },
  {
    q: "Can I buy produce to take home?",
    a: "Yes! Everything you pick during the 'Pick Your Own' session is yours to take home. We also have a small farm shop with seasonal produce, honey, jams, and herbs.",
  },
  {
    q: "Is food included in the ticket?",
    a: "The basic farm tour ticket includes light refreshments (chai and seasonal snacks). The full Farm Kitchen experience is an add-on where you cook and eat a complete meal.",
  },
  {
    q: "Do you offer school/corporate group visits?",
    a: "Yes! We offer customized group packages for schools, corporate team-building events, and birthday parties. Contact us for special group rates and itineraries.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">Common Questions</h2>
            <div className="vintage-divider"><span>❓</span></div>
          </div>
        </ScrollAnimator>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <ScrollAnimator key={index} delay={index * 80}>
              <div className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  id={`faq-${index}`}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{openIndex === index ? "−" : "+"}</span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
