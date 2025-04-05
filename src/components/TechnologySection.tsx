
import { useState, useRef, useEffect } from 'react';
import { TechnologyCard } from './TechnologyCard';
import { Technology } from '@/data/technologies';

interface TechnologySectionProps {
  technologies: Technology[];
}

export const TechnologySection = ({ technologies }: TechnologySectionProps) => {
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
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-troiton-600/20 to-transparent opacity-30 rounded-2xl blur-xl -z-10"></div>
        <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 p-6 rounded-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              logo={tech.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
