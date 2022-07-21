import { createContext, useContext, useState, useEffect } from 'react';

const authContext = createContext();

export function authContextProvider({ children }) {
	return <authContext.Provider>{children}</authContext.Provider>;
}

export function UserAuth() {
	return useContext(authContext);
}
