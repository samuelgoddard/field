import { useEffect, useRef, useState, useContext, useCallback } from 'react'
import { useRouter } from 'next/router'
import useEmblaCarousel from "embla-carousel-react";
import Layout from '@/components/layout'
import Slider from 'react-slick'
import Header from '@/components/header'
import ProgressBar from '@/components/progress-bar'
import { fade, reveal, swipe1, swipe2 } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Logo from '@/components/logo'
import MetaText from '@/components/meta-text'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import ScrollToButton from '@/components/scroll-to-button'
import ModalTeam from '@/components/modal-team'
import Link from 'next/link'
// import { team } from '@/helpers/temp-data'
// import TeamCarousel from '@/components/team-carousel'
import Image from 'next/image'
import teamSupergraphic from 'public/images/team-sg.jpg'
import teamSupportingImage from 'public/images/team.jpg'
import Div100vh from 'react-div-100vh'
import ImageWrapper from '@/components/image-wrapper'
import { IntroContext } from '../context/intro'
import TeamCarousel from '@/components/team-carousel'

const query = `{
  "teamLanding": *[_type == "teamLanding"][0]{
    title,
    chapter1Title,
    chapter1Text,
    chapter2Title,
    chapter2Heading,
    chapter2Text,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "careers": *[_type == "careers"]{
    title,
    slug {
      current
    }
  },
  "team": *[_type == "team"] | order(order asc) {
    name,
    order,
    jobTitle,
    avatar {
      asset -> {
        ...
      }
    },
    bio
  }
}`

const pageService = new SanityPageService(query)

export default function Team(initialData) {
  const { data: { teamLanding, careers, team }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const containerRef = useRef(null)
  
  const modalEl1 = useRef(null)
  const modalEl2 = useRef(null)
  const modalEl3 = useRef(null)
  const modalEl4 = useRef(null)
  const modalEl5 = useRef(null)
  const modalEl6 = useRef(null)
  const modalEl7 = useRef(null)
  const modalEl8 = useRef(null)
  const modalEl9 = useRef(null)
  const modalEl10 = useRef(null)
  const modalEl11 = useRef(null)
  const modalEl12 = useRef(null)
  const modalEl13 = useRef(null)
  const modalEl14 = useRef(null)
  const modalEl15 = useRef(null)
  const modalEl16 = useRef(null)
  const modalEl17 = useRef(null)
  const modalEl18 = useRef(null)
  const modalEl19 = useRef(null)
  const modalEl20 = useRef(null)
  const modalEl21 = useRef(null)
  const modalEl22 = useRef(null)

  const router = useRouter()

  // const [viewportRef, embla] = useEmblaCarousel({
  //   skipSnaps: false,
  //   loop: true,
  //   slidesToScroll: 2,
  //   inViewThreshold: 0.4,
  //   containScroll: 'keepSnaps',
  //   speed: 3,
  //   align: 'start',
  // });
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  // const onSelect = useCallback(() => {
  //   if (!embla) return;
  //   setPrevBtnEnabled(embla.canScrollPrev());
  //   setNextBtnEnabled(embla.canScrollNext());
  // }, [embla]);

  // useEffect(() => {
  //   setIntroContext(true)
  //   if (!embla) return;
  //   embla.on("select", onSelect);
  //   onSelect();
  // }, [embla, onSelect]);

  useEffect(() => {
    setIntroContext(true)
  });
  
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 3,
    rows: 3,
    arrows: true,
    centerPadding: '150px'
  };

  return (
    <Layout>
      <NextSeo title="Team" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-off-white" variants={swipe1}></m.div>
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-off-white" variants={swipe2}></m.div>
        </m.div>
      
        <LocomotiveScrollProvider
          options={{ smooth: true, lerp: 0.125, direction: 'horizontal', tablet: { smooth: false, breakpoint: 1024 }}}
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

                      <section className="w-[100vw] min-w-[100vw] 3xl:w-[1920px] 3xl:min-w-[1920px] 3xl:max-w-[1920px] h-auto lg:h-full pl-[42px] pr-[25px] lg:pl-[90px] lg:pr-0 whitespace-normal bg-yellow relative overflow-hidden" data-scroll-position="left" data-scroll data-scroll-sticky data-scroll-target="#hero">
                        <m.div variants={fade}>
                          <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                          {/* <img className="w-full h-full absolute inset-0 z-0 object-cover object-center will-change" src="/images/team-sg.jpg" alt="Field Supergraphic" /> */}
                  
                          <Image
                            priority
                            layout="fill"
                            src={teamSupergraphic}
                            alt="Field Supergraphic"
                            quality={90}
                            className={`w-full h-full absolute inset-0 z-0 object-cover object-center will-change supergraphic--animation`}
                          />
                        </m.div>

                        <div className="grain grain--over z-[4]"></div>

                        <div className="flex flex-wrap lg:items-center h-full relative" data-scroll data-scroll-speed={0.4}>
                          <div className="w-full lg:w-8/12 xl:w-9/12 lg:flex lg:flex-wrap lg:h-full text-soft-black-dark pb-5 lg:pb-8">
                            <div className="w-full mb-auto lg:px-[30px] pt-[25px] pb-16 lg:py-8 opacity-0 lg:opacity-100">
                              <Link href="/">
                                <a className="inline-block relative z-[60]">
                                  <Logo width="w-[140px] lg:w-[240px]" />
                                </a>
                              </Link>
                            </div>

                            <div className="lg:pr-10 mb-auto w-full lg:w-[620px] xl:w-[720px] 2xl:w-[950px]">
                              <h1 className="text-[14.5vw] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] 3xl:text-[155px] block leading-[0.85] uppercase italic ml-[-25px] lg:ml-[-3px] xl:ml-[-5px] 2xl:ml-[-5px] 3xl:ml-[-6px]">
                                <span className="block overflow-hidden">
                                  <m.span variants={fade} className="block">
                                    Progress
                                  </m.span>
                                </span>
                                <span className="block overflow-hidden">
                                  <m.span variants={fade} className="block">
                                    Needs
                                  </m.span>
                                </span>
                                <span className="block overflow-hidden">
                                  <m.span variants={fade} className="block">
                                    Energy
                                  </m.span>
                                </span>
                              </h1>
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 xl:w-3/12 mt-auto lg:mt-0 lg:border-l border-soft-black-dark lg:h-full flex items-start text-soft-black-dark pt-6 lg:pt-0">
                            <div className="w-full lg:p-8 lg:pt-8 lg:pb-8 h-full flex flex-wrap">
                              <div className="w-full">
                                <div className="mb-6 lg:mb-12">
                                  <span className="block overflow-hidden">
                                    <m.span variants={fade} className="block">
                                      <MetaText>Chapters</MetaText>
                                    </m.span>
                                  </span>
                                </div>
                                <ol className="text-[20px] lg:text-[22px] leading-tight lg:leading-tight w-full mb-16 lg:mb-8 list-inside list-decimal">
                                  <li className="mb-1 relative overflow-hidden">
                                    <m.span variants={fade} className="inline-block">
                                      <ScrollToButton scrollTarget="#intro">
                                        <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">{teamLanding.chapter1Title}</span>
                                      </ScrollToButton>
                                    </m.span>
                                  </li>
                                  <li className="mb-1 overflow-hidden">
                                    <m.span variants={fade} className="inline-block">
                                      <ScrollToButton scrollTarget="#careers">
                                        <span className="inline-block underline group-hover:text-orange-dark focus:text-orange-dark transition-colors ease-in-out duration-500">{teamLanding.chapter2Title}</span>
                                      </ScrollToButton>
                                    </m.span>
                                  </li>
                                </ol>
                              </div>

                              <m.div variants={fade} className="hidden lg:block w-full mt-auto">
                                <ScrollToButton full scrollTarget="#intro">
                                  <span className="w-full block bg-soft-black-dark text-off-white uppercase text-center rounded-full px-4 lg:px-8 py-3 lg:py-3 text-[16px] lg:text-[50px] relative overflow-hidden leading-[0.8]">
                                    <span className="absolute inset-0 w-0 bg-off-white group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
                                    <span className="block overflow-hidden relative">
                                      <m.span variants={fade} className="block">
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

                      <m.section variants={fade} className="w-full h-[40vh] lg:w-[65vw] lg:max-w-7xl lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-0 py-[40px] lg:py-0 relative overflow-hidden bg-off-white">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5"></div>
                        <div className="absolute inset-0" data-scroll data-scroll-speed={-3}>
                          <div className="w-full h-full scale-125" >
                            <ImageWrapper
                              layout="fill"
                              src={teamSupportingImage}
                              alt="An Isometric Building"
                              quality={90}
                              className={`w-full h-full  object-center object-cover absolute inset-0 scale-125`}
                            />
                          </div>
                        </div>
                      </m.section>

                      <m.section variants={fade} className="w-full lg:w-[140vmin] lg:min-w-[140vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:px-16 py-[40px] lg:py-8 lg:flex lg:flex-wrap relative lg:border-l lg:border-soft-black-dark bg-off-white -mr-1" id="intro">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        <div className="w-full">
                          <div className="mb-8 lg:mb-12 lg:ml-[8px]">
                            <MetaText>{teamLanding.chapter1Title}</MetaText>
                          </div>

                          <h2 className="text-[10vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[11vmin] 3xl:text-[11vmin] leading-[0.9]">{teamLanding.chapter1Text}</h2>
                        </div>
                      </m.section>

                      <m.section variants={fade} className="lg:h-full pl-[42px] pr-[25px] lg:pr-16 2xl:pl-16 pb-[40px] lg:py-0 flex flex-wrap lg:flex-nowrap relative w-full lg:w-auto bg-off-white -mr-1" id="team">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        
                        <div className="block lg:hidden w-full">
                          {/* <TeamCarousel slides={team} /> */}
                          <div className="flex flex-wrap -mx-3">
                            {team.map((team, index) => {
                              let modal = null;

                              if (index == 0) {
                                modal = modalEl1
                              } else if (index == 1) {
                                modal = modalEl2
                              } else if (index == 2) {
                                modal = modalEl3
                              } else if (index == 3) {
                                modal = modalEl4
                              } else if (index == 4) {
                                modal = modalEl5
                              } else if (index == 5) {
                                modal = modalEl6
                              } else if (index == 6) {
                                modal = modalEl7
                              } else if (index == 7) {
                                modal = modalEl8
                              } else if (index == 8) {
                                modal = modalEl9
                              } else if (index == 9) {
                                modal = modalEl10
                              } else if (index == 10) {
                                modal = modalEl11
                              } else if (index == 11) {
                                modal = modalEl12
                              } else if (index == 12) {
                                modal = modalEl13
                              } else if (index == 13) {
                                modal = modalEl14
                              } else if (index == 14) {
                                modal = modalEl15
                              } else if (index == 15) {
                                modal = modalEl16
                              } else if (index == 16) {
                                modal = modalEl17
                              } else if (index == 17) {
                                modal = modalEl18
                              } else if (index == 18) {
                                modal = modalEl19
                              } else if (index == 19) {
                                modal = modalEl20
                              } else if (index == 20) {
                                modal = modalEl21
                              } else if (index == 21) {
                                modal = modalEl22
                              }
                              return (
                                <div className="w-1/2 px-3 mb-4" key={index}>
                                  <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none lg:mb-16 relative overflow-hidden" onClick={() => modal.current.open()}>
                                    {/* <img className="block w-full object-center object-cover will-change" src={team.image} alt={team.name} /> */}

                                    <ImageWrapper
                                      layout="intrinsic"
                                      src={team.avatar.asset.url}
                                      alt={team.name}
                                      width={580}
                                      height={796}
                                      quality={90}
                                      className={`block w-full object-center object-cover will-change`}
                                    />

                                    <div className="text-left mt-3">
                                      <MetaText small>{team.jobTitle}</MetaText>
                                    </div>
                                    <h3 className="text-left uppercase italic text-xl leading-none mt-2" dangerouslySetInnerHTML={{ __html: team.name }}></h3>
                                  </button>

                                  <ModalTeam
                                    ref={modal}
                                    name={team.name}
                                    jobTitle={team.jobTitle}
                                    bio={team.bio}
                                    image={team.avatar.asset.url}
                                  />
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        <div className="lg:h-full hidden lg:block">
                          <div className="w-[90vw] mt-[-10vh]">
                            <Slider {...settings}>
                              {team.map((slide, index) => {
                                let modal = null;

                                if (index == 0) {
                                  modal = modalEl1
                                } else if (index == 1) {
                                  modal = modalEl2
                                } else if (index == 2) {
                                  modal = modalEl3
                                } else if (index == 3) {
                                  modal = modalEl4
                                } else if (index == 4) {
                                  modal = modalEl5
                                } else if (index == 5) {
                                  modal = modalEl6
                                } else if (index == 6) {
                                  modal = modalEl7
                                } else if (index == 7) {
                                  modal = modalEl8
                                } else if (index == 8) {
                                  modal = modalEl9
                                } else if (index == 9) {
                                  modal = modalEl10
                                } else if (index == 10) {
                                  modal = modalEl11
                                } else if (index == 11) {
                                  modal = modalEl12
                                } else if (index == 12) {
                                  modal = modalEl13
                                } else if (index == 13) {
                                  modal = modalEl14
                                } else if (index == 14) {
                                  modal = modalEl15
                                } else if (index == 15) {
                                  modal = modalEl16
                                } else if (index == 16) {
                                  modal = modalEl17
                                } else if (index == 17) {
                                  modal = modalEl18
                                } else if (index == 18) {
                                  modal = modalEl19
                                } else if (index == 19) {
                                  modal = modalEl20
                                } else if (index == 20) {
                                  modal = modalEl21
                                } else if (index == 21) {
                                  modal = modalEl22
                                }
                                
                                return (
                                  <div key={index} className="w-1/2 h-[40vh] px-4 py-4 ">
                                    <div className="bg-black bg-opacity-20 w-full h-full relative overflow-hidden">
                                      <button className="group hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden block w-full h-full" onClick={() => modal.current.open()}>
                                        <ImageWrapper
                                          layout="fill"
                                          src={slide.avatar.asset.url}
                                          alt={slide.name}
                                          className={`opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full h-full object-top object-cover will-change`}
                                        />
                                        

                                        <img className="h-full w-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                        <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: slide.name}}></h3>
                                      </button>
                                    </div>
                                  </div>
                                )
                              })}
                            </Slider>
                          </div>
                        </div>
                        
                        {/* <div className="lg:h-full hidden lg:block">
                          <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-8vh] h-full">
                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl1.current.open()}>
                                <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[0].avatar.asset.url} alt={team[0].name} />

                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[0].name}}></h3>
                              </button>

                              <ModalTeam
                                ref={modalEl1}
                                name={team[0].name}
                                jobTitle={team[0].jobTitle}
                                bio={team[0].bio}
                                image={team[0].avatar.asset.url}
                              />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl2.current.open()}>
                                <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[1].avatar.asset.url} alt={team[1].name} />

                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[1].name}}></h3>
                              </button>

                              <ModalTeam
                                ref={modalEl2}
                                name={team[1].name}
                                jobTitle={team[1].jobTitle}
                                bio={team[1].bio}
                                image={team[1].avatar.asset.url}
                              />

                              <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>

                        <div className="lg:h-full hidden lg:block lg:pl-10">
                          <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={-0.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-30vh] h-full">
                              <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl3.current.open()}>
                                <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[2].avatar.asset.url} alt={team[2].name} />

                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>
                                
                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[2].name}}></h3>
                              </button>

                              <ModalTeam
                                ref={modalEl3}
                                name={team[2].name}
                                jobTitle={team[2].jobTitle}
                                bio={team[2].bio}
                                image={team[2].avatar.asset.url}
                              />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl4.current.open()}>
                                <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[3].avatar.asset.url} alt={team[3].name} />

                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                <h3 className="absolute top-0 mt-6 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[3].name }}></h3>
                              </button>

                              <ModalTeam
                                ref={modalEl4}
                                name={team[3].name}
                                jobTitle={team[3].jobTitle}
                                bio={team[3].bio}
                                image={team[3].avatar.asset.url}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lg:h-full hidden lg:block lg:pl-10">
                          <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                            <div className="w-full lg:mt-[-8vh] h-full">

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl5.current.open()}>
                                <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[4].avatar.asset.url} alt={team[4].name} />

                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[4].name}}></h3>
                              </button>

                              <ModalTeam
                                ref={modalEl5}
                                name={team[4].name}
                                jobTitle={team[4].jobTitle}
                                bio={team[4].bio}
                                image={team[4].avatar.asset.url}
                              />

                              <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl6.current.open()}>
                                <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[5].avatar.asset.url} alt={team[5].name} />

                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[5].name}}></h3>
                              </button>

                              <ModalTeam
                                ref={modalEl6}
                                name={team[5].name}
                                jobTitle={team[5].jobTitle}
                                bio={team[5].bio}
                                image={team[5].avatar.asset.url}
                              />

                              <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                            </div>
                          </div>
                        </div>

                        {team.length > 6 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={-0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-25vh] h-full">
                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl7.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[6].avatar.asset.url} alt={team[6].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[6].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl7}
                                  name={team[6].name}
                                  jobTitle={team[6].jobTitle}
                                  bio={team[6].bio}
                                  image={team[6].avatar.asset.url}
                                />

                                {team.length > 7 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl8.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[7].avatar.asset.url} alt={team[7].name} />

                                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute top-0 mt-6 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[7].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl8}
                                      name={team[7].name}
                                      jobTitle={team[7].jobTitle}
                                      bio={team[7].bio}
                                      image={team[7].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {team.length > 8 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-8vh] h-full">

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl9.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[8].avatar.asset.url} alt={team[8].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[8].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl9}
                                  name={team[8].name}
                                  jobTitle={team[8].jobTitle}
                                  bio={team[8].bio}
                                  image={team[8].avatar.asset.url}
                                />

                                {team.length > 9 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl10.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[9].avatar.asset.url} alt={team[9].name} />

                                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[9].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl10}
                                      name={team[9].name}
                                      jobTitle={team[9].jobTitle}
                                      bio={team[9].bio}
                                      image={team[9].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}

                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                              </div>
                            </div>
                          </div>
                        )}

                        {team.length > 10 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={-0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-25vh] h-full">
                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl11.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[10].avatar.asset.url} alt={team[10].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[10].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl11}
                                  name={team[10].name}
                                  jobTitle={team[10].jobTitle}
                                  bio={team[10].bio}
                                  image={team[10].avatar.asset.url}
                                />

                                {team.length > 11 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl12.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[11].avatar.asset.url} alt={team[11].name} />

                                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute top-0 mt-6 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[11].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl12}
                                      name={team[11].name}
                                      jobTitle={team[11].jobTitle}
                                      bio={team[11].bio}
                                      image={team[11].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {team.length > 12 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-8vh] h-full">

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl13.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[12].avatar.asset.url} alt={team[12].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[12].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl13}
                                  name={team[12].name}
                                  jobTitle={team[12].jobTitle}
                                  bio={team[12].bio}
                                  image={team[12].avatar.asset.url}
                                />

                                {team.length > 13 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl14.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[13].avatar.asset.url} alt={team[13].name} />

                                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[13].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl14}
                                      name={team[13].name}
                                      jobTitle={team[13].jobTitle}
                                      bio={team[13].bio}
                                      image={team[13].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}

                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                              </div>
                            </div>
                          </div>
                        )}

                        {team.length > 14 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={-0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-25vh] h-full">
                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl15.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[13].avatar.asset.url} alt={team[13].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[13].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl15}
                                  name={team[13].name}
                                  jobTitle={team[13].jobTitle}
                                  bio={team[13].bio}
                                  image={team[13].avatar.asset.url}
                                />

                                {team.length > 15 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl16.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[14].avatar.asset.url} alt={team[14].name} />

                                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute top-0 mt-6 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[14].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl16}
                                      name={team[14].name}
                                      jobTitle={team[14].jobTitle}
                                      bio={team[14].bio}
                                      image={team[14].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {team.length > 16 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-8vh] h-full">

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl17.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[16].avatar.asset.url} alt={team[16].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[16].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl17}
                                  name={team[16].name}
                                  jobTitle={team[16].jobTitle}
                                  bio={team[16].bio}
                                  image={team[16].avatar.asset.url}
                                />

                                {team.length > 17 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl18.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[17].avatar.asset.url} alt={team[17].name} />

                                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[17].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl18}
                                      name={team[17].name}
                                      jobTitle={team[17].jobTitle}
                                      bio={team[17].bio}
                                      image={team[17].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}

                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                              </div>
                            </div>
                          </div>
                        )}
 
                        {team.length > 18 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={-0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-25vh] h-full">
                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl19.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[18].avatar.asset.url} alt={team[18].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[18].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl19}
                                  name={team[18].name}
                                  jobTitle={team[18].jobTitle}
                                  bio={team[18].bio}
                                  image={team[18].avatar.asset.url}
                                />

                                {team.length > 19 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl20.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[19].avatar.asset.url} alt={team[19].name} />

                                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute top-0 mt-6 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[19].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl20}
                                      name={team[19].name}
                                      jobTitle={team[19].jobTitle}
                                      bio={team[19].bio}
                                      image={team[19].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative rotate-180" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}
                              </div>
                            </div>
                          </div>
                        )}




                        {team.length > 20 && (
                          <div className="lg:h-full hidden lg:block lg:pl-10">
                            <div className="h-full w-auto lg:w-[30vh] lg:min-w-[30vh]" data-scroll data-scroll-speed={0.75} data-scroll-direction="vertical">
                              <div className="w-full lg:mt-[-8vh] h-full">

                                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl21.current.open()}>
                                  <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[20].avatar.asset.url} alt={team[20].name} />

                                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[20].name}}></h3>
                                </button>

                                <ModalTeam
                                  ref={modalEl21}
                                  name={team[20].name}
                                  jobTitle={team[20].jobTitle}
                                  bio={team[20].bio}
                                  image={team[20].avatar.asset.url}
                                />

                                {team.length > 21 ? (
                                  <>
                                    <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl22.current.open()}>
                                      <img className="h-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                                      <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={team[21].avatar.asset.url} alt={team[21].name} />

                                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                                      <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: team[21].name}}></h3>
                                    </button>

                                    <ModalTeam
                                      ref={modalEl22}
                                      name={team[21].name}
                                      jobTitle={team[21].jobTitle}
                                      bio={team[21].bio}
                                      image={team[21].avatar.asset.url}
                                    />
                                  </>
                                ) : (
                                  <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                                )}

                                <img className="opacity-10 block w-full object-center object-cover will-change mb-6 lg:mb-16 relative" src="/images/team-placeholder.jpg" alt="Avatar" />
                              </div>
                            </div>
                          </div>
                        )} */}



                        
                      </m.section>

                      <m.section variants={fade} className="w-full lg:w-[110vmin] lg:min-w-[110vmin] lg:h-full whitespace-normal pl-[42px] pr-[25px] lg:pl-12 lg:pr-12 pb-[70px] lg:py-8 lg:flex lg:flex-wrap relative lg:border-r lg:border-soft-black-dark bg-off-white" id="careers">
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>
                        <div className="w-full mb-10 lg:mb-auto">
                          <div className="mb-6 lg:mb-12 lg:ml-[4px]">
                            <MetaText>{teamLanding.chapter2Title}</MetaText>
                          </div>

                          <h2 className="text-[10vw] lg:text-[10vmin] xl:text-[11vmin] 2xl:text-[12vmin] leading-[0.9] mb-6 lg:mb-12">{teamLanding.chapter2Heading}</h2>
                          
                          <div className="w-full lg:w-10/12 max-w-2xl text-base lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight mb-8 lg:mb-16 content content--large">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={teamLanding.chapter2Text} />
                          </div>

                          {/* <p className="w-full lg:w-10/12 max-w-2xl text-base lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight mb-8 lg:mb-16">We're always up for speaking to great people who are determined to make the renewable transition happen. If that sounds like you, say hello at <a className="underline hover:text-orange focus:text-orange transition-colors ease-in-out duration-300" href="mailto:careers@field.energy">careers@field.energy</a>.</p> */}
                        </div>
                        
                        <nav className="w-full mt-auto lg:mr-10">
                          <ul className={`border-t border-soft-black-dark`}>
                            {/* <li className="py-3 border-b border-soft-black-dark text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[42px]">
                              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-orange focus:text-orange transition ease-in-out duration-300">→ CTO</a>
                            </li> */}

                            {/* {careers.map((e, i) => {
                              return (
                                <li className={`py-3 border-b border-soft-black-dark text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[42px] ${careers.length > 4 ? 'w-full md:w-1/2' : ''}`} key={i}>
                                  <Link href={`/${e.slug.current}`}>
                                    <a className="hover:text-orange focus:text-orange transition ease-in-out duration-300">→ {e.title}</a>
                                  </Link>
                                </li>
                              )
                            })} */}
                            
                            <li className="py-0 xl:py-3 2xl:py-2 border-b border-soft-black-dark text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[42px]">
                              <a href="https://fieldenergy.applytojob.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange focus:text-orange transition ease-in-out duration-300 flex flex-wrap items-center leading-none py-5">See all open roles <span className="block ml-auto text-[44px] lg:text-[50px] xl:text-[58px] 2xl:text-[70px]">→</span></a>
                            </li>
                            {/* <li className="py-3 border-b border-soft-black-dark text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[42px]">
                              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-orange focus:text-orange transition ease-in-out duration-300">→ General Counsel</a>
                            </li> */}
                          </ul>
                        </nav>
                      </m.section>

                      <m.section variants={fade} className="min-w-[100vw] w-[100vw] bg-yellow h-[40vh] lg:h-full whitespace-nowrap relative overflow-hidden border-t border-soft-black-dark lg:border-t-0">
                        {/* <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div> */}
                        
                        <Image
                          layout="fill"
                          src={teamSupergraphic}
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
                          <div className="w-full mt-[-2vh] lg:mt-[-60vh] ml-[-2vw]" data-scroll data-scroll-direction="vertical" data-scroll-speed={2}>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
                            <span className="block leading-[0.8] uppercase italic text-[24vw] lg:ml-[-10px] will-change">Net Zero</span>
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