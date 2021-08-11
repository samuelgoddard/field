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
          <li className="block px-8 border-t border-soft-black-dark">
            <Link href="/">
              <a className={`flex items-center text-[12vw] lg:text-[72px] leading-none py-5 ${route === '/about' && ''}`} onClick={() => modalEl.current.close()}>
                <MetaText>01</MetaText>
                <span className="block ml-2">Home</span>
              </a>
            </Link>
          </li>
          <li className="block px-8 border-t border-soft-black-dark">
            <Link href="/mission">
              <a className={`flex items-center text-[12vw] lg:text-[72px] leading-none py-5 ${route === '/mission' && ''}`} onClick={() => modalEl.current.close()}>
                <MetaText>02</MetaText>
                <span className="block ml-2">Mission</span>
              </a>
            </Link>
          </li>
          <li className="block px-8 border-t border-b border-soft-black-dark">
            <Link href="/team">
              <a className={`flex items-center text-[12vw] lg:text-[72px] leading-none py-5 ${route === '/team' && ''}`} onClick={() => modalEl.current.close()}>
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
              <a href="mailto:hello@field.energy" className={`block text-2xl leading-none py-2`} onClick={() => modalEl.current.close()}>Contact Us</a>
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