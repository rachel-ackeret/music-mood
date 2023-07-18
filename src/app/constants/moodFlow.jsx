import React from 'react';
import Immutable from 'immutable';

export const moodFlows = {
    GENRE: "genre",
    ENERGY: "energy",
    MOOD: "mood",
    REVIEW: "review", 
};

const moodFlow = Immutable.Map({
    [moodFlows.GENRE]: {
        title: "Pick a Genre",
        description: "Choose a genre to start your journey",
        buttonText: "Next",
    },
    [moodFlows.ENERGY]: {
        title: "Pick an Energy",
        description: "Choose an energy level to start your journey",
        buttonText: "Next"
    },
    [moodFlows.MOOD]: {
        title: "Pick a Mood",
        description: "Choose a mood to start your journey",
        buttonText: "Next"
    },
    [moodFlows.REVIEW]: {
        title: "Review your choices",
        description: "etc",
        buttonText: "Load Results"
    },
    // { Tempo: {
    //     title: "Pick a Tempo",
    //     description: "Choose a tempo to start your journey",
    //     buttonText: "Next"
    // }}
});

export const moodFlowPhases = Immutable.List(Object.values(moodFlows));

export default moodFlow;