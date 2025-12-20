import React from 'react';
import { Settings, Wrench, CheckCircle, Gauge, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

type Page = 'home' | 'services' | 'book';

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
}

export function Services({ setCurrentPage }: ServicesProps) {
  const services = [
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'Wheel Alignment',
      description: 'Precision computerized alignment to correct steering angles and ensure optimal tire contact with the road. Prevents uneven tire wear and improves fuel efficiency.'
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Wheel Balancing',
      description: 'Expert balancing using state-of-the-art equipment to distribute weight evenly around your wheels. Eliminates vibrations and extends tire life.'
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'Tire Inspection',
      description: 'Comprehensive tire health check including tread depth, air pressure, and visual inspection for damage or irregular wear patterns.'
    },
    {
      icon: <Gauge className="w-10 h-10" />,
      title: 'Tire Rotation',
      description: 'Regular rotation service to ensure even tire wear across all four tires, maximizing their lifespan and maintaining consistent performance.'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Suspension Check',
      description: 'Basic suspension system inspection to identify worn components that could affect alignment and ride quality.'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Quick Service',
      description: 'Most services completed in under an hour. We value your time and work efficiently without compromising quality.'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl mb-4">Our Services</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Professional tire and wheel services to keep your vehicle safe, efficient, and running smoothly.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[#1e3a8a] transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#eab308] rounded-full mb-4 text-black">
                    {service.icon}
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-8">Tools and Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square">
                <img
                  src="/Rectangle 1.png"
                  alt="Quality Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <h4>Tyre Changer and fixing Machine</h4>
                <p className="text-muted-foreground text-sm mt-1">
                Allows safe and quick tyre removal, fitting, and repair without damaging the tyre or rim.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square">
                <img
                  src="/Rectangle 2.png"
                  alt="Expert Technicians"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <h4>Air/Nitrogen filling machine</h4>
                <p className="text-muted-foreground text-sm mt-1">
                Provides nitrogen inflation to maintain consistent tyre pressure, improving fuel efficiency and tyre durability.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square">
                <img
                  src="/Rectangle 3.png"
                  alt="Modern Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <h4>Wheel Alignment Machine</h4>
                <p className="text-muted-foreground text-sm mt-1">
                Ensures precise wheel alignment for smoother handling, improved vehicle stability, and longer tyre life.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square">
                <img
                  src="/Rectangle 4.png"
                  alt="Reliable Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <h4>Balancing Machine</h4>
                <p className="text-muted-foreground text-sm mt-1">
                Balances wheels accurately to reduce vibrations, ensuring a comfortable ride and even tyre wear.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square">
                <img
                  src="/Rectangle 5.png"
                  alt="Professional Care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <h4>8KV Inverter Backup Support System</h4>
                <p className="text-muted-foreground text-sm mt-1">
                Ensures uninterrupted service during power outages, keeping all machines running smoothly.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square">
                <img
                  src="/Rectangle 6.png"
                  alt="Customer Satisfaction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <h4>Customer Satisfaction</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Committed to exceeding expectations on every visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">Why Choose VABE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#eab308] rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h4 className="mb-2">Fast Service</h4>
              <p className="text-sm text-muted-foreground">Most jobs done in under an hour</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#eab308] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h4 className="mb-2">Quality Work</h4>
              <p className="text-sm text-muted-foreground">Experienced certified technicians</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#eab308] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black">$</span>
              </div>
              <h4 className="mb-2">Fair Pricing</h4>
              <p className="text-sm text-muted-foreground">Honest, transparent quotes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#eab308] rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
              <h4 className="mb-2">Guaranteed</h4>
              <p className="text-sm text-muted-foreground">Satisfaction guarantee on all work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Book an appointment today and experience professional service at affordable prices.
          </p>
          <Button 
            onClick={() => setCurrentPage('book')}
            className="bg-[#eab308] hover:bg-[#ca9a04] text-black px-8 py-6 text-lg"
          >
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
