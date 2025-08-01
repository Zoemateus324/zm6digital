import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Moda Feminina',
      category: 'Desenvolvimento Web',
      description: 'Loja virtual completa com sistema de pagamento, gestão de estoque e painel administrativo.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-commerce', 'Bubble.io', 'Stripe'],
      results: '+200% vendas online',
    },
    {
      title: 'Clínica Médica Digital',
      category: 'Sistema No-Code',
      description: 'Plataforma para agendamento de consultas, prontuário eletrônico e gestão de pacientes.',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Bubble.io', 'Automação', 'CRM'],
      results: '90% redução tempo administrativo',
    },
    {
      title: 'Consultoria Empresarial',
      category: 'Marketing Digital',
      description: 'Campanha completa de tráfego pago e social media para consultoria em gestão.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Google Ads', 'Social Media', 'Landing Page'],
      results: '400% ROI em campanhas',
    },
    {
      title: 'Startup EdTech',
      category: 'Branding + Web',
      description: 'Identidade visual completa e plataforma educacional para startup de tecnologia.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'UX/UI', 'Sistema'],
      results: 'Captação R$ 500k investimento',
    },
    {
      title: 'Restaurante Gourmet',
      category: 'Automação',
      description: 'Sistema de pedidos online, cardápio digital e automação de WhatsApp.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Automação', 'WhatsApp Bot', 'Website'],
      results: '150% aumento pedidos delivery',
    },
    {
      title: 'Imobiliária Regional',
      category: 'Site + Tráfego',
      description: 'Website otimizado para SEO e campanhas de tráfego pago para geração de leads.',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Google Ads', 'Lead Generation'],
      results: '300% mais leads qualificados',
    },
  ];

  const categories = ['Todos', 'Desenvolvimento Web', 'Sistema No-Code', 'Marketing Digital', 'Branding + Web', 'Automação', 'Site + Tráfego'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos e os resultados excepcionais que alcançamos para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 mb-4">
                    <div className="text-sm text-blue-800 font-medium">Resultado:</div>
                    <div className="text-blue-900 font-semibold">{project.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Resultados que Falam por Si
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">ROI Médio dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Tempo Médio de Resposta</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Seu projeto pode ser o próximo case de sucesso!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Fale conosco e descubra como podemos transformar sua ideia em resultados excepcionais.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 flex items-center mx-auto group">
            Iniciar Meu Projeto
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;