"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./ProductsPreview.module.css";

const products = [
  { icon: "🥬", name: "Seasonal Greens", tag: "In Season" },
  { icon: "🍅", name: "Tomatoes", tag: "Bestseller" },
  { icon: "🥒", name: "Cucumbers", tag: "Fresh" },
  { icon: "🌶️", name: "Green Chillies", tag: "Organic" },
  { icon: "🍋", name: "Lemons", tag: "Farm Pick" },
  { icon: "🍯", name: "Raw Honey", tag: "Limited" },
  { icon: "🥛", name: "Desi Cow Milk", tag: "Daily" },
  { icon: "🌿", name: "Fresh Herbs", tag: "Aromatic" },
];

export default function ProductsPreview() {
  return (
    <section className={styles.products} id="products">
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">What We Grow</h2>
            <div className="vintage-divider">
              <span>🌻</span>
            </div>
            <p className="section-subtitle">
              Fresh from our fields, changing with the seasons
            </p>
          </div>
        </ScrollAnimator>

        <div className={styles.scrollContainer}>
          <div className={styles.scrollTrack}>
            {[...products, ...products].map((product, index) => (
              <div className={styles.productCard} key={`${product.name}-${index}`}>
                <div className={styles.productTag}>{product.tag}</div>
                <span className={styles.productIcon}>{product.icon}</span>
                <h4 className={styles.productName}>{product.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <ScrollAnimator>
          <p className={styles.comingSoon}>
            🛒 <strong>Online shop coming soon!</strong> Fresh produce delivered
            to your doorstep.
          </p>
        </ScrollAnimator>
      </div>
    </section>
  );
}
