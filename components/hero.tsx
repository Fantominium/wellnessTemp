import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.png" alt="Wellness background" fill className="object-cover opacity-20" priority />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image src="/images/logo.png" alt="Harmony Wellness Logo" width={120} height={120} className="opacity-90" />
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 text-stone-800 leading-tight">
            Find Balance & Restoration
          </h1>

          <p className="text-xl md:text-2xl text-stone-600 mb-10 font-light leading-relaxed">
            Therapeutic massage tailored to your unique needs, helping you reconnect with your body's natural harmony.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#booking"
              className="px-8 py-3 bg-stone-800 text-white rounded-sm hover:bg-stone-700 transition-colors font-light tracking-wide"
            >
              Book a Session
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 border border-stone-300 text-stone-700 rounded-sm hover:bg-stone-100 transition-colors font-light tracking-wide"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <Link
          href="#about"
          className="text-stone-500 hover:text-stone-800 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
