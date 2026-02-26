import Link from "next/link";

const TESTIMONIALS = [
  {
    quote:
      "For the first time in years, I am able to work without pain.",
    author: "JF",
  },
  {
    quote:
      "Your treatments have rid me of pain freeing me to live in comfort once again.",
    author: "JJ",
  },
  {
    quote:
      "Before I came to Dr. Yang for acupuncture, I had an excruciating amount of back pain. I had been to a chiropractor, physical therapy, and several other specialists. Now I am two months into treatment with Dr. Yang and the transformation is incredible. I am no longer on pain medication and finally feel like I have got my life back.",
    author: "Noel A.",
  },
  {
    quote:
      "I have been a patient of Dr. Yang and Dr. Duan for three years. Dr. Yang has really improved my immune system. Not only do I not have the pneumonia every year, I seldom get a cold.",
    author: "Judy S.",
  },
  {
    quote:
      "The combination of treatments by Dr. Yang and Dr. Duan were so very helpful when I had my left knee replaced. Their treatments definitely helped in the healing process.",
    author: "Ken M.",
  },
  {
    quote:
      "I have been happy with the results from acupuncture. Over time my headaches decreased and now seem to have gone away.",
    author: "Eloise H.",
  },
  {
    quote:
      "Haven't had a problem with back in 2 years. He took care of it permanently.",
    author: "M. B.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            What Our Patients Say
          </h1>
          <p className="text-lg text-stone-500 mb-12">
            Real stories from people whose lives have been changed.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col gap-8">
            {TESTIMONIALS.map(({ quote, author }) => (
              <article
                key={`${author}-${quote.slice(0, 20)}`}
                className="p-7 rounded-2xl bg-stone-50 border border-stone-100"
              >
                <span
                  className="block text-5xl text-primary/20 leading-none select-none font-serif"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="text-stone-700 leading-relaxed italic mt-2">
                  {quote}
                </p>
                <p className="mt-6 text-[15px] text-stone-400 not-italic text-right">
                  — {author}
                </p>
              </article>
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
