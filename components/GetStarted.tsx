import styles from '@/styles';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`flex justify-center items-center flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
            <span className='text-gradient'>Get</span>
          </p>
          <Image
            src='/assets/arrow-up.svg'
            alt='arrow-up'
            className='w-[23px] h-[23px] object-contain'
            width={23}
            height={23}
          />
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  );
}
