import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header.js'
import Footer from './footer.js'
import './thirdpage.css'

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
    url9 : "https://res.cloudinary.com/dosckylqx/image/upload/v1701048769/Snapinsta.app_236668772_115888367452093_7217220050011777649_n_1080_sfmwex.jpg"
}

class ThirdPage extends Component{
    render(){
        return(
            <>
                <Header />
                <div className = "third-page-top-container">
                    <h1>SHOP / PEACOCK EMBROIDERY</h1>
                    <p>Nice one liner to brief the below Embroidery Design</p>
                </div>

                <div className = "third-page-middle-container">
                    <div className = "third-page-image-container">
                        <img src = {imgObj.mainUrl} className = "third-page-image" alt = "peacock" />
                        <div className = "text-center">
                        <button>ADD TO BAG</button>
                        <button>BUY NOW</button>
                        </div>
                    </div>

                    <div>
                        <h1>EMBROIDERY DESIGNS</h1>
                        <div className = "third-page-design-images">
                            <img src = {imgObj.url1} alt = "designs"/>
                            <img src = {imgObj.url2} alt = "designs"/>
                            <img src = {imgObj.url3} alt = "designs"/>
                        </div>
                        <div className = "third-page-design-images">
                            <img src = {imgObj.url4} alt = "designs"/>
                            <img src = {imgObj.url5} alt = "designs"/>
                            <img src = {imgObj.url6} alt = "designs"/>
                        </div>
                        <div className = "third-page-design-images">
                            <img src = {imgObj.url7} alt = "designs"/>
                            <img src = {imgObj.url8} alt = "designs"/>
                            <img src = {imgObj.url9} alt = "designs"/>
                        </div>
                        <div className = "third-page-fabric-color-heading-container">
                        <h1>FABRIC COLOURS</h1>
                        <div className = "third-page-button-container">
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        </div>
                    </div>
                </div>

                <div className = "third-page-bottom-container">
                    <h1>PEACOCK EMBROIDERY</h1>
                    <p>CODE: DAI03456</p>
                    <div className = "d-flex flex-row">
                    <h1 className = "pt-2">Rs. 36000/-</h1>
                    <div className = "third-page-price-container">
                        <p>QUANTITY: </p>
                        <button className = "third-page-minus-button">-</button>
                        <p>1</p>
                        <button className = "third-page-add-button">+</button>
                    </div>
                    </div>
                    <p>DESCRIPTION:</p>
                    <div className = "third-page-description-container">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
                            years old. Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. It has roots in a piece of classical
                            Latin literature from 45 BC, making it over 2000 years old.</p>
                        <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
                            years old. Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is not simply random text. It has roots in a piece of classical
                            Latin literature from 45 BC, making it over 2000 years old.</p>

                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default ThirdPage