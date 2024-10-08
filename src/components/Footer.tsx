import { MdCopyright } from "react-icons/md";
export default function Footer() {

    return (
        <div className="pt-6 bg-background">
            <div className="w-full bg-black  p-8 flex items-center justify-center text-white gap-3">
                <MdCopyright color="white" />
                <p > Fluxo do Dinheiro 2024 - Todos os direitos reservados</p>
            </div>
        </div>
    )
}