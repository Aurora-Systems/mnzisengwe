import Image from "next/image"
import Link from "next/link"

const Footer=()=>{
    return(
        <div className="bcc py-3 text-white ">
            <div className="d-flex cntainer justify-content-center">

            <div className="row  justify-content-center container  ">
                <div className="col-sm">
                    <Image src="https://ngratesc.sirv.com/global_wisdom/logo.png" className="img_invert img_fluid" height={60}  width={70} alt="logo"/>
                    <br/>
                    <span>Empowering authors worldwide since 2017. Your story deserves to be told.</span>
                </div>
                <div className="col-sm d-flex flex-column text-white">
                    <p className="fw-bold text-warning">Contact Details</p>
                    <Link href="mailto:info@globalwisdom.com" className="text-white"> info@globalwisdom.com</Link>
                    <Link href="tel:+263777358130>+263 77 735 8130" className="text-white">+263 77 735 8130</Link>
                    <span>Office 1, Unforgettable Building, Bulawayo <br/> Zimbabwe</span>

                </div>
                <div className="col-sm d-flex flex-column text-white">
                    <p className="fw-bold text-warning">Quick Links</p>
                    <Link href="/" className="text-white"> Home</Link>
                    <Link href="/about" className="text-white">About</Link>
                    <Link href="/shop" className="text-white">Shop</Link>
                    <Link href="/blog" className="text-white">Blog</Link>
                    <Link href="/contact" className="text-white">Contact</Link>
                </div>
                <div className="col-sm">
                        <p className="fw-bold text-warning">Subscribe To Our Newsletter</p>
                            <iframe className="rounded w-100" src="https://globalwisdom.substack.com/embed"></iframe>

                </div>

            </div>
                        </div>

            <hr className="w-100" />
            <div className="text-center">
                <small>© {new Date().getFullYear()} Global Wisdom Press. All rights reserved</small>
            </div>
        </div>

    )
}

export default Footer