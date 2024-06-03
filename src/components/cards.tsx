import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { MdHome } from "react-icons/md";

const cardsConteudo = [
    {
        title: "Controle Total das Suas Despesas Mensais",
        description: "Descubra onde seu dinheiro está sendo usado, categorizando cada despesa e visualizando seus gastos por categoria.",
        icon: <MdHome size='1.5em' />
    },
    {
        title: "Dashboard de Suas Finanças Pessoais",
        description: "Nossa dashboard é a sua central de controle financeiro, oferecendo uma visão geral clara e intuitiva de como seu dinheiro está sendo usado, categorizado e organizado.",
        icon: <MdHome size='1.5em' />
    },
    {
        title: "Relatórios",
        description: "Com nosso sistema, você terá acesso a relatórios detalhados e intuitivos, fornecendo uma visão completa de suas finanças e investimentos, para que você possa tomar decisões mais inteligentes e estratégicas.",
        icon: <MdHome size='1.5em' />
    },
    {
        title: "Controle de Investimentos",
        description: "Com nosso sistema de controle de investimentos, você terá a ferramenta perfeita para monitorar seus investimentos, acompanhar seus ganhos e construir um futuro financeiro mais sólido.",
        icon: <MdHome size='1.5em' />
    }
]


export default function Home() {
    return (
        <div className="w-full h-full justify-center items-center flex">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-12">
                {cardsConteudo.map((teste) => (
                    <Card key={teste.title} fullWidth className="p-4 border-blue-500 border-2">
                        <h1 className="text-center font-bold">{teste.title}</h1>
                        <CardBody>
                            <h1>{teste.description}</h1>
                        </CardBody>
                        <CardFooter>
                            <h1>{teste.icon}</h1>
                        </CardFooter>
                    </Card>

                ))}
            </div>
        </div>
    )
}