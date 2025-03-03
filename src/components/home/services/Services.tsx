import { Icon } from "@iconify/react";
import Button from "@/components/button/Button"; // Importing your custom button
import styles from "./Services.module.scss";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <h2>What We Provide</h2>
      <div className={styles.serviceIcons}>
        
        {/* Electrical Service */}
        <div className={styles.serviceItem}>
          <div className={styles.iconCircle}>
            <Icon icon="fluent-color:lightbulb-filament-48" width="60" height="60" />
          </div>
          <p>Electrical Contracting</p>
          <span className={styles.tagline}>From your plugs to your bulbs, we power it all!</span>
          <Button text="Learn More" href="/services/electrical" variant="primary" className={styles.serviceButton} />
        </div>

        {/* Cooling System Service */}
        <div className={styles.serviceItem}>
          <div className={styles.iconCircle}>
            <Icon icon="f7:gauge" width="56" height="56" style={{ color: "#3871c1" }} />
          </div>
          <p>Cooling System</p>
          <span className={styles.tagline}>Keeping your spaces cool, efficient, and reliable.</span>
          <Button text="Learn More" href="/services/cooling" variant="primary" className={styles.serviceButton} />
        </div>

      </div>
    </section>
  );
};

export default Services;
