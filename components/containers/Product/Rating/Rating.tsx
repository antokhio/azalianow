import React, { useMemo } from 'react';
import { Product, Rating as RatingProps } from '../../../../store';
import styles from './Rating.module.scss';

interface RatingComponentProps {
    product: Product;
}

export const Rating: React.FC<RatingComponentProps> = ({ product }) => {
    const stars = useMemo(
        () => new Array(5).fill(false).map((_, i) => i < Math.round(product.rating.rate)),
        []
    );
    const verb = useMemo(
        () =>
            product.rating.count === 1
                ? 'Отзыв'
                : product.rating.count % 100 === 2 ||
                  product.rating.count % 100 === 3 ||
                  product.rating.count % 100 === 4
                ? 'Отзыва'
                : 'Отзывов',
        []
    );
    return (
        <div className={styles.Rating}>
            {stars.map((star, i) => (
                <span
                    key={`rating-${product.id}-${i}`}
                    className={star ? styles.Star : `${styles.Star} ${styles.Filled}`}
                />
            ))}
            <span>
                <a href='#'>{` ${product.rating.count} ${verb}`}</a>
            </span>
        </div>
    );
};

//{star ? '★' : '☆'}</span>
