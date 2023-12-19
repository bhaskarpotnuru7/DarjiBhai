import React from 'react'
import {Component} from 'react'
import './fourthpage.css'

const imgObj = {
    mainUrl : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049150/Snapinsta.app_400828507_3649227632029127_8142566013686327426_n_1080_whil5i.jpg",
    url1 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_400347021_1088885059221664_1253804699700835914_n_1080_b7f505.jpg",
    url2 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_361124478_1272152510083484_2041737324673156295_n_1080_afqfqw.jpg",
    url3 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083491/Snapinsta.app_329242887_706113767886663_9058743315686606205_n_1080_eb0qrr.jpg",
    url4 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_319682406_502549965273430_8395002057457360487_n_1080_qgzuik.jpg",
    url5 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_361506142_285136967521397_5680342274322294525_n_1080_myew89.jpg",
    url6 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048997/Snapinsta.app_325771363_1604125403362868_5825698199006413468_n_1080_i2fblt.jpg",
    url7 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048654/Snapinsta.app_125204320_750412529187333_5813560420171220699_n_1080_udelzs.jpg",
    url8 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048946/Snapinsta.app_320297724_833234897785501_7228000578756594499_n_1080_xscu2e.jpg",
    url9 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048769/Snapinsta.app_236668772_115888367452093_7217220050011777649_n_1080_sfmwex.jpg",
    black : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049046/Snapinsta.app_327609778_1160618544594528_5581423513941836118_n_1080_h3j1cn.jpg",
    pink : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048878/Snapinsta.app_311594634_870435644363611_1025735666238381155_n_1080_xyakhq.jpg",
    violet : "https://res.cloudinary.com/dosckylqx/image/upload/v1701083490/Snapinsta.app_361506142_285136967521397_5680342274322294525_n_1080_myew89.jpg",
    purple : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049099/Snapinsta.app_395457874_628925605987608_4185718807738626536_n_1080_uqelwq.jpg",
    skyblue : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048946/Snapinsta.app_320297724_833234897785501_7228000578756594499_n_1080_xscu2e.jpg",
    green : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048769/Snapinsta.app_236668772_115888367452093_7217220050011777649_n_1080_sfmwex.jpg",
    yellow : "https://res.cloudinary.com/dosckylqx/image/upload/v1701049684/Snapinsta.app_333648552_560102152555857_6738886520440057862_n_1080_oswqw5.jpg",
    red : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048997/Snapinsta.app_325771363_1604125403362868_5825698199006413468_n_1080_i2fblt.jpg",
}

class FourthPage extends Component{

    state = {FourthpageImgUrl : imgObj.mainUrl}

    onImage1 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url1})
        )
    }

    onImage2 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url2})
        )
    }
    onImage3 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url3})
        )
    }
    onImage4 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url4})
        )
    }
    onImage5 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url5})
        )
    }
    onImage6 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url6})
        )
    }
    onImage7 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url7})
        )
    }
    onImage8 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url8})
        )
    }
    onImage9 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.url9})
        )
    }
    onBtn1 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.black})
        )
    }
    onBtn2 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.pink})
        )
    }
    onBtn3 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.violet})
        )
    }
    onBtn4 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.purple})
        )
    }
    onBtn5 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.skyblue})
        )
    }
    onBtn6 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.green})
        )
    }
    onBtn7 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.yellow})
        )
    }
    onBtn8 = () =>{
        return(
            this.setState({FourthpageImgUrl : imgObj.red})
        )
    }


    render(){
        const {FourthpageImgUrl} = this.state
        return(
            <>
        
            <div className = "fourth-page-top-container">
                <h1>SHOP / PEACOCK EMBROIDERY</h1>
                <p>Nice one liner to brief the below Embroidery Design</p>
            </div>
        <div className = "fourth-page-middle-container">
            <div className = "fourth-page-image-container">
                <img src = {FourthpageImgUrl} alt = "peacock" />
            </div>
            <div className = "fourth-page-details-container">
                    <h1>PEACOCK EMBROIDERY</h1>
                    <p>CODE: DAI03456</p>
                    <h1 className = "pt-2">Rs. 36000/-</h1>
                    <p className='pt-4'>DESCRIPTION:</p>
                    <div className = "fourth-page-description-container">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. <br />It has roots in a piece of classical Latin literature from 45 BC, making <br />it over 2000
                            years old. Contrary to popular belief, Lorem Ipsum is not <br /> simply random text. Lorem Ipsum is not simply random text. It has roots <br /> in a piece of classical
                            Latin literature from 45 BC, making it over 2000 <br /> years old.</p>
                    </div>
                    <div className = "fourth-page-price-container">
                        <p>QUANTITY: </p>
                        <div className = "d-flex flex-row">
                        <button className = "fourth-page-minus-button">-</button>
                        <p>1</p>
                        <button className = "fourth-page-add-button">+</button>
                        </div>
                </div>

                <div className = "fourth-page-pincode-check-container">
                    <p>PINCODE CHECK</p>
                    <input type = "text" placeholder = "Enter pincode"/>
                    <button>CHECK</button>
                </div>
                <div className = "fourth-page-button-container">
                <button>ADD TO BAG</button>
                <button>BUY NOW</button>
                </div>

        </div>


        </div>

        <div className = "fourth-page-bottom-container">
            <h1>EMBROIDERY DESIGNS</h1>
            <div className = "fourth-page-fabric-color-container">
                <h1>FABRICK COLOURS:</h1>
                <div className = "fourth-page-colour-button-container">
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

        <div className = "fourth-page-bottom-image-container">
                <img src = {imgObj.url1} onClick = {this.onImage1} alt = "Embroidery Designs"/>
                <img src = {imgObj.url2} onClick = {this.onImage2} alt = "Embroidery Designs"/>
                <img src = {imgObj.url3} onClick = {this.onImage3} alt = "Embroidery Designs"/>
                <img src = {imgObj.url4} onClick = {this.onImage4} alt = "Embroidery Designs"/>
                <img src = {imgObj.url5} onClick = {this.onImage5} alt = "Embroidery Designs"/>
                <img src = {imgObj.url6} onClick = {this.onImage6} alt = "Embroidery Designs"/>
                <img src = {imgObj.url7} onClick = {this.onImage7} alt = "Embroidery Designs"/>
                <img src = {imgObj.url8} onClick = {this.onImage8} alt = "Embroidery Designs"/>
            </div>

    </>
        
        )
    }
}

export default FourthPage