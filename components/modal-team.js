
import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { m, AnimatePresence } from 'framer-motion'
import MetaText from './meta-text';

export function ModalTeam({ children, name, jobTitle, bio, defaultOpened = false }, ref) {
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
            className={`fixed z-[70] h-full inset-0 flex items-center justify-center w-full`}
          >
            <div className="bg-black absolute inset-0 w-full h-full bg-opacity-80 z-[60] flex items-center jusfity-center" onClick={close} />

            <m.div
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={modalTrayVariant}
              className={`z-[70] w-[85%] lg:w-1/2 bg-off-white h-[85%] lg:h-[37vh] left-0`}
            >
              <m.div
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
                variants={containerVariant}
                className="h-full"
              >
                <div className="flex flex-wrap h-full relative overflow-hidden">
                  <div className="w-full lg:w-1/3 h-[40vh] lg:h-full border-r border-soft-black-dark absolute top-0 left-0 right-0 lg:right-auto lg:bottom-0">
                    <img className="block w-full h-full object-top object-cover will-change absolute inset-0" src="/images/avatar.jpg" alt="Avatar" />
                  </div>

                  <div className="w-full lg:w-2/3 ml-auto h-full overflow-y-scroll pt-[45vh] p-6 lg:p-10 lg:pt-10">
                    <MetaText>{jobTitle}</MetaText>
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl block uppercase italic mt-2">{name}</h2>

                    <div className="content" dangerouslySetInnerHTML={{ __html: bio }}>
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