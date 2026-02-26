"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    question: "What can acupuncture and oriental medicine treat?",
    answer:
      "The WHO recognizes over 43 treatable disorders including gastrointestinal, urogenital, gynecological, respiratory, musculoskeletal, circulatory, emotional/psychological disorders, addictions, and eye/ear/nose/throat conditions.",
  },
  {
    question: "What is acupuncture?",
    answer:
      "A comprehensive system of health care with over 3,500 years of continuous clinical history. It works with the body's natural vital energy (Qi) to promote healing and balance.",
  },
  {
    question: "How does it work?",
    answer:
      "Based on the flow of Qi (vital energy) along meridians. Acupuncture points are stimulated to balance this flow. Research shows it influences the nervous system, releases endorphins, and improves circulation.",
  },
  {
    question: "What benefits can I expect?",
    answer:
      "Many conditions improve rapidly. Chronic conditions show steady progress. Effective for pain management, athletic performance, injury recovery, and preventive care.",
  },
  {
    question: "Is it safe? Is it painful?",
    answer:
      "Very safe. All needles are disposable and sterile. Needles are hair-thin — most patients find treatment relaxing and many fall asleep during sessions.",
  },
  {
    question: "How do I find a qualified practitioner?",
    answer:
      "Seek someone trained comprehensively in acupuncture and Chinese herbal medicine with at least five years of clinical experience.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "Varies individually. The usual course is 8–16 treatments. Some notice improvement immediately, others after several visits.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="border border-stone-200 rounded-2xl overflow-hidden">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-stone-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="py-5 px-6 min-h-[52px] font-semibold text-stone-900 text-left w-full flex justify-between items-center hover:bg-stone-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
