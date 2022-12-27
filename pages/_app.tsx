import '../styles/style.scss';
import type { AppProps } from 'next/app';

import { makeStore, wrapper } from '../store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(makeStore);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
