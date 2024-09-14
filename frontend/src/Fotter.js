//this page use for all the pages then i will move to the file in src because of all files are use this footer component

import React from "react";

export default function Footer() {
  return (
    <footer style={{backgroundColor:"#fbfbfb"}}>
    <div className="container border-top mt-5 " >
      <div className="row mt-5">
        <div className="col">
          <img src="assets/logo.svg" style={{ width: "50%" }} />
          <p> &copy; 2010 - 2024, Zerodha Broking Ltd.All rights reserved.</p>
          <a href="" className="footer-icon"><i class="fa-brands fa-facebook"></i></a>
          <a href="" className="footer-icon"><i class="fa-brands fa-twitter"></i></a>
          <a href="" className="footer-icon"><i class="fa-brands fa-linkedin"></i></a>
          <a href="" className="footer-icon"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" className="footer-dash"> About </a> <br />
          <a href="" className="footer-dash">Products</a> <br />
          <a href="" className="footer-dash">Pricing</a> <br />
          <a href="" className="footer-dash">Referral programme</a> <br />
          <a href="" className="footer-dash">Careers</a> <br />
          <a href="" className="footer-dash">Zerodha.tech</a> <br />
          <a href="" className="footer-dash">Press & media</a> <br />
          <a href="" className="footer-dash">Zerodha Cares (CSR)</a> <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="footer-dash"> Contact us </a>  <br/>
          <a href="" className="footer-dash"> Support portal </a>  <br/>
          <a href="" className="footer-dash"> Z-Connect blog </a>  <br/>
          <a href="" className="footer-dash"> List of charges </a>  <br/>
          <a href="" className="footer-dash"> Downloads & resources </a>  <br/> 
          <a href="" className="footer-dash"> Videos </a>  <br/>
          <a href="" className="footer-dash"> Market overview </a>  <br/>
          <a href="" className="footer-dash"> How to file a complaint? </a>  <br/>
          <a href="" className="footer-dash"> Status of your complaints </a>  <br/>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="footer-dash">Open an Account</a>  <br/>
          <a href="" className="footer-dash">Fund transfer</a>  <br/>
        </div>
      </div>
      <div className="mt-5  text-muted" style={{fontSize:"14px"}}>
      <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p> <br/>
      <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>  <br/>
      <p> <a>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>  <br/>
      <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>  <br/>
      <p>Attention investors: (1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>  <br/>
      <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here</p>  <br/>
      </div>
    </div>
    </footer>
  );
}
