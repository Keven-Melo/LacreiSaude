// components/Home.tsx

import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import useNav from '@/hooks/useNav';

import * as S from './styled';

interface Props {
  title: string;
  text: string;
  image: ReactNode;
  children?: ReactNode; // Adicione a propriedade children
}

export default function Main({ title, text, image, children }: Props) {
  const { pathname } = useNav();
  const isHome = pathname === '/';

  return (
    <S.Main>
      <div>
        <Head>
          <title>{`${isHome ? 'Home' : title} | Desafio Lacrei`}</title>
        </Head>
        <S.Title>{title}</S.Title>
        <S.Text isHome={isHome}>{text}</S.Text>
        {isHome && (
          <S.Buttons>
            <Link href="/pessoa-usuaria">Usuário</Link>
            <Link href="/profissional">Profissional</Link>
            <Link href="/FAQ">FAQ</Link>

           
          </S.Buttons>
        )}
      </div>
      {image}
      {children} {/* Renderize os filhos aqui */}
    </S.Main>
  );
}
