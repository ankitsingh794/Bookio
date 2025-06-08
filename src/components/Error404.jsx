import { Link } from "react-router-dom";
import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ErrorPage() {
    const containerRef = useRef(null);
    const velocityX = useMotionValue(0);
    const velocityY = useMotionValue(0);
    const prevEvent = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const { chars } = splitText(containerRef.current.querySelector(".h1"));

        const handlePointerMove = (event) => {
            const now = performance.now();
            const timeSinceLastEvent = (now - prevEvent.current) / 1000;
            prevEvent.current = now;
            velocityX.set(event.movementX / timeSinceLastEvent);
            velocityY.set(event.movementY / timeSinceLastEvent);
        };

        document.addEventListener("pointermove", handlePointerMove);

        hover(chars, (element) => {
            const speed = Math.sqrt(
                velocityX.get() ** 2 + velocityY.get() ** 2
            );
            const angle = Math.atan2(velocityY.get(), velocityX.get());
            const distance = speed * 0.1;

            animate(
                element,
                {
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                },
                { type: "spring", stiffness: 100, damping: 50 }
            );
        });

        return () => {
            document.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1">
                404  -  Page Not Found . 
                <br/>
                The page you're looking for doesn't exist.
            </h1>
            <Link to="/" style={{ color: "#DE3163", marginTop: "1rem", display: "inline-block" }}>
                Go back to homepage
            </Link>
            <Stylesheet />
        </div>
    );
}

function Stylesheet() {
    return (
        <style>{`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        text-align: center;
        padding: 2rem;
        color: #301934;

        background: #F0FFFF;
        opacity: 1;                   /* fully opaque */
        z-index: 9999;                /* very high so it's above everything */
        position: relative;           /* ensure z-index applies */
    }

    .split-char {
        will-change: transform, opacity;
    }

    .h1 {
        font-size: 1.5rem;
    }
`}</style>

    );
}
