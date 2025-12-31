import { Phone, Mail, MapPin } from "lucide-react";

export default function TopContactBar() {
  return (
    <div className="bg-brand-dark-green text-white py-2.5 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
          {/* Left: Phone and Email */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:hello@arthos.consulting"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>hello@arthos.consulting</span>
            </a>
          </div>

          {/* Right: Location */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Business District, Your City</span>
          </div>
        </div>
      </div>
    </div>
  );
}
