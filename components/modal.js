
import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { m, AnimatePresence } from 'framer-motion'

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function Modal({ children, defaultOpened = false, isOpenPass }, ref) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isOpen, setIsOpen] = useState(isOpenPass)
  const close = useCallback(() => setIsOpen(false), [])
  const size = useWindowSize();

  const modalTrayVariant = {
    // @TODO mobile state for x
    initial: { x: '-100%' },
    isOpen: { x: size.width > 1024 ? '90px' : '0px', transition: { type: "easeInOut", duration: 0.75, delay: 0.25, ease: [0.83, 0, 0.17, 1] }},
    exit: { x: '-100%', transition: { type: "easeInOut", duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
  };

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.75, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.75, delay: 0.25, ease: [0.83, 0, 0.17, 1] }}
  };

  const containerVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.75, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
            <div className="bg-black absolute inset-0 w-full h-full bg-opacity-80 z-[60]" onClick={close} />

            <m.div
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={modalTrayVariant}
              className={`absolute top-0 z-[70] w-[100vw] max-w-[490px] bg-off-white h-full left-0`}
            >
              <m.div
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
                variants={containerVariant}
                className="h-full overflow-y-scroll"
              >
                {children}
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

export default forwardRef(Modal)
