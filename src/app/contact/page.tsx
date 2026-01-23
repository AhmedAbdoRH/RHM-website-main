import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/FadeIn';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'contact-header');

export default function ContactPage() {
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
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">اتصل بنا</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            دعنا نبني شيئًا مذهلاً معًا. تواصل معنا وابدأ المحادثة.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <FadeIn className="lg:col-span-2">
              <h2 className="font-headline text-3xl font-bold mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input placeholder="اسمك" />
                  <Input type="email" placeholder="بريدك الإلكتروني" />
                </div>
                <Input placeholder="الموضوع" />
                <Textarea placeholder="رسالتك" rows={6} />
                <Button type="submit" size="lg" className="bg-gradient-to-r from-accent to-primary text-primary-foreground border-none">
                  إرسال الرسالة
                </Button>
              </form>
            </FadeIn>
            <FadeIn>
              <Card className="p-8 h-full bg-muted">
                <h3 className="font-headline text-2xl font-bold mb-6">معلومات الاتصال</h3>
                <div className="space-y-6 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">مكتبنا</h4>
                      <p>123 Digital Avenue, Tech City, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">راسلنا عبر البريد الإلكتروني</h4>
                      <a href="mailto:hello@rhmdigital.com" className="hover:text-primary">hello@rhmdigital.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">اتصل بنا</h4>
                      <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
