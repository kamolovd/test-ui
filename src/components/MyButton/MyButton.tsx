import React, {FC} from 'react';

export interface MyButtonInterface {
    color: string;
    children: React.ReactNode,
    variant: 'small' | 'big',
}

export const MyButton: FC<MyButtonInterface> = ({variant,children, color, ...props}) => {
    return (
        <button style={{color, width: variant === "small" ? '10%' : '20%', padding: variant === "small" ? '8px' : '16px'}} {...props}>
            {children}
        </button>
    )
}
