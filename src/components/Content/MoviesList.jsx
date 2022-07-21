import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { db } from '../../config/firebase';
import { UserAuth } from '../../context/authContext';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const MoviesList = ({ movie }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);
	const { user } = UserAuth();

	const movieID = doc(db, 'users', `${user?.email}`);

	const saveShow = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: movie.id,
					title: movie.title,
					img: movie.backdrop_path,
				}),
			});
		} else {
			alert('Please Log In First to Set a movie');
		}
	};

	return (
		<>
			<div className="w-[160px] sm:w-[120px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
				<img
					className="w-full h-auto block"
					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
					alt={movie?.title}
					key={movie.id}
					id={movie.id}
				/>
				<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white">
					<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
						{movie?.title}
					</p>
					<p onClick={saveShow}>
						{like && saved ? (
							<FaHeart className="absolute top-4 left-4 text-gray-300" />
						) : (
							<FaRegHeart className="absolute top-4 left-4 text-gray-300" />
						)}
					</p>
				</div>
			</div>
		</>
	);
};

export default MoviesList;
