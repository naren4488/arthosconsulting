import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'A³ Model', href: '/a3-model' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
]

export default function MainNavigation() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href !== '/') {
      e.preventDefault()
      toast.info('Coming Soon', {
        description: 'This page is under construction. Stay tuned!',
        duration: 3000,
      })
    }
  }

  return (
    <nav className="bg-white py-3 md:py-4">
      <div className="container mx-auto px-4 lg:px-6">
        {/* White rounded-full navbar container */}
        <div className="bg-brand-nav-green rounded-full px-4 md:px-6 lg:px-8 shadow-lg">
          <div className="flex items-center justify-between h-12 md:h-14 lg:h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Arthos Consulting"
                className="h-10 md:h-12 lg:h-16 w-auto object-contain brightness-0 invert"
              />
              </a>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8 px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm md:text-base font-medium text-white hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Get Started Button */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Button
                className={cn(
                  "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 md:px-8 font-semibold shadow-md hover:shadow-lg transition-shadow"
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
      </div>
    </nav>
  )
}

