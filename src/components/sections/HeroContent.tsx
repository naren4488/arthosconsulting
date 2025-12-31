import { Button } from '@/components/ui/button'
import { ArrowRight, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 md:space-y-8 lg:space-y-10">
      {/* Tagline Badge */}
      <div className="inline-flex items-center">
        <div className="bg-primary/90 border border-primary/80 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          #1 Consulting Partner for SMBs
        </div>
      </div>

      {/* Main Heading */}
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
          <span className="text-white">From Strategy</span>
          <br />
          <span className="text-primary">to Scalable</span>
          <br />
          <span className="text-white">Growth</span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
        We help businesses start right, scale smart, and grow profitably. Your partner in building businesses that last.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        {/* Start Your Journey Button - Orange with white text and arrow */}
        <Button
          size="lg"
          className={cn(
            "bg-primary hover:bg-primary/90 text-white border-0 rounded-full px-8 py-6 text-base md:text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
          )}
        >
          Start Your Journey
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        {/* Our Services Button - White with gray text */}
        <Button
          size="lg"
          variant="outline"
          className={cn(
            "bg-white hover:bg-gray-50 text-gray-600 border-gray-300 rounded-full px-8 py-6 text-base md:text-lg font-semibold"
          )}
        >
          Our Services
        </Button>
      </div>

      {/* Statistics Section */}
      <div className="flex items-center gap-4 pt-6 md:pt-8">
        {/* User Icons */}
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-dark-green bg-brand-nav-green flex items-center justify-center overflow-hidden"
            >
              <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          ))}
        </div>
        
        {/* Statistics Text */}
        <div className="flex flex-col">
          <span className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
            500+ Businesses
          </span>
          <span className="text-white/80 text-sm md:text-base">
            Trust Arthos Consulting
          </span>
        </div>
      </div>
    </div>
  )
}

