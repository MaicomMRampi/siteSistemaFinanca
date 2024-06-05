import Image from "next/image";
import { FlipWords } from "./ui/flip-words";

const words = ["suas finanças", "seus investimentos", " suas despesas"];

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 h-[500px]">
                <div className="md:py-14">
                    <p className="font-extrabold text-6xl">Organize
                        <span className="font-bold">
                            <FlipWords
                                words={words}
                            />
                        </span>
                    </p>
                    <p className="text-2xl font-extralight"> online, completo e gratuito.</p>
                </div>
                <div className="bg-cover bg-center bg-no-repeat bg-[url('/imagesHome/home.jpg')]">
                </div>
            </div>
            <h1 className="text-center text-2xl">Sistema com controle de investimento integrado</h1>
        </>
    )
}