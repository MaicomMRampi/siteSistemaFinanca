"use client"
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { Button, Link } from "@nextui-org/react";

const words = ["suas finanças", "seus investimentos", " suas despesas"];

export default function Home() {
    return (
        <>
            <div className="min-h-[500px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-4">
                <div className="flex flex-col justify-center">
                    <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl">
                        Organize
                        <span className="font-bold">
                            <FlipWords words={words} />
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-extralight mt-4">
                        Online, acessível e completo para atender todas as suas necessidades<Link className="text-blue-500 font-bold text-lg sm:text-xl md:text-2xl " href="#valor">. Confira o valor. </Link>
                    </p>
                </div>
                <div className="w-full relative flex justify-center items-center">
                    <img className="h-[400px]" src="/imagesHome/currency-animate.svg" alt="Svg" />
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <h1 className="text-center text-xl sm:text-2xl ">Sistema com controle de investimento integrado</h1>
                </div>
            </div>

        </>
    )
}