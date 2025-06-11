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
        opacity: 1;
        z-index: 9999;
        position: relative;
        box-sizing: border-box;
    }

    .split-char {
        will-change: transform, opacity;
    }

    .h1 {
        font-size: 2.5rem;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        word-break: break-word;
    }

    a {
        font-size: 1.2rem;
        padding: 0.7rem 1.2rem;
        border-radius: 0.5rem;
        transition: background 0.2s;
    }

    a:hover {
        background: #f8e1e7;
    }

    @media (max-width: 600px) {
        .container {
            padding: 1rem;
            height: 100dvh;
        }
        .h1 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }
        a {
            font-size: 1rem;
            padding: 0.5rem 1rem;
        }
    }
`}</style>
    );
}
