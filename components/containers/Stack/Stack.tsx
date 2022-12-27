import React from 'react';
import styles from './Stack.module.scss';
interface StackProps {
    children?: React.ReactNode;
    direction?: 'horizontal' | 'vertical';
}

export const Stack: React.FC<StackProps> = ({ children, direction }) => {
    return <div className={styles.Stack}>{children}</div>;
};
