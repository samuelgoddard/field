import Link from 'next/link'

export default function MenuTray({ modalEl, route }) {
  return (
    <div className="p-8">
      <nav>
        <ul>
          <li className="block">
            <Link href="/">
              <a className={`inline-block text-[32px] font-bold ${route === '/' && 'border-b border-current'}`} onClick={() => modalEl.current.close()}>Home</a>
            </Link>
          </li>
          <li className="block">
            <Link href="/about">
            <a className={`inline-block text-[32px] font-bold ${route === '/about' && 'border-b border-current'}`} onClick={() => modalEl.current.close()}>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}