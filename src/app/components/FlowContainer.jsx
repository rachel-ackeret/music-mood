'use client';
import React, { useState } from "react";

import { Genre, Mood, Energy, Review } from "./flows";
import moodFlow, { moodFlows, moodFlowPhases } from "../constants/moodFlow"

const FlowContainer = ({ children }) => {
	// Maybe use react context here?
	const [queuePosition, setQueuePosition] = useState(0);
	const [selectedChoices, setSelectedChoices] = useState([]);
	const [savedUserChoices, setSavedUserChoices] = useState({});

	const currentPlacement = moodFlowPhases.get(queuePosition);
	const onNext = () => {
		if (queuePosition < moodFlowPhases.size - 1) {
			setQueuePosition(queuePosition + 1);
			setSavedUserChoices({ ...savedUserChoices, [currentPlacement]: selectedChoices });
		}
	};
	const onBack = () => {
		if (queuePosition > 0) {
			setQueuePosition(queuePosition - 1);
		}
	};

	const handleChoiceSelection = (selectedOptions) => {
		setSelectedChoices(selectedOptions);
	};

	const placementContent = moodFlow.get(currentPlacement);

	let content;
	if (currentPlacement === moodFlows.GENRE) {
		content = <Genre handleGenreSelection={handleChoiceSelection} />;
	}
	if (currentPlacement === moodFlows.ENERGY) {
		content = <Energy handleEnergySelection={handleChoiceSelection} />;
	}
	if (currentPlacement === moodFlows.MOOD) {
		content = <Mood handleMoodSelection={handleChoiceSelection} />;
	}
	if (currentPlacement === moodFlows.REVIEW) {
		content = <Review />;
	}

	return (
		<div className="bg-zinc-900 min-h-[150px] rounded-lg block drop-shadow-lg p-9 flex flex-col w-[650px]">
			<p>{placementContent.title}</p>
			<p>{placementContent.description}</p>
			{content}
			{queuePosition > 0 && 
				<button 
					className="border-solid rounded-xl border-2 border-green-500 my-3 h-[36px] w-[150px] ml-auto hover:bg-green-500"
					onClick={onBack}
				>
					Back
				</button>
			}
			<button 
				className="border-solid rounded-xl border-2 border-green-500 my-3 h-[36px] w-[150px] ml-auto hover:bg-green-500"
				onClick={onNext}
			>
				{placementContent.buttonText}
			</button>
		</div>
	);
};

export default FlowContainer;
