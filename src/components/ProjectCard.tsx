import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

const ProjectCard = ({ image, title, category }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-xs font-medium uppercase tracking-wider opacity-90">{category}</span>
          <h3 className="text-xl font-semibold mt-1">{title}</h3>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
