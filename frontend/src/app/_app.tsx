"use client"; // Mark this component as a Client Component

import { Provider } from 'react-redux';
import { store } from '../redux/stores/store'; // Adjust the path as necessary
import '../styles/globals.css'; // Import your global styles
import type { AppProps } from 'next/app'; // Import AppProps from next/app

export default function App({ Component, pageProps }: AppProps) { // Use AppProps for typing
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
} 