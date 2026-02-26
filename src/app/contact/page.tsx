import Image from "next/image";
import Link from "next/link";

const INSURANCE = [
  "ACN Groups",
  "Aetna",
  "All auto Insurances",
  "Blue Cross Blue Shield",
  "CIGNA",
  "Community Health Plan of WA",
  "First Choice",
  "Great West",
  "Group Health Co.",
  "Guardian",
  "KPS Health Plan",
  "Lifewise",
  "Premera Blue Cross",
  "Regence Blue Shield",
  "Uniform Medical Plans",
  "United Health Care",
  "WCC Family Healthcare Plan",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Contact Us
          </h1>
          <p className="text-stone-600 leading-relaxed mb-8">
            Your life does not have to be filled with pain. Acupuncture and
            Chinese medicine will restore your Qi, vital energy, and relieve
            your pain and discomfort.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/generated/treatment-room.png"
              alt="Our modern treatment room"
              width={800}
              height={450}
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                AOMC Ballard
              </h2>
              <p className="text-stone-600 leading-relaxed">
                9015 Holman Rd. NW, Suite #1
              </p>
              <p className="text-stone-600 leading-relaxed">Seattle, WA 98117</p>
              <a
                href="tel:2067822126"
                className="mt-4 inline-block text-primary font-semibold hover:underline"
              >
                (206) 782-2126
              </a>
            </div>
            <div className="p-7 rounded-2xl bg-stone-50 border border-stone-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                AOMC Belltown
              </h2>
              <p className="text-stone-600 leading-relaxed">
                2701 Western Ave.
              </p>
              <p className="text-stone-600 leading-relaxed">Seattle, WA 98121</p>
              <a
                href="tel:2067822126"
                className="mt-4 inline-block text-primary font-semibold hover:underline"
              >
                (206) 782-2126
              </a>
            </div>
          </div>

          <div className="mt-8 p-7 rounded-2xl bg-stone-50 border border-stone-100">
            <h3 className="text-xl font-bold text-stone-900 mb-4">
              Office Hours
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Mon–Fri 9:00 AM – 6:30 PM, Saturday 9:00 AM – 1:00 PM
            </p>
            <p className="mt-4">
              <span className="text-[15px] text-stone-400">Email: </span>
              <a
                href="mailto:aomcseattle@gmail.com"
                className="text-primary font-semibold hover:underline"
              >
                aomcseattle@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
            Insurance Accepted
          </h2>
          <div className="flex flex-wrap gap-2">
            {INSURANCE.map((plan) => (
              <span
                key={plan}
                className="px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-[15px]"
              >
                {plan}
              </span>
            ))}
          </div>

          <p className="mt-12">
            <Link href="/faqs" className="text-primary font-semibold hover:underline">
              Have questions? Read our FAQs →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
