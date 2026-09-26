import { useState } from 'react'

import './App.css'
import ExpertSection from './ExpertSection'
import YearsSection from './YearsSection'
import WhychooseSection from './WhychooseSection'

import HeaderSection from './HeaderSection'
import Props from "./props"
import Ourservicessection from "../src/assets/Ourservicessection"
import Forms from "./Forms"
import Ourprojects from "./Ourprojects"





function App() {
  return (
    <>
    <HeaderSection/>
    <ExpertSection/>
    <YearsSection/>
    <WhychooseSection/>
    <Props user={"ganesh"}/>
    <Props user={"Afroj"}/>
    <Props user={"Prabhakar"}/>
    <Ourservicessection/>
    <Forms/>
    <Ourprojects/>
    

   
   
    </>
  )
}
export default App
