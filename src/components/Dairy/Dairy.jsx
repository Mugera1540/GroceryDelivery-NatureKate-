import React from 'react'
import Categorypage from '../CategoryPage/Categorypage'
import BgDairy from '../../assets/dairy-banner.jpg'

const Dairy=()=> {
  return (
    <div>
      <Categorypage title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
