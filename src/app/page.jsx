import 'server-only';

import FlowContainer from "./components/FlowContainer";
import { getApiGenreRecommendations } from "./api/spotify";

const genreRecommendations = await getApiGenreRecommendations();

export default function Home() {
	return (
		<main className="min-h-screen py-24 bg-zinc-950 text-white flex flex-col items-stretch relative justify-center">
			<h1 className="absolute top-10 w-full font-code block text-center mb-5">Music Mood</h1>
            <div className="h-full flex flex-col items-center justify-center sm:mx-20 mx-5">
                <FlowContainer genreRecommendations={genreRecommendations} getPosition/>
            </div>
            <p className="fixed bottom-0 md:mb-1 md:right-5 font-code md:right-10 md:text-right md:w-auto text-center w-full">
				[ For Fun Project by <a href="https://github.com/rachel-ackeret">Rachel Ackeret ]</a>
			</p>
		</main>
	);
}
