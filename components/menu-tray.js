import Link from 'next/link'
import MetaText from './meta-text'
import LogoMark from './logo-mark'

export default function MenuTray({ modalEl, route }) {
  return (
    <div className="h-full flex flex-wrap py-8">
      <div className="px-8 w-full mb-auto">
        <LogoMark width="w-[62px]" />
      </div>
      
      <nav className="block w-full my-auto py-8">
        <ul>
          <li className="block border-t border-soft-black-dark">
            <Link href="/">
              <a className={`flex items-center text-[11vw] lg:text-[55px] 2xl:text-[72px] leading-none py-5 px-8 relative group hover:text-orange focus:text-orange transition-colors ease-in-out duration-500 ${route === '/' && 'text-orange'}`} onClick={() => modalEl.current.close()}>
                <div className="absolute bottom-0 left-0 h-[1px] mb-[-1px] bg-orange w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-1000"></div>
                <MetaText>01</MetaText>
                <span className="block ml-2">Home</span>
              </a>
            </Link>
          </li>
          <li className="block border-t border-soft-black-dark">
            <Link href="/mission">
              <a className={`flex items-center text-[11vw] lg:text-[55px] 2xl:text-[72px] leading-none py-5 px-8 relative group hover:text-orange focus:text-orange transition-colors ease-in-out duration-500 ${route === '/mission' && 'text-orange'}`} onClick={() => modalEl.current.close()}>
                <div className="absolute bottom-0 left-0 h-[1px] mb-[-1px] bg-orange w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-1000"></div>
                <MetaText>02</MetaText>
                <span className="block ml-2">Mission</span>
              </a>
            </Link>
          </li>
          <li className="block border-t border-b border-soft-black-dark">
            <Link href="/team">
              <a className={`flex items-center text-[11vw] lg:text-[55px] 2xl:text-[72px] leading-none py-5 px-8 relative group hover:text-orange focus:text-orange transition-colors ease-in-out duration-500 ${route === '/team' && 'text-orange'}`} onClick={() => modalEl.current.close()}>
                <div className="absolute bottom-0 left-0 h-[1px] mb-[-1px] bg-orange w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-1000"></div>
                <MetaText>03</MetaText>
                <span className="block ml-2">Team</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="full mt-auto pb-6 lg:pb-0">
        <nav className="block mb-5">
          <ul>
            <li className="block px-8">
              <a href="mailto:hello@field.energy" className={`block text-2xl leading-none py-2 hover:text-orange focus:text-orange transition-colors ease-in-out duration-500`} onClick={() => modalEl.current.close()}>Contact Us</a>
            </li>
          </ul>
        </nav>

        <span className="block px-8 text-[#9696A0] text-[14px]">
          Virmati Energy Ltd, trading as Field. Company number 13095982.<br/>
          &copy; {new Date().getFullYear()} &bull; <Link href="/privacy"><a onClick={() => modalEl.current.close()} className="hover:text-soft-black-dark focus:text-soft-black-dark transition-colors ease-in-out duration-300 hover:underline focus:underline">Privacy Policy</a></Link>
        </span>
      </div>
    </div>
  )
}