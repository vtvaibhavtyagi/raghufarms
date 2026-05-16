"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./FarmVisitHero.module.css";

export default function FarmVisitHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern}></div>
      <div className={`container ${styles.heroContent}`}>
        <ScrollAnimator>
          <span className={styles.badge}>🌿 Farm Experiences</span>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <h1 className={styles.title}>
            Experience
            <br />
            <span className={styles.accent}>Farm Life</span>
          </h1>
        </ScrollAnimator>
        <ScrollAnimator delay={400}>
          <p className={styles.subtitle}>
            Immerse yourself in the tranquility and bounty of our organic farm.
            A day of fresh air, fresh food, and unforgettable memories.
          </p>
        </ScrollAnimator>
        <ScrollAnimator delay={600}>
          <a href="#plan" className="btn btn-primary">
            🎟️ Book Your Visit Today
          </a>
        </ScrollAnimator>
      </div>
      {/* Decorative hills */}
      <div className={styles.hills}>
        <div className={`${styles.hill} ${styles.h1}`}></div>
        <div className={`${styles.hill} ${styles.h2}`}></div>
      </div>
    </section>
  );
}
