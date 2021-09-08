export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { delay: 0.25, duration: 0.5, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
	}
}

export const scale = {
	initial: { scale: 0 },
  enter: { 
    scale: 1,
    transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 0,
		transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
	}
}

export const swipe1 = {
  initial: { x: '-100%' },
  enter: { 
    x: '-100%',
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    x: '0',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const swipe2 = {
  initial: { x: 0 },
  enter: { 
    x: '100%',
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    x: '100%',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}