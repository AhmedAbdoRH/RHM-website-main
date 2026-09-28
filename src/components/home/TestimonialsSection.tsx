import fs from 'node:fs';
import path from 'node:path';
import { TestimonialsSlider } from './TestimonialsSlider';

const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|avif|gif)$/i;

/**
 * Reads every image inside `public/testimonials` at request/build time.
 * Drop a new file in that folder and it shows up automatically — no code change needed.
 * Files are ordered numerically by the leading number in their name (1, 2, ... 10),
 * then alphabetically for names without a number.
 */
function getTestimonialImages(): string[] {
  const dir = path.join(process.cwd(), 'public', 'testimonials');

  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.test(file))
      .sort((a, b) => {
        const numA = Number.parseInt(a, 10);
        const numB = Number.parseInt(b, 10);
        const hasA = !Number.isNaN(numA);
        const hasB = !Number.isNaN(numB);

        if (hasA && hasB && numA !== numB) return numA - numB;
        if (hasA !== hasB) return hasA ? -1 : 1;
        return a.localeCompare(b, undefined, { numeric: true });
      })
      .map((file) => `/testimonials/${file}`);
  } catch {
    return [];
  }
}

export function TestimonialsSection() {
  const images = getTestimonialImages();

  return <TestimonialsSlider images={images} />;
}
