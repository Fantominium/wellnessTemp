import BookingForm from "@/components/booking-form"
import ServiceCard from "@/components/service-card"
import Hero from "@/components/hero"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero />

      <section id="services" className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-stone-800">Our Approach</h2>
          <div className="w-24 h-1 bg-stone-300 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-stone-600 leading-relaxed">
            We believe in the healing power of touch and mindful presence. Our therapeutic massage sessions are tailored
            to your unique needs, helping you find balance and restoration in body and mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            title="Swedish Massage"
            description="A gentle, relaxing massage that improves circulation and eases tension."
            duration="60 min"
            price="$85"
          />
          <ServiceCard
            title="Deep Tissue"
            description="Targets deeper muscle layers to release chronic patterns of tension."
            duration="75 min"
            price="$95"
          />
          <ServiceCard
            title="Hot Stone Therapy"
            description="Combines massage with the placement of smooth, heated stones on the body."
            duration="90 min"
            price="$110"
          />
        </div>
      </section>

      <section id="booking" className="py-16 px-4 md:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-stone-800">Book Your Session</h2>
            <div className="w-24 h-1 bg-stone-300 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-stone-600">
              Take the first step toward relaxation and wellness. Schedule your massage therapy session today.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  )
}
