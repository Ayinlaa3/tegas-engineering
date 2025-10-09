import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ShieldCheck,
  Target,
  Lightbulb,
  Award,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ValueCard from "@/components/ValueCard";
import heroImage from "@/assets/hero-construction.jpg";
import projectRoads from "@/assets/project-roads.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectPipeline from "@/assets/project-pipeline.jpg";
import projectMarine from "@/assets/project-marine.jpg";

const Index = () => {
  const services = [
    {
      icon: Building2,
      title: "Road Construction",
      description: "Quality road infrastructure with modern engineering standards and safety protocols.",
    },
    {
      icon: Building2,
      title: "Building Construction",
      description: "Commercial and industrial buildings designed and constructed to excellence.",
    },
    {
      icon: Target,
      title: "Pipeline Installation",
      description: "Expert installation and maintenance of oil and gas pipelines and flowlines.",
    },
    {
      icon: ShieldCheck,
      title: "Jetty Construction",
      description: "Marine infrastructure built with precision for offshore operations.",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our operations.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering excellence in every project with attention to detail.",
    },
    {
      icon: Target,
      title: "Safety",
      description: "Zero incident culture ensuring safe work environments.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technology and modern practices.",
    },
  ];

  const projects = [
    { image: projectRoads, title: "Highway Infrastructure Project", category: "Roads" },
    { image: projectBuilding, title: "Commercial Complex Development", category: "Buildings" },
    { image: projectPipeline, title: "Oil & Gas Pipeline Network", category: "Oil & Gas" },
    { image: projectMarine, title: "Offshore Jetty Construction", category: "Marine" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction Excellence"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Building a Stronger Future
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in">
              Over 40 years of engineering construction experience across Nigeria and Sub-Saharan Africa
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Link to="/services">
                <Button size="lg" className="text-lg px-8">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-secondary">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Excellence Since 1982</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              TEGAS Engineering Company Limited is a trusted Nigerian construction and engineering company with over four decades of excellence. We deliver infrastructure projects with unwavering commitment to safety, quality, and innovation across Nigeria and Sub-Saharan Africa.
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering and construction solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose TEGAS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose TEGAS</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values drive everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our commitment to excellence across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with us for your next construction project and experience the TEGAS difference
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
