import { useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Header from '@/components/header'
import ProgressBar from '@/components/progress-bar'
import { fade } from '@/helpers/transitions'
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

const query = `{
  "privacy": *[_type == "privacy"][0]{
    title,
    text,
    date,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Privacy(initialData) {
  const { data: { privacy }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  let d = new Date(privacy.date);
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
      <NextSeo title="Privacy Policy" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.125, tablet: { smooth: false, breakpoint: 1024 }}}
        containerRef={containerRef}
        watch={[]}
      >
        <LazyMotion features={domAnimation}>
          <Header route={router.asPath} />
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
                          <div className="border-b border-soft-black-dark pl-[15px] lg:pl-[75px] pt-4 pb-4">
                            <Link href="/">
                              <a className="flex items-center relative z-[60] py-3 leading-none w-1/2"><span className="block rotate-180 text-[25px] lg:text-[40px] mb-[-4px] lg:mb-[-5px]">→</span><span className="block ml-[5px] lg:ml-[6px] lg:text-xl">Back</span></a>
                            </Link>
                          </div>
                          <div className="pl-[15px] lg:pl-[75px] py-8 lg:py-20 border-b border-soft-black-dark">
                            <h1 className="text-[16vw] lg:text-[110px] xl:text-[130px] 2xl:text-[150px] block leading-[0.9]">Privacy<br/>Policy</h1>

                            <span className="flex items-center lg:text-lg mt-10">
                              <span className="block w-3 h-3 mr-2 rounded-full bg-orange"></span>
                              <span className="block">Last Updated: {da} {mo} {ye}</span>
                            </span>
                          </div>
                        </div>
                      </section>

                      <section className="relative" data-scroll-section>
                        <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-transparent backdrop-blur-3xl"></div>

                        <div className="relative pl-[0px] lg:pl-[90px]">
                          <div className="px-[30px] py-[40px] pb-[70px] lg:p-[75px] lg:pb-[120px] w-11/12 lg:w-8/12 ml-auto lg:border-l lg:border-soft-black-dark">
                            <div className="max-w-5xl content">
                              <BlockContent serializers={{ container: ({ children }) => children }} blocks={privacy.text} />
                            </div>
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

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}