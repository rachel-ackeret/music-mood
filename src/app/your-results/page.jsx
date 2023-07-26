import 'server-only';

import ResultTracksContainer from "src/app/components/ResultTracksContainer"
import { getApiTrackRecommendations } from "../api/spotify";

const Results = async (context) => {
  const savedUserChoices = Object.keys(context?.searchParams)[0];
  const parsedUserChoices = JSON.parse(savedUserChoices);
	const recommendedTracks = await getApiTrackRecommendations(parsedUserChoices);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white">
      <h1 className="fixed top-20 font-code">Music Mood</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-between">
          {recommendedTracks && <ResultTracksContainer recommendedTracks={recommendedTracks.tracks} />}
        </div>
        <p className="fixed bottom-0 font-code right-10 text-right">
          [ For Fun Project by <a href="https://github.com/rachel-ackeret">Rachel Ackeret ]</a>
        </p>
      </div>
    </main>
  )
}

export default Results