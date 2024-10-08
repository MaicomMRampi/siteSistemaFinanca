import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const ValueCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className=" py-6 flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 duration-300">
                <Image
                    src="/Gemini_Generated_Image_iyp3e7iyp3e7iyp3.jpg"
                    alt="Mockup do iPhone"
                    width={600}
                    height={600}
                    className="rounded-md"
                />
            </div>
            <div className="flex items-center justify-center">
                <div id='valor' className="max-w-sm mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white text-center rounded-t-lg">
                        <h2 className="text-2xl font-bold">Transforme sua gestão com facilidade</h2>
                    </div>

                    {/* Benefits Section */}
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Principais Benefícios</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✔️</span> Acessível
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✔️</span> Completo
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✔️</span> Seguro
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✔️</span> 15 dias grátis
                            </li>
                        </ul>
                    </div>

                    {/* Features Section */}
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Funcionalidades</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2 text-blue-500">📊</span> Controle de despesas e contas
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-blue-500">💹</span> Gestão de investimentos
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-blue-500">⏰</span> Controle de vencimentos
                            </li>
                        </ul>
                    </div>

                    {/* Price Section */}
                    <div className="py-4 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            R$ <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">10,00</span> /mês
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gray-100 p-6 text-center rounded-b-lg">
                        <Button variant={"filled" as any} color="primary" className="transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-300">
                            Comece agora!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueCard;
