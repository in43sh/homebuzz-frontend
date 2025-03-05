import { useState } from 'react';
import faqData from '../components/constants/faqData';
import femaleAvatar from '../assets/images/female-avatar.png';

function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Help</h1>
      {faqData.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="mb-4">
            <button
              onClick={() => handleClick(idx)}
              className="flex w-full items-center justify-between bg-gray-200 px-4 py-3 text-left font-medium hover:bg-gray-300"
            >
              <span>{item.question}</span>
              <span
                className={`transition-transform duration-300 ${isOpen ? 'rotate-90 transform' : ''}`}
              >
                ▷
              </span>
            </button>
            {isOpen && (
              <div className="border border-t-0 border-gray-300 bg-gray-100 px-4 py-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-semibold">Feel free to contact us</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded border p-3"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded border p-3"
              />
              <textarea
                placeholder="Message"
                className="h-32 w-full rounded border p-3"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded bg-yellow-500 py-3 text-white hover:bg-yellow-600"
              >
                Send
              </button>
            </form>
          </div>
          <div className="text-center md:text-left">
            <img
              src={femaleAvatar}
              alt="Dana Chitanis"
              className="mx-auto mb-3 h-20 w-20 rounded-full md:mx-0"
            />
            <p className="font-bold">DANA CHITANIS</p>
            <p>Customer Service</p>
            <p>(800) 123-45-67</p>
            <p>(800) 123-45-67</p>
            <p className="text-blue-500">mail@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
