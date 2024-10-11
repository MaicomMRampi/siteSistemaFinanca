import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function ResponsiveSistem() {
    return (
        <motion.div
            initial={{ opacity: 0 }} // Inicia invisível
            animate={{ opacity: 1 }} // Aparece suavemente
            transition={{ duration: 1.5 }} // Duração da transição
            className="bg-[#c6c6c6]-50 grid grid-cols-1 md:grid-cols-2 p-6 gap-6"
        >
            {/* Bloco 1 */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }} // Inicia menor e invisível
                animate={{ scale: 1, opacity: 1 }} // Cresce e aparece
                transition={{ duration: 1, ease: "easeInOut" }} // Transição suave
                className="rounded-xl p-8 flex flex-col justify-center"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }} // Começa fora da tela à esquerda
                    animate={{ opacity: 1, x: 0 }} // Move para o centro e aparece
                    transition={{ duration: 1.2, ease: "easeInOut" }} // Transição suave
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 text-center border-b-2 border-gray-300 pb-2">
                        A gestão das suas finanças, facilitada e sempre à mão.
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nosso sistema foi desenvolvido com um foco especial em responsividade, garantindo uma experiência de uso fluida e eficiente em qualquer dispositivo. Independentemente da resolução da tela ou do tipo de aparelho utilizado, seja desktop, tablet ou smartphone.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bloco 2 */}
            <motion.div
                initial={{ opacity: 0, x: 100 }} // Começa fora da tela à direita
                animate={{ opacity: 1, x: 0 }} // Move para o centro e aparece
                transition={{ duration: 1.2, ease: "easeInOut" }} // Transição suave
                className="w-full rounded-xl flex items-center justify-center p-6"
            >
                <img
                    src="/imagesHome/iPhone 15 Mockup, Perspective.png"
                    alt="Mockup do iPhone"
                    width={400}
                    height={400}
                    className="rounded-md"
                />
            </motion.div>
        </motion.div>
    );
}
