import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The massage therapy at Harmony has been transformative for my chronic back pain. I leave each session feeling renewed.",
      author: "Sarah M.",
      role: "Yoga Instructor",
    },
    {
      quote:
        "I've tried many massage therapists, but the attention to detail and personalized approach here is unmatched.",
      author: "Michael T.",
      role: "Software Engineer",
    },
    {
      quote:
        "The calming atmosphere and skilled therapists make every visit a rejuvenating experience for both body and mind.",
      author: "Elena K.",
      role: "Healthcare Professional",
    },
  ]

  return (
    <section id="testimonials" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-stone-800">Client Experiences</h2>
          <div className="w-24 h-1 bg-stone-300 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-stone-600">
            Discover what our clients have to say about their journey to wellness with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-stone-200 bg-white">
              <CardContent className="pt-6">
                <div className="mb-4 text-stone-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-stone-300"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <p className="text-stone-600 font-light italic leading-relaxed">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t border-stone-100 pt-4">
                <div>
                  <p className="font-medium text-stone-800">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
