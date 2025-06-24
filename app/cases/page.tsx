import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, BarChart3, Brain } from "lucide-react"

const cases = [
  {
    title: "Manufacturing Company",
    description: "Increased productivity by 45% through process automation",
    industry: "Manufacturing",
    icon: BarChart3,
    results: [
      "45% increase in productivity",
      "60% reduction in manual data entry",
      "30% improvement in customer response time"
    ]
  },
  {
    title: "Tech Startup",
    description: "Streamlined customer management with AI-powered CRM",
    industry: "Technology",
    icon: Brain,
    results: [
      "85% faster lead qualification",
      "40% increase in customer retention",
      "2x increase in sales conversion"
    ]
  },
  {
    title: "Service Provider",
    description: "Enhanced customer service with integrated communication",
    industry: "Services",
    icon: Users,
    results: [
      "90% customer satisfaction rate",
      "50% reduction in response time",
      "35% increase in repeat business"
    ]
  }
]

export default function Cases() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Success Stories
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Discover how we&apos;ve helped businesses transform their operations and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((case_study, index) => {
              const Icon = case_study.icon
              return (
                <Card key={index} className="p-6">
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {case_study.title}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {case_study.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {case_study.industry}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {case_study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full text-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl text-primary-light">
            Join our success stories and take your business to the next level.
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}