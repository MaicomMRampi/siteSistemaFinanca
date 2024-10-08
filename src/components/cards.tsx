import { GlareCard } from "@/components/ui/glare-card";
import { FaArrowTrendDown } from "react-icons/fa6";
import { BsBuildingDash } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { cn } from "@/utils/cn";

const cardsConteudo = [
    {
        title: "Controle Total das Suas Despesas Mensais",
        description: "Descubra onde seu dinheiro está sendo usado, categorizando cada despesa e visualizando seus gastos por categoria.",
        icon: <FaArrowTrendDown size='1.5em' />,
        imageBefore: 'http://localhost:3000/imagensCard/cardOne.webp',
    },
    {
        title: "Dashboard de Suas Finanças Pessoais",
        description: "Nossa dashboard é a sua central de controle financeiro, oferecendo uma visão geral clara e intuitiva de como seu dinheiro está sendo usado, categorizado e organizado.",
        icon: <BsBuildingDash size='1.5em' />,
        imageBefore: 'http://localhost:3000/imagensCard/2.png',
    },
    {
        title: "Relatórios",
        description: "Com nosso sistema, você terá acesso a relatórios detalhados e intuitivos, fornecendo uma visão completa de suas finanças e investimentos, para que você possa tomar decisões mais inteligentes e estratégicas.",
        icon: <TbReportSearch size='1.5em' />,
        imageBefore: 'http://localhost:3000/imagensCard/3.jpg',
    },
    {
        title: "Controle de Investimentos",
        description: "Com nosso sistema de controle de investimentos, você terá a ferramenta perfeita para monitorar seus investimentos, acompanhar seus ganhos e construir um futuro financeiro mais sólido.",
        icon: <GoGraph size='1.5em' />,
        imageBefore: 'http://localhost:3000/imagensCard/4.jpg',
    }
];

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-6">
            {cardsConteudo.map((card, index) => (
                <GlareCard
                    key={index}
                    className="relative flex flex-col items-start p-6 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="mb-6">
                        <div className="text-3xl text-teal-400 mb-4">{card.icon}</div>
                        <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{card.description}</p>
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 hover:opacity-40 transition-opacity duration-300 rounded-xl"
                        style={{ backgroundImage: `url(${card.imageBefore})` }}
                    ></div>
                </GlareCard>
            ))}
        </div>
    );
}
