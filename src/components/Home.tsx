import React from 'react';
import { Phone, MapPin, Wrench, Settings, CheckCircle, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

type Page = 'home' | 'services' | 'book';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Wheel Alignment',
      description: 'Precision alignment to ensure your vehicle drives straight and tires wear evenly.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Wheel Balancing',
      description: 'Professional balancing eliminates vibrations for a smooth, comfortable ride.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Tire Check & Rotation',
      description: 'Complete inspection and rotation to extend tire life and maintain performance.'
    }
  ];

  const showcaseImages = [
    {
      url: "/IMG_20251217_143411.jpg",
      title: "Precision Wheel Alignment",
      description: "Advanced machines ensure accurate alignment for safer driving."
    },
    {
      url: "/IMG_20251217_144137.jpg",
      title: "Professional Tire Balancing",
      description: "Eliminate vibrations and extend your tire life with expert balancing."
    },
    {
      url: "/IMG_20251217_144259.jpg",
      title: "Experienced Technicians",
      description: "Our certified mechanics provide quality service on every vehicle."
    },
    {
      url: "/IMG_20251217_145036.jpg",
      title: "Modern Service Bays",
      description: "Clean, well-equipped facility for fast and efficient service."
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Quick and professional service! My car drives like new after the alignment. Highly recommend for honest pricing.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: 'Best tire shop in town. The staff explained everything clearly and got me back on the road in no time.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      text: 'Affordable and reliable. They found an issue I didn\'t know about and fixed it the same day. Great team!',
      rating: 5
    }
  ];

  return (
    <div>
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Header Background Image */}
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="/header.jpg"
            alt="VABE Shop"
            className="w-full h-full object-cover"
          />
          </div>
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-white text-4xl md:text-6xl mb-4">
                Professional Wheel Alignment & Tire Services You Can Trust
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Quick service, affordable pricing, experienced staff
              </p>
              <Button 
                onClick={() => setCurrentPage('book')}
                className="bg-[#eab308] hover:bg-[#ca9a04] text-black px-8 py-6 text-lg"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {showcaseImages.map((image, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-lg mb-4 relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
                </div>
                <div className="px-2">
                  <h3 className="mb-2">{image.title}</h3>
                  <p className="text-muted-foreground text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in wheel alignment, balancing, and tire services to keep your vehicle running smoothly and safely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[#1e3a8a] transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#eab308] rounded-full mb-4 text-black">
                    {service.icon}
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => setCurrentPage('services')}
              variant="outline"
              className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#eab308] text-[#eab308]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="text-sm">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="bg-[#1e3a8a] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <div>
                <div className="text-sm text-white/70">Call Us</div>
                <a href="tel:+15551234567" className="text-lg">(555) 123-4567</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <div className="text-sm text-white/70">Visit Us</div>
                <div className="text-lg">Sai Nagar, Mamurdi, Pimpri-Chinchwad</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}