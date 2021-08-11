import { useEffect, useRef } from "react";
// import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Modal from '@/components/modal'
import MenuTray from "./menu-tray";

export default function Header({ route }) {
  // const { scroll } = useLocomotiveScroll()
  const modalEl = useRef(null)
  // let progressBar = null;

  // Monitor Page Scroll Progress Percent
  // useEffect(() => {
  //   progressBar = document.querySelector('.menu-button')
  //   if (scroll) {
  //     scroll.on('scroll', ({ limit, scroll }) => {
  //       const progress = scroll.x / limit.x * 100
  //       progressBar.style.height = `${progress}%`
  //     })
  //   }
  // }, [scroll])
  
  return (
    <header className="fixed top-0 left-0 right-0 lg:right-auto lg:bottom-0 h-[80px] lg:h-full w-full lg:w-[90px] lg:border-r border-soft-black-dark z-[50] flex items-center justify-end px-[25px] lg:px-0 lg:justify-center">

      <img className="hidden lg:block w-full h-full absolute inset-0 z-0 object-cover object-right-bottom" src="/images/supergraphic.jpg" alt="Field Supergraphic" />

      {/* Menu Button */}
      <button className="w-[45px] lg:w-[55px] h-[45px] lg:h-[55px] rounded-full flex items-center justify-center bg-off-white-dark bg-opacity-30 relative overflow-hidden" onClick={() => modalEl.current.open()}>
        <div className="w-full flex flex-wrap justify-center relative z-10">
          <span className="w-[52%] h-[3px] bg-soft-black block mb-[5px]"></span>
          <span className="w-[52%] h-[3px] bg-soft-black block"></span>
        </div>
        <span className="menu-button block w-full h-full absolute bottom-0 left-0 right-0 bg-off-white z-0"></span>
      </button>

      {/* Menu Tray */}
      <Modal ref={modalEl}>
        <MenuTray modalEl={modalEl} route={route} />
      </Modal>
    </header>
  )
}