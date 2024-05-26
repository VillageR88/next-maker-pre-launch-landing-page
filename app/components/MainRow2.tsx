import Image from 'next/image';
import img1 from '@/public/assets/images/illustration-passions.svg';
import img2 from '@/public/assets/images/illustration-financial-freedom.svg';
import img3 from '@/public/assets/images/illustration-lifestyle.svg';
import img4 from '@/public/assets/images/illustration-work-anywhere.svg';

export default function MainRow2() {
  const listItems = [
    {
      title: 'Indulge your passions',
      description: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
      src: img1 as string,
    },
    {
      title: 'Gain financial freedom',
      description: 'Start making money work for you. There’s nothing quite like earning while you sleep.',
      src: img2 as string,
    },
    {
      title: 'Choose your lifestyle',
      description: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
      src: img3 as string,
    },
    {
      title: 'Work from anywhere',
      description: 'Selling online means not being pinned down. Want to work AND travel? Go for it!',
      src: img4 as string,
    },
  ];

  const MiddleBlock = ({
    title,
    description,
    src,
    classExtension,
  }: {
    title: string;
    description: string;
    src: string;
    classExtension: string;
  }) => {
    return (
      <li className={`${classExtension} flex h-[335px] w-[255px] flex-col gap-[48px]`}>
        <div className="flex h-[164px] w-[160px] items-center justify-center rounded-[45px] bg-[#093F68]">
          <Image src={src} alt={title} />
        </div>
        <section className="flex flex-col gap-[23px]">
          <h3>{title}</h3>
          <p className="text-[#777F98]">{description}</p>
        </section>
      </li>
    );
  };

  return (
    <ul className="mt-[202px] flex h-[383px] w-full max-w-[1110px] gap-[30px] text-white">
      {listItems.map((item, index) => (
        <MiddleBlock
          classExtension={index % 2 ? 'self-end' : 'sel-start'}
          key={index}
          title={item.title}
          src={item.src}
          description={item.description}
        />
      ))}
    </ul>
  );
}
