import { api } from './api';
import { RootState } from '..';

export type Rating = {
    rate: number;
    count: number;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};

export const productApi = api
    .enhanceEndpoints({
        addTagTypes: ['product'],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            products: builder.query<Product[], { limit?: number } | undefined>({
                query: (qs) => `/products?limit=${(qs && qs.limit) ?? 9}`,
                transformResponse: (result: Product[]) =>
                    result.map((product) => ({
                        ...product,
                        price: Math.round(product.price * process.env.NEXT_PUBLIC_RATE_USD * 10) / 10,
                    })),
            }),
        }),
    });

export const { useProductsQuery } = productApi;
