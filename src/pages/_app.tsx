import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import { theme as _theme } from '@/styles/global-style.config';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import { APIProvider } from '@/context/APIContext';
import Script from 'next/script';

const theme = extendTheme({ styles: _theme.styles })
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
     <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-359YRG0KF0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-359YRG0KF0');
        `}
      </Script>
      <Script
   id="Adsense-id"
   data-ad-client="ca-pub-3493853415073232"
   async
   strategy="beforeInteractive"
   crossOrigin='anonymous'
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
    <APIProvider>
      <Component {...pageProps} />
    </APIProvider>
  </ChakraProvider>
);

export default MyApp;
