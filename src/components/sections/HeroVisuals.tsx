import { UserCog, Star, TrendingUp } from 'lucide-react'
import StatCard from './StatCard'

export default function HeroVisuals() {
  return (
    <div className="relative h-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px] flex flex-col items-center justify-center py-8">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Circular Graphics - Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle - top left */}
        <div className="absolute -top-20 -left-20 w-64 h-64 md:w-80 md:h-80 bg-brand-nav-green/30 rounded-full blur-2xl"></div>
        {/* Medium circle - center right */}
        <div className="absolute top-1/2 -right-20 w-48 h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-2xl"></div>
        {/* Small circle - bottom left */}
        <div className="absolute -bottom-20 left-1/4 w-40 h-40 md:w-56 md:h-56 bg-yellow-600/20 rounded-full blur-2xl"></div>
        {/* Medium circle - center */}
        <div className="absolute top-1/3 left-1/3 w-56 h-56 md:w-72 md:h-72 bg-brand-dark-green/40 rounded-full blur-2xl"></div>
      </div>

      {/* Central A³ Framework Element */}
      <div className="relative z-10 text-center mb-4 md:mb-8">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white">
          A<sup className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">3</sup>
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mt-2">
          Framework
        </div>
      </div>

      {/* Stat Cards */}
      <div className="relative z-20 w-full mt-8 md:mt-12">
        {/* Mobile: Stack cards */}
        <div className="flex flex-col gap-4 md:hidden">
          <StatCard
            icon={UserCog}
            number="500+"
            label="Projects Delivered"
          />
          <StatCard
            icon={Star}
            number="98%"
            label="Client Satisfaction"
          />
          <StatCard
            icon={TrendingUp}
            number="12+"
            label="Years Experience"
          />
        </div>

        {/* Desktop: Positioned cards */}
        <div className="hidden md:block relative h-96 lg:h-[500px]">
          {/* Top Card - Projects Delivered */}
          <div className="absolute top-0 left-0 w-48 lg:w-56">
            <StatCard
              icon={UserCog}
              number="500+"
              label="Projects Delivered"
            />
          </div>

          {/* Middle Right Card - Client Satisfaction */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 lg:w-56">
            <StatCard
              icon={Star}
              number="98%"
              label="Client Satisfaction"
            />
          </div>

          {/* Bottom Card - Years Experience */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 lg:w-56">
            <StatCard
              icon={TrendingUp}
              number="12+"
              label="Years Experience"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

