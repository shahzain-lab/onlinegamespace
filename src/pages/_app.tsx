import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import { theme as _theme } from '@/styles/global-style.config';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import { APIProvider } from '@/context/APIContext';

const theme = extendTheme({ styles: _theme.styles })
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <APIProvider>
      <Component {...pageProps} />
    </APIProvider>
  </ChakraProvider>
);

export default MyApp;
