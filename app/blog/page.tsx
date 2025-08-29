import SubstackFeed from "../components/substack";

export default function Blog(){
    return(
        <div className="container mt-5 mb-5 min-vh-100">
            <h1 className="fw-bold display-1  text-center"> Blog</h1>
            <p>Step into Nancy’s thoughts and daily adventures. On the blog, you’ll find musings from hammocks, reflections on faith, crossword puzzle victories, and snippets about Zimbabwe’s changing landscape. Nancy writes candidly about the things that matter and offers a witty lens on the little quirks of life from stubbornly avoiding eggs to embracing the joy of yarn and needles. Join the conversation: explore stories, share your own, and celebrate honest living.</p>
            <br/>
            <SubstackFeed/>
        </div>
    )
}