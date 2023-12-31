import { EMAIL_URL, WHATSAPP_URL } from '@/utils/constants';
import { ReactNode } from 'react';

const support = process.env.WHATSAPP;
const email = process.env.EMAIL;

export type publicRoutesType = {
  id: number | string;
  label: ReactNode;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
};

export const publicRoutes: publicRoutesType[] = [
  {
    id: 0,
    label: 'Home',
    href: '/',
  },
  {
    id: 1,
    label: 'About us',
    href: '/about',
  },
  {
    id: 2,
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 3,
    label: 'FAQ',
    href: '/faq',
  },
  {
    id: 4,
    label: 'Contact Us',
    href: '/contact',
  },
];

export type footerRoutesType = {
  id: number | string;
  label: ReactNode;
  children: publicRoutesType[];
};

export const footerRoutes: footerRoutesType[] = [
  {
    id: 1,
    label: 'Get Started',
    children: [
      {
        id: '1-1',
        label: 'About us',
        href: '/about',
      },
      {
        id: '1-4',
        label: 'Pricing',
        href: '/pricing',
      },
      {
        id: '1-2',
        label: 'FAQ',
        href: '/faq',
      },
      {
        id: '1-3',
        label: 'Contact Us',
        href: '/contact',
      },
    ],
  },
  {
    id: 2,
    label: 'Support',
    children: [
      {
        id: '2-1',
        label: 'Email: ' + email,
        href: EMAIL_URL,
        target: '_blank',
      },
      {
        id: '2-2',
        label: 'WhatsApp: ' + support,
        href: WHATSAPP_URL,
        target: '_blank',
      },
    ],
  },
];
