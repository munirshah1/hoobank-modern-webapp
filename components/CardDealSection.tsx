import styles, { layout } from '@/styles';
import Button from './Button';
import Image from 'next/image';

export default function CardDealSection() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <Image
          src='/assets/card.png'
          alt='billing'
          className='w-[100%] h-[100%]'
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
