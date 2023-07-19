import React from 'react'
import moodFlow, { moodFlowPhases } from '../../constants/moodFlow'

const Review = ({ savedUserChoices }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Review your choices</h2>
      {moodFlowPhases.map((flowPhase) => {
        return (
          <p key={flowPhase}>
            {moodFlow.get(flowPhase).type + ": " + savedUserChoices[flowPhase]}
          </p>
        );
      })}
    </>
  )
}

export default Review