import SubstackFeed from "../components/substack";

export default function Blog(){
    return(
        <div className="container mt-5 mb-5 min-vh-100">
            <h1 className="fw-bold display-1 tp text-center"> Blog</h1>
            <br/>
            <SubstackFeed/>
        </div>
    )
}