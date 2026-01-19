import { useEffect, useRef } from 'react';

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Matrix rain effect
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Characters - a mix of binary, hex, and symbols
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    let animationFrameId: number;

    const draw = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Gradient colors - mix of cyan and green
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize, 0, (drops[i] + 1) * fontSize);
        if (Math.random() > 0.5) {
          gradient.addColorStop(0, '#00d9ff');
          gradient.addColorStop(1, 'rgba(0, 217, 255, 0.3)');
        } else {
          gradient.addColorStop(0, '#00ff41');
          gradient.addColorStop(1, 'rgba(0, 255, 65, 0.3)');
        }
        
        ctx.fillStyle = gradient;
        ctx.font = fontSize + 'px monospace';
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.15 }}
      />
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]" />
    </>
  );
}
