import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Site de automação residencial',
      category: 'Desenvolvimento Web',
      description: 'Loja virtual completa com sistema de pagamento, gestão de estoque e painel administrativo.',
      image: 'https://loungemultimidia.com.br/wp-content/uploads/2024/11/WhatsApp-Image-2023-03-02-at-20.40.45.jpeg',
      tags: ['E-commerce', 'wordpress'],
      results: '+200% acessos online',
    },
    {
      title: 'Site institucional de móveis planejados',
      category: 'Desenvolvimento Web',
      description: 'Plataforma para agendamento de consultas, prontuário eletrônico e gestão de pacientes.',
      image: 'https://i0.wp.com/habitatnaturale.com.br/wp-content/uploads/2022/08/IMG_6830-scaled.jpg?resize=1024%2C682&ssl=1',
      tags: ['Wordpress', 'Automação', 'CRM'],
      results: '90% redução tempo administrativo',
    },
    {
      title: 'E-commerce de iluminação de luxo',
      category: 'Desenvolvimento Web',
      description: 'Loja virtual completa com sistema de pagamento, gestão de estoque e painel administrativo.',
      image: 'https://archluxiluminacao.com.br/wp-content/uploads/2024/10/Artboard-20-1.webp',
      tags: ['E-commerce', 'wordpress'],
      results: '+200% acessos online',
    },
    {
      title: 'Site institucional',
      category: 'Desenvolvimento Web',
      description: 'A Solução Ideal para o Desenvolvimento de Talentos na Sua Empresa.',
      image: 'https://i0.wp.com/talentharborai.com.br/wp-content/uploads/2024/10/two-young-business-women-professionals-in-formal-w1-LGZUQA7.jpg?fit=1200%2C1800&ssl=1',
      tags: ['Wordpress','CRM'],
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
      title: 'Startup SOS Mecânicos',
      category: 'Branding + Web',
      description: 'Identidade visual completa e plataforma educacional para startup de tecnologia.',
      image: 'https://sosmecanicos.com.br/assets/hero-automotive-DgaNSDLL.jpg',
      tags: ['Branding', 'UX/UI', 'Sistema', 'SAAS', 'Nextjs'],
      results: 'Captação R$ 500k investimento',
    },
    {
      title: 'Sistema de agendamentos para salão de beleza',
      category:  'Sistema No-Code',
      description: 'Sistema de pedidos online, cardápio digital e automação de WhatsApp.',
      image: 'https://9934cc0308d05845e5fae47761536aad.cdn.bubble.io/f1754045188143x147088987578759780/Captura%20de%20tela%202025-08-01%20074518.png?_gl=1*1kxwv8q*_gcl_au*MTc4OTE3NzY1Ni4xNzU0MDQ1MDM4*_ga*MTIyMDQ4MzYwNy4xNzU0MDQ0OTc0*_ga_BFPVR2DEE2*czE3NTQwNDQ5NzQkbzEkZzEkdDE3NTQwNDUxNjUkajIyJGwwJGgw',
      tags: ['Automação', 'Sistema No-Code', 'Website'],
      results: '150% aumento pedidos online',
    },
    {
      title: 'Sistema para controle de obras e serviços',
      category:  'Sistema No-Code',
      description: 'Sistema de controle de obras e serviços com gestão de tarefas e prazos.',
      image: 'https://829a773aacf8d24ff7f0c4344f737ff2.cdn.bubble.io/cdn-cgi/image/w=768,h=538,f=auto,dpr=1,fit=contain/f1716644654995x903806864428851100/6961929.jpg',
      tags: ['Automação', 'Sistema No-Code', 'Website'],
      results: '250% aumento na eficiência',
    },
    {
      title: 'Sistema para controle condomínios',
      category:  'Sistema No-Code',
      description: 'Sistema de controle de condomínios com gestão de moradores e reservas.',
      image: 'https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg',
      tags: ['Automação', 'Sistema No-Code', 'Website'],
      results: '250% aumento na eficiência',
    },
  
  ];

  const categories = ['Todos', 'Desenvolvimento Web', 'Sistema No-Code', 'Marketing Digital', 'Branding + Web'];
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