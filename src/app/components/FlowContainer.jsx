'use client';
import React, { useState } from "react";

import FlowPhase from "./FlowPhase";
import moodFlow, { moodFlowPhases } from "../constants/moodFlow"

const FlowContainer = ({ children }) => {
	// Maybe use react context here?
	const [queuePosition, setQueuePosition] = useState(0);

	const onNext = () => {
		if (queuePosition < moodFlowPhases.size - 1) {
			setQueuePosition(queuePosition + 1);
		}
	};
	console.log('moodFlowPhases', moodFlowPhases)
	const moodFlowPhase = moodFlowPhases.get(queuePosition);
	console.log('moodFlowPhase', moodFlowPhase)
	const content = moodFlow[moodFlowPhase];
	console.log('content', content)

	return (
		<div className="bg-zinc-900 min-h-[150px] rounded-lg block drop-shadow-lg p-9 flex flex-col">
			<p>{content.title}</p>
			<p>{content.description}</p>
			<FlowPhase currentPlacement={moodFlowPhase} />
			<button 
				className="border-solid rounded-xl border-2 border-green-500 my-3"
				onClick={onNext}
			>
				{content.buttonText}
			</button>
		</div>
	);
};

export default FlowContainer;
