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
import ModalTeam from '@/components/modal-team'
import Link from 'next/link'
import { team } from '@/helpers/temp-data'
import TeamCarousel from '@/components/team-carousel'

export default function Team() {
  const containerRef = useRef(null)
  const modalEl1 = useRef(null)
  const modalEl2 = useRef(null)
  const modalEl3 = useRef(null)
  const modalEl4 = useRef(null)
  const modalEl5 = useRef(null)
  const modalEl6 = useRef(null)
  const modalEl7 = useRef(null)
  const modalEl8 = useRef(null)
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
                      <section className="w-[100vw] min-w-[100vw] h-full pl-[42px] pr-[25px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow relative overflow-hidden" data-scroll-section id="hero">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <img className="w-full h-full absolute inset-0 z-0 object-cover object-center will-change" src="/images/team-sg.jpg" alt="Field Supergraphic" />

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
                              <h1 className="text-[16vw] lg:text-[14vmin] xl:text-[15vmin] 2xl:text-[16vmin] block leading-[0.85] uppercase italic ml-[-26px] lg:ml-[-13px] break-hyphen">Progress Demands Energy</h1>
                            </div>
                          </div>

                          <div className="hidden lg:block absolute bottom-0 right-0 w-full max-w-xs m-12 my-14">
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
                      </section>

                      <section className="w-full h-screen lg:w-[80vw] lg:min-w-[80vw] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-0 py-[40px] lg:py-0 relative overflow-hidden" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="absolute inset-0">
                          <img src="/images/team.jpg" alt="PLACEHOLDER" className="w-full h-full scale-125 object-center object-cover" data-scroll data-scroll-speed={-3} />
                        </div>
                      </section>

                      <section className="w-full lg:w-[160vmin] lg:min-w-[160vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-40 py-[40px] lg:py-12 lg:flex lg:flex-wrap relative lg:border-l lg:border-soft-black-dark" id="intro" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        <div className="w-full">
                          <div className="mb-8 lg:mb-12 lg:ml-[8px]">
                            <MetaText>Our Team</MetaText>
                          </div>

                          <h2 className="text-[10vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[12vmin] leading-[0.9]">We believe systemic changes can be made, and we’re determined to make them happen fast.</h2>
                        </div>
                      </section>

                      <section className="lg:h-full pl-[42px] pr-[25px] lg:px-40 py-[40px] lg:py-0 flex flex-wrap lg:flex-nowrap relative w-full lg:w-auto" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        
                        <div className="block lg:hidden w-full">
                          <TeamCarousel slides={team} />
                        </div>
                        
                        <div className="lg:h-full hidden lg:block">
                          <div className="h-full w-auto lg:w-[28vh] lg:min-w-[28vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-8vh] h-full">
                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-16 relative overflow-hidden" onClick={() => modalEl1.current.open()}>
                                <img className="inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[0].image} alt={team[0].name} />

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[38px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-2 transition-transform ease-in-out duration-500">{team[0].name}</h3>
                              </button>

                              <ModalTeam
                                ref={modalEl1}
                                name={team[0].name}
                                jobTitle={team[0].jobTitle}
                                bio={team[0].bio}
                                image={team[0].image}
                              />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-16 relative overflow-hidden" onClick={() => modalEl2.current.open()}>
                                <img className="inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[1].image} alt={team[1].name} />

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[38px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-2 transition-transform ease-in-out duration-500">{team[1].name}</h3>
                              </button>

                              <ModalTeam
                                ref={modalEl2}
                                name={team[1].name}
                                jobTitle={team[1].jobTitle}
                                bio={team[1].bio}
                                image={team[1].image}
                              />

                              <img className="opacity-30 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/avatar.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>

                        <div className="lg:h-full hidden lg:block lg:pl-16">
                          <div className="h-full w-auto lg:w-[26vh] lg:min-w-[26vh]" data-scroll data-scroll-speed={-0.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-10vh] h-full">
                              <img className="opacity-30 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/avatar.jpg" alt="Avatar" />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-16 relative overflow-hidden" onClick={() => modalEl3.current.open()}>
                                <img className="inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[2].image} alt={team[2].name} />
                                
                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[38px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-2 transition-transform ease-in-out duration-500">{team[2].name}</h3>
                              </button>

                              <ModalTeam
                                ref={modalEl3}
                                name={team[2].name}
                                jobTitle={team[2].jobTitle}
                                bio={team[2].bio}
                                image={team[2].image}
                              />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-16 relative overflow-hidden" onClick={() => modalEl4.current.open()}>
                                <img className="inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[3].image} alt={team[3].name} />

                                <h3 className="absolute top-0 mt-8 left-0 text-off-white z-20 text-[38px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-2 transition-transform ease-in-out duration-500">{team[3].name}</h3>
                              </button>

                              <ModalTeam
                                ref={modalEl4}
                                name={team[3].name}
                                jobTitle={team[3].jobTitle}
                                bio={team[3].bio}
                                image={team[3].image}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lg:h-full hidden lg:block lg:pl-16">
                          <div className="h-full w-auto lg:w-[26vh] lg:min-w-[26vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-8vh] h-full">

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-16 relative overflow-hidden" onClick={() => modalEl5.current.open()}>
                                <img className="inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[4].image} alt={team[4].name} />

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[38px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-2 transition-transform ease-in-out duration-500">{team[4].name}</h3>
                              </button>

                              <ModalTeam
                                ref={modalEl5}
                                name={team[4].name}
                                jobTitle={team[4].jobTitle}
                                bio={team[4].bio}
                                image={team[4].image}
                              />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-16 relative overflow-hidden" onClick={() => modalEl6.current.open()}>
                                <img className="inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[5].image} alt={team[5].name} />

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[38px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-2 transition-transform ease-in-out duration-500">{team[5].name}</h3>
                              </button>

                              <ModalTeam
                                ref={modalEl6}
                                name={team[5].name}
                                jobTitle={team[5].jobTitle}
                                bio={team[5].bio}
                                image={team[5].image}
                              />

                              <img className="opacity-30 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/avatar.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>

                        <div className="lg:h-full hidden lg:block lg:pl-16">
                          <div className="h-full w-auto lg:w-[26vh] lg:min-w-[26vh]" data-scroll data-scroll-speed={-0.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-10vh] h-full">
                              <img className="opacity-30 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/avatar.jpg" alt="Avatar" />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-16 relative overflow-hidden" onClick={() => modalEl7.current.open()}>
                                <img className="inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[6].image} alt={team[6].name} />

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[38px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-2 transition-transform ease-in-out duration-500">{team[6].name}</h3>
                              </button>

                              <ModalTeam
                                ref={modalEl7}
                                name={team[6].name}
                                jobTitle={team[6].jobTitle}
                                bio={team[6].bio}
                                image={team[6].image}
                              />

                              <img className="opacity-30 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/avatar.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="w-full lg:w-[140vmin] lg:min-w-[140vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:pl-40 lg:pr-80 py-[40px] lg:py-12 lg:flex lg:flex-wrap relative lg:border-r lg:border-soft-black-dark" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        <div className="w-full mb-16 lg:mb-auto">
                          <div className="mb-8 lg:mb-12 lg:ml-[4px]">
                            <MetaText>Career Opportunities</MetaText>
                          </div>

                          <h2 className="text-[12.5vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[12vmin] leading-[0.9] mb-8 lg:mb-16">Take the field.</h2>

                          <p className="w-full max-w-2xl text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight mb-8 lg:mb-16">We're always up for speaking to great people who are determined to make the renewable transition happen. If that sounds like you, say hello at <a className="underline hover:text-orange focus:text-orange transition-colors ease-in-out duration-500" href="mailto:careers@field.energy">careers@field.energy</a>.</p>
                        </div>
                        
                        <nav className="w-full mt-auto">
                          <ul className="border-t border-soft-black-dark">
                            <li className="py-3 border-b border-soft-black-dark text-[5.5vw] lg:text-[2.5vmin] xl:text-[3vmin] 2xl:text-[3.5vmin]">→ CTO</li>
                            <li className="py-3 border-b border-soft-black-dark text-[5.5vw] lg:text-[2.5vmin] xl:text-[3vmin] 2xl:text-[3.5vmin]">→ FP&amp;A Manager</li>
                            <li className="py-3 border-b border-soft-black-dark text-[5.5vw] lg:text-[2.5vmin] xl:text-[3vmin] 2xl:text-[3.5vmin]">→ General Counsel</li>
                          </ul>
                        </nav>
                      </section>

                      <section className="min-w-[100vw] w-[100vw] bg-yellow h-screen lg:h-full whitespace-nowrap relative overflow-hidden" data-scroll-section>
                        
                        <img className="w-full h-full absolute inset-0 z-0 object-cover object-center will-change" src="/images/team-sg.jpg" alt="Field Supergraphic" />

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
                          <div className="w-full mt-[-5vh] lg:mt-[-60vh] ml-[-2vw]" data-scroll data-scroll-direction="vertical" data-scroll-speed={2}>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[35vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:text-[36vmin] xl:text-[40vmin] 2xl:text-[43vmin] lg:ml-[-10px] will-change">Net Zero</span>
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
