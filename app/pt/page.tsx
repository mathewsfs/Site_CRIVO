"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, BarChart3, Users, MessageSquare, ArrowRight, CheckCircle2, Target, Shield, Settings, Zap, Bot, Workflow, Lightbulb, Cpu, Calendar, Building2, FileStack, UserCircle2, Globe2, Smartphone } from "lucide-react"
import { useEffect } from "react"

export default function Home() {
  const whatsappLink = "https://wa.me/5511937334632?text=Ol%C3%A1%21+Quero+conhecer+a+Crivo+%3D%29"

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href')!)
        target?.scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }, [])

  return (
    <main className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section id="home" className="py-20 bg-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transforme sua</span>
                <span className="block text-primary">Gestão Empresarial</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Melhore seus resultados com soluções de Inteligência Artificial, CRM e automação de processos. 
Parceiros oficiais Bitrix24.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-white">
                    Comece Agora
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
              Plataforma Completa de Gestão Empresarial
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Confiado por mais de 15 milhões de empresas em todo o mundo para transformar suas operações
            </p>
          </div>

          <div className="mb-16">
            <div className="mx-auto max-w-5xl">
              <img
                src="https://bitrix24public.com/crivo.bitrix24.com.br/docs/pub/67f5fcc207a7321b09857235ddfbbb73/showPreview/?&token=qr03rnnpjlbv"
                alt="Interface da Plataforma Bitrix24"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">CRM Integrado</h3>
              <p className="mt-2 text-base text-gray-500">
                Gestão eficiente de leads e vendas com rastreamento completo de clientes
              </p>
            </Card>
            <Card className="p-6">
              <MessageSquare className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Comunicação em Tempo Real</h3>
              <p className="mt-2 text-base text-gray-500">
                Chat, videoconferência e integração com telefonia
              </p>
            </Card>
            <Card className="p-6">
              <Workflow className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Gestão de Projetos</h3>
              <p className="mt-2 text-base text-gray-500">
                Ferramentas ágeis de gestão de tarefas e projetos
              </p>
            </Card>
            <Card className="p-6">
              <Settings className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Automação de Processos</h3>
              <p className="mt-2 text-base text-gray-500">
                Fluxos de trabalho personalizáveis e automação de processos
              </p>
            </Card>
            <Card className="p-6">
              <Building2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Intranet Corporativa</h3>
              <p className="mt-2 text-base text-gray-500">
                Intranet social para melhor colaboração em equipe
              </p>
            </Card>
            <Card className="p-6">
              <Calendar className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Calendário Compartilhado</h3>
              <p className="mt-2 text-base text-gray-500">
                Compartilhamento de calendário e gestão de documentos
              </p>
            </Card>
            <Card className="p-6">
              <UserCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Ferramentas de RH</h3>
              <p className="mt-2 text-base text-gray-500">
                Gestão de RH e controle de ponto
              </p>
            </Card>
            <Card className="p-6">
              <Globe2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Presença Online</h3>
              <p className="mt-2 text-base text-gray-500">
                Sites e lojas online integrados
              </p>
            </Card>
            <Card className="p-6">
              <Smartphone className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Aplicativos Móveis</h3>
              <p className="mt-2 text-base text-gray-500">
                Ferramentas de produtividade móvel para trabalho em movimento
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Serviços</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tudo que Você Precisa para Crescer
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Soluções completas para otimizar seus processos e aumentar a produtividade.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">CRM Inteligente</h3>
                <p className="mt-2 text-base text-gray-500">
                  Gestão completa do relacionamento com o cliente, do primeiro contato ao pós-venda.
                </p>
              </Card>
              <Card className="p-6">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Automação de Processos</h3>
                <p className="mt-2 text-base text-gray-500">
                  Automatize tarefas repetitivas e aumente a eficiência operacional da sua empresa.
                </p>
              </Card>
              <Card className="p-6">
                <Brain className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Inteligência Artificial</h3>
                <p className="mt-2 text-base text-gray-500">
                  Análise preditiva e insights inteligentes para tomada de decisões estratégicas.
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
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Sobre Nós</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nossos Valores e História
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
            <Card className="p-6">
              <Brain className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Inovação</h3>
              <p className="mt-2 text-base text-gray-500">
                Constantemente evoluindo e implementando soluções de ponta.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Excelência</h3>
              <p className="mt-2 text-base text-gray-500">
                Comprometidos em entregar a mais alta qualidade em cada projeto.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Confiança</h3>
              <p className="mt-2 text-base text-gray-500">
                Construindo relacionamentos duradouros baseados em transparência e confiabilidade.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Parceria</h3>
              <p className="mt-2 text-base text-gray-500">
                Trabalhando junto com os clientes para alcançar seus objetivos empresariais.
              </p>
            </Card>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Nossa História</h3>
              <p className="mt-3 text-lg text-gray-500">
                Como parceiros oficiais Bitrix24, ajudamos inúmeras empresas a transformar suas operações através de soluções inteligentes de CRM e automação de processos. Nossa expertise em inteligência artificial e gestão empresarial nos tornou um parceiro confiável para empresas que buscam transformação digital.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Acreditamos no poder da tecnologia para otimizar operações, melhorar relacionamentos com clientes e impulsionar o crescimento dos negócios. Nossa equipe de especialistas é dedicada a entregar soluções personalizadas que atendam às necessidades únicas de cada cliente.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Colaboração em equipe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Soluções em IA</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Aproveite o Poder da IA
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="p-6">
              <Brain className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Análise Preditiva</h3>
              <p className="mt-2 text-base text-gray-500">
                Use IA para prever tendências e tomar decisões baseadas em dados.
              </p>
            </Card>
            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Automação Inteligente</h3>
              <p className="mt-2 text-base text-gray-500">
                Automação de processos inteligente que aprende e se adapta.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Insights de Clientes</h3>
              <p className="mt-2 text-base text-gray-500">
                Análise do comportamento e preferências dos clientes com IA.
              </p>
            </Card>
            <Card className="p-6">
              <Cpu className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Machine Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Algoritmos avançados que melhoram com o tempo para melhores resultados.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="py-20 bg-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Automação</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Otimize seu Negócio
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="p-6">
              <Settings className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Automação de Fluxos</h3>
              <p className="mt-2 text-base text-gray-500">
                Automatize tarefas repetitivas e otimize processos empresariais para maior eficiência.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Gatilhos Inteligentes</h3>
              <p className="mt-2 text-base text-gray-500">
                Configure respostas automatizadas baseadas em eventos ou condições específicas.
              </p>
            </Card>
            <Card className="p-6">
              <Bot className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Chatbots</h3>
              <p className="mt-2 text-base text-gray-500">
                Implemente chatbots com IA para atendimento ao cliente e geração de leads.
              </p>
            </Card>
            <Card className="p-6">
              <Workflow className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Otimização de Processos</h3>
              <p className="mt-2 text-base text-gray-500">
                Analise e otimize seus processos empresariais para máxima eficiência.
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
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-primary-light">
                Agende uma demonstração gratuita e descubra como podemos ajudar sua empresa a crescer.
              </p>
              <div className="mt-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    Agendar Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:ml-8">
              {[
                "Implementação Rápida",
                "Suporte 24/7",
                "Treinamento Completo",
                "ROI Garantido",
                "Personalização Total",
                "Máxima Segurança"
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