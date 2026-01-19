export function CyberGrid() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px),
            linear-gradient(rgba(0,255,65,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0',
        }}
      />
    </div>
  );
}
