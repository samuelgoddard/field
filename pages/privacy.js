import { useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Header from '@/components/header'
import ProgressBar from '@/components/progress-bar'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Logo from '@/components/logo'
import MetaText from '@/components/meta-text'
import ScrollToButton from '@/components/scroll-to-button'
import Link from 'next/link'

export default function Privacy() {
  const containerRef = useRef(null)
  const router = useRouter()

  return (
    <Layout>
      <NextSeo title="Privacy Policy" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.125, tablet: { smooth: false, breakpoint: 1024 }}}
        containerRef={containerRef}
        watch={[]}
      >
        <LazyMotion features={domAnimation}>
          <Header route={router.asPath} />
            <div data-scroll-container ref={containerRef} id="scroll-container">
              <div>
                <m.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className=""
                >
                  <m.main variants={fade} className="">
                    <div className="">
                      <section className="relative" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <div className="relative pl-[20px] lg:pl-[90px]">
                          <div className="border-b border-soft-black-dark pl-[15px] lg:pl-[75px] pt-4 pb-4">
                            <Link href="/">
                              <a className="flex items-center relative z-[60] py-3 leading-none w-1/2"><span className="block rotate-180 text-[25px] lg:text-[40px] mb-[-4px] lg:mb-[-5px]">→</span><span className="block ml-[5px] lg:ml-[6px] lg:text-xl">Back</span></a>
                            </Link>
                          </div>
                          <div className="pl-[15px] lg:pl-[75px] py-8 lg:py-20 border-b border-soft-black-dark">
                            <h1 className="text-[16vw] lg:text-[110px] xl:text-[130px] 2xl:text-[150px] block leading-[0.9]">Privacy<br/>Policy</h1>

                            <span className="flex items-center lg:text-lg mt-10">
                              <span className="block w-3 h-3 mr-2 rounded-full bg-orange"></span>
                              <span className="block">Last Updated: 3rd August 2021</span>
                            </span>
                          </div>
                        </div>
                      </section>

                      <section className="relative" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <div className="relative pl-[20px] lg:pl-[90px]">
                          <div className="px-[30px] py-[40px] pb-[70px] lg:p-[75px] lg:pb-[120px] w-11/12 lg:w-8/12 ml-auto content border-l border-soft-black-dark">
                            <h2 className="block leading-[0.9]">About Field</h2>

                            <p className="block lg:text-xl">Founded in 2020, Field Virmati Energy will build the renewable energy infrastructure needed for the transition to net zero, starting with a portfolio of grid scale batteries in the UK. The business will tackle some of the challenges currently facing the energy sector including how to store energy, address grid intermittency and decarbonise heating.</p>
                            
                            <p>The business was founded by Amit Gudka (Co-Founder of Bulb) and named after his grandmother, with Virmati meaning ‘heroic mentality.’ The business has currently secured funding from a series of Angel investors and will raise its Series A mid 2021.</p>

                            <h2 className="block leading-[0.9]">About Field</h2>

                            <p className="block lg:text-xl">Founded in 2020, Field Virmati Energy will build the renewable energy infrastructure needed for the transition to net zero, starting with a portfolio of grid scale batteries in the UK. The business will tackle some of the challenges currently facing the energy sector including how to store energy, address grid intermittency and decarbonise heating.</p>

                            <ol>
                              <li>An example of a list that looks really good.</li>
                              <li>An example of a list that looks really good</li>
                              <li>An example of a list that looks really good</li>
                              <li>An example of a list that looks really good</li>
                            </ol>
                            
                            <p>The business was founded by Amit Gudka (Co-Founder of Bulb) and named after his grandmother, with Virmati meaning ‘heroic mentality.’ The business has currently secured funding from a series of Angel investors and will raise its Series A mid 2021.</p>

                            <h2 className="block leading-[0.9]">About Field</h2>

                            <p className="block lg:text-xl">Founded in 2020, Field Virmati Energy will build the renewable energy infrastructure needed for the transition to net zero, starting with a portfolio of grid scale batteries in the UK. The business will tackle some of the challenges currently facing the energy sector including how to store energy, address grid intermittency and decarbonise heating.</p>

                            <ul>
                              <li>An example of a list that looks really good.</li>
                              <li>An example of a list that looks really good</li>
                              <li>An example of a list that looks really good</li>
                              <li>An example of a list that looks really good</li>
                            </ul>
                            
                            <p>The business was founded by Amit Gudka (Co-Founder of Bulb) and named after his grandmother, with Virmati meaning ‘heroic mentality.’ The business has currently secured funding from a series of Angel investors and will raise its Series A mid 2021.</p>

                            <h2 className="block leading-[0.9]">About Field</h2>

                            <p className="block lg:text-xl">Founded in 2020, Field Virmati Energy will build the renewable energy infrastructure needed for the transition to net zero, starting with a portfolio of grid scale batteries in the UK. The business will tackle some of the challenges currently facing the energy sector including how to store energy, address grid intermittency and decarbonise heating.</p>
                            
                            <p>The business was founded by Amit Gudka (Co-Founder of Bulb) and named after his grandmother, with Virmati meaning ‘heroic mentality.’ The business has currently secured funding from a series of Angel investors and will raise its Series A mid 2021.</p>
                          </div>
                        </div>
                      </section>
                    </div>
                  </m.main>
                </m.div>
              </div>
            </div>
          </LazyMotion>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
