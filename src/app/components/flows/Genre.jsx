import React, { useEffect, useState } from "react";
import Select from 'react-select';

import { getGenreRecommendations } from "../../apis/spotify";

const getGenreDropdownOptions = (genres) => {
	return genres.map(genre => {
		return { value: genre, label: genre, key: genre };
	});
}

export default function Genre({ handleGenreSelection }) {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await getGenreRecommendations();
				setGenres(data.genres);
			  } catch (error) {
				console.error(error);
			  }
		})();
	}, []);

	return (
		<Select
			defaultValue={[]}
			isMulti
			name="genres"
			options={getGenreDropdownOptions(genres)}
			className="basic-multi-select text-zinc-900 my-5"
			classNamePrefix="select"
			onChange={(e) => handleGenreSelection(e.map((genre) => genre.value))}
		/>
	);
};

