import React from "react";
import { getGenreRecommendations } from "../apis/spotify";
import { moodFlowPhases } from "../constants/moodFlow"

const getGenreData = async () => {
	const data = await getGenreRecommendations();
	return data;
}

const renderGenrePhase = () => {
	const data = getGenreData();
	return (
		<>
			{data}
		</>
	);
};

const renderEnergyPhase = () => {
	return (
		<>
			energy
		</>
	);
};

const renderMoodPhase = () => {
	return (
		<>
			mood
		</>
	);
};

const renderReviewPhase = () => {
	return (
		<>
			review
		</>
	);
};

export default function FlowPhase({ currentPlacement }) {
	let content;
	console.log('currentPlacement', currentPlacement)
	if (currentPlacement === moodFlowPhases.GENRE) {
		content = renderGenrePhase();
	}
	if (currentPlacement === moodFlowPhases.ENERGY) {
		content = renderEnergyPhase();
	}
	if (currentPlacement === moodFlowPhases.MOOD) {
		content = renderMoodPhase();
	}
	if (currentPlacement === moodFlowPhases.REVIEW) {
		content = renderReviewPhase();
	}
	return (
		<>
			{content}
		</>
	);
};

