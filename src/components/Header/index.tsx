// components/Header.tsx

import Link from 'next/link';
import * as S from './styled';
import useNav from '@/hooks/useNav';

export default function Header() {
  const { pathname, navigation } = useNav();

  return (
    <S.Header>
      <Link href="/">
        <S.Logo>Lacrei Saúde</S.Logo>
      </Link>
      <S.Nav>
        {navigation.map((item) => (
          <S.Menu key={item.name} isActive={item.href === pathname}>
            <Link href={item.href}>{item.name}</Link> {/* Link dentro de Menu, não aninhado */}
          </S.Menu>
        ))}
      </S.Nav>
    </S.Header>
  );
}
