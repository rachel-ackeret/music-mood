import 'server-only';

import ResultTracksContainer from "src/app/components/ResultTracksContainer"
import { getApiTrackRecommendations } from "../api/spotify";

const Results = async (context) => {
	const recommendedTracks = context.searchParams && await getApiTrackRecommendations(context.searchParams);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 p-10 bg-zinc-950 text-white">
      <h1 className="fixed top-20 font-code">Music Mood</h1>
      <div className="flex flex-col items-center justify-center">
        {recommendedTracks && <ResultTracksContainer recommendedTracks={recommendedTracks.tracks} />}
        <p className="fixed bottom-0 font-code right-10 text-right">
          [ Project by <a href="https://github.com/rachel-ackeret">Rachel Ackeret ]</a>
        </p>
      </div>
    </main>
  )
}

export default Results