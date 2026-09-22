import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import GlobalBackground from "./Background";
import TerminalMode from "../terminal/TerminalMode";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [terminalMode, setTerminalMode] = useState(false);
  const [uiType, setUiType] = useState<"landing" | "modular">("landing");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTerminalMode(localStorage.getItem("terminal-mode") === "true");
    setUiType((localStorage.getItem("ui-type") as "landing" | "modular") || "landing");
    setMounted(true);
  }, []);

  const handleTerminalToggle = (value: boolean) => {
    setTerminalMode(value);
    localStorage.setItem("terminal-mode", String(value));
  };

  const handleUiToggle = (type: "landing" | "modular") => {
    setUiType(type);
    localStorage.setItem("ui-type", type);
  };

  return (
    <>
      <GlobalBackground />
      <Navbar
        terminalMode={terminalMode}
        setTerminalMode={handleTerminalToggle}
        uiType={uiType}
        setUiType={handleUiToggle}
      />
      {!mounted || !terminalMode ? (
        children
      ) : (
        <TerminalMode
          setTerminalMode={handleTerminalToggle}
          setUiType={handleUiToggle}
        />
      )}
    </>
  );
};

export default AppShell;
