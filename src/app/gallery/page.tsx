"use client";

import { useState } from "react";
import Image from "next/image";

const FACILITY_IMAGES = [
  { src: "/gallery/facility/9015_Office__fs.jpg", alt: "9015 Office" },
  { src: "/gallery/facility/9015_Office_(1)_fs.jpg", alt: "9015 Office" },
  { src: "/gallery/facility/9015_Office_(4)_fs.jpg", alt: "9015 Office" },
  { src: "/gallery/facility/2701_Office__fs.jpg", alt: "2701 Office" },
  { src: "/gallery/facility/2701_Office_(1)_fs.jpg", alt: "2701 Office" },
  { src: "/gallery/facility/2701_Office_(4)_fs.jpg", alt: "2701 Office" },
  {
    src: "/gallery/facility/AOMC_Treatment_Room_I_(1)_fs.jpg",
    alt: "AOMC Treatment Room I",
  },
  {
    src: "/gallery/facility/AOMC_Treatment_Room_I_(3)_fs.jpg",
    alt: "AOMC Treatment Room I",
  },
  {
    src: "/gallery/facility/AOMC_Treatment_Room_II_(3)_fs.jpg",
    alt: "AOMC Treatment Room II",
  },
];

const PHARMACY_IMAGES = [
  {
    src: "/gallery/pharmacy/AOMC_Herbal_Pharmacies_I_(1)_fs.jpg",
    alt: "AOMC Herbal Pharmacies I",
  },
  {
    src: "/gallery/pharmacy/AOMC_Herbal_Pharmacies_I_(3)_fs.jpg",
    alt: "AOMC Herbal Pharmacies I",
  },
  {
    src: "/gallery/pharmacy/AOMC_Herbal_Pharmacies_II_(1)_fs.jpg",
    alt: "AOMC Herbal Pharmacies II",
  },
  {
    src: "/gallery/pharmacy/Chinese_Herbs__fs.jpg",
    alt: "Chinese Herbs",
  },
  {
    src: "/gallery/pharmacy/Chinese_Herbs_II_(17)_fs.jpg",
    alt: "Chinese Herbs II",
  },
  {
    src: "/gallery/pharmacy/Chinese_Herbs_III_(6)_fs.jpg",
    alt: "Chinese Herbs III",
  },
];

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Our Facilities & Pharmacy
          </h1>
          <p className="text-lg text-stone-500 mb-12">
            Take a look inside our clinics.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Facility</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {FACILITY_IMAGES.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightboxImage(img)}
                className="relative rounded-xl overflow-hidden shadow border border-stone-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                />
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-stone-900 mb-8">Herbal Pharmacy</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {PHARMACY_IMAGES.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightboxImage(img)}
                className="relative rounded-xl overflow-hidden shadow border border-stone-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-stone-300 transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full"
            aria-label="Close lightbox"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[85vh] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-stone-300">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
