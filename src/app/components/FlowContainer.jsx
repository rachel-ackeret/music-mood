'use client';
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { encodeQueryParams } from "../utils/urls";

import moodFlow, { moodFlows, moodFlowPhases } from "../constants/moodFlow"

import { Genre, Mood, Energy, Review } from "./flows";

const FlowContainer = ({ genreRecommendations }) => {
	const router = useRouter()
	const [queuePosition, setQueuePosition] = useState(0);
	const [savedUserChoices, setSavedUserChoices] = useState({});

	const currentPlacement = moodFlowPhases.get(queuePosition);

	const onNext = () => {
		if (queuePosition < moodFlowPhases.size - 1) {
			setQueuePosition(queuePosition + 1);
		} else if (currentPlacement === moodFlows.REVIEW) {
			loadResults(savedUserChoices);
		}
	};

	const onBack = () => {
		if (queuePosition > 0) {
			setQueuePosition(queuePosition - 1);
		}
	};

	const handleChoiceSelection = (selectedOptions) => {
		setSavedUserChoices({ ...savedUserChoices, [currentPlacement]: selectedOptions });
	};

	const placementContent = moodFlow.get(currentPlacement);

	let content;
	if (currentPlacement === moodFlows.GENRE) {
		content = <Genre handleGenreSelection={handleChoiceSelection} genreRecommendations={genreRecommendations} />;
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
				{(queuePosition < moodFlowPhases.size - 1) ? (
					<button 
						className="border-solid rounded-xl border-2 border-green-500 my-3 h-[36px] w-[150px] hover:bg-green-500 mr-0 ml-auto"
						onClick={onNext}
					>
						{placementContent.buttonText}
					</button>
				) : (
					<Link 
						href={{
							pathname: "/your-results/",
							query: encodeQueryParams(savedUserChoices)
						}} 
						className="border-solid rounded-xl border-2 border-green-500 my-3 h-[36px] w-[150px] hover:bg-green-500 mr-0 ml-auto flex justify-center items-center"
					>
						Get Your Results
					</Link>
				)
				}
			</div>
		</div>
	);
};

export default FlowContainer;
