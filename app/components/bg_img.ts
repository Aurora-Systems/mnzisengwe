export const BgImg=(img_url:string)=>{
    return({
        backgroundImage: `url(${img_url})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    })
}