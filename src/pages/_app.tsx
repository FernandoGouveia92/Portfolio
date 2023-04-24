// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globalStyles';
import AOSWrapper from './AOSWrapper';

export default function App({ Component, pageProps }: AppProps) {
    return <div>
        <GlobalStyle />
        <AOSWrapper>
            <Component {...pageProps} />
        </AOSWrapper>
    </div>
}
