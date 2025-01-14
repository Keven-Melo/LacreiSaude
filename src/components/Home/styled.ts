// components/styled.ts (ou o arquivo onde você define seus styled-components)

import styled from 'styled-components';

export const Main = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p<{ isHome: boolean }>`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${(props) => (props.isHome ? props.theme.colors.text1 : props.theme.colors.text2)};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.text2};
    }
  }
`;
