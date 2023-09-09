import React from 'react';
import Immutable from 'immutable';

export const moodFlows = {
    WELCOME: "welcome",
    GENRE: "genre",
    ENERGY: "energy",
    MOOD: "mood",
    REVIEW: "review",
};

const moodFlow = Immutable.Map({
    [moodFlows.WELCOME]: {
        type: "Welcome",
        title: "Welcome to Music Mood",
        description: (<>Let us know how you&apos;re feeling today, and we&apos;ll match a couple songs that align with your mood and energy.
                    </>),
        buttonText: "Next",
    },
    [moodFlows.GENRE]: {
        type: "Genre",
        title: "Pick a Genre",
        description: "Choose genres that you prefer to listen to",
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
    // { Artist: {
    //     title: "Pick a artist",
    //     description: "Choose a artist to start your journey",
    //     buttonText: "Next"
    // }}
});

export const moodFlowPhases = Immutable.List(Object.values(moodFlows));

export default moodFlow;