import Link from "next/link"
import Image from "next/image"
export default function Footer(){
  return(
    <footer className="footer">
            <div className="footerBrand">
              <div className="brandText">
                <div className="brand">
                <img
                  src="/images/logo.png" 
                  alt="Virtual Office Anywhere"
                  className="brandLogo"
                />
              </div>

              </div>
            </div>
            <div className="footerCopy">© 2025 Virtual Office Anywhere. All rights reserved.</div>
          </footer>
  )
}
