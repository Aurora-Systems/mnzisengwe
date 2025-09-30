import { db } from "../init/supabase";

const get_image=(image_id:string)=>{
    return db.storage.from("images").getPublicUrl(image_id).data.publicUrl
}

export default get_image