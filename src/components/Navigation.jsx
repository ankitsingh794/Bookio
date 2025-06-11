import React from "react";
import "./Style/Navigation.css";
import { useNavigate, useLocation } from 'react-router-dom';

// Responsive hook
function useIsMobile() {
  return window.matchMedia("(max-width: 600px)").matches;
}

export const Lnavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  const handleClick1 = () => {
    if (location.pathname !== "/loghub/register") {
      navigate('/loghub/register');
    }
  };

  const handleClick2 = () => {
    if (location.pathname !== "/event") {
      navigate('/event');
    }
  };

  const handleClick3 = () => {
    if (location.pathname !== "/") {
      navigate('/');
    }
  };

  const goToTickets = () => {
    navigate("/profile", { state: { scrollTo: "tickets" } });
  };

  // Responsive styles
  const navStyle = {
    zIndex: 15,
    padding: isMobile ? "0.5rem 0.2rem" : undefined,
    flexDirection: isMobile ? "column" : undefined,
    minHeight: isMobile ? "8vh" : undefined,
    height: isMobile ? "auto" : undefined,
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    background: undefined, // keep CSS background
  };

  const itemsStyle = {
    position: isMobile ? "static" : "absolute",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "0.5rem" : "2.5rem",
    width: isMobile ? "100%" : "auto",
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: isMobile ? "flex-start" : "flex-end",
    marginTop: isMobile ? "1rem" : undefined,
    display: "flex",
    right: isMobile ? undefined : "2vw",
    top: isMobile ? undefined : "6vh",
  };

  const textWrapperStyle = {
    fontSize: isMobile ? "1rem" : undefined,
    lineHeight: isMobile ? "1.2" : undefined,
    bottom: isMobile ? 0 : undefined,
    padding: isMobile ? "0.2rem 0" : undefined,
    cursor: "pointer",
    whiteSpace: "nowrap",
    width: "fit-content",
    color: "#00ffe0",
    fontFamily: "var(--body-text-font-family)",
    fontWeight: "var(--body-text-font-weight)",
    letterSpacing: "var(--body-text-letter-spacing)",
    marginLeft: isMobile ? 0 : "0.5rem",
    marginRight: isMobile ? 0 : "0.5rem",
    transition: "color 0.2s",
  };

  const loginSignupStyle = {
    padding: isMobile ? "0.5rem 1rem" : undefined,
    fontSize: isMobile ? "0.9rem" : undefined,
    bottom: isMobile ? 0 : undefined,
    marginTop: isMobile ? "0.5rem" : undefined,
    borderRadius: "0.5rem",
    cursor: "pointer",
    alignItems: "center",
    display: "inline-flex",
    backgroundColor: "#38bdf8",
    boxShadow: "var(--button-shadow)",
    marginLeft: isMobile ? 0 : "1.5rem",
    color: "#32174D",
    fontWeight: 600,
    transition: "background 0.2s",
  };

  const divStyle = {
    fontSize: isMobile ? "0.8rem" : undefined,
    lineHeight: isMobile ? "1.2" : undefined,
    marginTop: isMobile ? 0 : undefined,
    color: "#32174D",
    fontFamily: "var(--small-text-font-family)",
    fontWeight: "var(--small-text-font-weight)",
    letterSpacing: "var(--small-text-letter-spacing)",
    whiteSpace: "nowrap",
    width: "fit-content",
  };

  const textWrapper2Style = {
    fontSize: isMobile ? "2.2rem" : "6rem",
    height: isMobile ? "2.5rem" : "6rem",
    lineHeight: isMobile ? "2.5rem" : "6rem",
    left: isMobile ? 0 : "1.6vw",
    top: isMobile ? "0.5rem" : "2vh",
    position: isMobile ? "static" : "absolute",
    marginBottom: isMobile ? "0.5rem" : undefined,
    color: "#00ffe0",
    fontFamily: '"Tangerine", cursive',
    fontWeight: 500,
    letterSpacing: 0,
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
    textShadow: "0 2px 12px rgba(0,255,224,0.12)",
    transition: "color 0.2s",
  };

  return (
    <nav className="navigation" style={navStyle}>
      <div
        className="text-wrapper-2"
        onClick={handleClick3}
        style={textWrapper2Style}
        tabIndex={0}
        aria-label="Go to homepage"
      >
        Bookio
      </div>
      <div className="items" style={itemsStyle}>
        <div
          className="text-wrapper"
          onClick={handleClick2}
          style={textWrapperStyle}
          tabIndex={0}
          aria-label="Explore Events"
        >
          Explore Events
        </div>
        <div
          className="text-wrapper"
          onClick={goToTickets}
          style={textWrapperStyle}
          tabIndex={0}
          aria-label="My Tickets"
        >
          My Tickets
        </div>
        <div
          className="text-wrapper"
          style={textWrapperStyle}
          tabIndex={0}
          aria-label="About"
        >
          About
        </div>
        <div
          className="login-signup"
          onClick={handleClick1}
          style={loginSignupStyle}
          tabIndex={0}
          aria-label="Login or Sign Up"
        >
          <div className="div" style={divStyle}>
            Login / Sign Up
          </div>
        </div>
      </div>
    </nav>
  );
};
