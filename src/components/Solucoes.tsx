"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export default function TabsDemo() {
    const tabs = [
        {
            title: "Despesas",
            value: "Despesas",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-500 grid grid-cols-1 md:grid-cols-2">
                    <div className="hidden md:block">
                        <p>Controle de Despesas
                            <p className="text-lg py-6">Visualize seus gastos de forma organizada, classificados por categorias como alimentação, transporte, lazer, moradia, etc.</p>
                        </p>
                    </div>
                    <div className="bg-cover w-full bg-no-repeat bg-[url('/imagesHome/despesas.png')] rounded-2xl"></div>
                </div>
            ),
        },
        {
            title: "Dashboard",
            value: "Dashboard",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-500 grid grid-cols-1 md:grid-cols-2">
                    <div className="hidden md:block">
                        <p>Dashboard
                            <p className="text-lg py-6">Nossa dashboard é muito mais do que uma simples tela: é o seu centro de comando financeiro, oferecendo uma visão geral clara, intuitiva de como seu dinheiro está sendo usado, categorizado e organizado.</p>
                        </p>
                    </div>
                    <div className="bg-cover w-full bg-no-repeat bg-[url('/imagesHome/DASHBOARD.png')] rounded-2xl"></div>
                </div>
            ),
        },
        {
            title: "Investimentos",
            value: "Investimentos",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-500 grid grid-cols-1 md:grid-cols-2">
                    <div className="hidden md:block">
                        <p>Controle de Investimento
                            <p className="text-lg py-6">Visualize seus gastos de forma organizada, classificados por categorias como alimentação, transporte, lazer, moradia, etc.</p>
                        </p>
                    </div>
                    <div className="bg-cover w-full bg-no-repeat bg-[url('/imagesHome/investimento.png')] rounded-2xl xs:grid xs:grid-cols-1"> </div>
                </div>
            ),
        }

    ];

    return (
        <div className="h-[300px] [perspective:1000px] relative flex flex-col w-full   items-start justify-start" >
            <Tabs tabs={tabs} />
        </div>
    );
}


