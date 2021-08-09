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

export default function Team() {
  const containerRef = useRef(null)
  const router = useRouter()

  return (
    <Layout>
      <NextSeo title="Team" />
      
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
                    <div className="flex flex-wrap lg:flex-nowrap flex-row lg:h-screen lg:min-h-screen lg:max-h-[100vh] flex-grow">
                      <section className="w-[100vw] min-w-[100vw] h-full pl-[42px] pr-[25px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow relative overflow-hidden lg:border-r-2 lg:border-soft-black-dark" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <img className="w-full h-full absolute inset-0 z-0 object-cover object-center animate-supergraphic will-change" src="/images/supergraphic.jpg" alt="Field Supergraphic" />

                        <div className="flex flex-wrap lg:items-center h-full relative">
                          <div className="w-full lg:flex lg:flex-wrap lg:h-full text-soft-black-dark pb-16">
                            <div className="w-full mb-auto lg:px-[30px] pt-[35px] pb-12 lg:py-10">
                              <Link href="/">
                                <a className="inline-block relative z-[60]">
                                  <Logo width="w-[108px] lg:w-[240px]" />
                                </a>
                              </Link>
                            </div>
                            <div className="w-full lg:w-8/12 xl:w-9/12  mb-auto">
                              <h1 className="text-[18vw] lg:text-[14vmin] xl:text-[15vmin] 2xl:text-[16vmin] block leading-[0.85] uppercase italic ml-[-30px] lg:ml-[-13px] break-hyphen">Energy Demands Progress</h1>
                            </div>
                          </div>

                          <div className="hidden lg:block absolute bottom-0 right-0 w-full max-w-xs m-12 my-14">
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
                      </section>

                      <section className="w-full h-screen lg:w-[100vw] lg:min-w-[100vw] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-0 py-[40px] lg:py-0 relative overflow-hidden lg:border-r-2 lg:border-soft-black-dark" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="absolute inset-0">
                          <img src="/images/team.jpg" alt="PLACEHOLDER" className="w-full h-full scale-125 object-center object-cover" data-scroll data-scroll-speed={-3} />
                        </div>
                      </section>

                      <section className="w-full lg:w-[160vmin] lg:min-w-[160vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-40 py-[40px] lg:py-12 lg:flex lg:flex-wrap relative" id="intro" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        <div className="w-full">
                          <div className="mb-8 lg:mb-12 lg:ml-[8px]">
                            <MetaText>Our Team</MetaText>
                          </div>

                          <h2 className="text-[11vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[12vmin] leading-[0.9]">Field is a highly skilled and determined team, laying the groundwork for a better energy economy.</h2>
                        </div>
                      </section>

                      <section className="lg:h-full pl-[42px] pr-[25px] lg:px-40 py-[40px] lg:py-0 flex flex-wrap lg:flex-nowrap relative" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        <div className="lg:h-full">
                          <div className="h-full w-auto lg:w-[28vh] lg:min-w-[28vh]" data-scroll data-scroll-speed={1.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-15vh] h-full">
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>
                        <div className="lg:h-full lg:pl-16">
                          <div className="h-full w-auto lg:w-[28vh] lg:min-w-[28vh]" data-scroll data-scroll-speed={-1.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-15vh] h-full">
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>
                        <div className="lg:h-full lg:pl-16">
                          <div className="h-full w-auto lg:w-[28vh] lg:min-w-[28vh]" data-scroll data-scroll-speed={1.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-15vh] h-full">
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>
                        <div className="lg:h-full lg:pl-16">
                          <div className="h-full w-auto lg:w-[28vh] lg:min-w-[28vh]" data-scroll data-scroll-speed={-1.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-15vh] h-full">
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                              <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change mb-6 lg:mb-16" src="/images/avatar.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="w-full lg:w-[140vmin] lg:min-w-[140vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:pl-40 lg:pr-80 py-[40px] lg:py-12 lg:flex lg:flex-wrap relative" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        <div className="w-full mb-16 lg:mb-auto">
                          <div className="mb-8 lg:mb-12 lg:ml-[4px]">
                            <MetaText>Career Opportunities</MetaText>
                          </div>

                          <h2 className="text-[12.5vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[12vmin] leading-[0.9] mb-8 lg:mb-16">Take The Field.</h2>

                          <p className="w-full max-w-2xl text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight mb-8 lg:mb-16">We’re always up for meeting people who are fully charged to make the transition to renewables happen. If you’re a roll-your-sleeves-up person determined to make the planet worth more, say hello at <a className="underline" href="mailto:careers@field.energy">careers@field.energy</a></p>
                        </div>
                        
                        <nav className="w-full mt-auto">
                          <ul className="border-t border-soft-black-dark">
                            <li className="py-3 border-b border-soft-black-dark text-[5.5vw] lg:text-[2.5vmin] xl:text-[3vmin] 2xl:text-[3.5vmin]">→ Head of marketing</li>
                            <li className="py-3 border-b border-soft-black-dark text-[5.5vw] lg:text-[2.5vmin] xl:text-[3vmin] 2xl:text-[3.5vmin]">→ Lead Engineer</li>
                            <li className="py-3 border-b border-soft-black-dark text-[5.5vw] lg:text-[2.5vmin] xl:text-[3vmin] 2xl:text-[3.5vmin]">→ Digital Project Manager</li>
                          </ul>
                        </nav>
                      </section>

                      <section className="min-w-[100vw] w-[100vw] bg-yellow h-screen lg:h-full whitespace-nowrap relative overflow-hidden lg:border-l lg:border-soft-black-dark" data-scroll-section>
                        <div className="h-full bg-yellow w-[20px] lg:w-[35px] border-r border-soft-black-dark absolute top-0 left-0 bottom-0 z-20"></div>

                        <div className="h-full w-full absolute inset-0 z-20 flex items-center justify-center">
                          {/* @TODO CONVERT TO BUTTON */}
                          <Link href="/mission">
                            <a className="group block w-auto bg-off-white uppercase text-center rounded-full px-4 lg:px-8 py-3 lg:py-5 text-[16px] lg:text-[23px] relative overflow-hidden">
                              <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                              <span className="block overflow-hidden relative leading-none">
                                <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Mission</span>
                                <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Mission</span>
                              </span>
                            </a>
                          </Link>
                        </div>

                        <div className="w-full h-full overflow-hidden flex flex-wrap relative z-10">
                          <div className="w-full mt-[-5vh] lg:mt-[-60vh]" data-scroll data-scroll-direction="vertical" data-scroll-speed={2}>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[26vmin] xl:text-[30vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
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
