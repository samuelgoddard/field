import { useEffect, useRef, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Header from '@/components/header'
import ProgressBar from '@/components/progress-bar'
import { fade, reveal, swipe1, swipe2 } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Logo from '@/components/logo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import MetaText from '@/components/meta-text'
import ScrollToButton from '@/components/scroll-to-button'
import Link from 'next/link'
import Image from 'next/image'
import MissionSupergraphic from 'public/images/mission-sg.jpg'
import missionImage from 'public/images/mission.jpg'
import Div100vh from 'react-div-100vh'
import ImageWrapper from '@/components/image-wrapper'
import { IntroContext } from '../context/intro'
import BarSection from '@/components/bar-section'

const query = `{
  "mission": *[_type == "mission"][0]{
    title,
    chapter1Title,
    chapter1Text,
    chapter2Title,
    chapter2Text,
    chapter3Title,
    chapter3Text,
    chapter3Bars[] {
      metaInfo,
      year
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Mission(initialData) {
  const { data: { mission }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const containerRef = useRef(null)
  const router = useRouter()
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo title={mission.title} />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-orange" variants={swipe1}></m.div>
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-orange" variants={swipe2}></m.div>
        </m.div>
        
        <LocomotiveScrollProvider
          options={{ 
            smooth: true,
            lerp: 0.125,
            direction: 'horizontal',
            tablet: { 
              smooth: true, 
              lerp: 0, 
              breakpoint: 1024
            }
          }}
          containerRef={containerRef}
          watch={[]}
        >
          <Header route={router.asPath} />
            <div data-scroll-container ref={containerRef} id="scroll-container" className="relative">
              <div>
                <m.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className=""
                >
                  <main className="">
                    <Div100vh className="flex flex-wrap lg:flex-nowrap flex-row">
                      <div className="fixed inset-0" id="hero" ></div>

                      <section className="w-[100vw] min-w-[100vw] 3xl:w-[1920px] 3xl:min-w-[1920px] 3xl:max-w-[1920px] h-auto lg:h-full pl-[42px] pr-[25px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow relative overflow-hidden border-b border-soft-black-dark lg:border-b-0" data-scroll-position="left" data-scroll data-scroll-sticky data-scroll-target="#hero">
                        <m.div variants={fade}>
                          <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                          <Image
                            priority
                            layout="fill"
                            src={MissionSupergraphic}
                            alt="Field Supergraphic"
                            quality={90}
                            className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change supergraphic--animation`}
                          />
                        </m.div>
                        
                        <div className="grain grain--over z-[4]"></div>
                        
                        <div className="flex flex-wrap lg:items-center h-full relative" data-scroll data-scroll-speed={0.4}>
                          <div className="w-full lg:w-8/12 xl:w-9/12 lg:flex lg:flex-wrap lg:h-full text-soft-black-dark pb-5 lg:pb-8">
                            <div className="w-full mb-auto lg:px-[30px] pt-[25px] pb-16 lg:py-8">
                              <Link href="/">
                                <a className="inline-block relative z-[60] opacity-0 lg:opacity-100">
                                  <Logo width="w-[140px] lg:w-[240px]" />
                                </a>
                              </Link>
                            </div>

                            <div className="w-full lg:pr-10 mb-auto">
                              <h1 className="text-[14.5vw] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] 3xl:text-[155px] block leading-[0.85] uppercase italic ml-[-28px] lg:ml-[-3px] xl:ml-[-5px] 2xl:ml-[-5px] 3xl:ml-[-6px]">
                                <span className="block overflow-hidden">
                                  <m.span variants={reveal} className="block">
                                  Accelerate
                                  </m.span>
                                </span>
                                <span className="block overflow-hidden">
                                  <m.span variants={reveal} className="block">
                                  renewable
                                  </m.span>
                                </span>
                                <span className="block overflow-hidden">
                                  <m.span variants={reveal} className="block">
                                  energy
                                  </m.span>
                                </span>
                                
                                <span className="block overflow-hidden lg:hidden">
                                  <m.span variants={reveal} className="block">
                                    <span className="inline lg:hidden">infra-</span>
                                  </m.span>
                                </span>
                                <span className="block overflow-hidden lg:hidden">
                                  <m.span variants={reveal} className="block">
                                    <span className="inline lg:hidden">structure</span>
                                  </m.span>
                                </span>

                                <span className="hidden overflow-hidden lg:block">
                                  <m.span variants={reveal} className="block">
                                    <span className="inline">infrastructure</span>
                                  </m.span>
                                </span>
                              </h1>
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 xl:w-3/12 mt-auto lg:mt-0 lg:border-l border-soft-black-dark lg:h-full flex items-start text-soft-black-dark pt-6 lg:pt-0">
                            <div className="w-full lg:p-8 lg:pt-8 lg:pb-8 h-full flex flex-wrap">
                              <div className="w-full">
                                <div className="mb-6 lg:mb-12">
                                  <div className="overflow-hidden relative">
                                    <m.span variants={reveal} className="block">
                                      <MetaText>Chapters</MetaText>
                                    </m.span>
                                  </div>
                                </div>
                                <ol className="text-[20px] lg:text-[22px] leading-tight lg:leading-tight w-full mb-16 lg:mb-8 list-inside list-decimal">
                                  <li className="mb-1 overflow-hidden">
                                    <m.span variants={fade} className="inline-block">
                                      <ScrollToButton scrollTarget="#challenge">
                                        <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">{mission.chapter1Title}</span>
                                      </ScrollToButton>
                                    </m.span>
                                  </li>
                                  <li className="mb-1 overflow-hidden">
                                    <m.span variants={fade} className="inline-block">
                                    <ScrollToButton scrollTarget="#mission">
                                      <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">{mission.chapter2Title}</span>
                                    </ScrollToButton>
                                    </m.span>
                                  </li>
                                  <li className="mb-1 overflow-hidden">
                                  <m.span variants={fade} className="inline-block">
                                    <ScrollToButton scrollTarget="#plan">
                                      <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">{mission.chapter3Title}</span>
                                    </ScrollToButton>
                                    </m.span>
                                  </li>
                                </ol>
                              </div>

                              <m.div variants={fade} className="hidden lg:block w-full mt-auto">
                                <ScrollToButton full scrollTarget="#challenge">
                                  <span className="w-full block bg-soft-black-dark text-off-white uppercase text-center rounded-full px-4 lg:px-8 py-3 lg:py-3 text-[16px] lg:text-[50px] relative overflow-hidden leading-[0.8]">
                                    <span className="absolute inset-0 w-0 bg-off-white group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                                    <span className="block overflow-hidden relative">
                                      <m.span variants={reveal} className="block">
                                        <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full mt-[-6px]">→</span>
                                        <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-soft-black-dark mt-[-6px]">→</span>
                                      </m.span>
                                    </span>
                                  </span>
                                </ScrollToButton>
                              </m.div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <m.section variants={fade} className="w-full lg:w-[125vmin] lg:min-w-[125vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-16 py-[40px] lg:py-8 lg:flex lg:flex-wrap relative lg:border-l lg:border-soft-black-dark bg-off-white" id="challenge" >
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="w-full">
                          <div className="mb-8 lg:mb-12 lg:ml-[8px]">
                            <MetaText>{mission.chapter1Title}</MetaText>
                          </div>

                          <h2 className="text-[10.5vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[11vmin] 3xl:text-[11.5vmin] leading-[0.9] mb-6">{mission.chapter1Text}</h2>
                        </div>
                      </m.section>

                      <m.section variants={fade} className="w-full lg:w-[130vw] lg:min-w-[1200px] 2xl:min-w-0 lg:max-w-[1200px] 2xl:max-w-[1400px] lg:h-full whitespace-normal pb-8 lg:flex lg:flex-wrap relative lg:border-l  lg:border-soft-black-dark overflow-hidden bg-off-white" id="mission" >
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        
                        <div className="w-full relative h-[35%] lg:h-[38%] overflow-hidden mb-8 lg:mb-auto">
                          <div className="lg:absolute inset-0 w-full">
                            <div className="scale-[1.3] w-full">
                              <div data-scroll data-scroll-direction="vertical" data-scroll-speed={-0.6}>
                                <ImageWrapper
                                  layout="intrinsic"
                                  src={missionImage}
                                  alt="Isometric Building"
                                  className={`w-full h-full object-center object-cover`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full lg:w-[60%] mt-auto pl-[42px] pr-[25px] lg:px-8 max-w-4xl">
                          <div className="mb-8 lg:mb-8">
                            <MetaText>{mission.chapter2Title}</MetaText>
                          </div>
                          
                          <div className="block text-base lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight content content--large 3xl:max-w-3xl ">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={mission.chapter2Text} />
                          </div>

                          {/* <h3 className="text-[24px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] leading-[1.2]">Field will finance, build, operate and monetise the renewable infrastructure needed to reach net zero, putting capital to work to create the energy the world needs.</h3>

                          <p className="block text-base lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight">We’re creating the renewable energy infrastructure and trading company of the future, showing there’s a better way to invest. We are using capital to accelerate the renewable transition, with positive returns for the planet and investors.</p> */}
                        </div>
                      </m.section>

                      {/* <m.section variants={fade} className="w-full lg:w-[140vw] lg:min-w-[1400px] 2xl:min-w-0 lg:max-w-[1400px] 2xl:max-w-[1400px] lg:h-full whitespace-normal lg:pb-12 lg:flex lg:flex-wrap relative border-t lg:border-t-0 lg:border-l border-soft-black-dark lg:border-r overflow-hidden bg-purple pt-8 lg:pt-0"  id="plan">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div>
                        
                        <div className="w-10/12 lg:w-10/12 mt-auto pt-[5px] pl-[42px] pr-[25pxw] lg:py-8 lg:px-8 max-w-xl lg:absolute lg:top-0 lg:left-0 text-off-white z-[5]">
                          <div className="mb-6">
                            <MetaText>{mission.chapter3Title}</MetaText>
                          </div>
                          <p className="block text-[24px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] leading-[1.2] text-off-white">{mission.chapter3Text}</p>
                        </div>

                        <div className="lg:flex lg:flex-wrap lg:absolute inset-0 items-end mt-12 lg:mt-0">
                          {mission.chapter3Bars.map((e,i) => {
                            let backgroundColor = '';
                            let height = '';
                            let battery = '';
                            let textSize = '';

                            if (i === 0) {
                              backgroundColor = 'bg-blue'
                              height = 'w-[37%] lg:w-1/3 h-[150px] lg:h-[25%]'
                              battery = '/images/battery-1.svg'
                              textSize = 'text-[22px] lg:text-[47px]'
                            } else if (i === 1) {
                              backgroundColor = 'bg-off-white'
                              height = 'w-[75%] lg:w-1/3 h-[150px] lg:h-[66%]'
                              battery = '/images/battery-2.svg'
                              textSize = 'text-[30px] lg:text-[75px]'
                            } else {
                              backgroundColor = 'bg-orange'
                              height = 'w-[90%] lg:w-1/3 h-[150px] lg:h-[90%]'
                              battery = '/images/battery-3.svg'
                              textSize = 'text-[38px] lg:text-[100px]'
                            }

                            return (
                              <div key={i} className={`w-[37%] lg:w-1/3 pl-[42px] pr-5 lg:px-6 py-3 lg:py-5 flex flex-wrap lg:flex items-center lg:items-start ${backgroundColor} ${height}`}>
                                <div className="w-full relative z-[5]">
                                  <span className={`w-full block uppercase italic leading-none lg:leading-none mb-1 lg:mb-2 ${textSize}`}>{e.year}</span>
                                  <span className="w-full block text-[13px] lg:text-lg leading-tight lg:leading-tight lg:w-9/12">{e.metaInfo}</span>
                                </div>
                                <img className="w-[30px] lg:w-[55px] block mt-auto" src={battery} alt="Battery Icon" />
                              </div>
                            )
                          })}
                        </div>
                      </m.section> */}

                      <BarSection title={mission.chapter3Title} text={mission.chapter3Text} bars={mission.chapter3Bars} />

                      <m.section variants={fade} className="min-w-[100vw] w-[100vw] bg-yellow h-[40vh] lg:h-full whitespace-nowrap relative overflow-hidden border-soft-black-dark border-t lg:border-t-0" >
                        {/* <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div> */}

                        <Image
                          layout="fill"
                          src={MissionSupergraphic}
                          alt="Field Supergraphic"
                          quality={90}
                          className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change`}
                        />

                        <div className="grain grain--over z-[4]"></div>

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
                      </m.section>
                    </Div100vh>
                  </main>
                </m.div>
              </div>
            </div>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              className=""
            >
              <m.div variants={fade} className="">
                <ProgressBar />
              </m.div>
            </m.div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}