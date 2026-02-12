import Link from "next/link"
import Image from "next/image"
export default function Header(){
  return(
    <header className="nav">
        <div className="container navInner">
          <div className="brand">
            {/* Logo Image */}
            <Image
              src="/images/logo.png"
              alt="Virtual Office Anywhere Logo"
              width={150}
              height={50}
              className="brandLogo"
            />
          </div>


          <nav className="navLinks" aria-label="Primary">
            <Link href="#">Plans</Link>
            <Link href="/Listing">Locations</Link>
            <Link href="#">Support</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link className="navLogin" href="#">
              Login
            </Link>
          </nav>
        </div>
      </header>
  )
}
