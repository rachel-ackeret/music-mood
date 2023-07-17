import React from 'react';
import Immutable from 'immutable';

export const moodFlowPhases = Immutable.Map({
    GENRE: "Genre",
    ENERGY: "Energy",
    MOOD: "Mood",
    REVIEW: "Review",
});

const moodFlow = {
    [moodFlowPhases.GENRE]: {
        title: "Pick a Genre",
        description: "Choose a genre to start your journey",
        buttonText: "Next",
    },
    [moodFlowPhases.ENERGY]: {
        title: "Pick an Energy",
        description: "Choose an energy level to start your journey",
        buttonText: "Next"
    },
    [moodFlowPhases.MOOD]: {
        title: "Pick a Mood",
        description: "Choose a mood to start your journey",
        buttonText: "Next"
    },
    [moodFlowPhases.REVIEW]: {
        title: "Review your choices",
        description: "etc",
        buttonText: "Load Results"
    },
    // { Tempo: {
    //     title: "Pick a Tempo",
    //     description: "Choose a tempo to start your journey",
    //     buttonText: "Next"
    // }}
};

export default moodFlow;