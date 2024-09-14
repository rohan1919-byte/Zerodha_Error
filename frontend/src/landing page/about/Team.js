import React from "react";

export default function Team(){
    return(
        <div className="container p-5">
            <div className="row">
                <h1 className="text-center">People</h1>
                <div className="col-6 p-5 text-center text-muted ">
                <img src="assets/nithinKamath.jpg" alt="team name" className="rounded-circle" style={{width:"70%"}}/>
                <h3 className="p-2" style={{color:"grey"}}>Nithin Kamath</h3>
                <h4 className="fs-5" style={{color:"grey"}}>Founder, CEO</h4>
                </div>
                <div className="col-6 pt-5 fs-4 text-muted">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="/" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    )
}