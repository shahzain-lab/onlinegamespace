import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import { theme as _theme } from '@/styles/global-style.config';
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import { APIProvider } from '@/context/APIContext';
import { useRef, useEffect} from 'react';

const theme = extendTheme({ styles: _theme.styles })
const MyApp = ({ Component, pageProps }: AppProps) => {
  const banner = useRef<any>()

    const atOptions = {
        key: 'KEY_HERE',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])
  return (<ChakraProvider theme={theme}>
   <div style={{width: '100%'}}>
    <APIProvider>
      <Component {...pageProps} />
    </APIProvider>
   </div>
  </ChakraProvider>
)};

export default MyApp;
