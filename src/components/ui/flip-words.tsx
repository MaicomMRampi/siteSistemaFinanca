"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "@/utils/cn";

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // thanks for the fix Julian - https://github.com/Julian-AT
    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating) {
            const timeoutId = setTimeout(() => {
                startAnimation();
            }, duration);

            return () => clearTimeout(timeoutId); // Limpa o timeout
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "inline-block text-black",
                    className
                )}
                key={currentWord}
            >
                {currentWord.split(", ").map((letter, index) => (
                    <motion.span
                        key={currentWord + index}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                        }}
                        className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent py-3 ml-2"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};