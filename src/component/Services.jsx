import React from 'react'
import '../style/servoces/services.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFileCode, faPaintBrush, faRocket, } from '@fortawesome/free-solid-svg-icons' 

const Services = () => {
    return (
        <div>
             <h1 className=" service-title"> Our <span className="text-info"> Services</span></h1>
            <div className="service-wraper">
                <div className="container">
                   
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-12">
                            <div className="services card p-5  ">
                                <div className="service-icon">
                                <FontAwesomeIcon icon={faFileCode}  className="font-icon text-info"/>
                                </div>
                                <h1 className="services-heading">WEB DEVELOPMENT </h1>
                                <p className="service-summery">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores sunt praesentium cupiditate enim recusandae.</p>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12">
                            <div className="services card p-5  card2 ">
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faPaintBrush}  className="font-icon text-warning"/>
                                </div>
                                <h1 className="services-heading">UI/UX Desing </h1>
                                <p className="service-summery">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores sunt praesentium cupiditate enim recusandae.</p>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12">
                            <div className="services card p-5 card3 ">
                                <div className="service-icon">
                                <FontAwesomeIcon icon={faRocket}  className="font-icon text-danger"/>
                                </div>
                                <h1 className="services-heading">Seo optimize </h1>
                                <p className="service-summery">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores sunt praesentium cupiditate enim recusandae.</p>
                            </div>

                        </div>

                    </div>
                </div>
               
          
            </div>
           
        </div>
    )
}

export default Services
