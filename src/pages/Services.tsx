import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, BarChart3, Palette, Settings, MessageSquare } from 'lucide-react';
import { trackFaleConosco } from '../utils/analytics';
import Seo from '../components/Seo';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Sites Institucionais e Landing Pages',
      description: 'Sites responsivos e otimizados para conversão, criados com as melhores práticas de UX/UI e SEO.',
      features: ['Design responsivo', 'Otimização SEO', 'Alta conversão', 'Carregamento rápido'],
     
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: 'Desenvolvimento de sistemas personalizados',
      description: 'Sistemas web completos e aplicativos sem ou com código, com funcionalidades avançadas e integrations.',
      features: ['Desenvolvimento rápido', 'Integração com APIs', 'Dashboard personalizado', 'Escalabilidade'],
    
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: 'Social Media e Tráfego Pago',
      description: 'Gestão completa de redes sociais e campanhas de tráfego pago que geram resultados mensuráveis.',
      features: ['Gestão de redes sociais', 'Campanhas Google Ads', 'Facebook e Instagram Ads', 'Relatórios detalhados'],
     
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: 'Branding e Identidade Visual',
      description: 'Criação de marca completa, desde logo até manual de identidade visual para fortalecer sua presença.',
      features: ['Logo e identidade', 'Manual de marca', 'Aplicações diversas', 'Versões digitais e impressas'],
    
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: 'Automação e Funil de Vendas',
      description: 'Sistemas de automação de marketing que nutrem leads e convertem prospects em clientes.',
      features: ['Automação de email', 'Chatbots inteligentes', 'Funis de conversão', 'Integração CRM'],
    
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: 'Consultoria Estratégica',
      description: 'Análise completa do seu negócio digital e desenvolvimento de estratégias personalizadas.',
      features: ['Auditoria digital', 'Planejamento estratégico', 'Análise de concorrência', 'Plano de ação'],
     
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Descoberta',
      description: 'Entendemos seu negócio, objetivos e desafios para criar a estratégia ideal.',
    },
    {
      step: '02',
      title: 'Planejamento',
      description: 'Desenvolvemos um plano detalhado com prazos, entregas e métricas de sucesso.',
    },
    {
      step: '03',
      title: 'Execução',
      description: 'Implementamos as soluções com acompanhamento constante e comunicação transparente.',
    },
    {
      step: '04',
      title: 'Otimização',
      description: 'Monitoramos resultados e fazemos ajustes contínuos para maximizar o desempenho.',
    },
  ];

  return (
    <div className="pt-16">
      <Seo
        title="Serviços de marketing, tecnologia e automação"
        description="Veja como a ZM6 Digital desenvolve sites, sistemas, automações, branding e campanhas de tráfego pago para aumentar suas vendas."
        canonical="/services"
        keywords={[
          'serviços de marketing',
          'desenvolvimento web profissional',
          'automação de marketing',
          'branding e tráfego pago',
        ]}
        type="service"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas de marketing digital e tecnologia para transformar sua presença online em resultados concretos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    trackFaleConosco();
                    navigate('/contact');
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Nosso processo estruturado garante resultados excepcionais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Fale conosco e descubra como podemos ajudar sua empresa a crescer no digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                trackFaleConosco();
                navigate('/contact');
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Ver Portfólio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;