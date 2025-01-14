// hooks/useNav.ts

import { useRouter } from 'next/router';

export default function useNav() {
  const { pathname } = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pessoa Usuária', href: '/pessoa-usuaria' },
    { name: 'Profissional', href: '/profissional' },
    { name: 'FAQ', href: '/FAQ' }, // Adicione a entrada para FAQ aqui
  ];

  return {
    pathname,
    navigation,
  };
}
