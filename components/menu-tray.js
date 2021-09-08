import Link from 'next/link'
import MetaText from './meta-text'
import LogoMark from './logo-mark'
import { m, AnimatePresence } from 'framer-motion'
import { useContext, useState } from 'react';
import { Context } from '../context/state'

export default function MenuTray({ modalEl, route, showLogo, scroll, isOpenPass }) {
  const scrollToTop = () => {
    if (scroll) {
      scroll.scrollTo(document.querySelector('#hero'))
    }
  }
  const [isOpen, setIsOpen] = useState(isOpenPass)
  const [globalMenuOpen, setGlobalMenuOpen] = useContext(Context);

  console.log(isOpen)

  const reveal = {
    initial: { y: '100%' },
    isOpen: { y: 0, transition: { type: "easeInOut", duration: 0.55, delay: 0.2, ease: [0.83, 0, 0.17, 1] }},
    exit: { y: '100%', transition: { type: "easeInOut", duration: 0.55, delay: 0, ease: [0.83, 0, 0.17, 1] }}
  };

  return (
    <AnimatePresence>
      { globalMenuOpen ? (
      <div className="h-full flex flex-wrap py-6">
        <div className={`px-6 w-full mb-auto text-soft-black-dark ${showLogo ? 'opacity-0' : 'opacity-100'}`}>
          <LogoMark width="w-[62px]" />
        </div>
        
        <nav className="block w-full my-auto pt-8 pb-0 lg:py-8">
          <ul>
            <li className="block border-t border-soft-black-dark">
              <Link href="/" passHref>
                <a className={`flex items-center text-[13vw] md:text-[60px] lg:text-[55px] 2xl:text-[72px] leading-none my-5 px-6 relative group overflow-hidden hover:text-orange focus:text-orange transition-colors ease-in-out duration-500 ${route === '/' && 'text-orange'}`} onClick={() => modalEl.current.close() & scrollToTop()}>
                  <m.span 
                    initial={"initial"}
                    animate={"isOpen"}
                    exit={"exit"}
                    variants={reveal}
                    className="flex items-center"
                  >
                    <div className="absolute bottom-0 left-0 h-[1px] mb-[-1px] bg-orange w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-1000"></div>
                    <MetaText>01</MetaText>
                    <span className="block ml-2">Home</span>
                  </m.span>
                </a>
              </Link>
            </li>
            <li className="block border-t border-soft-black-dark">
              <Link href="/mission" onClick={scrollToTop}>
                <a className={`flex items-center text-[13vw] md:text-[60px] lg:text-[55px] 2xl:text-[72px] leading-none my-5 px-6 relative group overflow-hidden hover:text-orange focus:text-orange transition-colors ease-in-out duration-500 ${route === '/mission' && 'text-orange'}`} onClick={() => modalEl.current.close() & scrollToTop()}>
                  <m.span 
                    initial={"initial"}
                    animate={"isOpen"}
                    exit={"exit"}
                    variants={reveal}
                    className="flex items-center"
                  >
                    <div className="absolute bottom-0 left-0 h-[1px] mb-[-1px] bg-orange w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-1000"></div>
                    <MetaText>02</MetaText>
                    <span className="block ml-2">Mission</span>
                  </m.span>
                </a>
              </Link>
            </li>
            <li className="block border-t border-b border-soft-black-dark">
              <Link href="/team" onClick={scrollToTop}>
                <a className={`flex items-center text-[13vw] md:text-[60px] lg:text-[55px] 2xl:text-[72px] leading-none my-5 px-6 relative group overflow-hidden hover:text-orange focus:text-orange transition-colors ease-in-out duration-500 ${route === '/team' && 'text-orange'}`} onClick={() => modalEl.current.close() & scrollToTop()}>
                  <m.span 
                    initial={"initial"}
                    animate={"isOpen"}
                    exit={"exit"}
                    variants={reveal}
                    className="flex items-center"
                  >
                    <div className="absolute bottom-0 left-0 h-[1px] mb-[-1px] bg-orange w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-1000"></div>
                    <MetaText>03</MetaText>
                    <span className="block ml-2">Team</span>
                  </m.span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="full mt-auto pb-0 lg:pb-0">
          <nav className="block mb-2">
            <ul>
              <li className="block px-6 relative overflow-hidden pb-0 my-2">
                <m.span 
                  initial={"initial"}
                  animate={"isOpen"}
                  exit={"exit"}
                  variants={reveal}
                  className="block"
                >
                  <a href="mailto:hello@field.energy" className={`block text-xl lg:text-2xl leading-none hover:text-orange focus:text-orange transition-colors ease-in-out duration-500`} onClick={() => modalEl.current.close()}>Contact us</a>
                </m.span>
              </li>
            </ul>
          </nav>

          <span className="block px-6 text-[#9696A0] text-[14px]">
            Virmati Energy Ltd, trading as Field. Company number 13095982.<br/>
            &copy; {new Date().getFullYear()} &bull; <Link href="/privacy"><a onClick={() => modalEl.current.close()} className="hover:text-soft-black-dark focus:text-soft-black-dark transition-colors ease-in-out duration-300 hover:underline focus:underline">Privacy Policy</a></Link>
          </span>
        </div>
      </div>
      ) : null }
    </AnimatePresence>
  )
}