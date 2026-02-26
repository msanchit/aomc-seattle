import Image from "next/image";
import Link from "next/link";

const CLINICS = [
  {
    title: "The Acupuncture Clinic",
    description:
      "Uses body acupuncture, ear, face, electro, scalp, wrist-ankle, foot, hand acupuncture, moxibustion, cupping, gua sha, bleeding therapy. Treats sports injuries, auto accident injuries, arthritis, pain, stroke, digestive disorders, addictions, depression, insomnia, chronic fatigue.",
  },
  {
    title: "The Herbal Medicine Clinic",
    description:
      "Herbal consultation, individually-based formulas, raw herbs, patent herbal medicine, granules. Treats flu, cold, fever, cough, chronic fatigue, arthritis, stroke, allergies, skin infections, post-surgical syndromes.",
  },
  {
    title: "Auto Accident & Sports Injury Clinic",
    description:
      "Acupuncture, Chinese herbal medicine, Tuina, TDP therapy, Qigong, nutrition. Treats acute and chronic injuries from auto accidents, sports, martial arts.",
  },
  {
    title: "The Pediatric Clinic",
    description:
      "Children's chronic digestive problems, poor nutrition, poor sleep, cough, wheezing.",
  },
  {
    title: "The Gynecological Clinic",
    description:
      "Irregular menstruation, dysmenorrhea, PMS, menopause syndromes, infertility.",
  },
  {
    title: "Nutrition & Lifestyle Clinic",
    description:
      "Nutrition counseling, stress management, lifestyle optimization based on individual diagnosis.",
  },
  {
    title: "The Herbal Pharmacy",
    description:
      "Raw herbs, granules, patent herbs, tinctures, syrups, TDP lamps, electro-acupuncture devices, books. Open to all patients and practitioners.",
  },
];

const LOCATIONS = [
  { name: "Ballard", address: "9015 Holman Rd NW" },
  { name: "Belltown", address: "2701 Western Ave" },
];

export default function ClinicsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Our Specialty Clinics
          </h1>
          <p className="text-lg text-stone-500 mb-8">
            The Acupuncture and Oriental Medicine Centers (AOMC) are world-class
            Oriental Medicine facilities minutes away from the prestigious
            Western Medical Centers of Fred Hutchinson, Harborview, Swedish
            Hospital in Ballard, Northwest Hospital & Medical Center, the
            University of Washington, Virginia Mason Medical Center and Swedish
            Medical Center-First Hill.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-56">
              <Image
                src="/images/generated/treatment-room.png"
                alt="Modern acupuncture treatment room"
                width={600}
                height={338}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-56">
              <Image
                src="/images/generated/pharmacy-herbs.png"
                alt="Traditional Chinese herbal pharmacy"
                width={600}
                height={338}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Two Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="p-7 rounded-2xl bg-stone-50 border border-stone-100"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {loc.name}
                </h3>
                <p className="text-stone-600 leading-relaxed">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Departments - Single column list */}
      <section className="py-16 md:py-20 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Clinic Departments
          </h2>
          <p className="text-lg text-stone-500 mb-12">
            Comprehensive care across our specialized clinics.
          </p>
          <div className="flex flex-col gap-8">
            {CLINICS.map((clinic) => (
              <div
                key={clinic.title}
                className="p-7 rounded-2xl bg-stone-50 border border-stone-100 border-l-4 border-l-primary"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {clinic.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {clinic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
