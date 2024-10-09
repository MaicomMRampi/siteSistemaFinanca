"use client"
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const values = [
    { title: 'Inovação', description: 'Estamos sempre em busca de novas soluções.' },
    { title: 'Transparência', description: 'Mantemos a honestidade e clareza em todas as interações.' },
    { title: 'Qualidade', description: 'Nosso foco é entregar produtos de alta qualidade.' },
    { title: 'Comprometimento', description: 'Estamos comprometidos com o sucesso dos nossos clientes.' },
];

const words = `Eu sou Maicom, um desenvolvedor independente apaixonado por tecnologia e inovação.`;

export default function Quemsomos() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-r text-default-500">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <p className="text-gray-700 mb-4 text-center text-2xl">
                        Bem-vindo à <span className="font-bold text-blue-500">MaicomTech</span>!
                    </p>
                    <span className="text-gray-700 mb-4 text-center">
                        <TextGenerateEffect duration={5} filter={false} words={words} />
                    </span>
                    <div className="flex justify-center mb-6 pt-4">
                        <img
                            width={200}
                            height={200}
                            src="/Gemini_Generated_Image_k5t0txk5t0txk5t0.jpg"
                            alt="MaicomTech Logo"
                            className="rounded-full shadow-md border-4 border-blue-500"
                        />
                    </div>
                    <p className="text-gray-700 mb-4">
                        Na MaicomTech, dedicamo-nos a criar soluções eficazes e personalizadas que atendem às necessidades dos nossos clientes.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Nossa missão é transformar ideias em realidade, utilizando as mais recentes tecnologias para proporcionar uma experiência excepcional aos nossos usuários.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4 text-center text-blue-500">Nossos Valores</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card className='h-[150px] bg-gradient-to-t from-yellow-200 to-red-200 hover:bg-gradient-to-b hover:from-red-300 hover:to-yellow-300 transition duration-300'>
                                    <CardBody className="flex flex-col items-center justify-center">
                                        <h1 className="text-lg font-semibold text-gray-800">{value.title}</h1>
                                        <h1 className="text-gray-600">{value.description}</h1>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-gray-700 mt-4">
                        Acreditamos que a tecnologia deve ser acessível e fácil de usar, e estamos comprometidos em oferecer um serviço de alta qualidade com um toque pessoal.
                    </p>
                </div>
            </div>
        </div>
    );
}
