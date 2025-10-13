import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

import cleanRoad from '@/assets/clean-road.jpg'
import culvert1 from "@/assets/culvert.jpg"
import culvert from "@/assets/culvert3.jpg"
import layingAsphalt from "@/assets/laying-asphalt.jpg"
import roadConstruction from "@/assets/road-construction.jpg"
import bedroomBungalow from "@/assets/bedroom-bungalow.jpg"
import bedroomBungalow1 from "@/assets/bedroom-bungalow2.jpg"
import bedroomBungalow2 from "@/assets/bedroom-bungalow3.jpg"
import chemicalStore from "@/assets/chemical-store.jpg"
import chemicalStore1 from "@/assets/Chemical-farm2.jpg"
import crudeoilTanker from "@/assets/crudeoil-tank.jpg"
import crudeoilTanker1 from "@/assets/crudeoil-tank2.jpg"
import crudeoilTanker3 from "@/assets/crudeoil-tank3.jpg"
import crudeoilTanker4 from "@/assets/crudeoil-tank4.jpg"
import shellClinic from "@/assets/shell-clinic.jpg"
import shellClinic1 from "@/assets/shell-clinic2.jpg"
import railWayBridge from "@/assets/railway.jpg"
import railWayBridge1 from "@/assets/railway2.jpg"
import railWayBridge2 from "@/assets/railway3.jpg"
import gasPlant from "@/assets/gas-plant.jpg"
import gasPlant1 from "@/assets/gas-plant2.jpg"
import waterTank from "@/assets/water-tank.jpg" 
import tankwaterFarm from "@/assets/tank-waterfarm.jpg"
import roadGrading from "@/assets/road-grading.jpg"
import roadGrading1 from "@/assets/road-grading2.jpg"

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Roads", "Buildings", "Oil & Gas", "Marine"];

  const projects = [
    { image: cleanRoad, title: "Urban Road Network Development", category: "Roads" },
    { image: culvert1, title: "Bridge and Culvert Construction", category: "Roads"},
    { image: culvert, title: "Culvert Installation and Maintenance", category: "Roads" },
    { image: layingAsphalt, title: "Asphalt Paving and Resurfacing", category: "Roads" },
    { image: roadConstruction, title: "Rural Road Construction", category: "Roads" },
    { image: bedroomBungalow, title: "Residential Bungalow Project", category: "Buildings" },
    { image: bedroomBungalow1, title: "Luxury Home Development", category: "Buildings" },
    { image: bedroomBungalow2, title: "Custom Residential Design", category: "Buildings" },
    { image: chemicalStore, title: "Chemical Storage Facility", category: "Buildings" },
    { image: chemicalStore1, title: "Industrial Chemical Storage", category: "Buildings" },
    { image: crudeoilTanker, title: "Crude Oil Tank Farm", category: "Oil & Gas" },
    { image: crudeoilTanker1, title: "Oil Storage Solutions", category: "Oil & Gas" },
    { image: crudeoilTanker3, title: "Petroleum Storage Facility", category: "Oil & Gas" }, 
    { image: crudeoilTanker4, title: "Fuel Storage and Distribution", category: "Oil & Gas" },
    { image: shellClinic, title: "Corporate Clinic Construction", category: "Buildings" },
    { image: shellClinic1, title: "Corporate Clinic Construction", category: "Buildings" },
    { image: railWayBridge, title: "Railway Bridge Construction", category: "Marine" },
    { image: railWayBridge1, title: "Railway Bridge Renovation", category: "Marine" },
    { image: railWayBridge2, title: "Railway Bridge Maintenance", category: "Marine" },
    { image: gasPlant, title: "Gas Processing Plant", category: "Oil & Gas" },
    { image: gasPlant1, title: "Natural Gas Facility", category: "Oil & Gas" },
    { image: roadGrading, title: "Road Grading and Earthworks", category: "Roads" },
    { image: roadGrading1, title: "Land Grading and Site Preparation", category: "Roads" },
    { image: waterTank, title: "Water Storage Tank", category: "Roads" },
    { image: tankwaterFarm, title: "Water Tank Farm Construction", category: "Buildings" },
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
