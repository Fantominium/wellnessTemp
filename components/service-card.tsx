import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  duration: string
  price: string
}

export default function ServiceCard({ title, description, duration, price }: ServiceCardProps) {
  return (
    <Card className="border-stone-200 hover:border-stone-300 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="font-serif font-light text-xl text-stone-800">{title}</CardTitle>
        <div className="flex items-center text-sm text-stone-500 font-light">
          <span>{duration}</span>
          <span className="mx-2">•</span>
          <span>{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-stone-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <a href="#booking" className="text-stone-700 hover:text-stone-900 text-sm font-light flex items-center">
          Book this service
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </CardFooter>
    </Card>
  )
}
