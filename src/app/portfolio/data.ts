import { PlaceHolderImages } from "@/lib/placeholder-images";

export type ProjectCategory = 'تقنية/تطوير ويب' | 'الإنتاج المرئي';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  imageHint: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'QuantumLeap CRM',
    description: 'منصة CRM مخصصة لمؤسسة رائدة تعتمد على المبيعات، وتتميز بتحليلات في الوقت الفعلي ومحرك تقارير مخصص.',
    category: 'تقنية/تطوير ويب',
    imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-tech-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-tech-1')?.imageHint || '',
  },
  {
    id: '2',
    title: 'تطبيق نوفا للياقة البدنية',
    description: 'تطبيق محمول متعدد المنصات لشركة لياقة بدنية ناشئة، يتكامل مع الأجهزة القابلة للارتداء ويقدم خطط تمرين مخصصة.',
    category: 'تقنية/تطوير ويب',
    imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-tech-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-tech-2')?.imageHint || '',
  },
  {
    id: '3',
    title: 'قصة شركة Artisan Coffee',
    description: 'فيلم وثائقي للعلامة التجارية يصور الرحلة من حبة البن إلى الكوب، ويسلط الضوء على التزام الشركة بالمصادر الأخلاقية.',
    category: 'الإنتاج المرئي',
    imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-media-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-media-1')?.imageHint || '',
  },
  {
    id: '4',
    title: 'معدات Evergreen للمساحات الخارجية',
    description: 'سلسلة من مقاطع الفيديو عالية التأثير للمنتجات وصور لأسلوب الحياة لإطلاق تجارة إلكترونية، مما أدى إلى زيادة التحويلات بنسبة 200٪.',
    category: 'الإنتاج المرئي',
    imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-media-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-media-2')?.imageHint || '',
  },
  {
    id: '5',
    title: 'إعادة تصميم علامة Helios Energy',
    description: 'إعادة تصميم شاملة للعلامة التجارية لشركة طاقة متجددة، بما في ذلك شعار جديد وهوية بصرية وإرشادات شاملة للعلامة التجارية.',
    category: 'الإنتاج المرئي',
    imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-branding-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-branding-1')?.imageHint || '',
  },
  {
    id: '6',
    title: 'هوية Pebble Health',
    description: 'إنشاء هوية علامة تجارية جديدة وودودة وموثوقة لشركة صحة رقمية ناشئة، من الشعار إلى المواد التسويقية.',
    category: 'الإنتاج المرئي',
    imageUrl: PlaceHolderImages.find(p => p.id === 'portfolio-branding-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'portfolio-branding-2')?.imageHint || '',
  },
];
