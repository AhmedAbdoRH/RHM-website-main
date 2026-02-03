import { ServicesSection } from '@/components/home/ServicesSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';
import DigitalSolutionHero from '@/components/home/DigitalSolutionHero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <DigitalSolutionHero />

      <ServicesSection />

      <PortfolioSection />

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
