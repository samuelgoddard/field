import '@/styles/main.css'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Context } from '../context/state'
import { IntroContext } from '../context/intro'
import Div100vh from 'react-div-100vh'
import * as gtag from '@/helpers/gtag'
import Logo from '@/components/logo'
import homeSupergraphic from 'public/images/home-sh.jpg'
import Image from 'next/image'

const introEnd = {
  visible: { opacity: 0 },
  hidden: { opacity: '100%' }
}

const logoReveal = {
  visible: { x: '100%' },
  hidden: { x: 0 }
}

const swipe1 = {
  visible: { scaleX: 1.7, x: '135%' },
  hidden: { scaleX: 1.7, x: '-135%' }
}

const hideLogo = {
  visible: {x: 0 },
  hidden: { x: '-100%' }
}

const hideLogoFull = {
  visible: { opacity: 0 },
  hidden: { opacity: 1 }
}


export default function App({ Component, pageProps }) {
  const router = useRouter()
  const showCookieBar = useState(true)
  const [globalMenuOpen, setGlobalMenuOpen] = useState(false);
  const [introContext, setIntroContext] = useState(false);

  useEffect(() => {
    if (getCookieConsentValue()){
      const handleRouteChange = (url) => {
        gtag.pageview(url)
    }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />

      <div className="grain fixed inset-0 z-[10000000] pointer-events-none"></div>

      {showCookieBar && (
        <CookieConsent
          disableStyles
          buttonWrapperClasses="absolute left-0 bottom-0 lg:left-auto lg:bottom-auto lg:top-0 lg:right-0 flex items-center space-x-3 pr-6 pl-6 lg:pl-0 pb-[20px] lg:pb-0 lg:pt-[9px] text-sm"
          buttonClasses="underline"
          declineButtonClasses="underline"
          containerClasses="bg-soft-black-dark text-off-white fixed bottom-0 lg:bottom-auto lg:top-0 left-0 lg:left-auto lg:right-0 bottom-auto h-[auto] lg:h-[40px] lg:rounded-full w-full lg:w-[610px] 2xl:w-[640px] z-[999] flex lg:items-center px-6 pt-[20px] pb-[55px] lg:pb-[1px] text-sm lg:pt-0 lg:m-[35px] leading-snug"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          onDecline={() => { Cookies.remove("tagManagerCookieName") }}
        >
          This site uses cookies to improve your visiting experience, <Link href="/privacy"><a className="underline inline-block">more info</a></Link>
        </CookieConsent>
      )}

      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <LazyMotion features={domAnimation}>
          { !introContext && router.asPath == '/' && (
            <>
              <m.div initial="hidden"
                animate="visible" className="fixed inset-0 z-[20000] pointer-events-none bg-off-white" variants={swipe1} transition={{ delay: 0.35, duration: 2.8, ease: [0.83, 0, 0.17, 1] }}></m.div>

              <m.div 
                initial="hidden"
                animate="visible"
                variants={introEnd}
                transition={{ delay: 1.6, duration: 0.3, ease: [0.83, 0, 0.17, 1] }}
                className="fixed inset-0 z-[1000] pointer-events-none"
              >
                <Div100vh className="fixed inset-0 z-[1000] pointer-events-none bg-off-white">
                </Div100vh>
              </m.div>
              <m.div 
                initial="hidden"
                animate="visible"
                className="fixed inset-0 z-[30000] pointer-events-none"
              >
                <Div100vh className="fixed inset-0 z-[30000] pointer-events-none bg-transparent">
                  <div className="fixed inset-0 w-full h-full z-20 flex flex-col items-center justify-center">
                    <div className="relative z-10 text-soft-black-dark">
                      <m.div variants={hideLogoFull} transition={{ delay: 1.9, duration: 0.005, ease: [0.83, 0, 0.17, 1] }} className="relative overflow-hidden">

                        <m.div className="w-full h-full absolute inset-0 bg-off-white z-[30000]" variants={hideLogo} transition={{ delay: 1.5, duration: 0.55, ease: [0.83, 0, 0.17, 1] }}></m.div>


                        <m.div variants={logoReveal} transition={{ delay: 0.15, duration: 0.65, ease: [0.83, 0, 0.17, 1] }} className="w-full h-full absolute inset-0 bg-off-white z-[30000]"></m.div>
                        <Logo width="w-[180px] lg:w-[280px]" />
                      </m.div>
                    </div>
                  </div>
                </Div100vh>
              </m.div>
            </>
          )}
        </LazyMotion>
        <Context.Provider 
          value={
            [globalMenuOpen, setGlobalMenuOpen]
          }
        >
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Context.Provider>
      </IntroContext.Provider>
    </>
  )
}