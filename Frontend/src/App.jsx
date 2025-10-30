import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import SearchBox from "./Components/SearchBox";
import Services from "./Components/Services";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Doctors from "./Components/Doctors";
import Testinomial from "./Components/Testinomial";
import QuoteForm from "./Components/QuoteForm";
import Footer from "./Components/Footer";
import "./Components/Header.css"
import "./Components/Navbar.css"
import "./Components/HeroSection.css"
import "./Components/SearchBox.css"
import "./Components/About.css"
import "./Components/Services.css"
import "./Components/WhyChooseUs.css"
import "./Components/Doctors.css"
import "./Components/Testinomial.css"
import "./Components/QuoteForm"
import "./Components/Footer.css"
import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <SearchBox/>
      
<section id="about">
  <About />
</section>
<section id="services">
          <Services />
        </section>   
        <WhyChooseUs/>  
        <Doctors/> 
        <Testinomial/>
        <QuoteForm/>
        <Footer/>

    </>
  );
}

export default App;
