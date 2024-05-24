import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';

export default function Header() {
  return (
    <header className="flex w-full max-w-[90em]">
      <div className="pl-[165px]">
        <Image width={120} height={35} src={logo as string} alt="logo" />
      </div>
    </header>
  );
}
