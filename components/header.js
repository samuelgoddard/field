import { useContext, useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Modal from '@/components/modal'
import MenuTray from "./menu-tray";
import { Context } from "../context/state";
import Logo from "./logo";
import Link from "next/link";

export default function Header({ route }) {
  const { scroll } = useLocomotiveScroll()
  const [showLogo, setShowLogo] = useState(false)
  const modalEl = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [globalMenuOpen, setGlobalMenuOpen] = useContext(Context);

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.x / limit.x * 100
        
        if (progress > 4) {
          setShowLogo(true)
        } else {
          setShowLogo(false)
        } 
      })
    }
  }, [scroll, showLogo])

  const toggleModal = () => {
    setGlobalMenuOpen(!globalMenuOpen)

    if (globalMenuOpen) {
      modalEl.current.close()
    } else {
      modalEl.current.open()
    } 
  }
  
  return (
    <>
      <div className="w-auto mb-auto px-[40px] pt-[25px] pb-12 lg:py-8 fixed top-0 left-0 lg:hidden z-[50] text-soft-black-dark">
        <Link href="/">
          <a className="inline-block relative z-[60]">
            <Logo width="w-[140px] lg:w-[240px]" />
          </a>
        </Link>
      </div>

      <div className="w-full fixed top-0 left-0 right-0 h-[80px] lg:hidden z-[40] text-soft-black-dark border-b border-soft-black-dark">
        {/* <img className="w-full h-full absolute inset-0 z-0 object-cover object-top-left" src="/images/supergraphic.jpg" alt="Field Supergraphic" /> */}
      </div>

      <header className="fixed top-0 right-0 lg:left-0 lg:right-auto lg:bottom-0 h-[75px] lg:h-full w-[90px] lg:w-[90px] lg:border-r border-soft-black-dark z-[100] flex items-center justify-end pl-[25px] pr-[20px] lg:px-0 lg:justify-center overflow-hidden">

        <img className="hidden lg:block w-full h-full absolute inset-0 z-0 object-cover object-right-bottom" src="/images/supergraphic.jpg" alt="Field Supergraphic" />
        
        <div className="grain grain--over hidden lg:block z-[4]"></div>

        {/* Menu Button */}
        <button className="w-[45px] lg:w-[55px] h-[45px] lg:h-[55px] rounded-full flex items-center justify-center bg-off-white relative overflow-hidden group hover:text-off-white transition-colors ease-in-out duration-300" onClick={() => toggleModal() }>
          <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>

          <div className={`w-full flex flex-wrap justify-center relative z-10 mt-[6px]`}>

            <div className={`w-full flex flex-wrap justify-center overflow-hidden relative z-10 mb-[5px] transition-opacity  ${globalMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="w-[52%] h-[3px] bg-soft-black-dark block transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full"></span>

              <span className="w-[52%] h-[3px] bg-off-white absolute inset-0 mx-auto block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full"></span>
            </div>

            <div className={`w-full flex flex-wrap justify-center overflow-hidden relative z-10 mb-[5px] transition-opacity  ${globalMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="w-[52%] h-[3px] bg-soft-black-dark block transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full"></span>

              <span className="w-[52%] h-[3px] bg-off-white absolute inset-0 mx-auto block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full"></span>
            </div>
            
            <div className={`absolute inset-0 mt-[-6px] lg:mt-[-5px] ml-[-1px] flex items-center justify-center transition-opacity  ${globalMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357"><path fill="currentColor" d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>
            </div>
          </div>

          {/* <span className="menu-button block w-full h-full absolute bottom-0 left-0 right-0 bg-off-white z-0"></span> */}
        </button>


        {/* <span className="w-full block bg-soft-black-dark-dark text-off-white uppercase text-center rounded-full px-4 lg:px-8 py-3 lg:py-3 text-[16px] lg:text-[50px] relative overflow-hidden leading-[0.8]">
        <span className="absolute inset-0 w-0 bg-off-white group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>
        <span className="block overflow-hidden relative">
          <span className="block relative z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full mt-[-6px]">→</span>
          <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-soft-black-dark mt-[-6px]">→</span>
        </span>
      </span> */}

        {/* Menu Tray */}
        <Modal ref={modalEl} isOpenPass={isOpen}>
          <MenuTray scroll={scroll} showLogo={showLogo} modalEl={modalEl} route={route} isOpenPass={isOpen} />
        </Modal>
      </header>
    </>
  )
}