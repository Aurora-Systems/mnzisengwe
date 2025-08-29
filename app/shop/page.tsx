"use client"
import { Fade } from "react-awesome-reveal";
import { db } from "../init/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Shop(){
    const [data,set_data] = useState<Array<any>>([])
    const fetch_data = async () => {
        const { data, error } = await db.from("items").select("*, categories(*)").eq("user_id","kp_102df5c03f7d4b52b7b0bef49571f523");
        if(!error) {
           set_data(data)
        }else{
            set_data([])
    }
}
    


const ShowImage=(value:string)=>{
    return db.storage.from("images").getPublicUrl(value).data.publicUrl
}

useEffect(()=>{
    fetch_data()
},[])

    return(
        <div className="Container   mb-5 min-vh-100">
            <div className="bcc p-5 text-white text-center mb-5">
                <Fade cascade direction="up">
 <h1 className="display-1 fw-bold ">
                Book <span className="text-warning">Shop</span>
            </h1>
            <p>Discover our curated collection of published works</p>
            </Fade>
            
            </div>
            <Fade >
                <div className="container">
<div className="row justify-content-center gap-3">
                

                {
                    data.map((item,index)=>{
                        console.log(item)
                        return(
                            <div className="col-md-3 col-sm rounded shadow gap-3 p-2" key={`${index}23`}>
                                <div style={{
                                    backgroundImage: `url(${ShowImage(item.image_id)})`,
                                    height:"250px",
                                    backgroundRepeat:"no-repeat",
                                    backgroundSize:"cover",
                                    backgroundPosition:"center"

                                }}>
                                </div>
                               
                                                                    <h4>{item?.item_name}</h4>
                                                                    <div className="d-flex justify-content-between">
<span className="fw-bold fst-italic">Author {item?.categories.category}</span>
                                                                    <span className="text-success fw-bold">${(item?.price as number).toFixed(2)}</ span>
                                                                    </div>
                                                                    <div className="bg-light rounded p-1 mb-1" style={{
                                                                        height:"90px",
                                                                        overflow:"auto"
                                                                    }}>
                                                                    <p>{item?.description}</p>

                                                                    </div>
                                                                    <Link href={`https://wa.me/263777358130?text= Can i get more information about ${item.item_name}`} target="_blank"><button className="btn pbtn text-white w-100">Buy</button></Link>

                            </div>
                        )
                    })
                }
                                </div>
                                                </div>


            </Fade>
           
        </div>
    )
}