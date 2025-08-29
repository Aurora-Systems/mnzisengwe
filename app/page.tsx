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
          M.N Zisengwe
          </h1>
          <p>Discover the vibrant voice of M.N. Zisengwe, where faith, humor, and Zimbabwean stories come alive on every page.</p>
          <div className="d-flex  flex-row flex-wrap justify-content-center gap-2">
            <Link href="/contact"><button className="btn">Shop</button></Link>
          </div>

        </div>
        </Fade>
        <video className="video" src="https://ngratesc.sirv.com/global_wisdom/1335-145564309_small.mp4" muted preload="true" loop autoPlay={true}></video>

      </main>
      <div className="min-vh-100 container d-flex flex-column justify-content-center align-items-center text-center py-3">
        <div className="row align-items-center">
          <div className="col-sm mb-3">
            <Fade cascade direction="up">
            <h2 className="display-1 fw-bold mb-4">Discover Her World</h2>
            <p className="">
              Welcome to the world of M.N. Zisengwe, a writer whose stories capture the spirit, humor, and contradictions of everyday life in Zimbabwe and beyond. Discover her remarkable debut novel, "Mhando," and explore a creative journey shaped by faith, family, and fearless curiosity. Kick back, browse around, and get to know the woman behind the words whether she’s knitting, rock climbing, or simply enjoying her front porch views.
            </p>
            {/* <Link href="/about" ><button className="btn  btn-outline-light">Learn More</button></Link> */}
            </Fade>
          </div>
          <div className="col-sm mb-3">
            <Fade direction="down">
            <Image src="https://ngratesc.sirv.com/global_wisdom/front.jpg" height={500} width={500} className="img-fluid rounded" alt="person on a typewrite" />
            </Fade>
          </div>
        </div>
         <div className="row align-items-center">
          
          <div className="col-sm mb-3 order-md-2">
            <Fade cascade direction="up">
            <h2 className="display-1 fw-bold mb-4">About</h2>
            <p className="">
              Meet Nancy Zisengwe, the heart and mind behind M.N. Zisengwe. As a girl, she found comfort in crafts and puzzles; as a woman, she’s traded swings for hammocks and daydreams for vibrant stories. Nancy believes in the power of passion, the teachings of Jesus Christ of Nazareth, and the undeniable truth that eggs are best avoided. Her days are a blend of lazy afternoons and bursts of creative energy always with an eye for humor and honesty. Through her writing, Nancy seeks to offer fresh perspectives, especially about life in Zimbabwe, beyond the stereotypes and struggles.
            </p>
            {/* <Link href="/about" ><button className="btn  btn-outline-light">Learn More</button></Link> */}
            </Fade>
          </div>
          <div className="col-sm mb-3 order-md-1">
            <Fade direction="down">
            <Image src="https://ngratesc.sirv.com/global_wisdom/author.jpg" height={500} width={500} className="img-fluid rounded" alt="person on a typewrite" />
            </Fade>
          </div>
          
        </div>

      </div>
      {/* <div className="text-center  bcc text-white d-flex align-items-center min-vh-100">
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
      </div> */}
      <div className="container  text-center   min-vh-100 mb-3 ">
        <div>
        <Fade direction="left">
        <h1 className="display-1 fw-bold  ">Shop</h1>
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
          
                   </Fade>

        </div>
      </div>
     
      <div className="bcc">
      <Fade cascade direction="up">
        <div className="container py-5 text-center text-white" >
          <h1 className="display-1  fw-bold">Let's Go on a Journey Together!</h1>
          <p>Step into Nancy’s thoughts and daily adventures</p>
            <Link href="/blog"><button  className="btn btn-outline-light">Read my blog</button></Link>
        </div>
      </Fade>

            </div>


    </div>
  );
}
