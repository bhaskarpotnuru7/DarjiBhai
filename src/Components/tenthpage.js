import React from 'react'
import {Component} from 'react'
import './tenthpage.css'

class TenthPage extends Component{
    render(){
        return(
            <>
                <div className = "tenth-page-top-container">
                    <h1>MY ACCOUNT / ORDERS</h1>
                    <p>You will have all the info regarding an order. Just click and have a glance...</p>
                    <hr className = "tenth-page-horizontal-line"/>
                </div>
                <div className = "tenth-page-middle-container">
                    <div className = "tenth-page-order-details-container">
                        <p>S.No.</p>
                        <p>Order# / Item Info</p>
                        <p>Dated</p>
                        <p>Status</p>
                        <p>Order Value</p>
                        
                    </div>
                    <hr className = "tenth-page-horizontal-line"/>
                    <div className = "tenth-page-order-details">
                        <p>1</p>
                        <p>DB8092-23<br />3 items</p>
                        <p>24/12/2022</p>
                        <p>CLOSED</p>
                        <p>48000.00</p>
                    </div>
                    <hr className = "tenth-page-horizontal-line"/>
                    <div className = "tenth-page-order-details">
                        <p>2</p>
                        <p>DB8092-23<br />3 items</p>
                        <p>24/12/2022</p>
                        <p>CLOSED</p>
                        <p>48000.00</p>
                    </div>
                    <hr className = "tenth-page-horizontal-line"/>
                    <div className = "tenth-page-order-details">
                        <p>3</p>
                        <p>DB8092-23<br />3 items</p>
                        <p>24/12/2022</p>
                        <p>CLOSED</p>
                        <p>48000.00</p>
                    </div>
                    <hr className = "tenth-page-horizontal-line"/>
                </div>
            </>
        )
    }
}

export default TenthPage