"use client"
import React, { useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import emailjs from 'emailjs-com';
import { Formik } from "formik";
import * as Yup from 'yup';
import { initialValues, validationSchema } from './formControl'
export default function Formulario() {
    const [message, setMessage] = useState('');

    const sendEmail = async (data: any) => {
        try {
            const res = await emailjs.send(
                'service_ud9ddr9',
                'template_z6sr29i',
                {
                    nome: data.nome,
                    mensagem: data.mensagem,
                    email: data.email,
                },
                'Fetw8HHG805JuaITp'
            );

            return true;
        } catch (error) {
            return false;
        }
    }

    const handleSubmit = async (values: any, { setSubmitting, resetForm }: { setSubmitting: any, resetForm: any }) => {
        setSubmitting(true);
        const send = await sendEmail(values);

        if (send) {
            setMessage('Mensagem enviada com sucesso!');
            resetForm();
        } else {
            setMessage('Erro ao enviar a mensagem, tente novamente mais tarde!');
        }

        setTimeout(() => {
            setMessage('');
            setSubmitting(false);
        }, 3000);



    }

    return (
        <div className="w-full h-full bg-[#F5F5F5] pt-8">
            <div className='w-[90%] h-full mx-auto   gap-5 scroll-behavior ' id="contato" >
                <div className='  bg-black grid grid-cols-1 sm:grid-cols-2 rounded-lg'>
                    <div className="w-full">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                                setFieldError,
                            }) => (
                                <form className="flex flex-col gap-3 p-4 sm:p-14" onSubmit={handleSubmit}>
                                    <h4 className="font-bold text-2xl text-white">DÚVIDAS OU SUGESTÕES</h4>
                                    <div>
                                        <Input
                                            fullWidth
                                            type="text"
                                            placeholder="Nome"
                                            value={values.nome}
                                            onChange={handleChange}
                                            name="nome"
                                        />
                                        {errors.nome && touched.nome && <p className="text-red-400 pt-1">{errors.nome}</p>}
                                    </div>
                                    <div>
                                        <Input
                                            fullWidth
                                            type="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            name="email"
                                        />
                                        {errors.email && touched.email && <p className="text-red-400 pt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <Textarea
                                            className="resize-none"
                                            placeholder="Escreva a sua mensagem"
                                            rows={6}
                                            value={values.mensagem}
                                            onChange={handleChange}
                                            name="mensagem"
                                        />
                                        {errors.mensagem && touched.mensagem && <p className="text-red-400 pt-1">{errors.mensagem}</p>}
                                    </div>
                                    <Button
                                        className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Enviar
                                    </Button>
                                    <p className="text-green-600">{message}</p>

                                </form>
                            )}
                        </Formik>
                    </div>
                    <div className="w-full flex flex-col gap-5 p-14 sm:mt-12">
                        <div className='flex flex-col gap-6 text-white'>
                            <Link href="https://wa.me/5554996127563" target="_blank">
                                <span className="flex items-center gap-3 text-[#b0bcbc]">
                                    <FaWhatsapp size={22} color="white" /> (54) 99612-7563
                                </span>
                            </Link>
                            <Link href='mailto:paulo@precisatecnologia.com.br'>
                                <span className="flex items-center gap-3 text-[#b0bcbc]">
                                    <div><MdOutlineMailOutline color="white" size={25} /> </div>maicom.mateus@yahoo.com.br / maicom.azus@gmail.com
                                </span>
                            </Link>
                            <Link href='https://www.facebook.com/maicom.rampi.1/' target="_blank">
                                <span className="flex items-center gap-3 text-[#b0bcbc]">
                                    <div><CiFacebook color="white" size={25} /> </div>Maicom Mateus Rampi
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
