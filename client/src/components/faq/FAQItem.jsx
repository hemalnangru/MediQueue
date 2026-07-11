import { ChevronDown } from "lucide-react";

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="text-lg font-semibold text-slate-800">
          {faq.question}
        </h3>

        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-slate-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;