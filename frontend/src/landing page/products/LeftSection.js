import React from "react";
//props cha use karun pass karu karan left and right section repeat hot ahe mhanun
export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleStore,
  appStore,
}) {
  return(
    <div className="container ">
        <div className="row p-5">
            <div className="col-4 p-5">
                <img src={imageURL} /> {/* image url he props tun yet ahe mhanun */}
            </div>
            <div className="col-3"></div>
            <div className="col-5 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                
                <div>
                <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore} style={{marginLeft:"100px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              
              <div className="mt-3">
              <a href={googleStore}><img src="assets/googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src="assets/appStoreBadge.svg" /></a>
              </div>
               
            </div>
        </div>
    </div>
  )
}
