import { useRef, useState } from 'react'
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
import MissionSupergraphic from 'public/images/mission-sg.jpg'
import missionImage from 'public/images/mission.jpg'

export default function Mission() {
  const containerRef = useRef(null)
  const router = useRouter()
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

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
                    <div className="flex flex-wrap lg:flex-nowrap flex-row lg:h-screen lg:min-h-screen lg:max-h-[100vh]">
                      <section className="w-[100vw] min-w-[100vw] 3xl:w-[1920px] 3xl:min-w-[1920px] 3xl:max-w-[1920px] h-full pl-[42px] pr-[25px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow relative overflow-hidden border-b border-soft-black-dark lg:border-b-0" data-scroll-section id="hero">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <Image
                          priority
                          layout="fill"
                          src={MissionSupergraphic}
                          alt="Field Supergraphic"
                          quality={90}
                          className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change`}
                        />
                        
                        <div className="flex flex-wrap lg:items-center h-full relative">
                          <div className="w-full lg:w-8/12 xl:w-9/12 lg:flex lg:flex-wrap lg:h-full text-soft-black-dark pb-5 lg:pb-8">
                            <div className="w-full mb-auto lg:px-[30px] pt-[25px] pb-16 lg:py-8">
                              <Link href="/">
                                <a className="inline-block relative z-[60]">
                                  <Logo width="w-[140px] lg:w-[240px]" />
                                </a>
                              </Link>
                            </div>

                            <div className="w-full lg:pr-10 mb-auto">
                              <h1 className="text-[14.5vw] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] 3xl:text-[155px] block leading-[0.85] uppercase italic ml-[-24px] lg:ml-[-5px]">Accelerate renewable energy <span className="inline lg:hidden">infra-structure</span><span className="hidden lg:inline">infrastructure</span></h1>
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 xl:w-3/12 mt-auto lg:mt-0 lg:border-l border-soft-black-dark lg:h-full flex items-start text-soft-black-dark pt-6 lg:pt-0">
                            <div className="w-full lg:p-8 lg:pt-8 lg:pb-8 h-full flex flex-wrap">
                              <div className="w-full">
                                <div className="mb-6 lg:mb-12">
                                  <MetaText>Chapters</MetaText>
                                </div>
                                <ol className="text-[20px] lg:text-[22px] leading-tight lg:leading-tight w-full mb-16 lg:mb-8 list-decimal list-inside">
                                  <li className="mb-1">
                                    <ScrollToButton scrollTarget="#challenge">
                                      <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">The Challenge</span>
                                    </ScrollToButton>
                                  </li>
                                  <li className="mb-1">
                                    <ScrollToButton scrollTarget="#mission">
                                      <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">Our Mission</span>
                                    </ScrollToButton>
                                  </li>
                                  <li className="mb-1">
                                    <ScrollToButton scrollTarget="#plan">
                                      <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">The Plan</span>
                                    </ScrollToButton>
                                  </li>
                                </ol>
                              </div>

                              <div className="hidden lg:block w-full mt-auto">
                                <ScrollToButton full scrollTarget="#challenge">
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

                      <section className="w-full lg:w-[125vmin] lg:min-w-[125vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-16 py-[40px] lg:py-8 lg:flex lg:flex-wrap relative lg:border-l lg:border-soft-black-dark" id="challenge" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="w-full">
                          <div className="mb-8 lg:mb-12 lg:ml-[8px]">
                            <MetaText>The Challenge</MetaText>
                          </div>

                          <h2 className="text-[10.5vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[11vmin] 3xl:text-[11.5vmin] leading-[0.9] mb-6">We need a seismic shift in our energy systems - and we need it now.</h2>
                        </div>
                      </section>

                      <section className="w-full lg:w-[130vw] lg:max-w-[1200px] lg:h-full whitespace-normal pb-8 lg:flex lg:flex-wrap relative lg:border-l 2xl:ml-12 lg:border-soft-black-dark overflow-hidden" id="mission" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        
                        <div className="w-full relative h-[35%] lg:h-[38%] overflow-hidden mb-8 lg:mb-auto">
                          <div className="lg:absolute inset-0">
                            <div className="scale-[1.3]">
                              <Image
                                layout="intrinsic"
                                src={missionImage}
                                alt="Isometric Building"
                                quality={90}
                                className={`w-full h-full object-center object-cover ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
                                data-scroll data-scroll-direction="vertical" data-scroll-speed={-0.6}
                                onLoad={event => {
                                  const target = event.target;
                                  if (target.src.indexOf('data:image/gif;base64') < 0) {
                                      setImageIsLoaded(true)
                                  }
                                }}

                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full lg:w-[60%] mt-auto pl-[42px] pr-[25px] lg:px-8 max-w-4xl">
                          <div className="mb-8 lg:mb-8">
                            <MetaText>Our Mission</MetaText>
                          </div>

                          <h3 className="text-[24px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] leading-[1.2]">Field will finance, build, operate and monetise the renewable infrastructure needed to reach net zero, putting capital to work to create the energy the world needs.</h3>

                          <p className="block text-base lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight">We’re creating the renewable energy infrastructure and trading company of the future, showing there’s a better way to invest. We are using capital to accelerate the renewable transition, with positive returns for the planet and investors.</p>
                        </div>
                      </section>

                      <section className="w-full lg:w-[140vw] lg:max-w-[1400px] 2xl:max-w-[1600px] lg:h-full whitespace-normal lg:pb-12 lg:flex lg:flex-wrap relative border-t lg:border-t-0 lg:border-l border-soft-black-dark lg:border-r overflow-hidden bg-purple pt-8 lg:pt-0" data-scroll-section id="plan">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div>
                        
                        <div className="w-10/12 lg:w-10/12 mt-auto pt-[5px] pl-[42px] pr-[25pxw] lg:py-8 lg:px-8 max-w-xl lg:absolute lg:top-0 lg:left-0 text-off-white">
                          <div className="mb-6">
                            <MetaText>The Plan</MetaText>
                          </div>
                          <p className="block text-base lg:text-2xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight text-off-white">We’ll begin with energy storage, then push into other infrastructure.</p>
                        </div>

                        <div className="lg:flex lg:flex-wrap lg:absolute inset-0 items-end mt-12 lg:mt-0">
                          <div className="w-[37%] h-[150px] lg:w-1/3 pl-[42px] pr-5 lg:px-6 py-3 lg:py-5 lg:h-[25%] flex flex-wrap lg:flex items-center lg:items-start bg-blue">
                            <div className="w-full">
                              <span className="w-full block uppercase italic text-[30px] lg:text-[48px] leading-none lg:leading-none mb-1 lg:mb-2">2022</span>
                              <span className="w-full block text-[13px] lg:text-lg leading-tight lg:leading-tight lg:w-9/12">20 MW UK battery</span>
                            </div>
                            <img className="w-[30px] lg:w-[55px] block mt-auto" src="/images/battery-1.png" alt="Battery Icon" />
                          </div>

                          <div className="w-[75%] h-[150px] lg:w-1/3 pl-[42px] pr-5 lg:px-6 py-3 lg:py-5 lg:h-[66%] flex flex-wrap lg:flex items-center lg:items-start bg-off-white">
                            <div className="w-full">
                              <span className="w-full block uppercase italic text-[30px] lg:text-[48px] leading-none lg:leading-none mb-1 lg:mb-2">2023</span>
                              <span className="w-full block text-[13px] lg:text-lg leading-tight lg:leading-tight lg:w-9/12">300 MW UK<br/>batteries</span>
                            </div>
                            <img className="w-[30px] lg:w-[55px] block mt-auto" src="/images/battery-2.png" alt="Battery Icon" />
                          </div>
                          <div className="w-[90%] h-[150px] lg:w-1/3 pl-[42px] pr-5 lg:px-6 py-3 lg:py-5 lg:h-[90%] flex flex-wrap lg:flex items-center lg:items-start bg-orange">
                            <div className="w-full">
                              <span className="w-full block uppercase italic text-[30px] lg:text-[48px] leading-none lg:leading-none mb-1 lg:mb-2">2024</span>
                              <span className="w-full block text-[13px] lg:text-lg leading-tight lg:leading-tight lg:w-9/12">1.3 GW UK &amp; EU<br/>batteries</span>
                            </div>
                            <img className="w-[30px] lg:w-[55px] block mt-auto" src="/images/battery-3.png" alt="Battery Icon" />
                          </div>
                        </div>
                      </section>

                      <section className="min-w-[100vw] w-[100vw] bg-yellow h-[40vh] lg:h-full whitespace-nowrap relative overflow-hidden border-soft-black-dark border-t lg:border-t-0" data-scroll-section>
                        {/* <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div> */}

                        <Image
                          layout="fill"
                          src={MissionSupergraphic}
                          alt="Field Supergraphic"
                          quality={90}
                          className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change`}
                        />

                        <div className="h-full w-full absolute inset-0 z-20 flex items-center justify-center">
                          {/* @TODO CONVERT TO BUTTON */}
                          <Link href="/team">
                            <a className="group block w-auto bg-off-white uppercase text-center rounded-full px-6 lg:px-8 py-4 lg:py-5 text-[16px] lg:text-[23px] relative overflow-hidden">
                              <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                              <span className="block overflow-hidden relative leading-none">
                                <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Team</span>
                                <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Team</span>
                              </span>
                            </a>
                          </Link>
                        </div>

                        <div className="w-full h-full overflow-hidden flex flex-wrap relative z-10">
                          <div className="w-full mt-[-5vh] lg:mt-[-60vh] ml-[-2vw]" data-scroll data-scroll-direction="vertical" data-scroll-speed={2}>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
                            <span className="block leading-[0.8] uppercase italic text-[21vw] lg:ml-[-10px] will-change">Progress</span>
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
