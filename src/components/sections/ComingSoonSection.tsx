export default function ComingSoonSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-dark-green rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 animate-pulse">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-full px-6 py-2">
              <span className="text-primary text-sm md:text-base font-semibold">🚀 Launching Soon</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-green mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Coming Soon
          </h2>
          
          <div className="w-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-slideIn" style={{ animationDelay: '0.6s' }}></div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            We're working hard to bring you an amazing experience. Our full website is under construction and will be launching soon!
          </p>

          {/* Animated dots */}
          <div className="flex justify-center gap-2 mt-10">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

