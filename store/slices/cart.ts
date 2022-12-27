import { createSelector, createSlice, Middleware, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../.';
import { Product } from '../api';

type Cart = {
    ids: number[];
    products: Record<number, { product: Product; count: number }>;
};

const slice = createSlice({
    name: 'cart',
    initialState: {
        ids: [],
        products: {},
    } as Cart,
    reducers: {
        addCart: (state, { payload }: PayloadAction<{ product: Product; count: number }>) => {
            state.ids.push(payload.product.id);
            state.products[payload.product.id] = { product: payload.product, count: payload.count };
        },
        removeCart: (state, { payload }: PayloadAction<{ product: Product }>) => {
            state.ids = state.ids.filter((id) => id !== payload.product.id);
            delete state.products[payload.product.id];
        },
    },
});

export default slice.reducer;
export const { addCart, removeCart } = slice.actions;
export const isInCartSelector = createSelector(
    (state: RootState, id: number) => state.cart,
    (state: RootState, id: number) => id,
    (cart, id) => cart.ids.includes(id)
);
