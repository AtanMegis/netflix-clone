import React from 'react';
import Movies from '../../components/Content/Movies';
import MoviesRow from '../../components/Content/MoviesRow';
import requestsAPI from '../../helper/requestAPI';

const Home = () => {
	return (
		<>
			<Movies />
			<MoviesRow
				rowID="1"
				title="Up Coming"
				url={requestsAPI.requestUpcoming}
			/>
			<MoviesRow
				rowID="2"
				title="Popular"
				url={requestsAPI.requestPopular}
			/>
			<MoviesRow
				rowID="3"
				title="Trending"
				url={requestsAPI.requestTrending}
			/>
			<MoviesRow
				rowID="4"
				title="Top Rated"
				url={requestsAPI.requestTopRated}
			/>
			<MoviesRow
				rowID="5"
				title="Horror"
				url={requestsAPI.requestHorror}
			/>
		</>
	);
};

export default Home;
