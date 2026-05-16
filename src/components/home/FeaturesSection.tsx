"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: "🌾",
    title: "Organic Produce",
    description:
      "Grown without pesticides or chemicals. Our crops thrive on natural compost, neem-based solutions, and age-old farming wisdom passed down through generations.",
  },
  {
    icon: "🧺",
    title: "Farm Fresh",
    description:
      "Harvested at peak ripeness and delivered within hours. No cold storage, no preservatives — just the authentic taste of nature, straight from our soil to your kitchen.",
  },
  {
    icon: "🌍",
    title: "Sustainable Farming",
    description:
      "We practice crop rotation, rainwater harvesting, and vermiculture. Our farm is a living ecosystem where every creature has a role in nurturing the land.",
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">Why Choose Raghu Farms?</h2>
            <div className="vintage-divider">
              <span>🌿</span>
            </div>
            <p className="section-subtitle">
              Rooted in tradition, growing with purpose
            </p>
          </div>
        </ScrollAnimator>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <ScrollAnimator key={feature.title} delay={index * 150}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
                <div className={styles.cardAccent}></div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
