import React from 'react'
import Slider from '@mui/material/Slider';

const Energy = ({ handleEnergySelection }) => {

  // TO DO: if already chosen, add this as default 
  // TO DO: add more visuals to help understand the level
  return (
    <Slider
      aria-label="Energy Today"
      defaultValue={.5}
      color="secondary"
      onChange={(e) => handleEnergySelection(e.target.value)}
			max={1}
			min={0}
      step={.1}
    />
  )
}

export default Energy