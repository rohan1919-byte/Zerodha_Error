import React from "react";

export default function Pricing(){
    return(
        <div className="container ">
            <div className="row">
            <div className="col-4">
                <h1 className="mb-4 fs-2 ">Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="">see pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-2"></div>  {/*empty asnar 2 column karan content nahi tyat*/}
            <div className="col-6 mb-5">
                <div className="row text-center">
                    <div className="col  border">
                        <img src="assets/pricing-eq.png" className="mb-3" style={{height:"100px"}}/>
                        <p>Free equity delivery and  <br/>  mutual funds</p>
                    </div>
                    <div className="col  border">
                    <img src="assets/other-trades.png" className="mb-3" style={{height:"100px"}}/>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}