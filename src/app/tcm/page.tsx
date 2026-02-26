import Image from "next/image";
import Link from "next/link";

const PILLARS = [
  {
    title: "Acupuncture",
    description: "Insertion of fine needles at strategic points to restore balance and promote healing.",
  },
  {
    title: "Chinese Herbal Medicine",
    description: "Custom formulations of herbs to address internal imbalances and support wellness.",
  },
  {
    title: "Tuina (Bodywork)",
    description: "Therapeutic massage techniques that manipulate soft tissue and joints.",
  },
  {
    title: "Dietary Therapy",
    description: "Food-based guidance aligned with TCM principles for optimal health.",
  },
  {
    title: "Physical Therapy",
    description: "Movement and exercise therapies to restore function and mobility.",
  },
];

export default function TCMPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Traditional Chinese Medicine
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <p className="text-stone-600 leading-relaxed">
              The Traditional Chinese Medicine (TCM) or Oriental Medicine is a
              comprehensive and complicated traditional Chinese medical system
              of health care that includes acupuncture, Chinese herbal
              medicine, Tuina, dietary therapy and physical therapies. It has
              been practiced thousands of years and served as the major
              medicine of health care in China. Acupuncture, Chinese herbal
              medicine, Tuina, dietary therapy and physical therapy are five
              essential parts of this traditional Chinese medical system.
              These therapies and techniques stimulate the patient&apos;s
              energy system, restore balance of Yin, Yang, Qi and Blood and
              facilitate the body&apos;s innate healing capabilities.
            </p>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/generated/tcm-herbs.png"
                alt="Traditional Chinese Medicine herbs and ingredients"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            The Five Pillars of TCM
          </h2>
          <p className="text-lg text-stone-500 mb-12">
            Five essential parts of this traditional Chinese medical system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-7 rounded-2xl bg-stone-50 border border-stone-100 border-l-[2px] border-l-primary"
              >
                <h3 className="font-bold text-stone-900 mb-2">{pillar.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/clinics"
              className="text-primary font-semibold hover:underline"
            >
              Explore our specialty clinics →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
