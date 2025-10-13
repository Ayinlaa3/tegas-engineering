import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import projectRoads from "@/assets/project-roads.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectPipeline from "@/assets/project-pipeline.jpg";
import projectMarine from "@/assets/project-marine.jpg";
import cleanRoad from '@/assets/clean-road.jpg'
import culvert1 from "@/assets/culvert.jpg"
import culvert from "@/assets/culvert3.jpg"
import layingAshpalt from "@/assets/laying-asphalt.jpg"
import roadConstruction from "@/assets/road-construction.jpg"
import bedroomBungalow from "@/assets/bedroom-bungalow.jpg"
import bedroomBungalow1 from "@/assets/bedroom-bungalow2.jpg"
import bedroomBungalow2 from "@/assets/bedroom-bungalow3.jpg"


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Roads", "Buildings", "Oil & Gas", "Marine"];

  const projects = [
    { image: projectRoads, title: "Highway Infrastructure Project", category: "Roads" },
    { image: cleanRoad, title: "Urban Road Network Development", category: "Roads" },
    { image: culvert1, title: "Bridge and Culvert Construction", category: "Roads"},
    { image: culvert, title: "Culvert Installation and Maintenance", category: "Roads" },
    { image: layingAshpalt, title: "Asphalt Paving and Resurfacing", category: "Roads" },
    { image: roadConstruction, title: "Rural Road Construction", category: "Roads" },
    { image: bedroomBungalow, title: "Residential Bungalow Project", category: "Buildings" },
    { image: bedroomBungalow1, title: "Luxury Home Development", category: "Buildings" },
    { image: bedroomBungalow2, title: "Custom Residential Design", category: "Buildings" },


    { image: projectBuilding, title: "Commercial Complex Development", category: "Buildings" },
    { image: projectBuilding, title: "Industrial Facility Construction", category: "Buildings" },
    { image: projectPipeline, title: "Oil & Gas Pipeline Network", category: "Oil & Gas" },
    { image: projectPipeline, title: "Drilling Location Preparation", category: "Oil & Gas" },
    { image: projectMarine, title: "Offshore Jetty Construction", category: "Marine" },
    { image: projectMarine, title: "Port Infrastructure Development", category: "Marine" },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-fade-in">
            Showcasing our commitment to excellence across diverse construction and engineering projects
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction vision to reality
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
