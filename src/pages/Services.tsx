import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import {
  Construction,
  Building2,
  Drill,
  Factory,
  Pipette,
  MapPin,
  Ship,
  Anchor,
  Box,
  Droplets,
  Wrench,
  Ruler,
  HardHat,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: "Road Construction",
      description: "Comprehensive road infrastructure development including highways, expressways, and urban roads built to international standards with quality materials and modern construction techniques.",
    },
    {
      icon: Building2,
      title: "Building Construction",
      description: "Commercial, industrial, and residential building construction services. We deliver projects from concept to completion with focus on quality, functionality, and aesthetic appeal.",
    },
    {
      icon: Drill,
      title: "Oil Drilling Location Preparation",
      description: "Expert site preparation services for oil drilling operations including land clearing, leveling, access road construction, and installation of necessary infrastructure.",
    },
    {
      icon: Factory,
      title: "Fabrication and Erection of Steel Structures",
      description: "Specialized in fabrication, installation, and erection of steel structures for industrial, commercial, and infrastructure projects with precision engineering.",
    },
    {
      icon: Pipette,
      title: "Pipeline / Flow-line Installation and Maintenance",
      description: "Installation, testing, and maintenance of oil and gas pipelines and flowlines. We ensure integrity, safety, and compliance with industry standards.",
    },
    {
      icon: MapPin,
      title: "Survey Services",
      description: "Comprehensive survey services including engineering surveys, topographic surveys, geodetic surveys, and bathymetric surveys using modern equipment and technology.",
    },
    {
      icon: Ship,
      title: "Jetty Construction",
      description: "Design and construction of marine jetties and offshore structures for port operations, oil and gas facilities, and maritime infrastructure.",
    },
    {
      icon: Anchor,
      title: "Offshore Procurement Services",
      description: "Specialized procurement and logistics services for offshore operations, ensuring timely delivery of materials and equipment to remote locations.",
    },
    {
      icon: Box,
      title: "Facility / Plant / Equipment Foundations",
      description: "Construction of robust foundations for industrial facilities, plants, and heavy equipment with engineering precision to ensure stability and longevity.",
    },
    {
      icon: Droplets,
      title: "Drainage System Construction",
      description: "Design and construction of efficient drainage systems for urban and industrial areas, including surface drains, culverts, and stormwater management systems.",
    },
    {
      icon: Wrench,
      title: "Water Borehole (Mechanical Drilling)",
      description: "Professional water borehole drilling services using modern mechanical drilling equipment to provide sustainable water supply solutions.",
    },
    {
      icon: Ruler,
      title: "Engineering Design of Structures",
      description: "Comprehensive structural engineering design services for buildings, bridges, and civil engineering structures using advanced design software and methodologies.",
    },
    {
      icon: HardHat,
      title: "General Civil Engineering Works",
      description: "Wide range of civil engineering services including earthworks, site development, utilities installation, and infrastructure maintenance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-fade-in">
            Comprehensive engineering and construction solutions delivered with excellence, safety, and innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your construction vision to life
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
