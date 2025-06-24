import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Brain, Lightbulb, Target, Cpu } from "lucide-react"

export default function AI() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              AI-Powered Solutions
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Harness the power of artificial intelligence to transform your business operations.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Discover AI Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="p-6">
              <Brain className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Predictive Analytics</h3>
              <p className="mt-2 text-base text-gray-500">
                Use AI to forecast trends and make data-driven decisions.
              </p>
            </Card>
            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Automation</h3>
              <p className="mt-2 text-base text-gray-500">
                Intelligent process automation that learns and adapts.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Customer Insights</h3>
              <p className="mt-2 text-base text-gray-500">
                AI-powered analysis of customer behavior and preferences.
              </p>
            </Card>
            <Card className="p-6">
              <Cpu className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Machine Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Advanced algorithms that improve over time for better results.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}