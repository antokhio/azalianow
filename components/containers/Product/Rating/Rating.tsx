import React, { useMemo } from 'react';
import { Rating as RatingProps } from '../../../../store';
import styles from './Rating.module.scss';

interface RatingComponentProps {
    rating: RatingProps;
}

export const Rating: React.FC<RatingComponentProps> = ({ rating }) => {
    const stars = useMemo(() => new Array(5).fill(false).map((_, i) => i < Math.round(rating.rate)), []);
    const verb = useMemo(
        () =>
            rating.count === 1
                ? 'Отзыв'
                : rating.count % 100 === 2 || rating.count % 100 === 3 || rating.count % 100 === 4
                ? 'Отзыва'
                : 'Отзывов',
        []
    );
    return (
        <div className={styles.Rating}>
            {stars.map((star) => (
                <span className={star ? styles.Star : `${styles.Star} ${styles.Filled}`} />
            ))}
            <span>
                <a href='#'>{` ${rating.count} ${verb}`}</a>
            </span>
        </div>
    );
};

//{star ? '★' : '☆'}</span>
