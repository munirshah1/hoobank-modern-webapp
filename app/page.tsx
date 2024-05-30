import BillingSection from '@/components/BillingSection';
import BusinessSection from '@/components/BusinessSection';
import CardDealSection from '@/components/CardDealSection';
import ClientSection from '@/components/ClientSection';
import CTA from '@/components/CTA';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import StateSection from '@/components/StateSection';
import TestimonialSection from '@/components/TestimonialSection';
import styles from '@/styles';

export default function Home() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <StateSection />
          <BusinessSection />
          <BillingSection />
          <CardDealSection />
          <TestimonialSection />
          <ClientSection />
          <CTA />
        </div>
      </div>
    </div>
  );
}

