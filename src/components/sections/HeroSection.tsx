import HeroContent from './HeroContent'

export default function HeroSection() {
  return (
    <section className="bg-brand-dark-green relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 xl:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Right Column - Visuals */}
          <div className="order-1 lg:order-2">
            {/* <HeroVisuals /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

