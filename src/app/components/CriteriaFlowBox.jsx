'use client';
import React, { useState } from "react";

import moodFlow, { moodFlowPlacements } from "../constants/moodFlow"

const OptionPicker = () => {
	const [queuePosition, setQueuePosition] = useState(0);

	const onNext = () => {
		setQueuePosition(queuePosition + 1);
	};

	const content = moodFlow[moodFlowPlacements.get(queuePosition)];

	return (
		<div className="bg-zinc-900 min-h-[150px] rounded-lg block drop-shadow-lg p-9 flex flex-col">
			<p>{content.title}</p>
			<p>{content.description}</p>
			<button 
				className="border-solid rounded-xl border-2 border-green-500 my-3"
				onClick={onNext}
			>
				{content.buttonText || "..."}
			</button>
		</div>
	);
};

OptionPicker.propTypes = {};

export default OptionPicker;
