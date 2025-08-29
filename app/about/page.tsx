import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function About(){
    return(
        <div>
            <div className="bcc p-5 text-white text-center mb-5">
                <Fade className="cascade" direction="up">
                <h1 className="display-1 text-white fw-bold">
                    About <span className="text-warning">Global Wisdom</span>
                </h1>
                <p>Empowering authors worldwide with professional publishing services</p>
                </Fade>
            </div>
            <div className="container">
                <Fade direction="down">
                <div className="row">
                    <div className="col-sm">
                    <h1 className="display-1 fw-bold tp" >Our Story</h1>
                    <p>Founded in 2017, Global Wisdom Printing Press emerged from a simple belief: every story deserves to be told, and every author deserves professional support to share their vision with the world.</p>
                    <p>What started as a small independent publishing house has grown into a comprehensive publishing platform, serving authors across genres and continents. Our commitment to quality, author empowerment, and literary excellence remains unwavering.</p>
                    <p>Today, we're proud to have published over 500 titles and helped countless authors achieve their publishing dreams.</p>
                
                </div>
                 <div className="col-sm text-center">
                    <Image src="https://ngratesc.sirv.com/global_wisdom/logo.png" className="img-fluid" width={400} height={400} alt="logo for global wisdom"/>
                </div>
            </div>
            </Fade>
            <div className="bcc p-5 rounded mb-5 mt-5">
                <div className="row gap-5 align-items-center">
                    <div className="col-sm mb-3 bg-white shadow rounded p-3 ">
                        <Fade direction="left">
                        <h3 className="fw tp"> Our Mission</h3>
                        <p>To democratize publishing by providing accessible, professional, and comprehensive publishing services that empower authors to share their stories with the world while maintaining creative control and ownership of their work.</p>
                    </Fade>
                    </div>
                     <div className="col-sm  mb-3 bg-white shadow rounded p-3">
                        <Fade direction="right">
                        <h3 className="fw tp "> Our Vision</h3>
                        <p>To be the world's leading author-centric publishing platform, where literary excellence meets innovative technology, and where every author regardless of background or genre has the opportunity to reach their audience.</p>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h1 className="display-1 fw-bold tp text-center mb-3">Our Values</h1>
                <div className="row text-center">
                    <div className="col-sm mb-3">
                        <h1>💡</h1>
                        <h3 className="fw-bold text-warning">Innovation</h3>
                        <p>Embracing cutting-edge technology and creative solutions to enhance the publishing experience</p>
                    </div>
                      <div className="col-sm mb-3">
                        <h1>🤝</h1>
                        <h3 className="fw-bold text-warning">Partnership</h3>
                        <p>Building lasting relationships with authors based on trust, transparency, and mutual success
</p>
                    </div>
                      <div className="col-sm mb-3">
                        <h1>⭐</h1>
                        <h3 className="fw-bold text-warning">Excellence</h3>
                        <p>Maintaining the highest standards in every aspect of the publishing process</p>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}