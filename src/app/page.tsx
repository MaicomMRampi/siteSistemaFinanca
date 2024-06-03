import Sistema from "@/components/Sistema";
import Solucoes from "@/components/Solucoes";
import Cards from "@/components/cards";
import { Button } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="w-full h-full bg-[#F5F5F5]">
            <div className="w-[90%] h-full mx-auto bg-[#F5F5F5]">
                <Sistema />
                <div className="py-6 border-t-1 border-t-red-600">
                    <h1 className="text-center text-2xl py-6 font-extralight">Oque um bom <span className="font-bold text-blue-500">Fluxo do dinheiro</span> bem organizado pode lhe proporcionar ?</h1>
                </div>
                <Cards />
                <div className="w-full flex justify-center">
                    <Button className="w-[300px] font-semibold text-sm  hover:text-black" variant="ghost" color="primary">CRIE SUA CONTA</Button>
                </div>
                <div className="pb-20 pt-12">
                    <Solucoes />
                </div>
            </div>
        </div>

    )
}