import { getAnalytics, initializeAnalytics, logEvent, setAnalyticsCollectionEnabled } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJX8_5-BRloYkfyul3jJKy51B1o93b--A",
  authDomain: "worldschool-4a032.firebaseapp.com",
  projectId: "worldschool-4a032",
  storageBucket: "worldschool-4a032.appspot.com",
  messagingSenderId: "754499439952",
  appId: "1:754499439952:web:b9b593c868c91703f13055",
  measurementId: "G-XV4VK022HR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const setUpAnalytics = () => {
  const analyticsInstance = getAnalytics();
  if (analyticsInstance) {
    setAnalyticsCollectionEnabled(analyticsInstance, true);
  }
  return initializeAnalytics(app);
};

export const analytics = () => {
  if (typeof window !== "undefined") {
    return getAnalytics(app);
  } else {
    return null;
  }
};

export const captureEvent = (eventName: string) => {
  const analyticsInstance = getAnalytics();
  if (analyticsInstance) {
    setAnalyticsCollectionEnabled(analyticsInstance, true);
    logEvent(analyticsInstance, eventName);
  }
};
