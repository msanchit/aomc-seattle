import Link from "next/link";

const CONDITIONS = [
  "Bone, muscle, joint disorders",
  "Nervous system disorders",
  "Acute and chronic pain disorders",
  "Gastrointestinal disorders",
  "Emotional & psychological disorders",
  "Gynecological & pediatric disorders",
  "Urogenital & fertility disorders",
  "Respiratory disorders",
  "Circulatory disorders",
  "Eye, ear, nose & throat disorders",
  "Addictions",
];

export default function ConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Conditions Treated
          </h1>
          <p className="text-lg text-stone-500 mb-8">
            The AOMC provides primary care for a wide range of conditions using
            acupuncture, Chinese herbal medicine, and holistic therapies.
          </p>
        </div>
      </section>

      {/* Conditions List */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              {CONDITIONS.slice(0, 6).map((condition) => (
                <li
                  key={condition}
                  className="flex items-start gap-3 text-stone-600 leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  {condition}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {CONDITIONS.slice(6).map((condition) => (
                <li
                  key={condition}
                  className="flex items-start gap-3 text-stone-600 leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          {/* WHO Recognition Callout */}
          <div className="mt-12 p-7 rounded-2xl bg-stone-50 border border-stone-100">
            <p className="text-stone-600 leading-relaxed">
              The World Health Organization recognizes acupuncture&apos;s ability
              to treat over 43 common disorders.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/clinics"
              className="text-primary font-semibold hover:underline"
            >
              Our specialty clinics →
            </Link>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
