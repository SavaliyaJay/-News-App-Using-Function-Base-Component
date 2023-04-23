// import PropTypes from 'prop-types'
import React from 'react'
import loading from './Fading wheel.gif'

const Loader = () => {
  return (
    <>
     <div className="text-center">
                <img src={loading} alt="loading" srcSet="" />
            </div>
    </>
  )
}

export default Loader

