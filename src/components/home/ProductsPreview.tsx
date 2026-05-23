"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./ProductsPreview.module.css";

const products = [
  { icon: "🎋", name: "Organic Sugarcane", tag: "Signature" },
  { icon: "🍯", name: "Traditional Jaggery", tag: "Bestseller" },
  { icon: "🍬", name: "Masala Gur (Spiced)", tag: "New Launch" },
  { icon: "🧉", name: "Liquid Jaggery (Kakvi)", tag: "Traditional" },
  { icon: "🤎", name: "Jaggery Powder", tag: "Purity Pack" },
  { icon: "🍹", name: "Cane Juice (Pressed)", tag: "Seasonal" },
  { icon: "🍶", name: "Clay-Aged Sirka", tag: "Ancient Recipe" },
  { icon: "🥛", name: "Desi Cow Milk", tag: "Daily Fresh" },
  { icon: "🥬", name: "Seasonal Greens", tag: "In Season" },
  { icon: "🍯", name: "Raw Honey", tag: "Limited" },
];

const jaggeryProcess = [
  {
    step: "01",
    title: "Eco-Harvesting",
    icon: "🌾",
    description: "Our heirloom sugarcane is hand-harvested at peak sweetness using traditional crop selection methods."
  },
  {
    step: "02",
    title: "Cold Crushing",
    icon: "🍹",
    description: "Cane stalks are cold-pressed within hours of harvest to capture every drop of pure, nutrient-rich juice."
  },
  {
    step: "03",
    title: "Bhatti Cooking",
    icon: "🔥",
    description: "Juice is slow-boiled in massive iron pans heated by burning dry bagasse (cane fiber), naturally concentrating the nectar."
  },
  {
    step: "04",
    title: "Artisanal Molding",
    icon: "🍯",
    description: "The molten amber syrup is cooled and hand-poured into wooden molds to set into organic, chemical-free jaggery blocks."
  }
];

export default function ProductsPreview() {
  return (
    <section className={styles.products} id="products">
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">Our Farm Offerings</h2>
            <div className="vintage-divider">
              <span>🎋</span>
            </div>
            <p className="section-subtitle">
              Uttarakhand's finest organic sugarcane and handcrafted jaggery varieties
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

        {/* Jaggery Making Heritage Section */}
        <div className={styles.heritageSection}>
          <ScrollAnimator>
            <div className={styles.heritageHeader}>
              <div className={styles.heritageBadge}>Heritage Craftsmanship</div>
              <h3 className={styles.heritageTitle}>From Cane to Gold</h3>
              <p className={styles.heritageSubtitle}>
                Our traditional, 100% chemical-free jaggery making process
              </p>
            </div>
          </ScrollAnimator>

          <div className={styles.timeline}>
            {jaggeryProcess.map((item, index) => (
              <div className={styles.timelineItemWrapper} key={item.title}>
                <ScrollAnimator delay={index * 150} className={styles.timelineItem}>
                  <div className={styles.timelineCard}>
                    <span className={styles.stepBadge}>{item.step}</span>
                    <div className={styles.timelineIconWrapper}>
                      <span className={styles.timelineIcon}>{item.icon}</span>
                    </div>
                    <h4 className={styles.timelineCardTitle}>{item.title}</h4>
                    <p className={styles.timelineCardDesc}>{item.description}</p>
                  </div>
                </ScrollAnimator>
                {index < jaggeryProcess.length - 1 && (
                  <div className={styles.timelineConnector}>
                    <span>➔</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
