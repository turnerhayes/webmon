import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { store } from './redux/store';

function renderApp() {
    render(
        (
            <Provider store={store}>
                <App></App>
            </Provider>
        ),
        document.getElementById('app')
    );
}

renderApp();

if ((module as any).hot) {
    (module as any).hot.accept('./components/App.tsx', () => renderApp());
}

if (process.env.NODE_ENV === 'production') {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("service-worker.js")
                .then((registration) => {
                    console.log("Service Worker registered: ", registration);
                })
                .catch((registrationError) => {
                    console.error("Service Worker registration failed: ", registrationError);
                });
        });
    }
}