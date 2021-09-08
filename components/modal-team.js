
import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import BlockContent from '@sanity/block-content-to-react'
import { m, AnimatePresence } from 'framer-motion'
import MetaText from './meta-text';

export function ModalTeam({ children, image, name, jobTitle, bio, defaultOpened = false }, ref) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpened)
  const close = useCallback(() => setIsOpen(false), [])

  const modalTrayVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.6, delay: 0.2, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
  };

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.6, delay: 0.25, ease: [0.83, 0, 0.17, 1] }}
  };

  const containerVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
  };

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    setIsBrowser(true);
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  if (isBrowser) {
    return createPortal(
      <>
      <AnimatePresence>
        { isOpen ? (
          <m.div 
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariant}
            className={`fixed z-[100] h-full inset-0 flex items-center justify-center w-full`}
          >
            <div className="bg-black absolute inset-0 w-full h-full bg-opacity-80 z-[60] flex items-center jusfity-center" onClick={close} />

            <m.div
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={modalTrayVariant}
              className={`z-[100] w-[85%] lg:w-1/2 bg-off-white min-h-[75%] h-[75%] lg:min-h-[50vh] lg:h-[50vh] left-0`}
            >
              <m.div
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
                variants={containerVariant}
                className="h-full"
              >
                <div className="flex flex-wrap h-full relative overflow-hidden">

                <button className="w-[45px] lg:w-[45px] h-[45px] lg:h-[45px] rounded-full flex items-center justify-center bg-off-white-dark hover:text-off-white overflow-hidden group absolute top-0 right-0 m-5 transition-colors ease-in-out duration-500" onClick={close}>
                  <span className="absolute inset-0 w-0 bg-soft-black-dark group-hover:w-full transition-all ease-in-out duration-[600ms]"></span>

                  <div className="w-full flex flex-wrap justify-center relative z-10 overflow-hidden mt-[3px]">
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357"><path fill="currentColor" d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>
                  </div>

                </button>

                  <div className="w-full lg:w-1/3 h-[40vh] lg:h-full border-r border-soft-black-dark absolute top-0 left-0 right-0 lg:right-auto lg:bottom-0 hidden lg:block overflow-hidden">
                    <img className="block w-full h-full object-top object-cover will-change absolute inset-0 scale-[1.02]" src={image} alt={name} />
                  </div>

                  <div className="w-full lg:w-2/3 ml-auto h-full overflow-y-scroll p-6 lg:p-10 lg:pt-10">
                    <div className="mb-5 w-10/12">
                      <MetaText>{jobTitle}</MetaText>
                    </div>

                    <h2 className="text-4xl lg:text-4xl 2xl:text-5xl block uppercase italic leading-[1] lg:leading-[0.9] mt-2 lg:mb-8">{name}</h2>

                    <div className="content leading-snug lg:leading-none lg:text-base">
                      <BlockContent serializers={{ container: ({ children }) => children }} blocks={bio} />
                    </div>
                  </div>
                </div>
              </m.div>
            </m.div>
          </m.div>
        ) : null }
      </AnimatePresence>
      </>,
      document.getElementById("modal-root")
    )
  } else {
    return null;
  }
}

export default forwardRef(ModalTeam)
