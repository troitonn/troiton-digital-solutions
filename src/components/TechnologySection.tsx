
import { useState, useRef, useEffect } from 'react';
import { TechnologyCard } from './TechnologyCard';
import { TechnologyCategory } from '@/data/technologies';
import { ChevronRight } from 'lucide-react';

interface TechnologySectionProps {
  category: TechnologyCategory;
}

export const TechnologySection = ({ category }: TechnologySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Filter out technologies with placeholder images
  const visibleTechnologies = category.technologies.filter(tech => tech.logo !== "/placeholder.svg");

  // If there are no non-placeholder technologies, don't render the section
  if (visibleTechnologies.length === 0) {
    return null;
  }

  return (
    <div ref={sectionRef} className="mb-16">
      <div className="flex items-center mb-6">
        <ChevronRight className="text-troiton-500 mr-2 h-5 w-5" />
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {category.title}
        </h3>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-troiton-600/20 to-transparent opacity-30 rounded-2xl blur-xl -z-10"></div>
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 p-4 rounded-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {visibleTechnologies.map((tech, index) => (
            <TechnologyCard
              key={`${category.id}-${index}`}
              name={tech.name}
              logo={tech.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
