import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-3">AOMC Seattle</h3>
            <p className="leading-relaxed mb-6">
              Decades of experience in acupuncture, Chinese herbal medicine,
              and holistic wellness care.
            </p>
            <div className="space-y-2">
              <p className="text-stone-300 font-medium">Office Hours</p>
              <p>Mon &ndash; Fri: 9:00 AM &ndash; 6:30 PM</p>
              <p>Saturday: 9:00 AM &ndash; 1:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Ballard</h4>
            <address className="not-italic space-y-1 mb-6">
              <p>9015 Holman Rd. NW, Suite 1</p>
              <p>Seattle, WA 98117</p>
            </address>
            <h4 className="text-white font-semibold mb-3">Belltown</h4>
            <address className="not-italic space-y-1 mb-6">
              <p>2701 Western Ave.</p>
              <p>Seattle, WA 98121</p>
            </address>
            <a
              href="tel:2067822126"
              className="text-white text-lg font-semibold hover:text-primary-light transition-colors"
            >
              (206) 782-2126
            </a>
            <br />
            <a
              href="mailto:aomcseattle@gmail.com"
              className="text-stone-400 hover:text-white transition-colors"
            >
              aomcseattle@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/staff", label: "Our Physicians" },
                { href: "/tcm", label: "What is TCM?" },
                { href: "/conditions", label: "Conditions Treated" },
                { href: "/clinics", label: "Specialty Clinics" },
                { href: "/education", label: "Education" },
                { href: "/faqs", label: "FAQs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-stone-800 text-center text-stone-600 text-[15px]">
          &copy; {new Date().getFullYear()} Acupuncture & Oriental Medicine
          Center &middot; All rights reserved
        </div>
      </div>
    </footer>
  );
}
