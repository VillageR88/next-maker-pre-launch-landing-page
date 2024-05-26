import MainRow1 from './MainRow1';
import MainRow2 from './MainRow2';
import MainRow from './MainRow3';

export default function Main() {
  return (
    <main className="mt-[116px] flex flex-col items-center gap-[202px]">
      <MainRow1 />
      <MainRow2 />
      <MainRow />
    </main>
  );
}
