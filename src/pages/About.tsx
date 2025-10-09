import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About TEGAS</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-fade-in">
            Over four decades of engineering excellence and unwavering commitment to quality
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                TEGAS Engineering Company Limited (TEGAS) was incorporated in Nigeria in 1982 as a wholly indigenous engineering construction and consulting company. Over the past four decades, we have established ourselves as a trusted name in the Nigerian construction industry.
              </p>
              <p className="leading-relaxed">
                Our operations span across Nigeria and Sub-Saharan Africa, delivering comprehensive engineering construction services to both government and private sector clients. We specialize in general engineering construction works with expertise in road construction, building construction, pipeline installation, marine works, and civil engineering projects.
              </p>
              <p className="leading-relaxed">
                TEGAS is committed to providing efficient and quality services that meet international standards. Our team of experienced professionals combines technical expertise with modern construction methodologies to deliver projects on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading construction engineering company in Nigeria and Sub-Saharan Africa, renowned for excellence, innovation, and sustainable development.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To serve our clients efficiently by executing high-quality projects in a timely manner, while maintaining the highest standards of safety and environmental responsibility.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Integrity", description: "Upholding the highest ethical standards in all our dealings" },
                { title: "Reliability", description: "Consistent delivery of commitments to our clients and stakeholders" },
                { title: "Quality", description: "Excellence in execution across all project phases" },
                { title: "Safety", description: "Zero incident culture protecting our people and environment" },
                { title: "Innovation", description: "Embracing modern technology and best practices" },
                { title: "Capacity Building", description: "Investing in our people and local content development" },
              ].map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <h4 className="text-lg font-semibold">{value.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Heart className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold">Chairman's Statement</h2>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "Since our establishment in 1982, TEGAS has grown from strength to strength, building a reputation for excellence, reliability, and innovation in the construction industry. Our journey has been guided by an unwavering commitment to quality and safety."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We take pride in our contributions to Nigeria's infrastructure development and our role in empowering local content. Our team of dedicated professionals brings together decades of combined experience, modern engineering practices, and a deep understanding of the Nigerian construction landscape.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As we look to the future, TEGAS remains committed to sustainable development, continuous improvement, and delivering value to our clients and stakeholders. We believe that quality construction is not just about building structures, but about building lasting relationships and contributing to national development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for your continued trust in TEGAS. We look forward to serving you and building a stronger future together.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t">
                <p className="font-semibold text-lg">Engr. (Chief) Blessing T. Oboh</p>
                <p className="text-sm text-muted-foreground">MEng., C.Eng., FNSE, FASCE, FNICE, FIMC</p>
                <p className="text-sm font-medium text-primary">Chairman/CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
