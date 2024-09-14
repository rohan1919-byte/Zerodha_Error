import React from "react";

export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="" style={{color:"white"}}>Track Tickets</a>

      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3 ">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." /> <br/>
          <br />
          <a href="" style={{ color: "white",marginRight:"20px" }}>
            Track account opening
          </a>
          <a href="" style={{ color: "white",marginRight:"20px"  }}>
            Track segment activation
          </a>
          <a href="" style={{ color: "white",marginRight:"20px"  }}>
            Intraday margins
          </a> <br/>
          <a href="" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ color: "white" }}>
                Current Buybacks - August 2024
              </a>
              <br />
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                Offer for sale (OFS) - August 2024
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
