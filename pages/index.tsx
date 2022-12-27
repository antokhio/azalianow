import Image from 'next/image';
import { Roboto } from '@next/font/google';
import styles from '../styles/Home.module.css';
import React from 'react';
import { api, Product as ProductProps, wrapper } from '../store';
import { Layout } from '../components/Layout';
import { productApi, useProductsQuery } from '../store';
import { NextPage } from 'next';
import { Head, Stack, Product } from '../components/containers';

const roboto_400 = Roboto({ weight: '400', variable: '--roboto:400' });
const roboto_500 = Roboto({ weight: '500', variable: '--roboto:500' });
const roboto_700 = Roboto({ weight: '700', variable: '--roboto:700' });

export const Home: NextPage<{ data: ProductProps[] }> = ({ data }) => {
    return (
        <Layout>
            <Stack>
                <Head />
                {data?.map((product) => (
                    <Product key={`product-${product.id}`} product={product} />
                ))}
            </Stack>
        </Layout>
    );
};

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
    const { data } = await store.dispatch(productApi.endpoints.products.initiate(undefined));

    return {
        props: {
            data,
        },
    };
});

export default Home;
