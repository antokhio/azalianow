import React from 'react';
import Image from 'next/image';
import styles from './Hit.module.scss';

interface HitProps {}

export const Hit: React.FC<HitProps> = ({}) => {
    return <Image className={styles.Hit} alt='' src='/assets/hit.svg' width={64} height={24} />;
};
