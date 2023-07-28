'use client';

import React, { useState } from 'react'
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';

const ResultTracksContainer = ({ recommendedTracks }) => {
	const [currentTrack, setCurrentTrack] = useState(0);

    const trackId = new URL(recommendedTracks[currentTrack].external_urls.spotify).pathname
    const totalTracks = recommendedTracks.length;

    return (
        <div className="flex items-center md:justify-between md:flex-nowrap justify-center flex-wrap">
            {currentTrack !== 0 && (
                <BiLeftArrowCircle size={42} className="mr-3 cursor-pointer md:order-1 order-2" onClick={() => setCurrentTrack(currentTrack - 1)} />
            )}
            <iframe
                title="Spotify Web Player"
                className="br-12 order-1 mb-2 md:w-[600px] w-full"
                src={`https://open.spotify.com/embed${trackId}`}
                width=""
                height="352"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">    
            </iframe>
            {currentTrack !== (totalTracks - 1) &&
                <BiRightArrowCircle size={42} className="ml-3 cursor-pointer md:order-1 order-3" onClick={() => setCurrentTrack(currentTrack + 1)}
            />}
        </div>
    );
}

export default ResultTracksContainer