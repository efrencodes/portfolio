import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/efren-martinez.webp';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://www.efrencodes.dev',
  author: {
    avatar,
    name: 'Efrén Martínez',
    headline: 'Software engineer',
    username: 'efrencodes',
    location: 'Querétaro, Qro.',
    pronouns: '',
  },
  seo: {
    title: 'Efrén Martínez - Software engineer',
    description: 'Software engineer de productos digitales, con experiencia en React, React Native, Vuejs, Next.js, TypeScript, Tailwind CSS, GraphQL.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@efrencodes'
    },
    robots: 'noindex, nofollow',
  }
};