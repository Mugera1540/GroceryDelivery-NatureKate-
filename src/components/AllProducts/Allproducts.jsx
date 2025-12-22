import React from 'react'
import Categorypage from '../CategoryPage/Categorypage'
import ALL from '../../assets/all-banner.jpg'

const Allproducts=()=> {
    return (
        <div>
                  <Categorypage title="All Products" bgImage={ALL} categories={['All']}/>
        </div>
    )
}

export default Allproducts
