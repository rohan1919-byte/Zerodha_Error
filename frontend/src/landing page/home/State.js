import React from "react";

export default function State() {
  return (
    <div className="container p-5 ">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trush with confidence</h1>
          <h2 className="fs-4"> Customer-first always</h2>
          <p className="text-muted">
            Thst's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crore
            worth of equity investments
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            {" "}
            No gimmicks,spam,"gamification",or annoying push notifications.High
            quality apps that yoy use at your pace,the way you like
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app,but a whole ecosystem our investment in 30+ fintech
            startup offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.{" "}
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="assets/ecosystem.png"
            alt="state image"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="" className="mx-5" style={{textDecoration:"none"}}>
              Explore our product <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{textDecoration:"none"}}>
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
