import { clients } from '@/contants';
import styles from '@/styles';
import Image from 'next/image';

export default function ClientSection() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <Image
              src={client.logo}
              alt='client_logo'
              className='sm:w-[192px] w-[100px] object-contain'
              width={192}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
