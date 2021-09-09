import { useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Header from '@/components/header'
import ProgressBar from '@/components/progress-bar'
import { fade, reveal, scale, swipe1, swipe2 } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Logo from '@/components/logo'
import MetaText from '@/components/meta-text'
import ScrollToButton from '@/components/scroll-to-button'
import Link from 'next/link'
import { IntroContext } from '../context/intro'

const query = `*[_type == "careers" && slug.current == $slug][0]{
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  date,
  title,
  roleType,
  text,
  workingType,
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function Privacy(initialData) {
  const { data: { seo, title, slug, date, roleType, workingType, text }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
  
  const containerRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo title={title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className={introContext ? 'opacity-100' : 'opacity-0'}
        >
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-off-white" variants={swipe1}></m.div>
          <m.div className="fixed inset-0 z-[200000] pointer-events-none bg-off-white" variants={swipe2}></m.div>
        </m.div>
        
        <LocomotiveScrollProvider
          options={{ smooth: true, lerp: 0.125, tablet: { smooth: false, breakpoint: 1024 }}}
          containerRef={containerRef}
          watch={[]}
        >
          <Header route={router.asPath} />

          <a href={`mailto:careers@field.energy?subject=${title}`} className="flex items-center z-[60] leading-none transition-colors ease-in-out duration-300 bg-orange hover:bg-soft-black-dark focus:bg-soft-black-dark text-right fixed top-0 right-0 mt-[15px] lg:mt-5 mr-20 lg:mr-6 text-off-white uppercase px-6 lg:px-10 py-[13px] lg:py-4 rounded-full text-[17px] lg:text-[20px]">Apply</a>

            <div data-scroll-container ref={containerRef} id="scroll-container" className="relative z-[10]">
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
                          <div className="border-b border-soft-black-dark pl-[15px] lg:pl-[75px] pt-4 pb-4 flex">
                            <Link href="/team">
                              <a className="flex items-center relative z-[60] py-3 leading-none w-1/2"><span className="block rotate-180 text-[25px] lg:text-[40px] mb-[-4px] lg:mb-[-5px]">→</span><span className="block ml-[5px] lg:ml-[6px] lg:text-xl">Back</span></a>
                            </Link>
                          </div>
                          
                          <div className="pl-[15px] lg:pl-[75px] py-8 lg:py-20 border-b border-soft-black-dark">
                            <h1 className="text-[16vw] lg:text-[110px] xl:text-[130px] 2xl:text-[150px] block leading-[0.9] lg:w-7/12">{title}</h1>

                            <div className="lg:flex lg:space-x-9">
                              <span className="flex items-center lg:text-lg mt-10">
                                <m.span variants={fade} className="block w-3 h-3 mr-2 rounded-full bg-orange"></m.span>
                                
                                <span className="block overflow-hidden leading-none">
                                  <m.span variants={fade} className="block">
                                    Posted: {`${da} ${mo} ${ye}`}
                                  </m.span>
                                </span>
                              </span>

                              <span className="flex items-center lg:text-lg lg:mt-10">
                                <m.span variants={fade} className="block w-3 h-3 mr-2 rounded-full bg-orange"></m.span>
                                <span className="block overflow-hidden leading-none">
                                  <m.span variants={fade} className="block">
                                    {roleType}
                                  </m.span>
                                </span>
                              </span>

                              <span className="flex items-center lg:text-lg lg:mt-10">
                                <m.span variants={fade} className="block w-3 h-3 mr-2 rounded-full bg-orange"></m.span>
                                <span className="block overflow-hidden leading-none">
                                  <m.span variants={fade} className="block">
                                    {workingType}
                                  </m.span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="relative" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <div className="relative pl-[0px] lg:pl-[90px]">
                          <div className="px-[30px] py-[40px] pb-[70px] lg:p-[75px] lg:pb-[120px] w-11/12 lg:w-8/12 ml-auto lg:border-l lg:border-soft-black-dark">
                            <div className="max-w-5xl content">
                              <BlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </m.main>
                </m.div>
              </div>
            </div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('careers')
  return {
    paths: paths,
    fallback: false,
  };
}