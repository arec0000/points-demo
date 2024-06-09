import localFont from 'next/font/local';

export const Inter = localFont({
  src: [
    {
      path: './Inter/Inter-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter/Inter-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Inter/Inter-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Inter/Inter-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--font-main',
});

export const Roboto = localFont({
  src: [
    {
      path: './Roboto/Roboto-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto/Roboto-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Roboto/Roboto-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--font-secondary',
});
