
import { useState, useRef, useEffect } from 'react';
import { TechnologyCard } from './TechnologyCard';
import { TechnologyCategory } from '@/data/technologies';

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

  return (
    <div ref={sectionRef} className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white border-l-4 border-troiton-500 pl-4">
        {category.title}
      </h3>
      
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        {category.technologies.map((tech, index) => (
          <TechnologyCard
            key={`${category.id}-${index}`}
            name={tech.name}
            logo={tech.logo}
            className="backdrop-blur-md"
          />
        ))}
      </div>
    </div>
  );
};
