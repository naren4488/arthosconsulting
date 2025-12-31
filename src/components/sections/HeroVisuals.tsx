export default function HeroVisuals() {
  return (
    <div className="relative h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center py-8">
      {/* Dark background with glowing dots pattern */}
      <div className="absolute inset-0 bg-brand-dark-green rounded-2xl overflow-hidden">
        {/* Glowing dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--brand-nav-green)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          opacity: 0.4
        }}>
          {/* Additional scattered dots with varying opacity */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-brand-nav-green"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                boxShadow: '0 0 6px hsl(var(--brand-nav-green))'
              }}
            />
          ))}
        </div>

        {/* Large glowing circular shape (central sphere) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 40% 60%, rgba(255,255,255,0.05), transparent 70%)',
              boxShadow: `
                inset 0 0 100px rgba(255,255,255,0.1),
                0 0 150px hsl(var(--brand-nav-green) / 0.3),
                0 0 250px hsl(var(--brand-nav-green) / 0.2)
              `
            }}
          >
            {/* Outer glow ring */}
            <div 
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: 'hsl(var(--brand-nav-green) / 0.4)',
                boxShadow: `
                  inset 0 0 50px hsl(var(--brand-nav-green) / 0.2),
                  0 0 100px hsl(var(--brand-nav-green) / 0.3)
                `
              }}
            />
          </div>
        </div>

        {/* Text Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
          {/* Top Text - Framework Name */}
          <div className="text-white/80 text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-4">
            A³ Framework
          </div>

          {/* Main Text - "Consulting" with gradient */}
          <div 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
            style={{
              background: 'linear-gradient(to right, hsl(var(--brand-nav-green)), hsl(var(--primary)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Consulting
          </div>

          {/* Bottom Text */}
          <div className="text-white/70 text-base md:text-lg lg:text-xl font-light">
            loves results
          </div>
        </div>
      </div>
    </div>
  )
}

