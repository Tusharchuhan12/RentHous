import React from 'react'
import Hero from '../componet/Hero'
import Journey from '../componet/Journey'
import RealEstateSection from '../componet/RealEstateSection'
import PrppertyList from '../componet/PrppertyList'
function Home() {
  return (
    <div>
     <Hero></Hero>
    
      <RealEstateSection></RealEstateSection>
      <PrppertyList></PrppertyList>
      <Journey></Journey>
    </div>
  )
}

export default Home
