import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Leaf, Target, Award, Users, CheckCircle } from "lucide-react";

const HSEQuality = () => {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "Zero incident culture across all our operations with comprehensive safety protocols and training programs.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Commitment to sustainable practices and environmental protection in all our construction activities.",
    },
    {
      icon: Target,
      title: "Quality Management",
      description: "Systematic approach to quality control ensuring every project meets or exceeds standards.",
    },
    {
      icon: Award,
      title: "Continuous Improvement",
      description: "Regular review and enhancement of our HSE and quality management systems.",
    },
    {
      icon: Users,
      title: "Training & Development",
      description: "Ongoing safety and quality training for all team members and contractors.",
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Adherence to international and local HSE standards and regulations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">HSE & Quality</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-fade-in">
            Our unwavering commitment to Health, Safety, Environment, and Quality excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our HSE Commitment</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                At TEGAS Engineering Company Limited, we believe that every worker has the right to return home safely at the end of each working day. This fundamental principle guides our approach to Health, Safety, and Environmental management across all our operations.
              </p>
              <p className="leading-relaxed">
                We are committed to achieving zero incidents through comprehensive safety protocols, regular training, proper equipment provision, and continuous monitoring of our worksites. Our HSE management system is designed to identify, assess, and mitigate risks before they can impact our people or the environment.
              </p>
              <p className="leading-relaxed">
                Environmental responsibility is at the core of our operations. We implement sustainable construction practices, minimize waste, and ensure proper disposal of materials. Our projects are designed and executed with consideration for environmental impact and long-term sustainability.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Quality Management System</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Our Quality Management System (QMS) is built on the principles of continuous improvement and customer satisfaction. We maintain rigorous quality control procedures throughout all phases of project execution – from initial planning and design through construction and final handover.
              </p>
              <p className="leading-relaxed">
                Every project undergoes regular quality inspections and testing to ensure compliance with specifications and standards. We use modern quality assurance tools and methodologies to track, document, and verify the quality of materials, workmanship, and completed works.
              </p>
              <p className="leading-relaxed">
                Our commitment to quality extends beyond project completion. We provide comprehensive warranty support and maintain relationships with our clients to ensure long-term satisfaction with our delivered projects.
              </p>
            </div>
          </div>

          {/* Commitments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <commitment.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{commitment.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Standards & Best Practices</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We adhere to international standards and best practices including ISO 9001 (Quality Management), 
              ISO 14001 (Environmental Management), and ISO 45001 (Occupational Health and Safety) principles 
              to ensure excellence in all our operations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HSEQuality;
