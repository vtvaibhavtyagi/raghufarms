"use client";

import Link from "next/link";
import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Animated sun rays background */}
      <div className={styles.sunRays}></div>

      {/* Illustrated farm hills */}
      <div className={styles.hillsContainer}>
        <div className={`${styles.hill} ${styles.hillBack}`}></div>
        <div className={`${styles.hill} ${styles.hillMid}`}></div>
        <div className={`${styles.hill} ${styles.hillFront}`}></div>
      </div>

      {/* Content */}
      <div className={`container ${styles.heroContent}`}>
        <ScrollAnimator>
          <div className={styles.badge}>
            <span>🌾</span> Sugarcane & Jaggery Heritage
          </div>
        </ScrollAnimator>

        <ScrollAnimator delay={200}>
          <h1 className={styles.title}>
            Welcome to
            <br />
            <span className={styles.titleAccent}>Raghu Organic Farm</span>
          </h1>
        </ScrollAnimator>

        <ScrollAnimator delay={400}>
          <p className={styles.subtitle}>
            From our lush sugarcane fields in Uttarakhand to your kitchen — experience the purity of wood-fired organic jaggery and fresh farm produce, crafted with love for generations.
          </p>
        </ScrollAnimator>

        <ScrollAnimator delay={600}>
          <div className={styles.heroCtas}>
            <Link href="/farm-visit" className="btn btn-primary">
              🌾 Visit Our Farm
            </Link>
            <Link href="#our-story" className="btn btn-outline">
              Our Story →
            </Link>
          </div>
        </ScrollAnimator>

        <ScrollAnimator delay={800}>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Years of Farming</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+ Acres</span>
              <span className={styles.statLabel}>Organic Sugarcane</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Happy Visitors</span>
            </div>
          </div>
        </ScrollAnimator>
      </div>

      {/* Floating sugarcane leaves and jaggery drops */}
      <div className={styles.floatingLeaf} style={{ top: "20%", left: "8%" }}>
        🎋
      </div>
      <div className={styles.floatingLeaf} style={{ top: "35%", right: "10%" }}>
        🌾
      </div>
      <div className={styles.floatingLeaf} style={{ top: "60%", left: "5%" }}>
        🍯
      </div>
    </section>
  );
}
