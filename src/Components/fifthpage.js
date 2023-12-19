import React from 'react'
import {Component} from 'react'
import Icons from './icons.js'
import './fifthpage.css'

const imgObj = {
    mainUrl : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049150/Snapinsta.app_400828507_3649227632029127_8142566013686327426_n_1080_whil5i.jpg",
    url1 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_400347021_1088885059221664_1253804699700835914_n_1080_b7f505.jpg",
    url2 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_361124478_1272152510083484_2041737324673156295_n_1080_afqfqw.jpg",
    url3 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083491/Snapinsta.app_329242887_706113767886663_9058743315686606205_n_1080_eb0qrr.jpg",
    url4 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_319682406_502549965273430_8395002057457360487_n_1080_qgzuik.jpg",
    url5 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_361506142_285136967521397_5680342274322294525_n_1080_myew89.jpg",
    url6 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048997/Snapinsta.app_325771363_1604125403362868_5825698199006413468_n_1080_i2fblt.jpg",
    black : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049046/Snapinsta.app_327609778_1160618544594528_5581423513941836118_n_1080_h3j1cn.jpg",
    pink : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048878/Snapinsta.app_311594634_870435644363611_1025735666238381155_n_1080_xyakhq.jpg",
    violet : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_361506142_285136967521397_5680342274322294525_n_1080_myew89.jpg",
    purple : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049099/Snapinsta.app_395457874_628925605987608_4185718807738626536_n_1080_uqelwq.jpg",
    skyblue : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048946/Snapinsta.app_320297724_833234897785501_7228000578756594499_n_1080_xscu2e.jpg",
    green : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048769/Snapinsta.app_236668772_115888367452093_7217220050011777649_n_1080_sfmwex.jpg",
    yellow : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049684/Snapinsta.app_333648552_560102152555857_6738886520440057862_n_1080_oswqw5.jpg",
    red : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048997/Snapinsta.app_325771363_1604125403362868_5825698199006413468_n_1080_i2fblt.jpg",
}

class FifthPage extends Component{

    state = {FifthpageImgUrl : imgObj.mainUrl}

    onImage1 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.url1})
        )
    }

    onImage2 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.url2})
        )
    }
    onImage3 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.url3})
        )
    }
    onImage4 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.url4})
        )
    }
    onImage5 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.url5})
        )
    }
    onImage6 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.url6})
        )
    }

    onBtn1 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.black})
        )
    }
    onBtn2 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.pink})
        )
    }
    onBtn3 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.violet})
        )
    }
    onBtn4 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.purple})
        )
    }
    onBtn5 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.skyblue})
        )
    }
    onBtn6 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.green})
        )
    }
    onBtn7 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.yellow})
        )
    }
    onBtn8 = () =>{
        return(
            this.setState({FifthpageImgUrl : imgObj.red})
        )
    }

    render(){
        const {FifthpageImgUrl} = this.state

        return(
            <>

                <div className = "fifth-page-top-container">
                <h1>CUSTOMIZE</h1>
                <p>Let us style your fabric the way you wanted to see...</p>
                </div>

            <div className = "fifth-page-middle-container">
                <div className="fifth-page-image-container">
                        <img src = {FifthpageImgUrl} alt = "customization pic" />
                        <div className="fifth-page-img-desc-container">
                            <p>I like this design & want to go for this customization...</p>
                            <div>
                                <button>ADD THIS SERVICE TO THE BAG</button>
                            </div>
                    </div>
                    </div>

                    <div className="fifth-page-designs-container">
                    <h1>EMBROIDERY DESIGNS</h1>
                    <div className="fifth-page-designs">
                        <img src = {imgObj.url1} onClick = {this.onImage1} alt = "fifth page design"/>
                        <img src = {imgObj.url2} onClick = {this.onImage2} alt = "fifth page design"/>
                        <img src = {imgObj.url3} onClick = {this.onImage3} alt = "fifth page design"/>
                    </div>
                    <div className="fifth-page-designs">
                        <img src = {imgObj.url4} onClick = {this.onImage4} alt = "fifth page design"/>
                        <img src = {imgObj.url5} onClick = {this.onImage5} alt = "fifth page design"/>
                        <img src = {imgObj.url6} onClick = {this.onImage6} alt = "fifth page design"/>
                        </div>

                    <h1>UPLOAD YOUR OWN DESIGN</h1>
                    <div className = "fifth-page-drag-drop-design">
                        <p>Drag & drop your design</p>
                    </div>
                    <h1>FABRIC COLOURS</h1>
                    <div className="fifth-page-button-container">
                        <button onClick = {this.onBtn1} ></button>
                        <button onClick = {this.onBtn2} ></button>
                        <button onClick = {this.onBtn3} ></button>
                        <button onClick = {this.onBtn4} ></button>
                        <button onClick = {this.onBtn5} ></button>
                        <button onClick = {this.onBtn6} ></button>
                        <button onClick = {this.onBtn7} ></button>
                        <button onClick = {this.onBtn8} ></button>
                    </div>
                </div>
            </div>

            <div className = "fifth-page-bottom-container">
            <h1>Customization details</h1>
            <h1>Rs. <span>36000/-</span></h1>
            <p className = "fifth-page-customization">How do we customize</p>
            <p className = "fifth-page-customization-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief,
            Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>        
            <hr className = "fifth-page-horizontal-line" />
            <h1 className = "text-center">OUR PROCESS</h1>
            <p className="text-center">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
            old. Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
        </div>

            <Icons />
             <p className = "fifth-page-footer text-center">Our professionals will close all the above process in 45 Hours</p>

            </>
        )
    }
}

export default FifthPage