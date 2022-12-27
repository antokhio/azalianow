import React, { useState } from 'react';
import Image from 'next/image';
import {
    addCart,
    removeCart,
    isInCartSelector,
    Product,
    useTypedDispatch,
    useTypedSelector,
} from '../../../../store';
import styles from './Add.module.scss';
interface AddProps {
    product: Product;
}

export const Add: React.FC<AddProps> = ({ product }) => {
    const dispatch = useTypedDispatch();
    const isInCart = useTypedSelector((state) => isInCartSelector(state, product.id));

    const [count, setCount] = useState(1);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(Math.max(0, count - 1));

    const handleAdd = () => dispatch(addCart({ product, count }));
    const handleRemove = () => dispatch(removeCart({ product }));

    return (
        <div>
            {isInCart ? (
                <button className={`${styles.Button} ${styles.Button_Primary}`} onClick={handleRemove}>
                    В корзине
                </button>
            ) : (
                <div className={styles.Container}>
                    <button className={`${styles.Button} ${styles.Button_Secondary}`} onClick={handleAdd}>
                        В корзину
                    </button>
                    <button
                        className={`${styles.Button} ${styles.Button_Increment}`}
                        onClick={handleDecrement}
                    >
                        <Image src='/assets/minus.svg' alt='-' width={10} height={2} />
                    </button>
                    <span className={styles.Count}>{count}</span>
                    <button
                        className={`${styles.Button} ${styles.Button_Increment}`}
                        onClick={handleIncrement}
                    >
                        <Image src='/assets/plus.svg' alt='-' width={10} height={10} />
                    </button>
                </div>
            )}
        </div>
    );
};
