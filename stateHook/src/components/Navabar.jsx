import React, { useEffect } from 'react'

const Navabar = ({color}) => {
    useEffect(() => {
        alert("color is changed")
    }, [color])
    
  return (
    <div>
      I am navbar of {color} color hrhr
    </div>
  )
}

export default Navabar
