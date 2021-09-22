import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/components/GlobalStyle'
import theme from '@/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <link rel='shortcut icon' href='/favicon.ico' />

    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp
