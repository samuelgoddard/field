import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ScrollToButton({ children, scrollTarget }) {
  const { scroll } = useLocomotiveScroll()
  let scrollTargetElement = null;

  const scrollToArea = () => {
    scrollTargetElement = document.querySelector(scrollTarget)
    if (scroll) {
      scroll.scrollTo(scrollTargetElement)
    }
  }

  return (
    <button onClick={scrollToArea} className="block w-full hover:border-0 focus:border-0 hover:outline-none focus:outline-none group">
      {children}
    </button>
  )
}