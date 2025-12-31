import TopContactBar from '@/components/layout/TopContactBar'
import MainNavigation from '@/components/layout/MainNavigation'
import HeroSection from '@/components/sections/HeroSection'
import ComingSoonSection from '@/components/sections/ComingSoonSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopContactBar />
      <MainNavigation />
      <HeroSection />
      <ComingSoonSection />
    </div>
  )
}

