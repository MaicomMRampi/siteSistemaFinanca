import { cn } from "@/utils/cn";
import { useRef } from "react";

export const GlareCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const isPointerInside = useRef(false);
    const refElement = useRef<HTMLDivElement>(null);
    const state = useRef({
        glare: { x: 50, y: 50 },
        background: { x: 50, y: 50 },
        rotate: { x: 0, y: 0 },
    });

    const containerStyle = {
        "--m-x": "50%",
        "--m-y": "50%",
        "--r-x": "0deg",
        "--r-y": "0deg",
        "--bg-x": "50%",
        "--bg-y": "50%",
        "--duration": "300ms",
        "--foil-size": "100%",
        "--opacity": "0",
        "--radius": "16px", // Reduzi o raio para um design mais refinado
        "--easing": "ease",
        "--transition": "var(--duration) var(--easing)",
    } as any;

    const backgroundStyle = {
        "--step": "5%",
        "--pattern": "var(--foil-svg) center/100% no-repeat",
        "--rainbow":
            "linear-gradient(45deg, rgba(255,119,115,0.8), rgba(168,255,95,0.6), rgba(131,255,247,0.5))", // Gradiente mais sutil e profissional
        "--diagonal":
            "linear-gradient(135deg, #0e152e, #2a2d3b 50%)", // Transição de cor mais simples
        "--shade":
            "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.1) 20%, rgba(0,0,0,0.15) 90%)",
        backgroundBlendMode: "soft-light, overlay",
    };

    const updateStyles = () => {
        if (refElement.current) {
            const { background, rotate, glare } = state.current;
            refElement.current.style.setProperty("--m-x", `${glare.x}%`);
            refElement.current.style.setProperty("--m-y", `${glare.y}%`);
            refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
            refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
            refElement.current.style.setProperty("--bg-x", `${background.x}%`);
            refElement.current.style.setProperty("--bg-y", `${background.y}%`);
        }
    };

    return (
        <div
            style={containerStyle}
            className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] will-change-transform w-[320px] aspect-[17/21] hover:shadow-lg rounded-[var(--radius)] overflow-hidden"
            ref={refElement}
            onPointerMove={(event) => {
                const rotateFactor = 0.3;
                const rect = event.currentTarget.getBoundingClientRect();
                const position = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                };
                const percentage = {
                    x: (100 / rect.width) * position.x,
                    y: (100 / rect.height) * position.y,
                };
                const delta = {
                    x: percentage.x - 50,
                    y: percentage.y - 50,
                };

                const { background, rotate, glare } = state.current;
                background.x = 50 + percentage.x / 4 - 12.5;
                background.y = 50 + percentage.y / 3 - 16.67;
                rotate.x = -(delta.x / 3.5);
                rotate.y = delta.y / 2;
                rotate.x *= rotateFactor;
                rotate.y *= rotateFactor;
                glare.x = percentage.x;
                glare.y = percentage.y;

                updateStyles();
            }}
            onPointerEnter={() => {
                isPointerInside.current = true;
                if (refElement.current) {
                    setTimeout(() => {
                        if (isPointerInside.current) {
                            refElement.current?.style.setProperty("--duration", "0s");
                        }
                    }, 300);
                }
            }}
            onPointerLeave={() => {
                isPointerInside.current = false;
                if (refElement.current) {
                    refElement.current.style.removeProperty("--duration");
                    refElement.current?.style.setProperty("--r-x", `0deg`);
                    refElement.current?.style.setProperty("--r-y", `0deg`);
                }
            }}
        >
            <div className="h-full grid [grid-area:1/1] transition-transform duration-[var(--duration)] ease-[var(--easing)] rounded-[var(--radius)] border border-gray-700 hover:filter-none overflow-hidden">
                <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light">
                    <div className={cn("h-full w-full bg-slate-950", className)}>
                        {children}
                    </div>
                </div>
                <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light opacity-[var(--opacity)] transition-opacity duration-[var(--duration)] [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" />
                <div
                    className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] transition-opacity will-change-background"
                    style={{ ...backgroundStyle }}
                />
            </div>
        </div>
    );
};
