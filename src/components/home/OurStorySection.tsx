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
              <svg viewBox="0 0 400 300" className={styles.sugarcaneIllustration} xmlns="http://www.w3.org/2000/svg">
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFF9E6" />
                    <stop offset="60%" stopColor="#FDE6B0" />
                    <stop offset="100%" stopColor="#F5B731" />
                  </linearGradient>
                  <linearGradient id="caneGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#5E8F31" />
                    <stop offset="50%" stopColor="#83BD3E" />
                    <stop offset="100%" stopColor="#375718" />
                  </linearGradient>
                  <linearGradient id="jaggeryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#B45309" />
                  </linearGradient>
                </defs>

                {/* Sky */}
                <rect width="400" height="300" rx="8" fill="url(#skyGrad)" />

                {/* Sun */}
                <circle cx="200" cy="120" r="60" fill="#D97706" opacity="0.1" />
                <circle cx="200" cy="120" r="40" fill="#D97706" opacity="0.15" />
                <circle cx="200" cy="120" r="24" fill="#F59E0B" opacity="0.5" />

                {/* Back Hills (Sugarcane fields representation) */}
                <path d="M-20 300 Q60 200 140 230 T320 210 Q370 190 420 300 Z" fill="#5E8F31" opacity="0.7" />
                <path d="M-10 300 Q100 170 220 210 T410 180 Q430 180 450 300 Z" fill="#375718" />

                {/* Traditional Jaggery Bhatti (boiling setup on the left) */}
                {/* Fire pit base */}
                <path d="M40 300 L140 300 L130 230 L50 230 Z" fill="#78350F" stroke="#451A03" strokeWidth="3" />
                {/* Flame door */}
                <rect x="75" y="250" width="30" height="50" rx="5" fill="#2A1405" />
                <path d="M80 300 Q90 265 100 300 Z" fill="#D97706" />
                <path d="M85 300 Q90 275 95 300 Z" fill="#EF4444" />
                {/* Boiling Pan (Kadhai) */}
                <ellipse cx="90" cy="225" rx="50" ry="12" fill="#2A1405" stroke="#1A1A1A" strokeWidth="2" />
                {/* Boiling Jaggery (Golden-Amber liquid) */}
                <ellipse cx="90" cy="227" rx="46" ry="9" fill="url(#jaggeryGrad)" />
                {/* Bubbles in boiling jaggery */}
                <circle cx="65" cy="226" r="3" fill="#FFF" opacity="0.5" />
                <circle cx="85" cy="228" r="4" fill="#FFF" opacity="0.6" />
                <circle cx="110" cy="225" r="2.5" fill="#FFF" opacity="0.4" />
                <circle cx="95" cy="224" r="3" fill="#FFF" opacity="0.5" />
                {/* Steam rising */}
                <path d="M70 200 Q75 180 70 170" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                <path d="M90 195 Q95 175 90 165" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
                <path d="M110 202 Q105 185 110 175" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.3" />

                {/* Sugarcane Stalks in foreground (right side) */}
                {/* Stalk 1 */}
                <g transform="translate(260, 40)">
                  {/* Main stem segments */}
                  <rect x="0" y="0" width="16" height="260" fill="url(#caneGrad)" rx="3" />
                  {/* Segment lines (internodes) */}
                  <line x1="0" y1="40" x2="16" y2="43" stroke="#FCD34D" strokeWidth="2.5" opacity="0.8" />
                  <line x1="0" y1="90" x2="16" y2="93" stroke="#FCD34D" strokeWidth="2.5" opacity="0.8" />
                  <line x1="0" y1="140" x2="16" y2="143" stroke="#FCD34D" strokeWidth="2.5" opacity="0.8" />
                  <line x1="0" y1="190" x2="16" y2="193" stroke="#FCD34D" strokeWidth="2.5" opacity="0.8" />
                  <line x1="0" y1="240" x2="16" y2="243" stroke="#FCD34D" strokeWidth="2.5" opacity="0.8" />
                  {/* Sugarcane leaves branching off */}
                  <path d="M8 41 C-40 20 -80 60 -100 110 C-60 80 -20 60 8 41 Z" fill="#5E8F31" stroke="#375718" strokeWidth="1" />
                  <path d="M8 91 C50 60 90 90 120 150 C80 110 40 100 8 91 Z" fill="#83BD3E" stroke="#375718" strokeWidth="1" />
                  <path d="M8 141 C-30 110 -60 150 -80 220 C-50 180 -10 160 8 141 Z" fill="#5E8F31" stroke="#375718" strokeWidth="1" />
                </g>

                {/* Stalk 2 (slanted back) */}
                <g transform="translate(310, 20) rotate(5)">
                  <rect x="0" y="0" width="14" height="280" fill="url(#caneGrad)" rx="3" />
                  <line x1="0" y1="50" x2="14" y2="52" stroke="#FCD34D" strokeWidth="2" opacity="0.8" />
                  <line x1="0" y1="100" x2="14" y2="102" stroke="#FCD34D" strokeWidth="2" opacity="0.8" />
                  <line x1="0" y1="150" x2="14" y2="152" stroke="#FCD34D" strokeWidth="2" opacity="0.8" />
                  <line x1="0" y1="200" x2="14" y2="202" stroke="#FCD34D" strokeWidth="2" opacity="0.8" />
                  <line x1="0" y1="250" x2="14" y2="252" stroke="#FCD34D" strokeWidth="2" opacity="0.8" />
                  {/* Leaves */}
                  <path d="M7 51 C-20 20 -50 50 -70 100 C-40 70 -10 60 7 51 Z" fill="#83BD3E" />
                  <path d="M7 101 C40 80 70 110 90 170 C60 130 30 110 7 101 Z" fill="#83BD3E" />
                  <path d="M7 151 C-30 130 -50 180 -60 250 C-40 200 0 170 7 151 Z" fill="#5E8F31" />
                </g>

                {/* Vintage border frame overlay inside SVG */}
                <rect x="5" y="5" width="390" height="290" rx="6" fill="none" stroke="#451A03" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              </svg>
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
              Raghu Organic Farm began as a dream of our grandfather in Uttarakhand — a vision to cultivate sweetness and health straight from the earth. Over 25 years ago, he planted our first heirloom sugarcane crops, laying the foundation for what is now a thriving sanctuary of sustainable, chemical-free agriculture.
            </p>
          </ScrollAnimator>

          <ScrollAnimator delay={400}>
            <p className={styles.text}>
              Today, we keep that legacy alive by refining our traditional sugarcane farming and wood-fired jaggery boiling (*Gur Bhatti*). Alongside our premium jaggery products, we grow over 50 varieties of fruits, vegetables, and herbs — maintaining rich soil biology using natural compost and desi cow manure.
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
