// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react';
import AOSWrapper from './AOSWrapper';
import Header from '@/components/Header';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: #111113;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, h1, h2 {
    color: #fff;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={globalStyles} />
            <AOSWrapper>
                <Header />
                <Component {...pageProps} />
            </AOSWrapper>
        </>
    )
}
