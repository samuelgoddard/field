import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
// import Header from '@/components/header'
import FPSStats from "react-fps-stats";

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <FPSStats left={'auto'} top={0} right={0} />
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}