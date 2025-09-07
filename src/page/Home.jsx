import React from 'react'
import Hero from '../componet/Hero'
import Journey from '../componet/Journey'
import RealEstateSection from '../componet/RealEstateSection'
import PrppertyList from '../componet/PrppertyList'
import WhatWeDo from '../componet/WhatWeDo'
import RentalHomes from '../componet/RentalHomes'
function Home() {
  return (
    <div>
     <Hero/>
     <WhatWeDo></WhatWeDo>
      <RealEstateSection/>
  
      <PrppertyList/>
      <RentalHomes></RentalHomes>
      <Journey/>
    </div>
  )
}

export default Home
