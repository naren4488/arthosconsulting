import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 md:space-y-8 lg:space-y-10">

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
    </div>
  );
}
