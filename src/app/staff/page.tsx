import Image from "next/image";
import Link from "next/link";

const STAFF = [
  {
    name: "Jianfeng Yang",
    credentials: "L.Ac., M.Ac., OMD",
    image: "/images/images/DrYang.jpg",
    imageWidth: 150,
    imageHeight: 221,
    experience: "40+ years experience, practiced since 1970",
    bio: "is a highly educated physician, researcher and professor of TCM. He was educated at Chengdu University of Traditional Chinese Medicine in China and began his practice in 1970. He taught acupuncture and TCM at Chengdu University for 16 years and came to Washington as an instructor and practitioner for NIAOM in 1992. He has been recognized globally and is considered an expert in Chinese Medicine. Jianfeng Yang has compassion and the skill to be especially effective in treating patients who suffer from auto accident and sports injuries, acute and chronic pain of muscles and joints, post-surgical syndromes, neuromuscular and digestive disorders, mental depression and stress, addictions, allergies and kidney disorders.",
  },
  {
    name: "Guojun Duan",
    credentials: "L.Ac., M.Ac., OMD",
    image: "/images/images/DrDuan.jpg",
    imageWidth: 150,
    imageHeight: 221,
    experience: "20+ years experience, practiced since 1991",
    bio: "has eight years of full-time training in Traditional Chinese Medicine and Western Medicine at Chengdu and Heilongjiang University of TCM, the two most prestigious universities in China. She started her practice as a physician in China in 1991 and served as a university educator on the subjects of acupuncture, moxibustion, neurology, and Chinese therapeutic massage. She has also written numerous articles and books on TCM and Acupuncture. Guojun Duan is a warm, personal and gifted physician specializing in the treatment of neuromuscular and gynecological disorders.",
  },
];

const SPECIALIZATIONS = [
  "Acupuncture",
  "Chinese Herbs",
  "Massage Therapy",
  "Chiropractics",
];

export default function StaffPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Our Physicians
          </h1>
          <p className="text-lg text-stone-500 mb-8">
            World-class practitioners trained at China&apos;s most prestigious
            universities.
          </p>
        </div>
      </section>

      {/* Staff Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
          {STAFF.map((doctor) => (
            <div
              key={doctor.name}
              className="flex flex-col sm:flex-row gap-6 p-7 rounded-2xl bg-stone-50 border border-stone-100"
            >
              <div className="shrink-0">
                <Image
                  src={doctor.image}
                  alt={`Dr. ${doctor.name}`}
                  width={doctor.imageWidth}
                  height={doctor.imageHeight}
                  className="rounded-2xl object-cover w-[150px] h-[221px]"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">
                  Dr. {doctor.name}
                </h2>
                <p className="text-[15px] text-stone-400 mt-1">
                  {doctor.credentials}
                </p>
                <p className="text-[15px] text-stone-400 mt-2">
                  {doctor.experience}
                </p>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  Dr. {doctor.name} {doctor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Specializations
          </h2>
          <div className="flex flex-wrap gap-4">
            {SPECIALIZATIONS.map((spec) => (
              <span
                key={spec}
                className="px-5 py-2.5 rounded-xl bg-primary/10 text-primary font-semibold"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/tcm"
              className="text-primary font-semibold hover:underline"
            >
              Learn about TCM →
            </Link>
            <Link
              href="/clinics"
              className="text-primary font-semibold hover:underline"
            >
              Our specialty clinics →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
