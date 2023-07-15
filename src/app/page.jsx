import CriteriaFlowBox from "./components/CriteriaFlowBox";

export default function Home() {
    {/* Rounded in and out modals that take you through:
    1. picking genre
    2. Choosing Energy
    3. Choosing Mood
    4. Loading screen
    5. New Results page: Different metric about the song in a slick control panel
    */}

	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-24">
			<h1>Music Mood</h1>
            <div className="flex min-h-screen flex-col items-center justify-center p-24">
                <CriteriaFlowBox />
            </div>
		</main>
	);
}
