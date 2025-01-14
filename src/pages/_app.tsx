import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { FC } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Tema único
export const theme = {
  colors: {
    primary: '#018762',
    secondary: '#FFFFFF', // Cor de fundo
    text1: '#1F1F1F', // Texto principal
    text2: '#515151', // Texto secundário
  },
};

// Definindo os estilos globais
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  span img {
    pointer-events: none;
  }

  ::selection {
    color: #EEEEEE;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
