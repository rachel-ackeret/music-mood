import React from 'react'
import moodFlow, { moodFlowPhases } from '../../constants/moodFlow'

const Review = ({ savedUserChoices }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Review your choices</h2>
      {Object.keys(savedUserChoices).map((choice) => {
        return (
          <div className="flex justify-between max-w-[500px] mx-auto mb-2" key={choice}>
            <p>{moodFlow.get(choice).type + ": "}</p>
            <p>{(savedUserChoices[choice] * 100) + "%"}</p>
          </div>
        );
      })}
    </>
  )
}

export default Review