//this file is a wrapper for home section
import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import State from './State';
import Pricing from "./Pricing"
import Education from './Education';
import OpenAccount from '../../OpenAccount';
import Navbar from "../../Navbar"
import Footer from "../../Fotter"


export default function Homepage(){
    return(
        <>
            
            <Hero/>
            <Awards/>
            <State/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </>
    )
}