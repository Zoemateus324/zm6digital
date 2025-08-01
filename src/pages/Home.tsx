import React from 'react';
import { ArrowRight, Code, Megaphone, Zap, Star, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Desenvolvimento Web',
      description: 'Sites modernos e sistemas no-code que convertem visitantes em clientes.',
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Marketing Digital',
      description: 'Social media, tráfego pago e estratégias que geram resultados reais.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Automação',
      description: 'Funis de vendas e processos automatizados para escalar seu negócio.',
    },
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: '50+', label: 'Clientes Atendidos' },
    { icon: <Award className="h-6 w-6" />, number: '100+', label: 'Projetos Entregues' },
    { icon: <TrendingUp className="h-6 w-6" />, number: '300%', label: 'ROI Médio' },
  ];

  const testimonials = [
    {
      name: 'André Zanforlin',
      company: 'Lounge Multimídia',
      text: 'A ZM6 Digital transformou nossa presença online.',
      rating: 5,
    },
    {
      name: 'Cesar',
      company: 'Café da roça lapa',
      text: 'Profissionais excepcionais! Entregaram muito além do que esperávamos. Recomendo de olhos fechados.',
      rating: 5,
    },
    {
      name: 'Freddy Hermann',
      company: 'Habitat Naturale',
      text: 'O site ficou perfeito e o sistema de automação revolucionou nossos processos. Equipe nota 10!',
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Soluções inteligentes em 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600"> Marketing</span> e 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600"> Tecnologia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sites, sistemas e estratégias digitais que geram resultado. 
                Transforme sua presença online em uma máquina de vendas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                >
                  Conheça Nossa História
                </button>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white mb-4">
                  <Zap className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Marketing + Tecnologia</h3>
                  <p className="text-blue-100">Tudo em um só lugar</p>
                </div>
                <div className="space-y-3">
                  {['Sites que convertem', 'Campanhas que performam', 'Sistemas que escalam'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital em resultados concretos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                onClick={() => setCurrentPage('services')}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Resultados que falam por si só
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Fale com nossos especialistas e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            Fale com um Especialista
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;