"use client"
import Image from "next/image";
import Link from "next/link";
import { BgImg } from "./components/bg_img";
import { Fade } from "react-awesome-reveal";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { db } from "./init/supabase";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function Home() {
  const [selected,set_selected] = useState<any>({
     title: "",
    img:"",
    description:"",
    author:"",
    price: 0
  })
  const [show,set_show] = useState<boolean>(false)
  const [books,set_books] = useState<Array<any>>([])
  const [isProcessing, setIsProcessing] = useState(false);
  const [paypalError, setPaypalError] = useState("");
  const [show_download,set_show_download]  = useState<boolean>(false)
  const [asset_url,set_asset_url] = useState<string>("")

  const get_data = async()=>{
    try{
      const {data,error} = await db.from("items").select("*").eq("user_id", "kp_451fa5d1d80f4d7cb4eb151ffa94dc26")
      if(error){
        return set_books([])
      }
      set_books(data)
    }catch(error){
      console.log(error)
    }
  }

  const sample_data = [
    {
    title: "Mhando",
    img:"https://ngratesc.sirv.com/global_wisdom/front.jpg",
    description:"In post-Rhodesia Zimbabwe, comfort and chaos collide as one young woman confronts privilege, family secrets, and forbidden romance at her elite school. When unexpected challenges and a new sibling shake her world, she’s forced to question what really matters. ",
    author:"M.N Zisengwe",
    price: 20,
    asset_id:"b0ef2aa9-1371-44a9-b481-6ec5bb2c8de3"
  }
]

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: selected.price?.toFixed(2),
            currency_code: 'USD'
          },
          description: `Farm Market Order`,
        },
      ],
    });
  };
  const onApprove = async (data: any, actions: any) => {
    setIsProcessing(true);
    try {
      const order = await actions.order.get();
      console.log('Payment successful', order);
      
      // Extract payer information from PayPal response
      const payerName = order.payer?.name?.given_name || '';
      const payerEmail = order.payer?.email_address || '';
      
      const paymentData = {
        name: payerName,
        email: payerEmail,
        amount: selected.price?.toFixed(2),
        orderID: data.orderID,
        asset_id:selected.asset_id
      };
      
      console.log('Sending to API:', paymentData);
      
      // Send payment data to our API
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        throw new Error('Payment processing failed');
      }
      const result = await response.json();
      set_asset_url(result.data.asset_url);
      set_show_download(true)
    } catch (error) {
      console.error('Payment failed:', error);
      setPaypalError('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  const onError = (err: any) => {
    console.error('PayPal error:', err);
    setPaypalError('An error occurred with PayPal. Please try again.');
  };

useEffect(()=>{
  get_data()
},[])
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
              Welcome to the world of Mutsawashe Nancy Zisengwe, a writer whose stories capture the spirit, humor, and contradictions of everyday life in Zimbabwe and beyond. Discover her remarkable debut novel, "Mhando," and explore a creative journey shaped by faith, family, and fearless curiosity. Kick back, browse around, and get to know the woman behind the words whether she’s knitting, rock climbing, or simply enjoying her front porch views.
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
              Meet Mutsawashe Nancy Zisengwe, the heart and mind behind M.N. Zisengwe. As a girl, she found comfort Knitting, crocheting or solving the newspapers latest edition of sudoku; as a woman, she’s traded swings for hammocks and daydreams for vibrant stories. Nancy believes in the power of passion, the teachings of Jesus Christ of Nazareth, and the undeniable truth that eggs are best avoided. Her days are a blend of lazy afternoons and bursts of creative energy always with an eye for humor and honesty. Through her writing, Nancy seeks to offer fresh perspectives, especially about life in Zimbabwe, beyond the stereotypes and struggles.
            </p>
            {/* <Link href="/about" ><button className="btn  btn-outline-light">Learn More</button></Link> */}
            </Fade>
          </div>
          <div className="col-sm mb-3 order-md-1">
            <Fade direction="down">
            <Image src="https://ngratesc.sirv.com/global_wisdom/musta.jpg" height={500} width={500} className="img-fluid rounded" alt="person on a typewrite" />
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
          

            <p className="fs-6 text-truncate pb-0 mb-0"        
            >
              "Mhando" explores the complicated highs and lows of privilege....
            </p>
            <br/>
            <button className="btn btn-outline-light w-100" onClick={()=>{
              set_selected(book)
              set_show(true)
              }}>View</button>
            
          </div>
              )
            })
          }

          {
            books.map((book:any,index)=>{
                return(
  <div className="col-sm col-md-3 p-2 shadow-lg rounded-2 text-start" key={index+"s"}>
            <div style={{ height: "300px", ...BgImg(book.img) }} className="d-flex justify-content-center align-items-center mb-3">

            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold">{book.item_name}</span>
            <span>${book?.price.toFixed(2)}</span>
            </div>
          

            <span className="fs-6 text-truncate"        
            >
              {book?.description}
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
                    <div className="d-flex justify-content-between align-items-baseline">
                    <h1 className="tp">{selected.title}</h1>
                    <span>${selected.price.toFixed(2)}</span>
                    </div>
                    <p><i>Author {selected.author}</i></p>
                    <p className="fs-6">{selected.description}</p>
                    {/* <button className="btn w w-100">Buy ${selected.price.toFixed(2)}</button> */}
                    {show_download?
                      <div>
                        <p className="text-success"><small>✅ Your payment was a successfull! Download link is only available for an hour!</small></p>
                        <Link href={asset_url} target="_blank"><button className="btn w-100" onClick={()=>{
                          set_show_download(false)
                          set_show(false)
                        }}>Download {selected.title}</button></Link>
                      </div>
                    :
                     <PayPalScriptProvider options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
          currency: 'USD',
          intent: 'capture'
        }}>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            style={{ layout: "vertical" }}
            disabled={isProcessing}
          />
        </PayPalScriptProvider>
}
                  </div>
                </div>  

              </Modal.Body>
            </Modal>


    </div>
  );
}
