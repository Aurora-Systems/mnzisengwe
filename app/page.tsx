import Image from "next/image";
import Link from "next/link";
import { BgImg } from "./components/bg_img";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const sample_data = [
    {
    title: "After The Burial",
    img:"https://ngratesc.sirv.com/global_wisdom/book3.jpg",
    author:"Author Name",
    price: "$15,00"
  },
   {
    title: "Just Trust God My Brother",
    img:"https://ngratesc.sirv.com/global_wisdom/boook2.jpg",
    author:"Author Name",
    price: "$15,00"
  },
   {
    title: "Dear World",
    img:"https://ngratesc.sirv.com/global_wisdom/File.jpg",
    author:"Author Name",
    price: "$15,00"
  },
   {
    title: "The Highway Code Of Life",
    img:"https://ngratesc.sirv.com/global_wisdom/book.jpg",
    author:"Author Name",
    price: "$15,00"
  }
]
  return (
    <div >
      <main className="bc d-flex justify-content-center align-items-center vh-100 position-relative">
        <Fade>
        <div className="container text-center text-white">
          <h1 className="display-1 fw-bold ">
            Illuminate Your
            <span className="text-warning"> Story</span>
          </h1>
          <p>From manuscript to masterpiece, Global Wisdom transforms your vision into published reality</p>
          <div className="d-flex  flex-row flex-wrap justify-content-center gap-2">
            <Link href="/contact"><button className="btn btn-warning">Start Your Journey</button></Link>
            <Link href="/shop"><button className="btn btn-outline-warning">Browse Books</button></Link>
          </div>

        </div>
        </Fade>
        <video className="video" src="https://ngratesc.sirv.com/global_wisdom/6143904-sd_960_506_25fps.mp4" muted preload="true" loop autoPlay={true}></video>

      </main>
      <div className="min-vh-100 container d-flex flex-column justify-content-center align-items-center text-center py-3">
        <div className="row align-items-center">
          <div className="col-sm mb-3">
            <Fade cascade direction="up">
            <h2 className="display-1 fw-bold mb-4"><span className="tp">Your Story</span>, <span className="text-warning">Our Passion</span></h2>
            <p className="">
              At Global Wisdom Printing Press, we believe every story deserves to be told.
              Whether you're an aspiring author or a seasoned writer, we're here to help you bring your vision to life.
            </p>
            <Link href="/about" className="btn btn-warning ">Learn More</Link>
            </Fade>
          </div>
          <div className="col-sm mb-3">
            <Fade direction="down">
            <Image src="https://ngratesc.sirv.com/global_wisdom/boook2.jpg" height={500} width={500} className="img-fluid rounded" alt="person on a typewrite" />
            </Fade>
          </div>
        </div>

      </div>
      <div className="text-center  bcc text-white d-flex align-items-center min-vh-100">
        <div className="container p-3">
          <Fade cascade direction="down">
          <h1 className="display-1  fw-bold ">Publishing Services</h1>
          <div className="row gap-3">
            <div className="col-sm rounded border shadow py-3">
              <h1 className="display-1 text-warning"><i className="bi bi-pen"></i></h1>

              <p className="fw-bold ">Book Publishing</p>
              <p>
                Complete publishing solutions from editing to distribution
              </p>
            </div>
            <div className="col-sm rounded border shadow py-3">
              <h1 className="display-1 text-warning"><i className="bi bi-book"></i></h1>
              <p className="fw-bold ">Editorial Services</p>
              <p>
                Professional editing, proofreading, and manuscript review
              </p>
            </div>
            <div className="col-sm rounded border shadow py-3">
              <h1 className="display-1 text-warning"><i className="bi bi-shop"></i></h1>

              <p className="fw-bold ">Marketing</p>
              <p>
                Strategic book marketing and promotion campaigns
              </p>
            </div>
          </div>
</Fade>
        </div>
      </div>
      <div className="container  text-center   min-vh-100 mb-3 ">
        <div>
        <Fade direction="left">
        <h1 className="display-1 fw-bold tp ">Featured Publications</h1>
        <div className="row gap-3 ">
          {
            sample_data.map((book, index) =>{
              return(
  <div className="col-sm p-3 shadow rounded-0" key={index+"s"} style={{ backgroundColor: "#f8f9fa" }}>
            <div style={{ height: "300px", ...BgImg(book.img) }} className="d-flex justify-content-center align-items-center mb-3">

            </div>
            <span className="fw-bold pt-3">{book.title}</span>
            
          </div>
              )
            })
          }
                  </div>
          <br/>
          <Link href="shop">
                  <button className="btn btn-outline-warning">Shop Now</button>

          </Link>
                   </Fade>

        </div>
      </div>
     
      <div className="bcc">
      <Fade cascade direction="up">
        <div className="container py-5 text-center text-white" >
          <h1 className="display-1 text-warning fw-bold">Ready To Share Your Story?</h1>
          <p>Join hundreds of successful authors who have trusted Global Wisdom with their publishing journey</p>
            <Link href="/contact" className="btn btn-outline-warning">Get started Today</Link>
        </div>
      </Fade>

            </div>


    </div>
  );
}
