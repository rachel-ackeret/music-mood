import FlowContainer from "./components/FlowContainer";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white">
			<h1 className="fixed top-20 font-code">Music Mood</h1>
            <div className="flex flex-col items-center justify-center">
                <FlowContainer />
            </div>
            <p className="fixed bottom-0 font-code right-10 text-right">
				[ For Fun Project by <a href="https://github.com/rachel-ackeret">Rachel Ackeret ]</a>
			</p>
		</main>
	);
}
