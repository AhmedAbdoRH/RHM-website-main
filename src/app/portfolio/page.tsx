import { ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ProjectsShowcase } from '@/components/portfolio/ProjectsShowcase';

const colors = {
  primary: '#60b093',
  dark: '#234338',
};

export default function PortfolioPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white px-4"
        style={{ background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})` }}
      >
        <FadeIn className="max-w-4xl">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">أعمالنا</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            عرض لشغفنا ودقتنا وشراكتنا.
          </p>
        </FadeIn>
      </section>

      {/* ── Portfolio Content ── */}
      <ProjectsShowcase showHeader={false} />

      {/* ── CTA Section ── */}
      <section className="py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">هل لديك مشروع في ذهنك؟</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
              نحن مستعدون للاستماع. دعنا نصنع شيئًا رائعًا معًا.
            </p>
            <a
              href="https://wa.me/201008116452"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                boxShadow: `0 10px 30px ${colors.primary}25`,
              }}
            >
              اتصل بنا
              <ArrowLeft className="mr-2 h-5 w-5" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
