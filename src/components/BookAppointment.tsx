import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
        throw new Error('EmailJS is not configured. Please check the setup instructions.');
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        vehicle: formData.vehicle,
        preferred_date: formData.date,
        preferred_time: formData.time,
        message: formData.message || 'No additional information provided',
        to_email: EMAILJS_CONFIG.RECEIVER_EMAIL || 'vabe2023@gmail.com',
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.success('Appointment request sent successfully! We\'ll contact you shortly to confirm.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        vehicle: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send appointment request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl mb-4">Book an Appointment</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you shortly to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Request an Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="vehicle">Vehicle Type *</Label>
                      <Input
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        required
                        placeholder="e.g., 2020 Toyota Camry"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="mt-1"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Let us know if you have any specific concerns or service requests..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#eab308] hover:bg-[#ca9a04] text-black disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Appointment Request
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * We'll contact you to confirm your appointment time
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#1e3a8a] mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <a href="tel:+919370047020" className="hover:text-[#1e3a8a] block">+91 9370047020</a>
                      <a href="tel:+919427860992" className="hover:text-[#1e3a8a] block">+91 9427860992</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1e3a8a] mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Address</div>
                      <div>VABE (Vehicles Alignment Balancing Enterprise)</div>
                      <div>Gat no 196/1, Besides Morya Fibers</div>
                      <div>Opp. Orbis School, Gahunje stadium road</div>
                      <div>Gahunje, Pune 412101</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#1e3a8a] mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:vabe2023@gmail.com" className="hover:text-[#1e3a8a]">
                        vabe2023@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#1e3a8a] mt-0.5" />
                    <div className="flex-1">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">All Days</span>
                          <span>9:00 AM - 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="mb-2">Payment Options</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Cash</div>
                    <div>• Google Pay</div>
                    <div>• Debit / Credit Card (2% extra applicable)</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="mb-2">Walk-ins Welcome!</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept walk-in customers, but booking an appointment ensures minimal wait time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps?q=VABE+Vehicles+Alignment+Balancing+Enterprise,+Gat+no+196/1,+Besides+Morya+Fibers,+Opp.+Orbis+School,+Gahunje+stadium+road,+Gahunje,+Pune+412101&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VABE Location Map"
                    className="w-full h-full"
                  ></iframe>
                  <div className="mt-4 text-center">
                    <a 
                      href="https://maps.app.goo.gl/PmQY7cvyehS542r26?g_st=awb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#1e3a8a] hover:underline text-sm"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Visit us at: VABE (Vehicles Alignment Balancing Enterprise), Gat no 196/1, Besides Morya Fibers, Opp. Orbis School, Gahunje stadium road, Gahunje, Pune 412101
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
