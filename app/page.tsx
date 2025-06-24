"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, BarChart3, Users, MessageSquare, ArrowRight, CheckCircle2, Target, Shield, Settings, Zap, Bot, Workflow, Lightbulb, Cpu, Calendar, Building2, FileStack, UserCircle2, Globe2, Smartphone } from "lucide-react"
import { useEffect } from "react"

export default function Home() {
  const whatsappLink = "https://wa.me/5511937334632?text=Hello!%20I%20want%20to%20know%20more%20about%20Crivo%20%3D%29"

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const target = href ? document.querySelector(href) : null;
        target?.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, [])

  return (
    <main className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section id="home" className="py-20 bg-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your</span>
                <span className="block text-primary">Business Management</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Enhance your results with Artificial Intelligence, CRM and process automation. 
              Official Bitrix24 partners.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bitrix24 Section */}
      <section id="bitrix24" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Bitrix24</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Complete Business Management Platform
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Trusted by over 15 million companies worldwide to transform their business operations
            </p>
          </div>

          <div className="mb-16">
            <div className="mx-auto max-w-5xl">
              <img
                src="https://bitrix24public.com/crivo.bitrix24.com.br/docs/pub/67f5fcc207a7321b09857235ddfbbb73/showPreview/?&token=qr03rnnpjlbv"
                alt="Bitrix24 Platform Interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Integrated CRM</h3>
              <p className="mt-2 text-base text-gray-500">
                Efficient lead and sales management with complete customer tracking
              </p>
            </Card>
            <Card className="p-6">
              <MessageSquare className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Communication</h3>
              <p className="mt-2 text-base text-gray-500">
                Chat, video conferencing, and telephony integration
              </p>
            </Card>
            <Card className="p-6">
              <Workflow className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Project Management</h3>
              <p className="mt-2 text-base text-gray-500">
                Agile task and project management tools
              </p>
            </Card>
            <Card className="p-6">
              <Settings className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Process Automation</h3>
              <p className="mt-2 text-base text-gray-500">
                Customizable workflows and business process automation
              </p>
            </Card>
            <Card className="p-6">
              <Building2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Corporate Intranet</h3>
              <p className="mt-2 text-base text-gray-500">
                Social intranet for enhanced team collaboration
              </p>
            </Card>
            <Card className="p-6">
              <Calendar className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Shared Calendar</h3>
              <p className="mt-2 text-base text-gray-500">
                Calendar sharing and document management
              </p>
            </Card>
            <Card className="p-6">
              <UserCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">HR Tools</h3>
              <p className="mt-2 text-base text-gray-500">
                HR management and time tracking features
              </p>
            </Card>
            <Card className="p-6">
              <Globe2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Online Presence</h3>
              <p className="mt-2 text-base text-gray-500">
                Integrated websites and online stores
              </p>
            </Card>
            <Card className="p-6">
              <Smartphone className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Mobile Apps</h3>
              <p className="mt-2 text-base text-gray-500">
                Mobile productivity tools for work on the go
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Grow
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Complete solutions to optimize your processes and increase productivity.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Intelligent CRM</h3>
                <p className="mt-2 text-base text-gray-500">
                  Complete customer relationship management, from first contact to after-sales.
                </p>
              </Card>
              <Card className="p-6">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Process Automation</h3>
                <p className="mt-2 text-base text-gray-500">
                  Automate repetitive tasks and increase your company's operational efficiency.
                </p>
              </Card>
              <Card className="p-6">
                <Brain className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Artificial Intelligence</h3>
                <p className="mt-2 text-base text-gray-500">
                  Predictive analysis and intelligent insights for strategic decision making.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Values and Story
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
            <Card className="p-6">
              <Brain className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                Constantly evolving and implementing cutting-edge solutions.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-2 text-base text-gray-500">
                Committed to delivering the highest quality in every project.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Trust</h3>
              <p className="mt-2 text-base text-gray-500">
                Building lasting relationships based on transparency and reliability.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Partnership</h3>
              <p className="mt-2 text-base text-gray-500">
                Working together with clients to achieve their business goals.
              </p>
            </Card>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Our Story</h3>
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

      {/* AI Solutions Section */}
      <section id="ai" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">AI Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Harness the Power of AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="p-6">
              <Brain className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Predictive Analytics</h3>
              <p className="mt-2 text-base text-gray-500">
                Use AI to forecast trends and make data-driven decisions.
              </p>
            </Card>
            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Automation</h3>
              <p className="mt-2 text-base text-gray-500">
                Intelligent process automation that learns and adapts.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Customer Insights</h3>
              <p className="mt-2 text-base text-gray-500">
                AI-powered analysis of customer behavior and preferences.
              </p>
            </Card>
            <Card className="p-6">
              <Cpu className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Machine Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Advanced algorithms that improve over time for better results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="py-20 bg-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Automation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Streamline Your Business
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="p-6">
              <Settings className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Workflow Automation</h3>
              <p className="mt-2 text-base text-gray-500">
                Automate repetitive tasks and streamline business processes for increased efficiency.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Triggers</h3>
              <p className="mt-2 text-base text-gray-500">
                Set up automated responses based on specific events or conditions.
              </p>
            </Card>
            <Card className="p-6">
              <Bot className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Chatbots</h3>
              <p className="mt-2 text-base text-gray-500">
                Implement AI-powered chatbots for customer service and lead generation.
              </p>
            </Card>
            <Card className="p-6">
              <Workflow className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Process Optimization</h3>
              <p className="mt-2 text-base text-gray-500">
                Analyze and optimize your business processes for maximum efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-primary-light">
                Schedule a free demo and discover how we can help your company grow.
              </p>
              <div className="mt-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:ml-8">
              {[
                "Quick Implementation",
                "24/7 Support",
                "Complete Training",
                "Guaranteed ROI",
                "Full Customization",
                "Maximum Security"
              ].map((feature) => (
                <div key={feature} className="flex items-center col-span-1 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary-light" />
                  <span className="ml-2 text-sm text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}