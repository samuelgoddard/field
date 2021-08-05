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

export default function Mission() {
  const containerRef = useRef(null)
  const router = useRouter()

  return (
    <Layout>
      <NextSeo title="Mission" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.125, direction: 'horizontal', tablet: { smooth: false, breakpoint: 1024 }}}
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
                    <div className="flex flex-wrap lg:flex-nowrap flex-row h-screen min-h-screen lg:max-h-[100vh]">
                      <section className="w-[100vw] min-w-[100vw] h-full px-[25px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow relative overflow-hidden lg:border-r-2 lg:border-soft-black-dark" data-scroll-section>
                        <img className="w-full h-full absolute inset-0 z-0 object-cover object-center animate-supergraphic will-change" src="/images/supergraphic.jpg" alt="Field Supergraphic" />
                        
                        <div className="flex flex-wrap lg:items-center h-full relative z-10">
                          <div className="w-full lg:w-8/12 xl:w-9/12 lg:flex lg:flex-wrap lg:h-full text-soft-black-dark pb-16">
                            <div className="w-full mb-auto lg:border-b lg:border-soft-black-dark lg:px-[30px] pt-[35px] pb-12 lg:py-10">
                              <Link href="/">
                                <a className="block">
                                  <Logo width="w-24 lg:w-40" />
                                </a>
                              </Link>
                            </div>
                            <div className="w-full lg:pr-10 mb-auto">
                              <h1 className="text-[16vw] lg:text-[14vmin] xl:text-[15vmin] 2xl:text-[16vmin] block leading-[0.85] uppercase italic lg:ml-[-13px]">Making Net Zero Make Sense</h1>
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 xl:w-3/12 mt-auto lg:mt-0 border-t lg:border-t-0 lg:border-l border-soft-black-dark lg:h-full flex items-start text-soft-black-dark pt-6 lg:pt-0">
                            <div className="w-full lg:p-8 lg:pt-16 lg:pb-10 h-full flex flex-wrap">
                              <div className="w-full">
                                <div className="mb-6 lg:mb-12">
                                  <MetaText>The Mission</MetaText>
                                </div>
                                <ol className="text-[20px] lg:text-[22px] leading-tight lg:leading-tight w-10/12 mb-8 list-decimal list-inside">
                                  <li className="mb-1"><span className="inline-block underline">Energy Evolution</span></li>
                                  <li className="mb-1"><span className="inline-block underline">Unleashing Renewables</span></li>
                                  <li className="mb-1"><span className="inline-block underline">Scaling Up</span></li>
                                  <li className="mb-1"><span className="inline-block underline">Outsized Returns</span></li>
                                  <li className="mb-1"><span className="inline-block underline">Projects &amp; Pipeline</span></li>
                                </ol>
                              </div>

                              <div className="hidden lg:block w-full mt-auto">
                                <ScrollToButton scrollTarget="#intro">
                                  <span className="w-full block bg-soft-black-dark text-off-white uppercase text-center rounded-full px-4 lg:px-8 py-3 lg:py-3 text-[16px] lg:text-[50px] relative overflow-hidden leading-[0.8]">
                                    <span className="absolute inset-0 w-0 bg-off-white group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                                    <span className="block overflow-hidden relative">
                                      <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full mt-[-6px]">→</span>
                                      <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-soft-black-dark mt-[-6px]">→</span>
                                    </span>
                                  </span>
                                </ScrollToButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="w-full lg:w-[110vmin] lg:min-w-[110vmin] lg:h-full whitespace-normal px-[25px] lg:px-40 py-[40px] lg:py-0 lg:flex lg:flex-wrap lg:items-center" id="intro" data-scroll-section>
                        <div className="w-full">
                          <div className="mb-8 lg:mb-12 lg:ml-[8px]">
                            <MetaText>Energy Evolution</MetaText>
                          </div>

                          <h2 className="text-[12.5vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[12vmin] leading-[0.9]">To change the choices we have, a seismic shift of energy is needed.</h2>
                        </div>
                      </section>

                      <section className="lg:h-full whitespace-normal px-[25px] lg:px-40 py-[40px] lg:py-0 flex flex-wrap lg:flex-nowrap" data-scroll-section>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[600px] lg:p-16 mb-8 lg:mb-0">
                          <div className="">
                            <img className="w-5/12 will-change mb-8" src="/images/finance.png" alt="Finance Icon" />
                            <h3 className="text-[9vw] lg:text-[74px] leading-none">Finance</h3>
                            <p className="block text-lg lg:text-xl 2xl:text-2xl leading-tight">We’ll draw on our unique experience and network to raise capital not just from infrastructure investors but other sources including VCs, public market, retail investors. Allowing us to scale quickly with a lower cost of capital.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[600px] lg:p-16 mb-8 lg:mb-0">
                          <div className="">
                            <img className="w-5/12 will-change mb-8" src="/images/finance.png" alt="Finance Icon" />
                            <h3 className="text-[9vw] lg:text-[74px] leading-none">Build</h3>
                            <p className="block text-lg lg:text-xl 2xl:text-2xl leading-tight">We’ll draw on our unique experience and network to raise capital not just from infrastructure investors but other sources including VCs, public market, retail investors. Allowing us to scale quickly with a lower cost of capital.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[600px] lg:p-16 mb-8 lg:mb-0">
                          <div className="">
                            <img className="w-5/12 will-change mb-8" src="/images/finance.png" alt="Finance Icon" />
                            <h3 className="text-[9vw] lg:text-[74px] leading-none">Network</h3>
                            <p className="block text-lg lg:text-xl 2xl:text-2xl leading-tight">We’ll draw on our unique experience and network to raise capital not just from infrastructure investors but other sources including VCs, public market, retail investors. Allowing us to scale quickly with a lower cost of capital.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[600px] lg:p-16 mb-8 lg:mb-0">
                          <div className="">
                            <img className="w-5/12 will-change mb-8" src="/images/finance.png" alt="Finance Icon" />
                            <h3 className="text-[9vw] lg:text-[74px] leading-none">Operate</h3>
                            <p className="block text-lg lg:text-xl 2xl:text-2xl leading-tight">We’ll draw on our unique experience and network to raise capital not just from infrastructure investors but other sources including VCs, public market, retail investors. Allowing us to scale quickly with a lower cost of capital.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[600px] lg:p-16 mb-8 lg:mb-0">
                          <div className="">
                            <img className="w-5/12 will-change mb-8" src="/images/finance.png" alt="Finance Icon" />
                            <h3 className="text-[9vw] lg:text-[74px] leading-none">Grow</h3>
                            <p className="block text-lg lg:text-xl 2xl:text-2xl leading-tight">We’ll draw on our unique experience and network to raise capital not just from infrastructure investors but other sources including VCs, public market, retail investors. Allowing us to scale quickly with a lower cost of capital.</p>
                          </div>
                        </div>
                      </section>

                      <section className="min-w-[100vw] w-[100vw] bg-yellow h-screen lg:h-full whitespace-nowrap relative overflow-hidden lg:border-l lg:border-soft-black-dark" data-scroll-section>
                        <div className="h-full bg-yellow w-[20px] lg:w-[35px] border-r border-soft-black-dark absolute top-0 left-0 bottom-0 z-20"></div>

                        <div className="h-full w-full absolute inset-0 z-20 flex items-center justify-center">
                          {/* @TODO CONVERT TO BUTTON */}
                          <Link href="/team">
                            <a className="group block w-auto bg-off-white uppercase text-center rounded-full px-4 lg:px-8 py-3 lg:py-5 text-[16px] lg:text-[23px] relative overflow-hidden">
                              <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                              <span className="block overflow-hidden relative leading-none">
                                <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Team</span>
                                <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Team</span>
                              </span>
                            </a>
                          </Link>
                        </div>

                        <div className="w-full h-full overflow-hidden flex flex-wrap relative z-10">
                          <div className="w-full mt-[-5vh] lg:mt-[-60vh]" data-scroll data-scroll-direction="vertical" data-scroll-speed={2}>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Progress</span>
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
