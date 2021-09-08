import { useRef, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Header from '@/components/header'
import ProgressBar from '@/components/progress-bar'
import { fade, swipe1, swipe2 } from '@/helpers/transitions'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Logo from '@/components/logo'
import MetaText from '@/components/meta-text'
import ScrollToButton from '@/components/scroll-to-button'
import Link from 'next/link'
import Image from 'next/image'
import homeSupergraphic from 'public/images/home-sh.jpg'
import Div100vh from 'react-div-100vh'
import { IntroContext } from '../context/intro'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    introText,
    chapter1Title,
    chapter1Text,
    pictogramBlocks[]{
      image {
        asset -> {
          ...
        }
      },
      heading,
      text
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

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  
  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 4000);
  },[]);

  const reveal = {
    initial: { y: '100%' },
    enter: { 
      y: 0,
      transition: { delay: introContext ? 0 : 1.45, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const containerRef = useRef(null)
  const router = useRouter()

  return (
    <Layout>
      <NextSeo title={home.title} />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className={introContext ? 'opacity-100' : 'opacity-0'}
        >
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-orange" variants={swipe1}></m.div>
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-orange" variants={swipe2}></m.div>
        </m.div>
        
        <LocomotiveScrollProvider
          options={{ smooth: true, lerp: 0.125, direction: 'horizontal', tablet: { smooth: false, breakpoint: 1024 }}}
          containerRef={containerRef}
          watch={[]}
        >
          <Header route={router.asPath}/>
            <div data-scroll-container ref={containerRef} id="scroll-container" className="">
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

                      <section className="w-[100vw] min-w-[100vw] 3xl:w-[1920px] 3xl:min-w-[1920px] 3xl:max-w-[1920px] h-auto lg:h-full pl-[42px] pr-[20px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow bg-blend-overlay overflow-hidden relative border-b border-soft-black-dark lg:border-b-0"  data-scroll-position="left" data-scroll data-scroll-sticky data-scroll-target="#hero">
                        <m.div variants={fade}>
                          <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                          <Image
                            priority
                            layout="fill"
                            src={homeSupergraphic}
                            alt="Field Supergraphic"
                            quality={90}
                            className={`w-full h-full absolute inset-0 object-cover object-center will-change supergraphic--animation`}
                          />
                        </m.div>

                        <div className="grain grain--over z-[4]"></div>
                        
                        <div className="flex flex-wrap lg:items-center h-full relative" data-scroll data-scroll-speed={0.4}>
                          <div className="w-full lg:w-8/12 xl:w-9/12 lg:flex lg:flex-wrap lg:h-full text-soft-black-dark pb-8">
                            <div className="w-full mb-auto lg:px-[30px] pt-[25px] pb-12 lg:py-8 opacity-0 lg:opacity-100">
                              <Logo width="w-[140px] lg:w-[240px]" />
                            </div>
                            <div className="w-full 2xl:pr-32 mt-5 my-auto lg:my-auto mb-16">
                              <h1 className="text-[18vw] lg:text-[80px] xl:text-[112px] 2xl:text-[130px] 3xl:text-[155px] block leading-[0.85] uppercase italic ml-[-28px] lg:ml-[-3px] xl:ml-[-5px] 2xl:ml-[-5px] 3xl:ml-[-6px]">
                                <div className="hidden md:block">
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      Making The
                                    </m.span>
                                  </span>
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      Planet Worth
                                    </m.span>
                                  </span>
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      More
                                    </m.span>
                                  </span>
                                </div>

                                <div className="block md:hidden">
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      Making
                                    </m.span>
                                  </span>
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      The
                                    </m.span>
                                  </span>
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      Planet
                                    </m.span>
                                  </span>
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      Worth
                                    </m.span>
                                  </span>
                                  <span className="block overflow-hidden">
                                    <m.span variants={reveal} className="block">
                                      More
                                    </m.span>
                                  </span>
                                </div>
                              </h1>
                            </div>
                            <m.div variants={fade} className="w-full flex flex-wrap lg:space-x-7 mt-auto lg:px-[30px]">
                              <div className="w-full lg:w-auto mb-2 lg:mb-0">
                                {/* @TODO CONVERT TO BUTTON */}
                                <Link href="/mission">
                                  <a className="group w-full block bg-off-white uppercase text-center rounded-full px-4 lg:px-8 py-4 lg:py-[18px] text-[16px] lg:text-[21px] relative overflow-hidden">
                                    <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                                    <span className="block overflow-hidden relative leading-none">
                                      <m.span variants={reveal} className="block">
                                        <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Mission</span>
                                        <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Mission</span>
                                      </m.span>
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
                                      <m.span variants={reveal} className="block">
                                        <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full">Our Team</span>
                                        <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">Our Team</span>
                                      </m.span>
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            </m.div>
                          </div>

                          <div className="w-11/12 lg:w-4/12 xl:w-3/12 mt-auto lg:mt-0 lg:border-l border-soft-black-dark lg:h-full flex items-end text-soft-black-dark pt-6 lg:pt-0">
                            <div className="w-full lg:p-8 lg:pb-8">
                              <div className="mb-6 lg:mb-12">
                                <div className="overflow-hidden">
                                  <m.span variants={reveal} className="block">
                                    <MetaText>About Us</MetaText>
                                  </m.span>
                                </div>
                              </div>

                              <m.div variants={fade} className="text-base lg:text-lg 2xl:text-xl leading-tight lg:leading-tight 2xl:leading-tight w-10/12 lg:w-11/12 2xl:w-11/12 mb-16 lg:mb-10 content--pad">
                                <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.introText} />
                              </m.div>

                              <m.div variants={fade} className="hidden lg:block">
                                <ScrollToButton full scrollTarget="#intro">
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

                      <m.section variants={fade} className="w-full lg:w-[120vmin] lg:min-w-[120vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-16 py-[40px] -mr-1 lg:py-8 lg:flex lg:flex-wrap  lg:border-l lg:border-soft-black-dark relative z-100 bg-off-white" id="intro" >
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="w-full">
                          <div className="mb-6 lg:mb-12 lg:ml-[8px]">
                            <MetaText>{home.chapter1Title}</MetaText>
                          </div>

                          <h2 className="text-[12.5vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[11vmin] 3xl:text-[11vmin] leading-[0.9] ml-[-3px] lg:ml-0">{home.chapter1Text}</h2>
                        </div>
                      </m.section>

                      <m.section variants={fade} className="lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:pr-16 lg:pl-0 2xl:pl-12 pb-[40px] lg:py-0 flex flex-wrap lg:flex-nowrap lg:border-r lg:border-soft-black-dark relative z-100 bg-off-white" >
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>


                        {/* {JSON.stringify(home.pictogramBlocks)} */}

                        {home.pictogramBlocks.map((e,i) => {
                          return (
                            <div key={i} className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-12 lg:mb-0">
                              <div className="lg:pb-[25px]">
                                <img className="w-4/12 lg:w-5/12 will-change mb-5 lg:mb-8" src={e.image.asset.url} alt="Finance Icon" />
                                <h3 className="mb-4 lg:mb-5 2xl:mb-8 text-[9vw] lg:text-[52px] 2xl:text-[58px] leading-none">{e.heading}</h3>
                                <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">{e.text}</p>
                              </div>
                            </div>
                          )
                        })}

                        {/* <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-12 lg:mb-0">
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
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">We'll act fast to build the infrastructure we need. We'll start with energy storage, then push into other infrastructure.</p>
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
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">We'll manage and operate our own infrastructure - and we're building software to optimise and connect to our assets.</p>
                          </div>
                        </div>
                        <div className="lg:border-l lg:border-soft-black-dark lg:h-full flex items-end lg:min-w-[540px] 3xl:w-[600px] lg:p-8 mb-6 lg:mb-0">
                          <div className="">
                            <img className="w-4/12 lg:w-5/12 will-change mb-5 lg:mb-8" src="/images/grow.png" alt="Grow Icon" />
                            <h3 className="mb-4 lg:mb-5 2xl:mb-8 text-[9vw] lg:text-[52px] 2xl:text-[58px] leading-none">Grow</h3>
                            <p className="block text-base lg:text-xl leading-tight lg:leading-tight 2xl:leading-tight">By generating outsized returns from our storage assets, we’ll encourage large-scale investment into the transition to net zero.</p>
                          </div>
                        </div> */}
                      </m.section>

                      <m.section variants={fade} className="min-w-[100vw] w-[100vw] bg-yellow h-[40vh] lg:h-full whitespace-nowrap relative overflow-hidden border-soft-black-dark border-t lg:border-t-0" >
                        {/* <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div> */}

                        <Image
                          layout="fill"
                          src={homeSupergraphic}
                          alt="Field Supergraphic"
                          quality={90}
                          className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change`}
                        />

                        <div className="grain grain--over z-[4]"></div>

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