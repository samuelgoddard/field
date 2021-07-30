import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div className="bg-[#F8F3ED]">
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  )
}