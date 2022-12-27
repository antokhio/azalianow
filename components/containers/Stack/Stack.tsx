import React from 'react';
import styles from './Stack.module.scss';
interface StackProps {
    children?: React.ReactNode;
}

export const Stack: React.FC<StackProps> = ({ children }) => {
    return <div className={styles.Stack}>{children}</div>;
};
