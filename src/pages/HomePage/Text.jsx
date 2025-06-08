import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client"

import "./Style/Text.css";
import { height } from "@mui/system";

const initialOrder = ["var(--hue-1)", "var(--hue-2)", "var(--hue-3)", "var(--hue-4)"]

function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5)
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
}

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  marginTop: "7rem",
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: "20vw",
  height: "35vh",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}

const item = {
  width: 100,
  height: 100,
  borderRadius: "10px",
}

export const Text = () => {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
    return () => clearTimeout(timeout)
  }, [order])

  return (
    <div className="text">
      <div className="cover">
        <div className="text-wrapper-24">Join the Community</div>

        <div className="div">
          <div className="text-wrapper">Subheading</div>
          <p className="p">
            Body text for whatever you’d like to expand on the main point.
          </p>
        </div>

        <div className="div">
          <div className="text-wrapper">Subheading</div>
          <p className="p">
            Body text for whatever you’d like to say. Add main takeaway points,
            quotes, anecdotes.
          </p>
        </div>

        <div className="div">
          <div className="text-wrapper">Subheading</div>
          <p className="p">
            Body text for whatever you’d like to add more to the main point. It
            provides details, explanations, and context.
          </p>
        </div>

        <div className="buttons-2">
          <button className="button-3">
            <div className="text-wrapper-21">Join</div>
          </button>

          <button className="button-4">
            <div className="text-wrapper-25">Explore the Community</div>
          </button>
        </div>
      </div>

      {/* 🌈 Animated Color Blocks */}
      <ul style={container}>
      {order.map((backgroundColor) => (
        <motion.li key={backgroundColor} layout transition={spring} style={{ ...item, backgroundColor }} />
      ))}
    </ul>
    </div>
  );
};
