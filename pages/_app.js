import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
// import Header from '@/components/header'
import FPSStats from "react-fps-stats";
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useState } from 'react'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const showCookieBar = useState(true)

  return (
    <>
      {/* <FPSStats left={'auto'} top={0} right={0} /> */}
      <DefaultSeo {...SEO} />

      {showCookieBar && (
        <CookieConsent
          disableStyles
          buttonWrapperClasses="absolute left-0 bottom-0 lg:left-auto lg:bottom-auto lg:top-0 lg:right-0 flex items-center space-x-3 pr-6 pl-6 lg:pl-0 pb-[20px] lg:pb-0 lg:pt-[9px] text-sm"
          buttonClasses="underline"
          declineButtonClasses="underline"
          containerClasses="bg-soft-black-dark text-off-white fixed bottom-0 lg:bottom-auto lg:top-0 left-0 lg:left-auto lg:right-0 bottom-auto h-[auto] lg:h-[40px] lg:rounded-full w-full lg:w-[610px] 2xl:w-[640px] z-[999] flex lg:items-center px-6 pt-[20px] pb-[55px] lg:pb-[1px] text-sm lg:pt-0 lg:m-[35px] leading-snug"
          // style={{
          //   alignItems: "baseline",
          //   background: "#141414",
          //   color: "white",
          //   display: "block",
          //   left: "initial",
          //   right: "0",
          //   top: "0",
          //   bottom: "initial",
          //   position: "absolute",
          //   width: "600px",
          //   zIndex: "999",
          //   margin: "50px",
          //   borderRadius: "10px"
          // }}
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          onDecline={() => { Cookies.remove("tagManagerCookieName") }}
        >
          This site uses cookies to improve your visiting experience, <Link href="/privacy"><a className="underline inline-block">more info</a></Link>
        </CookieConsent>
      )}

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}