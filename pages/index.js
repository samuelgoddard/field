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
import Image from 'next/image'
import homeSupergraphic from 'public/images/home-sh.jpg'

export default function Home() {
  const containerRef = useRef(null)
  const router = useRouter()

  return (
    <Layout>
      <NextSeo title="Home" />
      
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
                    <div className="flex flex-wrap lg:flex-nowrap flex-row lg:h-screen lg:min-h-screen lg:max-h-[100vh]">
                      <section className="w-[100vw] min-w-[100vw] 3xl:w-[1920px] 3xl:min-w-[1920px] 3xl:max-w-[1920px] h-full pl-[42px] pr-[20px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow overflow-hidden relative border-b border-soft-black-dark lg:border-b-0" data-scroll-section id="hero">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <Image
                          priority
                          layout="fill"
                          src={homeSupergraphic}
                          alt="Field Supergraphic"
                          quality={90}
                          className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change`}
                        />
                        
                        <div className="flex flex-wrap lg:items-center h-full relative">
                          <div className="w-full lg:w-8/12 xl:w-9/12 lg:flex lg:flex-wrap lg:h-full text-soft-black-dark pb-8">
                            <div className="w-full mb-auto lg:px-[30px] pt-[25px] pb-12 lg:py-8">
                              <Logo width="w-[140px] lg:w-[240px]" />
                            </div>
                            <div className="w-full lg:pr-32 mt-5 my-auto lg:my-auto mb-16">
                              <h1 className="text-[18vw] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] 3xl:text-[155px] block leading-[0.85] uppercase italic ml-[-28px] lg:ml-[2.5vw] xl:ml-[2.2vw] 2xl:ml-[2vw] 3xl:ml-[2.4vw]" data-scroll data-scroll-speed={2}>Making The Planet Worth More</h1>
                            </div>
                            <div className="w-full flex flex-wrap lg:space-x-7 mt-auto lg:px-[30px]">
                              <div className="w-full lg:w-auto mb-2 lg:mb-0">
                                {/* @TODO CONVERT TO BUTTON */}
                                <Link href="/mission">
                                  <a className="group w-full block bg-off-white uppercase text-center rounded-full px-4 lg:px-8 py-4 lg:py-[18px] text-[16px] lg:text-[21px] relative overflow-hidden">
                                    <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                                    <span className="block overflow-hidden relative leading-none">
                                      <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Mission</span>
                                      <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Mission</span>
                                    </span>
                                  </a>
                                </Link>
                              </div>
                              <div className="w-full lg:w-auto">
                                {/* @TODO CONVERT TO BUTTON */}
                                <Link href="/team">
                                  <a className="group w-full block bg-off-white uppercase text-center rounded-full px-4 lg:px-8 py-4 lg:py-[18px] text-[16px] lg:text-[21px] relative overflow-hidden">
                                    <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                                    <span className="block overflow-hidden relative leading-none">
                                      <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Team</span>
                                      <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Team</span>
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="w-11/12 lg:w-4/12 xl:w-3/12 mt-auto lg:mt-0 lg:border-l border-soft-black-dark lg:h-full flex items-end text-soft-black-dark pt-6 lg:pt-0">
                            <div className="w-full lg:p-8 lg:pb-8">
                              <div className="mb-6 lg:mb-12">
                                <MetaText>About Us</MetaText>
                              </div>

                              <p className="text-base lg:text-lg 2xl:text-xl leading-tight lg:leading-tight 2xl:leading-tight w-10/12 lg:w-11/12 2xl:w-11/12 mb-4 lg:mb-5">We’re breaking new ground, building energy infrastructure to be both renewable and profitable as standard.</p>
                              
                              <p className="text-base lg:text-lg 2xl:text-xl leading-tight lg:leading-tight 2xl:leading-tight w-10/12 lg:w-11/12 2xl:w-11/12 mb-16 lg:mb-10">Field will finance, build, operate and monetise the renewable infrastructure we need to tackle these challenges - starting with battery storage. First in the UK, then globally.</p>

                              <div className="hidden lg:block">
                                <ScrollToButton full scrollTarget="#intro">
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

                      <section className="w-full lg:w-[120vmin] lg:min-w-[120vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-16 py-[40px] lg:py-8 lg:flex lg:flex-wrap relative lg:border-l lg:border-soft-black-dark" id="intro" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="w-full">
                          <div className="mb-6 lg:mb-12 lg:ml-[8px]">
                            <MetaText>New Generation</MetaText>
                          </div>

                          <h2 className="text-[12.5vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[11vmin] 3xl:text-[11vmin] leading-[0.9] ml-[-3px] lg:ml-0">Field. Smart, investable solutions towards net zero.</h2>
                        </div>
                      </section>

                      <section className="lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:pr-16 lg:pl-0 2xl:pl-12 pb-[40px] lg:py-0 flex flex-wrap lg:flex-nowrap relative lg:border-r lg:border-soft-black-dark" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-12 lg:mb-0">
                          <div className="lg:pb-[25px]">
                            <img className="w-4/12 lg:w-5/12 will-change mb-5 lg:mb-8" src="/images/finance.png" alt="Finance Icon" />
                            <h3 className="mb-4 lg:mb-5 2xl:mb-8 text-[9vw] lg:text-[52px] 2xl:text-[58px] leading-none">Finance</h3>
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">We'll draw on our unique experience to raise funds from diverse pools of capital.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-12 lg:mb-0">
                          <div className="">
                            <img className="w-4/12 lg:w-5/12 will-change mb-5 lg:mb-8" src="/images/build.png" alt="Build Icon" />
                            <h3 className="mb-4 lg:mb-5 2xl:mb-8 text-[9vw] lg:text-[52px] 2xl:text-[58px] leading-none">Build</h3>
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">We'll act fast to build the infrastructure we needed. We'll start with energy storage, then push into other infrastructure.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-12 lg:mb-0">
                          <div className=" lg:pb-[25px]">
                            <img className="w-4/12 lg:w-5/12 will-change mb-5 lg:mb-8" src="/images/network.png" alt="Network Icon" />
                            <h3 className="mb-4 lg:mb-5 2xl:mb-8 text-[9vw] lg:text-[52px] 2xl:text-[58px] leading-none">Network</h3>
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">Our market leading analysis will identify the best sites, markets and technology.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-12 lg:mb-0">
                          <div className="">
                            <img className="w-4/12 lg:w-5/12 will-change mb-5 lg:mb-8" src="/images/operate.png" alt="Operate Icon" />
                            <h3 className="mb-4 lg:mb-5 2xl:mb-8 text-[9vw] lg:text-[52px] 2xl:text-[58px] leading-none">Operate</h3>
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">We'll manage and operate our own infrastructure - and we're building our own software to optimise and connect to our assets.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-6 lg:mb-0">
                          <div className="">
                            <img className="w-4/12 lg:w-5/12 will-change mb-5 lg:mb-8" src="/images/grow.png" alt="Grow Icon" />
                            <h3 className="mb-4 lg:mb-5 2xl:mb-8 text-[9vw] lg:text-[52px] 2xl:text-[58px] leading-none">Grow</h3>
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">By generating outsized returns from our storage assets, we’ll encourage large-scale investment into the transition to net zero.</p>
                          </div>
                        </div>
                      </section>

                      <section className="min-w-[100vw] w-[100vw] bg-yellow h-[40vh] lg:h-full whitespace-nowrap relative overflow-hidden border-soft-black-dark border-t lg:border-t-0" data-scroll-section>
                        {/* <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div> */}

                        <Image
                          layout="fill"
                          src={homeSupergraphic}
                          alt="Field Supergraphic"
                          quality={90}
                          className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change`}
                        />

                        <div className="h-full w-full absolute inset-0 z-20 flex items-center justify-center">
                          {/* @TODO CONVERT TO BUTTON */}
                          <Link href="/mission">
                            <a className="group block w-auto bg-off-white uppercase text-center rounded-full px-6 lg:px-8 py-4 lg:py-5 text-[16px] lg:text-[23px] relative overflow-hidden">
                              <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                              <span className="block overflow-hidden relative leading-none">
                                <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Mission</span>
                                <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Mission</span>
                              </span>
                            </a>
                          </Link>
                        </div>

                        <div className="w-full h-full overflow-hidden flex flex-wrap relative z-10">
                          <div className="w-full mt-[-3vh] lg:mt-[-60vh] ml-[-2vw]" data-scroll data-scroll-direction="vertical" data-scroll-speed={2}>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[24vw] ml-[0px] lg:ml-[-10px] will-change">Net Zero</span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </m.main>

                  <m.div variants={fade} className="">
                    <ProgressBar />
                  </m.div>
                </m.div>
              </div>
            </div>
          </LazyMotion>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
