import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      {/* Decorative top border */}
      <div className={styles.topBorder}>
        <div className={styles.borderPattern}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className={styles.leaf}>
              🌿
            </span>
          ))}
        </div>
      </div>

      <div className={`container ${styles.footerContent}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.brandLogo}>
            <span className={styles.brandIcon}>🌾</span>
            <div>
              <h3 className={styles.brandName}>Raghu Organic Farm</h3>
              <p className={styles.brandTagline}>Pure. Organic. Fresh.</p>
            </div>
          </div>
          <p className={styles.brandDesc}>
            A family-run organic farm dedicated to sustainable agriculture and
            bringing the freshest produce from our fields to your table.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              📷
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              📘
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={styles.socialLink}
            >
              ▶️
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={styles.socialLink}
            >
              💬
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/farm-visit">Farm Visit</Link>
            </li>
            <li>
              <Link href="/#our-story">Our Story</Link>
            </li>
            <li>
              <Link href="/#products">Products</Link>
            </li>
          </ul>
        </div>

        {/* Visit Us */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Visit Us</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>Raghu Organic Farm, Village Molna - Ibalpur, Roorkee, Uttarakhand, India  - 247668</span>
            </li>
            <li>
              <span className={styles.contactIcon}>🕐</span>
              <span>Open: 10:00 AM — 5:00 PM (Sat & Sun)</span>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <span>+91 79832 46387</span>
            </li>
            <li>
              <span className={styles.contactIcon}>✉️</span>
              <span>hello@raghufarms.in</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletterCol}>
          <h4 className={styles.colTitle}>Farm Newsletter</h4>
          <p className={styles.newsletterText}>
            Get seasonal updates, recipes, and exclusive offers from the farm.
          </p>
          <form className={styles.newsletterForm} id="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className={styles.newsletterInput}
              id="newsletter-email"
              required
            />
            <button type="submit" className="btn btn-primary" id="newsletter-submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p>
            © {new Date().getFullYear()} Raghu Organic Farm. All rights
            reserved. Made with 🌱 and love.
          </p>
        </div>
      </div>
    </footer>
  );
}
