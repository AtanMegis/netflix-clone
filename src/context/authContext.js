import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const authContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	const signUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			savedShows: [],
		});
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<authContext.Provider value={{ user, signUp, logIn, logOut }}>
			{children}
		</authContext.Provider>
	);
}

export function UserAuth() {
	return useContext(authContext);
}
