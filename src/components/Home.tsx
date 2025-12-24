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
      description: 'Precision alignment to ensure your vehicle drives straight and tyres wear evenly.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Wheel Balancing',
      description: 'Professional balancing eliminates vibrations for a smooth, comfortable ride.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Tyre Check & Rotation',
      description: 'Complete inspection and rotation to extend tyre life and maintain performance.'
    }
  ];

  const showcaseImages = [
    {
      url: "/Rectangle 1.png",
      title: "Quality Service",
      description: "Professional tire and wheel services."
    },
    {
      url: "/Rectangle 2.png",
      title: "Expert Technicians",
      description: "Experienced team ready to serve you."
    },
    {
      url: "/Rectangle 3.png",
      title: "Modern Equipment",
      description: "State-of-the-art tools for precision work."
    },
    {
      url: "/Rectangle 4.png",
      title: "Reliable Service",
      description: "Trusted by customers for quality results."
    }
  ];

  const testimonials = [
    {
      name: 'Appasaheb Pujari',
      text: 'Best center for Car alignment and balancing, Owner had good knowledge and good staff.',
      rating: 5
    },
    {
      name: 'Vijay Chheda',
      text: 'One stop. Reasonable charges.',
      rating: 5
    },
    {
      name: 'Hema Hergan',
      text: 'Very professional and prompt service.',
      rating: 5
    },
  
  ];

  return (
    <div>
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Header Background Image - Flex Board */}
        <div className="absolute inset-0 bg-gray-900">
          <img
            src="/flex-board.jpg"
            alt="VABE Shop"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to header.jpg if flex-board.jpg doesn't exist
              const target = e.target as HTMLImageElement;
              if (target.src !== window.location.origin + '/header.jpg') {
                target.src = '/header.jpg';
              }
            }}
          />
          </div>
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-white text-4xl md:text-6xl mb-4">
                VABE
                 Tyres and Alignment Services
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                VEHICLES ALIGNMENT BALANCING ENTERPRISE
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={() => setCurrentPage('book')}
                  className="bg-[#eab308] hover:bg-[#ca9a04] text-black px-8 py-6 text-lg"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 ">About Us</h2>
              <div className="w-20 h-1 bg-[#eab308] mx-auto"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                Welcome to VABE, your trusted partner for professional wheel alignment and tyre services. 
                With years of experience in the automotive industry, we are committed to providing exceptional 
                service and ensuring your vehicle's safety and performance. Our team of certified technicians 
                uses state-of-the-art equipment to deliver precise wheel alignment, professional tyre balancing, 
                and comprehensive tyre care services. Located in Gahunje, Pune, we pride 
                ourselves on quick service, honest pricing, and customer satisfaction. Whether you need a simple 
                tyre rotation or complex wheel alignment, we're here to help keep your vehicle running smoothly 
                and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {showcaseImages.map((image, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="overflow-hidden rounded-lg relative aspect-square w-[80%]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
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
              We specialize in wheel alignment, balancing, and tyre services to keep your vehicle running smoothly and safely.
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
                <div className="text-lg">
                  <a href="tel:+919370047020" className="block">+91 9370047020</a>
                  <a href="tel:+919427860992" className="block">+91 9427860992</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <div>
                <div className="text-sm text-white/70">Visit Us</div>
                <div className="text-lg">VABE, Gat no 196 / 1, Shop no 2, Besides Morya Fiber, Opp. Orbis school, Gahunje stadium road, Gahunje, Pune 412101</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}