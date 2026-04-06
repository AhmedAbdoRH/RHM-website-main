'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects, type ProjectCategory } from './data';
import { FadeIn } from '@/components/animations/FadeIn';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const categories: ('الكل' | ProjectCategory)[] = ['الكل', 'تقنية/تطوير ويب', 'الإنتاج المرئي'];
const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'الكل' | ProjectCategory>('الكل');

  const filteredProjects = filter === 'الكل' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white px-4">
        {heroImage &&
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover -z-10 brightness-50"
                data-ai-hint={heroImage.imageHint}
            />
        }
        <FadeIn className="max-w-4xl">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">أعمالنا</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            عرض لشغفنا ودقتنا وشراكتنا.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  className={cn(
                    'transition-all duration-200',
                    filter === category ? 'bg-primary text-primary-foreground' : ''
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id}>
                <Card className="h-full overflow-hidden group border-2 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <FadeIn>
              <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">لم يتم العثور على مشاريع في هذه الفئة.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">هل لديك مشروع في ذهنك؟</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
              نحن مستعدون للاستماع. دعنا نصنع شيئًا رائعًا معًا.
            </p>
            <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-accent to-primary text-primary-foreground border-none">
              <a href="https://wa.me/201008116452">
                اتصل بنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
