import Image from "next/image"
import Link from "next/link"

const Footer=()=>{
    return(
        <div className="bcc py-3 text-white ">
            <div className="d-flex cntainer justify-content-center">

            <div className="row  justify-content-center container  ">
                <div className="col-sm">
                    <h4>M.N Zisengwe</h4>
                    <br/>
                    <span>Discover the vibrant voice of M.N. Zisengwe, where faith, humor, and Zimbabwean stories come alive on every page</span>
                </div>
                <div className="col-sm d-flex flex-column text-white">
                    <p className="fw-bold ">Contact Details</p>
                    <Link href="mailto:info@globalwisdom.com" className="text-white">pheonixconsultancy86@gmail.com</Link>
                    <Link href="tel:+263775388608" className="text-white">+263 77 538 8608</Link>
                    <Link href="https://www.facebook.com/chipangurafaith/" className="text-white">Facebook</Link>
                    <Link href="https://www.instagram.com/phoenixpublishing_zw" className="text-white">Instagram</Link>

                </div>
                <div className="col-sm d-flex flex-column text-white">
                    <p className="fw-bold ">Quick Links</p>
                    <Link href="/" className="text-white"> Home</Link>
                    <Link href="#about" className="text-white">About</Link>
                    <Link href="#shop" className="text-white">Shop</Link>
                    <Link href="/blog" className="text-white">Blog</Link>
                </div>
                <div className="col-sm">
                        <p className="fw-bold ">Subscribe To My Blog</p>
                            <iframe className="rounded w-100" src="https://mnzisengwe.substack.com/embed"></iframe>

                </div>

            </div>
                        </div>

            <hr className="w-100" />
            <div className="text-center">
                <small>© {new Date().getFullYear()} M.N Zisengwe. All rights reserved</small>
            </div>
        </div>

    )
}

export default Footer