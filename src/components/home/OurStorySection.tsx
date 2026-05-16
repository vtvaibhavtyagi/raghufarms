"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./OurStorySection.module.css";

export default function OurStorySection() {
  return (
    <section className={styles.story} id="our-story">
      <div className={`container ${styles.storyContainer}`}>
        {/* Image Side */}
        <ScrollAnimator className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <div className={styles.imageInner}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderIcon}>👨‍🌾</span>
                <span className={styles.placeholderText}>Our Farm Heritage</span>
              </div>
            </div>
            {/* Vintage stamp */}
            <div className={styles.stamp}>
              <span>Est.</span>
              <strong>1998</strong>
            </div>
          </div>
        </ScrollAnimator>

        {/* Text Side */}
        <div className={styles.textCol}>
          <ScrollAnimator>
            <span className={styles.eyebrow}>Our Story</span>
            <h2 className={styles.title}>
              From Our Fields
              <br />
              <span className={styles.titleAccent}>to Your Table</span>
            </h2>
          </ScrollAnimator>

          <ScrollAnimator delay={200}>
            <p className={styles.text}>
              Raghu Organic Farm began as a dream of our grandfather — a vision
              to farm the way nature intended. Over 25 years ago, on this very
              land in Haryana, he planted the first seeds of what would become a
              sanctuary of organic agriculture.
            </p>
          </ScrollAnimator>

          <ScrollAnimator delay={400}>
            <p className={styles.text}>
              Today, our family continues his legacy, tending to over 50 varieties
              of fruits, vegetables, and herbs — all grown without a single drop
              of chemical pesticide. We believe that healthy soil grows healthy
              food, and healthy food builds healthy communities.
            </p>
          </ScrollAnimator>

          <ScrollAnimator delay={600}>
            <div className={styles.values}>
              <div className={styles.value}>
                <span className={styles.valueIcon}>🌱</span>
                <div>
                  <strong>Chemical Free</strong>
                  <span>Zero pesticides, always</span>
                </div>
              </div>
              <div className={styles.value}>
                <span className={styles.valueIcon}>💧</span>
                <div>
                  <strong>Water Conserved</strong>
                  <span>Drip irrigation & rainwater</span>
                </div>
              </div>
              <div className={styles.value}>
                <span className={styles.valueIcon}>🐄</span>
                <div>
                  <strong>Desi Cow Manure</strong>
                  <span>Natural fertilizers only</span>
                </div>
              </div>
              <div className={styles.value}>
                <span className={styles.valueIcon}>👨‍👩‍👧‍👦</span>
                <div>
                  <strong>Family Run</strong>
                  <span>Three generations strong</span>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}
