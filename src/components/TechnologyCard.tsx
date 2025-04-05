
import { cn } from "@/lib/utils";

interface TechnologyCardProps {
  logo: string;
  className?: string;
}

export const TechnologyCard = ({ logo, className }: TechnologyCardProps) => {
  return (
    <div className={cn(
      "flex items-center justify-center p-8 bg-gradient-to-br from-troiton-900/80 to-black/80 backdrop-blur-lg rounded-xl border border-troiton-800/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-troiton-600/50 shadow-xl shadow-troiton-900/50",
      className
    )}>
      <div className="h-16 w-16 md:h-16 md:w-16 lg:h-20 lg:w-20 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/5 rounded-full blur-md"></div>
        <img 
          src={logo} 
          alt="Technology logo" 
          className="max-h-full max-w-full object-contain relative z-10"
        />
      </div>
    </div>
  );
};
