import Image from "next/image"
import Link from "next/link"
import logo from '../assets/logoo.png'

function Header() {
  return (
    <header className="flex items-start justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href='/'>
                <Image src={logo} width={50} height={50} className="rounded-full" alt="logo" />
            </Link>
            <h1>Taifa-Blog</h1>
        </div>
        <div>
            <Link href='/'
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
            >
                Sign up to the taifa-hub newsletter
            </Link>
        </div>
    </header>
  )
}

export default Header