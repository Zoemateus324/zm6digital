const services = [
  {
    title: "Marketing Digital",
    description: "Estratégias personalizadas para aumentar sua presença online.",
    icon: "📈",
  },
  {
    title: "Tráfego Pago",
    description: "Campanhas otimizadas para gerar conversões reais.",
    icon: "💰",
  },
  {
    title: "Criação de Site",
    description: "Sites profissionais, responsivos e com foco em resultados.",
    icon: "🌐",
  },
  {
    title: "Web Apps",
    description: "Aplicações web sob medida para seu negócio.",
    icon: "🧩",
  },
  {
    title: "No-Code",
    description: "Soluções ágeis sem programação, com ferramentas modernas.",
    icon: "⚙️",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Nossos Serviços</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
