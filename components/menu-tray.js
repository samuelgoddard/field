import Link from 'next/link'
import Logo from '@/components/logo'
import MetaText from './meta-text'

export default function MenuTray({ modalEl, route }) {
  return (
    <div className="h-full flex flex-wrap py-8">
      <div className="px-8 w-full mb-auto">
        <Logo width="w-32" />
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

      <nav className="block w-full mt-auto pb-6 lg:pb-0">
        <ul>
          <li className="block px-8">
            <Link href="/">
              <a className={`block text-xl leading-none py-2 ${route === '/' && ''}`} onClick={() => modalEl.current.close()}>Contact Us</a>
            </Link>
          </li>
          <li className="block px-8">
            <Link href="/">
            <a className={`block text-xl leading-none py-2 ${route === '/' && ''}`} onClick={() => modalEl.current.close()}>Terms &amp; Conditions</a>
            </Link>
          </li>
          <li className="block px-8">
            <Link href="/">
            <a className={`block text-xl leading-none py-2 ${route === '/' && ''}`} onClick={() => modalEl.current.close()}>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}