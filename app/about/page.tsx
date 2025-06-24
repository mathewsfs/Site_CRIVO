import { Card } from "@/components/ui/card"
import { Brain, Target, Shield, Users } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              About Crivo Digital
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Transforming businesses through intelligent solutions and expertise in CRM and business management.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Drives Us Forward
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6">
                <Brain className="h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
                <p className="mt-2 text-base text-gray-500">
                  Constantly evolving and implementing cutting-edge solutions.
                </p>
              </Card>
              <Card className="p-6">
                <Target className="h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Excellence</h3>
                <p className="mt-2 text-base text-gray-500">
                  Committed to delivering the highest quality in every project.
                </p>
              </Card>
              <Card className="p-6">
                <Shield className="h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Trust</h3>
                <p className="mt-2 text-base text-gray-500">
                  Building lasting relationships based on transparency and reliability.
                </p>
              </Card>
              <Card className="p-6">
                <Users className="h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Partnership</h3>
                <p className="mt-2 text-base text-gray-500">
                  Working together with clients to achieve their business goals.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                As official Bitrix24 partners, we've helped numerous businesses transform their operations through intelligent CRM solutions and process automation. Our expertise in artificial intelligence and business management has made us a trusted partner for companies seeking digital transformation.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                We believe in the power of technology to streamline operations, enhance customer relationships, and drive business growth. Our team of experts is dedicated to delivering customized solutions that meet the unique needs of each client.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}