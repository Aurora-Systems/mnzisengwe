"use client"
import Image from "next/image";
import Link from "next/link";
import { BgImg } from "./components/bg_img";
import { Fade } from "react-awesome-reveal";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
  const [selected,set_selected] = useState<any>({
     title: "",
    img:"",
    description:"",
    author:"",
    price: 0
  })
  const [show,set_show] = useState<boolean>(false)

  const sample_data = [
    {
    title: "Mhando",
    img:"https://ngratesc.sirv.com/global_wisdom/front.jpg",
    description:"In post-Rhodesia Zimbabwe, comfort and chaos collide as one young woman confronts privilege, family secrets, and forbidden romance at her elite school. When unexpected challenges and a new sibling shake her world, she’s forced to question what really matters. ",
    author:"M.N Zisengwe",
    price: 20
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
            <Link href="#shop"><button className="btn w-100">Shop</button></Link>
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
         <div className="row align-items-center" id="about">
          
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
      <div className="container  text-center   min-vh-100 mb-3 " id="shop">
        <div>
        <Fade >
        <h1 className="display-1 fw-bold  ">Shop</h1>
        <div className="row gap-3 justify-content-center ">
          {
            sample_data.map((book, index) =>{
              return(
  <div className="col-sm col-md-3 p-2 shadow-lg rounded-2 text-start" key={index+"s"}>
            <div style={{ height: "300px", ...BgImg(book.img) }} className="d-flex justify-content-center align-items-center mb-3">

            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold">{book.title}</span>
            <span>$20.00</span>
            </div>
          

            <span className="fs-6"
              
            >
                      

              "Mhando" explores the complicated highs and lows of privilege....
            </span>
            <br/>
            <button className="btn btn-outline-light w-100" onClick={()=>{
              set_selected(book)
              set_show(true)
              }}>View</button>
            
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
            <Modal show={show} size="lg">
              <Modal.Header className="d-flex justify-content-between">
                <h5>View {selected.title}</h5>
                <button className="btn" onClick={()=>set_show(false)}>Close</button>
              </Modal.Header>
              <Modal.Body>
                <div className="row align-items-center">
                  <div className="col-sm">
                    <Image src={selected.img} width={400} height={300} className="img-fluid" alt="book cover"/>
                  </div>
                  <div className="col-sm">
                    <h1 className="tp">{selected.title}</h1>
                    <p><i>Author {selected.author}</i></p>
                    <p className="fs-6">{selected.description}</p>
                    <button className="btn ">Buy ${selected.price.toFixed(2)}</button>
                  </div>
                </div>  

              </Modal.Body>
            </Modal>


    </div>
  );
}
