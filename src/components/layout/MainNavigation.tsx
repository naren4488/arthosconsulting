import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'A³ Model', href: '/a3-model' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
]

export default function MainNavigation() {
  return (
    <nav className="bg-brand-nav-green text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white text-brand-dark-green px-4 py-2 rounded-full font-bold text-lg md:text-xl">
              <span className="font-extrabold">Arthos</span>
              <span className="font-semibold ml-1">Consulting</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm md:text-base font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden lg:flex items-center">
            <Button
              className={cn(
                "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 md:px-8 font-semibold"
              )}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button (placeholder for future hamburger menu) */}
          <div className="flex lg:hidden items-center gap-3">
            <Button
              size="sm"
              className={cn(
                "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 font-semibold text-sm"
              )}
            >
              Get Started
            </Button>
            <button className="text-white p-2 hover:text-primary transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

