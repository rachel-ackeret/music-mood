import React from 'react';
import Immutable from 'immutable';

const moodFlow = {
    Genre: {
        title: "Pick a Genre",
        description: "Choose a genre to start your journey",
        buttonText: "Next"
    },
    Energy: {
        title: "Pick an Energy",
        description: "Choose an energy level to start your journey",
        buttonText: "Next"
    },
    Mood: {
        title: "Pick a Mood",
        description: "Choose a mood to start your journey",
        buttonText: "Next"
    },
    Review: {
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

export const moodFlowPlacements = Immutable.List(Object.keys(moodFlow));

export default moodFlow;