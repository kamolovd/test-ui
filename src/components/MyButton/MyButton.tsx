import React, {FC} from 'react';
import styles from './MyButton.module.scss';

export interface MyButtonInterface {
    color: string;
    children: React.ReactNode,
    variant: 'small' | 'big',
}

export const MyButton: FC<MyButtonInterface> = ({variant,children, color, ...props}) => {
    return (
        <button className={styles.color} style={{color, width: variant === "small" ? '10%' : '20%', padding: variant === "small" ? '8px' : '16px'}} {...props}>
            {children}
        </button>
    )
}
