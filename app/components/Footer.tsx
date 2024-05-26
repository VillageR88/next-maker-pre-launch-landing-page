import { useFormState } from 'react-dom';
import { Message } from '@/app/_lib/interfaces';
import { CreateInvoiceContactForm } from '@/app/_lib/functionsServer';

export default function Footer() {
  const [state, action] = useFormState<Message, FormData>(CreateInvoiceContactForm, Message.valid);

  return (
    <footer className="mr-[223px] mt-[151px] flex h-[228px] w-[1665px] justify-center bg-[url('../public/assets/images/bg-footer-squiggle.svg')] text-center text-[#FFFFFF]">
      <form
        className="ml-[223px] mt-[52px] flex h-[134px] w-full max-w-[730px] flex-col items-center gap-[42px]"
        action={action}
      >
        <label htmlFor="email">Get notified when we launch</label>
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <input
              placeholder="Email address"
              className={`h-[48px] w-[320px] rounded-[24px] bg-[#093F68] px-[18px] text-[15px] font-extrabold text-[#FFFFFF] outline-none outline-offset-0 ${state === Message.valid || state === Message.success ? 'focus:outline-[#3EE9E5]' : ' outline-[#FF2965]'}`}
              id="email"
              type="text"
              name="email"
              autoComplete="email"
              formNoValidate={false}
            />
            <span
              className={`ml-[18px] self-start text-[12px] leading-[25px] ${state === Message.success ? 'text-green-400' : 'text-[#FF2965]'}`}
            >
              {state}
            </span>
          </div>
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
