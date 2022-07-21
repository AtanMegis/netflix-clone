import { initializeApp } from 'firebase/app';
import { getAuth } from '/firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyDcwJSvUBUpRikxf-TB7tQwcDq5Mc1cFus
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-react-2e8a8.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-react-2e8a8
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-2e8a8.appspot.com
// REACT_APP_MESSAGING_SENDER=678539042855
// REACT_APP_APP_ID=1:678539042855:web:3af80a95cba32ec2c02e02
// REACT_APP_MEASUREMENT_ID=G-9HPGRZYV08

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
