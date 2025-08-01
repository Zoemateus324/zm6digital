import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${formData.name}\nEmpresa: ${formData.company}\nServiço: ${formData.service}\nMensagem: ${formData.message}`
    );
    const whatsappUrl = `https://wa.me/5511951505824?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefone',
      info: '(11) 95150-5824',
      action: () => window.open('https://wa.me/5511951505824', '_blank')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'E-mail',
      info: 'contato@zm6digital.com',
      action: () => window.open('mailto:contato@zm6digital.com', '_blank')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Localização',
      info: 'São Paulo, SP',
      action: undefined
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horário',
      info: 'Seg-Sex: 9h às 18h',
      action: undefined
    }
  ];

  const services = [
    'Sites Institucionais',
    'Landing Pages',
    'Desenvolvimento No-Code',
    'Social Media',
    'Tráfego Pago',
    'Branding',
    'Automação',
    'Consultoria Estratégica',
    'Outro'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar sua presença digital? Fale conosco e solicite seu orçamento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start p-4 rounded-lg border border-gray-200 ${item.action ? 'cursor-pointer hover:bg-gray-50 transition-colors duration-200' : ''}`}
                    onClick={item.action}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Atendimento Rápido no WhatsApp</h3>
                <p className="text-blue-100 mb-6">
                  Prefere falar diretamente conosco? Clique no botão abaixo e seja atendido imediatamente.
                </p>
                <button 
                  onClick={() => window.open('https://wa.me/5511951505824', '_blank')}
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Falar no WhatsApp
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Solicite seu Orçamento</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">
                      Recebemos sua solicitação e entraremos em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder="Conte-nos sobre seu projeto e objetivos..."
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group"
                      >
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        Enviar Solicitação
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="flex-1 bg-green-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                      >
                        Enviar via WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: 'Qual é o prazo médio para entrega de um projeto?',
                answer: 'O prazo varia conforme a complexidade. Sites simples: 7-15 dias. Sistemas no-code: 15-30 dias. Projetos complexos: 30-60 dias.'
              },
              {
                question: 'Vocês oferecem suporte após a entrega?',
                answer: 'Sim! Oferecemos 30 dias de suporte gratuito após a entrega e planos de manutenção mensais para atualizações e melhorias.'
              },
              {
                question: 'Como funciona o processo de pagamento?',
                answer: 'Trabalhamos com 50% de entrada para iniciar o projeto e 50% na entrega. Para projetos maiores, podemos parcelar em mais vezes.'
              },
              {
                question: 'Vocês trabalham com clientes de outras cidades?',
                answer: 'Absolutamente! Atendemos clientes de todo o Brasil através de videoconferências e reuniões online.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;