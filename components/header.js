import { useEffect, useRef, useState } from "react";
// import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Modal from '@/components/modal'
import MenuTray from "./menu-tray";

export default function Header({ route }) {
  // const { scroll } = useLocomotiveScroll()
  const modalEl = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
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


  const toggleModal = () => {
    setIsOpen(!isOpen)

    if (isOpen) {
      modalEl.current.close()
    } else {
      modalEl.current.open()
    } 
  }
  
  return (
    <header className="fixed top-0 right-0 lg:left-0 lg:right-auto lg:bottom-0 h-[75px] lg:h-full w-[90px] lg:w-[90px] lg:border-r border-soft-black-dark z-[100] flex items-center justify-end pl-[25px] pr-[20px] lg:px-0 lg:justify-center">

      <img className="hidden lg:block w-full h-full absolute inset-0 z-0 object-cover object-right-bottom" src="/images/supergraphic.jpg" alt="Field Supergraphic" />

      {/* Menu Button */}
      <button className="w-[45px] lg:w-[55px] h-[45px] lg:h-[55px] rounded-full flex items-center justify-center bg-off-white relative overflow-hidden group" onClick={() => toggleModal() }>
        <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>

        <div className="w-full flex flex-wrap justify-center relative z-10 overflow-hidden mt-[6px]">
          <div className={`w-full flex flex-wrap justify-center overflow-hidden relative z-10 mb-[5px]`}>
            <span className="w-[52%] h-[3px] bg-soft-black-dark block transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full"></span>

            <span className="w-[52%] h-[3px] bg-off-white absolute inset-0 mx-auto block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full"></span>
          </div>


          <div className={`w-full flex flex-wrap justify-center overflow-hidden relative z-10 mb-[5px]`}>
            <span className="w-[52%] h-[3px] bg-soft-black-dark block transition-transform ease-in-out duration-[600ms] group-hover:translate-y-full"></span>

            <span className="w-[52%] h-[3px] bg-off-white absolute inset-0 mx-auto block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full"></span>
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
      <Modal ref={modalEl}>
        <MenuTray modalEl={modalEl} route={route} />
      </Modal>
    </header>
  )
}