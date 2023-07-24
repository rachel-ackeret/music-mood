import FlowContainer from "./components/FlowContainer";

export default function Home() {
    {/* Rounded in and out modals that take you through:
    1. picking genre
    2. Choosing Energy
    3. Choosing Mood
    4. Loading screen
    5. New Results page: Different metric about the song in a slick control panel
    */}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white">
			<h1 className="fixed top-20">Music Mood</h1>
            <div className="flex flex-col items-center justify-center">
                <FlowContainer />
            </div>
		</main>
	);
}
