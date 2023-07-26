import React from 'react'
import Slider from '@mui/material/Slider';

const Mood = ({ handleMoodSelection }) => {
  return (
    <>
      <Slider
        aria-label="Mood Today"
        defaultValue={.5}
        color="secondary"
        onChange={(e) => handleMoodSelection(e.target.value)}
        max={1}
        min={0}
        step={.1}
      />
    </>
  )
}

export default Mood