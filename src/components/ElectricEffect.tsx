import { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { themeMode } from "../store";

interface Bolt {
  segments: { x1: number; y1: number; x2: number; y2: number }[];
  branches: { x1: number; y1: number; x2: number; y2: number }[][];
  alpha: number;
  decay: number;
  width: number;
  color: string;
}

const ElectricEffect = () => {
  const currentTheme = useStore(themeMode);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (currentTheme === "light") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = Math.min(window.innerHeight, 600));


    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = Math.min(window.innerHeight, 600);
    };

    window.addEventListener("resize", handleResize);

    const bolts: Bolt[] = [];
    let lastSpawn = Date.now();
    let spawnInterval = 2200; // time between natural lightning sparks

    // Recursive lightning generator
    const createBolt = (
      startX: number,
      startY: number,
      targetX: number,
      targetY: number,
      depth = 0
    ): { x1: number; y1: number; x2: number; y2: number }[] => {
      const segments: { x1: number; y1: number; x2: number; y2: number }[] = [];
      let curX = startX;
      let curY = startY;

      const steps = Math.floor(12 + Math.random() * 10);
      const dx = (targetX - startX) / steps;
      const dy = (targetY - startY) / steps;

      for (let i = 0; i < steps; i++) {
        const roughness = (1 - depth * 0.3) * (20 + Math.random() * 25);
        const nextX = curX + dx + (Math.random() - 0.5) * roughness;
        const nextY = curY + dy + (Math.random() * 8 + 2);

        segments.push({ x1: curX, y1: curY, x2: nextX, y2: nextY });
        curX = nextX;
        curY = nextY;

        if (curY >= targetY) break;
      }

      return segments;
    };

    const spawnLightning = (customX?: number, customY?: number) => {
      const startX = customX !== undefined ? customX + (Math.random() - 0.5) * 60 : width * 0.5 + (Math.random() - 0.5) * (width * 0.4);
      const startY = 0;
      const targetX = startX + (Math.random() - 0.5) * 180;
      const targetY = customY !== undefined ? customY : 180 + Math.random() * 220;

      const mainSegments = createBolt(startX, startY, targetX, targetY);

      // Create 1-3 subtle side branches
      const branches: { x1: number; y1: number; x2: number; y2: number }[][] = [];
      const branchCount = Math.floor(1 + Math.random() * 3);

      for (let b = 0; b < branchCount; b++) {
        if (mainSegments.length > 4) {
          const forkIndex = Math.floor(2 + Math.random() * (mainSegments.length - 4));
          const forkPoint = mainSegments[forkIndex];
          const branchTargetX = forkPoint.x1 + (Math.random() - 0.5) * 120;
          const branchTargetY = forkPoint.y1 + 60 + Math.random() * 90;
          branches.push(createBolt(forkPoint.x1, forkPoint.y1, branchTargetX, branchTargetY, 1));
        }
      }

      bolts.push({
        segments: mainSegments,
        branches,
        alpha: 0.95,
        decay: 0.035 + Math.random() * 0.02,
        width: 1.5 + Math.random() * 1.0,
        color: Math.random() > 0.3 ? "#60a5fa" : "#38bdf8", // Electric Blue / Cyan
      });
    };

    // Spawn on mouse movement near top
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 350 && Math.random() < 0.08) {
        spawnLightning(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initial spark
    spawnLightning();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      if (now - lastSpawn > spawnInterval) {
        spawnLightning();
        lastSpawn = now;
        spawnInterval = 1800 + Math.random() * 2000;
      }

      // Draw active lightning bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        bolt.alpha -= bolt.decay;

        if (bolt.alpha <= 0) {
          bolts.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // 1. Outer Electric Glow Pass
        ctx.shadowBlur = 18;
        ctx.shadowColor = bolt.color;
        ctx.strokeStyle = bolt.color;
        ctx.globalAlpha = bolt.alpha * 0.6;
        ctx.lineWidth = bolt.width + 2;

        ctx.beginPath();
        for (const seg of bolt.segments) {
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        }
        for (const branch of bolt.branches) {
          for (const seg of branch) {
            ctx.moveTo(seg.x1, seg.y1);
            ctx.lineTo(seg.x2, seg.y2);
          }
        }
        ctx.stroke();

        // 2. Inner Hot White Core Pass
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#ffffff";
        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = bolt.alpha;
        ctx.lineWidth = Math.max(0.8, bolt.width * 0.5);

        ctx.beginPath();
        for (const seg of bolt.segments) {
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        }
        for (const branch of bolt.branches) {
          for (const seg of branch) {
            ctx.moveTo(seg.x1, seg.y1);
            ctx.lineTo(seg.x2, seg.y2);
          }
        }
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentTheme]);

  if (currentTheme === "light") {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none overflow-hidden z-0">
      {/* Top Ambient Electric Glow Core */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-gradient-to-b from-blue-600/18 via-sky-500/8 to-transparent blur-[90px] rounded-full pointer-events-none" />

      {/* Subtle Arc Corona Line at the Top Edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      {/* Lightning Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default ElectricEffect;

