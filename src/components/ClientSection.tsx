import Image from "next/image";

const clientLogos = [
    "/archlux.png",
    "/loungemultimidia.png",
    "/valcucine.png",
   
];

export default function ClientsSection() {
    return (
        <section id="clientes" className="py-20 px-6 bg-black text-white">
            <h2 className="text-3xl font-bold text-center mb-10">Clientes que confiam na ZM6</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center max-w-6xl mx-auto">
                {clientLogos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        alt={`Logo cliente ${index + 1}`}
                        width={120}
                        height={60}
                        className="object-contain mx-auto"
                    />
                ))}

            </div>
        </section>
    );
}
