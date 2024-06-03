"use client"
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
function App({ children }: { children: React.ReactNode }) {

    return (
        <NextUIProvider>
            <Header />
            {children}
            <Formulario />
            <Footer />
        </NextUIProvider>
    );
}

export default App