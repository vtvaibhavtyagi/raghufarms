"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./GallerySection.module.css";

const galleryItems = [
  { icon: "🌾", label: "Golden Wheat Fields", color: "#D4A843" },
  { icon: "🥬", label: "Organic Vegetable Beds", color: "#2B6E1A" },
  { icon: "🐄", label: "Our Desi Cows", color: "#8B7355" },
  { icon: "👨‍🌾", label: "Farmer at Work", color: "#5C3A1E" },
  { icon: "🧺", label: "Fresh Harvest Basket", color: "#E8772E" },
  { icon: "🍳", label: "Farm Kitchen Magic", color: "#C0392B" },
  { icon: "🌅", label: "Sunset Over Fields", color: "#F5B731" },
  { icon: "👨‍👩‍👧‍👦", label: "Family Farm Day", color: "#3D8A2C" },
];

export default function GallerySection() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">Farm Gallery</h2>
            <div className="vintage-divider">
              <span>📸</span>
            </div>
            <p className="section-subtitle">
              Glimpses of life at Raghu Organic Farm
            </p>
          </div>
        </ScrollAnimator>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <ScrollAnimator key={item.label} delay={index * 100}>
              <div
                className={styles.polaroid}
                style={{
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
              >
                <div
                  className={styles.photo}
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                  }}
                >
                  <span className={styles.photoIcon}>{item.icon}</span>
                </div>
                <p className={styles.caption}>{item.label}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
