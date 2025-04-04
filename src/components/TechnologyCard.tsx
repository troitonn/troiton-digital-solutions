
import { cn } from "@/lib/utils";

interface TechnologyCardProps {
  name: string;
  logo: string;
  className?: string;
}

export const TechnologyCard = ({ name, logo, className }: TechnologyCardProps) => {
  const isPlaceholder = logo === "/placeholder.svg";

  return (
    <div className={cn(
      "flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/15",
      className
    )}>
      {!isPlaceholder && (
        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center mb-3 relative">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
      <span className="text-sm text-gray-200 font-medium text-center">{name}</span>
    </div>
  );
};
