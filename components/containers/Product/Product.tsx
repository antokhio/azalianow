import Image from 'next/image';
import React from 'react';
import { Stack } from '..';
import { Product as ProductProps } from '../../../store';
import { Add } from './Add';
import { Hit } from './Hit';
import { Like } from './Like';

import styles from './Product.module.scss';
import { Rating } from './Rating';

interface ProductComponentProps {
    product: ProductProps;
}

export const Product: React.FC<ProductComponentProps> = ({ product }) => {
    return (
        <div className={styles.Product}>
            {product.rating.count > 300 && <Hit />}
            <Image
                src={product.image}
                alt={product.title}
                width={220}
                height={220}
                className={styles.Image}
            />

            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                className={styles.Category}
            >
                <p>{product.category}</p>
                <Rating rating={product.rating} />
            </div>

            <p className={styles.Description}>{product.description}</p>
            <div className={styles.Price}>
                <span>{`${product.price} ₽`}</span>
                /шт.
            </div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Add product={product} />
                <Like />
            </div>
            {/* </Stack> */}
        </div>
    );
};
