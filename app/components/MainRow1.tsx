import Image from 'next/image';
import imageHeroLeft from '@/public/assets/images/illustration-hero-left.svg';
import imageHeroRight from '@/public/assets/images/illustration-hero-right.svg';
import imageScroll from '@/public/assets/images/icon-scroll.svg';

export default function MainRow1() {
  return (
    <div className="flex h-[459px] w-[1553px] justify-between">
      <Image
        className="h-[459px] w-[408px]"
        width={408}
        height={459}
        src={imageHeroLeft as string}
        alt="image of people"
        priority
      />
      <div className="flex h-[318px] w-[730px] flex-col items-center pr-[19px] text-white">
        <h1 className="mt-[71px] whitespace-pre">
          <span>{'Get paid for the work\n'}</span>
          <span>
            you <span className="text-[#3EE9E5]">love</span> to do.
          </span>
        </h1>
        <p className="mt-[24px] px-[95px] text-center text-[#777F98]">
          The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to
          escape the rat race or set up a side hustle, we’ve got you covered.
        </p>
        <Image
          width={26}
          height={42}
          className="mt-[64px] h-[42px] w-[26px]"
          src={imageScroll as string}
          alt="scroll image"
        />
      </div>
      <Image
        className="h-[444px] w-[396px]"
        width={396}
        height={444}
        src={imageHeroRight as string}
        alt="image of people"
      />
    </div>
  );
}
