import Image from 'next/image';

import styles from '../styles/Home.module.css';
import React from 'react';
import { api, Product as ProductProps, wrapper } from '../store';
import { Layout } from '../components/Layout';
import { productApi, useProductsQuery } from '../store';
import { NextPage } from 'next';
import { Head, Stack, Product } from '../components/containers';

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
