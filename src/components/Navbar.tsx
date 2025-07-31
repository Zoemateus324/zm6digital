export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">ZM6 Digital</h1>
      <ul className="flex gap-6">
        <li><a href="#servicos" className="hover:text-gray-300">Serviços</a></li>
        <li><a href="#portfolio" className="hover:text-gray-300">Portfólio</a></li>
        <li><a href="#contato" className="hover:text-gray-300">Contato</a></li>
      </ul>
    </nav>
  );
}
