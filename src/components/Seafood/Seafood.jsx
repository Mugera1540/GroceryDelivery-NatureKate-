import React from 'react'
import Banner from '../Banner/Banner'
import Categorypage from '../CategoryPage/Categorypage'
import BgFish from '../../assets/seafood-banner.jpg'

const Seafood=()=> {
  return (
    <div>
      <Categorypage title="Meat & SeaFoods" bgImage={BgFish} categories={['SeaFood','Meat']}/>
    </div>
  )
}

export default Seafood
