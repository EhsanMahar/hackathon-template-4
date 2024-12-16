import React from "react";

import Header from "@/components/navbar";
import HeroSection from "@/components/hero";
import FeaturedProducts from "@/components/featured";
import LatestBlog from "@/components/blog";
import Footer from "@/components/footer";





//
export default function Home() {
  return (
    <div>
    
    <Header/>
    <HeroSection/>
      <FeaturedProducts/>
  <LatestBlog/>
  <Footer/>

    </div>
    

    
  );
}