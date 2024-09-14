//test sathi pahile jya file la test karayche tyache name mag .test.js
//he ui var visible nahi honar he backend madhe hot ahe yache result terminal madhe disnar
//using JEST library for testing

import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; //delay check karnyasathi te backend tun data gheta tevha delay sathi
import Hero from "../landing page/home/Hero";

//Test Suite yat apan multiple test cases lihu shakta
//1 Test Case Start
describe ("Hero Component",()=>{
    test("reders hero image",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero img") //getbyalttext he selector ahe he alt text cha alawa image la classes and id throught pan read karun shakta  tya document cha alt heroimage asle pahije check karat ahot
        expect(heroImage).toBeInTheDocument(); //check aapan kay result expect karat ahe  tobeinthedocument mhanje je image read karat ahet te document madhe ahe ka 
        expect(heroImage).toHaveAttribute("src","assets/homeHero.png");//check tya document cha src ha ahe ka 
    });
}); 
//test case run sathi npm test

//2nd Test Case Start
describe("signup  button",()=>{
    test("render signup button",()=>{
        render(<Hero/>);
        const Herobutton = screen.getByRole("button", {name:"Signup Now"}); //tya button ch name signup ha ka
        expect (Herobutton).toBeInTheDocument();;//hero button document madhe ahe ka 
      expect  (Herobutton).toHaveClass("btn-primary"); //check tyachi class btn-primary ahe ka 
    })
})