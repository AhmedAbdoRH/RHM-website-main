import { ServicesSection } from '@/components/home/ServicesSection';
import { ProjectsShowcase } from '@/components/portfolio/ProjectsShowcase';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { CTASection } from '@/components/home/CTASection';
import DigitalSolutionHero from '@/components/home/DigitalSolutionHero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <DigitalSolutionHero />

      <ServicesSection />

      <ProjectsShowcase />

      <TestimonialsSection />

      <PartnersSection />

      <CTASection />
    </div>
  );
}
