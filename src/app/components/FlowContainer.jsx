'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

import { getTrackRecommendations } from "../apis/spotify";
import moodFlow, { moodFlows, moodFlowPhases } from "../constants/moodFlow"

import { Genre, Mood, Energy, Review } from "./flows";

const FlowContainer = ({ children }) => {
	const router = useRouter()
	// Maybe use react context here?
	const [queuePosition, setQueuePosition] = useState(0);
	const [savedUserChoices, setSavedUserChoices] = useState({});

	const currentPlacement = moodFlowPhases.get(queuePosition);

	const onNext = () => {
		if (queuePosition < moodFlowPhases.size - 1) {
			setQueuePosition(queuePosition + 1);
		} else if (queuePosition === moodFlowPhases.size - 1) {
			loadResults(savedUserChoices);
		}
	};

	const onBack = () => {
		if (queuePosition > 0) {
			setQueuePosition(queuePosition - 1);
		}
	};

	const handleChoiceSelection = (selectedOptions) => {
		console.log('selectedOptions', selectedOptions)
		setSavedUserChoices({ ...savedUserChoices, [currentPlacement]: selectedOptions });
	};

	const loadResults = (savedUserChoices) => {
		console.log("Loading results with saved user choices: ", savedUserChoices);
		// getTrackRecommendations(savedUserChoices)
		router.push('/your-results')
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
		content = <Review savedUserChoices={savedUserChoices} />;
	}

	return (
		<div className="bg-zinc-800 min-h-[150px] rounded-lg block drop-shadow-lg p-9 pb-2 flex flex-col w-[650px]">
			<div className="flow-content-container text-center">
				<h2 className="text-2xl font-bold mb-5">{placementContent?.title}</h2>
				<p className="mb-5">{placementContent?.description}</p>
				{content}
			</div>
			<div className="flex justify-between mt-5">
				{queuePosition > 0 && 
					<button 
						className="border-solid rounded-xl border-2 border-yellow-500 my-3 h-[36px] w-[150px] hover:bg-yellow-500"
						onClick={onBack}
					>
						Back
					</button>
				}
				<button 
					className="border-solid rounded-xl border-2 border-green-500 my-3 h-[36px] w-[150px] hover:bg-green-500 mr-0 ml-auto"
					onClick={onNext}
				>
					{placementContent.buttonText}
				</button>
			</div>
		</div>
	);
};

export default FlowContainer;
