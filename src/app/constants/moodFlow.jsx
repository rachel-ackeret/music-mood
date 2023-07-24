import React from 'react';
import Immutable from 'immutable';

export const moodFlows = {
    GENRE: "genre",
    ENERGY: "energy",
    MOOD: "mood",
    REVIEW: "review", 
    RESULTS: "results", 
};

const moodFlow = Immutable.Map({
    [moodFlows.GENRE]: {
        type: "Genre",
        title: "Pick a Genre",
        description: "Choose genres that you prefer to listen to, or leave this section blank and let us Spotify choose for you",
        buttonText: "Next",
    },
    [moodFlows.ENERGY]: {
        type: "Energy",
        title: "Pick an Energy",
        description: "Choose an energy level to match to your tracks",
        buttonText: "Next",
    },
    [moodFlows.MOOD]: {
        type: "Mood",
        title: "Pick a Mood",
        description: "Choose a mood to match to your tracks",
        buttonText: "Next",
    },
    [moodFlows.REVIEW]: {
        title: null,
        description: null,
        buttonText: "Load Results",
    },
    [moodFlows.RESULTS]: {
        title: "Results",
        description: null,
        buttonText: "Copy Track URL",
    },
    // { Artist: {
    //     title: "Pick a artist",
    //     description: "Choose a artist to start your journey",
    //     buttonText: "Next"
    // }}
});

export const moodFlowPhases = Immutable.List(Object.values(moodFlows));

export default moodFlow;