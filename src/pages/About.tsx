import React from 'react';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';
import Seo from '../components/Seo';

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Inovação',
      description: 'Sempre em busca das melhores tecnologias e metodologias para entregar soluções de ponta.',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Transparência',
      description: 'Comunicação clara e honest em todos os projetos, com relatórios detalhados e resultados mensuráveis.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Compromisso com Resultados',
      description: 'Nossa obsessão é gerar resultados reais e mensuráveis para nossos clientes.',
    },
  ];

  return (
    <div className="pt-16">
      <Seo
        title="Sobre a ZM6 Digital"
        description="Conheça a história da ZM6 Digital, a agência que une marketing e tecnologia para entregar projetos completos de sites, sistemas e estratégias de crescimento."
        canonical="/about"
        keywords={[
          'sobre a zm6 digital',
          'agência marketing e tecnologia',
          'história zm6 digital',
          'marketing e desenvolvimento',
        ]}
        type="article"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">ZM6 Digital</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nascemos da visão de unir marketing e tecnologia para criar soluções que realmente transformam negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  A ZM6 Digital foi fundada por <strong>Zoé Mateus</strong>, um empreendedor apaixonado por tecnologia 
                  e marketing digital, que identificou uma lacuna no mercado: a necessidade de unir estratégia de 
                  marketing com execução tecnológica de qualidade.
                </p>
                <p>
                  Com anos de experiência em desenvolvimento de sistemas e campanhas digitais, Zoé percebeu que 
                  muitas empresas enfrentavam dificuldades para encontrar parceiros que dominassem tanto a parte 
                  técnica quanto a estratégica do marketing digital.
                </p>
                <p>
                  Assim nasceu a ZM6 Digital: uma agência que oferece soluções completas, desde a criação de sites 
                  e sistemas até estratégias de marketing digital que realmente convertem.
                </p>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <Users className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Nosso Fundador</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Zoé Mateus</h4>
                    <p className="text-blue-100">CEO e Fundador da ZM6 Digital</p>
                  </div>
                  <p className="text-blue-100">
                    Especialista em marketing digital e desenvolvimento no-code, com foco em soluções que geram 
                    resultados reais para pequenas e médias empresas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 text-lg">
                Entregar soluções modernas de marketing e tecnologia com visão estratégica e foco humano, 
                ajudando nossos clientes a transformar suas ideias em resultados concretos e sustentáveis.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 text-lg">
                Ser reconhecida como a principal referência em soluções integradas de marketing e tecnologia 
                para pequenas e médias empresas, democratizando o acesso a ferramentas de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Os princípios que guiam tudo o que fazemos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Por que escolher a ZM6 Digital?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Heart className="h-10 w-10 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">Atendimento Humanizado</h3>
              <p className="text-blue-100">
                Cada cliente é único. Desenvolvemos soluções personalizadas baseadas nas suas necessidades específicas.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="h-10 w-10 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">Expertise Comprovada</h3>
              <p className="text-blue-100">
                Combinamos anos de experiência em marketing digital e desenvolvimento para entregar resultados excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;