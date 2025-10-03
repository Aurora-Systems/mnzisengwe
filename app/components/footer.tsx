import Image from "next/image"
import Link from "next/link"

const Footer=()=>{
    return(
        <div className="bcc py-3 text-white ">
            <div className="d-flex cntainer justify-content-center">

            <div className="row  justify-content-center container  ">
                <div className="col-sm">
                    <p className="ts ">M.N Zisengwe</p>
                    <span className="text-black">Discover the vibrant voice of M.N. Zisengwe, where faith, humor, and Zimbabwean stories come alive on every page</span>
                </div>
                <div className="col-sm d-flex flex-column  ">
                    <p className="fw-bold ts">Contact Details</p>
                    <Link href="mailto:thoughtsbymercedes@gmail.com"  className="text-black">thoughtsbymercedes@gmail.com</Link>
                    {/* <Link href="tel:+263775388608" className="text-black">+263 77 538 8608</Link> */}
                    <Link href="https://www.facebook.com/profile.php?id=61570416176107" className="text-black">Facebook</Link>
                    <Link href="https://www.instagram.com/thoughtsbymutsaaah" className="text-black">Instagram</Link>

                </div>
                <div className="col-sm d-flex flex-column ">
                    <p className="fw-bold ts ">Quick Links</p>
                    <Link href="/" className="text-black"> Home</Link>
                    <Link href="#about" className="text-black">About</Link>
                    <Link href="#shop" className="text-black">Shop</Link>
                    <Link href="/blog" className="text-black">Blog</Link>
                </div>
                <div className="col-sm">
                        <p className="fw-bold ts">Subscribe To My Blog</p>
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