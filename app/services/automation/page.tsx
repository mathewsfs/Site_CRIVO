import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Settings, Zap, Bot, Workflow } from "lucide-react"

export default function Automation() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Business Process Automation
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Streamline your operations and boost efficiency with intelligent automation solutions.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Explore Solutions
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
              <Settings className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Workflow Automation</h3>
              <p className="mt-2 text-base text-gray-500">
                Automate repetitive tasks and streamline business processes for increased efficiency.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Triggers</h3>
              <p className="mt-2 text-base text-gray-500">
                Set up automated responses based on specific events or conditions.
              </p>
            </Card>
            <Card className="p-6">
              <Bot className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Chatbots</h3>
              <p className="mt-2 text-base text-gray-500">
                Implement AI-powered chatbots for customer service and lead generation.
              </p>
            </Card>
            <Card className="p-6">
              <Workflow className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Process Optimization</h3>
              <p className="mt-2 text-base text-gray-500">
                Analyze and optimize your business processes for maximum efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}