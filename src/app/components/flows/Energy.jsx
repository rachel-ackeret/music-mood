import React from 'react'
import Slider from '@mui/material/Slider';

const Energy = ({ handleEnergySelection }) => {
  return (
    <Slider
      aria-label="Energy Today"
      defaultValue={50}
      color="secondary"
      onChange={(e) => handleEnergySelection(e.target.value)}
			max={1}
			min={0}
      step={.1}
    />
  )
}

export default Energy