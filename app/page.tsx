import Header from '@/app/components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-start overflow-x-hidden pb-[105px] pt-[48px] font-manrope sm:min-h-screen xl:pb-[117px] xl:pt-[81px]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
