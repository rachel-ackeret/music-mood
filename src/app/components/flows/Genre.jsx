import React, { useEffect, useState } from "react";
import Select from 'react-select';

// TODO: either block moving to next step if no genre is selected or allow random selection of genre

const getGenreDropdownOptions = (genres) => {
	return genres.map(genre => {
		return { value: genre, label: genre, key: genre, id: genre };
	});
}

export default function Genre({ handleGenreSelection, genreRecommendations }) {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				setGenres(genreRecommendations.genres);
			  } catch (error) {
				console.error(error);
			  }
		})();
	}, [genreRecommendations]);

	return (
		<Select
			defaultValue={[]}
			isMulti
			name="genres"
			options={getGenreDropdownOptions(genres)}
			className="basic-multi-select text-zinc-900 my-5 text-left"
			classNamePrefix="select"
			onChange={(e) => handleGenreSelection(e.map((genre) => genre.value))}
		/>
	);
};

