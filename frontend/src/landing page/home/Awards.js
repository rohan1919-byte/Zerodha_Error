import React from 'react'

function Awards(){
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                <img src='assets/largestBroker.svg' alt='Award image'/>
                  </div>
                    <div className='col-6 p-5 mt-5'>
                        <h1>Largest Stock Broker in india</h1>
                        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in</p>
                        
                        <div className='row '>
                            <div className='col-6'>
                            <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                        </div>
                                <div className='col-6'>
                                <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                          <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Goverment Sequrities </p>
                            </li>
                        </ul>
                                </div>
                            </div>
                            <img src='assets/pressLogos.png' alt='Awards footer logo' style={{width:"90%"}} />
                        </div>
                    
                    </div>
                </div>
            

    )
}
export default Awards;