import Image from "next/image";
import Link from "next/link";

const QUOTES = [
  "To love someone deeply gives you strength. Being loved by someone deeply gives you courage.",
  "She who knows others is learned. She who knows herself is wise.",
  "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
];

export default function Home() {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-4">
                Serving Seattle since 1992
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900">
                Acupuncture &
                <span className="text-primary"> Oriental Medicine</span>
              </h1>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                The many powers of Traditional Chinese Medicine may surprise you.
                Treat and relieve pain, stress, and chronic conditions through
                thousands of years of proven healing wisdom.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:2067822126"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Free Consultation
                </a>
                <Link
                  href="/conditions"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-stone-700 text-lg font-semibold rounded-xl hover:bg-stone-50 transition-colors border border-stone-200"
                >
                  Conditions We Treat
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/generated/hero.png"
                  alt="Acupuncture needles and zen stones"
                  width={1024}
                  height={576}
                  className="object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tao Quote */}
      <section className="bg-primary">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 text-center">
          <p className="text-[13px] uppercase tracking-[0.2em] text-white/50 mb-3">
            Today&apos;s Tao
          </p>
          <blockquote className="text-xl md:text-2xl font-light italic text-white/90 leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Why AOMC — 2 col, spacious cards */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Why Choose AOMC
          </h2>
          <p className="text-lg text-stone-500 mb-12">
            Decades of experience, compassionate care, and proven results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Free Consultation",
                text: "Call us to discuss your health needs — no cost, no obligation.",
              },
              {
                title: "40+ Years Experience",
                text: "Dr. Yang has practiced since 1970. Dr. Duan since 1991.",
              },
              {
                title: "Two Seattle Locations",
                text: "Ballard and Belltown — convenient clinics across the city.",
              },
              {
                title: "Insurance Accepted",
                text: "We work with Premera, Aetna, CIGNA, Blue Cross, and more.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-stone-50 border border-stone-100"
              >
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions + Image */}
      <section className="bg-stone-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Conditions We Treat
              </h2>
              <p className="text-lg text-stone-500 mb-8">
                One of the largest acupuncture and Chinese Medicine facilities
                in Seattle.
              </p>
              <div className="space-y-3">
                {[
                  "Bone, muscle & joint disorders",
                  "Nervous system disorders",
                  "Chronic pain management",
                  "Gastrointestinal disorders",
                  "Emotional & psychological disorders",
                  "Gynecological, pediatric & fertility",
                  "Respiratory & circulatory disorders",
                  "Addictions recovery",
                ].map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 text-stone-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:underline"
              >
                View all conditions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/generated/tcm-herbs.png"
                alt="Traditional Chinese Medicine herbs and ingredients"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Physicians */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Our Physicians
          </h2>
          <p className="text-lg text-stone-500 mb-12">
            World-class practitioners trained at China&apos;s most prestigious universities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Jianfeng Yang",
                cred: "L.Ac., M.Ac., OMD",
                years: "40+ years",
                image: "/images/images/DrYang.jpg",
                bio: "Educated at Chengdu University of TCM. Practiced since 1970, taught for 16 years. Globally recognized expert in Chinese Medicine, specializing in pain management, injuries, and neurological disorders.",
              },
              {
                name: "Dr. Guojun Duan",
                cred: "L.Ac., M.Ac., OMD",
                years: "20+ years",
                image: "/images/images/DrDuan.jpg",
                bio: "Eight years of full-time training at Chengdu and Heilongjiang Universities. Author of numerous articles on TCM. Specializes in neuromuscular and gynecological disorders.",
              },
            ].map((doc) => (
              <div
                key={doc.name}
                className="flex gap-6 p-6 rounded-2xl bg-stone-50 border border-stone-100"
              >
                <div className="w-28 h-36 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={150}
                    height={221}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-stone-900">
                    {doc.name}
                  </h3>
                  <p className="text-primary font-medium">{doc.cred}</p>
                  <p className="text-stone-400 text-[15px] mt-1">{doc.years} experience</p>
                  <p className="mt-3 text-stone-500 leading-relaxed text-[15px]">
                    {doc.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/staff"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Full staff profiles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Begin Healing?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Free consultation. Most insurance accepted.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:2067822126"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary text-lg font-semibold rounded-xl hover:bg-stone-100 transition-colors"
            >
              Call (206) 782-2126
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
