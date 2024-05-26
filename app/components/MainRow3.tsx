import Image from 'next/image';
import image1 from '@/public/assets/images/icon-free.svg';
import image2 from '@/public/assets/images/icon-paid.svg';
import CheckIcon from '@/app/components/CheckIcon';

export default function MainRow3() {
  const itemList = {
    free: {
      image: image1 as string,
      title: 'Dip your toe',
      description: 'Just getting started? No problem at all! Our free plan will take you a long way.',
      price: 'Free',
      features: ['Unlimited products', 'Basic analytics', 'Limited marketplace exposure', '10% fee per transaction'],
      backgroundColor: 'bg-[#093F68]',
      textColor: 'text-[#FFFFFF]',
      height: 'h-[425px]',
      imageOffset: 'ml-[38px] mt-[-22px]',
      checkColor: 'fill-[#3EE9E5]',
      monthly: false,
      padding: 'px-[38px] pb-[48px] pt-[49px]',
    },

    paid: {
      image: image2 as string,
      title: 'Dive right in',
      description: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
      price: '$25.00',
      features: [
        'Custom domain',
        'Advanced analytics and reports',
        'High marketplace visibility',
        '5% fee per transaction',
      ],
      backgroundColor: 'bg-[#3EE9E5]',
      textColor: 'text-[#080C20]',
      height: 'h-[449px]',
      imageOffset: 'ml-[37px] mt-[-34px]',
      checkColor: 'fill-[#093F68]',
      monthly: true,
      padding: 'px-[38px] pb-[60px] pt-[61px]',
    },
  };
  return (
    <div className="mt-[202px] flex flex-col items-center gap-[72px] text-center">
      <section className="flex max-w-[540px] flex-col gap-[24px]">
        <h2 className="text-[#FFFFFF]">Our pricing plans</h2>
        <p className="text-[#777F98]">
          We only make money when our creators make money. Our plans are always affordable, and it’s completely free to
          get started.
        </p>
      </section>
      <div className="flex flex-row items-center gap-[30px]">
        {Object.values(itemList).map((item, index) => (
          <div key={index} className="flex flex-col">
            <Image className={`absolute z-10 ${item.imageOffset}`} src={item.image} alt="decoration" />
            <div
              className={`${[item.backgroundColor, item.height, item.textColor, item.padding].map((item) => item).join(' ')} flex w-[445px] flex-col gap-[24px] rounded-[8px] text-start`}
            >
              <section className="flex flex-col gap-[19px]">
                <h3>{item.title}</h3>
                <p className="opacity-60">{item.description}</p>
              </section>
              <section className="flex flex-col gap-[19px]">
                <div className="flex items-center gap-[7px]">
                  <span className="text-[40px] font-extrabold">{item.price}</span>
                  {item.monthly && <span className="text-[15px] font-medium opacity-60">/ month</span>}
                </div>

                <ul className="flex flex-col gap-[12px]">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-[15px]">
                      <CheckIcon classExtension={item.checkColor} />
                      <span className="text-[15px] font-medium leading-[25px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}