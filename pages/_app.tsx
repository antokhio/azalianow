import '../styles/style.scss';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { makeStore, wrapper } from '../store';
import { Provider } from 'react-redux';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['cyrillic', 'cyrillic-ext'],
});

const App = ({ Component, pageProps }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(makeStore);

    return (
        <Provider store={store}>
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
        </Provider>
    );
};

export default App;
