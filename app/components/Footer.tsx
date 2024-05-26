export default function Footer() {
  return (
    <footer className="mr-[223px] mt-[151px] flex h-[228px] w-[1665px] justify-center bg-[url('../public/assets/images/bg-footer-squiggle.svg')] text-center text-[#FFFFFF]">
      <form
        className="ml-[223px] mt-[52px] flex h-[134px] w-full max-w-[730px] flex-col items-center gap-[42px]"
        action=""
      >
        <label htmlFor="email">Get notified when we launch</label>
        <div className="flex gap-[16px]">
          <input
            placeholder="Email address"
            className="h-[48px] w-[320px] rounded-[24px] bg-[#093F68] px-[18px] text-[15px] font-extrabold text-[#FFFFFF]"
            id="email"
            type="email"
          />
          <button
            className="h-[48px] w-[140px] rounded-[24px] bg-[#3EE9E5] text-[15px] font-extrabold text-[#093F68]"
            type="submit"
          >
            Get notified
          </button>
        </div>
      </form>
    </footer>
  );
}
