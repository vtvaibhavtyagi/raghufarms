"use client";

import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./FarmVisitCTA.module.css";

export default function FarmVisitCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.ctaContent}`}>
        <ScrollAnimator>
          <span className={styles.eyebrow}>🌄 Experience It Yourself</span>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <h2 className={styles.title}>
            Come, Walk Our Fields
          </h2>
        </ScrollAnimator>
        <ScrollAnimator delay={400}>
          <p className={styles.desc}>
            Spend a day with us — breathe fresh air, pick your own produce,
            meet our farm animals, and enjoy a farm-to-table meal cooked with
            ingredients harvested just hours ago.
          </p>
        </ScrollAnimator>
        <ScrollAnimator delay={600}>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span>🚜</span> Guided Farm Tour
            </div>
            <div className={styles.highlight}>
              <span>🧺</span> Pick Your Own
            </div>
            <div className={styles.highlight}>
              <span>🍳</span> Farm Kitchen
            </div>
            <div className={styles.highlight}>
              <span>🐄</span> Meet Animals
            </div>
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay={800}>
          <Link href="/farm-visit" className="btn btn-vintage">
            Plan Your Visit →
          </Link>
        </ScrollAnimator>
      </div>
    </section>
  );
}
