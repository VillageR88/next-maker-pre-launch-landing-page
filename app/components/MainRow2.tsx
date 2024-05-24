export default function MainRow2() {
  const listItems = [
    {
      title: 'Indulge your passions',
      description: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
    },
    {
      title: 'Gain financial freedom',
      description: 'Start making money work for you. There’s nothing quite like earning while you sleep.',
    },
    {
      title: 'Choose your lifestyle',
      description: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
    },
    {
      title: 'Work from anywhere',
      description: 'Selling online means not being pinned down. Want to work AND travel? Go for it!',
    },
  ];

  const MiddleBlock = ({
    title,
    description,
    classExtension,
  }: {
    title: string;
    description: string;
    classExtension: string;
  }) => {
    return (
      <li className={`${classExtension} flex h-[335px] w-[255px] flex-col gap-[48px]`}>
        <div className="h-[164px] w-[160px] rounded-[45px] bg-[#093F68]"></div>
        <section className="flex flex-col gap-[23px]">
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
      </li>
    );
  };

  return (
    <ul className="flex h-[383px] w-full max-w-[1110px] gap-[30px] text-white">
      {listItems.map((item, index) => (
        <MiddleBlock
          classExtension={index % 2 ? 'self-end' : 'sel-start'}
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}
