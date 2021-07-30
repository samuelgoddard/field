import { useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Header from '@/components/header'
import ProgressBar from '@/components/progress-bar'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  const containerRef = useRef(null)
  const router = useRouter()

  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1, direction: 'horizontal', tablet: { smooth: false, breakpoint: 768 }}}
        containerRef={containerRef}
        watch={[]}
      >
        <LazyMotion features={domAnimation}>
          <Header route={router.asPath} />
            <div data-scroll-container ref={containerRef} id="scroll-container" className="pt-[80px] md:pt-0">
              <div data-scroll-section>
                <m.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className=""
                >
                  <m.main variants={fade} className="">
                    <div className="flex flex-wrap md:flex-nowrap flex-row md:h-screen md:max-h-[100vh]">
                      <section className="w-[100vw] md:h-full flex flex-wrap items-center px-[25px] md:px-[15vw] py-[25px] md:py-0 whitespace-normal bg-[#FFAF2D]">
                        <div className="">
                          <h1 className="text-[10vw] font-bold leading-none">Home</h1>
                          <p className="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                      </section>

                      <section className="w-[100vw] bg-red-500 md:h-fulll whitespace-normal">
                        <div className="w-full h-full relative bg-blue-400 overflow-hidden">
                          <div className="scale-[1.25] absolute inset-0 will-change">
                            <img src="https://placedog.net/1920/1080" className="w-full h-full will-change object-cover object-center absolute inset-0" data-scroll data-scroll-speed={1} />
                          </div>
                        </div>
                      </section>

                      <section className="w-[100vw] md:h-full l flex flex-wrap items-center px-[25px] md:px-[15vw] py-[25px] md:py-0 whitespace-normal">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-3 md:col-span-2">
                            <img src="https://placedog.net/1920/1080" className="w-full will-change" />
                          </div>
                          <div className="col-span-3 md:col-span-1">
                            <div className="">
                              <p className="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="w-[100vw] bg-red-500 md:h-fulll whitespace-normal">
                        <div className="w-full h-full relative bg-blue-400 overflow-hidden">
                          <div className="scale-[1.25] absolute inset-0 will-change">
                            <img src="https://placedog.net/1920/1080" className="w-full h-full will-change object-cover object-center absolute inset-0" data-scroll-direction="vertical" data-scroll data-scroll-speed={0.8} />
                          </div>
                        </div>
                      </section>

                      <section className="w-[100vw] md:h-full bl flex flex-wrap items-center px-[25px] md:px-[15vw] py-[25px] md:py-0 whitespace-normal">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-3 md:col-span-2">
                            <img src="https://placedog.net/1920/1080" className="w-full will-change" />
                          </div>
                          <div className="col-span-3 md:col-span-1">
                            <div className="">
                              <p className="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </m.main>
                </m.div>
              </div>
            </div>
          </LazyMotion>
        <ProgressBar />
      </LocomotiveScrollProvider>
    </Layout>
  )
}
