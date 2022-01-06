import React from 'react'
import myimg from './images/bg2.jpg'
import '../style/about/about.scss'

const AboutMe = () => {
    return (
        <div>
            <div className="about-wraper">

                <h1 className="about-title">About <span className="text-info">  Me</span> </h1>

                <div className="container-wraper">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                           <div className="img-wraper">
                           <img src={myimg} alt="" className="img-fluid" />
                           <span className="img-overlay"></span>
                           </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className=" mt-5 p-5">
                                            <h4 className="about-heading text-success">Hii There !</h4>
                                            <h2 className="about-info">This is  Shoaib i'm a <span className="text-info">web designer</span> and  developer i'm a MERN stack developer
                                                i can develop any kind of website for your business. i can develop   <span className="text-info">mobile friendly </span>and   seo optimization  websites

                                            </h2>
               

                                            <a className="cvbtn btn" >Download cv </a>


                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="progress-wraper">
                                            <div className="skill-item p-5">
                                                <div className="skill-info ">
                                                    <h1 className="float-left mt-0 ">ReactJS</h1>
                                                    <span className="flaot-right">70%</span>
                                                </div>
                                                <div className="skill-bar"

                                                >
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%', ariaValuenow: '50', ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                    </div>
                                                    
                                                    </div>
                                                    
                                            </div>
                                            <div className="skill-item p-5">
                                                <div className="skill-info ">
                                                    <h1 className="float-left mt-0 ">Web Development</h1>
                                                    <span className="flaot-right">80%</span>
                                                </div>
                                                <div className="skill-bar"

                                                >
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%', ariaValuenow: '50', ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                    </div>
                                                    
                                                    </div>
                                                    
                                            </div>
                                            <div className="skill-item p-5">
                                                <div className="skill-info ">
                                                    <h1 className="float-left mt-0 ">Javascript</h1>
                                                    <span className="flaot-right">65%</span>
                                                </div>
                                                <div className="skill-bar"

                                                >
                                                    <div className="progress">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '65%', ariaValuenow: '50', ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                    </div>
                                                    
                                                    </div>
                                                    
                                            </div>
                                            <div className="skill-item p-5">
                                                <div className="skill-info ">
                                                    <h1 className="float-left mt-0 ">Mern Stack</h1>
                                                    <span className="flaot-right">60%</span>
                                                </div>
                                                <div className="skill-bar"

                                                >
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%', ariaValuenow: '50', ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                                    </div>
                                                    
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutMe
