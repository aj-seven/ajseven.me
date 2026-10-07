import { useStore } from "@nanostores/react";
import { themeMode } from "../store";

const GlobalBackground = () => {
  const currentTheme = useStore(themeMode);
  const isLight = currentTheme === "light";

  return (
    <div
      className={`fixed inset-0 z-0 ${isLight ? "bg-[#fafafa]" : "bg-[#050505]"
        } pointer-events-none overflow-hidden transition-colors duration-300`}
    >
      {/* Subtle Dot Matrix Pattern Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isLight
            ? `radial-gradient(rgba(0, 0, 0, 0.07) 1px, transparent 1px)`
            : `radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Noise Texture */}
      <div
        className={`absolute inset-0 ${isLight
          ? "opacity-[0.015] mix-blend-multiply"
          : "opacity-[0.02] mix-blend-overlay"
          } bg-[url('https://grainy-gradients.vercel.app/noise.svg')]`}
      />
    </div>
  );
};

export default GlobalBackground;


