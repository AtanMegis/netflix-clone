import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const Login = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const { logIn } = UserAuth();
	const navigate = useNavigate();
	const [errorMsg, setErrorMsg] = useState(null);

	const submitHandler = async (e) => {
		e.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		try {
			await logIn(enteredEmail, enteredPassword);
			// const response = logIn(enteredEmail, enteredPassword);
			// console.log(response);

			navigate('/');
		} catch (error) {
			console.log({ error });
			setErrorMsg(error.message);
		}
	};

	return (
		<>
			<div className="w-full h-screen">
				<img
					className="hidden sm:block absolute w-full h-full object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
					alt="/"
				/>
				<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
				<div className="fixed w-full px-4 py-24 z-50">
					<div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
						<div className="max-w-[320px] mx-auto py-16">
							<h1 className="text-3xl font-bold">
								Sign In
							</h1>
							{errorMsg && (
								<p className="p-3 bg-red-400 my-2">
									{errorMsg}
								</p>
							)}
							<form
								onSubmit={submitHandler}
								className="w-full flex flex-col py-4"
							>
								<input
									ref={emailInputRef}
									className="p-3 my-2 bg-gray-700 rouded"
									type="email"
									placeholder="Email"
									autoComplete="email"
								/>
								<input
									ref={passwordInputRef}
									className="p-3 my-2 bg-gray-700 rouded"
									type="password"
									placeholder="Password"
									autoComplete="current-password"
								/>
								<button className="bg-red-600 py-3 my-6 rounded font-bold">
									Sign In
								</button>
								<div className="flex justify-between items-center text-sm text-gray-400">
									<p>
										<input
											className="mr-2"
											type="checkbox"
										/>
										Remember Me
									</p>
									<p>Need Help?</p>
								</div>
								<p className="py-8">
									<span className="text-gray-400 ">
										New to Netflix ?
									</span>
									<Link to="/signup"> Sign Up</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
