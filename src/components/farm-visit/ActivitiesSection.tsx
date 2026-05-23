"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./ActivitiesSection.module.css";

const activities = [
  {
    icon: "🚜",
    title: "Guided Farm Tour",
    duration: "1.5 hours",
    description:
      "Walk through our lush green fields with an experienced guide. Learn about crop rotation, organic composting, and the secrets of chemical-free farming that have been in our family for decades.",
  },
  {
    icon: "🧺",
    title: "Pick Your Own Produce",
    duration: "1 hour",
    description:
      "Grab a basket and harvest seasonal vegetables and fruits directly from the plants. Take home what you pick — there's nothing fresher than produce you've harvested yourself!",
  },
  {
    icon: "🔥",
    title: "Gur Bhatti Experience",
    duration: "1.5 hours",
    description:
      "Witness the authentic process of boiling fresh sugarcane juice in massive iron kettles. Chew raw sugarcane stalks, squeeze fresh juice, and savor warm, melted jaggery straight from the bhatti.",
  },
  {
    icon: "🐄",
    title: "Meet Our Animals",
    duration: "45 minutes",
    description:
      "Say hello to our Desi cows, playful goats, hens, and rabbits. Kids love feeding the animals and learning about their role in our organic ecosystem.",
  },
  {
    icon: "🍳",
    title: "Farm Kitchen Experience",
    duration: "2 hours",
    description:
      "Join our chef in the open-air farm kitchen. Cook a traditional meal using ingredients picked just moments ago. Enjoy your creation under the shade of our mango trees.",
  },
];

export default function ActivitiesSection() {
  return (
    <section className={styles.activities} id="activities">
      <div className="container">
        <ScrollAnimator>
          <div className={styles.header}>
            <h2 className="section-title">What Awaits You</h2>
            <div className="vintage-divider">
              <span>🌾</span>
            </div>
            <p className="section-subtitle">
              A day full of activities for all ages
            </p>
          </div>
        </ScrollAnimator>

        <div className={styles.grid}>
          {activities.map((activity, index) => (
            <ScrollAnimator key={activity.title} delay={index * 150}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{activity.icon}</span>
                  <span className={styles.duration}>⏱ {activity.duration}</span>
                </div>
                <h3 className={styles.cardTitle}>{activity.title}</h3>
                <p className={styles.cardDesc}>{activity.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
