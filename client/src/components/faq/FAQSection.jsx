import { useState } from "react";
import { HelpCircle, Phone, Mail, ArrowRight } from "lucide-react";

import faqs from "../../constants/faqs";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-red-100 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            <HelpCircle size={18} />
            Frequently Asked Questions
          </div>

          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Have Questions? We've Got Answers.
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            Find answers to the most frequently asked questions about
            appointments, emergency care, doctors, AI triage, insurance, and
            patient services.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
              />
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">
              Still Have Questions?
            </h3>

            <p className="mb-8 text-blue-100">
              Our healthcare support team is available 24/7 to help with
              appointments, emergencies, and general inquiries.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+91 12345 67890</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>support@mediqueue.com</span>
              </div>
            </div>

            <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
              Contact Support
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;