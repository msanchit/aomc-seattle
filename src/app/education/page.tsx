import Link from "next/link";

const PROGRAMS = [
  "Traditional Chinese Trauma and Sports Injury Medicine",
  "Chinese Patent Herbal Medicine",
  "Advanced Chinese Herbal Medicine",
  "TCM Treatment For Digestive Disorders",
  "TCM Treatment For Mental Illnesses",
  "TCM Treatment For Neuromuscular Disorders",
  "TCM Treatment For Sexual Disorders",
  "TCM Treatment For Stroke",
  "TCM Treatment For Chronic Fatigue",
  "Chinese Nutrition For Health",
  "Preparing Chinese Raw Herbal Medicine",
  "Processing Chinese Herbal Medicine For External Use",
  "Introduction To Moxibustion Therapy",
  "Chinese Herbal Medicinal Wine",
  "TCM For Children's Digestive Problems",
  "TCM For Heart Disorders",
  "Introduction To Cupping Therapy",
];

export default function EducationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Continuing Education
          </h1>
          <p className="text-lg text-stone-500 mb-8">
            Advanced training for acupuncture and TCM professionals, plus
            introductory courses for the public.
          </p>
          <p className="text-stone-600 leading-relaxed max-w-3xl">
            All instructors in this department are highly experienced in
            teaching, education and clinic. The primary mission is delivery of
            advanced training and continuing education to acupuncture and TCM
            professionals.
          </p>
        </div>
      </section>

      {/* Programs - Numbered list */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Programs
          </h2>
          <p className="text-lg text-stone-500 mb-12">
            Our continuing education offerings for practitioners and the public.
          </p>
          <ol className="list-decimal list-inside space-y-6">
            {PROGRAMS.map((program) => (
              <li
                key={program}
                className="text-stone-600 leading-relaxed pl-2"
              >
                <span className="font-bold text-stone-900">{program}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Contact
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Get in touch for program details and registration.
          </p>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold text-stone-900 mb-2">Location</h3>
              <p className="text-stone-600 leading-relaxed">
                9015 Holman Road NW Suite 1, Seattle, WA 98117
              </p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-2">Phone</h3>
              <p className="text-stone-600 leading-relaxed">
                <a href="tel:2062345893" className="text-primary font-semibold hover:underline">
                  (206) 234-5893
                </a>{" "}
                or{" "}
                <a href="tel:2067822126" className="text-primary font-semibold hover:underline">
                  (206) 782-2126
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-2">Email</h3>
              <p className="text-stone-600 leading-relaxed">
                <a
                  href="mailto:aomcseattle@gmail.com"
                  className="text-primary font-semibold hover:underline"
                >
                  aomcseattle@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-2">Instructors</h3>
              <p className="text-stone-600 leading-relaxed">
                Jianfeng Yang L.Ac. O.M.D., Guojun Duan L.Ac. O.M.D.
              </p>
            </div>
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
