import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Users, MessageSquare, Calendar, BarChart3 } from "lucide-react"

export default function CRM() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Bitrix24 CRM Solutions
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Transform your customer relationships with our comprehensive CRM solutions powered by Bitrix24.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Contact Management</h3>
              <p className="mt-2 text-base text-gray-500">
                Centralize and organize all your customer information in one place.
              </p>
            </Card>
            <Card className="p-6">
              <MessageSquare className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Communication Tools</h3>
              <p className="mt-2 text-base text-gray-500">
                Integrated chat, video calls, and email management.
              </p>
            </Card>
            <Card className="p-6">
              <Calendar className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Task & Calendar</h3>
              <p className="mt-2 text-base text-gray-500">
                Schedule meetings and manage tasks efficiently.
              </p>
            </Card>
            <Card className="p-6">
              <BarChart3 className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Analytics</h3>
              <p className="mt-2 text-base text-gray-500">
                Track performance and generate insightful reports.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Our CRM Solution?</h2>
          </div>
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                "Easy implementation and onboarding",
                "Customizable to your needs",
                "Integrated communication tools",
                "Advanced reporting capabilities",
                "Mobile access",
                "24/7 support"
              ].map((benefit) => (
                <div key={benefit} className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg leading-6 font-medium text-gray-900">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}