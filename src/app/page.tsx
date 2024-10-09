"use client";
import Sistema from "@/components/Sistema";
import ResponsiveSystem from "@/components/Solucoes";
import BlocoValor from "@/components/blocoValor"
import BlocotTsteGratis from "@/components/blocoTesteGratis"
import Cards from "@/components/cards";
import { Button } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="w-full h-full bg-background">
            <div className="w-[90%] h-full mx-auto bg-[background">
                <Sistema />
                <div className="py-6 border-t-1">
                    <h1 className="text-center text-2xl py-6 font-extralight">Oque um bom <span className="font-bold text-blue-500">Fluxo do capital</span> bem organizado pode lhe proporcionar ?</h1>
                </div>
                <Cards />
                <div className="py-6">
                    <BlocotTsteGratis />
                </div>
                <div className="w-full flex justify-center">
                    <Button className="w-[300px] font-semibold text-sm  hover:text-black" variant="ghost" color="primary">CRIE SUA CONTA</Button>
                </div>
                <div className="">
                    <ResponsiveSystem />
                </div>
                <div className="">
                    <BlocoValor />
                </div>
            </div>
        </div>

    )
}