import Image from 'next/image';
import React from 'react';
import styles from './Head.module.scss';

interface HeadProps {}

export const Head: React.FC<HeadProps> = ({}) => {
    return (
        <div className={styles.Head}>
            <h3>Всё для комфортной работы</h3>
            <Image src='/assets/arrow.svg' alt='' width={40} height={12} />

            <Image className={styles.Banner} src='/assets/banner1.svg' alt='' width={332} height={140} />
            <Image className={styles.Banner} src='/assets/banner2.svg' alt='' width={332} height={140} />
        </div>
    );
};
